# Caret

*Caret* is a small jQuery plugin that gets and sets the caret position for an HTML element, in characters.  
For an `(x, y)` position, see [jquery-caret-position-getter](https://github.com/beviz/jquery-caret-position-getter).

*Caret* may be used as follows:

``` javascript
// get the caret position
var caretPosition = $("textarea").caret();

// set the caret position
$("textarea").caret(newPosition);
```

*Caret* follows the jQuery convention of returning the `this` object for the setter so calls can be chained:

``` javascript
// move the caret and set the color to blue
$("textarea").caret(newPosition).css("color: blue;");
``` 

*Caret* has been tested in Chrome, Firefox, Safari and Internet Explorer 8 and 9.
