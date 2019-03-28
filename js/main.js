$(function(){
    $('#rajcata p').hide();
    $('#rajcata h3').on('click', function(){
        $('#rajcata p').toggle(1000);
        $('#rajcata img').toggle(1000);
    });
    $('#rajcata img').hide();
    var u = 2;
    window.setInterval(function(){
        if(u % 2 == 0){
        $('#rajcata p').text(text.text1);
        }
        else{
            $('#rajcata p').text(text.text2);   
        }
        u++;
    },12000);
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
    window.setInterval(function(){
       if(c % 2==0){
       $('#ker img').attr('src','img/'+'ker2.jpg');
       }
       else{
       $('#ker img').attr('src','img/'+'ker.jpg');    
       }
   }, 6000);
    $('#tyc h4').on('click', function(){
        $('#tyc p').toggle(500);
        $('#tyc img').toggle(500);  
        $('#tyc h4').css({'background-color':'green'});
    });
    var c = 0;
    window.setInterval(function(){
       if(c % 2==0){
       $('#tyc img').attr('src','img/'+'tyč2.jpg');
       }
       else{
       $('#tyc img').attr('src','img/'+'tyč.jpg');    
       }
       c++;
   }, 5000);
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
     var a = 0;
     window.setInterval(function(){
        if(a % 2==0){
        $('#skudci img').attr('src','img/'+'plisen.jpg');
        }
        else{
        $('#skudci img').attr('src','img/'+'plisen2.jpg');    
        }
        a++;
    }, 3500);


   

    $('#zajimavosti p').hide();
    $('#zajimavosti img').hide();
    $('#zajimavosti button').hide();
    $('#zajimavosti h5').hide();
    $('#zajimavosti h3').on('click', function(){
        $('#zajimavosti p').toggle(1000);
        $('#zajimavosti img').toggle(1000);
        $('#zajimavosti button').toggle(1000);
        $('#zajimavosti h5').toggle(1000);
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
     var z = 2;
     $('#zajimavosti button').on('click', function(){
    if(z % 2 == 0){
        $('#zajimavosti p').text(text.text3);
        $('#zajimavosti h5').text(text.text5);
        $('#zajimavosti img').attr('src','img/'+'fialova.jpg');
        }
        else{
        $('#zajimavosti p').text(text.text4);
        $('#zajimavosti h5').text(text.text6);
        $('#zajimavosti img').attr('src','img/'+'kombajn.jpg');    
        }
        z++;
     });
})