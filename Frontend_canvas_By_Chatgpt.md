# MASTER PRODUCT PROMPT
## Build a Canva-Style Visual Frontend Design & Code Studio for Vibe Coders and Professional Developers

You are an expert Product Architect, UX/UI Designer, Frontend Engineer, Design-System Architect, and Developer-Tool Engineer.

Build a production-grade web application that provides a **Canva-like visual design experience for creating and editing website frontends**, while simultaneously providing **real, clean, reusable, AI-friendly frontend code**.

The product should feel as easy as Canva for non-designers, while providing the control, code visibility, component architecture, responsive controls, and developer workflows expected by professional frontend developers.

This is NOT simply a website template editor.

It is a:

> **Visual Frontend Design Studio + Component Library + Website Builder + Code Generator + Developer Playground + AI-ready Frontend Development Environment**

The entire product must be designed around one core principle:

> **VISUAL DESIGN ↔ COMPONENTS ↔ CODE must remain synchronized in real time.**

---

# 1. CORE PRODUCT PRINCIPLE

Every website must have a structured internal representation.

Use a structured Design State / Component Tree / AST as the source of truth.

Architecture:

```text
                    DESIGN STATE
                         │
              COMPONENT TREE / AST
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
       CANVAS        COMPONENTS        CODE
          │              │              │
          └──────────────┼──────────────┘
                         ↓
                    LIVE PREVIEW
```

Any change made through:

- Canvas
- Component inspector
- Global styles
- Code editor
- Responsive editor
- Animation editor
- Component editor

must update all relevant representations.

Example:

```text
Change Button Background
        ↓
Design State updates
        ↓
Canvas button changes
        ↓
Component preview changes
        ↓
Website preview changes
        ↓
Generated CSS/React/Tailwind/etc. changes
```

The reverse direction must also be supported wherever technically safe:

```text
Code change
    ↓
Parser / structured representation
    ↓
Component
    ↓
Canvas
    ↓
Live website
```

Do NOT create disconnected visual controls that merely fake code generation.

---

# 2. PRODUCT NAME / POSITIONING

The application name can be configured later.

Use a professional SaaS-style product identity.

Positioning:

> Design your frontend visually. Edit every detail. See the code instantly. Build production-ready websites without manually writing every line of frontend code.

Target users:

1. Non-designers
2. Vibe coders
3. Students learning frontend
4. Freelancers
5. UI/UX designers
6. Frontend developers
7. Full-stack developers
8. AI-assisted developers
9. Agencies
10. Startup founders

---

# 3. MAIN APPLICATION AREAS

The application should contain:

```text
Dashboard
Create Website
Template Library
Frontend Component Library
My Projects
My Components
Design Systems
Assets
Editor / CanvasStudio
Code Studio
Preview
Responsive Preview
Animation Studio
Global Styles
Project Settings
Export
```

---

# 4. DASHBOARD

Create a polished Canva-inspired dashboard.

Primary CTA:

## Create Website Frontend

Secondary options:

- Start from Blank
- Use Website Template
- Browse Components
- Import Code
- Import Existing Project
- Open Recent Project

Dashboard should show:

- Recent projects
- Favorite templates
- Saved components
- Recently used fonts
- Design systems
- Drafts
- Search
- Categories
- Templates
- Quick actions

---

# 5. CREATE WEBSITE FRONTEND

When the user clicks:

**Create Website Frontend**

show a template-selection interface.

Initially provide approximately:

**30–50 high-quality interactive website templates.**

Architecture must allow hundreds/thousands later.

Categories:

- SaaS
- AI SaaS
- Startup
- Portfolio
- Agency
- Business
- E-commerce
- Education
- Course
- Blog
- News
- Restaurant
- Healthcare
- Finance
- Real Estate
- Technology
- Personal Brand
- Developer Portfolio
- Documentation
- Landing Page
- Marketing
- Dashboard
- Community
- Event
- Travel
- Creative
- Minimal
- Corporate

Templates must NOT be static screenshots.

Every template must be a real interactive frontend.

---

# 6. INTERACTIVE TEMPLATE PREVIEW

Before opening a template, allow the user to preview it.

The preview must support:

- Navigation
- Buttons
- Hover effects
- Dropdowns
- Tabs
- Accordions
- Modals
- Forms
- Carousels
- Animations
- Scrolling
- Responsive behavior

Provide:

- Desktop preview
- Tablet preview
- Mobile preview

Actions:

```text
Preview
Use Template
Customize
Duplicate
Favorite
```

---

# 7. CANVASSTUDIO

The main editor should be called:

## CanvasStudio

The experience should be inspired by the simplicity of Canva while providing deeper frontend-development controls.

Suggested structure:

```text
┌──────────────────────────────────────────────────────────┐
│ Logo | Project | Undo | Redo | Device | Preview | Export │
├──────────────┬──────────────────────────────┬────────────┤
│              │                              │            │
│ LEFT PANEL   │         CANVAS               │ INSPECTOR  │
│              │                              │            │
│ Templates    │                              │ Properties │
│ Sections     │       Website Frontend       │            │
│ Components   │                              │            │
│ Elements     │                              │            │
│ Layers       │                              │            │
│ Assets       │                              │            │
│ Fonts        │                              │            │
│             │                              │            │
├──────────────┴──────────────────────────────┴────────────┤
│ Visual | Component | Code | Full Website Code | Console  │
└──────────────────────────────────────────────────────────┘
```

The layout should be resizable.

Users should be able to collapse:

- Left sidebar
- Right sidebar
- Bottom code panel

---

# 8. CANVAS

The canvas is the visual editing environment.

Every meaningful frontend element should be selectable.

Examples:

- Page
- Section
- Container
- Header
- Footer
- Navigation
- Logo
- Heading
- Paragraph
- Button
- Link
- Image
- Video
- Icon
- Card
- Form
- Input
- Checkbox
- Radio
- Select
- Modal
- Tabs
- Accordion
- Table
- Badge
- Avatar
- Divider
- Grid
- Flex container

When an element is selected:

- Show bounding box
- Show resize handles
- Show element name
- Show hierarchy
- Show relevant inspector controls
- Show responsive information

---

# 9. LAYERS / DOM TREE

Provide a Canva/Figma-inspired Layers panel.

