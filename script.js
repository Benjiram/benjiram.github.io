document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const vaseSection = document.getElementById('vase-section');
    const proposalSection = document.getElementById('proposal-section');
    const nextBtn = document.getElementById('next-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const flowerAnimationArea = document.getElementById('flower-animation-area');
    const messageDisplay = document.getElementById('message-display');
    const flowersContainer = document.querySelector('.flowers-container');
    const messageModal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    // Love messages for when she clicks on flowers
    const loveMessages = [
        "Every time I see you, my heart skips a beat.",
        "You're the most beautiful person I've ever known, inside and out.",
        "I love the way your eyes light up when you smile.",
        "Being with you makes every day special.",
        "I fall in love with you more every single day.",
        "You're my favorite thought in the morning and my last thought at night.",
        "I love you more than words could ever express.",
        "You make me a better person just by being in my life.",
        "My love for you grows stronger with each passing moment.",
        "You're the missing piece I've been searching for my whole life."
    ];
    
    // Initialize the vase with flowers
    function initFlowers() {
        // Create lilies
        for (let i = 0; i < 7; i++) {
            createFlower('lily', i);
        }
        
        // Create roses
        for (let i = 0; i < 5; i++) {
            createFlower('rose', i);
        }
    }
    
    // Create a flower element
    function createFlower(type, index) {
        const flower = document.createElement('div');
        flower.className = `flower ${type}`;
        
        // Random position for each flower
        const left = type === 'lily' ? 
            (20 + (index % 4) * 25) : 
            (40 + (index % 3) * 30);
        const top = type === 'lily' ? 
            (30 + Math.floor(index / 4) * 40) : 
            (50 + Math.floor(index / 3) * 50);
        
        flower.style.left = `${left}%`;
        flower.style.top = `${top}px`;
        
        // Create stem
        const stem = document.createElement('div');
        stem.className = 'stem';
        flower.appendChild(stem);
        
        // Create petals
        const petals = document.createElement('div');
        petals.className = 'petals';
        flower.appendChild(petals);
        
        // Add click event to show love message
        flower.addEventListener('click', function() {
            const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
            showMessageModal(randomMessage);
            
            // Add a small animation when flower is clicked
            flower.style.transform = 'scale(1.2)';
            setTimeout(() => {
                flower.style.transform = 'scale(1)';
            }, 300);
        });
        
        flowersContainer.appendChild(flower);
    }
    
    // Show message modal
    function showMessageModal(message) {
        modalMessage.textContent = message;
        messageModal.style.display = 'flex';
    }
    
    // Close message modal
    function closeMessageModal() {
        messageModal.style.display = 'none';
    }
    
    // Move the "No" button when hovered or clicked
    function moveNoButton() {
        const panel = document.querySelector('.love-panel');
        const panelRect = panel.getBoundingClientRect();
        
        // Calculate random position within the panel
        const maxX = panelRect.width - noBtn.offsetWidth - 20;
        const maxY = panelRect.height - noBtn.offsetHeight - 20;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        // Apply new position
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        
        // Add a fun animation
        noBtn.style.transform = 'rotate(' + (Math.random() * 20 - 10) + 'deg)';
        
        // Reset after a short time
        setTimeout(() => {
            noBtn.style.transform = 'rotate(0deg)';
        }, 300);
    }
    
    // Create flower explosion when she clicks "Yes"
    function createFlowerExplosion() {
        // Clear any existing flowers
        flowerAnimationArea.innerHTML = '';
        
        // Create many flowers
        for (let i = 0; i < 50; i++) {
            createFallingFlower(i);
        }
        
        // Show love message
        showLoveMessage();
    }
    
    // Create a falling flower
    function createFallingFlower(index) {
        const flower = document.createElement('div');
        flower.className = 'falling-flower';
        
        // Random type (lily or rose)
        const type = Math.random() > 0.5 ? 'lily' : 'rose';
        flower.classList.add(type);
        
        // Random position and animation
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 4;
        const size = 20 + Math.random() * 40;
        
        flower.style.left = `${left}%`;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.animationDelay = `${delay}s`;
        flower.style.animationDuration = `${duration}s`;
        
        // Add petals effect
        const petals = document.createElement('div');
        petals.className = 'petals';
        flower.appendChild(petals);
        
        flowerAnimationArea.appendChild(flower);
    }
    
    // Show love message
    function showLoveMessage() {
        const messages = [
            "You've just made me the happiest person in the world!",
            "I promise to love you and cherish you every single day.",
            "This is just the beginning of our beautiful journey together.",
            "My heart is overflowing with love for you, now and forever.",
            "You are my everything. I love you more than you'll ever know."
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        messageDisplay.innerHTML = `
            <h3><i class="fas fa-heart"></i> You Said Yes! <i class="fas fa-heart"></i></h3>
            <p>${randomMessage}</p>
            <p>Happy Valentine's Day, my love! 💕</p>
        `;
        
        messageDisplay.style.display = 'block';
        
        // Add some sparkles
        addSparkles();
    }
    
    // Add sparkles to the message display
    function addSparkles() {
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            const left = 10 + Math.random() * 80;
            const top = 10 + Math.random() * 80;
            const delay = Math.random() * 2;
            
            sparkle.style.left = `${left}%`;
            sparkle.style.top = `${top}%`;
            sparkle.style.animationDelay = `${delay}s`;
            
            messageDisplay.appendChild(sparkle);
        }
    }
    
    // Go to proposal section
    function goToProposal() {
        vaseSection.classList.remove('active');
        vaseSection.style.display = 'none';
        proposalSection.style.display = 'flex';
        
        // Add a fade-in effect
        setTimeout(() => {
            proposalSection.style.opacity = '1';
        }, 10);
    }
    
    // Event Listeners
    nextBtn.addEventListener('click', goToProposal);
    
    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('click', moveNoButton);
    
    yesBtn.addEventListener('click', createFlowerExplosion);
    
    closeModalBtn.addEventListener('click', closeMessageModal);
    closeBtn.addEventListener('click', closeMessageModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === messageModal) {
            closeMessageModal();
        }
    });
    
    // Add CSS for falling flowers
    const style = document.createElement('style');
    style.textContent = `
        .falling-flower {
            position: absolute;
            top: -50px;
            animation: fall linear forwards;
            z-index: 10;
        }
        
        @keyframes fall {
            to {
                transform: translateY(calc(100vh + 50px)) rotate(360deg);
            }
        }
        
        .falling-flower .petals {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        
        .falling-flower.lily .petals {
            background: radial-gradient(circle at 30% 30%, #ffb6c1, #ff69b4);
        }
        
        .falling-flower.rose .petals {
            background: radial-gradient(circle at 30% 30%, #ff4d8d, #ff0066);
        }
    `;
    document.head.appendChild(style);
    
    // Initialize the app
    initFlowers();
    
    // Add a sweet message in the console
    console.log("%c💝 For My Valentine 💝", "color: #ff4d8d; font-size: 18px; font-weight: bold;");
    console.log("%cThis website was created with love for someone very special.", "color: #6ee2ff; font-size: 14px;");
});
