$('.ui.sidebar')
  .sidebar({
    transition: 'overlay',
  })
  .sidebar('attach events', '#mobile-menu-toggler');

$('.ui.accordion').accordion();

$('.ui.dropdown').dropdown();
