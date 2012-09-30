# Caret

*Caret* is a small jQuery plugin that gets and sets the caret position for an HTML element.

*Caret* may be used as follows:

``` javascript
// get the caret position
caretPosition = $("textarea").caret();

// set the caret position
caretPosition = $("textarea").caret(newPosition);
```

*Caret* also follows the jQuery convention of returning the `this` object so calls may be chained:

``` javascript
// move the caret and set the color to blue
$("textarea").caret(newPosition).css("color: blue;");
``` 