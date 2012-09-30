(function($){

  /*
  If the position parameter is not provided, this method returns the position of the caret for the 
  jQuery object on which this method is invoked. If a position is provided, this method sets the
  position for the object.
  position - The new position of the caret. If this value is less than 0 or greater than the length
  of the content of this HTML element, it will be clamped.
  */
  $.fn.caret = function(position) {
  
    

    // return this so the calls may be chained
    return this;
  };
})(jQuery);