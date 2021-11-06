(() => {
  const $menuToggler = document.querySelector('.js-nav-menu-toggler');
  const $navContainer = document.querySelector('.js-nav-container')

  $menuToggler.addEventListener('click', () => {
    $menuToggler.classList.toggle('ham--active');
    $navContainer.classList.toggle('nav__container--expanded');
  });

  var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : true,
    focus  : 'center',
    pagination: false,
    arrows: false,
    autoWidth: false,
    fixedWidth: 290
  } );
  
  splide.mount();
})();