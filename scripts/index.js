import { initBackToTop } from './back-to-top.js'
import { initSmoothScrollMenu, initScrollToTop } from './smooth-scroll.js';

// Inicializa o botão de voltar ao topo com classe show quando o usuário rola a página
initBackToTop()
// Animação do scroll para o topo da página
initScrollToTop('#scrollToTopButton', 800);
// Inicializa o menu nav para links com smooth scroll
initSmoothScrollMenu('.nav-links a', { duration: 1000, menuCheckboxId: 'menuCheckbox' });
