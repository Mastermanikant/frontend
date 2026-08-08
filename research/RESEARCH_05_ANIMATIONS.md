# RESEARCH 05: ANIMATIONS AND EFFECTS TAXONOMY

This taxonomy categorizes standard UI animations, transitions, and micro-interactions used in modern web and application design. Based on established libraries (Animate.css, Hover.css, SpinKit, Framer Motion, GSAP, etc.).

## 1. Entrance Animations
Animations used when an element first appears or mounts into the DOM.

### Fades
* **Fade In**: Element opacity transitions from 0 to 1.
* **Fade In Up**: Element fades in while moving up.
* **Fade In Down**: Element fades in while moving down.
* **Fade In Left**: Element fades in while moving from the left.
* **Fade In Right**: Element fades in while moving from the right.
* **Fade In Top Left**: Fades in from the top left corner.
* **Fade In Bottom Right**: Fades in from the bottom right corner.

### Slides
* **Slide In Up**: Element translates into view from below.
* **Slide In Down**: Element translates into view from above.
* **Slide In Left**: Element translates into view from the left.
* **Slide In Right**: Element translates into view from the right.

### Zooms
* **Zoom In**: Element scales from 0 (or smaller) to 1 while fading in.
* **Zoom In Up**: Element scales up while translating upwards.
* **Zoom In Down**: Element scales up while translating downwards.
* **Zoom In Left**: Element scales up while translating from the left.
* **Zoom In Right**: Element scales up while translating from the right.

### Bounces
* **Bounce In**: Element pops in with a slight overshoot and spring-back effect.
* **Bounce In Up**: Bounces into view from below.
* **Bounce In Down**: Bounces into view from above.
* **Bounce In Left**: Bounces into view from the left.
* **Bounce In Right**: Bounces into view from the right.

### Rotations & Flips
* **Rotate In**: Element spins into its resting position.
* **Rotate In Down Left**: Rotates in pivoting from the bottom left.
* **Rotate In Up Right**: Rotates in pivoting from the top right.
* **Flip In X**: Element rotates into view along the X (horizontal) axis.
* **Flip In Y**: Element rotates into view along the Y (vertical) axis.

### Specials
* **LightSpeed In**: Element skews and slides in rapidly from the side.
* **Roll In**: Element translates and rotates simultaneously, like a rolling ball.
* **JackInTheBox**: Element scales up and wobbles from the bottom center.
* **Drop In**: Element falls from above and drastically decelerates.

## 2. Exit Animations
Animations used when an element is removed, hidden, or unmounted.

### Fades
* **Fade Out**: Element opacity transitions from 1 to 0.
* **Fade Out Up**: Element fades out while moving up.
* **Fade Out Down**: Element fades out while moving down.
* **Fade Out Left**: Element fades out while moving to the left.
* **Fade Out Right**: Element fades out while moving to the right.

### Slides
* **Slide Out Up**: Element translates out of view upwards.
* **Slide Out Down**: Element translates out of view downwards.
* **Slide Out Left**: Element translates out of view to the left.
* **Slide Out Right**: Element translates out of view to the right.

### Zooms
* **Zoom Out**: Element scales down to 0 while fading out.
* **Zoom Out Up**: Element scales down while moving upwards.
* **Zoom Out Down**: Element scales down while moving downwards.
* **Zoom Out Left**: Element scales down while moving left.
* **Zoom Out Right**: Element scales down while moving right.

### Bounces
* **Bounce Out**: Element shrinks slightly, pops out larger, then disappears.
* **Bounce Out Up**: Bounces and exits upwards.
* **Bounce Out Down**: Bounces and exits downwards.
* **Bounce Out Left**: Bounces and exits to the left.
* **Bounce Out Right**: Bounces and exits to the right.

### Rotations & Flips
* **Rotate Out**: Element spins out of its resting position.
* **Flip Out X**: Element rotates out of view along the X axis.
* **Flip Out Y**: Element rotates out of view along the Y axis.

