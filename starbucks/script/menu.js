let is = false

const header = document.querySelector('.header__container');
const button = document.querySelector('.header__case .menu .button');
const headerCase = document.querySelector('.header__case');
const menuList = document.querySelector('.header__case .menu .list');

const px = (x) => {
    return `${x}px`
}

document.querySelector('.header__case .menu .button').addEventListener('click', (e) => {
    
    if (!is) {
        button.style.backgroundColor = '#047044';
        button.style.color = '#fff';
        document.querySelector('.header__container').style.height = '15vh';
        document.querySelector('.header__container').style.marginTop = '2vh';
        header.style.borderRadius = px(35)
        header.style.alignItems = 'start';
        headerCase.style.marginTop = px(15);
        document.querySelector('.header__container').style.boxShadow = '0px 10px 20px 0px rgba(0,0,0, 0.4);'
        
        menuList.style.display = 'flex';
        menuList.style.position = 'absolute';
        menuList.style.justifyContent = 'center';
        menuList.style.left = px(0);
        menuList.style.width = '100%';
        menuList.style.top = '14.5vh';
        menuList.style.fontSize = '4vw';
        "position: absolute;\njustify-self: center;\nleft: 60px;\nwidth: 100%;\ntop: 160px;"   
        
        is = !is;
    }
    else {
        
        button.style.backgroundColor = '#fff';
        button.style.color = '#047044';

        document.querySelector('.header__container').style.height = '80px';
        
        document.querySelector('.header__container').style.marginTop = px(20);
        header.style.borderRadius = '50px';
        header.style.alignItems = 'center';
        headerCase.style.marginTop = '0';

        menuList.style.display = '';
        menuList.style.position = '';
        menuList.style.left = 0;
        menuList.style.top = 0;
        // document.querySelector('.menu .list ').style.fontSize = '12vw'
        document.querySelector('.header__container').style.boxShadow = '0px 0px 0px 0px rgba(0,0,0, 0);'
        is = !is;
    }
    })