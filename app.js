// Python Quest — App Logic

let pyodide = null;
let editor = null;
let currentLessonId = 1;
let progress = loadProgress();
let quizState = {}; // { lessonId: { answered: [bool, bool, bool], score: 0 } }
let pyodideReady = false;

// ─── Initialization ────────────────────────────────────────────────

async function initApp() {
  updateLoadingStatus("Starting Python engine (this takes ~10 seconds)...");

  try {
    pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
    });
    pyodideReady = true;
    updateLoadingStatus("Python ready! Setting up editor...");
  } catch (e) {
    updateLoadingStatus("Error loading Python: " + e.message);
    console.error(e);
    return;
  }

  // Setup Ace editor
  editor = ace.edit("ace-editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/python");
  editor.setFontSize(14);
  editor.session.setTabSize(4);
  editor.session.setUseSoftTabs(true);
  editor.setShowPrintMargin(false);
  editor.renderer.setScrollMargin(8, 8);
  editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: false,
    wrap: true
  });

  // Keyboard shortcut: Ctrl+Enter or Cmd+Enter to run
  editor.commands.addCommand({
    name: "runCode",
    bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
    exec: runCode
  });

  renderSidebar();
  loadLesson(progress.currentLesson || 1);

  document.getElementById("loading-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  updateXPDisplay();
}

function updateLoadingStatus(msg) {
  const el = document.getElementById("loading-status");
  if (el) el.textContent = msg;
}

// ─── Progress ─────────────────────────────────────────────────────

function loadProgress() {
  try {
    const saved = localStorage.getItem("pythonQuestProgress");
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {
    completedLessons: [],
    challengesPassed: [],
    xp: 0,
    currentLesson: 1
  };
}

function saveProgress() {
  localStorage.setItem("pythonQuestProgress", JSON.stringify(progress));
}

function resetProgress() {
  if (!confirm("Reset ALL progress? This can't be undone!")) return;
  localStorage.removeItem("pythonQuestProgress");
  localStorage.removeItem("pythonQuestQuiz");
  progress = loadProgress();
  quizState = {};
  updateXPDisplay();
  renderSidebar();
  loadLesson(1);
}

// ─── XP & Levels ──────────────────────────────────────────────────

const LEVELS = [
  { name: "Python Newbie",     min: 0 },
  { name: "Python Coder",      min: 200 },
  { name: "Python Developer",  min: 500 },
  { name: "Python Pro",        min: 900 },
  { name: "Python Master",     min: 1400 }
];

function addXP(amount, reason) {
  progress.xp += amount;
  saveProgress();
  updateXPDisplay();
  showToast(`+${amount} XP`, reason, "⭐");
}

function updateXPDisplay() {
  const xp = progress.xp;
  let level = LEVELS[0];
  let nextLevel = LEVELS[1];
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].min) {
      level = LEVELS[i];
      nextLevel = LEVELS[i + 1] || null;
      break;
    }
  }
  document.getElementById("level-badge").textContent = level.name;
  if (nextLevel) {
    const pct = ((xp - level.min) / (nextLevel.min - level.min)) * 100;
    document.getElementById("xp-fill").style.width = Math.min(pct, 100) + "%";
    document.getElementById("xp-text").textContent = `${xp} / ${nextLevel.min} XP`;
  } else {
    document.getElementById("xp-fill").style.width = "100%";
    document.getElementById("xp-text").textContent = `${xp} XP — MAX LEVEL!`;
  }
}

// ─── Sidebar ──────────────────────────────────────────────────────

function renderSidebar() {
  const list = document.getElementById("lesson-list");
  list.innerHTML = LESSONS.map(lesson => {
    const done = progress.completedLessons.includes(lesson.id);
    const active = lesson.id === currentLessonId;
    const locked = lesson.id > 1 && !progress.completedLessons.includes(lesson.id - 1);
    const cls = [
      "lesson-item",
      done ? "completed" : "",
      active ? "active" : "",
      locked ? "locked" : ""
    ].filter(Boolean).join(" ");

    return `<div class="${cls}" onclick="handleLessonClick(${lesson.id}, ${locked})">
      <span class="lesson-icon">${lesson.icon}${done ? '<span class="done-check">✓</span>' : ''}</span>
      <div class="lesson-info">
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-xp">${done ? '✅ Done' : '+' + lesson.xp + ' XP'}</div>
      </div>
      ${locked ? '<span style="font-size:14px">🔒</span>' : ''}
    </div>`;
  }).join("");
}

