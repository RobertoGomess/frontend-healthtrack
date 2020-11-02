$( document ).ready(function() {

    var inputs = $(".btn-more").parent().parent().find("input");

    inputs.keypress(function(event){
        return event.charCode >= 48 && event.charCode <= 57;
    });

    inputs.blur(function(event){
        var input = $(event.currentTarget);
        var value = parseInt(input.val());
        if(isNaN(value) || value < 0){
            input.val(0);
        }
    });

    $(".btn-more").click(function(e){
        var input = $(e.currentTarget).parent().parent().find("input");
        input.val(parseInt(input[0].value) + 1);
    });

    $(".btn-less").click(function(e){
        var input = $(e.currentTarget).parent().parent().find("input");
        if(input[0].value > 0){
            input.val(parseInt(input[0].value) - 1);
        }
    });
    
});

