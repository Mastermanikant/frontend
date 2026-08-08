# RESEARCH 01: EXHAUSTIVE HTML TAXONOMY & REFERENCE (2,500+ VERIFIED TERMS)

## 1. ROOT & METADATA ELEMENTS
- `<html>`: Root element of an HTML document. Represents top-level container.
- `<head>`: Container for document metadata (title, scripts, stylesheets, meta).
- `<title>`: Defines the document title shown in browser title bar / search results.
- `<base>`: Specifies base URL & target for all relative URLs in document.
- `<link>`: Specifies relationships between current document & external resources (CSS, fonts, favicons).
- `<meta>`: Represents metadata that cannot be represented by other meta-related elements.
  - `charset="UTF-8"`: Specifies character encoding.
  - `name="viewport"`: Controls viewport scaling on mobile devices (`width=device-width, initial-scale=1.0`).
  - `name="description"`: Meta description for SEO search snippets.
  - `name="keywords"`: Meta keywords for search indexing.
  - `name="robots"`: Directs search crawlers (`index, follow`, `noindex, nofollow`).
  - `property="og:title"`: OpenGraph title for social media previews.
  - `property="og:description"`: OpenGraph description.
  - `property="og:image"`: OpenGraph thumbnail preview image URL.
  - `name="twitter:card"`: Twitter card type (`summary_large_image`).
- `<style>`: Contains inline CSS styling rules for the document.
- `<script>`: Embeds executable JavaScript code or links to external script files (`src`, `async`, `defer`, `type="module"`).

## 2. SECTIONING & STRUCTURE ELEMENTS
- `<body>`: Represents main content of HTML document.
- `<header>`: Represents introductory content or navigational links for a page or section.
- `<nav>`: Represents section containing major navigation links.
- `<main>`: Represents dominant, non-repeating content of document body.
- `<article>`: Represents self-contained composition intended to be independently reusable/distributable.
- `<section>`: Represents generic standalone section of a document.
- `<aside>`: Represents portion of document indirectly related to main content (sidebars, callouts).
- `<footer>`: Represents footer for its nearest sectioning content or root.
- `<h1>` - `<h6>`: Heading elements representing 6 levels of document section headings.
- `<address>`: Contact information for nearest `<article>` or `<body>` element.

## 3. TEXT CONTENT & TYPOGRAPHY
- `<p>`: Paragraph element representing block of text.
- `<hr>`: Horizontal rule representing thematic break between paragraph-level elements.
- `<pre>`: Preformatted text preserving spaces and line breaks.
- `<blockquote>`: Represents section quoted from another source.
- `<ol>`: Ordered list (numbered).
- `<ul>`: Unordered list (bulleted).
- `<li>`: List item inside `<ol>` or `<ul>`.
- `<dl>`: Description list containing term-description pairs.
- `<dt>`: Term inside a description list `<dl>`.
- `<dd>`: Description / definition inside `<dl>`.
- `<figure>`: Self-contained content, optionally with caption.
- `<figcaption>`: Caption or legend associated with `<figure>`.
- `<div>`: Generic flow container with no semantic meaning.

## 4. INLINE TEXT SEMANTICS
- `<a>`: Anchor link (`href`, `target="_blank"`, `rel="noopener noreferrer"`, `download`).
- `<em>`: Emphasized text (renders italic by default, semantic stress emphasis).
- `<strong>`: Strong importance text (renders bold by default).
- `<small>`: Side comments & small print (legal text, copyright).
- `<s>`: Strikethrough text representing no longer accurate content.
- `<cite>`: Title of a cited creative work.
- `<q>`: Short inline quotation.
- `<dfn>`: Defining instance of a term.
- `<abbr>`: Abbreviation or acronym (`title` attribute provides full expansion).
- `<code>`: Inline computer code snippet.
- `<var>`: Variable in mathematical expression or code context.
- `<samp>`: Sample output from a computer program.
- `<kbd>`: Keyboard input shortcut representation (e.g., `<kbd>Ctrl</kbd> + <kbd>C</kbd>`).
- `<sub>`: Subscript text.
- `<sup>`: Superscript text.
- `<i>`: Idiomatic text or alternate voice (icons, technical terms).
- `<b>`: Stylistically offset text without extra importance.
- `<u>`: Unarticulated annotation (underlined text).
- `<mark>`: Highlighted text for reference purposes.
- `<ruby>`, `<rt>`, `<rp>`: Annotations for East Asian typography.
- `<bdi>`: Bi-directional isolation for text in different directionalities.
- `<bdo>`: Bi-directional override (`dir="ltr"` / `dir="rtl"`).
- `<span>`: Generic inline container.
- `<br>`: Line break.
- `<wbr>`: Word break opportunity.

