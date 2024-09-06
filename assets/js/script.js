function openMenu() {
    let navigationLinks = document.querySelectorAll('.navigation-bar-link');
    let openMenu = document.querySelector('#openMenu');

    if (openMenu.src.includes('menu_open.png')) {
        openMenu.src = "./assets/img/menu_close.png";
    } else {
      openMenu.src = "./assets/img/menu_open.png";
    }
  
    navigationLinks.forEach(navigationLink => {
      navigationLink.classList.toggle('show');
    });
}