import { onLanguageChange } from "../translate/language-switcher.js";
import { translationsProjects } from "../translate/translations-projects.js";
import { projects } from "./projects.js";

const libs = {
  'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'node': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'express': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'sqlite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  'vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
  'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg',
  'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'fastify': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg',
  'knex': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/knexjs/knexjs-original.svg',
  'next': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
}

export function initCardsProjects() {
  const containerCards = document.querySelector('#projects > .cards-container');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'image-project';
    img.src = project.image;
    img.alt = 'Preview Site';
    img.width = 1920;
    img.height = 1080;

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const techIcons = document.createElement('div');
    techIcons.className = 'tech-icons';

    project.libs.forEach(lib => {
      const icon = document.createElement('img');
      icon.src = libs[lib];
      icon.alt = lib;
      icon.width = 20;
      icon.height = 20;
      techIcons.appendChild(icon);
    });

    const link = document.createElement('a');
    link.href = project.linkSite;
    link.target = '_blank';
    link.setAttribute('data-i18n', 'checkLinkSite');

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techIcons);
    card.appendChild(link);

    containerCards.appendChild(card);
  });
}

onLanguageChange((newLanguage) => {
  projects = projects.map((project, index) => {
    return {
      ...project,
      description: translationsProjects[newLanguage][index].description
    };
  });

  const containerCards = document.querySelector('#projects > .cards-container');
  containerCards.innerHTML = ''; // Limpa os cards existentes

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'image-project';
    img.src = project.image;
    img.alt = 'Preview Site';
    img.width = 1920;
    img.height = 1080;

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const techIcons = document.createElement('div');
    techIcons.className = 'tech-icons';

    project.libs.forEach(lib => {
      const icon = document.createElement('img');
      icon.src = libs[lib];
      icon.alt = lib;
      icon.width = 20;
      icon.height = 20;
      techIcons.appendChild(icon);
    });

    const link = document.createElement('a');
    link.href = project.linkSite;
    link.setAttribute('data-i18n', 'checkLinkSite');

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techIcons);
    card.appendChild(link);

    containerCards.appendChild(card);
  });
});