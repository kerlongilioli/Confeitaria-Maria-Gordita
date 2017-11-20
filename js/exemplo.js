function publicar() {
    $('.link').addClass('azul');
    $('#conteudo').css('padding', '20px');
    $('#conteudo').css('font-family', 'calibri');
    $('#conteudo').css('color', 'green');
}
function expandir(gatilho) {
    console.log(gatilho);
    $(gatilho);

    if ($('.expancao').hasClass('visivel')) {
        $(gatilho).html('Expandir');
        $('.expancao').removeClass('visivel');
    } else {

        $(gatilho).html('ocultar');
        $('.expancao').addClass('visivel');
    }
}
function auto_destruir(){
    while(true){
        $('body').css('background-color', 'red');
        $('body').css('background-color', 'blue');
        $('body').css('background-color', 'yellow');
        $('body').css('background-color', 'orange');
        $('body').css('background-color', 'white');
    }
}