function handleLessonClick(id, locked) {
  if (locked) {
    showToast("Locked!", "Complete the previous lesson first", "🔒");
    return;
  }
  loadLesson(id);
}

// ─── Lesson Loading ───────────────────────────────────────────────

function loadLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;

  currentLessonId = id;
  progress.currentLesson = id;
  saveProgress();

  // Load quiz state
  const savedQuiz = JSON.parse(localStorage.getItem("pythonQuestQuiz") || "{}");
  quizState = savedQuiz;

  // Set editor content
  editor.setValue(lesson.starterCode, -1); // -1 = no selection

  // Render lesson content
  const container = document.getElementById("lesson-content");
  container.innerHTML = buildLessonHTML(lesson);

  // Highlight code
  if (window.Prism) Prism.highlightAll();

  // Scroll to top
  document.getElementById("content-area").scrollTop = 0;

  // Clear output
  clearOutput();

  // Update sidebar
  renderSidebar();
}

function buildLessonHTML(lesson) {
  const isCompleted = progress.completedLessons.includes(lesson.id);
  const challengePassed = progress.challengesPassed.includes(lesson.id);
  const qState = quizState[lesson.id] || { answers: {} };

  return `
    ${lesson.content}

    ${buildChallengeHTML(lesson, challengePassed)}

    <div class="section-divider"></div>

    ${buildQuizHTML(lesson, qState)}

    ${isCompleted ? buildNextLessonHTML(lesson) : ''}
  `;
}

function buildChallengeHTML(lesson, passed) {
  const c = lesson.challenge;
  return `
    <div class="challenge-section">
      <div class="challenge-header">
        <span style="font-size:24px">🎯</span>
        <h3>${c.title}</h3>
        <span class="challenge-badge">+${c.xp} XP</span>
        ${passed ? '<span class="passed-badge">✅ Passed!</span>' : ''}
      </div>
      <div class="challenge-desc">${c.description.replace(/\n/g, '<br>')}</div>
      <div class="hint-box">
        <details>
          <summary>💡 Hint</summary>
          <p>${c.hint}</p>
        </details>
      </div>
      <button class="check-btn" onclick="checkChallenge(${lesson.id})">
        ${passed ? '✅ Re-check Solution' : '🔍 Check My Answer'}
      </button>
      <div id="challenge-result" class="challenge-result ${passed ? 'pass show' : ''}">
        ${passed ? '✅ Challenge passed! Great work!' : ''}
      </div>
    </div>
  `;
}

function buildQuizHTML(lesson, qState) {
  const allAnswered = lesson.quiz.every((_, i) => qState.answers && qState.answers[i] !== undefined);

  let html = `
    <div class="quiz-section">
      <h3>🧠 Quick Quiz</h3>
      <p class="quiz-intro">Test your understanding! Answer all ${lesson.quiz.length} questions to complete this lesson.</p>
  `;

  lesson.quiz.forEach((q, qi) => {
    const answered = qState.answers && qState.answers[qi] !== undefined;
    const userAnswer = answered ? qState.answers[qi] : -1;
    const isCorrect = userAnswer === q.answer;

    html += `
      <div class="quiz-question ${answered ? (isCorrect ? 'q-correct' : 'q-wrong') : ''}">
        <div class="q-number">Q${qi + 1}</div>
        <div class="question-text">${q.q.replace(/\n/g, '<br><code>')}</div>
        <div class="quiz-options">
    `;

    q.options.forEach((opt, oi) => {
      let cls = "quiz-option";
      if (answered) {
        if (oi === q.answer) cls += " correct";
        else if (oi === userAnswer) cls += " wrong";
      }
      const letters = ["A", "B", "C", "D"];
      html += `
        <div class="${cls}" onclick="${answered ? '' : `answerQuiz(${lesson.id}, ${qi}, ${oi})`}">
          <span class="option-letter">${letters[oi]}</span>
          ${opt}
        </div>
      `;
    });

    html += `</div>`;

    if (answered) {
      html += `<div class="quiz-explanation show">
        ${isCorrect ? '✅' : '❌'} <strong>${isCorrect ? 'Correct!' : 'Not quite.'}</strong> ${q.explanation}
      </div>`;
    }

    html += `</div>`;
  });

  html += `
      <div id="quiz-result-${lesson.id}" class="quiz-complete-msg ${allAnswered ? 'show' : ''}">
        ${allAnswered ? buildQuizResultMsg(lesson, qState) : ''}
      </div>
    </div>
  `;

  return html;
}