Example:

```text
Page
├── Header
│   ├── Logo
│   ├── Navigation
│   └── CTA Button
│
├── Hero
│   ├── Container
│   │   ├── Heading
│   │   ├── Paragraph
│   │   └── Button
│   └── Hero Image
│
├── Features
│   ├── Feature Card
│   ├── Feature Card
│   └── Feature Card
│
└── Footer
```

Support:

- Select
- Rename
- Reorder
- Drag
- Duplicate
- Delete
- Hide
- Lock
- Group
- Ungroup
- Expand
- Collapse

---

# 10. ADD ELEMENT

Provide an Add button.

Users can add:

### Basic

- Text
- Heading
- Paragraph
- Link
- Button
- Image
- Video
- Icon
- Divider

### Layout

- Section
- Container
- Flex
- Grid
- Columns
- Stack

### UI

- Card
- Badge
- Avatar
- Modal
- Dropdown
- Tabs
- Accordion
- Tooltip
- Toast
- Alert
- Breadcrumb
- Pagination
- Progress
- Spinner
- Skeleton

### Forms

- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Slider
- Date picker
- Search
- File upload
- Form

### Advanced

- Navbar
- Hero
- Pricing
- Testimonials
- FAQ
- Team
- Gallery
- Timeline
- Stats
- Comparison
- Logo cloud
- Newsletter
- Contact section

---

# 11. SECTION LIBRARY

Allow users to insert complete sections.

Examples:

- Hero
- About
- Features
- Services
- Pricing
- Testimonials
- FAQ
- Team
- Portfolio
- Contact
- CTA
- Newsletter
- Statistics
- Logo Cloud
- Timeline
- Comparison
- Gallery
- Footer

Every section must be editable after insertion.

---

# 12. HEADER SYSTEM

Provide a dedicated Header Library.

Examples:

- Minimal Header
- SaaS Header
- Transparent Header
- Sticky Header
- Floating Header
- Centered Navigation
- Split Navigation
- Mega Menu
- E-commerce Header
- Mobile Header

User should be able to:

- Add header
- Replace header
- Edit header
- Duplicate header
- Delete header
- Save header as reusable component

---

# 13. FOOTER SYSTEM

Provide:

- Minimal Footer
- Corporate Footer
- SaaS Footer
- Multi-column Footer
- Large Footer
- Newsletter Footer
- Social Footer
- E-commerce Footer

Footer should be fully editable and reusable.

---

# 14. TEXT EDITOR

Clicking a text element should immediately expose text editing.

Support:

- Edit text
- Add text
- Delete text
- Duplicate text
- Font family
- Font size
- Font weight
- Italic
- Underline
- Strike
- Letter spacing
- Line height
- Alignment
- Text transform
- Text color
- Gradient text
- Text opacity
- Text shadow
- Text width
- Text height
- Margin
- Padding
- Position
- Responsive typography

Allow inline editing directly on canvas.

---

# 15. FONT SYSTEM

Provide hundreds of fonts.

Features:

- Search
- Font preview
- Categories
- Recently used
- Favorites
- Recommended
- Font pairing
- Font weight preview

User can type a font name and instantly find it.

Changing the font must update:

```text
Canvas
Component
Website Preview
Generated Code
Global Style if applicable
```

---

# 16. BUTTON SYSTEM

Buttons should have a dedicated component system.

Click a button and open Button Controls.

Button variants:

- Solid
- Outline
- Ghost
- Gradient
- Glass
- 3D
- Neumorphic
- Pill
- Rounded
- Sharp
- Icon Button
- Icon + Text
- Loading
- Floating
- Glow
- Magnetic
- Animated
- CTA
- Social

---

# 17. BUTTON PROPERTIES

### Content

- Button text
- Icon
- Icon position
- Link
- URL
- Target
- Download
- Action

### Typography

- Font
- Font size
- Weight
- Letter spacing
- Line height

### Colors

- Background
- Text
- Hover background
- Hover text
- Active background
- Focus color
- Disabled color

### Border

- Width
- Style
- Color
- Hover color
- Radius

### Dimensions

- Width
- Height
- Min width
- Max width

### Spacing

- Padding
- Margin
- Gap

### Effects

- Shadow
- Glow
- Blur
- Opacity
- Transform

### Animation

- Hover
- Focus
- Click
- Entrance
- Exit
- Loading
- Scroll

Every change must appear immediately.

---

# 18. INDIVIDUAL COMPONENT EDITING

A user must be able to edit one specific instance.

Example:

There are 10 buttons on a website.

User selects Button #4.

Changing Button #4:

- Color
- Width
- Radius
- Shadow
- Animation
- Font
- Icon

must ONLY affect Button #4 if it is an independent instance.

---

# 19. GLOBAL COMPONENT EDITING

The system must ALSO support global editing.

Example:

There are 10 instances of the same Button component.

User chooses:

## Edit Component

Then changes:

```text
Background
Radius
Font
Padding
Shadow
Hover
Animation
```

The change must automatically propagate to every instance using that component.

Architecture:

```text
Button Component Definition
          ↓
     Instance 1
     Instance 2
     Instance 3
     Instance 4
          ↓
Global component change
          ↓
All instances update
```

---

# 20. LOCAL OVERRIDES

Global component editing must support instance-level overrides.

Example:

Global Button:

```text
Background = Blue
Radius = 12px
Padding = 16px
```

Button #4:

```text
Background = Red
```

If global background changes:

```text
Blue → Green
```

Button #1, #2, #3, #5 etc. become Green.

Button #4 remains Red because it has a local override.

Provide:

- Reset override
- Detach instance
- Convert to independent component

---

# 21. GLOBAL TEXT SYSTEM

The same functionality must exist for text.

If a website uses the same text style everywhere:

```text
Heading Style
Body Style
Button Text
Caption
Label
```

allow global editing.

Example:

Change global Heading:

```text
Font
Weight
Color
Size
Line Height
Letter Spacing
```

All headings using that style update.

But an individual heading can still be customized.

---

# 22. GLOBAL DESIGN TOKENS

Provide global:

### Colors

- Primary
- Secondary
- Accent
- Background
- Surface
- Text
- Muted
- Border
- Success
- Warning
- Error

### Typography

