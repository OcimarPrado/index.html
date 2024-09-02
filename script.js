// Seleciona o formulário e o parágrafo de mensagem do DOM
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário (para evitar recarregamento da página)
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples para garantir que os campos não estejam vazios
    if (nome === '' || email === '' || mensagem === '') {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.style.color = 'red';
    } else {
        // Exibe mensagem de sucesso
        formMessage.textContent = 'Mensagem enviada com sucesso!';
        formMessage.style.color = 'green';

        // Limpa os campos do formulário após o envio
        form.reset();
    }
});
