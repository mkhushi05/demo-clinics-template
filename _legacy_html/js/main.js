document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header Functionality
    const header = document.querySelector('.header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.add('scrolled'); // Force for now depending on design, or remove to be transparent at top
            if(window.scrollY === 0) {
                // If we want it totally transparent at the top:
                // header.classList.remove('scrolled');
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init

    // 2. Mobile Menu Toggle
    const toggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');
    
    if(toggle && menu) {
        toggle.addEventListener('click', () => {
            const isVisible = menu.style.display === 'flex';
            menu.style.display = isVisible ? 'none' : 'flex';
            menu.style.flexDirection = 'column';
            menu.style.position = 'absolute';
            menu.style.top = '100%';
            menu.style.left = '0';
            menu.style.width = '100%';
            menu.style.backgroundColor = '#fff';
            menu.style.padding = '1rem';
            menu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
        });
    }

    // 3. Before/After Slider Functionality
    const baContainer = document.querySelector('.ba-slider-container');
    const beforeImage = document.querySelector('.ba-image.before');
    const sliderHandle = document.querySelector('.ba-slider-handle');

    if (baContainer && beforeImage && sliderHandle) {
        let isSliding = false;

        const slide = (x) => {
            const rect = baContainer.getBoundingClientRect();
            // Calculate percentage
            let percentage = ((x - rect.left) / rect.width) * 100;
            
            // Constrain
            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;
            
            // Apply
            beforeImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
            sliderHandle.style.left = `${percentage}%`;
        };

        // Mouse events
        sliderHandle.addEventListener('mousedown', (e) => {
            isSliding = true;
            baContainer.classList.add('sliding');
        });

        window.addEventListener('mouseup', () => {
            isSliding = false;
            baContainer.classList.remove('sliding');
        });

        window.addEventListener('mousemove', (e) => {
            if (!isSliding) return;
            slide(e.clientX);
        });

        // Touch events
        sliderHandle.addEventListener('touchstart', (e) => {
            isSliding = true;
            baContainer.classList.add('sliding');
        });

        window.addEventListener('touchend', () => {
            isSliding = false;
            baContainer.classList.remove('sliding');
        });

        window.addEventListener('touchmove', (e) => {
            if (!isSliding) return;
            slide(e.touches[0].clientX);
        });
    }
});
