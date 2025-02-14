const Jeans = document.querySelector('.link-jeans');
const Menu = document.querySelector('.sub-menu');
const MenuLink = document.querySelector('.selected');
console.log(MenuLink)
Jeans.addEventListener('click', function(e){
    Menu.classList.toggle('show'); 
    MenuLink.classList.toggle('active');
    e.preventDefault(); // prevent default link behavior to open in new tab
})