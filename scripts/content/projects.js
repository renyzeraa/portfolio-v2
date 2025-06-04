import { getLanguage } from "../translate/language-switcher.js";
import { translationsProjects } from "../translate/translations-projects.js";

export const projects = [
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
  },
  {
    title: 'GPM Car - Landing Page',
    description: translationsProjects[getLanguage()][3].description,
    image: 'https://github.com/user-attachments/assets/1b4ca238-1d8a-4257-ac5d-06ed88ab6553',
    libs: ['html', 'css', 'javascript'],
    linkSite: 'https://renyzeraa.github.io/rocketseat-explorer/Stage09/Challenge01',
    linkRepo: 'https://github.com/renyzeraa/rocketseat-explorer/blob/main/Stage09/Challenge01'
  },
  {
    title: 'Rocket Notes',
    description: translationsProjects[getLanguage()][4].description,
    image: 'https://user-images.githubusercontent.com/101990719/186683798-b81a6403-07f5-4875-b88e-90595da46636.png',
    libs: ['react', 'javascript', 'css', 'vite', 'node', 'express', 'sqlite', 'knex'],
    linkSite: 'https://rocket-notes-aplication.netlify.app/',
    linkRepo: 'https://github.com/renyzeraa/rocketnotes-frontend'
  },
  {
    title: 'BeautySalon - Landing Page',
    description: translationsProjects[getLanguage()][5].description,
    image: 'https://github.com/user-attachments/assets/54e3dae0-78f5-44b4-b24d-8ac93f3a4813',
    libs: ['javascript', 'css', 'html'],
    linkSite: 'https://renyzeraa.github.io/LP-beautysalon/',
    linkRepo: 'https://github.com/renyzeraa/LP-beautysalon'
  }
]

export const libsIcons = {
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