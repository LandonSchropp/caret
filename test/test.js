$(document).ready(function() {

  $(document).keydown(function(event) {

    // do nothing if the textarea is not already focused
    if(!$("textarea").is(":focus")) {
      // allow the default behavior
      return true;
    }

    // move the caret left if the left key was pressed
    if (event.which == 37) {
      $("textarea").caret($("textarea").caret() - 1);
    }
    // move the caret right if the right key was pressed
    else if (event.which == 39) {
      $("textarea").caret($("textarea").caret() + 1);
    }
    // move the caret left 10 if the up key was pressed
    else if (event.which == 38) {
      $("textarea").caret($("textarea").caret() - 10);
    }
    // move the caret right 10 if the down key was pressed
    else if (event.which == 40) {
      $("textarea").caret($("textarea").caret() + 10);
    }
    // allow the default behavior
    else {
      return true;
    }

    // prevent the default behavior
    event.preventDefault();
    return false;
  });

  updateCaretPosition = function() {

    // set the caret position label
    var caretPosition = $("textarea").caret();

    if (caretPosition === null)
      $(".position").html("N/A");
    else
      $(".position").html(caretPosition);
  };

  $("textarea").bind("click focus blur keydown keyup", updateCaretPosition);

  // focus the textarea on load
  $("textarea").focus();

  /*
  Update the caret position on load to prevent the bug where the focus event doesn't set the caret 
  until after the callback is called.
  */
  updateCaretPosition();
});