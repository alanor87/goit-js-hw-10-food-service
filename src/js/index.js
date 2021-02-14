import menuTemplate from '../templates/menu.hbs'
import '../styles.css';
import menuData from '../menu.json';
import './theme-toggle';

const menuRef = document.querySelector('.js-menu');

const menuMarkupRef = menuTemplate(menuData);

menuRef.insertAdjacentHTML('afterbegin', menuMarkupRef);


