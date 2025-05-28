import { getLanguage, onLanguageChange } from "../translate/language-switcher.js";

export const translationsProjects = {
  'pt-BR': [
    {
      description: 'Projeto de restaurante com cardápio, carrinho de compras e sistema de pedidos. Com API própria.',
    },
    {
      description: 'Aplicação para cadastrar metas a serem cumpridas no dia e semanalmente. Consume API própria.',
    },
    {
      description: 'App que une a técnica de Pomodoro com a realização de exercícios físicos para quem passa muito tempo na frente do computador.',
    }
  ],
  'en-US': [
    {
      description: 'Restaurant project with menu, shopping cart and order system. With custom API.',
    },
    {
      description: 'Application to register goals to be accomplished daily and weekly. Consumes custom API.',
    },
    {
      description: 'App that combines the Pomodoro technique with physical exercises for people who spend a lot of time in front of the computer.',
    }
  ],
  'es-ES': [
    {
      description: 'Proyecto de restaurante con menú, carrito de compras y sistema de pedidos. Con API propia.',
    },
    {
      description: 'Aplicación para registrar metas diarias y semanales a cumplir. Consume API propia.',
    },
    {
      description: 'Aplicación que combina la técnica Pomodoro con ejercicios físicos para personas que pasan mucho tiempo frente a la computadora.',
    }
  ]
}

let projects = [
  {
    title: 'FoodExplorer',
    description: translationsProjects[getLanguage()][0].description,
    image: 'https://github.com/user-attachments/assets/872a5987-2352-4032-a2d5-fbd59fc684f1',
    libs: ['react', 'javascript', 'node', 'express', 'sqlite', 'knex', 'vite'],
    linkSite: 'https://foodexplorer-eight.vercel.app/',
    linkRepo: 'https://github.com/renyzeraa/foodexplorer-frontend'
  },
  {
    title: 'Achieve Goals',
    description: translationsProjects[getLanguage()][1].description,
    image: 'https://github.com/user-attachments/assets/582229a8-d763-4e42-bcfe-8745d9a33cc9',
    libs: ['react', 'typescript', 'node', 'tailwind', 'vite', 'fastify', 'prisma', 'postgresql', 'docker'],
    linkSite: 'https://github.com/renyzeraa/achieve-goals-front',
    linkRepo: 'https://github.com/renyzeraa/achieve-goals-front'
  },
  {
    title: 'Move It',
    description: translationsProjects[getLanguage()][2].description,
    image: 'https://github.com/user-attachments/assets/d3c8c180-957c-4cd1-a1ba-3a493426e128',
    libs: ['react', 'typescript', 'next', 'vite'],
    linkSite: 'https://app-move-it-kohl.vercel.app/',
    linkRepo: 'https://github.com/renyzeraa/move-it'
  }
]

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
  'next': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
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