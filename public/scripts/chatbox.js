// ChatBox functionality script

document.addEventListener('DOMContentLoaded', () => {
  console.log('ChatBox script loaded');
  
  const chatBox = document.getElementById('chat-box');
  const chatToggle = document.getElementById('chat-toggle');
  const closeChat = document.getElementById('close-chat');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  
  console.log('Chat toggle button:', chatToggle);
  console.log('Chat box:', chatBox);
  
  // Clear any previous chat state to ensure button visibility
  localStorage.removeItem('chatOpen');
  
  // Get responses from the content
  const responses = window.chatboxContent?.responses || {
    default: "Thank you for your message. Our team will get back to you soon."
  };
  
  // Toggle chat box visibility
  chatToggle?.addEventListener('click', () => {
    console.log('Chat toggle clicked');
    chatBox?.classList.toggle('hidden');
    
    // Store chat state
    const isOpen = !chatBox?.classList.contains('hidden');
    localStorage.setItem('chatOpen', isOpen);
    
    if (isOpen) {
      chatInput?.focus();
    }
  });
  
  // Close chat box
  closeChat?.addEventListener('click', () => {
    console.log('Close chat clicked');
    chatBox?.classList.add('hidden');
    localStorage.setItem('chatOpen', 'false');
  });
  
  // Handle chat form submission
  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = chatInput?.value.trim();
    if (!message) return;
    
    console.log('Message submitted:', message);
    
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
    
    // Store chat history
    storeChatHistory();
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
  
  // Store chat history in localStorage
  function storeChatHistory() {
    const chatHistory = chatMessages?.innerHTML || '';
    localStorage.setItem('chatHistory', chatHistory);
  }
  
  // Load chat history from localStorage
  function loadChatHistory() {
    const chatHistory = localStorage.getItem('chatHistory');
    if (chatHistory && chatMessages) {
      chatMessages.innerHTML = chatHistory;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  
  // Load chat history on page load
  loadChatHistory();
  
  // Add pulse animation to chat toggle button after a delay
  setTimeout(() => {
    if (chatBox?.classList.contains('hidden') && chatToggle) {
      console.log('Adding pulse animation to chat button');
      chatToggle.classList.add('animate-pulse');
      
      // Remove pulse after user interacts with it
      chatToggle?.addEventListener('click', () => {
        chatToggle.classList.remove('animate-pulse');
      }, { once: true });
    }
  }, 5000);
});
