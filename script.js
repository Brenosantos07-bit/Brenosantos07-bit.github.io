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





// =============================================
// ===== LÓGICA DO FORMULÁRIO DE CONTATO =====
// =============================================

// Verifica se o formulário de contato existe na página atual
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    // 1. Selecionar os elementos do formulário
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const messageContainer = document.getElementById('form-message');

    // 2. Adicionar o evento de 'submit' ao formulário
    contactForm.addEventListener('submit', function(event) {
        // Prevenir o comportamento padrão de recarregar a página
        event.preventDefault();

        // 3. Pegar os valores dos campos e remover espaços em branco
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        // 4. Validar os campos
        if (emailValue === '' || messageValue === '') {
            // Se algum campo obrigatório estiver vazio, mostra erro
            showMessage('Por favor, preencha os campos de Email e Mensagem.', 'error');
        } else {
            // Se tudo estiver correto, mostra sucesso
            showMessage('Comentário enviado com sucesso!', 'success');
            
            // Limpa o formulário após o envio
            contactForm.reset();
        }
    });

    // 5. Função para exibir as mensagens na tela
    function showMessage(message, type) {
        messageContainer.innerHTML = message;
        messageContainer.className = 'form-message'; // Reseta as classes
        messageContainer.classList.add(type); // Adiciona 'success' ou 'error'

        // Opcional: faz a mensagem de sucesso desaparecer após 5 segundos
        if (type === 'success') {
            setTimeout(() => {
                messageContainer.innerHTML = '';
                messageContainer.className = 'form-message';
            }, 5000); // 5000 milissegundos = 5 segundos
        }
    }
}



