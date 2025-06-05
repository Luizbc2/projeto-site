document.addEventListener('DOMContentLoaded', function() {

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
        handleScroll();
    }
    if (document.querySelector('.bag-carousel')) {
        $('.bag-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
            typeWriter(heroSubtitleElement, originalSubtitle);
        }, originalTitle.length * 70 + 300);
    }

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

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const form = $(this);
        const submitBtn = form.find('button[type="submit"]');
        const originalText = submitBtn.html();
        const formAction = form.attr('action');

        submitBtn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...');
        submitBtn.prop('disabled', true);

        const formData = new FormData(form[0]);

        
        $.ajax({
            url: formAction,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function () {
                Swal.fire({
                    title: "Mensagem enviada com sucesso! Em breve entraremos em contato.",
                    icon: "success",
                    draggable: true
                }); 
                form[0].reset();
            },
            error: function (xhr, status, error) {
                Swal.fire({
                    title: "Mensagem enviada com sucesso! Em breve entraremos em contato.",
                    icon: "error",
                    draggable: true
                });
                form[0].reset();
            },
            complete: function () {
                submitBtn.html(originalText);
                submitBtn.prop('disabled', false);
            }
        });
    });

    initProductModal();
});
