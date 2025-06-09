import { onLanguageChange } from "../translate/language-switcher.js";
import { translationsExperience } from "../translate/translations-experience.js";
import { experiences, iconsJobs } from "./experience.js";

export function initCardsExperience(newLanguage) {
  const containerCards = document.querySelector('#experience > .experience-cards-container');
  experiences.forEach(item => {
    const card = document.createElement('div');
    card.className = 'experience-card';
    card.title = newLanguage ? translationsExperience[newLanguage][item.flag].job : item.job;

    const header = document.createElement('header');
    header.className = 'card-header';
    header.innerHTML = iconsJobs[item.flag]

    const title = document.createElement('h3');
    title.className = 'card-job-title';
    title.title = newLanguage ? translationsExperience[newLanguage][item.flag].job : item.job;
    title.textContent = newLanguage ? translationsExperience[newLanguage][item.flag].job : item.job;

    const description = document.createElement('p');
    description.className = 'card-description';
    description.title = newLanguage ? translationsExperience[newLanguage][item.flag].description : item.description;
    description.textContent = newLanguage ? translationsExperience[newLanguage][item.flag].description : item.description;

    const achievements = document.createElement('div');
    achievements.className = 'card-achievements';

    const aAchievements = newLanguage ? translationsExperience[newLanguage][item.flag].achievements : item.achievements;

    aAchievements.forEach(achievement => {
      const achievementItem = document.createElement('div');
      achievementItem.className = 'card-achievement-item';
      achievementItem.textContent = achievement;
      achievementItem.title = achievement;
      achievementItem.setAttribute('aria-label', achievement);
      achievements.appendChild(achievementItem);
    })

    card.appendChild(header);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(achievements);

    containerCards.appendChild(card);
  });
}

onLanguageChange((newLanguage) => {
  const containerCards = document.querySelector('#experience > .experience-cards-container');
  containerCards.innerHTML = ''; // Limpa os cards existentes
  initCardsExperience(newLanguage);
})