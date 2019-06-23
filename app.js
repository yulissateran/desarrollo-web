const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burgerMenu');

const addActive = ()=> menu.classList.toggle('is-active');
burgerButton.addEventListener('click', addActive);

const validation = (event) => {
  if (event.matches) {
    burgerButton.addEventListener('click', addActive)
  } else {
    burgerButton.removeEventListener('click', addActive)
  }
}
validation(ipad)
ipad.addListener(validation)