### Specials
* **LightSpeed Out**: Element skews and slides out rapidly.
* **Roll Out**: Element translates and rotates away.
* **Hinge**: Element drops down, swinging back and forth like a broken hinge, before falling off-screen.

## 3. Hover Effects
State changes triggered when a user's pointer rests on an element.

### 2D Transforms
* **Grow/Scale**: Element increases in size.
* **Shrink**: Element decreases in size.
* **Pulse**: Element smoothly scales up and down repeatedly.
* **Pulse Grow**: Element grows, pulses slightly, and holds state.
* **Push**: Element appears to be pushed down (scales down).
* **Pop**: Element quickly scales up and back down.
* **Bounce In (Hover)**: Element bounces once when hovered.
* **Rotate**: Element spins a fixed number of degrees.
* **Grow Rotate**: Element scales up and slightly rotates.
* **Float**: Element translates upwards and continues moving up and down gently.
* **Sink**: Element translates downwards.
* **Bob**: Element bounces up and down continuously.
* **Hang**: Element translates downwards and hangs.
* **Skew**: Element distorts on the X or Y axis.
* **Wobble Horizontal**: Element shakes left and right.
* **Wobble Vertical**: Element shakes up and down.
* **Buzz**: Element rapidly vibrates on the spot.

### Background & Border
* **Sweep To Right**: Background color fills in from left to right.
* **Sweep To Left**: Background color fills in from right to left.
* **Sweep To Bottom**: Background color fills in from top to bottom.
* **Sweep To Top**: Background color fills in from bottom to top.
* **Bounce To Right**: Background color fills from left to right with a bounce.
* **Radial Out**: Background color expands from the center outward.
* **Radial In**: Background color collapses inward.
* **Rectangle In**: Border draws inwards.
* **Rectangle Out**: Border pushes outwards.
* **Underline From Center**: Line draws outwards from the middle bottom.
* **Underline From Left**: Line draws from left to right on the bottom.
* **Border Reveal**: Element borders become visible sequentially.

### Shadows & Glows
* **Glow**: An outer box-shadow or drop-shadow appears around the element.
* **Shadow Radial**: A circular shadow appears below the element.
* **Box Shadow Outset**: An inset shadow becomes an outset shadow.
* **Box Shadow Inset**: An outset shadow becomes an inset shadow.
* **Float Shadow**: Element floats up while a shadow condenses below it.

## 4. Click / Active Effects
Feedback animations triggered by a `mousedown`, `touchstart`, or `click` event.

* **Ripple**: A circular wave expands from the point of contact (Material Design).
* **Press/Depress**: Element physically scales down and shadow reduces, mimicking a physical button press.
* **Squish**: Element scales down non-uniformly (e.g., width increases slightly while height decreases).
* **Explode/Confetti**: Particles burst outwards from the element.
* **Splash**: A colored splash shape expands behind the element.
* **Jelly**: Element jiggles like gelatin when clicked.
* **Flash**: Element rapidly changes background color or opacity for a split second.

## 5. Scroll-Driven Animations
Animations bound to the user's scroll position.

* **Parallax**: Background layers move at a slower rate than foreground layers.
* **Reveal on Scroll**: Elements trigger entrance animations as they enter the viewport.
* **Scrubbing/Tied to Scroll**: Animation progress is directly mapped to scroll progress (e.g., a progress bar filling up).
* **Sticky Positioning**: Element scrolls normally, then sticks to a specific position in the viewport before resuming scrolling later.
* **Horizontal Scroll Section**: Scrolling vertically translates a container horizontally.
* **Scroll Snap**: Viewport automatically glides and stops at defined snap points.
* **Zoom on Scroll**: Element scales up/down progressively as the user scrolls.

## 6. Loading Spinners & Indicators
Indeterminate and determinate progress indicators.

