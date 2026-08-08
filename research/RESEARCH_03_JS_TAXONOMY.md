# RESEARCH 03: JAVASCRIPT EXHAUSTIVE TAXONOMY

## 1. Syntax & Core Language
### Variables & Scope
- `var`: Function-scoped variable declaration.
- `let`: Block-scoped local variable declaration.
- `const`: Block-scoped, read-only named constant.
- `Global Scope`: Variables declared outside any function or block.
- `Local/Function Scope`: Variables accessible only within the function they are declared.
- `Block Scope`: Variables scoped to a `{}` block.
- `Hoisting`: JavaScript's default behavior of moving declarations to the top.
- `Closure`: A function bundled together with references to its surrounding state.

### Data Types & Structures
- `String`: Represents textual data.
- `Number`: Double-precision 64-bit binary format IEEE 754 value.
- `BigInt`: Numeric primitive that can represent integers with arbitrary precision.
- `Boolean`: Logical entity having two values: `true` and `false`.
- `Undefined`: A variable that has not been assigned a value.
- `Null`: Represents the intentional absence of any object value.
- `Symbol`: A unique and immutable primitive value, often used as object property keys.
- `Object`: A collection of properties.
- `Array`: A global object used to store multiple values in a single variable.
- `Map`: Collection of keyed data items, just like an `Object`, but allows keys of any type.
- `Set`: A collection of unique values.
- `WeakMap`: A collection of key/value pairs in which the keys are weakly referenced.
- `WeakSet`: A collection of objects in which the objects are weakly referenced.

### Operators
- `Arithmetic Operators`: `+`, `-`, `*`, `/`, `%`, `++`, `--`, `**`.
- `Assignment Operators`: `=`, `+=`, `-=`, `*=`, `/=`, etc.
- `Comparison Operators`: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- `Logical Operators`: `&&` (AND), `||` (OR), `!` (NOT).
- `Bitwise Operators`: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.
- `Ternary Operator`: `condition ? exprIfTrue : exprIfFalse`.
- `Typeof Operator`: Returns a string indicating the type of the unevaluated operand.
- `Instanceof Operator`: Tests whether the prototype property of a constructor appears in the prototype chain of an object.
- `Spread Syntax (...)`: Allows an iterable to be expanded in places where zero or more arguments are expected.
- `Rest Parameters`: Allows a function to accept an indefinite number of arguments as an array.
- `Optional Chaining (?.)`: Permits reading the value of a property located deep within a chain of connected objects.
- `Nullish Coalescing (??)`: A logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined.

### Control Flow
- `if...else`: Executes a statement if a specified condition is truthy.
- `switch`: Evaluates an expression, matching the expression's value to a case clause.
- `for`: Creates a loop that consists of three optional expressions.
- `for...in`: Iterates over all enumerable properties of an object.
- `for...of`: Iterates over iterable objects (arrays, maps, sets, etc.).
- `while`: Creates a loop that executes a specified statement as long as the test condition evaluates to true.
- `do...while`: Creates a loop that executes a block of code at least once, before checking if the condition is true.
- `break`: Terminates the current loop, switch, or label statement.
- `continue`: Terminates execution of the statements in the current iteration of the current or labeled loop.

### Functions
- `Function Declaration`: Defines a named function.
- `Function Expression`: Defines a function inside an expression.
- `Arrow Function (=>)`: A compact alternative to a traditional function expression.
- `IIFE (Immediately Invoked Function Expression)`: A JavaScript function that runs as soon as it is defined.
- `Generator Function (function*)`: A function that can be exited and later re-entered.
- `this`: Refers to the object it belongs to.
- `call()`: Calls a function with a given `this` value and arguments provided individually.
- `apply()`: Calls a function with a given `this` value and arguments provided as an array.
- `bind()`: Creates a new function that, when called, has its `this` keyword set to the provided value.

### Classes & OOP
- `class`: A template for creating objects.
- `constructor`: A special method for creating and initializing an object created within a class.
- `extends`: Used in class declarations to create a class as a child of another class.
- `super`: Used to call the constructor of its parent class.
- `static`: Defines a static method or property for a class.
- `get`: Binds an object property to a function that will be called when that property is looked up.
- `set`: Binds an object property to a function to be called when there is an attempt to set that property.
- `Prototype`: The mechanism by which JavaScript objects inherit features from one another.

## 2. Document Object Model (DOM)
- `Document`: Represents the entire HTML or XML document.
- `Element`: A node in the DOM tree representing an HTML element.
- `Node`: The generic base class from which various types of DOM objects inherit.
- `NodeList`: A collection of nodes, usually returned by properties like `childNodes` or methods like `querySelectorAll`.
- `HTMLCollection`: A collection of HTML elements.
- `document.getElementById()`: Returns an Element object representing the element whose id property matches the specified string.
- `document.querySelector()`: Returns the first Element within the document that matches the specified selector.
- `document.querySelectorAll()`: Returns a static NodeList representing a list of the document's elements that match the specified group of selectors.
- `document.createElement()`: Creates the HTML element specified by tagName.
- `element.appendChild()`: Adds a node to the end of the list of children of a specified parent node.
- `element.removeChild()`: Removes a child node from the DOM and returns the removed node.
- `element.innerHTML`: Gets or sets the HTML or XML markup contained within the element.
- `element.textContent`: Gets or sets the text content of a node and its descendants.
- `element.setAttribute()`: Sets the value of an attribute on the specified element.
- `element.getAttribute()`: Returns the value of a specified attribute on the element.
- `element.classList`: Returns a live DOMTokenList collection of the class attributes of the element.
- `element.style`: Used to get or set the inline style of an element.

