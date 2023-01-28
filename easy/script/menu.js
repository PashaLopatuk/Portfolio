const ButtonClass = '.header__container .linedown .menu';
const Button = document.querySelector(ButtonClass);
const MenuClass = '.header__container .lineup .menu .list ';
const Menu = document.querySelector(MenuClass);
let is = false;

Button.addEventListener('click', () => {
    console.log('R')

    if (!is) {
        Menu.style.display = 'flex';
        is = !is;
    }
    else {
        Menu.style.display = 'none';
        is = !is;
    }
})