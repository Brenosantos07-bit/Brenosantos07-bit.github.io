// Verifica se estamos na página de projetos antes de executar o código do slider
if (document.querySelector('.slider-container')) {

    const wrapper = document.querySelector('.projects-wrapper');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const cards = document.querySelectorAll('.project-card-link'); // Selecionamos o link agora

    let currentIndex = 0; // Este será o índice do primeiro card visível
    const cardsPerPage = 3; // Definimos que queremos mostrar 3 cards por vez

    // Função para atualizar a posição do slider
    function updateSlider() {
        // Calcula o quanto mover baseado no índice e na largura do card + gap
        const cardWidth = cards[0].offsetWidth;
        const gap = 32; // Nosso gap de 2rem = 32px
        const moveDistance = (cardWidth + gap) * currentIndex;

        wrapper.style.transform = `translateX(-${moveDistance}px)`;
        updateButtonStates();
    }

    // Função para habilitar/desabilitar os botões
    function updateButtonStates() {
        // Desabilita o botão "anterior" se estivermos no início
        prevButton.disabled = currentIndex === 0;

        // Desabilita o botão "próximo" se não houver mais cards para mostrar
        // A lógica é: o índice atual + o número de cards por página é maior ou igual ao total de cards?
        nextButton.disabled = currentIndex + cardsPerPage >= cards.length;
    }

    // Event listener para o botão "Próximo"
    nextButton.addEventListener('click', () => {
        // Verifica se pode avançar
        if (currentIndex + cardsPerPage < cards.length) {
            currentIndex++;
            updateSlider();
        }
    });

    // Event listener para o botão "Anterior"
    prevButton.addEventListener('click', () => {
        // Verifica se pode voltar
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    // Opcional: Garante que o slider se ajuste se a janela for redimensionada
    window.addEventListener('resize', updateSlider);

    // Garante que o estado inicial dos botões esteja correto ao carregar a página
    updateButtonStates();
}




