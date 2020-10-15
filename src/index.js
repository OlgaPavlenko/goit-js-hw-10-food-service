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

let selectedTheme = localStorage.getItem('Theme');
console.log(selectedTheme);
if (selectedTheme === null) {
    localStorage.setItem('Theme', Theme.LIGHT);
    selectedTheme = Theme.LIGHT;
} 

if (selectedTheme === Theme.DARK){
    themeSwitchToggle.checked = true;
}


body.classList.add(selectedTheme); /*body.classList.add(selectedTheme || Theme.LIGHT); */

themeSwitchToggle.addEventListener('click', () => {
        if (!themeSwitchToggle.checked) 
        changeTheme(Theme.LIGHT);
        else
        changeTheme(Theme.DARK);
          // if (body.classList.contains(Theme.DARK)){
      //   body.classList.remove(Theme.DARK);
      //   body.classList.add(Theme.LIGHT);
      //   localStorage.setItem('Theme', Theme.LIGHT);
      // } else{
      //   body.classList.remove(Theme.LIGHT);
      //   body.classList.add(Theme.DARK);
      //   localStorage.setItem('Theme', Theme.DARK);
      // }
  });

  const changeTheme = (newTheme) => {
let oldTheme = '';

if (newTheme === Theme.LIGHT)
  oldTheme = Theme.DARK;
else
  oldTheme = Theme.LIGHT;

        body.classList.remove(oldTheme);
        body.classList.add(newTheme);
        localStorage.setItem('Theme', newTheme);
  }

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
