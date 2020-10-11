import menuItemTpl from './templates/menu_item.hbs';
import menuItems from './menu.json';
import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const menuContainer = document.querySelector('.js-menu');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.body;
const menuMarkup = createMenuMarkup(menuItems);

function createMenuMarkup(menuItems) {
  return menuItems.map(menuItemTpl).join('');
  }

const selectedTheme = localStorage.getItem('Theme');
console.log(selectedTheme);
if (selectedTheme === null) {
    localStorage.setItem('Theme', Theme.LIGHT);
} 

if (selectedTheme === Theme.DARK){
    themeSwitchToggle.checked = true;
}

body.classList.add(selectedTheme);
  themeSwitchToggle.addEventListener('click', () => {
        if (themeSwitchToggle.checked === false) {
          // if (body.classList.contains(Theme.DARK)){
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.LIGHT);
      } else{
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK);
      }
  });

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
