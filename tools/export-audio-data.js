const path = require("path");

global.window = {};
require(path.join(__dirname, "..", "data", "cards.js"));
require(path.join(__dirname, "..", "data", "extra-dialogues.js"));

const cards = (window.ROLEPLAY_CARDS || [])
  .filter((card) => card.status === "scripted" && Array.isArray(card.versions))
  .map((card) => ({
    id: card.id,
    place: card.place,
    versions: card.versions.map((version, index) => ({
      index: index + 1,
      title: version.title,
      fileName: card.versions.length === 1 ? `card-${card.id}-main.wav` : `card-${card.id}-v${index + 1}.wav`,
      lines: version.lines.map((line) => ({
        speaker: line.speaker,
        text: line.text
      }))
    }))
  }));

process.stdout.write(JSON.stringify(cards, null, 2));
