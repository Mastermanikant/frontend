# RESEARCH 02: CSS EXHAUSTIVE TAXONOMY

## 1. Selectors & Specificity
* **Universal Selector (`*`)**: Matches elements of any type.
* **Type Selector (`div`, `p`)**: Matches elements based on node name.
* **Class Selector (`.class`)**: Matches elements based on their `class` attribute.
* **ID Selector (`#id`)**: Matches an element based on its `id` attribute.
* **Attribute Selector (`[attr=value]`)**: Matches elements based on presence or value of an attribute.
* **Descendant Combinator (` `)**: Matches elements that are descendants of a specified element.
* **Child Combinator (`>`)**: Matches elements that are direct children of a specified element.
* **Adjacent Sibling Combinator (`+`)**: Matches an element immediately following another element.
* **General Sibling Combinator (`~`)**: Matches elements that are siblings and follow a specified element.
* **Pseudo-classes (`:hover`, `:active`)**: Keywords added to a selector to specify a special state.
* **Pseudo-elements (`::before`, `::after`)**: Keywords added to a selector to style a specific part of an element.
* **Specificity**: The algorithm calculating the weight of a CSS declaration to resolve conflicts (`!important` > inline > ID > Class/Pseudo-class > Type).

## 2. Box Model
* **width / height**: Determines the width and height of the content box.
* **padding**: Space between the content and the border (inside the box).
* **border**: The line surrounding the padding and content.
* **margin**: Space outside the border, separating the element from others.
* **box-sizing**: Determines how the total width and height of an element is calculated (`content-box`, `border-box`).
* **outline**: A line drawn outside the border, usually for accessibility focus states, which does not affect layout.

## 3. Typography
* **font-family**: Specifies the font for an element.
* **font-size**: Sets the size of the font.
* **font-weight**: Sets the thickness of the font (e.g., `normal`, `bold`, `400`, `700`).
* **font-style**: Sets the style of the font (e.g., `italic`, `oblique`).
* **line-height**: Sets the height of a line box, controlling spacing between lines of text.
* **letter-spacing**: Controls the space between text characters.
* **word-spacing**: Controls the space between words.
* **text-align**: Sets the horizontal alignment of inline content (`left`, `center`, `right`, `justify`).
* **text-decoration**: Sets the appearance of decorative lines on text (e.g., `underline`, `line-through`).
* **text-transform**: Controls capitalization (`uppercase`, `lowercase`, `capitalize`).
* **white-space**: Handles whitespace inside an element (e.g., `nowrap`, `pre-wrap`).
* **text-overflow**: Determines how overflowed content that is not displayed should be signaled (`ellipsis`).

## 4. Backgrounds & Colors
* **color**: Sets the foreground color value of an element's text.
* **background-color**: Sets the background color of an element.
* **background-image**: Sets one or more background images for an element.
* **background-size**: Specifies the size of background images (`cover`, `contain`).
* **background-position**: Sets the starting position of a background image.
* **background-repeat**: Sets if/how a background image will be repeated.
* **background-attachment**: Determines whether a background image scrolls with the page or is fixed.
* **linear-gradient()**: Creates a background image consisting of a progressive transition between colors along a line.
* **radial-gradient()**: Creates a background image consisting of a progressive transition between colors radiating from an origin.

## 5. Layout (Display & Positioning)
* **display**: Determines the rendering box type of an element (`block`, `inline`, `inline-block`, `none`).
* **position**: Specifies the type of positioning method used (`static`, `relative`, `absolute`, `fixed`, `sticky`).
* **top / right / bottom / left**: Specifies the offset of a positioned element.
* **z-index**: Sets the z-order of a positioned element and its descendants.
* **float**: Places an element on the left or right side of its container, allowing text to wrap around it.
* **clear**: Specifies what elements can float beside the cleared element and on which side.
* **overflow**: Controls what happens to content that breaks outside of its bounds (`visible`, `hidden`, `scroll`, `auto`).

## 6. Flexbox (Flexible Box Layout)
* **display: flex**: Defines a flex container and enables a flex context for all its direct children.
* **flex-direction**: Establishes the main axis, defining the direction flex items are placed in the flex container (`row`, `column`).
* **justify-content**: Defines the alignment along the main axis (`flex-start`, `center`, `space-between`).
* **align-items**: Defines the default behavior for how flex items are laid out along the cross axis (`flex-start`, `center`, `stretch`).
* **align-self**: Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
* **flex-wrap**: Controls whether the flex container is single-line or multi-line (`nowrap`, `wrap`).
* **flex-grow**: Defines the ability for a flex item to grow if necessary.
* **flex-shrink**: Defines the ability for a flex item to shrink if necessary.
* **flex-basis**: Defines the default size of an element before the remaining space is distributed.
* **gap**: Controls the space between flex items.

## 7. CSS Grid Layout
* **display: grid**: Defines a grid container.
* **grid-template-columns**: Defines the line names and track sizing functions of the grid columns.
* **grid-template-rows**: Defines the line names and track sizing functions of the grid rows.
* **grid-template-areas**: Specifies named grid areas.
* **grid-column**: Shorthand for `grid-column-start` and `grid-column-end`.
* **grid-row**: Shorthand for `grid-row-start` and `grid-row-end`.
* **grid-gap**: Shorthand for `row-gap` and `column-gap`.
* **justify-items**: Aligns grid items along the inline (row) axis.
* **align-items**: Aligns grid items along the block (column) axis.
* **place-items**: Shorthand for `align-items` and `justify-items`.

## 8. Transitions & Animations
* **transition-property**: Specifies the name of the CSS property the transition effect is for.
* **transition-duration**: Specifies how many seconds or milliseconds a transition effect takes to complete.
* **transition-timing-function**: Specifies the speed curve of the transition effect (`ease`, `linear`, `cubic-bezier`).
* **transition-delay**: Specifies when the transition effect will start.
* **@keyframes**: Specifies the animation code by defining styles at various points during the animation.
* **animation-name**: Specifies the name of the `@keyframes` animation.
* **animation-duration**: Specifies how long an animation should take to complete one cycle.
* **animation-timing-function**: Specifies the speed curve of the animation.
* **animation-delay**: Specifies a delay for the start of an animation.
* **animation-iteration-count**: Specifies the number of times an animation should run (`infinite`).
* **animation-direction**: Specifies whether an animation should play forward, backward, or in alternate cycles.
* **animation-fill-mode**: Specifies a style for the element when the animation is not playing (e.g., `forwards`).

## 9. Transforms
* **transform**: Applies a 2D or 3D transformation to an element.
* **translate()**: Moves an element from its current position.
* **scale()**: Changes the size of an element.
* **rotate()**: Rotates an element clockwise or counter-clockwise.
* **skew()**: Skews an element along the X and Y axes.
* **transform-origin**: Allows you to change the position on transformed elements.

## 10. Responsive Design & Media Queries
* **@media**: Used in media queries to apply different styles for different media types/devices.
* **max-width**: The maximum width of the display area.
* **min-width**: The minimum width of the display area.
* **orientation**: Whether the viewport is in landscape or portrait mode.
* **rem (Root EM)**: Font size of the root element (usually `<html>`).
* **em**: Relative to the font-size of the element (2em means 2 times the size of the current font).
* **vw (Viewport Width)**: 1% of the width of the viewport.
* **vh (Viewport Height)**: 1% of the height of the viewport.

## 11. Custom Properties (CSS Variables)
* **--variable-name**: Custom property syntax (e.g., `--main-color: #333;`).
* **var()**: Function used to insert the value of a CSS variable (e.g., `color: var(--main-color);`).
