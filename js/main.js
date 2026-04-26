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
    // Array contendo todos os dados dos depoimentos
    const dadosDepoimentos = [
        {
            nome: "Bárbara Sousa Rodrigues",
            profissaoIdade: "Estudante de Educação Física, 30 anos",
            texto: `Me chamo Bárbara Sousa Rodrigues, tenho 30 anos, sou formada em Direito e estudante de Educação Física.
        A minha experiência com o João foi, sem dúvida, uma experiência incrível. Comecei com ele no online, onde ele montava minhas fichas de treino, e depois tive a oportunidade de treinar presencialmente com ele por aproximadamente dois anos.
        O João não foi apenas um personal trainer para mim. Ele foi um verdadeiro treinador. Não estava ali só para me acompanhar, mas para me ensinar a treinar de verdade, e eu aprendi. Aprendi a ter consciência, técnica e disciplina dentro do treino. Foi através dele que desenvolvi ainda mais amor pelo esporte, a ponto de decidir cursar Educação Física. Cheguei a um nível físico que eu jamais imaginei alcançar, e isso foi resultado direto do trabalho, dedicação e profissionalismo dele.
        Inclusive, ver o amor e o comprometimento do João com a profissão foi uma das coisas que mais me influenciaram na minha decisão de entrar para a área.
        Indico o João de olhos fechados. Sempre indiquei e continuarei indicando. Ele é um profissional excepcional, extremamente cuidadoso, educado, dedicado e sempre preocupado em entregar o melhor para seus alunos.
        O período em que treinei com ele foi, sem dúvida, a fase em que tive o meu melhor físico.
        Hoje, como estudante de Educação Física e iniciando minha atuação na área, posso afirmar que muito do que sei, do que sou e do que aplico, veio através dos ensinamentos do João. Sempre falo para os meus alunos que grande parte do meu conhecimento vem de ter tido um excelente professor por trás. Se você procura um profissional de excelência, pode ter certeza: você estará em ótimas mãos com o João.`,
            delay: 400
        },
        {
            nome: "Francesco Calixto",
            profissaoIdade: "Ator, 26 anos",
            texto: `Eu fiz um processo completo de consultoria com o João, desde alimentação, treino de musculação, cardios e suplementação, logo no início percebi uma flexibilidade e eficiência extraordinária em seu trabalho, adaptando a consultoria de acordo com minha rotina e limitações para meu bem estar no processo. Foi um divisor de águas na minha percepção sobre manter uma vida saudável sem peso psicológico, descobri que dá pra se ter um corpo e mente saudáveis com um processo prazeroso, digo isso principalmente no meu caso pois sou vegetariano. João trouxe todo seu conhecimento para que minha alimentação fosse completa com todos micros e macros necessários para minha evolução. Se eu fosse resumir a consultoria dele em uma palavra, diria que ele é um profissional "proeficiente".`,
            delay: 100
        },
        {
            nome: "Vanessa Mendes",
            profissaoIdade: "Engenheira, 30 anos",
            texto: `Quero te agradecer de coração por tudo que você fez por durante o processo de emagrecimento. Você não transformou só o meu corpo… você transformou a minha mente, minha forma de pensar e de agir todos os dias.\n\nHoje eu me sinto mais forte, mais disciplinada e, principalmente, mais constante, algo que eu nunca consegui manter antes. Você me ensinou que não é sobre perfeição, é sobre persistência, e isso mudou completamente minha relação com os treinos e com a dieta.\n\nA minha forma de enxergar a comida também mudou. Antes era algo cheio de culpa e exageros, e hoje eu vejo como cuidado, como combustível pro meu corpo e pra minha evolução.\n\nE uma coisa que eu faço questão de reconhecer: hoje em dia é muito difícil encontrar um profissional tão competente, dedicado e realmente comprometido com cada aula como você é. Isso faz toda a diferença.\n\nSou muito grata por cada orientação, por cada puxão de orelha e por acreditar em mim até quando eu mesma duvidei. Esse processo foi muito além do físico… foi transformação de vida mesmo 🤍`,
            delay: 100
        },
        {
            nome: "Dra Indyanara",
            profissaoIdade: "Advogada, 35 anos",
            texto: `Indiscutível o profissionalismo e conhecimento do João. Treinos simples, mas que causam impacto significativo no corpo, posso dizer, por experiência própria, que com pouco tempo já se vê resultados. A consultoria é realmente um investimento que vale a pena, pra se ter saúde e óbvio alcançar um corpo bonito e harmônico. João é sempre presente, detalhista e atencioso às demandas do aluno, fazendo alterações que são importantes. Um cara extremamente sério e comprometido com o que faz. Obrigada pelo acompanhamento, João. Estou colhendo frutos bons, através das suas orientações.`,
            delay: 100
        },
        {
            nome: "Isabella Freitas",
            profissaoIdade: "Enfermeira, 25 anos",
            texto: `Tô muito satisfeita com o resultado. -3kg em 14 dias, mesmo sentindo que tô comendo bastante e ganhando força nos exercícios. Não me sinto mais inchada igual quando iniciei, tinha a sensação que estava enorme quando comecei a consultoria.`,
            delay: 200
        },
        {
            nome: "Dr Lucas Varela",
            profissaoIdade: "Advogado, 28 anos",
            texto: `O foco tem sido o maior diferencial e aprendizado desse processo todo e é algo que estou utilizando na minha vida. Nesse momento estou enfrentando diversas mudanças profissionais e financeiras que esse foco e determinação adquiridos nesse processo estao me dando confiança pra enfrentar.`,
            delay: 300
        },
        {
            nome: "Dr Leo Nunes",
            profissaoIdade: "Médico, 47 anos",
            texto: `Tu tem um jeito de conduzir que motiva sem pressionar, corrige sem humilhar, incentiva sem iludir.\n\nE isso cria um ambiente onde eu não treino só pra mudar o físico, mas pra melhorar como ser humano mesmo.\n\nTeu impacto vai além do treino: é disciplina, é autoestima, é cuidado, é presença.\n\nTu me fez acreditar que eu posso mais do que eu imaginava, e isso fica. Esse é o tipo de coisa que transforma.`,
            delay: 400
        },
        {
            nome: "Dra Jessica Poline",
            profissaoIdade: "Dentista, 24 anos",
            texto: `E hoje eu tive uma percepção muito boa. Eu nunca, NUNCA consegui colocar mais que 25, 30kg nessa máquina de elevação pélvica. Ficava muito pesado e eu sentia que meu glúteo não conseguia sustentar a força. E desde então, treinando glúteo 3x na semana como você fez, meu glúteo ganhou uma força surreal 🥺 hoje fiquei tão feliz que eu consegui fazer 45kg naquela máquina! Kkkk parece pouco, mas tipo, eu nunca consegui sair de 25.`,
            delay: 400
        },
    ];

    // Função para renderizar os depoimentos no HTML
    function renderizarDepoimentos() {
        const container = document.getElementById('carrossel-depoimentos');
        const limiteCaracteres = 200

        // Limpa o container por segurança
        container.innerHTML = '';

        dadosDepoimentos.forEach(depoimento => {
            const card = document.createElement('div');
            card.className = `reveal-scale delay-${depoimento.delay} min-w-[300px] md:min-w-[400px] max-w-[400px] bg-dark-800 border border-dark-700 p-8 rounded-2xl snap-center flex flex-col justify-between hover:border-brand-500/30 transition-colors`;

            // Lógica de truncamento de texto
            let textoExibido = depoimento.texto;
            let precisaBotao = false;

            if (depoimento.texto.length > limiteCaracteres) {
                // Corta o texto no limite e adiciona os 3 pontinhos
                textoExibido = depoimento.texto.substring(0, limiteCaracteres).trim() + '...';
                precisaBotao = true;
            }

            // Prepara o botão condicionalmente
            let botaoHTML = '';
            if (precisaBotao) {
                botaoHTML = `
                <button
                    class="open-modal-btn text-brand-400 hover:text-brand-300 text-sm font-semibold text-left mb-6 transition-colors focus:outline-none"
                    data-text="${depoimento.texto.replace(/"/g, '&quot;')}"
                    data-name="${depoimento.nome}" 
                    data-role="${depoimento.profissaoIdade}">
                    Ler depoimento completo
                </button>
            `;
            }

            // Monta o conteúdo interno do card (adicionando as aspas duplas no texto exibido)
            card.innerHTML = `
            <div>
                <div class="flex text-yellow-400 mb-4 text-xl">
                    ★★★★★
                </div>
                <p class="text-gray-300 text-lg leading-relaxed italic mb-6 whitespace-pre-line">
                    "${textoExibido}"
                </p>
            </div>
            ${botaoHTML}
            <div class="flex items-center gap-4 mt-auto border-t border-dark-700 pt-6">
                <div>
                    <h4 class="text-white font-bold">${depoimento.nome}</h4>
                    <p class="text-brand-400 text-sm font-medium">${depoimento.profissaoIdade}</p>
                </div>
            </div>
        `;

            // Adiciona o card ao container
            container.appendChild(card);
        });
    }

    renderizarDepoimentos();

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