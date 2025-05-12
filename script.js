document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
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
            document.addEventListener('DOMContentLoaded', function() {
                // Códigos existentes...
            
                // Adicione este novo trecho no final da função
                // Efeito de hover no botão de Encomenda
                const encomendaBtn = document.querySelector('.btn-encomenda');
                
                if (encomendaBtn) {
                    encomendaBtn.addEventListener('click', function() {
                        // Aqui você pode adicionar a ação de clique, por exemplo:
                        // Redirecionar para a seção de contato
                        const contatoSection = document.getElementById('contato');
                        if (contatoSection) {
                            contatoSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                }
            });
        });
    });

    // Infinite Carousel Initialization
    $('.bag-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coleta dos dados do formulário
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        // Validação básica
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Objeto com os dados do formulário
        const formData = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };
        
        // Simulação de envio de formulário (substitua com sua lógica real de backend)
        try {
            // Aqui você normalmente faria uma chamada fetch para seu backend
            console.log('Dados do formulário:', formData);
            
            // Limpar o formulário após o envio
            contactForm.reset();
            
            // Mostrar mensagem de sucesso
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        }
    });

    // Efeito de Typing na Seção Hero
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero .lead');
    
    function typeWriter(element, text, speed = 50) {
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
    
    // Iniciar typing effect quando a página carregar
    if (heroTitle && heroSubtitle) {
        typeWriter(heroTitle, heroTitle.textContent);
        setTimeout(() => {
            typeWriter(heroSubtitle, heroSubtitle.textContent);
        }, heroTitle.textContent.length * 50);
    }

    // Animação de Entrada das Seções
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });

    // Adicionar estilo para animações de seções
    const style = document.createElement('style');
    style.textContent = `
        .section-hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .section-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});