- Display
- H1
- H2
- H3
- Body
- Small
- Caption
- Button

### Spacing

- XS
- SM
- MD
- LG
- XL
- 2XL

### Radius

- Small
- Medium
- Large
- Pill

### Shadows

- Small
- Medium
- Large
- Glow

### Breakpoints

- Mobile
- Tablet
- Desktop
- Large Desktop

All tokens should be reflected in generated code.

Example:

```css
:root {
  --color-primary: ...;
  --color-background: ...;
  --color-text: ...;
  --radius-md: ...;
  --space-md: ...;
}
```

---

# 23. BACKGROUND SYSTEM

Support:

- Solid color
- Linear gradient
- Radial gradient
- Mesh gradient
- Image
- Video
- Pattern
- Noise
- Grid
- Dots
- Waves
- Shapes
- Aurora
- Particles
- Glass
- Blur
- Animated backgrounds

Controls:

- Color
- Position
- Size
- Repeat
- Opacity
- Blur
- Blend mode
- Animation
- Speed
- Direction

---

# 24. ANIMATION STUDIO

Every compatible element should have animation controls.

### Entrance

- Fade
- Slide
- Scale
- Zoom
- Bounce
- Rotate
- Blur
- Reveal

### Hover

- Scale
- Lift
- Glow
- Shadow
- Color
- Border
- Transform

### Click

- Press
- Scale
- Ripple
- Bounce
- Rotate

### Scroll

- Reveal
- Parallax
- Sticky
- Scale
- Fade
- Transform

Controls:

- Duration
- Delay
- Easing
- Iteration
- Direction
- Trigger
- Distance
- Intensity

Advanced users can edit CSS keyframes.

---

# 25. CODE PANEL

The bottom or side area must provide:

```text
Visual
Component
Code
Full Website Code
```

The code view must update live.

---

# 26. FULL WEBSITE CODE VIEW

This is mandatory.

The user must be able to see the **complete website code in one place**.

Provide a dedicated:

## Full Website Code

view.

It should include all relevant:

- HTML
- CSS
- JavaScript
- React components
- Tailwind classes
- Design tokens
- Responsive rules
- Animations
- Component definitions
- Assets references

depending on the selected framework/export format.

Example project structure:

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Button.jsx
│   ├── Hero.jsx
│   ├── Card.jsx
│   └── Footer.jsx
│
├── pages/
│   └── Home.jsx
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── animations.css
│
└── App.jsx
```

Provide both:

### File Tree

and

### Full Code

---

# 27. SINGLE COMPONENT CODE

When selecting one component:

```text
Button
```

show:

- Live preview
- Component properties
- Component code
- CSS
- HTML
- React
- Tailwind

Example:

```text
┌─────────────────────────────────────┐
│ Live Button Preview                 │
├─────────────────────────────────────┤
│ Component Properties                │
├─────────────────────────────────────┤
│ React Code                          │
├─────────────────────────────────────┤
│ CSS                                 │
└─────────────────────────────────────┘
```

---

# 28. CODE ↔ LIVE COMPONENT SYNCHRONIZATION

If user changes:

```css
border-radius: 20px;
```

the live component must immediately update.

If user changes the component visually:

```text
Radius: 20px → 30px
```

the code must immediately update.

Same applies to:

- Color
- Size
- Font
- Margin
- Padding
- Shadow
- Border
- Animation
- Position
- Layout
- Responsive rules

---

# 29. FULL WEBSITE CODE ↔ CANVAS

When changing code that is supported by the structured editor:

```text
Code
 ↓
Design State
 ↓
Component Tree
 ↓
Canvas
 ↓
Preview
```

All should update.

If arbitrary code cannot be safely parsed into the visual model, clearly indicate:

> Advanced code detected. This section contains custom code that may not be fully visually editable.

Never silently destroy custom code.

---

# 30. CODE EXPORT

Support export to:

- HTML
- CSS
- JavaScript
- React
- React + CSS
- React + Tailwind
- Next.js
- Vue
- optionally other frameworks later

Generated code must be:

- Clean
- Semantic
- Responsive
- Accessible
- Reusable
- Maintainable
- AI-readable
- Developer-readable
- Production-oriented

Avoid unnecessary generated code.

---

# 31. AI-FRIENDLY OUTPUT

The generated project should work well when pasted into:

- ChatGPT
- Claude
- Gemini
- Cursor
- Windsurf
- VS Code
- Other coding agents

Provide:

### Copy Code

### Download Project

### Copy Component

### Copy HTML

### Copy CSS

### Copy React

### Copy Tailwind

### Copy Prompt

---

# 32. OPTIONAL PROMPT GENERATOR

For every selected component provide:

## Generate AI Prompt

Generate a concise technical prompt describing:

- Component structure
- Appearance
- Colors
- Typography
- Dimensions
- Responsive behavior
- Animation
- Interaction
- Accessibility

This is optional because direct code is the primary output.

---

# 33. RESPONSIVE DESIGN SYSTEM

Top toolbar:

```text
Desktop
Tablet
Mobile
Custom
```

Allow custom viewport width.

Example:

```text
1440px
1024px
768px
390px
```

Controls must support responsive overrides.

Example:

```text
Desktop
font-size: 64px

Tablet
font-size: 48px

