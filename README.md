# lazyButtonFix
Fix for buttons which doesn't work in Firefox or IE (&lt;a> tag inside &lt;button> tag)

I recently acquired a web page and I saw that the links are nested inside buttons, which is not allowed in HTML5 and buttons won't work in Firefox or IE. 

So instead of changing n-buttons I wrote this quick fix which basically transforms button to a link.

## Science behind it:
```html
So this code

<button class="btn btn-primary">
  <a href="http://github.com">
    Click me!
  </a>
</button>
```
on click works just like:

```html
<button class="btn btn-primary" onclick="location.href='http://github.com'">
  <a href="http://github.com">
    Click me!
  </a>
</button>
```
and works totally fine in Firefox and IE.


## Usage:
Include JS file
```html
<script src="path/to/lazyButtonFix/lazyButtonFix.js"> 
```
or minified vesion
```html
<script src="path/to/lazyButtonFix/lazyButtonFix.js"> 
```
or just add source directly to your file
```html
<script>
$(function(){$("button").on("click",function(){var a=$(this).find("a").attr("href");void 0!==a&&(location.href=a)})});
</script>
```

## Note:
I don't want to encourage people to write ugly and unvalidated HTML code. This is just a fix for occasions, when you take over a project and see that there are way too many buttons to change :)



