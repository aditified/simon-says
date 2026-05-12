# 🎮 Simon Says Game

A browser-based **Simon Says** memory game built with vanilla JavaScript, HTML, and CSS. The game generates a growing sequence of colored button flashes — your job is to remember and repeat it correctly.

> 🎓 Built as part of the **Sigma Web Development Course** by [Apna College](https://www.apnacollege.in/).

---

## 🕹️ How to Play

1. Press **any alphabet key** on your keyboard to start the game
2. Watch carefully — one button will **flash**
3. Click that button in the **same order** it flashed
4. Each level adds **one more color** to the sequence
5. If you click the **wrong button**, the screen flashes red and the game ends
6. Your score is the level you reached — try to beat your **high score!**
---
## ⚙️ How It Works

- On each level, a **random color** is added to the game sequence and flashed on screen
- The player must click the buttons in the **exact same order**
- The game validates each click in real time — a wrong click ends the game immediately
- **High score is saved** using `localStorage`, so it persists even after you close the browser
- On game over, the page flashes **red** as feedback before resetting
---
## 🛠️ Tech Stack

- **HTML** — Game structure
- **CSS** — Button styling and flash animation
- **JavaScript** — Game logic, sequence tracking, localStorage for high score
