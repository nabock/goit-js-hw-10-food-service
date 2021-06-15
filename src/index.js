
//импорт данных----------------------------------------------

import menuCardTmpl from './templates/menu-card.hbs'
import menuCards from './menu.json'

// массив ссылок----------------------------------------------

const refs = {
    body: document.body,
    menu: document.querySelector('.js-menu'),
    checkBox: document.querySelector('#theme-switch-toggle') 
}

//массив тем -------------------------------------------------

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//создание меню ---------------------------------------------

const menuList = createMenuCards(menuCards)
refs.menu.insertAdjacentHTML('beforeend',menuList)

function createMenuCards(menuCards) {
    return menuCards.map(menuCardTmpl).join('');
};

// переключение тем------------------------------------------

refs.checkBox.addEventListener('change', onChange)

if (!localStorage.getItem('thema')) {
  refs.body.classList.add(Theme.LIGHT)
  localStorage.setItem('thema', refs.body.classList)
}

refs.body.className = localStorage.getItem('thema')

function onChange() {
  
  refs.body.classList.toggle(Theme.DARK)
  refs.body.classList.toggle(Theme.LIGHT)

   return localStorage.setItem('thema',refs.body.classList)
}
// проверка кнопки на checked----------------------
const currentClass = localStorage.getItem('thema')
if (currentClass === Theme.DARK) {
  refs.checkBox.setAttribute("checked", true)
} else {
  refs.checkBox.removeAttribute("checked")
};
