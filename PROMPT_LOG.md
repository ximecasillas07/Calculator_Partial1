# Team AI Prompt & Audit Log

**Project Name:** Calculator - Midterm Partial 1
**Team Members:** Ximena Casillas, Marianna Jimenez
**Target:** Build a fully functional Calculator application.

---

## September 10th Log Entry

### 1. High-Level Goal

Set up the base CSS themes and classes required for the HTML, then start styling each component from there. Also, include any necessary components to make the project look as close as possible to the reference image in the instructions.

### 2. The Interaction Log

| AI Tool Used | Exact Initial Prompt                                                                                                                                                                                                                                                                 | What the AI Generated (Summary/Snippet)                                                                                                                                                                                                                                 |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gemini       | From these styling themes, create the initial strucutre of the css file, make varibales to save the data; from our HTML file, extract all the classes that need styling (we add the html file already finished and the styling themes that were in the instruccions of the midterm). | Generated the initial strucuture of the CSS file with variables as `--clr-main-bg`, `--clr-toggle-bg` and `--clr-keypad-bg` (and others..)                                                                                                                              |
|              | Note: As we went along, we also asked for help to resolve specific questions and doubts we had about how to implement certain details such as such as configuring layout spacing, managing bounds of the display, styling special buttons, and adding box shadows.                   | For configuring layout spacing with `gap`, managing display bounds with `overflow`, styling interactive states via multi-class selectors like `.key.control:active and .key.action:active`, and implementing box shadows for a realistic 2-pixel downward press effect. |

### 3. The Human Audit & Modifications

- **What we changed/added:** The AI gave us the boilerplate structure and variables we asked for, leaving the specific component classes empty. We filled in and mapped those classes to match our HTML code precisely, making sure all three theme variables hooked up correctly without messing up the layout. Also we include and unsterstand the new component of styling.

### 4. Integration & Learnings

_How does this code integrate with the rest of your system? What is the core mechanism you learned?_

- **Core Mechanics:** This stylesheet serves as the visual foundation for the entire app, using custom properties tied to theme attributes so the interface shifts styles smoothly. We avoid writing duplicate code for every theme by telling the HTML to swap out those color values automatically with a single attribute change, keeping everything connected.
