
        // Simple functionality
        let chatBox = document.getElementById('chatbox');
        let userInput = document.getElementById('userinput');
        let sendBtn = document.getElementById('sendbtn');
        let clearBtn = document.getElementById('clearbtn');
        
        // Add message
        function addMessage(text, isUser) {
            let msg = document.createElement('div');
            msg.className = isUser ? 'usermsg' : 'botmsg';
            msg.textContent = text;
            chatBox.appendChild(msg);
            chatBox.scrollTop = chatBox.scrollHeight;
        }
        
        //  reply
        function getReply(userText) {
            userText = userText.toLowerCase();
            
            if (userText.includes('hi') || userText.includes('hello')) {
                return "Hello there! How can I help you?";
            } else if (userText.includes('how are you')) {
                return "I'm just a bot, but I'm doing great!";
            } else if (userText.includes('thank')) {
                return "You're welcome!";
            } else if (userText.includes('bye')) {
                return "Goodbye! Have a nice day!";
            } else {
                let replies = [
                    "I understand what you're saying",
                    "That's interesting!",
                    "Tell me more about that",
                    "I'm listening",
                    "What else would you like to talk about?"
                ];
                return replies[Math.floor(Math.random() * replies.length)];
            }
        }
        
        // Handle  message
        function sendMessage() {
            let message = userInput.value.trim();
            if (message === '') return;
            
            addMessage(message, true);
            userInput.value = '';
            
            setTimeout(() => {
                let reply = getReply(message);
                addMessage(reply, false);
            }, 500);
        }
        
       
        sendBtn.addEventListener('click', sendMessage);
        
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        clearBtn.addEventListener('click', function() {
            chatBox.innerHTML = '';
        });
        
        // First message from bot
        addMessage("Hello! I'm your chatbot assistant. How can I help you today?", false);
   