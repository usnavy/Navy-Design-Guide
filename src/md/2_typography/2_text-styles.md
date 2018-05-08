### Text Styles

The text styles we use are derived from the
[U.S. Web Design System](https://designsystem.digital.gov/), which
includes specifications for legible hierarchies with visually
consistent typographic scales. To create our styles, we use five
fonts:

* [Roboto Regular](https://fonts.google.com/specimen/Roboto)
* [Roboto Italic](https://fonts.google.com/specimen/Roboto)
* [Roboto Bold](https://fonts.google.com/specimen/Roboto)
* [Roboto Bold Italic](https://fonts.google.com/specimen/Roboto)
* [Roboto Slab Bold](https://fonts.google.com/specimen/Roboto+Slab)

We use the clean and unobtrusive Roboto Regular for body text and
the more visually complex and impactful Roboto Slab Bold for
headings, creating strong contrast and a sense of narrative within
the hierarchy of each page. This pairing mirrors the default
pairing of Merriweather headings with Source Sans Pro body text in
the U.S. Web Design System.

For large headings, we use a tighter line-height. Roboto Slab has
a shorter x-height than Merriweather, and so requires less vertical
space to produce a similar optical effect.

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <h3 class="usa-display">Display</h3>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-serif;
font-weight: $font-bold;
font-size: $title-font-size;
line-height: $heading-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto Slab';
font-weight: 700;
font-size: 52px;
line-height: 1.3em/68px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <h1>Heading 1</h1>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-serif;
font-weight: $font-bold;
font-size: $h1-font-size;
line-height: $heading-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto Slab';
font-weight: 700;
font-size: 40px;
line-height: 1.3em/52px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <h2>Heading 2</h2>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-serif;
font-weight: $font-bold;
font-size: $h2-font-size;
line-height: $heading-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto Slab';
font-weight: 700;
font-size: 30px;
line-height: 1.3em/39px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <h3>Heading 3</h3>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-serif;
font-weight: $font-bold;
font-size: $h3-font-size;
line-height: $heading-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto Slab';
font-weight: 700;
font-size: 20px;
line-height: 1.3em/26px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <h4>Heading 4</h4>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-serif;
font-weight: $font-bold;
font-size: $h4-font-size;
line-height: $heading-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto Slab';
font-weight: 700;
font-size: 17px;
line-height: 1.3em/22px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <h5>Heading 5</h5>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-serif;
font-weight: $font-bold;
font-size: $h5-font-size;
line-height: $heading-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto Slab';
font-weight: 700;
font-size: 15px;
line-height: 1.3em/20px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <h6>Heading 6</h6>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-serif;
font-weight: $font-bold;
font-size: $h6-font-size;
line-height: $heading-line-height;
text-transform: uppercase;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto';
font-weight: 700;
font-size: 13px;
line-height: 1.3em/17px;
text-transform: uppercase;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <p class="usa-font-lead">Lead paragraph</p>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-sans;
font-weight: $font-normal;
font-size: $lead-font-size;
line-height: $lead-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto';
font-weight: 400;
font-size: 20px;
line-height: 1.7em/34px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <p>Body copy. A series of sentences together which make a paragraph.</p>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-sans;
font-weight: $font-normal;
font-size: $base-font-size;
line-height: $base-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto';
font-weight: 400;
font-size: 20px;
line-height: 1.5em/26px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <p style="font-style: italic;">Italic body copy. A series of sentences together which make a paragraph.</p>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-sans;
font-style: italic;
font-weight: $font-normal;
font-size: $base-font-size;
line-height: $base-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 20px;
line-height: 1.5em/26px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <p style="font-weight: 700;">Bold body copy. A series of sentences together which make a paragraph.</p>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-sans;
font-weight: $font-bold;
font-size: $base-font-size;
line-height: $base-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto';
font-weight: 700;
font-size: 20px;
line-height: 1.5em/26px;
```
</pre>
  </div>
</div>

<div class="text-style row row--thirds">
  <div class="text-style__example">
    <p style="font-style: italic; font-weight: 700;">Bold italic body copy. A series of sentences together which make a paragraph.</p>
  </div>
  <div class="text-style__source text-style__source--scss">
    <div class="text-style__source__type">SCSS</div> 
<pre>
```
font-family: $font-sans;
font-weight: $font-bold;
font-size: $base-font-size;
line-height: $base-line-height;
```
</pre>
  </div>
  <div class="text-style__source text-style__source--css">
    <div class="text-style__source__type">CSS</div> 
<pre>
```
font-family: 'Roboto';
font-weight: 700;
font-size: 20px;
line-height: 1.5em/26px;
```
</pre>
  </div>
</div>
