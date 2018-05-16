## Color<br>
[Color](/color.md)<br>
<br>

## Typography<br>
[Text Styles](/text-styles.md)<br>
[Typefaces](/typefaces.md)<br>
[Typesetting](/typesetting.md)<br>
<br>

## Media<br>
[Media](/media.md)<br>
<br>

## Layout<br>
[Layout](/layout.md)<br>
<br>

<hr>

## Layout

### Grid system

Structuring designs around a single, unifying grid creates
visual rhythm and a sense of consistency, and enables users
to quickly grasp unfamiliar layouts. We use the grid defined
by the [U.S. Web Design System](https://designsystem.digital.gov/components/grids/):
a [responsive](http://alistapart.com/article/responsive-web-design/)
grid system that expands from one column at narrow screen
widths up to **12 columns**.

  <div class="container-fluid">     
    <div class="row">
      <div class="col-3 navy-blue">Span 3</div>
      <div class="col-3 teal-blue">Span 3</div>
      <div class="col-3 navy-blue">Span 3</div>
      <div class="col-3 teal-blue">Span 3</div>
    </div>   
  <br>
  <br>
<pre>
  ```
   <div class="container-fluid">     
    <div class="row">
      <div class="col-3 navy-blue">Span 3</div>
      <div class="col-3 teal-blue">Span 3</div>
      <div class="col-3 navy-blue">Span 3</div>
      <div class="col-3 teal-blue">Span 3</div>
    </div>   
  ```
</pre>
  <br>
  <br>
  ```
    <div class="row">
      <div class="col-4 navy-blue">Span 4</div>
      <div class="col-2 teal-blue">Span 2</div>
      <div class="col-4 navy-blue">Span 4</div>
      <div class="col-2 teal-blue">Span 2</div>
    </div>  
  <br>
  <br>
<pre>
    ```
    <div class="row">
      <div class="col-4 navy-blue">Span 4</div>
      <div class="col-2 teal-blue">Span 2</div>
      <div class="col-4 navy-blue">Span 4</div>
      <div class="col-2 teal-blue">Span 2</div>
    </div>  
    ```
</pre>
  <br>
  <br>
    <div class="row">
      <div class="col-1 navy-blue">Span 1</div>
      <div class="col-9 teal-blue">Span 9</div>
      <div class="col-2 navy-blue">Span 2</div>
    </div>  
  <br>
  <br>
  ```
    <div class="row">
      <div class="col-1 navy-blue">Span 1</div>
      <div class="col-9 teal-blue">Span 9</div>
      <div class="col-2 navy-blue">Span 2</div>
    </div>  
  ```
  <br>
  <br>
  ```
    <div class="row">
      <div class="col-5 navy-blue">Span 5</div>
      <div class="col-5 teal-blue">Span 5</div>
      <div class="col-2 navy-blue">Span 2</div>
    </div>
  ```
    <div class="row">
      <div class="col-5 navy-blue">Span 5</div>
      <div class="col-5 teal-blue">Span 5</div>
      <div class="col-2 navy-blue">Span 2</div>
    </div>
  ```
  </div>
  <br>
### Rows first, then columns

Above the most narrow screen widths, the grid expands to
include multiple columns. When multiple columns are available
for layout and we can choose between using rows and columns to
group content, we use **rows first, and then columns**. Pages
should consist of clear horizontal sections that roughly
correspond to the semantic structure of the page.

We follow this rule because the most common user experience
at larger screen widths includes vertical scrolling on a
landscape-oriented screen. To best support this, a group of
elements that spans multiple columns should be wider than it
is tall, guiding a user to see them as a unified "block" and
enabling them to finish reading one column and continue to
the next without scrolling upward. For grids of elements, this
principle applies to each row of the grid.

Grouping content in this horizontal-centric way also makes it
easier to include strong differentiating whitespace between
page sections in a way that is consistent across all screen
sizes (i.e. vertically, unconstrained by screen width).

[Examples of same content with column-centric and row-centric layout]

### Spacing

<div class="row row--halved">
  <p>
    As with text, spacing between other elements and page sections
    should be based on the underlying baseline grid created by the
    line height used for standard copy.
  </p>
  <div class="hint hint--scss">
    <div class="hint__type">SCSS Variable</div>
    <p>
      The `uswds` npm package provides variables for these multiples
      of the base font size (rem):
    </p>
    `$spacing-x-small: 0.5rem;`  
    `$spacing-small: 1rem;`  
    `$spacing-md-small: 1.5rem;`  
    `$spacing-medium: 2rem;`  
    `$spacing-large: 3rem;`
  </div>
</div>

<div class="row row--halved">
  <p>
    Use the provided spacing variables as often as possible. When
    these values don’t quite work, multiply or divide them by
    multiples of 0.5 (e.g. 4, 4.5, 6, etc.) to create other
    spacing values.
  </p>
  <div class="hint hint--scss">
    <div class="hint__type">SCSS Hint</div>
    <p>
      If existing spacing variables won't work, multiply or divide
      them by multiples of 0.5 to match the baseline grid.
    </p>
    <p>
      `/* GOOD */`  
      `margin-top: $spacing-x-small / 2;`  
      `margin-bottom: $spacing-large * 4.5;`  
    </p>
    <p>
      `/* BAD */`  
      `margin-top: $spacing-x-small / 1.15;`  
      `margin-bottom: 450px;`
    </p>
  </div>
</div>

<hr>

### To Contribute<br>
[Are you Contributing?](/CONTRIBUTING.md)<br>
<br>
