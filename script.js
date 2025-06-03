document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.site-navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on load to set initial state
    }

    // Owl Carousel Initialization
    if (document.querySelector('.bag-carousel')) {
        $('.bag-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true, // Show navigation arrows
            dots: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Custom arrow icons
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 10
                },
                600: {
                    items: 2,
                    margin: 15
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    // Contact Form Simulation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            const formData = { nome, email, mensagem };
            console.log('Dados do formulário:', formData);
            
            alert('Mensagem enviada com sucesso! (Simulação)\nEntraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // Hero Section Typewriter Effect
    const heroTitleElement = document.querySelector('.hero-title');
    const heroSubtitleElement = document.querySelector('.hero-subtitle');
    
    function typeWriter(element, text, speed = 70) {
        if (!element || !text) return;
        element.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    if (heroTitleElement && heroSubtitleElement) {
        const originalTitle = heroTitleElement.textContent;
        const originalSubtitle = heroSubtitleElement.textContent;

        heroTitleElement.textContent = '';
        heroSubtitleElement.textContent = '';

        typeWriter(heroTitleElement, originalTitle);
        setTimeout(() => {
            typeWriter(heroSubtitlele, originalSubtitle);
        }, originalTitle.length * 70 + 300);
    }

    // Section Fade-in Animation on Scroll
    const sectionsToAnimate = document.querySelectorAll('.site-section');
    
    if (sectionsToAnimate.length > 0 && "IntersectionObserver" in window) {
        const sectionObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, sectionObserverOptions);
        
        sectionsToAnimate.forEach(section => {
            section.classList.add('section-hidden');
            sectionObserver.observe(section);
        });

        const animationStyle = document.createElement('style');
        animationStyle.textContent = `
            .section-hidden {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            .section-visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(animationStyle);
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const dropdownElement = document.getElementById('dropdownComoConheceu');
    if (dropdownElement) {
        const dropdownButton = dropdownElement;
        const dropdownItems = document.querySelectorAll('[aria-labelledby="dropdownComoConheceu"] .dropdown-item');
        const hiddenInput = document.getElementById('comoConheceuInput');

        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedValue = this.textContent;
                dropdownButton.textContent = selectedValue;
                hiddenInput.value = selectedValue;
            });
        });
    }

});