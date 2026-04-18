tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    400: '#B00B0B', // Vermelho Intenso (Agora no Hover)
                    500: '#8A0505', // Vermelho mais Escuro e Intenso (Botões)
                    600: '#3A0505', // Vermelho Profundo (Fundos)
                },
                dark: {
                    900: '#0A0A0A',
                    800: '#141414',
                    700: '#222222',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // --- 1. CONFIGURAÇÕES DO OBSERVADOR (ANIMAÇÕES) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));


    // --- 2. MÊS ATUAL ---
    const spanMes = document.getElementById('month'); // Usando o ID que você definiu
    if (spanMes) {
        const dataAtual = new Date();
        const nomeMes = dataAtual.toLocaleString('pt-BR', { month: 'long' });
        spanMes.textContent = nomeMes.toUpperCase();
    }


    // --- 3. CARROSSEL DE DEPOIMENTOS (NOVA LÓGICA CORRIGIDA) ---
    const carrossel = document.getElementById('carrossel-depoimentos');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (carrossel) {
        let autoScrollTimer;

        // Função para avançar um card
        const scrollNext = () => {
            // Pega o tamanho exato de 1 card na tela atual + o espaçamento (gap)
            const card = carrossel.querySelector('div');
            const cardWidth = card ? card.offsetWidth + 24 : 400;

            // Verifica se chegou ao final (Math.ceil evita bugs de pixels quebrados)
            if (Math.ceil(carrossel.scrollLeft + carrossel.clientWidth) >= carrossel.scrollWidth - 10) {
                carrossel.scrollTo({ left: 0, behavior: 'smooth' }); // Volta pro início
            } else {
                carrossel.scrollBy({ left: cardWidth, behavior: 'smooth' }); // Avança
            }
        };

        // Função para voltar um card
        const scrollPrev = () => {
            const card = carrossel.querySelector('div');
            const cardWidth = card ? card.offsetWidth + 24 : 400;
            carrossel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        };

        // Ativa os botões manuais
        if (btnNext) btnNext.addEventListener('click', scrollNext);
        if (btnPrev) btnPrev.addEventListener('click', scrollPrev);

        // Funções de Play e Pause da Rolagem Automática
        const playCarrossel = () => {
            clearInterval(autoScrollTimer);
            // Roda a função scrollNext a cada 3.5 segundos
            autoScrollTimer = setInterval(scrollNext, 3500);
        };

        const pauseCarrossel = () => clearInterval(autoScrollTimer);

        // Inicia o carrossel assim que a página carrega
        playCarrossel();

        // Interrompe a rolagem se o mouse estiver em cima (Computador)
        carrossel.addEventListener('mouseenter', pauseCarrossel);
        carrossel.addEventListener('mouseleave', playCarrossel);

        // Interrompe a rolagem se o mouse estiver sobre os botões
        if (btnNext && btnPrev) {
            btnNext.addEventListener('mouseenter', pauseCarrossel);
            btnNext.addEventListener('mouseleave', playCarrossel);
            btnPrev.addEventListener('mouseenter', pauseCarrossel);
            btnPrev.addEventListener('mouseleave', playCarrossel);
        }

        // Interrompe a rolagem se o usuário tocar na tela (Celular)
        carrossel.addEventListener('touchstart', pauseCarrossel, { passive: true });
        carrossel.addEventListener('touchend', playCarrossel, { passive: true });
    }






    // --- 4. BOTÃO FLUTUANTE (APARECE FORA DO HEADER) ---
    const header = document.querySelector('header');
    const floatingBtn = document.getElementById('floating-cta');

    if (header && floatingBtn) {
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se o header NÃO estiver mais visível na tela
                if (!entry.isIntersecting) {
                    floatingBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                    floatingBtn.classList.add('opacity-100', 'translate-y-0');
                } else {
                    // Se o header voltou para a tela
                    floatingBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                    floatingBtn.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        }, {
            root: null,
            threshold: 0.1 // Dispara quando restar apenas 10% do header na tela
        });

        headerObserver.observe(header);
    }






    // --- 5. MENU MOBILE (ÚNICO CONTAINER) ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const iconBars = document.getElementById('icon-bars');
    const iconClose = document.getElementById('icon-close');

    if (mobileMenuBtn && navLinks) {
        const toggleMenu = () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            iconBars.classList.toggle('hidden');
            iconBars.classList.toggle('block');
            iconClose.classList.toggle('hidden');
            iconClose.classList.toggle('block');
        };

        // Evento de clique no botão do menu
        mobileMenuBtn.addEventListener('click', toggleMenu);

        // Fecha o menu automaticamente ao clicar em qualquer link (apenas no mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768 && !navLinks.classList.contains('hidden')) {
                    toggleMenu();
                }
            });
        });
    }






    //MODAL
    const modal = document.getElementById('testimonial-modal');
    const modalBox = document.getElementById('modal-content-box');
    const closeBtn = document.getElementById('close-modal-btn');
    const openBtns = document.querySelectorAll('.open-modal-btn');

    // Elementos dentro do modal que receberão os dados
    const modalText = document.getElementById('modal-text');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalImg = document.getElementById('modal-img');

    // Função para abrir o modal
    const openModal = (btn) => {
        // 1. Injeta os dados do botão no modal
        let texto = btn.getAttribute('data-text');

        // 1. Transforma os "Enters" reais do texto em <br>
        texto = texto.replace(/\n/g, '<br>');

        // 2. Adiciona <br> após "..." ou ".", exceto no último ponto do texto.
        texto = texto.replace(/(\.{3}|\.)(?!\d)(?!\s*$)\s*(?!<br>)/g, '$1<br><br>');

        // Aplica no HTML
        modalText.innerHTML = texto;
        modalName.textContent = btn.dataset.name;
        modalRole.textContent = btn.dataset.role;

        // 2. Mostra o modal e aplica animações
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        // Timeout minúsculo para garantir que o display: flex foi aplicado antes da opacidade mudar
        setTimeout(() => {
            // Reseta o scroll do texto para o topo toda vez que o modal abre
            modalText.scrollTop = 0;
            
            modal.classList.remove('opacity-0');
            modalBox.classList.remove('scale-95');
            modalBox.classList.add('scale-100');
        }, 10);

        // Bloqueia o scroll da página de fundo
        document.body.style.overflow = 'hidden';
    };

    // Função para fechar o modal
    const closeModal = () => {
        // Inicia a animação de saída
        modal.classList.add('opacity-0');
        modalBox.classList.remove('scale-100');
        modalBox.classList.add('scale-95');

        // Aguarda a animação (300ms) terminar para esconder o elemento
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = ''; // Devolve o scroll da página
        }, 300);
    };

    // Adiciona os eventos de clique
    openBtns.forEach(btn => btn.addEventListener('click', () => openModal(btn)));
    closeBtn.addEventListener('click', closeModal);

    // Fecha o modal se o usuário clicar fora da caixa principal (no fundo escuro)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Fecha o modal com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
});