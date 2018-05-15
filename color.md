---
layout: default
---
##Color<br>
[Color](/color.md)<br>
<br>

##Typography<br>
[Text Styles](/text-styles.md)<br>
[Typefaces](/typefaces.md)<br>
[Typesetting](/typesetting.md)<br>
<br>

##Media<br>
[Media](/media.md)<br>
<br>

##Layout<br>
[Layout](/layout.md)<br>
<br>



## Color

### Color Palette

<ul class="palette">
  <li class="swatch swatch--navy-blue">
    <div class="swatch__name">Navy Blue</div>
    `#003b4f`  
    `rgb(0,59,70)`
  </li><li class="swatch swatch--navy-white">
    <div class="swatch__name">Navy White</div>
    `#fffef9`  
    `rgb(255,254,249)`
  </li><li class="swatch swatch--navy-black">
    <div class="swatch__name">Navy Black</div>
    `#08262c`  
    `rgb(8,38,44)`
  </li><li class="swatch swatch--yellow">
    <div class="swatch__name">Yellow</div>
    `#e8b00f`  
    `rgb(232,176,16)`
  </li><li class="swatch swatch--gray">
    <div class="swatch__name">Gray</div>
    `#c6ccd0`  
    `rgb(198,204,208)`
  </li><li class="swatch swatch--teal-blue">
    <div class="swatch__name">Teal Blue</div>
    `#088199`  
    `rgb(8,129,153)`
  </li>
</ul>

### Contrast & Accessibility

[WCAG 2.0 guideline 1.4.3](https://www.w3.org/TR/WCAG20/#visual-audio-contrast) requires
a contrast ratio of at least **4.5:1** for text, with a few important exceptions:

**Large text**, defined as being at least 18pt (24px) or at least 14pt (18.667px) and
bold, has a contrast requirement of only **3:1**.

There is **no** contrast requirement for **incidental text**, defined as “Text or images
of text that are part of an inactive user interface component, that are pure decoration,
that are not visible to anyone, or that are part of a picture that contains significant
other visual content.”

#### Passing Text Color Combinations

<ul class="text-color-combinations">
  <li class="swatch swatch--navy-blue">
    <div class="swatch__name">Navy Blue +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-white">Navy White (12:1)</li>
      <li class="swatch__option swatch__option--gray">Gray (7.5:1)</li>
      <li class="swatch__option swatch__option--yellow">Yellow (6:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--navy-white">
    <div class="swatch__name">Navy White +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-black">Navy Black (16:1)</li>
      <li class="swatch__option swatch__option--navy-blue">Navy Blue (12:1)</li>
      <li class="swatch__option swatch__option--teal-blue">Teal Blue (4.5:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--navy-black">
    <div class="swatch__name">Navy Black +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-white">Navy White (16:1)</li>
      <li class="swatch__option swatch__option--gray">Gray (10:1)</li>
      <li class="swatch__option swatch__option--yellow">Yellow (8:1)</li>
      <li class="swatch__option swatch__option--teal-blue swatch__option--large">Teal Blue - Large (3.5:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--yellow">
    <div class="swatch__name">Yellow +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-black">Navy Black (8:1)</li>
      <li class="swatch__option swatch__option--navy-blue">Navy Blue (6:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--gray">
    <div class="swatch__name">Gray +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-black">Navy Black (10:1)</li>
      <li class="swatch__option swatch__option--navy-blue">Navy Blue (7.5:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--teal-blue">
    <div class="swatch__name">Teal Blue +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-white">Navy White (4.5:1)</li>
      <li class="swatch__option swatch__option--navy-black swatch__option--large">Navy Black - Large (3.5:1)</li>
    </ul>
  </li>
</ul>