Mobile
font-size: 36px
```

Generate proper media queries.

---

# 34. RESPONSIVE VISUAL EDITING

A user should be able to select:

```text
Desktop
```

change layout.

Then select:

```text
Mobile
```

and make mobile-specific changes.

Do not overwrite desktop settings unless explicitly requested.

Provide indicators:

- Global value
- Desktop override
- Tablet override
- Mobile override

---

# 35. LAYOUT SYSTEM

Support:

### Flexbox

- Direction
- Align
- Justify
- Gap
- Wrap
- Grow
- Shrink
- Basis

### CSS Grid

- Columns
- Rows
- Gap
- Areas
- Alignment

### Position

- Static
- Relative
- Absolute
- Fixed
- Sticky

### Container

- Width
- Max-width
- Padding
- Margin

All should map correctly to generated CSS.

---

# 36. SPACING SYSTEM

Every component should expose:

- Margin
- Padding
- Gap

Support individual sides:

```text
Top
Right
Bottom
Left
```

Also:

- Linked values
- Unlinked values
- Responsive values

---

# 37. DESIGN MEASUREMENT TOOLS

Provide:

- Pixel measurements
- Alignment guides
- Snap-to-grid
- Smart guides
- Spacing indicators
- Container boundaries
- Grid overlay

---

# 38. GLOBAL SEARCH

Search across:

- Templates
- Components
- Sections
- Fonts
- Icons
- Assets
- Saved components
- Projects

---

# 39. ICON LIBRARY

Provide a searchable icon library.

Features:

- Search
- Categories
- Style
- Size
- Color
- Stroke
- Fill

Allow:

- Insert icon
- Replace icon
- Animate icon
- Change color
- Change size
- Rotate

---

# 40. IMAGE / MEDIA SYSTEM

Support:

- Upload
- Replace
- Resize
- Crop
- Position
- Radius
- Shadow
- Border
- Opacity
- Filters
- Overlay
- Object fit

Images should support responsive behavior.

---

# 41. FORMS

Provide visual form builder.

Elements:

- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Button
- Validation message

Properties:

- Placeholder
- Label
- Required
- Validation
- Focus state
- Error state
- Success state
- Disabled state

---

# 42. INTERACTION STATES

Every appropriate component should support:

- Default
- Hover
- Active
- Focus
- Disabled
- Loading
- Selected
- Error
- Success

Allow users to visually edit each state.

---

# 43. COMPONENT STATES

A Button should not only have one appearance.

Example:

```text
Default
Hover
Active
Focus
Disabled
Loading
```

The code generator must generate the corresponding CSS/state logic.

---

# 44. PAGE MANAGEMENT

Allow multi-page websites.

Example:

```text
Pages
├── Home
├── About
├── Services
├── Pricing
├── Blog
├── Contact
└── Login
```

Support:

- Add page
- Duplicate page
- Rename
- Delete
- Reorder
- Set homepage
- Navigation linking

---

# 45. GLOBAL HEADER / FOOTER

Allow:

```text
Use globally
```

for Header/Footer.

If global header is changed:

```text
Header Component
       ↓
All pages update
```

Allow page-specific overrides.

---

# 46. ROUTING

For multi-page websites support:

- Internal links
- External links
- Anchor links
- Page routes
- Navigation menus

---

# 47. GLOBAL VS LOCAL SYSTEM

Every major property should clearly indicate whether it is:

```text
Global
Inherited
Local Override
```

Example:

```text
Button Background
● Global
○ Local
```

This is critical for predictable editing.

---

# 48. DETACH COMPONENT

Provide:

## Detach from Component

After detaching:

```text
Global component changes
      ↓
No longer affect detached instance
```

---

# 49. SAVE AS COMPONENT

Any custom element or section can be saved:

## Save as Component

Then store it in:

### My Components

Allow reuse across projects.

---

# 50. COMPONENT VARIANTS

Support variants.

Example:

```text
Button
├── Primary
├── Secondary
├── Outline
├── Ghost
└── Danger
```

Users can create custom variants.

---

# 51. DESIGN SYSTEM LIBRARY

Allow users to create reusable design systems.

Store:

- Colors
- Fonts
- Typography
- Buttons
- Forms
- Cards
- Components
- Spacing
- Radius
- Shadows
- Breakpoints

A design system can be applied to a new project.

---

# 52. VERSION HISTORY

Provide:

- Autosave
- Undo
- Redo
- Version history
- Restore version
- Project snapshots

---

# 53. COPY / PASTE

Support:

- Copy element
- Paste element
- Copy style
- Paste style
- Duplicate
- Copy component
- Copy code

---

# 54. KEYBOARD SHORTCUTS

Support common shortcuts:

```text
Ctrl/Cmd + Z
Ctrl/Cmd + Shift + Z
Ctrl/Cmd + C
Ctrl/Cmd + V
Ctrl/Cmd + D
Delete
Escape
Arrow keys
Shift + Arrow
```

Document shortcuts inside the application.

---

# 55. PREVIEW MODE

Provide a distraction-free preview.

Remove editing controls.

Allow:

- Desktop
- Tablet
- Mobile

preview.

---

# 56. LIVE WEBSITE MODE

The preview must behave like the real website.

Do not show fake interactions.

Buttons, menus, animations and responsive behavior should actually work.

---

# 57. CODE CONSOLE / ERRORS

Provide a developer console area.

Display:

- JavaScript errors
- Invalid CSS
- Component errors
- Missing assets
- Broken links
- Accessibility warnings

Provide actionable error messages.

---

# 58. ACCESSIBILITY

Generated frontend should follow accessibility best practices.

Support:

- Semantic HTML
- Keyboard navigation
- Focus states
- ARIA where required
- Alt text
- Color contrast
- Accessible labels
- Reduced motion support

Add an Accessibility Checker.

---

# 59. PERFORMANCE

Provide basic performance analysis.

Detect:

- Large images
- Excessive animation
- Unnecessary DOM complexity
- Potential layout shift
- Heavy assets
- Excessive CSS

---

# 60. RESPONSIVE VALIDATION

Automatically scan the design for:

- Overflow
- Text clipping
- Broken grids
- Button overflow
- Image overflow
- Mobile layout problems
- Horizontal scrolling

Show warnings with clickable locations.

---

# 61. CODE QUALITY

Generated code should avoid:

- Duplicate styles
- Random inline CSS
- Unused components
- Unnecessary wrappers
- Repeated hardcoded values
- Poor naming
- Non-semantic markup

Use reusable components and design tokens.

---

# 62. CSS VARIABLES

Prefer variables for global values.

Example:

```css
:root {
  --color-primary: #...;
  --color-secondary: #...;
  --color-text: #...;
  --radius-sm: ...;
  --radius-md: ...;
  --shadow-md: ...;
}
```

---

# 63. CODE EDITOR

Use a professional code editor with:

- Syntax highlighting
- Line numbers
- Search
- Replace
- Code folding
- Formatting
- Copy
- Download
- Error highlighting

Prefer Monaco Editor or an equivalent professional editor.

---

# 64. CODE TABS

Provide:

```text
HTML
CSS
JS
React
Tailwind
Full Project
```

depending on the selected output mode.

---

# 65. LIVE CODE HIGHLIGHTING

When a user changes a visual property, identify the affected code.

Example:

```text
Visual:
Border Radius = 24px

