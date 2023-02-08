const SearchButton = document.querySelector('.header__container .right .search .button');
const Input = document.querySelector('.header__container .right .search .field');
let searchIs = false;

SearchButton.addEventListener('click', () => {
    if (!searchIs) {
        Input.style.display = 'block';
        searchIs = !searchIs;
    }
    else {
        Input.style.display = '';
        searchIs = !searchIs;
    }
})