function buildQuizResultMsg(lesson, qState) {
  const correct = lesson.quiz.filter((q, i) => qState.answers && qState.answers[i] === q.answer).length;
  const total = lesson.quiz.length;
  const pct = Math.round((correct / total) * 100);

  if (correct === total) {
    return `<div class="quiz-perfect">🌟 Perfect score! ${correct}/${total} — You nailed it!</div>`;
  } else if (correct >= Math.ceil(total / 2)) {
    return `<div class="quiz-good">👍 Good job! ${correct}/${total} (${pct}%) — Lesson complete!</div>`;
  } else {
    return `<div class="quiz-ok">📚 ${correct}/${total} — Try reviewing and retrying!</div>`;
  }
}

function buildNextLessonHTML(lesson) {
  const nextLesson = LESSONS.find(l => l.id === lesson.id + 1);
  if (!nextLesson) {
    return `<div class="completion-banner">
      🎉 <strong>You built a real game and finished all 9 lessons!</strong> You're officially a Python coder!
      <br><br>🚀 <strong>Where to go next:</strong>
      <br>• <strong>pygame</strong> — make your text game into a real GUI game with graphics
      <br>• <strong>Flask</strong> — build a web app or multiplayer game server
      <br>• <strong>turtle</strong> — draw graphics with Python code (built-in, no install!)
    </div>`;
  }
  return `<button class="next-lesson-btn show" onclick="loadLesson(${nextLesson.id})">
    Next: ${nextLesson.icon} ${nextLesson.title} →
  </button>`;
}

// ─── Quiz Logic ───────────────────────────────────────────────────

function answerQuiz(lessonId, questionIdx, optionIdx) {
  if (!quizState[lessonId]) quizState[lessonId] = { answers: {} };
  quizState[lessonId].answers[questionIdx] = optionIdx;

  // Save quiz state
  localStorage.setItem("pythonQuestQuiz", JSON.stringify(quizState));

  const lesson = LESSONS.find(l => l.id === lessonId);
  const correct = optionIdx === lesson.quiz[questionIdx].answer;
  if (correct) addXP(25, `Correct answer!`);

  // Check if all answered
  const allAnswered = lesson.quiz.every((_, i) => quizState[lessonId].answers[i] !== undefined);

  // Re-render lesson content
  const container = document.getElementById("lesson-content");
  container.innerHTML = buildLessonHTML(lesson);
  if (window.Prism) Prism.highlightAll();

  if (allAnswered) {
    // Mark lesson complete
    completeLesson(lessonId);
  }
}

function completeLesson(lessonId) {
  if (!progress.completedLessons.includes(lessonId)) {
    const lesson = LESSONS.find(l => l.id === lessonId);
    progress.completedLessons.push(lessonId);
    addXP(lesson.xp, `Lesson "${lesson.title}" complete!`);
    saveProgress();
    showToast("Lesson Complete! 🎉", `"${lesson.title}" unlocked the next lesson!`, "🏆");
  }
  renderSidebar();

  // Re-render to show next button
  const lesson = LESSONS.find(l => l.id === lessonId);
  document.getElementById("lesson-content").innerHTML = buildLessonHTML(lesson);
  if (window.Prism) Prism.highlightAll();
}

// ─── Code Execution ───────────────────────────────────────────────