Code:
border-radius: 24px;
```

Highlight the relevant code.

This is important for developers learning how visual design translates into frontend code.

---

# 66. CODE TO VISUAL MAPPING

Allow a developer to click a code block and identify the corresponding component on the canvas where possible.

Example:

```text
Hero.jsx
```

click:

```text
<Button>
```

Canvas highlights that Button.

---

# 67. FULL WEBSITE CODE MAP

For the full website code view provide:

```text
Project
├── Pages
├── Components
├── Styles
├── Assets
├── Animations
├── Tokens
└── Configuration
```

Clicking any file should update the code editor.

---

# 68. EXPORT

Provide:

### Copy

- Full website code
- Selected component
- Selected section
- CSS
- React
- Tailwind
- HTML

### Download

- ZIP
- HTML project
- React project
- Next.js project

Future support can include GitHub integration.

---

# 69. IMPORT

Plan architecture for importing:

- HTML
- CSS
- React
- Existing project

If full visual conversion is not possible, preserve unsupported custom code instead of destroying it.

---

# 70. AI FEATURES

AI should be optional, not mandatory.

Possible features:

### Generate Website

User describes:

> Create a modern SaaS landing page.

AI generates a structured frontend.

### Generate Section

> Create a pricing section.

### Modify Design

> Make this hero more premium.

### Generate Component

> Create a glassmorphism button.

### Explain Code

Explain selected code.

### Optimize Code

Suggest cleaner implementation.

### Accessibility Fix

Suggest fixes.

### Responsive Fix

Suggest mobile improvements.

---

# 71. AI MUST NOT BREAK THE VISUAL MODEL

AI-generated changes must go through the same structured Design State.

Do not allow AI to randomly overwrite the entire project.

Use:

```text
AI Request
   ↓
Structured Change
   ↓
Validation
   ↓
Design State
   ↓
Canvas + Code
```

---

# 72. VERSIONED AI CHANGES

Before applying a major AI change:

```text
Preview Changes
Apply
Reject
```

Allow undo.

---

# 73. PROJECT SETTINGS

Include:

- Project name
- Framework
- CSS strategy
- Fonts
- Design system
- Breakpoints
- Global colors
- SEO basics
- Favicon
- Metadata
- Language
- Accessibility settings

---

# 74. SEO BASICS

For pages provide:

- Title
- Description
- Canonical URL
- Open Graph
- Twitter/X metadata
- Semantic structure

---

# 75. ASSET MANAGEMENT

Provide:

```text
Assets
├── Images
├── Icons
├── Videos
├── Fonts
└── Files
```

Allow:

- Upload
- Replace
- Delete
- Search
- Rename
- Reuse

---

# 76. AUTOSAVE

Automatically save changes.

Show:

```text
Saved
Saving...
Unsaved changes
```

Never silently lose user work.

---

# 77. PERFORMANCE OF THE EDITOR

The editor itself must remain responsive even with complex websites.

Use:

- Efficient state management
- Component memoization
- Lazy loading
- Virtualized lists where necessary
- Efficient canvas rendering
- Debounced code generation where appropriate

---

# 78. DATA MODEL

Use a structured model similar to:

```json
{
  "project": {},
  "pages": [],
  "components": [],
  "designTokens": {},
  "assets": [],
  "fonts": [],
  "animations": [],
  "breakpoints": {},
  "globalStyles": {}
}
```

Each element should have:

```text
id
type
parentId
children
props
styles
responsiveStyles
states
animations
componentId
overrides
visibility
locked
metadata
```

---

# 79. COMPONENT INSTANCE MODEL

Separate:

### Component Definition

from:

### Component Instance

Example:

```text
Button Definition
      ↓
Instance A
Instance B
Instance C
```

Each instance may have overrides.

This is mandatory for proper global/local editing.

---

# 80. STATE SYNCHRONIZATION

Use a predictable state architecture.

All changes must pass through controlled state updates.

Do not directly mutate arbitrary DOM styles without updating the design state.

---

# 81. LIVE PREVIEW ISOLATION

The preview should run in an isolated environment where possible.

Ensure user code cannot break the editor UI.

---

# 82. SECURITY

Treat imported/generated code as untrusted.

Sanitize where necessary.

Prevent:

- XSS
- unsafe script injection
- malicious HTML
- unsafe iframe behavior

---

# 83. USER EXPERIENCE RULE

The interface should remain simple by default.

Do not expose hundreds of controls simultaneously.

Use progressive disclosure:

```text
Basic
Advanced
Expert
```

Example:

Button:

```text
Basic:
Color
Text
Size
Radius

Advanced:
Shadow
Gradient
States

Expert:
CSS
Animation
Custom Code
```

---

# 84. DESIGNER MODE

Designer Mode should prioritize:

- Canvas
- Visual editing
- Templates
- Components
- Fonts
- Colors
- Spacing
- Animations

Hide unnecessary developer complexity.

---

# 85. DEVELOPER MODE

Developer Mode should prioritize:

- Component tree
- Props
- Code
- CSS
- Responsive rules
- Tokens
- Dependencies
- Accessibility
- Performance
- Export

Users should be able to switch between modes.

---

# 86. VIBE CODER EXPERIENCE

A vibe coder should be able to:

```text
Choose Template
        ↓
Click Element
        ↓
Change Design
        ↓
See Code
        ↓
Copy Code
        ↓
Paste into AI
        ↓
Continue Development
```

No deep frontend knowledge should be required.

---

# 87. PROFESSIONAL DEVELOPER EXPERIENCE

A developer should be able to:

```text
Create structured components
        ↓
Modify props
        ↓
Edit CSS
        ↓
Manage tokens
        ↓
Create variants
        ↓
Control responsive behavior
        ↓
Inspect generated code
        ↓
