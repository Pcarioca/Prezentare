$('#scroll').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 50);
//                                       |    |
//                                       |    --- duration (milliseconds) 
//                                       ---- distance from the top
});

$('#lat').mouseenter( funtion(){
    $(this).trigger("hover");
} );