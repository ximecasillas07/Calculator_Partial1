# Team AI Prompt & Audit Log

**Project Name:** Calculator - Midterm Partial 1
**Team Members:** Ximena Casillas, Marianna Jimenez
**Target:** Build a fully functional Calculator application.

---

## September 10th Log Entry

### Prompt

From our HTML file, extract all the classes that need styling and build the initial CSS structure for them.

### 2. The Interaction Log

_Document the primary prompts you used to generate the base code._

| AI Tool Used       | Exact Initial Prompt                                                                                                                                                           | What the AI Generated (Summary/Snippet)                                                                                       |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| _e.g., ChatGPT-4o_ | _"Create a responsive navigation bar using Bootstrap 5 that has links for Home, SDG Dashboard, and Team Profile. Center the links on mobile and right-align them on desktop."_ | Generated full HTML structure with standard Bootstrap utility classes (`navbar-expand-lg`, `collapse navbar-collapse`, etc.). |

### 3. The Human Audit & Modifications

_What did the AI get wrong or omit? What manual changes did you make to integrate this code into your existing application structure? (Write 2-3 sentences explaining your adjustments)._

- **What we changed/added:** The AI-generated code used static mock hrefs. We modified the HTML to use dynamic Express routing paths (`/` and `/sdg-dashboard`). We also adjusted the CSS padding manually to align with our project's custom color palette, and updated the responsive toggle button's `data-bs-target` to match our custom navbar wrapper ID.

### 4. Integration & Learnings

_How does this code integrate with the rest of your system? What is the core mechanism you learned?_

- **Core Mechanics:** The navbar works by utilizing Bootstrap's responsive breakpoints. The `navbar-expand-lg` class keeps it expanded on desktop but triggers the collapsable menu via JS triggers on screen widths below 992px. We had to ensure the Bootstrap bundle JS script was correctly loaded in our base template.