* **Spinning Ring**: A standard circle with a border where one part is colored and rotates.
* **Dual Ring**: A circle with two colored borders rotating.
* **Chasing Dots**: Two dots chasing each other in a circular path.
* **Bouncing Dots (Three Dots)**: Three dots sequentially jumping up and down.
* **Pulse Ripple**: Concentric circles expanding and fading out.
* **Folding Cube**: Four cubes folding into each other.
* **Cube Grid**: A 3x3 grid of cubes that scale up and down in a wave pattern.
* **Wandering Cubes**: Two cubes moving in a square path.
* **Wave/Bars**: Vertical bars sequentially growing and shrinking.
* **Circular Progress (Determinate)**: An SVG circle whose `stroke-dashoffset` animates from 100% to a specified value.
* **Linear Progress (Indeterminate)**: A horizontal bar with a smaller colored bar sliding endlessly back and forth.
* **Skeleton Loader**: A placeholder structure that exhibits a pulsing or shimmering gradient effect to indicate loading content.

## 7. Micro-Interactions
Small, single-purpose animations providing user feedback.

* **Heart Pop (Like)**: A heart icon scales up, turns red, and emits small particles.
* **Toggle Switch**: A pill-shaped container where a circle slides from left (off) to right (on), usually changing background color.
* **Hamburger to X**: Three horizontal lines cross and rotate to form a close ('X') icon.
* **Bell Ring (Notification)**: A bell icon swings back and forth like a pendulum.
* **Checkmark Draw**: An SVG path sequentially draws a check symbol inside a circle upon success.
* **Error Shake**: An input field or form shakes horizontally (wobble) and borders turn red when validation fails.
* **Send Paper Airplane**: A send icon flies upwards and fades out, often replaced by a checkmark.
* **Pull to Refresh**: A spinner or custom illustration appears and animates at the top of a scroll view when dragged downwards.
* **Tooltip Pop**: A small informative box scales up smoothly from the target element.

## 8. Physics-Based Motion
Animations governed by simulated physics rather than fixed cubic-bezier curves (commonly using React Spring, Framer Motion, or GSAP).

* **Spring**: Motion that incorporates mass, stiffness, and damping. Overshoots its target and settles.
* **Bouncy Spring**: A spring with low damping, causing multiple oscillations before settling.
* **Stiff Spring**: A spring with high stiffness, resulting in a fast, rigid snap.
* **Gravity Drop**: Element accelerates downwards as if pulled by gravity, often bouncing upon hitting a "floor".
* **Friction/Deceleration**: An element moves rapidly at first and smoothly glides to a halt, simulating sliding on a surface.
* **Inertia/Momentum**: An element continues moving after a drag gesture is released, slowing down based on friction.
* **Toss**: An element is swiped away and follows a parabolic trajectory off-screen.
* **Swing**: Element hinges from a top anchor point and swings back and forth, losing momentum over time.

## 9. SVG Drawing & Animation
Animations specifically manipulating SVG properties.

* **Line Drawing**: Animating the `stroke-dasharray` and `stroke-dashoffset` to simulate a pen drawing a path.
* **Morphing**: Interpolating the `d` attribute of an `<path>` from one shape to another (e.g., a square turning into a circle).
* **Path Tracing**: An object (like a dot or an icon) animating along a predefined SVG path.
* **SVG Fill**: Gradually animating the `fill` property from transparent to a solid color.
* **Stroke Expansion**: Animating the `stroke-width` from 0 to a desired thickness.
* **Mask Reveal**: Animating an SVG `<mask >` or `<clipPath>` to reveal the underlying graphic organically.

## 10. Text / Typography Animations
Effects applied to text nodes.

* **Typewriter Effect**: Characters appear sequentially as if being typed out.
* **Staggered Fade In**: Individual letters or words fade in one after another.
* **Text Reveal (Masked)**: Text slides up from behind an invisible rectangular mask.
* **Glitch Effect**: Text rapidly shifts colors (cyan/red), skews, and splits to simulate digital distortion.
* **Highlight Sweep**: A background highlight color sweeps across the text from left to right.
* **Kerning Animation**: The `letter-spacing` animates from a wide spread to a normal spacing.
* **Text Scramble**: Characters randomly scramble through different letters/symbols before settling on the correct word.
