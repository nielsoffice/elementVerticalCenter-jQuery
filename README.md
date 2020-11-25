# elementVerticalCenter-jQuery
 
 - jQuery version support : v1.12.4
 - Make Element automatic Center base on Windows Height or Element Height

```JAVASCRIPT
 
 USAGE: 
  
 // Defined Function Set Elements  
 elementVerticalCenter()

 // Implementation
  $(window).on('load', function () {
    
    // Select Element wants to be center ?
    // add jQuery function CSS() 
   $('#ElementNameChild').css({
     
    // set the value ofpadding into function          
    'padding-top'   : elementVerticalCenter(),
    'padding-bottom': elementVerticalCenter()
   
   }); // End of jQuery CSS({})

  }); // End of Windows Load 


```