const Menu = document.querySelector('.header__container .left .navigation');
const Button = document.querySelector('.header__container .right .menu-btn');
const Header = document.querySelector('header');

let is = false;

Button.addEventListener('click', () => {
    if (!is) {
        Header.style.height = '100vh';
        Menu.style.display = 'flex';
        Menu.style.top = 100+'px';
        // Menu.style.width = 100+'vw';
        Menu.style.flexDirection = 'column';
        Menu.style.justifyContent = 'start';
        Menu.style.textAlign = 'start';
        is = !is;
    }
    else {
        Header.style.height = '';
        Menu.style.display = '';
        Menu.style.flexDirection = '';
        Menu.style.justifyContent = '';
        Menu.style.textAlign = '';
        is = !is;
    }
})