enquire.register("screen and (max-width:850px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
        var _elements = document.getElementsByClassName("col-md-3");
        while (_elements.length) {
          _elements[0].className ='col-md-6';
        }
    },      

    unmatch : function() {},    
    
    setup : function() {},    
                                
    deferSetup : true,

    destroy : function() {}
      
})

.register("screen and (min-width:1200px)", {

    match : function() {
        var _elements = document.getElementsByClassName("col-md-6");
          while (_elements.length) {
            _elements[0].className ='col-md-3';
        }
    },      
                                
    unmatch : function() {},    
    
    setup : function() {},    
                                
    deferSetup : true,
                                
    destroy : function() {}
});

