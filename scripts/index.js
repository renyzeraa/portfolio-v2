import { initBackToTop } from './animations/back-to-top.js'
import { initSmoothScrollMenu, initScrollToTop } from './animations/smooth-scroll.js'
import { initLanguageSwitcher } from './translate/language-switcher.js'
import { initCardsProjects } from './content/cards-projects.js'
import { initCardsExperience } from './content/cards-experience.js'
import { initSlideProjects } from './animations/slide.js'
import { initContactArea } from './content/contact.js'
import { initHeaderScroll } from './animations/header-scroll.js'

// Inicializa o botão de voltar ao topo com classe show quando o usuário rola a página
initBackToTop()
// Evento de scroll para trocar a classe do header quando o usuário rola a página
initHeaderScroll()
// Animação do scroll para o topo da página
initScrollToTop('#scrollToTopButton', 800)
// Inicializa o menu nav para links com smooth scroll
initSmoothScrollMenu('.nav-links a', { duration: 1000, menuCheckboxId: 'menuCheckbox' })
// Cria os cards de projetos
initCardsProjects()
// Inicializa o slide de projetos (caso foor menor que 999px)
initSlideProjects()
// Cria os cards de experiencias
initCardsExperience()
// Inicializa o switcher de idiomas
initLanguageSwitcher()
// Inicializa o formulário de contato
initContactArea()