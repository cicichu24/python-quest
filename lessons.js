// Python Quest — Lesson Data
// 8 lessons, each building on what the student already knows from JS, Unity C#

const LESSONS = [
  {
    id: 1,
    title: "Hello, Python!",
    icon: "👋",
    xp: 100,
    description: "Your first Python program — it's simpler than you think!",
    starterCode: `# This is a comment — same as // in JavaScript!
# Python doesn't need semicolons or curly braces

print("Hello, World!")
print("I know JavaScript AND Unity C# AND now Python!")

# Try changing these lines and click Run!
`,
    challenge: {
      title: "Introduce Yourself",
      description: `Print at least 3 lines that introduce yourself. Include:
1. Your name (e.g. "My name is Alex")
2. Your age
3. Your favorite game or programming language`,
      hint: "Use print() three times — one for each fact about yourself!",
      validateKey: "lesson1",
      xp: 50
    },
    quiz: [
      {
        q: "How do you display text in Python? (Like console.log in JavaScript)",
        options: ["echo(\"Hello\")", "console.log(\"Hello\")", "print(\"Hello\")", "Debug.Log(\"Hello\")"],
        answer: 2,
        explanation: "print() is Python's way to display text — much cleaner than console.log() or Debug.Log()!"
      },
      {
        q: "How do you write a single-line comment in Python?",
        options: ["// This is a comment", "/* comment */", "# This is a comment", "-- comment"],
        answer: 2,
        explanation: "Python uses # for comments. JavaScript uses //, but Python keeps it even simpler with just the hash symbol."
      },
      {
        q: "Python code needs semicolons at the end of each line.",
        options: ["True — just like JavaScript", "True — just like Unity C#", "False — Python doesn't need them!", "It depends on the computer"],
        answer: 2,
        explanation: "Python doesn't require semicolons! It's one of the things that makes Python code so clean and easy to read."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>👋 Hello, Python!</h1>
  <p class="lesson-desc">You already know how to code — Python is just a new language to add to your toolkit.</p>
</div>

<div class="info-box note">
  <span class="info-icon">💡</span>
  <div class="info-content">
    <strong>The big idea:</strong> Python uses <em>indentation</em> (spaces) instead of curly braces <code>{}</code>
    to organize code, and it doesn't need semicolons. That's it — that's basically the biggest difference!
  </div>
</div>

<div class="concept">
  <h3>Displaying Text — You Already Know This!</h3>
  <p>Every language has a way to print text to the screen. Here's how they all compare:</p>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript (you know this)</div>
    <pre><code class="language-javascript">console.log("Hello, World!");
console.log("Score:", 100);</code></pre>
  </div>
  <div class="lang-box unity">
    <div class="lang-label">Unity C# (you know this)</div>
    <pre><code class="language-csharp">Debug.Log("Hello, World!");
Debug.Log("Score: " + 100);</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python (new!)</div>
    <pre><code class="language-python">print("Hello, World!")
print("Score:", 100)</code></pre>
  </div>
</div>

<div class="concept">
  <h3>Comments</h3>
  <p>Comments work the same way — they're notes for humans, ignored by the computer.</p>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript / Unity C#</div>
    <pre><code class="language-javascript">// single line comment
/* multi
   line */</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python</div>
    <pre><code class="language-python"># single line comment
# (no /* */ in Python,
# just use multiple # lines)</code></pre>
  </div>
</div>

<div class="concept">
  <h3>Printing Multiple Things</h3>
  <p>Python's print() can take multiple values separated by commas — it automatically adds a space between them:</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>example.py</span></div>
  <pre><code class="language-python">name = "Alex"
age = 12
print("Name:", name, "Age:", age)
# Output: Name: Alex Age: 12

# You can also print nothing to get a blank line:
print()  # empty line
print("After the blank line!")</code></pre>
</div>

<div class="info-box tip">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Game dev connection:</strong> In Unity, you use <code>Debug.Log("message")</code> to print to the console.
    In Python, <code>print("message")</code> does the same thing — outputs text for debugging and information!
  </div>
</div>
`
  },

  {
    id: 2,
    title: "Variables & Types",
    icon: "📦",
    xp: 100,
    description: "Store data — Python is cleaner and simpler than JavaScript!",
    starterCode: `# Variables in Python — no type declarations!
name = "Alex"        # string (text)
age = 12             # int (whole number)
health = 100.0       # float (decimal number)
is_alive = True      # bool (True/False)

print("Player:", name)
print("Age:", age)
print("Health:", health)
print("Alive:", is_alive)

# Check the type of any variable:
print(type(age))      # <class 'int'>
print(type(name))     # <class 'str'>
`,
    challenge: {
      title: "Game Character Stats",
      description: `Create a game character with these variables:
- player_name (string) — your character's name
- level (int) — starting level (1)
- health (float) — starting health (100.0)
- is_hero (bool) — True or False
- damage (int) — attack damage

Then print ALL of them using print().`,
      hint: "Create 5 variables, then use 5 print() calls to show them all!",
      validateKey: "lesson2",
      xp: 50
    },
    quiz: [
      {
        q: "In Python, how do you create a variable called 'score' with value 500?",
        options: ["int score = 500;", "var score = 500;", "score = 500", "let score = 500;"],
        answer: 2,
        explanation: "Python doesn't need 'int', 'var', or 'let'! Just write the name, equals sign, and value. Python figures out the type automatically."
      },
      {
        q: "What is True + True equal to in Python?",
        options: ["TrueTrue", "Error", "2", "1"],
        answer: 2,
        explanation: "In Python, True equals 1 and False equals 0. So True + True = 1 + 1 = 2. Handy trick for counting!"
      },
      {
        q: "What does type(3.14) return?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
        answer: 1,
        explanation: "3.14 is a decimal number, so it's a float. Python uses 'float' not 'double' (they work the same way though!)."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>📦 Variables & Types</h1>
  <p class="lesson-desc">Python's type system is like JavaScript's but even cleaner — no var, let, or const!</p>
</div>

<div class="info-box note">
  <span class="info-icon">🧠</span>
  <div class="info-content">
    <strong>Key insight:</strong> JavaScript is <em>dynamically typed</em> — you use <code>let</code> or <code>var</code> and the type is figured out at runtime.
    Python works the same way, but even cleaner: no <code>var</code>, <code>let</code>, or <code>const</code> — just assign and go!
  </div>
</div>

<div class="concept">
  <h3>Creating Variables</h3>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript (var/let/const)</div>
    <pre><code class="language-javascript">let age = 12;
let health = 100.0;
let name = "Alex";
let isAlive = true;</code></pre>
  </div>
  <div class="lang-box unity">
    <div class="lang-label">Unity C# (must declare type)</div>
    <pre><code class="language-csharp">int age = 12;
float health = 100.0f;
string name = "Alex";
bool isAlive = true;</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python (just assign!)</div>
    <pre><code class="language-python">age = 12
health = 100.0
name = "Alex"
is_alive = True</code></pre>
  </div>
</div>

<div class="info-box tip">
  <span class="info-icon">🐍</span>
  <div class="info-content">
    <strong>Python naming style:</strong> Python uses <code>snake_case</code> (words_with_underscores) instead of
    <code>camelCase</code> used in JavaScript. So <code>isAlive</code> becomes <code>is_alive</code>,
    and <code>playerName</code> becomes <code>player_name</code>.
  </div>
</div>

<div class="concept">
  <h3>The 4 Basic Types</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>types.py</span></div>
  <pre><code class="language-python"># int — whole numbers (same as JS number type)
score = 1500
lives = 3

# float — decimal numbers (for decimals, like 3.14)
speed = 9.8
damage_mult = 1.5

# str — text/strings (use " or ' — both work!)
player_name = "Shadow Knight"
weapon = 'Dragon Sword'

# bool — True or False (capital T and F!)
is_game_over = False
has_key = True

# Check any variable's type:
print(type(score))        # &lt;class 'int'&gt;
print(type(player_name))  # &lt;class 'str'&gt;</code></pre>
</div>

<div class="concept">
  <h3>Converting Between Types</h3>
  <p>You can convert types just like in JavaScript (Number(), String(), Boolean()):</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>conversion.py</span></div>
  <pre><code class="language-python">score = "1500"          # This is a STRING "1500"
score_num = int(score)  # Convert to INT: 1500
score_back = str(score_num)  # Back to string

print(int("42"))        # 42
print(float("3.14"))    # 3.14
print(str(100))         # "100"
print(bool(0))          # False (0 = False in Python too!)</code></pre>
</div>

<div class="info-box tip">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Unity connection:</strong> In Unity C#, you do <code>(int)myFloat</code> to cast types.
    Python does the same thing with <code>int(myFloat)</code> — same idea, slightly different syntax!
  </div>
</div>
`
  },

  {
    id: 3,
    title: "Conditionals",
    icon: "🔀",
    xp: 100,
    description: "if/elif/else — same idea as JS and Unity C#, but cleaner!",
    starterCode: `# Conditionals — no curly braces, just use indentation!
score = 85

if score >= 90:
    print("Grade: A — Amazing!")
elif score >= 80:
    print("Grade: B — Great job!")
elif score >= 70:
    print("Grade: C — Keep going!")
else:
    print("Grade: F — Study more!")

# Try changing score to see different outputs
`,
    challenge: {
      title: "RPG Battle Outcome",
      description: `Create a battle checker! Set variables:
- player_hp (int) — player health (e.g. 50)
- enemy_hp (int) — enemy health (e.g. 0)

Then use if/elif/else to print:
- "You WIN! 🏆" if enemy_hp <= 0
- "You LOSE! 💀" if player_hp <= 0
- "Battle continues! ⚔️" if both are above 0`,
      hint: "Check enemy_hp first, then player_hp, then the else case!",
      validateKey: "lesson3",
      xp: 50
    },
    quiz: [
      {
        q: "In Python, what keyword replaces 'else if' from JavaScript?",
        options: ["elseif", "elif", "else if", "or if"],
        answer: 1,
        explanation: "Python shortens 'else if' to just 'elif' — saves typing! JavaScript uses 'else if' (two words)."
      },
      {
        q: "What's wrong with this Python code?\nif x > 5:\nprint('big')",
        options: ["Should use curly braces", "The print is not indented", "Should use 'elif' not 'if'", "Nothing is wrong"],
        answer: 1,
        explanation: "Python uses indentation (4 spaces) to show which code is inside the if block. 'print' must be indented inside the if!"
      },
      {
        q: "What does 'and' do in Python? (Like && in JavaScript/Unity C#)",
        options: ["It's the same as 'or'", "Checks if BOTH conditions are True", "Checks if EITHER condition is True", "Reverses a condition"],
        answer: 1,
        explanation: "Python uses words 'and', 'or', 'not' instead of &&, ||, ! — much more readable! 'and' means BOTH must be True."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>🔀 Conditionals</h1>
  <p class="lesson-desc">if/elif/else works just like JavaScript and Unity C# — just without the curly braces!</p>
</div>

<div class="concept">
  <h3>The Big Difference: Indentation vs Braces</h3>
  <p>In JavaScript and Unity C#, you use curly braces <code>{}</code> to group code. Python uses indentation (4 spaces or 1 tab) instead — no braces needed!</p>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript (uses braces)</div>
    <pre><code class="language-javascript">if (hp <= 0) {
  console.log("Game Over!");
} else if (hp < 25) {
  console.log("Low health!");
} else {
  console.log("You're fine!");
}</code></pre>
  </div>
  <div class="lang-box unity">
    <div class="lang-label">Unity C# (uses braces)</div>
    <pre><code class="language-csharp">if (hp <= 0) {
  Debug.Log("Game Over!");
} else if (hp < 25) {
  Debug.Log("Low health!");
} else {
  Debug.Log("You're fine!");
}</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python (uses indentation)</div>
    <pre><code class="language-python">if hp <= 0:
    print("Game Over!")
elif hp < 25:
    print("Low health!")
else:
    print("You're fine!")</code></pre>
  </div>
</div>

<div class="info-box warning">
  <span class="info-icon">⚠️</span>
  <div class="info-content">
    <strong>Watch out!</strong> Python uses <code>:</code> at the end of if/elif/else lines — don't forget it!
    The code inside must be indented by <strong>4 spaces</strong>. Mixing tabs and spaces causes errors!
  </div>
</div>

<div class="concept">
  <h3>Comparison Operators — Same as JavaScript!</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>operators.py</span></div>
  <pre><code class="language-python">x = 10
print(x == 10)   # True  (equals — same as JS!)
print(x != 5)    # True  (not equals)
print(x > 5)     # True  (greater than)
print(x < 5)     # False (less than)
print(x >= 10)   # True  (greater or equal)
print(x <= 10)   # True  (less or equal)</code></pre>
</div>

<div class="concept">
  <h3>Logical Operators — Python Uses Words!</h3>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript / Unity C#</div>
    <pre><code class="language-javascript">if (hp > 0 && hasKey) { ... }
if (isRunning || isJumping) { ... }
if (!isGameOver) { ... }</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python</div>
    <pre><code class="language-python">if hp > 0 and has_key:    # &&
    pass
if is_running or is_jumping:  # ||
    pass
if not is_game_over:      # !
    pass</code></pre>
  </div>
</div>

<div class="code-example">
  <div class="code-example-header"><span>game_check.py</span></div>
  <pre><code class="language-python">level = 5
has_sword = True
boss_hp = 200

if level >= 5 and has_sword:
    print("You can fight the boss!")
    if boss_hp > 100:
        print("This will be tough...")
    else:
        print("You've got this!")
else:
    print("Level up first!")</code></pre>
</div>

<div class="info-box tip">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Unity connection:</strong> In Unity C# scripts, you write
    <code>if (condition) { }</code> in Update() all the time.
    Python's version is just the same logic, minus the parentheses and braces!
  </div>
</div>
`
  },

  {
    id: 4,
    title: "Loops",
    icon: "🔄",
    xp: 100,
    description: "for and while loops — Python's range() is incredibly useful",
    starterCode: `# Python's for loop is super clean!
# range(5) = 0, 1, 2, 3, 4
for i in range(5):
    print("Count:", i)

print("---")

# Loop through a list directly (no index needed!)
weapons = ["Sword", "Bow", "Staff", "Dagger"]
for weapon in weapons:
    print("Weapon:", weapon)
`,
    challenge: {
      title: "FizzBuzz (Classic!)",
      description: `Print numbers 1 to 20, but:
- Print "Fizz" if the number is divisible by 3
- Print "Buzz" if divisible by 5
- Print "FizzBuzz" if divisible by BOTH 3 and 5
- Otherwise, just print the number

Hint: Use % (modulo) to check if a number divides evenly.
      5 % 3 = 2 (remainder)
      9 % 3 = 0 (no remainder = divisible!)`,
      hint: "Check FizzBuzz FIRST (both 3 and 5), then Fizz, then Buzz, then the number. Use range(1, 21) to count from 1 to 20!",
      validateKey: "lesson4",
      xp: 50
    },
    quiz: [
      {
        q: "What does range(1, 6) produce?",
        options: ["1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5", "1, 2, 3, 4, 5", "1, 6"],
        answer: 2,
        explanation: "range(start, stop) goes from start UP TO BUT NOT INCLUDING stop. So range(1, 6) = 1, 2, 3, 4, 5."
      },
      {
        q: "How do you write a Python for loop that counts 0, 1, 2, 3, 4?",
        options: ["for i = 0; i < 5; i++:", "for (int i = 0; i < 5; i++)", "for i in range(5):", "for i in [0,5]:"],
        answer: 2,
        explanation: "Python's for loop with range() is much shorter than JavaScript or Unity C#! range(5) automatically gives you 0, 1, 2, 3, 4."
      },
      {
        q: "What keyword exits a loop early in Python? (Same as JavaScript/Unity C#)",
        options: ["exit", "stop", "break", "return"],
        answer: 2,
        explanation: "break works the same in Python, JavaScript, and Unity C# — it immediately exits the current loop. 'continue' skips to the next iteration."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>🔄 Loops</h1>
  <p class="lesson-desc">Python loops work like JavaScript and Unity — but the for loop is way more powerful!</p>
</div>

<div class="concept">
  <h3>The for Loop — Python Style</h3>
  <p>In JavaScript and Unity C#, you write a 3-part for loop. Python's is much shorter:</p>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript</div>
    <pre><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4</code></pre>
  </div>
  <div class="lang-box unity">
    <div class="lang-label">Unity C#</div>
    <pre><code class="language-csharp">for (int i = 0; i < 5; i++) {
  Debug.Log(i);
}
// Output: 0 1 2 3 4</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python</div>
    <pre><code class="language-python">for i in range(5):
    print(i)
# Output: 0 1 2 3 4</code></pre>
  </div>
</div>

<div class="concept">
  <h3>range() — Python's Loop Superpower</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>range_examples.py</span></div>
  <pre><code class="language-python">range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5  (start, stop)
range(0, 10, 2) # 0, 2, 4, 6, 8  (start, stop, step)
range(10, 0, -1)# 10, 9, 8, ... 1 (countdown!)

# Countdown example:
for i in range(5, 0, -1):
    print(i, "...")
print("Blast off! 🚀")</code></pre>
</div>

<div class="concept">
  <h3>Looping Over Lists (Super Useful!)</h3>
  <p>Python's for loop can iterate directly over lists — no index needed:</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>list_loop.py</span></div>
  <pre><code class="language-python">enemies = ["Goblin", "Dragon", "Boss", "Skeleton"]

# The Pythonic way:
for enemy in enemies:
    print(f"Defeated: {enemy}!")

# If you need the index too, use enumerate():
for index, enemy in enumerate(enemies):
    print(f"{index + 1}. {enemy}")</code></pre>
</div>

<div class="concept">
  <h3>while Loop — Same as JavaScript/Unity C#</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>while_loop.py</span></div>
  <pre><code class="language-python">health = 100

while health > 0:
    health -= 25  # -= works the same as JavaScript!
    print(f"Health: {health}")

print("Game Over!")

# break and continue work exactly like JavaScript/Unity C#:
for i in range(10):
    if i == 5:
        break      # stop the loop
    if i % 2 == 0:
        continue   # skip even numbers
    print(i)       # prints: 1, 3</code></pre>
</div>

<div class="info-box tip">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Unity connection:</strong> Unity's Update() runs every frame — it's basically a while loop.
    In Python, you'd use a while loop to simulate a game loop:
    <code>while game_running: update()</code>
  </div>
</div>
`
  },

  {
    id: 5,
    title: "Functions",
    icon: "⚙️",
    xp: 100,
    description: "def — Python functions are like JS functions but cleaner",
    starterCode: `# Functions use 'def' keyword
def greet(name):
    return "Hello, " + name + "!"

result = greet("Alex")
print(result)

# Default parameters (like JavaScript default args):
def power_up(player, amount=10):
    new_health = player + amount
    return new_health

print(power_up("Hero", 50))  # custom amount
print(power_up("Hero"))      # uses default (10)
`,
    challenge: {
      title: "Calculator Functions",
      description: `Create 4 functions:
- add(a, b) — returns a + b
- subtract(a, b) — returns a - b
- multiply(a, b) — returns a * b
- divide(a, b) — returns a / b, but print "Can't divide by zero!" if b is 0

Then call each function and print the results!
Example: print(add(10, 5)) should print 15`,
      hint: "Use 'def' to create each function. Use 'return' to send back the result. Check if b == 0 before dividing!",
      validateKey: "lesson5",
      xp: 50
    },
    quiz: [
      {
        q: "What keyword defines a function in Python?",
        options: ["function", "func", "def", "void"],
        answer: 2,
        explanation: "Python uses 'def' (short for define) to create functions. JavaScript uses 'function', Unity C# uses the return type (void, int, etc.)."
      },
      {
        q: "What does a Python function return if it has no return statement?",
        options: ["0", "Error", "None", "False"],
        answer: 2,
        explanation: "In Python, a function without return gives back 'None' — Python's version of undefined. In JavaScript it returns undefined, in Unity C# it's void."
      },
      {
        q: "What's a default parameter in this function: def attack(damage=10)?",
        options: ["damage is always 10", "damage will be 10 if no value is passed in", "damage must be more than 10", "This is a syntax error"],
        answer: 1,
        explanation: "Default parameters work just like JavaScript! If you call attack() without a value, damage = 10. If you call attack(25), damage = 25."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>⚙️ Functions</h1>
  <p class="lesson-desc">Functions in Python are like JavaScript functions — but you use 'def' instead of 'function'</p>
</div>

<div class="concept">
  <h3>Defining Functions</h3>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript</div>
    <pre><code class="language-javascript">function add(a, b) {
  return a + b;
}
let result = add(5, 3); // 8</code></pre>
  </div>
  <div class="lang-box unity">
    <div class="lang-label">Unity C# (needs return type)</div>
    <pre><code class="language-csharp">int Add(int a, int b) {
  return a + b;
}
int result = Add(5, 3); // 8</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python</div>
    <pre><code class="language-python">def add(a, b):
    return a + b

result = add(5, 3)  # 8</code></pre>
  </div>
</div>

<div class="info-box note">
  <span class="info-icon">💡</span>
  <div class="info-content">
    <strong>No return type needed!</strong> Unlike Unity C#, Python doesn't need you to declare whether
    a function returns an int, string, etc. It figures it out automatically — just like JavaScript!
  </div>
</div>

<div class="concept">
  <h3>Default Parameters — Like JavaScript!</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>defaults.py</span></div>
  <pre><code class="language-python">def level_up(player_name, levels=1, show_message=True):
    new_level = levels
    if show_message:
        print(f"{player_name} gained {levels} level(s)!")
    return new_level

level_up("Alex")           # levels=1, show_message=True (defaults)
level_up("Alex", 5)        # levels=5, show_message=True
level_up("Alex", 3, False) # silent level up</code></pre>
</div>

<div class="concept">
  <h3>Multiple Return Values — Python Superpower!</h3>
  <p>Python can return multiple values at once — JavaScript needs an object or array for this, but Python makes it easy:</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>multi_return.py</span></div>
  <pre><code class="language-python">def get_player_stats():
    name = "Shadow Knight"
    hp = 100
    level = 5
    return name, hp, level  # returns a tuple!

# Unpack all three values at once:
player, health, lvl = get_player_stats()
print(player, health, lvl)  # Shadow Knight 100 5</code></pre>
</div>

<div class="concept">
  <h3>f-strings — The Best Way to Format Text</h3>
  <p>Python's f-strings are like JavaScript template literals (backtick strings):</p>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript template literals</div>
    <pre><code class="language-javascript">let name = "Alex";
let score = 500;
console.log(\`Player: \${name}, Score: \${score}\`);</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python f-strings</div>
    <pre><code class="language-python">name = "Alex"
score = 500
print(f"Player: {name}, Score: {score}")
# Can even do math inside!
print(f"Double score: {score * 2}")</code></pre>
  </div>
</div>
`
  },

  {
    id: 6,
    title: "Lists",
    icon: "📋",
    xp: 120,
    description: "Python lists = JS arrays on steroids — slicing, comprehensions, and more",
    starterCode: `# Lists — like JS arrays, but with more built-in powers!
inventory = ["Sword", "Shield", "Potion", "Map", "Key"]

print(inventory[0])        # First item: Sword
print(inventory[-1])       # Last item: Key  (cool trick!)
print(inventory[1:3])      # Slice: ['Shield', 'Potion']
print(len(inventory))      # Length: 5

# Modify the list:
inventory.append("Bow")    # Add to end
inventory.remove("Map")    # Remove specific item
inventory.sort()           # Sort alphabetically!
print(inventory)
`,
    challenge: {
      title: "High Score Board",
      description: `Build a high score tracker:
1. Create a list called scores with 5 numbers: 450, 820, 310, 1200, 760
2. Print the original scores list
3. Add a new score: 950
4. Sort the list in DESCENDING order (highest first)
5. Print "Top 3 Scores:" then print each of the top 3 scores with its rank

Expected output should show rank 1, 2, 3 with the highest scores.`,
      hint: "Use .append() to add, .sort(reverse=True) to sort highest-first, and scores[0], scores[1], scores[2] for the top 3!",
      validateKey: "lesson6",
      xp: 60
    },
    quiz: [
      {
        q: "How do you get the LAST element of a list in Python without knowing its length?",
        options: ["list[len-1]", "list[-1]", "list[last]", "list.last()"],
        answer: 1,
        explanation: "Python negative indexes count from the end! list[-1] is the last element, list[-2] is second-to-last, etc. This is a Python superpower!"
      },
      {
        q: "What does scores[1:4] return if scores = [10, 20, 30, 40, 50]?",
        options: ["[10, 20, 30, 40]", "[20, 30, 40]", "[20, 30, 40, 50]", "[10, 20, 30]"],
        answer: 1,
        explanation: "Slicing: list[start:stop] gives elements from index 'start' up to but not including 'stop'. So [1:4] gives indexes 1, 2, 3 → [20, 30, 40]."
      },
      {
        q: "Which method adds an item to the END of a list?",
        options: ["list.add()", "list.push()", "list.append()", "list.insert()"],
        answer: 2,
        explanation: "list.append() adds to the end — it's like JavaScript's array.push(). list.insert(index, value) adds at a specific position."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>📋 Lists</h1>
  <p class="lesson-desc">Python lists are like JavaScript arrays — but with more built-in tricks!</p>
</div>

<div class="concept">
  <h3>Creating and Accessing Lists</h3>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript array</div>
    <pre><code class="language-javascript">let items = ["Sword", "Bow", "Staff"];
console.log(items[0]);        // "Sword"
console.log(items.length);    // 3
items.push("Shield");         // add to end
items.splice(1, 1);          // remove at index</code></pre>
  </div>
  <div class="lang-box unity">
    <div class="lang-label">Unity C# List&lt;T&gt;</div>
    <pre><code class="language-csharp">List&lt;string&gt; items = new List&lt;string&gt;
    {"Sword", "Bow", "Staff"};
Debug.Log(items[0]);   // "Sword"
Debug.Log(items.Count); // 3
items.Add("Shield");   // add to end
items.RemoveAt(1);     // remove at index</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python list</div>
    <pre><code class="language-python">items = ["Sword", "Bow", "Staff"]
print(items[0])        # "Sword"
print(len(items))      # 3
items.append("Shield") # add to end
items.remove("Bow")    # remove by value</code></pre>
  </div>
</div>

<div class="concept">
  <h3>Slicing — Python's Superpower! ✂️</h3>
  <p>JavaScript doesn't have built-in slicing — you'd need .slice() with specific rules. Python's is way more intuitive:</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>slicing.py</span></div>
  <pre><code class="language-python">scores = [100, 200, 300, 400, 500]

scores[0]     # 100     (first element)
scores[-1]    # 500     (last element)
scores[1:3]   # [200, 300]  (index 1 and 2)
scores[:3]    # [100, 200, 300]  (first 3)
scores[2:]    # [300, 400, 500]  (from index 2 to end)
scores[::-1]  # [500, 400, 300, 200, 100]  (reversed!)</code></pre>
</div>

<div class="concept">
  <h3>Useful List Methods</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>list_methods.py</span></div>
  <pre><code class="language-python">scores = [450, 200, 820, 100, 600]

scores.append(950)      # add to end
scores.insert(0, 1000)  # add at index 0 (beginning)
scores.remove(100)      # remove first occurrence of 100
scores.sort()           # sort ascending: [200, 450, 600, 820, 950, 1000]
scores.sort(reverse=True)  # sort descending: [1000, 950, ...]
scores.reverse()        # flip the list
print(scores.index(820))   # find position of 820
print(max(scores))      # highest value
print(min(scores))      # lowest value
print(sum(scores))      # add all up</code></pre>
</div>

<div class="concept">
  <h3>List Comprehensions — One-Line Magic! 🪄</h3>
  <p>Python lets you create lists in one line using a special syntax — much shorter than a loop!</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>comprehension.py</span></div>
  <pre><code class="language-python"># Old way (like JS):
squares = []
for i in range(1, 6):
    squares.append(i * i)
# squares = [1, 4, 9, 16, 25]

# Python way — list comprehension:
squares = [i * i for i in range(1, 6)]
# Same result in ONE line!

# With a condition:
even_squares = [i*i for i in range(1, 11) if i % 2 == 0]
# [4, 16, 36, 64, 100]</code></pre>
</div>

<div class="info-box tip">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Game dev use:</strong> Lists are perfect for inventories, enemy lists, waypoints, score boards — anything where you need a collection of items that can change!
  </div>
</div>
`
  },

  {
    id: 7,
    title: "Dictionaries",
    icon: "📖",
    xp: 120,
    description: "Key-value pairs — just like JavaScript objects!",
    starterCode: `# Dictionaries — like JavaScript objects (or Unity C# Dictionaries)!
player = {
    "name": "Shadow Knight",
    "hp": 100,
    "level": 5,
    "weapon": "Dark Sword",
    "is_boss": False
}

# Access values:
print(player["name"])         # Shadow Knight
print(player["hp"])           # 100

# Safe access with default:
print(player.get("mana", 0))  # 0 (not in dict, use default)

# Update a value:
player["hp"] = 75
player["level"] += 1          # += works!
print(player)
`,
    challenge: {
      title: "RPG Character Creator",
      description: `Create a character creator! Make a dictionary called character with:
- "name": pick any name
- "class": "Warrior", "Mage", or "Rogue"
- "hp": starting health based on class (Warrior=150, Mage=80, Rogue=100)
- "attack": damage (Warrior=20, Mage=35, Rogue=25)
- "special": a special ability (make something up!)

Then print a formatted character sheet using f-strings showing all stats.`,
      hint: "Create the dict first, then use multiple print() or f-strings to display the stats nicely!",
      validateKey: "lesson7",
      xp: 60
    },
    quiz: [
      {
        q: "How do you access the value for key 'name' in a dictionary called 'player'?",
        options: ["player.name", "player->name", "player[\"name\"]", "player.get.name"],
        answer: 2,
        explanation: "Use square brackets with the key string: player[\"name\"]. This is similar to JavaScript object access with brackets (obj[\"key\"]) vs dot notation (obj.key)."
      },
      {
        q: "What's the difference between player['hp'] and player.get('hp', 0)?",
        options: [
          "They're the same thing",
          "get() is faster",
          "player['hp'] crashes if 'hp' doesn't exist; get() returns 0 instead",
          "get() can only return numbers"
        ],
        answer: 2,
        explanation: "Using dict['key'] raises a KeyError if the key doesn't exist. dict.get('key', default) safely returns the default value — much safer!"
      },
      {
        q: "How do you loop over all key-value pairs in a dictionary?",
        options: [
          "for key in dict:",
          "for key, value in dict.items():",
          "for key, value in dict:",
          "for (key, value) of dict:"
        ],
        answer: 1,
        explanation: "dict.items() returns pairs of (key, value). You can unpack them directly: 'for k, v in dict.items()' — very Pythonic!"
      }
    ],
    content: `
<div class="lesson-header">
  <h1>📖 Dictionaries</h1>
  <p class="lesson-desc">Dictionaries store key-value pairs — just like JavaScript objects!</p>
</div>

<div class="concept">
  <h3>Creating Dictionaries</h3>
</div>

<div class="lang-compare">
  <div class="lang-box js">
    <div class="lang-label">JavaScript object</div>
    <pre><code class="language-javascript">let player = {
  name: "Alex",
  hp: 100,
  level: 5
};
console.log(player.name);    // Alex
console.log(player["hp"]);   // 100</code></pre>
  </div>
  <div class="lang-box unity">
    <div class="lang-label">Unity C# Dictionary</div>
    <pre><code class="language-csharp">var player = new Dictionary
    &lt;string, object&gt;();
player["name"] = "Alex";
player["hp"] = 100;
player["level"] = 5;
Debug.Log(player["hp"]); // 100</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python dict</div>
    <pre><code class="language-python">player = {
    "name": "Alex",
    "hp": 100,
    "level": 5
}
print(player["name"])  # Alex
print(player["hp"])    # 100</code></pre>
  </div>
</div>

<div class="concept">
  <h3>Working with Dictionaries</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>dict_ops.py</span></div>
  <pre><code class="language-python">player = {"name": "Alex", "hp": 100, "gold": 50}

# Add new key:
player["xp"] = 0

# Update existing:
player["hp"] -= 25   # took damage!
player["gold"] += 10

# Delete a key:
del player["xp"]

# Check if key exists (like 'in' for lists):
if "name" in player:
    print(f"Player: {player['name']}")

# Safe get with default:
mana = player.get("mana", 100)  # 100 (default)</code></pre>
</div>

<div class="concept">
  <h3>Looping Over Dictionaries</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>dict_loop.py</span></div>
  <pre><code class="language-python">stats = {"str": 15, "dex": 12, "int": 18, "con": 14}

# Loop over keys only:
for stat in stats:
    print(stat)  # str, dex, int, con

# Loop over values only:
for value in stats.values():
    print(value)  # 15, 12, 18, 14

# Loop over BOTH key and value (most common!):
for stat, value in stats.items():
    print(f"{stat.upper()}: {value}")</code></pre>
</div>

<div class="concept">
  <h3>Nesting — Dicts Inside Dicts</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>nested.py</span></div>
  <pre><code class="language-python">game = {
    "player": {
        "name": "Alex",
        "hp": 100
    },
    "enemies": ["Goblin", "Dragon"],
    "level": 3
}

# Access nested values:
print(game["player"]["name"])    # Alex
print(game["enemies"][0])        # Goblin
print(game["level"])             # 3</code></pre>
</div>

<div class="info-box tip">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Game dev use:</strong> Dictionaries are perfect for player stats, item properties,
    game settings, and JSON data (game configs, level data). They're basically the same as
    JavaScript objects — and JSON is just a text version of dictionaries!
  </div>
</div>
`
  },

  {
    id: 8,
    title: "Classes & OOP",
    icon: "🏗️",
    xp: 150,
    description: "Classes in Python — like Unity MonoBehaviour scripts!",
    starterCode: `# Classes — similar to Unity's C# MonoBehaviour scripts!
class Player:
    def __init__(self, name, hp=100):  # __init__ = constructor
        self.name = name               # self = this in JS/Unity C#
        self.hp = hp
        self.level = 1
        self.inventory = []

    def attack(self, damage=10):
        print(f"{self.name} attacks for {damage} damage!")

    def heal(self, amount):
        self.hp = min(self.hp + amount, 100)  # cap at 100
        print(f"{self.name} healed to {self.hp} HP!")

    def __str__(self):   # like toString() in Java/C#
        return f"[{self.name}] HP:{self.hp} Level:{self.level}"

# Create instances (like 'new Player()' in Unity C#/JS):
hero = Player("Shadow Knight")
hero.attack(25)
hero.heal(10)
print(hero)   # calls __str__
`,
    challenge: {
      title: "Mini RPG: Build a Character Class",
      description: `Create a Character class with:
- __init__(self, name, char_class) — sets name, class, and stats based on class:
  - "Warrior": hp=150, attack=20
  - "Mage": hp=80, attack=35
  - "Rogue": hp=100, attack=25
- is_alive(self) — returns True if hp > 0
- take_damage(self, amount) — reduce hp by amount, print "[name] took X damage! HP: Y"
- display(self) — print a formatted stat block

Create 2 characters and have them "fight" (each takes damage from the other), then show who's alive!`,
      hint: "Use if/elif in __init__ to set different stats based on char_class. Create instances and call take_damage() on each!",
      validateKey: "lesson8",
      xp: 100
    },
    quiz: [
      {
        q: "What is __init__ in Python? (Compare to Unity C# or JavaScript)",
        options: [
          "A special loop that runs forever",
          "A constructor — runs when you create a new object",
          "A destructor — runs when the object is deleted",
          "An import statement"
        ],
        answer: 1,
        explanation: "__init__ is Python's constructor — like Start() in Unity C# or a constructor in JavaScript classes. It runs when you create a new instance."
      },
      {
        q: "What does 'self' mean in Python class methods?",
        options: [
          "It refers to the class itself",
          "It's a keyword that means 'static'",
          "It refers to the current instance — like 'this' in JavaScript/Unity C#",
          "It's an optional parameter you never need"
        ],
        answer: 2,
        explanation: "'self' in Python is the same as 'this' in JavaScript and Unity C#. It refers to the specific object the method is being called on."
      },
      {
        q: "How do you create a new instance of a class called 'Enemy'?",
        options: [
          "Enemy enemy = new Enemy();",
          "new Enemy()",
          "enemy = Enemy()",
          "let enemy = Enemy();"
        ],
        answer: 2,
        explanation: "In Python, just call the class like a function: enemy = Enemy(). No 'new' keyword needed! Unity C# uses 'new', but Python doesn't."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>🏗️ Classes & OOP</h1>
  <p class="lesson-desc">Python classes work just like Unity C# MonoBehaviour scripts — just different syntax!</p>
</div>

<div class="info-box note">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Unity connection:</strong> Every Unity script is a class that extends MonoBehaviour.
    Python classes work the same way — you define properties and methods, then create instances.
    <code>__init__</code> is like Start(), and methods are like your custom functions in Unity!
  </div>
</div>

<div class="concept">
  <h3>Defining a Class</h3>
</div>

<div class="lang-compare">
  <div class="lang-box unity">
    <div class="lang-label">Unity C#</div>
    <pre><code class="language-csharp">public class Player : MonoBehaviour {
  public string playerName;
  public int hp;
  void Start() {
    // constructor-like
  }
  void Attack() {
    Debug.Log(playerName + " attacks!");
  }
}</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python</div>
    <pre><code class="language-python">class Player:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def attack(self):
        print(f"{self.name} attacks!")</code></pre>
  </div>
</div>

<div class="concept">
  <h3>Creating and Using Objects</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>using_objects.py</span></div>
  <pre><code class="language-python">class Enemy:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage
        self.is_alive = True

    def take_damage(self, amount):
        self.hp -= amount
        if self.hp <= 0:
            self.is_alive = False
            print(f"{self.name} is defeated!")
        else:
            print(f"{self.name} has {self.hp} HP left.")

# Create instances (no 'new' keyword in Python!):
goblin = Enemy("Goblin", 50, 10)
dragon = Enemy("Dragon", 500, 75)

goblin.take_damage(30)   # Goblin has 20 HP left.
goblin.take_damage(25)   # Goblin is defeated!</code></pre>
</div>

<div class="concept">
  <h3>Inheritance — Just Like Unity C#!</h3>
</div>

<div class="code-example">
  <div class="code-example-header"><span>inheritance.py</span></div>
  <pre><code class="language-python">class Character:  # Base class
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def speak(self):
        print(f"{self.name} says hello!")

class Warrior(Character):  # Inherits from Character
    def __init__(self, name):
        super().__init__(name, 150)  # call parent's __init__
        self.shield = True

    def block(self):
        print(f"{self.name} raises their shield!")

class Mage(Character):  # Also inherits from Character
    def __init__(self, name):
        super().__init__(name, 80)
        self.mana = 100

    def cast_spell(self):
        print(f"{self.name} casts fireball! 🔥")

# Both are Characters, but each has extra abilities:
w = Warrior("Thor")
m = Mage("Gandalf")
w.speak()      # inherited from Character
w.block()      # Warrior-specific
m.cast_spell() # Mage-specific</code></pre>
</div>

<div class="info-box tip">
  <span class="info-icon">✨</span>
  <div class="info-content">
    <strong>Almost there! 🎉</strong> You now know Python's core features.
    Up next: the bonus lesson where you put it ALL together and build a real text game!
  </div>
</div>
`
  }
  ,

  {
    id: 9,
    title: "Text Adventure Game",
    icon: "🎮",
    xp: 200,
    description: "Put it ALL together — build a dungeon crawler with rooms, enemies, and loot!",
    starterCode: `import random

# ═══════════════════════════════════════════
#   DRAGON'S DUNGEON  —  Text Adventure
#   Uses: dicts, lists, functions, loops,
#         conditionals, and random!
# ═══════════════════════════════════════════

# Game state — like Inspector variables in Unity
player = {
    "name": "Hero",
    "hp": 100,
    "max_hp": 100,
    "gold": 0,
    "inventory": []
}

# The dungeon — a dict of rooms (like Scenes in Unity)
dungeon = {
    "entrance": {
        "desc": "A stone archway. Torches flicker on the walls.",
        "exits": ["armory", "corridor"],
        "enemy": None,
        "loot": None
    },
    "armory": {
        "desc": "Dusty weapons line the walls. You spot a rusty sword!",
        "exits": ["entrance"],
        "enemy": None,
        "loot": "Rusty Sword"
    },
    "corridor": {
        "desc": "A long dark passage. A goblin leaps out! ⚔️",
        "exits": ["entrance", "throne_room"],
        "enemy": {"name": "Goblin", "hp": 30, "dmg": 12},
        "loot": None
    },
    "throne_room": {
        "desc": "The Dragon glares at you with glowing eyes. 🐉",
        "exits": ["corridor"],
        "enemy": {"name": "Dragon", "hp": 80, "dmg": 35},
        "loot": "Dragon's Crown"
    }
}

current_room = "entrance"

# ── Game functions (like methods in a Unity script) ──────────────

def status():
    filled = player["hp"] // 20
    empty  = (player["max_hp"] - player["hp"]) // 20
    hp_bar = "❤️" * filled + "🖤" * empty
    print(f"  {hp_bar}  HP:{player['hp']}  Gold:{player['gold']}💰")
    if player["inventory"]:
        print(f"  Bag: {', '.join(player['inventory'])}")

def look():
    room = dungeon[current_room]
    print(f"\\n── {current_room.upper().replace('_', ' ')} " + "─" * 20)
    print(f"  {room['desc']}")
    print(f"  Paths: {', '.join(room['exits'])}")

def go(destination):
    global current_room          # 'global' lets us change the variable outside the function
    room = dungeon[current_room]
    if destination not in room["exits"]:
        print(f"  ❌ No path to '{destination}' from here!")
        return
    current_room = destination
    look()
    new_room = dungeon[current_room]
    # Auto-pick up loot
    if new_room["loot"] and new_room["loot"] not in player["inventory"]:
        player["inventory"].append(new_room["loot"])
        print(f"  🎒 Picked up: {new_room['loot']}")
    # Fight if enemy is alive
    if new_room["enemy"] and new_room["enemy"]["hp"] > 0:
        battle(new_room["enemy"])

def battle(enemy):
    print(f"\\n  ⚔️  BATTLE: {enemy['name']}  (HP: {enemy['hp']})")
    while enemy["hp"] > 0 and player["hp"] > 0:
        my_dmg = random.randint(10, 25)
        e_dmg  = random.randint(max(1, enemy["dmg"] - 5), enemy["dmg"] + 5)
        enemy["hp"]  -= my_dmg
        player["hp"] -= e_dmg
        print(f"  You: -{my_dmg} dmg | {enemy['name']}: -{e_dmg} dmg | Your HP: {max(0,player['hp'])}")
    if player["hp"] <= 0:
        print("\\n  💀 YOU DIED. Better luck next time!")
    else:
        player["gold"] += 20
        print(f"  ✅ {enemy['name']} defeated! +20 gold")

def check_win():
    if "Dragon's Crown" in player["inventory"]:
        print("\\n  🏆 YOU WIN! You claimed the Dragon's Crown!")
        print(f"  Final stats — HP: {player['hp']}  Gold: {player['gold']}💰")

# ── Your adventure! Change the go() calls to explore ────────────
print("🏰 DRAGON'S DUNGEON")
print("=" * 38)
look()

go("armory")
status()
go("entrance")
go("corridor")
status()
go("throne_room")
status()
check_win()
`,
    challenge: {
      title: "Expand the Dungeon",
      description: `Add a new room to the dungeon! Your new room must have:
1. A unique key name (e.g. "crypt" or "library" or "cave")
2. A description ("desc")
3. Connected exits so you can reach it (add your room to another room's exits list too!)
4. A new enemy with its own name, hp, and dmg
5. Some loot (a string for the item name)

Then add go() calls at the bottom to visit your new room and call check_win() at the end.

Tip: copy an existing room block from the dungeon dict and modify it!`,
      hint: `Add a new key to the dungeon dict like: "crypt": { "desc": "...", "exits": ["corridor"], "enemy": {"name":"Skeleton","hp":40,"dmg":15}, "loot":"Ancient Key" }
Don't forget to also add "crypt" to corridor's exits list so you can reach it!`,
      validateKey: "lesson9",
      xp: 100
    },
    quiz: [
      {
        q: "How do you import Python's random module to use random numbers?",
        options: [
          "include random;",
          "import random",
          "using random;",
          "require('random')"
        ],
        answer: 1,
        explanation: "Python uses 'import module_name' — much simpler than other languages. After importing, you can call random.randint(), random.choice(), etc."
      },
      {
        q: "What does random.randint(1, 6) do?",
        options: [
          "Returns exactly 1 or 6 only",
          "Returns a random float between 1 and 6",
          "Returns a random whole number from 1 to 6 (like rolling a die!)",
          "Returns a random number between 0 and 6"
        ],
        answer: 2,
        explanation: "random.randint(a, b) returns a random integer INCLUDING both endpoints — just like rolling a die! This is different from range(), which excludes the end."
      },
      {
        q: "What does the 'global' keyword do inside a function?",
        options: [
          "Makes a variable available on the internet",
          "Deletes the variable after the function ends",
          "Tells Python to modify the variable from outside the function, not create a local copy",
          "Makes the variable read-only"
        ],
        answer: 2,
        explanation: "By default, assigning inside a function creates a LOCAL variable. 'global current_room' says 'I want to change the OUTER current_room, not a new local one.' — like accessing a public variable in Unity from any script."
      }
    ],
    content: `
<div class="lesson-header">
  <h1>🎮 Text Adventure Game</h1>
  <p class="lesson-desc">Every concept you've learned — variables, dicts, lists, loops, functions, classes — comes together here.</p>
</div>

<div class="info-box tip">
  <span class="info-icon">🏆</span>
  <div class="info-content">
    <strong>This is the boss level.</strong> You're not learning new syntax here — you're learning how to
    <em>combine</em> everything into a real program. That's the most important skill in programming.
  </div>
</div>

<div class="concept">
  <h3>The Game Loop</h3>
  <p>Every game has a loop that keeps it running. In Unity, that's <code>Update()</code> called every frame.
  In a text game, our "loop" is a sequence of player actions. Here's the big picture:</p>
</div>

<div class="lang-compare">
  <div class="lang-box unity">
    <div class="lang-label">Unity C# game loop</div>
    <pre><code class="language-csharp">void Update() {
    // runs every frame
    HandleInput();
    MovePlayer();
    CheckCollisions();
    UpdateUI();
}</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python text game loop</div>
    <pre><code class="language-python">while player["hp"] > 0:
    action = get_input()
    if action == "go north":
        go("north")
    elif action == "fight":
        battle(enemy)
    update_display()</code></pre>
  </div>
</div>

<div class="concept">
  <h3>The random Module</h3>
  <p>Python has a built-in <code>random</code> module. Import it once at the top, then use it anywhere:</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>random_examples.py</span></div>
  <pre><code class="language-python">import random

# Roll a dice (1–6)
roll = random.randint(1, 6)

# Pick a random item from a list
loot = random.choice(["Sword", "Shield", "Potion"])

# Random float between 0.0 and 1.0 (for probability checks)
chance = random.random()
if chance < 0.25:
    print("Critical hit!")   # 25% chance</code></pre>
</div>

<div class="info-box note">
  <span class="info-icon">🎮</span>
  <div class="info-content">
    <strong>Unity connection:</strong> <code>random.randint(1, 6)</code> is exactly like
    <code>Random.Range(1, 7)</code> in Unity C# (Unity's Range excludes the max, Python's randint includes it).
    <code>random.random()</code> is like <code>Random.value</code> in Unity.
  </div>
</div>

<div class="concept">
  <h3>Game State as a Dictionary</h3>
  <p>All your player's data lives in one dictionary — like public variables on a MonoBehaviour in Unity:</p>
</div>

<div class="lang-compare">
  <div class="lang-box unity">
    <div class="lang-label">Unity C# MonoBehaviour</div>
    <pre><code class="language-csharp">public class Player : MonoBehaviour {
    public string playerName = "Hero";
    public int hp = 100;
    public int gold = 0;
    public List&lt;string&gt; inventory;
}</code></pre>
  </div>
  <div class="lang-box python">
    <div class="lang-label">🐍 Python dict (same idea!)</div>
    <pre><code class="language-python">player = {
    "name": "Hero",
    "hp": 100,
    "gold": 0,
    "inventory": []
}
# Access anywhere: player["hp"] -= 10</code></pre>
  </div>
</div>

<div class="concept">
  <h3>The World as Nested Dicts</h3>
  <p>Each room is a dictionary inside the main dungeon dictionary — rooms containing enemies, loot, and exits:</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>dungeon_structure.py</span></div>
  <pre><code class="language-python">dungeon = {
    "entrance": {
        "desc": "A torch-lit archway.",
        "exits": ["hall", "armory"],  # connected rooms
        "enemy": None,
        "loot": None
    },
    "hall": {
        "desc": "A dark corridor. A goblin lurks!",
        "exits": ["entrance"],
        "enemy": {"name": "Goblin", "hp": 30, "dmg": 12},
        "loot": "Gold Coin"
    }
}

# Navigate: dungeon["hall"]["enemy"]["name"] → "Goblin"</code></pre>
</div>

<div class="concept">
  <h3>The global Keyword</h3>
  <p>When a function needs to <em>change</em> a variable that lives outside it, you declare it <code>global</code>:</p>
</div>

<div class="code-example">
  <div class="code-example-header"><span>global_example.py</span></div>
  <pre><code class="language-python">current_room = "entrance"

def go(destination):
    global current_room      # "I want the OUTER variable, not a local copy"
    current_room = destination
    print(f"Moved to {current_room}")

go("hall")
print(current_room)  # "hall" — the outer variable changed!

# NOTE: you DON'T need global just to READ or mutate (like list.append).
# You only need it when you ASSIGN (=) to the variable.</code></pre>
</div>

<div class="concept">
  <h3>Putting It All Together</h3>
  <p>The starter code in the editor is a complete, playable dungeon game. Read through it — you'll recognise every piece from earlier lessons. Then try the challenge below!</p>
</div>

<div class="info-box tip">
  <span class="info-icon">💡</span>
  <div class="info-content">
    <strong>How the game works without input():</strong> In a real game you'd call <code>input()</code> to get
    player commands. Here we sequence <code>go()</code> calls directly — same game logic,
    you just pre-plan the route. Try changing the <code>go()</code> calls at the bottom to explore different paths!
  </div>
</div>
`
  }
];

// Challenge validators — called from app.js
const VALIDATORS = {
  lesson1: (output, code) => {
    const lines = output.trim().split('\n').filter(l => l.trim());
    return lines.length >= 3;
  },
  lesson2: (output, code) => {
    const lines = output.trim().split('\n').filter(l => l.trim());
    return lines.length >= 5 && (code.includes('player_name') || code.includes('level') || code.includes('health'));
  },
  lesson3: (output, code) => {
    const out = output.toLowerCase();
    return (out.includes('win') || out.includes('lose') || out.includes('continue') || out.includes('battle'));
  },
  lesson4: (output, code) => {
    const lines = output.trim().split('\n').filter(l => l.trim());
    const hasFizz = lines.some(l => l.includes('Fizz'));
    const hasBuzz = lines.some(l => l.includes('Buzz'));
    return lines.length >= 15 && hasFizz && hasBuzz;
  },
  lesson5: (output, code) => {
    const outputLines = output.trim().split('\n').filter(l => l.trim());
    return outputLines.length >= 4 && (code.includes('def add') || code.includes('def subtract')) && (code.includes('def divide') || code.includes('def multiply'));
  },
  lesson6: (output, code) => {
    const out = output.toLowerCase();
    const lines = output.trim().split('\n').filter(l => l.trim());
    return lines.length >= 4 && (out.includes('1') || out.includes('top'));
  },
  lesson7: (output, code) => {
    const lines = output.trim().split('\n').filter(l => l.trim());
    const out = output;
    return lines.length >= 4 && code.includes('{') && code.includes(':');
  },
  lesson8: (output, code) => {
    const out = output.toLowerCase();
    return code.includes('class') && code.includes('__init__') && code.includes('self') && lines_count(output) >= 3;
  },
  lesson9: (output, code) => {
    // Must have added a new room (more than 4 keys in dungeon dict)
    // Heuristic: count dungeon room entries — original has 4, they must add at least 1 more
    const roomMatches = (code.match(/"exits"\s*:/g) || []).length;
    const hasNewRoom = roomMatches >= 5;
    const hasEnemy = code.includes('"enemy"') && (code.match(/"enemy"\s*:/g) || []).length >= 5;
    const hasOutput = lines_count(output) >= 8;
    return hasNewRoom && hasEnemy && hasOutput;
  }
};

function lines_count(output) {
  return output.trim().split('\n').filter(l => l.trim()).length;
}
