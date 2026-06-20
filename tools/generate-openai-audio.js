const fs = require("fs");
const path = require("path");

global.window = {};
require(path.join(__dirname, "..", "data", "cards.js"));
require(path.join(__dirname, "..", "data", "extra-dialogues.js"));

const API_URL = "https://api.openai.com/v1/audio/speech";
const DEFAULT_MODEL = "gpt-4o-mini-tts";
const OUTPUT_DIR = path.join(__dirname, "..", "audio-natural");
const SILENCE_MS = 420;
const ROOT_DIR = path.join(__dirname, "..");

const VOICES = {
  you: "cedar",
  defaultFemale: ["marin", "coral", "nova", "shimmer"],
  defaultMale: ["onyx", "echo", "ash", "verse"],
  byCard: {
    "001": { voice: "marin", profile: "a calm adult female immigration officer with a firm but professional tone" },
    "002": { voice: "echo", profile: "a practical adult male airport baggage staff member who sounds helpful but busy" },
    "003": { voice: "onyx", profile: "an older male customs officer with a measured, official tone" },
    "004": { voice: "coral", profile: "a friendly adult female airport information staff member who gives clear directions" },
    "005": { voice: "nova", profile: "a young adult female cashier with a casual, upbeat checkout rhythm" },
    "006": { voice: "ash", profile: "an adult male bus driver with a quick but clear Boston transit rhythm" },
    "007": { voice: "verse", profile: "an adult male station staff member who sounds direct and used to giving directions" },
    "008": { voice: "echo", profile: "an adult male rideshare driver with a relaxed, everyday tone" },
    "009": { voice: "shimmer", profile: "an older female host with a warm and practical check-in tone" },
    "010": { voice: "nova", profile: "a young adult roommate with a casual and friendly housemate tone" }
  }
};

const args = parseArgs(process.argv.slice(2));
loadEnvFile(path.join(ROOT_DIR, ".env"));
const apiKey = process.env.OPENAI_API_KEY;

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});

async function main() {
  if (!apiKey && !args.dryRun) {
    throw new Error("OPENAI_API_KEY is not set. Set it as an environment variable before generating audio.");
  }

  const jobs = getJobs();
  if (!jobs.length) {
    throw new Error("No matching scripted card or dialogue found.");
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const estimate = jobs.reduce((sum, job) => sum + getDialogueText(job.version).length, 0);
  console.log(`Selected ${jobs.length} audio file(s), about ${estimate.toLocaleString()} characters total.`);

  if (args.dryRun) {
    for (const job of jobs) {
      console.log(
        `[dry-run] ${job.outputFile} (${getDialogueText(job.version).length} chars, voices: ${getVoiceSummary(job)})`
      );
    }
    return;
  }

  for (const job of jobs) {
    if (fs.existsSync(job.outputPath) && !args.force) {
      console.log(`Skipped ${job.outputFile} (already exists; use --force to regenerate)`);
      continue;
    }

    console.log(`Creating ${job.outputFile}...`);
    const wavs = [];

    for (let index = 0; index < job.version.lines.length; index += 1) {
      const line = job.version.lines[index];
      const voice = pickVoice(line.speaker, job.card, index);
      const instructions = buildInstructions(line.speaker, job.card, job.version);
      const wav = await createSpeech(line.text, voice, instructions);
      wavs.push(parseWav(wav));
    }

    const combined = combineWavs(wavs, SILENCE_MS, job.version.lines);
    fs.writeFileSync(job.outputPath, combined.buffer);
    fs.writeFileSync(getManifestPath(job.outputPath), JSON.stringify(combined.manifest, null, 2));
    console.log(`Saved ${job.outputFile}`);
  }

  writeManifestIndex();
}

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  }
}

function parseArgs(rawArgs) {
  const result = {
    card: null,
    version: null,
    all: false,
    force: false,
    dryRun: false
  };

  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];
    if (arg === "--all") result.all = true;
    else if (arg === "--force") result.force = true;
    else if (arg === "--dry-run") result.dryRun = true;
    else if (arg === "--card") result.card = String(rawArgs[++i] || "").padStart(3, "0");
    else if (arg === "--version") result.version = String(rawArgs[++i] || "");
    else if (arg === "--help") {
      printHelp();
      process.exit(0);
    }
  }

  return result;
}

function printHelp() {
  console.log(`
Usage:
  node tools/generate-openai-audio.js
  node tools/generate-openai-audio.js --card 001 --version 1 --force
  node tools/generate-openai-audio.js --card 001 --all
  node tools/generate-openai-audio.js --all
  node tools/generate-openai-audio.js --all --dry-run

Defaults to card 001, first dialogue.
`);
}

function getJobs() {
  const cards = window.ROLEPLAY_CARDS.filter((card) => card.status === "scripted");
  const selectedCardId = args.card || "001";
  const selectedVersion = args.version || "1";
  const selectedCards = args.all && !args.card ? cards : cards.filter((card) => card.id === selectedCardId);
  const jobs = [];

  for (const card of selectedCards) {
    for (let index = 0; index < card.versions.length; index += 1) {
      const versionNumber = String(index + 1);
      if (!args.all && versionNumber !== selectedVersion) continue;

      const outputFile =
        card.versions.length === 1 ? `card-${card.id}-main.wav` : `card-${card.id}-v${versionNumber}.wav`;
      jobs.push({
        card,
        version: card.versions[index],
        outputFile,
        outputPath: path.join(OUTPUT_DIR, outputFile)
      });
    }
  }

  return jobs;
}

function getDialogueText(version) {
  return version.lines.map((line) => line.text).join(" ");
}

