# Team AI Prompt & Audit Log

**Project Name:** Calculator - Midterm Partial 1  
**Team Members:** Ximena Adelec Casillas Gonzalez (ID: 0281613), Marianna Jazlyn Jimenez Esquivel (ID: 0281837)  
**Target:** Build a fully functional calculator application

---

## Log Entry 1: HTML Structure & JS Logic (Ximena Casillas)

### 1. High-Level Goal

Reorganize a confusing initial HTML layout into a clean, legible, and semantic structure to establish a solid foundation for JavaScript DOM manipulation and application logic.

### 2. The Interaction Log

| AI Tool Used | Exact Initial Prompt                                                                                                                                                                                                                                          | What the AI Generated (Summary/Snippet)                                                                                                                        |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gemini       | _"The initial HTML code for this calculator challenge is really messy and hard to read. Can you please reorganize it and format it in a much cleaner, more legible way so I can understand the layout better and work on the JavaScript logic on top of it?"_ | Cleaned up and restructured the raw HTML layout into a well-formatted, semantic DOM hierarchy, making the keypad and display elements easy to read and target. |

### 3. The Human Audit & Modifications

While Gemini provided a clean and legible HTML base, I manually audited and refined the DOM connections to fit our exact application needs. I adjusted class names and added dataset attributes to the keypad buttons to streamline event delegation in JavaScript. Furthermore, with code review and guidance from a senior computer science student, I built input validation checks directly into the JavaScript file to prevent edge-case errors like chaining multiple operators or entering multiple decimal points.

### 4. Integration & Learnings

- **Core Mechanics:** The readable HTML serves as the primary bridge between the UI and JavaScript. Every button exposes clear data attributes for mathematical operators and numbers. JavaScript attaches a single event listener to the keypad container (event delegation), reads the targeted button's value, and updates the display element dynamically.

---

## Log Entry 2: CSS Architecture & Theme System (Marianna Jimenez)

### 1. High-Level Goal

Set up the base CSS themes and variables required for the HTML, then style each component from there to ensure the project matches the visual reference as closely as possible.

### 2. The Interaction Log

| AI Tool Used | Exact Initial Prompt                                                                                                                                                                                                                                                                     | What the AI Generated (Summary/Snippet)                                                                                                                                                                                                                                      |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gemini       | _"From these styling themes, create the initial structure of the css file, make variables to save the data; from our HTML file, extract all the classes that need styling (we add the html file already finished and the styling themes that were in the instructions of the midterm)."_ | Generated the initial structure of the CSS file with variables such as `--clr-main-bg`, `--clr-toggle-bg`, and `--clr-keypad-bg`.                                                                                                                                            |
| Gemini       | _Note: Additional prompts were used to resolve specific questions regarding layout spacing, display bounds, special button styles, and box-shadow implementation._                                                                                                                       | Provided solutions for configuring layout spacing with `gap`, managing display bounds with `overflow`, styling interactive states via multi-class selectors (`.key.control:active`, `.key.action:active`), and implementing box shadows for a 2-pixel downward press effect. |

### 3. The Human Audit & Modifications

The AI provided the boilerplate structure and variables, leaving specific component classes empty. I manually filled in and mapped those classes to match our HTML code precisely, ensuring all three theme variables hooked up correctly without disrupting the layout. We also reviewed and thoroughly understood each new styling component before integration.

### 4. Integration & Learnings

- **Core Mechanics:** The stylesheet serves as the visual foundation for the app, using custom CSS properties tied to theme attributes so the interface shifts styles smoothly. We avoided writing duplicate code for every theme by enabling the HTML to swap color values dynamically with an attribute change.