Export project
```

---

# 88. NO-DESIGNER EXPERIENCE

A non-designer should be able to:

- Pick a template
- Click an element
- Select a visual option
- See the result
- Never manually write CSS

while still producing usable frontend code.

---

# 89. FRONTEND COMPONENT EXPLORER

Create a dedicated area where users can browse frontend components independently from projects.

Example:

```text
Buttons
Cards
Inputs
Forms
Navigation
Hero
Footer
Modal
Tabs
Accordion
Tables
Animations
Backgrounds
```

Every component must show:

```text
Preview
Variants
Properties
Code
Responsive behavior
States
Animation
```

---

# 90. COMPONENT PLAYGROUND

A component can be opened independently.

Example:

## Button Playground

Left:

```text
Button
```

Right:

```text
Controls
```

Bottom:

```text
Live Code
```

Any property change updates:

```text
Preview + Code
```

This should work without creating an entire website.

---

# 91. STYLE COPY

For any selected element:

```text
Copy Style
Paste Style
```

Example:

Copy Button #1 style.

Paste to Button #5.

Content should remain different while styling transfers.

---

# 92. GLOBAL SEARCH WITH COMMAND PALETTE

Add a command palette:

```text
Ctrl/Cmd + K
```

Search:

- Components
- Pages
- Layers
- Commands
- Fonts
- Assets
- Templates
- Design tokens

---

# 93. RIGHT-CLICK CONTEXT MENU

Support:

- Edit
- Duplicate
- Delete
- Copy
- Paste
- Copy Style
- Save as Component
- Detach
- Lock
- Hide
- Bring Forward
- Send Backward
- Copy Code

---

# 94. DRAG AND DROP

Support:

- Move elements
- Reorder sections
- Insert components
- Replace components
- Drag from library to canvas

---

# 95. ALIGNMENT

Provide:

- Left
- Center
- Right
- Top
- Middle
- Bottom
- Distribute horizontally
- Distribute vertically

---

# 96. Z-INDEX / LAYER CONTROL

Allow:

- Bring forward
- Bring to front
- Send backward
- Send to back

---

# 97. LOCK / HIDE

Users can lock or hide elements.

Locked elements cannot accidentally be edited.

Hidden elements remain in the project and code according to configured behavior.

---

# 98. MULTI-SELECT

Support:

- Shift selection
- Drag selection
- Group selection

Apply styles to multiple elements.

---

# 99. BULK EDIT

If multiple buttons are selected:

```text
Change radius
```

should apply to all selected buttons.

Allow users to choose:

```text
Apply to selected
Apply to component
Apply globally
```

---

# 100. GLOBAL FIND & REPLACE

Allow project-wide operations.

Example:

Change all:

```text
Primary Blue
```

to:

```text
Primary Green
```

Or:

```text
Font A → Font B
```

Provide preview before applying bulk changes.

---

# 101. WEBSITE-WIDE TEXT EDITING

Provide a content panel where users can see all text content.

Example:

```text
Home
├── Hero Heading
├── Hero Description
├── CTA
├── Feature 1
...
```

Users can edit content without manually locating each element.

---

# 102. WEBSITE-WIDE BUTTON MANAGEMENT

Provide:

## Button Manager

Show all buttons:

```text
CTA Button
Hero Button
Pricing Button
Navbar Button
Footer Button
```

Allow:

- Search
- Edit
- Preview
- Navigate to element
- Edit globally
- Edit individually

---

# 103. WEBSITE-WIDE TYPOGRAPHY MANAGER

Show all typography styles.

Allow global editing of:

- H1
- H2
- H3
- Body
- Caption
- Button
- Label

---

# 104. WEBSITE-WIDE ANIMATION MANAGER

Show all animations.

Example:

```text
Hero fade-in
Button hover
Card hover
Navbar animation
Scroll reveal
```

Allow:

- Edit
- Disable
- Duplicate
- Replace
- Global animation settings

---

# 105. GLOBAL EFFECT MANAGER

Manage:

- Shadows
- Radius
- Blur
- Glass effects
- Gradients
- Transitions

---

# 106. DESIGN INSPECTOR

Provide a detailed inspector.

Example:

```text
Selected: Button

Component
Layout
Typography
Color
Border
Spacing
Shadow
Transform
Animation
States
Responsive
Accessibility
Advanced
Code
```

---

# 107. CODE / COMPONENT / VISUAL TRIPLE VIEW

For selected element provide a synchronized triple-pane view:

```text
┌──────────────┬──────────────┬──────────────┐
│ LIVE         │ COMPONENT    │ CODE         │
│ PREVIEW      │ PROPERTIES   │              │
└──────────────┴──────────────┴──────────────┘
```

Changes must remain synchronized.

---

# 108. FULL WEBSITE TRIPLE VIEW

For the entire project:

```text
Live Website
      +
Component Tree
      +
