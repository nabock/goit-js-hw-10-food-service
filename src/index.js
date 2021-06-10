
//импорт данных----------------------------------------------

import menuCardTmpl from './templates/menu-card.hbs'
import menuCards from './menu.json'

// массив ссылок----------------------------------------------
const refs = {
    body: document.body,
    menu: document.querySelector('.js-menu'),
    checkBox: document.querySelector('#theme-switch-toggle')
   
}
// console.log(refs.checkBox)
console.log(refs.body)
//массив тем -------------------------------------------------

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// console.log(Theme.LIGHT)
// console.log(Theme.DARK)
//создание меню ---------------------------------------------

const menuList = createMenuCards(menuCards)
refs.menu.insertAdjacentHTML('beforeend',menuList)

function createMenuCards(menuCards) {
    return menuCards.map(menuCardTmpl).join('');
};
// переключение тем------------------------------------------


refs.checkBox.addEventListener('change', onChange)
refs.body.classList.add("light-theme")

function onChange() {

  // console.log("Состояние чекбокса изменнено")
  
  refs.body.classList.toggle("dark-theme")
  refs.body.classList.toggle("light-theme")

}