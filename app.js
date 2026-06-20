const cards = Array.isArray(window.ROLEPLAY_CARDS) ? window.ROLEPLAY_CARDS : [];

cards.forEach((card) => {
  card.collection = card.collection || "Original Library";
  card.group = card.group || card.pack || "Unsorted";
  card.status = card.status || "scripted";
});

const els = {
  searchInput: document.querySelector("#searchInput"),
  cardCount: document.querySelector("#cardCount"),
  scriptedCount: document.querySelector("#scriptedCount"),
  cardList: document.querySelector("#cardList"),
  cardDetail: document.querySelector("#cardDetail"),
  modeTabs: document.querySelector(".mode-tabs"),
  timerDisplay: document.querySelector("#timerDisplay"),
  timerButton: document.querySelector("#timerButton"),
  resetTimerButton: document.querySelector("#resetTimerButton"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  copyButton: document.querySelector("#copyButton")
};

function getInitialAudioRate() {
  try {
    const savedRate = Number(window.localStorage.getItem("roleplayAudioRate"));
    return savedRate === 1 ? 1 : 1.2;
  } catch (error) {
    return 1.2;
  }
}

const state = {
  query: "",
  selectedId: cards[0] ? cards[0].id : null,
  versionIndex: 0,
  mode: "all",
  secondsLeft: 60,
  timerId: null,
  audioRate: getInitialAudioRate(),
  lineStopAt: null,
  activeLineIndex: null,
  openCollections: new Set(["Original Library", "Practical Training"]),
  openPacks: new Set()
};

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function getSearchText(card) {
  return [
    card.id,
    card.collection,
    card.pack,
    card.group,
    card.place,
    card.situation,
    card.person,
    card.goal,
    card.mood,
    card.level,
    card.dayType,
    (card.topics || []).join(" "),
    (card.usefulExpressions || []).join(" "),
    (card.variations || []).join(" ")
  ].join(" ");
}

function getFilteredCards() {
  const query = normalize(state.query).trim();

  return cards.filter((card) => {
    const matchesQuery = !query || normalize(getSearchText(card)).includes(query);
    return matchesQuery;
  });
}

function getSelectedCard() {
  return cards.find((card) => card.id === state.selectedId) || cards[0] || null;
}

function ensureSelectedCardVisible() {
  const filtered = getFilteredCards();
  const isVisible = filtered.some((card) => card.id === state.selectedId);

  if (!isVisible && filtered[0]) {
    state.selectedId = filtered[0].id;
    state.versionIndex = 0;
    resetTimer();
  }
}

function renderStats(filtered) {
  els.cardCount.textContent = `${filtered.length} shown`;
  els.scriptedCount.textContent = `${cards.length} total`;
}

function renderCardList(filtered) {
  if (!filtered.length) {
    els.cardList.innerHTML = '<div class="empty-state">No scripts match your search.</div>';
    return;
  }

  const collections = groupCardsByCollection(filtered);

  els.cardList.innerHTML = collections.map(renderCollectionGroup).join("");
}

function renderCollectionGroup(collection) {
  const shouldOpen = state.query.trim() || state.openCollections.has(collection.name);
  const groups = groupCardsByGroup(collection.cards);

  return `
    <section class="collection-group${shouldOpen ? " is-open" : ""}" data-collection-group="${escapeHtml(collection.name)}">
      <button class="collection-summary" type="button" data-collection-toggle="${escapeHtml(collection.name)}" aria-expanded="${shouldOpen ? "true" : "false"}">
        <span class="collection-name">${escapeHtml(collection.name)}</span>
        <span class="collection-count">${collection.cards.length} scripts</span>
      </button>
      ${shouldOpen ? `<div class="collection-sections">${groups.map((group) => renderPlaceGroup(collection.name, group)).join("")}</div>` : ""}
    </section>
  `;
}

function renderPlaceGroup(collectionName, group) {
  const groupKey = `${collectionName}::${group.name}`;
  const shouldOpen = state.query.trim() || state.openPacks.has(groupKey);

  return `
    <section class="pack-group${shouldOpen ? " is-open" : ""}" data-pack-group="${escapeHtml(groupKey)}">
      <button class="pack-summary" type="button" data-pack-toggle="${escapeHtml(groupKey)}" aria-expanded="${shouldOpen ? "true" : "false"}">
        <span class="pack-name">${escapeHtml(group.name.replace(" Pack", ""))}</span>
        <span class="pack-count">${group.cards.length} scripts</span>
      </button>
      ${shouldOpen ? `<div class="pack-cards">${group.cards.map(renderCardListButton).join("")}</div>` : ""}
    </section>
  `;
}

function groupCardsByCollection(cardList) {
  const groups = [];
  const byCollection = new Map();

  cardList.forEach((card) => {
    if (!byCollection.has(card.collection)) {
      byCollection.set(card.collection, []);
      groups.push({ name: card.collection, cards: byCollection.get(card.collection) });
    }

    byCollection.get(card.collection).push(card);
  });

  return groups;
}

function groupCardsByGroup(cardList) {
  const groups = [];
  const byGroup = new Map();

  cardList.forEach((card) => {
    const groupName = card.group || card.pack || "Unsorted";

    if (!byGroup.has(groupName)) {
      byGroup.set(groupName, []);
      groups.push({ name: groupName, cards: byGroup.get(groupName) });
    }

    byGroup.get(groupName).push(card);
  });

  return groups;
}

function renderCardListButton(card) {
  const isActive = card.id === state.selectedId ? " is-active" : "";
  const summary = card.collection === "Practical Training"
    ? card.situation
    : `${card.person} · ${card.dayType || card.pack}`;

  return `
    <button class="card-list-button${isActive}" type="button" data-card-id="${escapeHtml(card.id)}">
      <span class="card-number">${escapeHtml(card.id)}</span>
      <span>
        <span class="card-title-line">
          <span class="card-place">${escapeHtml(card.place)}</span>
        </span>
        <p class="card-summary">${escapeHtml(summary)}</p>
      </span>
    </button>
  `;
}

function renderDetail() {
  const card = getSelectedCard();

  if (!card) {
    els.cardDetail.innerHTML = '<div class="empty-state">Add your first card in data/cards.js.</div>';
    return;
  }

  const versions = card.versions || [];
  if (state.versionIndex >= versions.length) {
    state.versionIndex = 0;
  }

  const versionTabs = versions.length > 1
    ? `
      <div class="version-tabs" role="tablist" aria-label="Script version">
        ${versions
          .map(
            (version, index) =>
              `<button class="version-tab${index === state.versionIndex ? " is-active" : ""}" type="button" data-version-index="${index}">${escapeHtml(version.title)}</button>`
          )
          .join("")}
      </div>
    `
    : "";

  els.cardDetail.innerHTML = `
    <article class="detail-hero">
      <div class="detail-heading">
        <div class="detail-kicker">
          <span>Roleplay Card ${escapeHtml(card.id)}</span>
          <span>${escapeHtml(card.collection)}</span>
          <span>${escapeHtml(card.group)}</span>
          <span>${escapeHtml(card.pack)}</span>
        </div>
        <h2>${escapeHtml(card.place)}</h2>
        <p class="situation">${escapeHtml(card.situation)}</p>
      </div>

      <div class="meta-grid">
        ${renderMeta("Person", card.person)}
        ${renderMeta("Goal", card.goal)}
        ${renderMeta("Mood", card.mood)}
        ${renderMeta("Level", card.level)}
      </div>
    </article>

    ${versionTabs}
    ${versions.length ? renderScript(card, versions[state.versionIndex]) : renderOutline(card)}
    ${renderNotes(card)}
  `;

  setupAudioPlayer();
}

function renderMeta(label, value) {
  return `
    <div class="meta-item">
      <span class="meta-label">${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "Not set")}</strong>
    </div>
  `;
}

function renderScript(card, version) {
  return `
    <section class="script-shell">
      <div class="script-title-row">
        <h3>${escapeHtml(version.title)}</h3>
        <span>${escapeHtml(card.length)}</span>
      </div>
      ${card.audio === false ? "" : renderAudioPlayer(card)}
      <div class="dialogue">
        ${(version.lines || []).map(renderLine).join("")}
      </div>
    </section>
  `;
}

function getAudioFileName(card, versionIndex) {
  if ((card.versions || []).length === 1) {
    return `card-${card.id}-main.wav`;
  }

  return `card-${card.id}-v${versionIndex + 1}.wav`;
}

function getAudioPath(card, versionIndex) {
  return `audio/${getAudioFileName(card, versionIndex)}`;
}

function getNaturalAudioPath(card, versionIndex) {
  return `audio-natural/${getAudioFileName(card, versionIndex)}`;
}

function renderAudioPlayer(card) {
  const fileName = getAudioFileName(card, state.versionIndex);
  const naturalAudioPath = getNaturalAudioPath(card, state.versionIndex);
  const localAudioPath = getAudioPath(card, state.versionIndex);

  return `
    <div class="audio-player">
      <audio id="cardAudio" preload="metadata">
        <source src="${escapeHtml(naturalAudioPath)}" type="audio/wav" />
        <source src="${escapeHtml(localAudioPath)}" type="audio/wav" />
      </audio>
      <div class="audio-control-row">
        <button class="audio-play" type="button" data-audio-play>Play</button>
        <input class="audio-timeline" type="range" min="0" max="0" step="0.01" value="0" data-audio-timeline aria-label="Audio timeline" disabled />
        <span class="audio-time" data-audio-time>00:00 / 00:00</span>
        <button class="audio-rate" type="button" data-audio-rate aria-pressed="false">1.2x</button>
      </div>
      <div class="audio-skip-row" aria-label="Audio skip controls">
        <button type="button" data-audio-skip="-5">-5s</button>
        <button type="button" data-audio-skip="-3">-3s</button>
        <button type="button" data-audio-skip="-1">-1s</button>
        <button type="button" data-audio-skip="1">+1s</button>
        <button type="button" data-audio-skip="3">+3s</button>
        <button type="button" data-audio-skip="5">+5s</button>
      </div>
      <p class="audio-status" data-audio-status>Audio file: ${escapeHtml(fileName)} · natural voice if available</p>
    </div>
  `;
}

function renderLine(line, lineIndex) {
  const isYou = normalize(line.speaker) === "you";
  const className = isYou ? "line you" : "line";
  let speech = line.text;

  if (state.mode === "prompt" && isYou) {
    speech = "Your turn.";
  }

  if (state.mode === "you" && !isYou) {
    return "";
  }

  const hiddenClass = state.mode === "prompt" && isYou ? " hidden-line" : "";

  return `
    <div class="${className}" data-line-index="${lineIndex}" role="button" tabindex="0" title="Play this line">
      <span class="speaker">${escapeHtml(line.speaker)}</span>
      <p class="speech${hiddenClass}">${escapeHtml(speech)}</p>
    </div>
  `;
}

function renderOutline(card) {
  return `
    <section class="outline-shell">
      <h3>Script Outline</h3>
      <p>This card is mapped and ready for script writing. Add one complete natural dialogue in <strong>data/cards.js</strong> when you want to expand it.</p>
      ${renderTopics(card)}
    </section>
  `;
}

function renderTopics(card) {
  if (!card.topics || !card.topics.length) {
    return "";
  }

  return `
    <ul class="tag-list" aria-label="Conversation topics">
      ${card.topics.map((topic) => `<li class="tag">${escapeHtml(topic)}</li>`).join("")}
    </ul>
  `;
}

function renderNotes(card) {
  const expressions = card.usefulExpressions || [];
  const variations = card.variations || [];
  const hasNotes = expressions.length || variations.length || card.practiceTip || (card.topics || []).length;

  if (!hasNotes) {
    return "";
  }

  return `
    <section class="practice-notes">
      <h3>Practice Notes</h3>
      <div class="notes-grid">
        <div class="note-section">
          <h4>Useful Expressions</h4>
          ${
            expressions.length
              ? `<ul class="expression-list">${expressions.map(renderExpressionItem).join("")}</ul>`
              : renderTopics(card)
          }
        </div>
        <div class="note-section">
          <h4>Variations</h4>
          ${
            variations.length
              ? `<ul class="variation-list">${variations.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
              : '<p class="tip">Add messy real-life twists after the clean version feels easy.</p>'
          }
        </div>
      </div>
      ${card.practiceTip ? `<p class="tip">${escapeHtml(card.practiceTip)}</p>` : ""}
    </section>
  `;
}

function getExpressionEnglish(expression) {
  if (typeof expression === "string") {
    return expression;
  }

  return expression.en || expression.text || "";
}

function getExpressionKorean(expression) {
  if (typeof expression !== "string" && expression.ko) {
    return expression.ko;
  }

  return (window.ROLEPLAY_EXPRESSION_TRANSLATIONS || {})[getExpressionEnglish(expression)] || "";
}

function renderExpressionItem(expression) {
  const english = getExpressionEnglish(expression);
  const korean = getExpressionKorean(expression);

  return `
    <li>
      <span class="expression-en">${escapeHtml(english)}</span>
      ${korean ? `<span class="expression-ko">${escapeHtml(korean)}</span>` : ""}
    </li>
  `;
}

function renderAll() {
  ensureSelectedCardVisible();

  const filtered = getFilteredCards();
  renderStats(filtered);
  updateActiveButtons();
  renderCardList(filtered);

  if (!filtered.length) {
    els.cardDetail.innerHTML =
      '<div class="empty-state">No script is selected. Clear the search to see the full library.</div>';
    updateTimerDisplay();
    return;
  }

  renderDetail();
  updateTimerDisplay();
}

function updateActiveButtons() {
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function selectRelativeCard(direction) {
  const filtered = getFilteredCards();
  const currentIndex = filtered.findIndex((card) => card.id === state.selectedId);

  if (!filtered.length || currentIndex === -1) {
    return;
  }

  const nextIndex = (currentIndex + direction + filtered.length) % filtered.length;
  state.selectedId = filtered[nextIndex].id;
  state.versionIndex = 0;
  resetTimer();
  renderAll();
}

function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  els.timerDisplay.textContent = formatSeconds(state.secondsLeft);
  els.timerButton.textContent = state.timerId ? "Pause" : "Start";
}

function getAudioElements() {
  return {
    audio: document.querySelector("#cardAudio"),
    playButton: document.querySelector("[data-audio-play]"),
    rateButton: document.querySelector("[data-audio-rate]"),
    timeline: document.querySelector("[data-audio-timeline]"),
    time: document.querySelector("[data-audio-time]"),
    status: document.querySelector("[data-audio-status]")
  };
}

function setupAudioPlayer() {
  const { audio, playButton, timeline, status } = getAudioElements();

  if (!audio || !playButton || !timeline) {
    return;
  }

  applyAudioRate(audio);

  const update = () => {
    stopAtLineEndIfNeeded();
    updateAudioDisplay();
  };

  audio.addEventListener("loadedmetadata", () => {
    timeline.disabled = false;
    if (status) {
      status.textContent = audio.currentSrc.includes("audio-natural/")
        ? "Natural OpenAI voice ready."
        : "Local TTS fallback ready.";
    }
    update();
  });

  audio.addEventListener("timeupdate", update);
  audio.addEventListener("durationchange", update);
  audio.addEventListener("play", update);
  audio.addEventListener("pause", update);
  audio.addEventListener("ended", update);
  audio.addEventListener("error", () => {
    timeline.disabled = true;
    playButton.disabled = true;
    if (status) {
      status.textContent =
        "Audio file not found yet. Generate natural audio or run tools/generate-audio.ps1 for local fallback.";
    }
    update();
  });

  update();
}

function updateAudioDisplay() {
  const { audio, playButton, rateButton, timeline, time } = getAudioElements();

  if (!audio || !playButton || !timeline || !time) {
    return;
  }

  const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
  const currentTime = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;

  timeline.max = String(duration);
  timeline.value = String(currentTime);
  timeline.disabled = duration <= 0;
  time.textContent = `${formatSeconds(Math.floor(currentTime))} / ${formatSeconds(Math.floor(duration))}`;
  playButton.textContent = audio.paused ? "Play" : "Pause";

  if (rateButton) {
    const isFast = state.audioRate === 1.2;
    rateButton.classList.toggle("is-active", isFast);
    rateButton.setAttribute("aria-pressed", String(isFast));
  }
}

function getCurrentAudioManifest() {
  const card = getSelectedCard();

  if (!card || !window.ROLEPLAY_AUDIO_MANIFESTS) {
    return null;
  }

  return window.ROLEPLAY_AUDIO_MANIFESTS[getNaturalAudioPath(card, state.versionIndex)] || null;
}

function playDialogueLine(lineIndex) {
  const { audio, status } = getAudioElements();
  const manifest = getCurrentAudioManifest();

  if (!audio || !manifest || !manifest.segments) {
    if (status) {
      status.textContent =
        "Line playback needs a regenerated OpenAI audio manifest for this card.";
    }
    return;
  }

  const segment = manifest.segments.find((item) => item.index === lineIndex);

  if (!segment) {
    return;
  }

  state.lineStopAt = segment.end;
  state.activeLineIndex = lineIndex;
  audio.currentTime = segment.start;
  applyAudioRate(audio);
  highlightActiveLine(lineIndex);
  audio.play().catch(() => updateAudioDisplay());

  if (status) {
    status.textContent = `Playing line ${lineIndex + 1}.`;
  }
}

function stopAtLineEndIfNeeded() {
  const { audio } = getAudioElements();

  if (!audio || state.lineStopAt === null) {
    return;
  }

  if (audio.currentTime >= state.lineStopAt) {
    audio.pause();
    state.lineStopAt = null;
    state.activeLineIndex = null;
    highlightActiveLine(null);
  }
}

function clearLinePlayback() {
  state.lineStopAt = null;
  state.activeLineIndex = null;
  highlightActiveLine(null);
}

function highlightActiveLine(lineIndex) {
  document.querySelectorAll(".line[data-line-index]").forEach((line) => {
    line.classList.toggle("is-playing", Number(line.dataset.lineIndex) === lineIndex);
  });
}

function applyAudioRate(audio) {
  audio.playbackRate = state.audioRate;
}

function toggleAudioRate() {
  state.audioRate = state.audioRate === 1.2 ? 1 : 1.2;

  try {
    window.localStorage.setItem("roleplayAudioRate", String(state.audioRate));
  } catch (error) {
    // Playback speed still works even when storage is unavailable.
  }

  const { audio } = getAudioElements();
  if (audio) {
    applyAudioRate(audio);
  }

  updateAudioDisplay();
}

function toggleAudioPlayback() {
  const { audio } = getAudioElements();

  if (!audio) {
    return;
  }

  applyAudioRate(audio);
  clearLinePlayback();

  if (audio.paused) {
    audio.play().catch(() => updateAudioDisplay());
  } else {
    audio.pause();
  }
}

function skipAudio(seconds) {
  const { audio } = getAudioElements();

  if (!audio || !Number.isFinite(audio.duration)) {
    return;
  }

  clearLinePlayback();
  audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), audio.duration);
  updateAudioDisplay();
}

function startTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
    updateTimerDisplay();
    return;
  }

  state.timerId = window.setInterval(() => {
    state.secondsLeft -= 1;

    if (state.secondsLeft <= 0) {
      state.secondsLeft = 0;
      window.clearInterval(state.timerId);
      state.timerId = null;
    }

    updateTimerDisplay();
  }, 1000);

  updateTimerDisplay();
}

function resetTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }

  state.secondsLeft = 60;

  if (els.timerDisplay) {
    updateTimerDisplay();
  }
}

function getCurrentScriptText() {
  const card = getSelectedCard();
  if (!card) {
    return "";
  }

  const version = (card.versions || [])[state.versionIndex];
  const linesText = version
    ? version.lines.map((line) => `${line.speaker}: ${line.text}`).join("\n")
    : "Script not written yet.";

  return [
    `Roleplay Card ${card.id}`,
    `Collection: ${card.collection}`,
    `Group: ${card.group}`,
    `Place: ${card.place}`,
    `Situation: ${card.situation}`,
    `Person: ${card.person}`,
    `Goal: ${card.goal}`,
    `Mood: ${card.mood}`,
    `Level: ${card.level}`,
    `Length: ${card.length}`,
    "",
    version ? `Dialogue: ${version.title}` : "Outline",
    "",
    linesText
  ].join("\n");
}

async function copyCurrentScript() {
  const text = getCurrentScriptText();

  try {
    await navigator.clipboard.writeText(text);
    els.copyButton.textContent = "Copied";
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    els.copyButton.textContent = "Copied";
  }

  window.setTimeout(() => {
    els.copyButton.textContent = "Copy";
  }, 1300);
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderAll();
});

els.cardList.addEventListener("click", (event) => {
  const collectionButton = event.target.closest("[data-collection-toggle]");
  if (collectionButton) {
    const collection = collectionButton.dataset.collectionToggle;
    if (state.openCollections.has(collection)) {
      state.openCollections.delete(collection);
    } else {
      state.openCollections.add(collection);
    }
    renderAll();
    return;
  }

  const toggleButton = event.target.closest("[data-pack-toggle]");
  if (toggleButton) {
    const groupKey = toggleButton.dataset.packToggle;
    if (state.openPacks.has(groupKey)) {
      state.openPacks.delete(groupKey);
    } else {
      state.openPacks.add(groupKey);
    }
    renderAll();
    return;
  }

  const button = event.target.closest("[data-card-id]");
  if (!button) {
    return;
  }

  state.selectedId = button.dataset.cardId;
  state.versionIndex = 0;
  resetTimer();
  clearLinePlayback();
  renderAll();
});

els.cardDetail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-version-index]");

  if (button) {
    state.versionIndex = Number(button.dataset.versionIndex);
    resetTimer();
    clearLinePlayback();
    renderDetail();
    return;
  }

  const playButton = event.target.closest("[data-audio-play]");
  if (playButton) {
    toggleAudioPlayback();
    return;
  }

  const rateButton = event.target.closest("[data-audio-rate]");
  if (rateButton) {
    toggleAudioRate();
    return;
  }

  const skipButton = event.target.closest("[data-audio-skip]");
  if (skipButton) {
    skipAudio(Number(skipButton.dataset.audioSkip));
    return;
  }

  const line = event.target.closest(".line[data-line-index]");
  if (line) {
    playDialogueLine(Number(line.dataset.lineIndex));
  }
});

els.cardDetail.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const line = event.target.closest(".line[data-line-index]");
  if (!line) {
    return;
  }

  event.preventDefault();
  playDialogueLine(Number(line.dataset.lineIndex));
});

els.cardDetail.addEventListener("input", (event) => {
  const timeline = event.target.closest("[data-audio-timeline]");
  const { audio } = getAudioElements();

  if (!timeline || !audio) {
    return;
  }

  clearLinePlayback();
  audio.currentTime = Number(timeline.value);
  updateAudioDisplay();
});

els.modeTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) {
    return;
  }

  state.mode = button.dataset.mode;
  updateActiveButtons();
  renderDetail();
});

els.prevButton.addEventListener("click", () => selectRelativeCard(-1));
els.nextButton.addEventListener("click", () => selectRelativeCard(1));
els.timerButton.addEventListener("click", startTimer);
els.resetTimerButton.addEventListener("click", resetTimer);
els.copyButton.addEventListener("click", copyCurrentScript);

renderAll();
