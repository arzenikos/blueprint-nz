// Ensure chat overlay is visible on all pages
document.addEventListener('DOMContentLoaded', () => {
  console.log('Chat overlay script loaded');
  
  // Create chat overlay if it doesn't exist
  if (!document.getElementById('chat-overlay')) {
    console.log('Creating chat overlay dynamically');
    
    // Create overlay container
    const chatOverlay = document.createElement('div');
    chatOverlay.id = 'chat-overlay';
    chatOverlay.className = 'fixed bottom-6 right-6 z-[9999]';
    
    // Create button
    const chatOverlayButton = document.createElement('button');
    chatOverlayButton.id = 'chat-overlay-button';
    chatOverlayButton.className = 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-full p-4 shadow-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110';
    chatOverlayButton.setAttribute('aria-label', 'Chat Support');
    
    // Create icon
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('class', 'h-6 w-6');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('d', 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z');
    
    // Assemble elements
    svg.appendChild(path);
    chatOverlayButton.appendChild(svg);
    chatOverlay.appendChild(chatOverlayButton);
    document.body.appendChild(chatOverlay);
    
    // Add event listener
    chatOverlayButton.addEventListener('click', handleChatOverlayClick);
    
    // Add animation after a delay
    setTimeout(() => {
      chatOverlayButton.classList.add('animate-pulse-strong');
    }, 2000);
  } else {
    // If overlay exists, ensure it has event listener
    const chatOverlayButton = document.getElementById('chat-overlay-button');
    if (chatOverlayButton) {
      chatOverlayButton.addEventListener('click', handleChatOverlayClick);
      
      // Add animation after a delay
      setTimeout(() => {
        chatOverlayButton.classList.add('animate-pulse-strong');
      }, 2000);
    }
  }
  
  // Handle chat overlay button click
  function handleChatOverlayClick() {
    console.log('Overlay button clicked');
    
    // Try to find the chat box and toggle button
    const chatBox = document.getElementById('chat-box');
    const chatToggle = document.getElementById('chat-toggle');
    
    // If the main chat toggle exists, click it
    if (chatToggle) {
      chatToggle.click();
    } 
    // Otherwise toggle the chat box directly
    else if (chatBox) {
      chatBox.classList.toggle('hidden');
    }
    // If neither exists, create a simple chat interface
    else {
      createSimpleChatInterface();
    }
    
    // Remove animation once clicked
    this.classList.remove('animate-pulse-strong');
  }
  
  // Create a simple chat interface if the main one doesn't exist
  function createSimpleChatInterface() {
    console.log('Creating simple chat interface');
    
    // Remove existing simple chat if it exists
    const existingChat = document.getElementById('simple-chat');
    if (existingChat) {
      document.body.removeChild(existingChat);
      return;
    }
    
    // Create simple chat container
    const simpleChat = document.createElement('div');
    simpleChat.id = 'simple-chat';
    simpleChat.className = 'fixed bottom-20 right-6 z-[9999] bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 md:w-96 overflow-hidden';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'bg-blue-600 dark:bg-blue-700 text-white p-3 flex justify-between items-center';
    
    const title = document.createElement('h3');
    title.className = 'font-medium';
    title.textContent = 'Chat Support';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'text-white hover:text-gray-200';
    closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(simpleChat);
    });
    
    header.appendChild(title);
    header.appendChild(closeButton);
    
    // Create content
    const content = document.createElement('div');
    content.className = 'p-4';
    content.innerHTML = `
      <p class="mb-4">Thanks for reaching out! How can we help you today?</p>
      <form id="simple-chat-form" class="flex flex-col">
        <textarea class="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-2 mb-2" rows="3" placeholder="Type your message here..."></textarea>
        <button type="submit" class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white py-2 px-4 rounded-lg">Send</button>
      </form>
    `;
    
    // Assemble elements
    simpleChat.appendChild(header);
    simpleChat.appendChild(content);
    document.body.appendChild(simpleChat);
    
    // Add form handler
    const form = document.getElementById('simple-chat-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const textarea = form.querySelector('textarea');
      if (textarea.value.trim()) {
        content.innerHTML = `
          <p class="mb-4">Thanks for your message! Our team will get back to you soon.</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">You wrote: "${textarea.value.trim()}"</p>
        `;
      }
    });
  }
});