async function runCode() {
  if (!pyodideReady) {
    showOutput("⏳ Python is still loading, please wait...", "error");
    return;
  }

  const code = editor.getValue();
  if (!code.trim()) return;

  const runBtn = document.getElementById("run-btn");
  runBtn.disabled = true;
  runBtn.textContent = "⏳ Running...";

  showOutput("", "normal");

  try {
    await pyodide.runPythonAsync(`
import sys, io
_stdout_buf = io.StringIO()
_stderr_buf = io.StringIO()
_old_stdout = sys.stdout
_old_stderr = sys.stderr
sys.stdout = _stdout_buf
sys.stderr = _stderr_buf
`);

    let userError = null;
    try {
      await pyodide.runPythonAsync(code);
    } catch (e) {
      userError = e;
    }

    await pyodide.runPythonAsync(`
sys.stdout = _old_stdout
sys.stderr = _old_stderr
`);

    const stdout = pyodide.globals.get("_stdout_buf").getvalue();
    const stderr = pyodide.globals.get("_stderr_buf").getvalue();

    let output = stdout;
    if (stderr) output += (output ? "\n" : "") + stderr;
    if (userError) {
      const errMsg = String(userError).replace(/^.*Error: /, "").split("\n").slice(-3).join("\n");
      output += (output ? "\n" : "") + "⚠️ Error: " + errMsg;
    }

    if (!output.trim()) output = "(no output)";
    showOutput(output, userError ? "error" : "normal");

  } catch (e) {
    showOutput("⚠️ Error: " + e.message, "error");
  } finally {
    runBtn.disabled = false;
    runBtn.textContent = "▶ Run";
  }
}

async function checkChallenge(lessonId) {
  if (!pyodideReady) {
    showToast("Wait!", "Python is still loading...", "⏳");
    return;
  }

  const code = editor.getValue();
  const lesson = LESSONS.find(l => l.id === lessonId);

  // Run the code first
  let output = "";

  try {
    await pyodide.runPythonAsync(`
import sys, io
_stdout_buf = io.StringIO()
_old_stdout = sys.stdout
_old_stderr = sys.stderr
sys.stdout = _stdout_buf
sys.stderr = _stdout_buf
`);

    try {
      await pyodide.runPythonAsync(code);
    } catch (e) {
      // code has errors
    }

    await pyodide.runPythonAsync(`
sys.stdout = _old_stdout
sys.stderr = _old_stderr
`);

    output = pyodide.globals.get("_stdout_buf").getvalue();
  } catch (e) {
    output = "";
  }

  // Show the output
  if (output.trim()) showOutput(output, "normal");

  // Validate
  const validatorKey = lesson.challenge.validateKey;
  const passed = VALIDATORS[validatorKey] ? VALIDATORS[validatorKey](output, code) : output.trim().length > 0;

  const resultEl = document.getElementById("challenge-result");
  if (resultEl) {
    resultEl.className = "challenge-result " + (passed ? "pass show" : "fail show");
    resultEl.textContent = passed
      ? "✅ Challenge passed! Great work!"
      : "❌ Not quite — check the requirements and try again!";
  }

  if (passed && !progress.challengesPassed.includes(lessonId)) {
    progress.challengesPassed.push(lessonId);
    addXP(lesson.challenge.xp, `Challenge "${lesson.challenge.title}" passed!`);
    saveProgress();
    showToast("Challenge Passed! 🎯", `+${lesson.challenge.xp} XP earned!`, "🎯");

    // Update button text
    const btn = document.querySelector(".check-btn");
    if (btn) btn.textContent = "✅ Re-check Solution";
  }
}

// ─── Output Display ───────────────────────────────────────────────

function showOutput(text, type = "normal") {
  const el = document.getElementById("output-display");
  el.className = "output-" + type;
  el.textContent = text || "(no output)";
}

function clearOutput() {
  const el = document.getElementById("output-display");
  el.className = "output-normal";
  el.innerHTML = '<span style="color:#484f58">// Run your code to see output here</span>';
}

// ─── Toast Notifications ─────────────────────────────────────────

function showToast(title, message, icon = "⭐") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