function getManifestPath(outputPath) {
  return outputPath.replace(/\.wav$/i, ".json");
}

function writeManifestIndex() {
  const manifests = {};

  for (const fileName of fs.readdirSync(OUTPUT_DIR)) {
    if (!fileName.endsWith(".json")) continue;

    const jsonPath = path.join(OUTPUT_DIR, fileName);
    const wavFileName = fileName.replace(/\.json$/i, ".wav");
    const key = `audio-natural/${wavFileName}`;
    manifests[key] = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  }

  const js = `window.ROLEPLAY_AUDIO_MANIFESTS = ${JSON.stringify(manifests, null, 2)};\n`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "manifests.js"), js);
  console.log("Updated audio-natural/manifests.js");
}

function getVoiceSummary(job) {
  const summary = new Map();

  for (let index = 0; index < job.version.lines.length; index += 1) {
    const line = job.version.lines[index];
    summary.set(line.speaker, pickVoice(line.speaker, job.card, index));
  }

  return Array.from(summary.entries())
    .map(([speaker, voice]) => `${speaker}=${voice}`)
    .join(", ");
}

function pickVoice(speaker, card, lineIndex) {
  if (speaker === "You") {
    return VOICES.you;
  }

  if (VOICES.byCard[card.id]) {
    return VOICES.byCard[card.id].voice;
  }

  const cardNumber = Number(card.id);
  const pool = cardNumber % 2 === 0 ? VOICES.defaultMale : VOICES.defaultFemale;
  return pool[lineIndex % pool.length];
}

function buildInstructions(speaker, card, version) {
  const base =
    "Speak in natural, modern American English with a realistic conversational rhythm. Keep it relaxed and human, not like narration. Do not add, skip, or change any words.";

  if (speaker === "You") {
    return `${base} You are an adult male international PhD student who is tired but focused, polite, and trying to sound clear.`;
  }

  const assignedProfile = VOICES.byCard[card.id]?.profile;
  const profile = assignedProfile || `the ${speaker} in a Boston daily-life roleplay`;

  return `${base} You are ${profile}. Location: ${card.place}. Situation: ${card.situation}. Dialogue tone: ${version.title}.`;
}

async function createSpeech(input, voice, instructions) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_TTS_MODEL || DEFAULT_MODEL,
      voice,
      input,
      instructions,
      response_format: "wav",
      speed: 1.03
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`OpenAI TTS request failed (${response.status}): ${message}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

function parseWav(buffer) {
  if (buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WAVE") {
    throw new Error("OpenAI returned audio that is not a RIFF/WAVE file.");
  }

  let offset = 12;
  let fmt = null;
  let data = null;

  while (offset + 8 <= buffer.length) {
    const id = buffer.toString("ascii", offset, offset + 4);
    const size = buffer.readUInt32LE(offset + 4);
    const start = offset + 8;
    const end = start + size;

    if (id === "fmt ") fmt = buffer.subarray(start, end);
    if (id === "data") data = buffer.subarray(start, end);

    offset = end + (size % 2);
  }

  if (!fmt || !data) {
    throw new Error("WAV file is missing a fmt or data chunk.");
  }

  return {
    fmt,
    data,
    audioFormat: fmt.readUInt16LE(0),
    channels: fmt.readUInt16LE(2),
    sampleRate: fmt.readUInt32LE(4),
    byteRate: fmt.readUInt32LE(8),
    blockAlign: fmt.readUInt16LE(12),
    bitsPerSample: fmt.readUInt16LE(14)
  };
}

function combineWavs(wavs, silenceMs, lines) {
  if (!wavs.length) {
    throw new Error("No WAV chunks to combine.");
  }

  const first = wavs[0];
  for (const wav of wavs) {
    const matches =
      wav.audioFormat === first.audioFormat &&
      wav.channels === first.channels &&
      wav.sampleRate === first.sampleRate &&
      wav.byteRate === first.byteRate &&
      wav.blockAlign === first.blockAlign &&
      wav.bitsPerSample === first.bitsPerSample &&
      wav.fmt.equals(first.fmt);

    if (!matches) {
      throw new Error("Generated WAV chunks have different formats and cannot be combined safely.");
    }
  }

  const silenceBytes = Math.round((first.byteRate * silenceMs) / 1000 / first.blockAlign) * first.blockAlign;
  const silence = Buffer.alloc(silenceBytes);
  const chunks = [];
  const segments = [];
  let cursor = 0;

  wavs.forEach((wav, index) => {
    const duration = wav.data.length / first.byteRate;
    segments.push({
      index,
      speaker: lines[index]?.speaker || "",
      text: lines[index]?.text || "",
      start: Number(cursor.toFixed(3)),
      end: Number((cursor + duration).toFixed(3))
    });

    chunks.push(wav.data);
    cursor += duration;

    if (index < wavs.length - 1) {
      chunks.push(silence);
      cursor += silenceMs / 1000;
    }
  });

  const data = Buffer.concat(chunks);
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + data.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(first.audioFormat, 20);
  header.writeUInt16LE(first.channels, 22);
  header.writeUInt32LE(first.sampleRate, 24);
  header.writeUInt32LE(first.byteRate, 28);
  header.writeUInt16LE(first.blockAlign, 32);
  header.writeUInt16LE(first.bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(data.length, 40);

  return {
    buffer: Buffer.concat([header, data]),
    manifest: {
      version: 1,
      silenceMs,
      sampleRate: first.sampleRate,
      duration: Number((data.length / first.byteRate).toFixed(3)),
      segments
    }
  };
}
