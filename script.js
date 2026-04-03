function toggleChat() {
    const chat = document.getElementById('chatWindow');
    chat.style.display = (chat.style.display === 'none' || chat.style.display === '') ? 'flex' : 'none';
}

function handleSelect(question, answer) {
    const messagesContainer = document.getElementById('chatMessages');
    const optionsContainer = document.getElementById('chatOptions');

    // Блокируем кнопки на время "ответа" бота, чтобы не спамили
    optionsContainer.style.pointerEvents = 'none';
    optionsContainer.style.opacity = '0.5';

    // 1. Сообщение пользователя
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = question;
    messagesContainer.appendChild(userDiv);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 2. Ответ бота через задержку
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot';
        botDiv.textContent = answer;
        messagesContainer.appendChild(botDiv);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Разблокируем кнопки
        optionsContainer.style.pointerEvents = 'all';
        optionsContainer.style.opacity = '1';
    }, 800);
}