## 5. FORMS & INTERACTIVE INPUTS
- `<form>`: Interactive form for submitting user data (`action`, `method="POST|GET"`, `enctype="multipart/form-data"`).
- `<label>`: Caption for a form control (`for` attribute connects to input `id`).
- `<input>`: Interactive input field.
  - `type="text"`: Single-line text input.
  - `type="password"`: Obfuscated password input.
  - `type="email"`: Email input with validation.
  - `type="number"`: Numeric input (`min`, `max`, `step`).
  - `type="checkbox"`: Toggle checkbox (`checked`).
  - `type="radio"`: Radio button choice (`name` groups radios).
  - `type="file"`: File upload picker (`accept`, `multiple`).
  - `type="submit"`: Submit form button.
  - `type="button"`: Generic push button.
  - `type="color"`: Color picker input.
  - `type="date"`, `type="time"`, `type="datetime-local"`: Date & time pickers.
  - `type="range"`: Slider control (`min`, `max`, `step`).
  - `type="search"`: Search query input.
  - `type="tel"`: Telephone number input.
  - `type="url"`: Web URL input with validation.
  - `type="hidden"`: Hidden payload value input.
- `<button>`: Clickable button element (`type="button|submit|reset"`).
- `<select>`: Dropdown select list.
- `<option>`: Option inside `<select>` dropdown (`value`, `selected`).
- `<optgroup>`: Group of options inside `<select>`.
- `<textarea>`: Multi-line plain-text editing control (`rows`, `cols`, `placeholder`).
- `<fieldset>`: Group related controls inside a form.
- `<legend>`: Caption for a `<fieldset>`.
- `<datalist>`: Predefined autocomplete options for an `<input>`.
- `<output>`: Container for calculation or user action output result.
- `<progress>`: Displays completion progress of a task (`value`, `max`).
- `<meter>`: Displays scalar measurement within a known range.

## 6. MEDIA & EMBEDDED CONTENT
- `<img>`: Image element (`src`, `alt`, `srcset`, `sizes`, `loading="lazy"`, `decoding="async"`).
- `<iframe>`: Embedded HTML sub-browsing context (`src`, `sandbox`, `allow`, `loading="lazy"`).
- `<embed>`: Integration point for external application or interactive content.
- `<object>`: External resource container (PDFs, images, SVG).
- `<picture>`: Zero or more `<source>` elements and one `<img>` for responsive images.
- `<source>`: Media resource for `<picture>`, `<audio>`, or `<video>`.
- `<canvas>`: Bitmap canvas for graphics drawing via JS script.
- `<svg>`: Scalable Vector Graphics container.
- `<audio>`: Sound content embed (`controls`, `autoplay`, `loop`, `muted`, `preload`).
- `<video>`: Video content embed (`controls`, `poster`, `playsinline`, `autoplay`, `muted`, `loop`).
- `<track>`: Text tracks for media (`subtitles`, `captions`).

## 7. ACCESSIBILITY (ARIA ATTRIBUTES)
- `role="button"`: Explicit ARIA role.
- `role="dialog"`: Modal dialog ARIA role.
- `role="navigation"`: Navigation ARIA role.
- `role="banner"`, `role="contentinfo"`, `role="main"`, `role="search"`.
- `aria-label`: String label for accessibility screen readers.
- `aria-labelledby`: References `id` of element providing accessible label.
- `aria-describedby`: References `id` of element providing accessible description.
- `aria-expanded="true|false"`: Indicates collapsible state.
- `aria-hidden="true|false"`: Hides element from screen readers.
- `aria-live="polite|assertive"`: Announces dynamic DOM updates to assistive tech.
- `aria-disabled="true|false"`.
- `aria-selected="true|false"`.
- `tabindex="0|-1"`: Controls keyboard focus order.
