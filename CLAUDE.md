# Python Quest — Project Context

Interactive Python learning app for a student who already knows JavaScript and Unity C#. Runs entirely in the browser — no server, no build step.

## Files

- `index.html` — shell: loading screen, header (XP bar + level badge), sidebar, content area, Ace editor panel
- `app.js` — all runtime logic: Pyodide init, lesson loading, quiz/challenge grading, XP system, toast notifications
- `lessons.js` — all lesson data: `LESSONS` array (9 lessons) + `VALIDATORS` object (challenge graders)
- `style.css` — all styles

## How to open and test

Just open `index.html` in a browser. Pyodide (~10s first load) runs Python in WebAssembly — no Python install needed.

## Key data structures

**Lesson object** (in `LESSONS` array in `lessons.js`):
```js
{
  id, title, icon, xp,        // metadata
  description,                 // sidebar subtitle
  starterCode,                 // pre-loaded in Ace editor
  content,                     // HTML string — lesson body
  challenge: { title, description, hint, validateKey, xp },
  quiz: [{ q, options[], answer, explanation }]  // answer is 0-indexed
}
```

**Progress** (saved to `localStorage` as `"pythonQuestProgress"`):
```js
{ completedLessons: [], challengesPassed: [], xp: 0, currentLesson: 1 }
```

**Quiz state** (saved to `localStorage` as `"pythonQuestQuiz"`):
```js
{ [lessonId]: { answers: { [questionIdx]: optionIdx } } }
```

## XP & level system

- Lessons: +100–150 XP on completion (all quiz questions answered)
- Challenges: +50–100 XP on pass
- Quiz questions: +25 XP per correct answer
- Levels: Newbie (0) → Coder (200) → Developer (500) → Pro (900) → Master (1400)

## Challenge validation

Each lesson has a `validateKey` that maps to a function in `VALIDATORS` (bottom of `lessons.js`). Validators receive `(output, code)` as strings and return `true/false`. Keep validators lenient — they check structure, not exact output.

## Lessons unlock sequentially

Lesson N is locked until lesson N-1 is completed (all quiz questions answered).

## Adding a new lesson

1. Add an object to the `LESSONS` array in `lessons.js` with a unique `id`
2. Add a matching key to `VALIDATORS` for the challenge
3. No changes needed in `app.js` or `index.html`

## Style conventions

- Dark theme (GitHub-style dark: `#0d1117` background)
- Language comparison boxes use classes: `.lang-box.js`, `.lang-box.unity`, `.lang-box.python`
- Info boxes: `.info-box.note`, `.info-box.tip`, `.info-box.warning`
- Each lesson content is an HTML string inside the `content` field — use the existing patterns

## GitHub

Repo: https://github.com/cicichu24/python-quest
