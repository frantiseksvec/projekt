$(function(){
    $('#rajcata p').hide();
    $('#rajcata h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'green'});
        } else {
            $(this).css({'background-color':'red'});
        }
        $(this).nextUntil('h4').toggle(500);
    });
    $('#rajcata h4').hide();
    $('#rajcata h3').on('click', function(){
        $('#rajcata h4').toggle(500);
        $('#rajcata p').hide(500);
        $('#rajcata img').hide();
    });
    $('#rajcata img').hide();
    $('#ovoce p').hide();
    $('#ovoce h3').on('click', function(){
        $('#ovoce p').toggle(500);
    });

})