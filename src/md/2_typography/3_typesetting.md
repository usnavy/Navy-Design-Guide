### Typesetting

We follow the guidelines in the U.S. Web Design System for our
typesetting:

**Left alignment**. This provides a consistent starting point
for each line, and supports the common F-shaped reading pattern.

<div class="row row--halved">
  <p>
    **A line length of 50-75 characters**. This follows usability
    research that indicates this to be the most comfortable length.
  </p>
  <div class="hint hint--scss">
    <div class="hint__type">SCSS Variable</div>
    <p>
      The `uswds` npm package provides variables for the line length
      of both the default body text style (`$text-max-width`) and the
      lead paragraph text style (`$lead-max-width`).
    </p>
  </div>
</div>

<div class="row row--halved">
  <p>
    **Spacing that matches the baseline grid**. The U.S. Web
    Design System recommends that the margin rules for typographic
    elements fit the following scale: 60px, 30px, 20px, or 15px.
    These margins combine with the different line heights to create
    optical spaces between typographic elements that match the
    underlying baseline grid created by the base line height,
    producing a strong vertical rhythm.
  </p>
  <div class="hint hint-scss">
    <div class="hint__type">SCSS Variable</div>
    <p>
      The `uswds` npm package provides variables for these and other
      multiples of the base font size (rem):
    </p>
    `$spacing-x-small: 0.5rem;`  
    `$spacing-small: 1rem;`  
    `$spacing-md-small: 1.5rem;`  
    `$spacing-medium: 2rem;`  
    `$spacing-large: 3rem;`
  </div>
</div>

<div class="typesetting">
  [Typesetting figure here] 
</div>
