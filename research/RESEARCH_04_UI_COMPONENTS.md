# RESEARCH 04: UI COMPONENTS RESEARCH TAXONOMY

## 1. Buttons
### 1.1 Types
* Primary: The main call-to-action button.
* Secondary: An alternative action, often paired with a primary button.
* Tertiary: A minor action, less prominent than secondary.
* Ghost/Outline: Transparent background with a solid border.
* Text/Link: Text only, styled like a hyperlink.
* Danger/Destructive: Indicates an action that causes permanent changes (e.g., delete).
* Success: Indicates a successful or positive action.
* Warning: Cautions the user before taking action.
* Floating Action Button (FAB): Circular button typically used in Material Design for a primary screen action.
* Icon Button: Button containing only an icon, no text.
* Split Button: A dual-function button where one part triggers a primary action and the other opens a dropdown.
* Toggle Button: Button that switches between two or more states.

### 1.2 States
* Default/Normal: The baseline state.
* Hover: State when the user's cursor rests on the button.
* Active/Pressed: State when the button is actively being clicked.
* Focus: State when navigated to via keyboard.
* Disabled: State indicating the button cannot be interacted with.
* Loading/Progress: Indicates an ongoing process after clicking.
* Selected: State for toggle buttons when they are toggled on.

### 1.3 Sizes
* Small: Used in tight spaces or inline with text.
* Medium/Default: Standard size for most interfaces.
* Large: Used for major calls to action, often on mobile or hero sections.
* Full-width/Block: Expands to fill the container's width.

## 2. Cards
### 2.1 Types
* Basic Card: Simple container with content.
* Media Card: Features an image or video at the top or side.
* E-commerce/Product Card: Displays product image, title, price, and "Add to Cart" button.
* User/Profile Card: Displays a user's avatar, name, and summary.
* Dashboard Card/Widget: Contains small charts or key metrics.
* Interactive Card: Entire card is clickable.

### 2.2 Elements
* Card Header: Top section, often containing a title or avatar.
* Card Media: Images, videos, or illustrations.
* Card Content: The main body text or data.
* Card Actions: Buttons or links at the bottom.
* Card Footer: Bottom section, often containing metadata or timestamps.

## 3. Navigation
### 3.1 Navbars (Top Navigation)
* Standard Navbar: Horizontal menu at the top.
* Sticky Navbar: Remains visible at the top while scrolling.
* Transparent Navbar: Background is clear until scrolled.
* Search Navbar: Includes a prominent search bar.

### 3.2 Sidebars (Drawer/Aside)
* Permanent Sidebar: Always visible on the side.
* Collapsible Sidebar: Can be toggled open or closed.
* Mini Sidebar: Shows only icons when collapsed.
* Off-canvas: Slides in from off-screen (common on mobile).

### 3.3 Other Navigation
* Breadcrumbs: Shows the path to the current page.
* Pagination: Divides content across multiple pages.
* Stepper/Wizard: Guides users through a multi-step process.
* Tabs: Switches between different views within the same context.
* Bottom Navigation: Mobile-friendly navigation at the screen's bottom.

## 4. Modals and Overlays
### 4.1 Types
* Alert Modal: Requires immediate user acknowledgment (e.g., error).
* Confirm Modal: Asks for user confirmation before proceeding.
* Form Modal: Contains a form for data entry.
* Full-screen Modal: Covers the entire screen, often for complex tasks.
* Drawer/Slide-over: Slides in from the edge of the screen (typically right or bottom).

### 4.2 Supplementary Overlays
* Tooltip: Small text box appearing on hover to explain an element.
* Popover: Similar to a tooltip but can contain rich content and interactive elements.
* Toast/Snackbar: Brief, non-interruptive message appearing temporarily (usually at the bottom or corner).
* Dialog: A generic modal window requiring user interaction.

## 5. Tables
### 5.1 Types
* Basic Table: Simple rows and columns of text.
* Data Table: Advanced table with sorting, filtering, and pagination.
* Expandable Table: Rows can expand to show more details.
* Checkbox Table: Includes a column of checkboxes for bulk actions.

### 5.2 Elements
* Table Header (th): Contains column titles.
* Table Body (tb): Contains the actual data rows.
* Table Footer (tf): Summary row at the bottom.
* Sort Icon: Indicates column sort direction.

## 6. Forms and Inputs
### 6.1 Text Inputs
* Single-line Text Input: Standard input field.
* Multi-line/Textarea: For longer text entries.
* Password Input: Masks characters.
* Search Input: Often includes a search icon and clear button.
* Number Input: Allows only numeric entry, often with increment/decrement arrows.
* Email/URL Input: Validates specific formats.

### 6.2 Selection Controls
* Checkbox: Allows multiple selections.
* Radio Button: Allows a single selection from a group.
* Toggle Switch: Turns a setting on or off.
* Select/Dropdown: Menu to choose one option from many.
* Multi-select: Menu to choose multiple options.

### 6.3 Specialized Inputs
* Date Picker: Calendar interface for selecting a date.
* Time Picker: Interface for selecting a time.
* Color Picker: Interface for choosing a color.
* File Upload: Area to select or drag-and-drop files.
* Slider/Range: Draggable control for selecting a value or range.
* Rating/Stars: Control for submitting a score.

### 6.4 Form Elements & States
* Label: Describes the input.
* Placeholder: Hint text inside the empty input.
* Helper Text: Additional context below the input.
* Error Message: Indicates a validation failure.
* Required Indicator: Usually an asterisk (*) denoting mandatory fields.
* Read-only: Displays data that cannot be edited but can be focused/copied.

## 7. Layout and Containers
* Container: Constrains content width.
* Grid System: Divides layout into columns (e.g., 12-column grid).
* Flexbox: One-dimensional layout container.
* Divider/Separator: Visual line separating content blocks.
* Accordion: Vertically stacked list of items that expand/collapse.
* Carousel/Slider: Horizontally scrolling list of items or images.
* Badge/Chip/Tag: Small block indicating status, category, or count.
* Progress Bar: Visual indicator of completion.
* Skeleton Loader: Placeholder graphic shown while content is loading.
