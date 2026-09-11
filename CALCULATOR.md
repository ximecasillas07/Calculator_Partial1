# Calculator App Challenge

This project involves developing an interactive and responsive calculator application, designed to adjust its layout size and color theme based on user preferences.

---

## Contributors

* **Ximena Adelec Casillas Gonzalez** — ID: 0281613
* **Marianna Jazlyn Jimenez Esquivel** — ID: 0281837

---

## Challenge Objectives

The primary goal is to build out the calculator to match the provided design specifications as closely as possible.

### User Stories
Users should be able to:
* **Responsive Design:** View the size of elements adjust dynamically based on their device's screen size.
* **Basic Operations:** Perform core mathematical operations (addition, subtraction, multiplication, and division).
* **Custom Themes:** Switch the color theme among 3 visual options based on preference.

---

## Project Structure & Assets

* **`/design`**: Contains static JPG design previews for both Mobile and Desktop views.
* **`/images`**: Contains all optimized visual assets required for the project.

---

## Layout Specifications

| Device | Screen Width |
| :--- | :--- |
| **Mobile** | `375px` |
| **Desktop** | `1366px` |

---

## Style Guide & Themes

### Typography
* **Font Family:** [Spartan](https://fonts.google.com/specimen/Spartan) (Google Fonts)
* **Weights:** `700`

---

### Theme 1
* **Backgrounds:**
  * Main BG: `hsl(222, 26%, 31%)`
  * Toggle / Keypad BG: `hsl(223, 31%, 20%)`
  * Screen BG: `hsl(224, 36%, 15%)`
* **Keys:**
  * Reset / Del BG: `hsl(225, 21%, 49%)` | Shadow: `hsl(224, 28%, 35%)`
  * Equals / Toggle BG: `hsl(6, 63%, 50%)` | Shadow: `hsl(6, 70%, 34%)`
  * Number Key BG: `hsl(30, 25%, 89%)` | Shadow: `hsl(28, 16%, 65%)`
* **Text:**
  * Main Text (Numbers): `hsl(221, 14%, 31%)`
  * Secondary Text: `hsl(0, 0%, 100%)`

---

### Theme 2
* **Backgrounds:**
  * Main BG: `hsl(0, 0%, 90%)`
  * Toggle / Keypad BG: `hsl(0, 5%, 81%)`
  * Screen BG: `hsl(0, 0%, 93%)`
* **Keys:**
  * Reset / Del BG: `hsl(185, 42%, 37%)` | Shadow: `hsl(185, 58%, 25%)`
  * Equals / Toggle BG: `hsl(25, 98%, 40%)` | Shadow: `hsl(25, 99%, 27%)`
  * Number Key BG: `hsl(45, 7%, 89%)` | Shadow: `hsl(35, 11%, 61%)`
* **Text:**
  * Main Text (Numbers): `hsl(60, 10%, 19%)`
  * Secondary Text: `hsl(0, 0%, 100%)`

---

### Theme 3
* **Backgrounds:**
  * Main BG: `hsl(268, 75%, 9%)`
  * Toggle / Keypad BG: `hsl(268, 71%, 12%)`
  * Screen BG: `hsl(268, 71%, 12%)`
* **Keys:**
  * Reset / Del BG: `hsl(281, 89%, 26%)` | Shadow: `hsl(285, 91%, 52%)`
  * Equals / Toggle BG: `hsl(176, 100%, 44%)` | Shadow: `hsl(177, 92%, 70%)`
  * Number Key BG: `hsl(268, 47%, 21%)` | Shadow: `hsl(290, 70%, 36%)`
* **Text:**
  * Main Text: `hsl(52, 100%, 62%)`
  * Equals Text: `hsl(198, 20%, 13%)`
  * Secondary Text: `hsl(0, 0%, 100%)`

---

## Recommended Workflow

1. **HTML First:** Structure all semantic content in HTML before applying any CSS styles.
2. **Base Styles:** Configure global styles (`font-family`, CSS resets, `box-sizing`, etc.).
3. **Top-Down Styling:** Layout components starting from the top (Header / Theme Switcher) down to the bottom (Display, Keypad).
4. **Theme Management:** Implement the theme-switching logic (using CSS custom properties or classes on the `body`).