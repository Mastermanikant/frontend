# RESEARCH_06_ADVANCED_ECOSYSTEM: Exhaustive Taxonomy

## 1. React 18 & Core Architecture (Hooks, JSX, State)
* **React**: Declarative, component-based JavaScript library for building UIs.
* **JSX**: Syntax extension for JavaScript, allowing HTML-like markup in JS.
* **Components**: Reusable, independent UI building blocks (functional/class).
* **Virtual DOM**: Lightweight memory representation of the actual DOM.
* **Reconciliation**: Algorithm React uses to diff Virtual DOM trees (Fiber).
* **Fiber Architecture**: React's core rendering engine for interruptible rendering.
* **Concurrent Features**: React 18 capabilities enabling background rendering tasks.
* **State**: Internal data store of a component that dictates its render output.
* **Props (Properties)**: Read-only inputs passed from parent to child components.
* **Hooks**: Functions that let you "hook into" React state and lifecycle features.
* **useState**: Hook for adding state variables to functional components.
* **useEffect**: Hook for performing side effects (data fetching, subscriptions).
* **useContext**: Hook for subscribing to React Context without nesting.
* **useReducer**: Hook for state management via reducers (complex state logic).
* **useMemo**: Hook for memoizing computationally expensive values.
* **useCallback**: Hook for memoizing callback functions to prevent re-renders.
* **useRef**: Hook for mutable references that don't trigger re-renders.
* **useTransition**: React 18 hook to mark state updates as non-urgent transitions.
* **useDeferredValue**: React 18 hook to defer updating a less important part of the UI.
* **useLayoutEffect**: Hook that fires synchronously after all DOM mutations.
* **useInsertionEffect**: Hook for CSS-in-JS libraries to inject styles before paint.
* **useId**: Hook for generating unique IDs for accessibility attributes.
* **useSyncExternalStore**: Hook for reading and subscribing to external data sources.
* **Suspense**: Component that lets you display a fallback until its children finish loading.
* **Error Boundaries**: Components that catch JavaScript errors in their child tree.
* **Portals**: Mechanism to render children into a DOM node outside the parent hierarchy.
* **Strict Mode**: Tool for highlighting potential problems in an application.
* **Context API**: Mechanism for sharing data across the component tree without prop drilling.
* **Higher-Order Component (HOC)**: Function that takes a component and returns a new component.
* **Render Props**: Technique for sharing code using a prop whose value is a function.
* **Server Components (RSC)**: React components that run exclusively on the server.
* **Client Components**: Standard React components that render on the client.
* **Hydration**: Process of attaching event listeners to server-rendered HTML.
* **Selective Hydration**: React 18 feature using Suspense to hydrate components dynamically.
* **Automatic Batching**: React 18 feature grouping multiple state updates into a single re-render.
* **Synthetic Events**: React's cross-browser wrapper around native browser events.

## 2. Next.js (SSR, SSG, Routing, App Router)
* **Next.js**: React framework for production (hybrid static & server rendering).
* **App Router**: New Next.js routing paradigm using the `app` directory and Server Components.
* **Pages Router**: Legacy Next.js routing system using the `pages` directory.
* **Server-Side Rendering (SSR)**: Generating HTML on the server for each request (`getServerSideProps`).
* **Static Site Generation (SSG)**: Generating HTML at build time (`getStaticProps`).
* **Incremental Static Regeneration (ISR)**: Updating static pages in the background without rebuilding the entire site.
* **Client-Side Rendering (CSR)**: Rendering the page in the browser using JavaScript.
* **File-System Routing**: Defining routes based on the file and folder structure.
* **Dynamic Routes**: Routes with dynamic segments (e.g., `[id].tsx`).
* **Catch-All Routes**: Routes that match multiple segments (e.g., `[...slug].tsx`).
* **Route Handlers**: API endpoints created in the App Router (`route.ts`).
* **API Routes**: Legacy endpoints in the Pages Router (`pages/api/`).
* **Layouts**: Shared UI components that wrap multiple pages (`layout.tsx`).
* **Templates**: Similar to layouts but create a new instance on navigation (`template.tsx`).
* **Loading UI**: Special files for defining loading states with Suspense (`loading.tsx`).
* **Error UI**: Special files for defining error boundaries (`error.tsx`).
* **Not Found UI**: Special files for handling 404 errors (`not-found.tsx`).
* **Middleware**: Code that runs before a request is completed for routing/auth control.
* **Next/Image**: Optimized image component with lazy loading and automated sizing.
* **Next/Link**: Component for client-side navigation between routes.
* **Next/Script**: Component for optimizing third-party script loading.
* **Next/Font**: Built-in font optimization (Google Fonts and local fonts).
* **Server Actions**: Asynchronous functions executed on the server directly from client components.
* **generateMetadata**: API for generating dynamic SEO metadata in the App Router.
* **generateStaticParams**: API for defining static routes in the App Router (replacing `getStaticPaths`).
* **Edge Runtime**: Lightweight runtime for running Middleware and certain API routes globally.
* **Node.js Runtime**: Standard runtime for heavy server-side Node.js operations.
* **next.config.js**: Configuration file for customizing Next.js behavior (webpack, redirects, rewrites).

