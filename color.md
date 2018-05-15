---
layout: default
---
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

## Color

### Color Palette

<ul class="palette">
  <li class="swatch swatch--navy-black">
    <div class="swatch__name">Navy Black</div>
    <img src="/img/Navy Black - PLAIN.jpg" alt="Navy Black" class="swatch-box"><br>
    HEX:#08262C  <br>
    CMYK: 89, 66, 60, 67  <br>
    RGB:  8, 38, 44  <br>
  </li><li class="swatch swatch--navy-blue">
    <div class="swatch__name">Navy Blue</div>
    <img src="/img/Navy Blue - PLAIN.jpg" alt="Navy Blue" class="swatch-box"><br>
    HEX:#003B4F  <br>
    CMYK: 98, 69, 48, 40  <br>
    RGB: 0,59,79  <br>
  </li><li class="swatch swatch--teal-blue">
    <div class="swatch__name">Teal Blue</div>
    <img src="/img/Teal Blue - PLAIN.jpg" alt="Teal Blue" class="swatch-box"><br>
    HEX:#088199  <br>
    CMYK: 85, 36, 32, 3  <br>
    RGB: 8, 129, 153  <br>
  </li><li class="swatch swatch--gray">
    <div class="swatch__name">Gray</div>
    <img src="/img/Gray - PLAIN.jpg" alt="Gray" class="swatch-box"><br>
    HEX:#C6CCD0  <br>
    CMYK: 22, 14, 13, 0  <br>
    RGB: 198, 204, 208  <br>
  </li><li class="swatch swatch--yellow">
    <div class="swatch__name">Yellow</div>
    <img src="/img/Yellow - PLAIN.jpg" alt="Yellow" class="swatch-box"><br>
    HEX:#E8B00F  <br>
    CMYK: 10, 31, 100, 0  <br>
    RGB: 232, 176, 15  <br>
  </li><li class="swatch swatch--navy-white">
    <div class="swatch__name">White</div>
    <img src="/img/Navy White - PLAIN.jpg" alt="White" class="swatch-box"><br>
    HEX:#FFFFFF  <br>
    CMYK: 0, 0, 0, 0  <br>
    RGB: 255, 255, 255  <br>
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
 <li class="swatch swatch--navy-black">
    <div class="swatch__name">Navy Black +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-white">White (16:1)</li>
      <li class="swatch__option swatch__option--gray">Gray (10:1)</li>
      <li class="swatch__option swatch__option--yellow">Yellow (8:1)</li>
      <li class="swatch__option swatch__option--teal-blue swatch__option--large">Teal Blue - Large (3.5:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--navy-blue">
    <div class="swatch__name">Navy Blue +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-white">White (12:1)</li>
      <li class="swatch__option swatch__option--gray">Gray (7.5:1)</li>
      <li class="swatch__option swatch__option--yellow">Yellow (6:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--teal-blue">
    <div class="swatch__name">Teal Blue +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-white">White (4.5:1)</li>
      <li class="swatch__option swatch__option--navy-black swatch__option--large">Navy Black - Large (3.5:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--gray">
    <div class="swatch__name">Gray +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-black">Navy Black (10:1)</li>
      <li class="swatch__option swatch__option--navy-blue">Navy Blue (7.5:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--yellow">
    <div class="swatch__name">Yellow +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-black">Navy Black (8:1)</li>
      <li class="swatch__option swatch__option--navy-blue">Navy Blue (6:1)</li>
    </ul>
  </li>
  <li class="swatch swatch--navy-white">
    <div class="swatch__name">White +</div>
    <ul class="swatch__options">
      <li class="swatch__option swatch__option--navy-black">Navy Black (16:1)</li>
      <li class="swatch__option swatch__option--navy-blue">Navy Blue (12:1)</li>
      <li class="swatch__option swatch__option--teal-blue">Teal Blue (4.5:1)</li>
    </ul>
  </li>
</ul>
