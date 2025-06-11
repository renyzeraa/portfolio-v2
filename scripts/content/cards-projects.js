import { onLanguageChange } from "../translate/language-switcher.js";
import { translationsProjects } from "../translate/translations-projects.js";
import { translations } from "../translate/translations.js";
import { projects, libsIcons } from "./projects.js";

export function initCardsProjects(newLanguage) {
  const containerCards = document.querySelector('#projects > .cards-container');
  const listCards = document.createElement('ul');
  listCards.classList.add('slide');

  projects.forEach((project, index) => {
    const card = document.createElement('li');
    card.className = 'card ';
    card.title = project.title;

    const cardImg = document.createElement('div');
    cardImg.className = 'card-img';

    const img = document.createElement('img');
    img.className = 'image-project';
    img.src = project.image;
    img.alt = 'Preview Site';
    img.width = 307;
    img.height = 211;
    img.draggable = false;
    cardImg.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = newLanguage ? translationsProjects[newLanguage][index].description : project.description;

    const techIcons = document.createElement('div');
    techIcons.className = 'tech-icons';

    project.libs.forEach(lib => {
      const icon = document.createElement('img');
      icon.src = libsIcons[lib];
      icon.alt = lib;
      icon.width = 20;
      icon.height = 20;
      icon.title = lib;
      techIcons.appendChild(icon);
    });

    const link = document.createElement('a');
    link.href = project.linkSite;
    link.target = '_blank';
    link.textContent = translations[newLanguage || 'pt-BR'].checkLinkSite;
    link.setAttribute('data-i18n', 'checkLinkSite');

    card.appendChild(cardImg);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techIcons);
    card.appendChild(link);

    listCards.appendChild(card);
  });

  const arrowNav = document.createElement('div');
  arrowNav.className = 'arrow-nav';
  arrowNav.innerHTML = `
    <button class="prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-gray-0)" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>
    </button>
    <button class="next">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-gray-0)" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
    </button>
  `;

  containerCards.appendChild(listCards);
  containerCards.appendChild(arrowNav);
}

onLanguageChange((newLanguage) => {
  const containerCards = document.querySelector('#projects > .cards-container');
  containerCards.innerHTML = '';
  initCardsProjects(newLanguage);
});