$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#form').submit(function(e) {
        e.preventDefault(); 

        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '#', 
            data: formData,
            success: function(response) {
                $('#mensagem').html('Mensagem enviada com sucesso!').css('color', 'green').fadeIn();
                $('#form')[0].reset();
                setTimeout(function(){
                    $('#mensagem').fadeOut();
                }, 5000);
            },
            error: function() {
               
                $('#mensagem').html('Ocorreu um erro. Tente novamente.').css('color', 'red').fadeIn();
                setTimeout(function(){
                    $('#mensagem').fadeOut();
                }, 5000);
            }
        });
    });
});