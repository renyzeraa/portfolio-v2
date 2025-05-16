import { translations } from './translations.js';

export function initLanguageSwitcher() {
  const languageButtons = document.querySelectorAll('.lang-btn');
  const defaultLang = 'pt-BR';

  // Carrega o idioma salvo ou usa o padrão
  const currentLang = localStorage.getItem('language') || defaultLang;
  setLanguage(currentLang);

  languageButtons.forEach(btn => {
    if (currentLang === btn.dataset.lang) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);

      // Atualiza os botões ativos
      languageButtons.forEach(node => node.classList.remove('active'));
      btn.classList.add('active');

      // Salva a preferência do usuário
      localStorage.setItem('language', lang);
    });
  });
}

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}