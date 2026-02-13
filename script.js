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
    
        // Initialize the vase with flowers
    function initFlowers() {
        // Create lilies with specific messages
        createFlower('lily', 40, 0, "That's my first valentine with a girl ever hihi");
        createFlower('lily', 80, 3, "Maybe m doing too much, I'm waiting for my presents tho :(");
        createFlower('lily', 120, 0, "I love you");
        
        // Create roses with specific messages
        createFlower('rose', 60, 0, "kanbghik 9ed lbolissi");
        createFlower('rose', 100, 0, "kanbghik 9ed njom");
    }
    
    // Create a flower element at specific position
    function createFlower(type, left, top, message) {
        const flower = document.createElement('div');
        flower.className = `flower ${type}`;
        
        // Position the flower
        flower.style.left = `${left}px`;
        flower.style.bottom = `${top}px`;
        
        flower.dataset.message = message;
        // Create stem
        const stem = document.createElement('div');
        stem.className = 'stem';
        flower.appendChild(stem);
        
        // Create petals
        const petals = document.createElement('div');
        petals.className = 'petals';
        flower.appendChild(petals);
        
        // Create leaves
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        flower.appendChild(leaf);
        
        const leaf2 = document.createElement('div');
        leaf2.className = 'leaf-2';
        flower.appendChild(leaf2);
        
        // Add click event to show love message
        flower.addEventListener('click', function() {
            showMessageModal(this.dataset.message);
        });
        
        flowersContainer.appendChild(flower);
    }
    
    // Add sparkle effect when flower is clicked
    function addClickSparkle(flower) {
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            const rect = flower.getBoundingClientRect();
            const left = Math.random() * 60;
            const top = Math.random() * 60;
            
            sparkle.style.left = `${left}px`;
            sparkle.style.top = `${top}px`;
            sparkle.style.animationDelay = `${i * 0.1}s`;
            
            flower.appendChild(sparkle);
            
            // Remove sparkle after animation
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.remove();
                }
            }, 2000);
        }
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
        
        // Add leaves for more realism
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        flower.appendChild(leaf);
        
        const leaf2 = document.createElement('div');
        leaf2.className = 'leaf-2';
        flower.appendChild(leaf2);
        
        flowerAnimationArea.appendChild(flower);
    }
    
    // Show love message
    function showLoveMessage() {
        messageDisplay.innerHTML = `
            <h3><i class="fas fa-heart"></i> You Said Yes 👀 <i class="fas fa-heart"></i></h3>
            <p>I love you too ! </p>
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
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
        
        .falling-flower.rose .petals {
            background: radial-gradient(circle at 30% 30%, #ff4d8d, #ff0066);
            border-radius: 40% 50% 40% 50%;
        }
        
        .falling-flower .leaf, .falling-flower .leaf-2 {
            position: absolute;
            width: 15px;
            height: 10px;
            border-radius: 50% 0 50% 0;
        }
        
        .falling-flower .leaf {
            bottom: 10px;
            left: 5px;
            background: #3cb371;
            transform: rotate(-30deg);
        }
        
        .falling-flower .leaf-2 {
            bottom: 15px;
            right: 5px;
            background: #2e8b57;
            border-radius: 0 50% 0 50%;
            transform: rotate(30deg);
        }
    `;
    document.head.appendChild(style);
    
    // Initialize the app
    initFlowers();
    
    // Add a sweet message in the console
    console.log("%c💝 I love you habibty 💝", "color: #ff4d8d; font-size: 18px; font-weight: bold;");
    console.log("%cThis website was created with love for someone very special.", "color: #6ee2ff; font-size: 14px;");
});