## 3. Performance & Core Web Vitals (CWV)
* **Core Web Vitals**: Google's standardized metrics for user experience on the web.
* **Largest Contentful Paint (LCP)**: Measures loading performance (target: <2.5s).
* **First Input Delay (FID)**: Measures interactivity and responsiveness (deprecated, replaced by INP).
* **Interaction to Next Paint (INP)**: Measures overall responsiveness to user interactions (target: <200ms).
* **Cumulative Layout Shift (CLS)**: Measures visual stability and unexpected shifts (target: <0.1).
* **First Contentful Paint (FCP)**: Time until the first piece of DOM content is rendered.
* **Time to First Byte (TTFB)**: Time taken for the browser to receive the first byte of page content.
* **Time to Interactive (TTI)**: Time until the page is fully interactive and responsive.
* **Total Blocking Time (TBT)**: Total time between FCP and TTI where the main thread is blocked.
* **Speed Index (SI)**: How quickly the contents of a page are visibly populated.
* **Main Thread**: The browser thread that handles UI updates, JS execution, and rendering.
* **Code Splitting**: Splitting bundles into smaller chunks to load on demand.
* **Tree Shaking**: Eliminating dead code during the build process.
* **Minification**: Removing unnecessary characters (whitespace, comments) from code.
* **Lazy Loading**: Deferring the loading of non-critical resources (images, components).
* **Prefetching**: Downloading resources for future navigations in the background.
* **Preloading**: Forcing the browser to fetch critical resources early in the page load.
* **Resource Hints**: Attributes like `preconnect`, `dns-prefetch`, `preload`, `prefetch`.
* **Critical CSS**: Extracting and inlining the CSS needed for above-the-fold content.
* **Content Delivery Network (CDN)**: Geographically distributed servers for caching and delivering assets.
* **Brotli/Gzip**: Compression algorithms for reducing file sizes over the network.
* **Service Workers**: Scripts running in the background for caching and offline capabilities (PWAs).
* **Memoization**: Caching the results of expensive function calls to improve execution speed.
* **Debouncing**: Limiting the rate at which a function fires (e.g., waiting for typing to stop).
* **Throttling**: Guaranteeing a function execution at a regular interval (e.g., scroll events).

## 4. Search Engine Optimization (SEO)
* **Crawling**: Search engines discovering pages on the web via links.
* **Indexing**: Search engines analyzing and storing information about a page.
* **Ranking**: Search engines determining the best results for a query.
* **Metadata**: Data describing the page content (title, description).
* **Title Tag**: HTML tag specifying the title of a web page (<title>).
* **Meta Description**: HTML tag providing a brief summary of the page (<meta name="description">).
* **Canonical Tag**: HTML element preventing duplicate content issues (<link rel="canonical">).
* **Open Graph (OG)**: Protocol for standardizing how URLs are displayed on social media (Facebook/LinkedIn).
* **Twitter Cards**: Protocol similar to OG specifically for Twitter link previews.
* **Schema Markup (JSON-LD)**: Structured data helping search engines understand page context (e.g., Articles, Products).
* **Robots.txt**: File instructing search engine crawlers which pages to index or ignore.
* **Sitemap.xml**: XML file listing a website's important pages for crawlers.
* **Hreflang**: Attribute indicating the language and geographical targeting of a webpage.
* **Alt Text**: Descriptive text for images, crucial for accessibility and image search.
* **Semantic HTML**: Using correct HTML tags (`<header>`, `<nav>`, `<article>`) to convey meaning.
* **Mobile-First Indexing**: Google predominantly using the mobile version of the content for indexing.
* **Dynamic Rendering**: Serving a pre-rendered, static HTML version of a site to crawlers and JS to users.
* **Pagination SEO**: Handling `rel="next"` and `rel="prev"` or canonicalizing lists properly.
* **Lighthouse**: Automated open-source tool for improving quality of web pages (audits SEO, Perf).

