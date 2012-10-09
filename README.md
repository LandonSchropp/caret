# Caret

*Caret* is a small jQuery plugin that gets and sets the caret position for an HTML element. It uses the same caret position regarless of platform or browser.

*Caret* may be used as follows:

``` javascript
// get the caret position
var caretPosition = $("textarea").caret();

// set the caret position
$("textarea").caret(newPosition);
```

*Caret* also follows the jQuery convention of returning the `this` object for the setter so calls can be chained:

``` javascript
// move the caret and set the color to blue
$("textarea").caret(newPosition).css("color: blue;");
``` 

*Caret* has been tested in Chrome, Firefox, Safari and Internet Explorer 8 and 9. Testing and bugfixes are welcome.