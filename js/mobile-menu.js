(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile'),
    closeMenuBtn: document.querySelector('.mobile-close'),
    menu: document.querySelector('.mobil-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();