Full Project Code
```

This should be a dedicated developer view.

---

# 109. CODE DIFF

When changing a property, optionally show:

```text
Before
After
```

Example:

```diff
- border-radius: 12px;
+ border-radius: 24px;
```

This helps users understand frontend development.

---

# 110. RESPONSIVE CODE DIFF

If a mobile-specific value is added:

```diff
@media (max-width: 768px) {
- font-size: 48px;
+ font-size: 36px;
}
```

Show this relationship in the UI.

---

# 111. CLEAN CODE GENERATION

Do not generate a giant unmaintainable file if componentized output is selected.

Allow:

```text
Single File
```

and:

```text
Componentized Project
```

options.

Single File:

```text
index.html
```

Componentized:

```text
components/
pages/
styles/
assets/
```

---

# 112. EXPORT CONFIGURATION

Before export:

```text
Framework
Styling
Components
Responsive
Animations
Optimization
```

User can select:

```text
HTML/CSS/JS
React
Next.js
Tailwind
```

---

# 113. PROJECT SHARE

Future-ready architecture for:

- Share project
- Public preview
- Private preview
- Collaboration
- Comments
- Team members

---

# 114. COLLABORATION-READY ARCHITECTURE

Even if real-time collaboration is not implemented initially, structure the project state so it can support it later.

---

# 115. MOBILE EDITOR

The application itself should be responsive, but the primary editor experience should be optimized for desktop/laptop development.

A simplified mobile/tablet editing interface can be provided later.

---

# 116. VISUAL QUALITY

The UI should feel:

- Modern
- Premium
- Clean
- Fast
- Professional
- Minimal
- Developer-friendly
- Canva-inspired in usability
- Figma-inspired in precision
- IDE-inspired in code workflows

Do NOT clone Canva's branding, assets, proprietary visual identity, or exact UI.

Take inspiration from the concept of an intuitive visual editor while creating an original product interface.

---

# 117. TECHNICAL ARCHITECTURE

Prefer a modern architecture such as:

```text
React
TypeScript
Modern CSS / Tailwind where appropriate
Component-based architecture
Structured design state
Monaco Editor or equivalent
```

Use a scalable state-management solution.

The editor should be modular.

Recommended conceptual modules:

```text
Editor Engine
Canvas Renderer
Component Engine
Design State
Style Engine
Responsive Engine
Animation Engine
Code Generator
Code Parser
Template Engine
Asset Manager
Font Manager
Design System Engine
Export Engine
Preview Engine
Validation Engine
AI Layer
```

---

# 118. DO NOT HARD-CODE THE EDITOR

Templates and components should be data-driven.

Do not create:

```text
if template === 1
if template === 2
if button === 3
```

Instead use schemas/configurations.

This allows hundreds of templates and components to be added later without rewriting the editor.

---

# 119. COMPONENT SCHEMA

Create a reusable component schema containing:

```text
id
name
category
variant
props
styles
responsiveStyles
states
animations
slots
children
tokens
codeGenerator
metadata
```

---

# 120. TEMPLATE SCHEMA

Templates should define:

```text
templateId
name
category
pages
components
designSystem
assets
fonts
responsiveRules
animations
metadata
```

---

# 121. PLUGIN-READY ARCHITECTURE

Future plugins may add:

- Components
- Templates
- Fonts
- Icons
- AI tools
- Export formats
- Integrations

Design the architecture so these can be added without rewriting the core editor.

---

# 122. ERROR HANDLING

Never silently fail.

Show clear messages such as:

```text
Unable to parse this code into an editable component.
Your original code has been preserved.
```

or:

```text
This animation uses custom JavaScript and cannot currently be edited visually.
```

---

# 123. DATA SAFETY

Never destroy user-created code when switching between modes.

Maintain:

- Original code
- Structured representation
- Custom code blocks
- Unsupported code sections

where possible.

---

# 124. CUSTOM CODE

Allow advanced users to add:

### Custom CSS

### Custom JavaScript

### Custom HTML

### Custom React code

But clearly mark custom code.

Custom code should coexist with generated code.

---

# 125. CUSTOM CODE WARNING

If a user edits generated code manually, show:

> Custom modification detected.

Allow:

```text
Keep Custom Changes
Revert to Generated
Compare Changes
```

---

# 126. CODE OWNERSHIP MODEL

Generated code must belong to the user/project according to the application's legal/product terms.

Do not unnecessarily lock exported code behind the editor.

---

# 127. ACCESSIBLE COLOR SYSTEM

Provide contrast checking.

For each text/background combination show:

```text
Contrast Ratio
AA
AAA
```

where applicable.

---

# 128. REDUCED MOTION

Support:

```css
@media (prefers-reduced-motion: reduce)
```

for generated animations where appropriate.

---

# 129. INTERACTION PREVIEW

Allow users to switch:

```text
Edit Mode
Preview Mode
```

In Edit Mode:

click selects.

In Preview Mode:

click performs actual interaction.

This prevents editing conflicts with buttons and links.

---

# 130. SELECTOR / TARGETING SYSTEM

Every element should have stable IDs internally.

Do not rely solely on DOM position.

Example:

```text
element_hero_button_01
```

Use stable unique identifiers.

---

# 131. HISTORY SYSTEM

Every meaningful design-state change should be undoable.

Avoid creating unnecessary history entries for every keystroke.

Group related operations.

---

# 132. AUTOSAVE + RECOVERY

If the browser crashes or refreshes:

recover the latest saved project where possible.

---

# 133. LOADING STATES

Provide polished loading states for:

- Templates
- Components
- Fonts
- Assets
- AI generation
- Code generation
- Export

---

# 134. EMPTY STATES

Every empty section should have useful actions.

Example:

```text
No components yet

+ Add Component
Browse Library
Create Custom Component
```

---

# 135. FIRST-TIME USER EXPERIENCE

Provide a short onboarding:

```text
Choose Template
      ↓
Select Element
      ↓
Edit
      ↓
See Code
      ↓
Export
```

Do not overwhelm new users.

---

# 136. ADVANCED USER EXPERIENCE

Experienced users can skip onboarding and immediately access:

- Canvas
- Code
- Components
- Design system
- Export

---

# 137. SEARCHABLE PROPERTY CONTROLS

In advanced mode, allow searching properties.

Example:

User types:

```text
shadow
```

and sees all shadow-related controls.

---

# 138. FAVORITES

Users can favorite:

- Templates
- Components
- Fonts
- Colors
- Styles
- Animations

---

# 139. RECENTLY USED

Remember recently used:

- Fonts
- Components
- Colors
- Animations
- Templates

---

# 140. DESIGN PRESETS

Provide presets for:

- Button
- Card
- Hero
- Header
- Footer
- Typography
- Shadows
- Gradients
- Animations

---

# 141. COMPONENT VARIANT PREVIEW

When browsing a component:

```text
Variant 1
Variant 2
Variant 3
Variant 4
```

show live previews.

---

# 142. LIVE CODE FOR EVERY VARIANT

Each component variant should have its corresponding code.

---

# 143. COMPONENT DOCUMENTATION

Each component should optionally display:

- Description
- Usage
- Props
- Variants
- States
- Responsive behavior
- Accessibility
- Code

This makes the platform useful as a frontend learning system.

---

# 144. FRONTEND LEARNING VALUE

The product should naturally teach users:

```text
Visual change
      ↓
CSS property
      ↓
Component
      ↓
