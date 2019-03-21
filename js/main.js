$(function(){
    $('#rajcata p').hide();
    $('#rajcata h3').on('click', function(){
        $('#rajcata p').toggle(1000);
        $('#rajcata img').toggle(1000);
    });
    $('#rajcata img').hide();
    $('#ovoce p').hide();
    $('#ovoce h3').on('click', function(){
        $('#ovoce p').toggle(500);
    });
    $('#ker p').hide();
    $('#tyc p').hide();
    $('#ker img').hide();
    $('#tyc img').hide();
    $('#odrudy h4').hide();
    $('#odrudy h3').on('click', function(){
        $('#odrudy h4').toggle(500);
        $('#ker p').fadeOut(1000);
        $('#tyc p').fadeOut(1000);
        $('#ker img').fadeOut(1000); 
        $('#tyc img').fadeOut(1000);  
    });
    $('#ker h4').on('click', function(){
        $('#ker p').toggle(500);
        $('#ker img').toggle(500);
        $('#ker h4').css({'background-color':'green'});
    });
    $('#tyc h4').on('click', function(){
        $('#tyc p').toggle(500);
        $('#tyc img').toggle(500);  
        $('#tyc h4').css({'background-color':'green'});
    });
    $('#pestovani p').hide();
    $('#pestovani img').hide();
    $('#pestovani h5').hide();
    $('#pestovani h4').hide();
    $('#j h3').on('click', function(){
        $('#pestovani h4').toggle(1000);
        $('#vysev h5').fadeOut(1000);
        $('#vysadba h5').fadeOut(1000);
        $('#vysev p').fadeOut(1000);
        $('#vysev img').fadeOut(1000);
        $('#vysadba p').fadeOut(1000);
        $('#vysadba img').fadeOut(1000);
        $('#skudci p').fadeOut(1000);
        $('#sklizen p').fadeOut(1000);
        $('#sklizen img').fadeOut(1000);
        $('#o p').fadeOut(1000);
        $('#skudci img').fadeOut(1000);
        $('#pest p').fadeOut(1000);
    });
    $('#vysev h4').on('click', function(){
        $('#vysev h5').toggle(500);
        $('#vysadba h5').toggle(500);
        $('#vysev p').fadeOut(1000);
        $('#vysev img').fadeOut(1000);
        $('#vysadba p').fadeOut(1000);
        $('#vysadba img').fadeOut(1000);
        $('#vysev h4').css({'background-color':'green'});

     });
     $('#vysev h5').on('click', function(){
        $('#vysev p').toggle(500);
        $('#vysev img').toggle(500);
        $('#vysev h5').css({'background-color':'brown'});
     });
     $('#vysadba h5').on('click', function(){
        $('#vysadba p').toggle(500);
        $('#vysadba img').toggle(500);
        $('#vysadba h5').css({'background-color':'brown'});
     });
     $('#skudci h4').on('click', function(){
        $('#skudci p').toggle(500);
        $('#skudci img').toggle(500);
        $('#skudci h4').css({'background-color':'green'});
     });

     $('#sklizen h4').on('click', function(){
        $('#sklizen p').toggle(500);
        $('#sklizen img').toggle(500);
        $('#sklizen h4').css({'background-color':'green'});
     });
     $('#pest h4').on('click', function(){
        $('#pest p').toggle(500);
        $('#pest h4').css({'background-color':'green'});
     });
})