document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailIcon = document.querySelector('.input-group-prepend .bi-envelope');
    const senhaIcon = document.querySelector('.input-group-prepend .bi-lock');

    // Adiciona evento de input para os campos
    emailInput.addEventListener('input', toggleIconVisibility);
    emailInput.addEventListener('focus', showIconOnFocus);

    senhaInput.addEventListener('input', toggleIconVisibility);
    senhaInput.addEventListener('focus', showIconOnFocus);

    // Função para alternar a visibilidade dos ícones
    function toggleIconVisibility() {
        // Verifica se o texto no input é diferente de 0
        emailIcon.style.display = emailInput.value.trim() !== '' ? 'none' : 'block';
        senhaIcon.style.display = senhaInput.value.trim() !== '' ? 'none' : 'block';
    }

    // Função para ocultar o ícone quando o campo está focado
    function showIconOnFocus() {
        if (this.value.trim() === '') {
            emailIcon.style.display = 'block';
            senhaIcon.style.display = 'block';
        }
    }
    // Chama a função inicialmente para lidar com o conteúdo já presente nos campos
    toggleIconVisibility();
});