Responsive rule
```

Do not turn it into a traditional course platform, but make the editor educational for developers.

---

# 145. PRIMARY SUCCESS CRITERION

A user should be able to:

```text
1. Choose a website template.
2. Open it in CanvasStudio.
3. Click any element.
4. Edit it visually.
5. See the result instantly.
6. See the component update.
7. See the code update.
8. Edit the code when necessary.
9. See the live result.
10. Make global changes.
11. Make local overrides.
12. Test desktop/tablet/mobile.
13. Add animations.
14. Add/reorder sections.
15. Add new components.
16. Save components.
17. Export the complete frontend.
```

---

# 146. MOST IMPORTANT SYNCHRONIZATION EXAMPLES

### Example 1 — Single Button

```text
Select Button #4
↓
Change background to red
↓
Canvas changes
↓
Component changes
↓
CSS changes
↓
Live preview changes
```

### Example 2 — Global Button

```text
Select Button Component
↓
Change radius 8px → 20px
↓
All Button instances update
↓
All relevant code updates
```

### Example 3 — Local Override

```text
Button #4
↓
Set background = red
↓
Only Button #4 changes
```

### Example 4 — Global Typography

```text
H2 Style
↓
Font = Inter
↓
All H2 elements update
↓
Global CSS updates
```

### Example 5 — Animation

```text
Button
↓
Hover
↓
Scale = 1.05
↓
Canvas preview
↓
Component
↓
CSS transition
↓
Live website
```

### Example 6 — Mobile

```text
Mobile
↓
Hero heading = 36px
↓
Responsive CSS generated
↓
Mobile preview updates
```

### Example 7 — Code

```text
User edits:
border-radius: 24px
↓
Parser
↓
Design State
↓
Component
↓
Canvas
↓
Preview
```

---

# 147. FINAL PRODUCT ARCHITECTURE

The final system should conceptually operate as:

```text
                     PROJECT
                        │
              ┌─────────┴─────────┐
              │                   │
           PAGES              DESIGN SYSTEM
              │                   │
         COMPONENT TREE      TOKENS / STYLES
              │                   │
       ┌──────┼──────┐            │
       ↓      ↓      ↓            ↓
    CANVAS  COMPONENT CODE ←──────┘
       │      │       │
       └──────┼───────┘
              ↓
         LIVE PREVIEW
              │
              ↓
      RESPONSIVE ENGINE
              │
              ↓
        EXPORT ENGINE
              │
     ┌────────┼─────────┐
     ↓        ↓         ↓
    HTML     REACT    TAILWIND
```

---

# 148. DEVELOPMENT PRIORITY

Build in phases.

## Phase 1 — Foundation

- Dashboard
- Project system
- Template system
- CanvasStudio
- Basic component tree
- Text
- Button
- Image
- Sections
- Header
- Footer
- Basic styling
- Live preview

## Phase 2 — Code Engine

- Component code
- Full website code
- HTML/CSS/JS
- React
- Tailwind
- Code synchronization
- Export

## Phase 3 — Advanced Editor

- Global/local components
- Variants
- Design tokens
- Responsive overrides
- Layers
- Multi-select
- Drag/drop
- Design system

## Phase 4 — Motion

- States
- Hover
- Click
- Entrance
- Exit
- Scroll
- Animation editor

## Phase 5 — Developer Tools

- Monaco
- Code mapping
- Code diff
- Console
- Accessibility
- Performance
- Responsive validation

## Phase 6 — AI

- AI website generation
- AI section generation
- AI component generation
- AI modification
- AI code explanation
- AI prompt generation

## Phase 7 — Ecosystem

- My Components
- Design systems
- Sharing
- Collaboration
- Import
- Plugins
- Integrations

---

# 149. QUALITY STANDARD

Do not build a prototype that merely looks impressive.

The application must have:

- Clean architecture
- Reusable components
- Predictable state management
- Real code generation
- Real responsive behavior
- Real component synchronization
- Real live preview
- Maintainable code
- Scalable data models
- Error handling
- Accessibility
- Performance optimization
- Security considerations

Avoid fake buttons, fake code panels, fake responsive controls, or controls that visually change something without updating the underlying project state.

---

# 150. FINAL NON-NEGOTIABLE REQUIREMENTS

The following are mandatory:

1. Canva-inspired ease of use.
2. Original product UI; do not clone Canva.
3. Interactive website templates.
4. Fully editable canvas.
5. Every major frontend element must be editable.
6. Add/remove/reorder sections.
7. Header library.
8. Footer library.
9. Component library.
10. Hundreds of fonts with search.
11. Button library with many variants.
12. Background library.
13. Typography controls.
14. Layout controls.
15. Spacing controls.
16. Border controls.
17. Shadow controls.
18. Gradient controls.
19. Animation controls.
20. Interaction states.
21. Responsive editing.
22. Desktop/tablet/mobile preview.
23. Global styles.
24. Global components.
25. Local component editing.
26. Local overrides.
27. Detach component.
28. Save as reusable component.
29. Design tokens.
30. Multi-page websites.
31. Layers/DOM tree.
32. Drag and drop.
33. Copy/paste.
34. Undo/redo.
35. Autosave.
36. Full website code in one place.
37. Single component code.
38. HTML/CSS/JS support.
39. React support.
40. Tailwind support.
41. Live code synchronization.
42. Visual-to-code synchronization.
43. Code-to-visual synchronization where supported.
44. Live component preview.
45. Full website live preview.
46. Code highlighting.
47. Code mapping.
48. Code diff.
49. Clean generated code.
50. AI-friendly code.
51. Export/download.
52. Accessibility checker.
53. Responsive issue checker.
54. Performance checker.
55. Custom CSS.
56. Custom JavaScript.
57. Custom HTML/React support.
58. Safe handling of custom code.
59. Global text management.
60. Global button management.
61. Typography management.
62. Animation management.
63. Design-system management.
64. Search.
65. Command palette.
66. Keyboard shortcuts.
67. Favorites.
68. Recently used items.
69. Component documentation.
70. Component playground.
71. Designer Mode.
72. Developer Mode.
73. Vibe Coder workflow.
74. Professional developer workflow.
75. Scalable architecture.

---

# 151. PRODUCT DEFINITION

The finished application should feel like:

> **Canva's simplicity + Figma's visual precision + a frontend component playground + a code editor + a design system manager + an AI-ready development environment.**

The key experience is not:

> “Design something and later generate code.”

It is:

> **“Design the frontend and develop the frontend at the same time.”**

The user should never feel that the visual editor and code editor are two separate products.

They are two synchronized views of the same frontend project.

The fundamental loop is:

```text
DESIGN
  ↓
EDIT
  ↓
SEE LIVE RESULT
  ↓
SEE COMPONENT
  ↓
SEE CODE
  ↓
MODIFY CODE
  ↓
SEE VISUAL RESULT
  ↓
EXPORT
```

Build the application around this loop from the beginning.