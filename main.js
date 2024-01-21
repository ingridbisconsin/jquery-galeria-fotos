$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-img-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).apendTo(novoItem)
        $(`
        <div class="overlay-img-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>
        </div>
        `).apendTo(novoItem)
        $(novoItem).apendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-img-nova').val('')
    })
})
