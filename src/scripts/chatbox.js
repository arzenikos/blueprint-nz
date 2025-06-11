// ChatBox functionality script

document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const chatToggle = document.getElementById('chat-toggle');
  const closeChat = document.getElementById('close-chat');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  
  // Get responses from the content
  const responses = window.chatboxContent?.responses || {
    default: "Thank you for your message. Our team will get back to you soon."
  };
  
  // Toggle chat box visibility
  chatToggle?.addEventListener('click', () => {
    chatBox?.classList.toggle('hidden');
    chatToggle.classList.toggle('translate-y-16');
    
    if (!chatBox?.classList.contains('hidden')) {
      chatInput?.focus();
    }
  });
  
  // Close chat box
  closeChat?.addEventListener('click', () => {
    chatBox?.classList.add('hidden');
    chatToggle?.classList.remove('translate-y-16');
  });
  
  // Handle chat form submission
  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = chatInput?.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate response (replace with actual API call)
    setTimeout(() => {
      // Get a contextual response based on the message content
      const response = getContextualResponse(message);
      addMessage(response, 'bot');
    }, 1000);
  });
  
  // Function to add a message to the chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'mb-3';
    
    const bubble = document.createElement('div');
    bubble.className = sender === 'user' 
      ? 'bg-blue-100 dark:bg-blue-900 rounded-lg p-2 max-w-[80%] ml-auto theme-transition'
      : 'bg-gray-100 dark:bg-gray-700 rounded-lg p-2 max-w-[80%] theme-transition';
    
    const paragraph = document.createElement('p');
    paragraph.className = 'text-sm dark:text-gray-200';
    paragraph.textContent = text;
    
    bubble.appendChild(paragraph);
    messageDiv.appendChild(bubble);
    chatMessages?.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Function to get contextual responses based on message content
  function getContextualResponse(message) {
    message = message.toLowerCase();
    
    // Check for common questions or keywords
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return responses.greeting;
    }
    else if (message.includes('help')) {
      return responses.help;
    }
    else if (message.includes('service')) {
      return responses.services;
    }
    else if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
      return responses.contact;
    }
    else if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return responses.pricing;
    }
    else if (message.includes('thank')) {
      return responses.thanks;
    }
    else if (message.includes('bye') || message.includes('goodbye')) {
      return responses.goodbye;
    }
    else {
      return responses.default;
    }
  }
});
