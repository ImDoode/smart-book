(() => {
  const $menuToggler = document.querySelector('.js-nav-menu-toggler');
  const $navContainer = document.querySelector('.js-nav-container')

  $menuToggler.addEventListener('click', () => {
    $menuToggler.classList.toggle('ham--active');
    $navContainer.classList.toggle('nav__container--expanded');
  });

  document.querySelectorAll('.js-smooth-scroll').forEach(item => {
    item.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.attributes.href.value).scrollIntoView({
        behavior: 'smooth'
      });
    })
    
  })

  var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : true,
    focus  : 'center',
    arrows: false,
    autoWidth: false,
    fixedWidth: 290
  } );
  
  splide.mount();

  splide.on( 'click', function (e) {
    splide.go(e.index);
  } );
})();