## 3. Events
- `EventTarget`: An interface implemented by objects that can receive events and may have listeners for them.
- `Event`: An interface representing an event which takes place in the DOM.
- `addEventListener()`: Sets up a function that will be called whenever the specified event is delivered to the target.
- `removeEventListener()`: Removes an event listener previously registered.
- `Event.preventDefault()`: Tells the user agent that if the event does not get explicitly handled, its default action should not be taken.
- `Event.stopPropagation()`: Prevents further propagation of the current event in the capturing and bubbling phases.
- `Event Bubbling`: Event starts from the deepest element and bubbles up to its parents.
- `Event Capturing`: Event starts from the top element and propagates down to the target element.
- `Event Delegation`: Attaching a single event listener to a parent element to manage events for its children.
- `MouseEvent`: Events that occur due to the user interacting with a pointing device (e.g., `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`).
- `KeyboardEvent`: Events that occur due to the user interacting with the keyboard (e.g., `keydown`, `keypress`, `keyup`).
- `FocusEvent`: Events relating to element focus (e.g., `focus`, `blur`).
- `InputEvent`: Events fired when the value of an `<input>`, `<select>`, or `<textarea>` element changes (e.g., `input`, `change`).
- `SubmitEvent`: Fired when a form is submitted (e.g., `submit`).

## 4. Asynchronous JavaScript
- `Callback`: A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- `Promise`: An object representing the eventual completion or failure of an asynchronous operation.
- `Promise.resolve()`: Returns a Promise object that is resolved with a given value.
- `Promise.reject()`: Returns a Promise object that is rejected with a given reason.
- `Promise.all()`: Takes an iterable of promises and returns a single Promise that resolves when all of the promises resolve.
- `Promise.race()`: Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects.
- `Promise.allSettled()`: Returns a promise that resolves after all of the given promises have either fulfilled or rejected.
- `Promise.any()`: Takes an iterable of Promise objects and returns a promise that resolves as soon as one of the promises in the iterable fulfills.
- `async`: Declares an asynchronous function, which implicitly returns a Promise.
- `await`: Pauses the execution of an `async` function and waits for a Promise to resolve.
- `setTimeout()`: Sets a timer which executes a function or specified piece of code once the timer expires.
- `setInterval()`: Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
- `clearTimeout()`: Cancels a timeout previously established by calling `setTimeout()`.
- `clearInterval()`: Cancels a timed, repeating action which was previously established by a call to `setInterval()`.
- `Event Loop`: The concurrency model in JavaScript, handling the execution of multiple chunks of your program.
- `Microtask Queue`: A queue for microtasks (like Promise callbacks) that are executed before the next macro task.
- `Macrotask Queue`: A queue for macro tasks (like `setTimeout`).

## 5. Web APIs
- `Fetch API`: Provides an interface for fetching resources (including across the network).
- `XMLHttpRequest (XHR)`: Objects are used to interact with servers to retrieve data from a URL without having to do a full page refresh.
- `History API`: Provides access to the browser's session history (`history.pushState`, `history.replaceState`).
- `Geolocation API`: Allows the user to provide their location to web applications.
- `Canvas API`: Provides a means for drawing graphics via JavaScript and the HTML `<canvas>` element.
- `Web Audio API`: Provides a powerful and versatile system for controlling audio on the Web.
- `WebSockets`: Provides a way to open a persistent connection between a browser and a server.
- `Service Workers`: Scripts that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.
- `Web Workers`: Provide a simple means for web content to run scripts in background threads.
- `Intersection Observer API`: Provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
- `Mutation Observer API`: Provides the ability to watch for changes being made to the DOM tree.
- `Resize Observer API`: Reports changes to the dimensions of an Element's content or border box.
- `Performance API`: Provides access to performance-related information for the current page.

## 6. ES Modules
- `import`: Used to import live bindings exported by another module.
- `export`: Used to export functions, objects, or primitive values from a given file (or module).
- `Default Export`: `export default function...` - Only one default export is allowed per module.
- `Named Export`: `export const...` - Multiple named exports can exist per module.
- `import()` (Dynamic Import): Allows loading modules dynamically and returns a promise.
- `import.meta`: An object exposing context-specific metadata to a JavaScript module.
- `Module Scope`: Variables and functions defined in a module are scoped to that module, not globally.
- `Tree Shaking`: A term commonly used in the JavaScript context for dead-code elimination.

## 7. Storage
- `Web Storage API`: Provides mechanisms by which browsers can store key/value pairs (more intuitively than using cookies).
- `localStorage`: Stores data with no expiration date; data is not deleted when the browser is closed.
- `sessionStorage`: Stores data for one session; data is lost when the browser tab is closed.
- `Cookies`: Small pieces of data sent from a website and stored on the user's computer by the user's web browser.
- `IndexedDB`: A low-level API for client-side storage of significant amounts of structured data, including files/blobs.
- `Cache API`: A storage mechanism for `Request` / `Response` object pairs that are cached, for example, as part of the ServiceWorker life cycle.

## 8. Security
- `Cross-Site Scripting (XSS)`: A vulnerability allowing attackers to inject client-side scripts into web pages viewed by other users.
- `Cross-Site Request Forgery (CSRF)`: An attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.
- `Content Security Policy (CSP)`: An added layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection attacks.
- `CORS (Cross-Origin Resource Sharing)`: A mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
- `Same-Origin Policy`: A critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.
- `HttpOnly Cookies`: Cookies that cannot be accessed via JavaScript (`document.cookie`), mitigating XSS attacks.
- `Secure Cookies`: Cookies that are only sent to the server over an encrypted (HTTPS) connection.
- `Subresource Integrity (SRI)`: A security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation.
