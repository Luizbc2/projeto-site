document.addEventListener('DOMContentLoaded', function() {
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
                const encomendaBtn = document.querySelector('.btn-encomenda');
                
                if (encomendaBtn) {
                    encomendaBtn.addEventListener('click', function() {
                        const contatoSection = document.getElementById('contato');
                        if (contatoSection) {
                            contatoSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                }
            });
        });
    });

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

    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        const formData = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };
        
        try {
            console.log('Dados do formulário:', formData);
            
            contactForm.reset();
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        }
    });


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
    
    if (heroTitle && heroSubtitle) {
        typeWriter(heroTitle, heroTitle.textContent);
        setTimeout(() => {
            typeWriter(heroSubtitle, heroSubtitle.textContent);
        }, heroTitle.textContent.length * 50);
    }

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
