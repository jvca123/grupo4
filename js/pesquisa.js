document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('.barra_de_pesquisa');

    if (input) {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const valor = input.value.trim().toLowerCase().split(' ').join('');

                if (valor === 'pastel') {
                    window.location.href = 'pastel.html';
                } else if (valor === 'abacaxi') {
                    window.location.href = 'mariafrutas.html';
                } else if (valor === 'brunofrutas') {
                    window.location.href = 'tela_bruno_frutas.html';
                } else {
                    window.location.href = '404.html';
                }
            }
        });
    }
});