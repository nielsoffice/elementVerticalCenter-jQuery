  /**
   * @jQuery Make ELement Center Base on windows height Vertical 
   * @jQuery Make ELement Center Base on windows height Horizontal
   *
   *  cooked by nielsoffice
   *  Defined: default: H version: CSS({'magin','0 auto'});  
  **/
  $(document).ready( function() {
   
   // On Documments Load getCurrent Windows Height 
   var winHeigh  = $(window).height();

   // On Documments Load getCurrent Element Height 
   var ElemHeigh = $('#ElementName').height();  
   
   // Create a function subsctract the Win height - ELem Height
   function elementVerticalCenter() {
    
    // Return to variable  getElemWinHeight
    var  getElemWinHeight = winHeigh - ElemHeigh;
     
     // return The result
   	 return getInTwo = getElemWinHeight / 2;

   }
  
  // On Windows load
  $(window).on('load', function () {
    
    // Select Element wants to be center ?
    // add jQuery function CSS() 
   $('#ElementName').css({
     
    // set the value ofpadding into function          
   	'padding-top' 	: elementVerticalCenter(),
   	'padding-bottom': elementVerticalCenter()
   
   }); // End of Windows Load

  }); // End of Function 

}); // End of document ready


 /**  Header script goes here.. **/

  /**
   * Version: Center Base on Element
   * @jQuery Make ELement Center Base on Element height Vertical 
   * @jQuery Make ELement Center Base on Element height Horizontal
   *
   *  Defined: default: H version: CSS({'magin','0 auto'});  
  **/
  $(document).ready( function() {
   
   // On Documments Load getCurrent Windows Height 
   var ParentElemHeigh = $('#ElementNameParent').height();

   // On Documments Load getCurrent Element Height 
   var ChildElemHeigh = $('#ElementNameChild').height();  
   
   // Create a function subsctract the Win height - ELem Height
   function elementVerticalCenter() {
    
    // Return to variable  getElemWinHeight
    var  getElemWinHeight = ParentElemHeigh - ChildElemHeigh;
     
     // return The result
     return getInTwo = getElemWinHeight / 2;

   }
  
  // On Windows load
  $(window).on('load', function () {
    
    // Select Element wants to be center ?
    // add jQuery function CSS() 
   $('#ElementNameChild').css({
     
    // set the value ofpadding into function          
    'padding-top'   : elementVerticalCenter(),
    'padding-bottom': elementVerticalCenter()
   
   }); // End of Windows Load

  }); // End of Function 

}); // End of document ready

  