## 5. Security (CSP, CORS, Authentication)
* **Cross-Site Scripting (XSS)**: Attack injecting malicious scripts into trusted websites.
* **Cross-Site Request Forgery (CSRF)**: Attack forcing a user to execute unwanted actions on an authenticated app.
* **Content Security Policy (CSP)**: HTTP header mitigating XSS and data injection by restricting asset sources.
* **Cross-Origin Resource Sharing (CORS)**: HTTP-header based mechanism allowing restricted resources to be requested from another domain.
* **Same-Origin Policy**: Browser security model restricting how a document/script interacts with resources from another origin.
* **JSON Web Token (JWT)**: Compact URL-safe means of representing claims between two parties securely.
* **OAuth 2.0**: Industry-standard protocol for authorization (delegated access).
* **OpenID Connect (OIDC)**: Identity layer on top of the OAuth 2.0 protocol.
* **Session Cookies**: Cookies containing a unique session identifier.
* **HttpOnly Cookies**: Cookies inaccessible to JavaScript, mitigating XSS risks.
* **Secure Cookies**: Cookies only transmitted over encrypted (HTTPS) connections.
* **SameSite Attribute**: Cookie attribute controlling cross-site request behavior (`Strict`, `Lax`, `None`).
* **Role-Based Access Control (RBAC)**: Restricting system access based on user roles.
* **Rate Limiting**: Controlling the number of requests a client can make in a given timeframe (DDoS prevention).
* **Clickjacking**: Tricking a user into clicking something different from what they perceive (prevented by `X-Frame-Options`).
* **Man-in-the-Middle (MitM)**: Attack where an adversary intercepts and alters communication.
* **HTTPS / SSL / TLS**: Cryptographic protocols designed to provide communications security over a network.
* **Subresource Integrity (SRI)**: Feature ensuring fetched files haven't been manipulated (using hashes).
* **SQL Injection (SQLi)**: Attack executing malicious SQL statements (more relevant to backend/Next.js API).
* **Sanitization**: Process of cleaning input data to ensure it is safe (e.g., using `DOMPurify`).

## 6. Testing (Jest, Playwright, Cypress, RTL)
* **Unit Testing**: Testing individual units or components in isolation.
* **Integration Testing**: Testing how multiple units or components work together.
* **End-to-End (E2E) Testing**: Testing the entire application flow from a user's perspective.
* **Jest**: Delightful JavaScript testing framework with a focus on simplicity (runner, assertions, mocks).
* **React Testing Library (RTL)**: Library for testing React components focusing on user interactions rather than implementation details.
* **Vitest**: Blazing fast unit test framework powered by Vite.
* **Playwright**: Microsoft's framework for E2E testing across Chromium, Firefox, and WebKit.
* **Cypress**: E2E testing framework that runs tests directly in the browser.
* **Selenium**: Legacy web driver tool for automated browser testing.
* **Mocha/Chai**: Popular JavaScript test framework and assertion library combo.
* **Test-Driven Development (TDD)**: Writing tests before writing the actual code.
* **Behavior-Driven Development (BDD)**: Testing focused on system behaviors (Given/When/Then).
* **Mocking**: Creating fake objects or functions to simulate real behavior (e.g., mocking API calls).
* **Spying**: Monitoring a function to verify if it was called and with what arguments.
* **Stubbing**: Replacing a function with a predetermined response.
* **Snapshot Testing**: Comparing the rendered output of a component against a saved reference image or UI representation.
* **Code Coverage**: Metric indicating the percentage of code executed during automated tests (Istanbul, c8).
* **MSW (Mock Service Worker)**: API mocking library that intercepts requests on the network level via Service Workers.
* **user-event**: RTL companion library that simulates real user interactions (typing, clicking) more accurately than `fireEvent`.
* **CI/CD Integration**: Running tests automatically in pipelines (GitHub Actions, Jenkins) before deployment.

## 7. Build Tools & Bundlers (Vite, Webpack, Babel)
* **Bundler**: Tool that takes multiple JS files and their dependencies and packs them into a single file.
* **Webpack**: Highly configurable static module bundler for modern JS applications.
* **Vite**: Next-generation frontend tooling providing extremely fast dev server and optimized production builds.
* **Rollup**: Module bundler focused on ES modules, often used for library authoring.
* **esbuild**: Extremely fast bundler written in Go.
* **Parcel**: Zero-configuration web application bundler.
* **SWC (Speedy Web Compiler)**: Super-fast TS/JS compiler written in Rust (used in Next.js).
* **Babel**: JavaScript compiler used to convert ECMAScript 2015+ code into a backwards-compatible version.
* **Turbopack**: Incremental bundler optimized for Next.js, built in Rust (successor to Webpack).
* **Transpilation**: Process of translating source code from one language to another at the same abstraction level (TS to JS).
* **PostCSS**: Tool for transforming CSS with JavaScript plugins (Autoprefixer, Tailwind).
* **Terser**: JavaScript parser and mangler/compressor toolkit for ES6+.
* **ES Modules (ESM)**: Official standard format for packaging JavaScript code (`import` / `export`).
* **CommonJS (CJS)**: Module formatting system used predominantly in Node.js (`require` / `module.exports`).
* **Hot Module Replacement (HMR)**: Feature that exchanges, adds, or removes modules while an application is running without a full reload.
* **Monorepo**: Single repository containing multiple distinct projects (managed by Turborepo, Nx, Lerna).
* **Turborepo**: High-performance build system for JavaScript/TypeScript monorepos.
* **Nx**: Smart, fast and extensible build system with first class monorepo support.
* **Source Maps**: Files mapping transformed/minified code back to the original source code for debugging.
* **Polyfills**: Code providing modern functionality on older browsers that do not natively support it (e.g., `core-js`).
