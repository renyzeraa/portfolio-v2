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