const Jeans = document.querySelector('.link-jeans');
const Menu = document.querySelector('.sub-menu');
const MenuLink = document.querySelector('.selected');
const Bars = document.querySelector('.icons');
const SideBar = document.querySelector('#nav');
const overlay = document.querySelector('#overlay');
const closeBars  = document.querySelector('.close');
Jeans.addEventListener('click', function(e){
    Menu.classList.toggle('show'); 
    MenuLink.classList.toggle('active');
    e.preventDefault(); // prevent default link behavior to open in new tab
})

Bars.addEventListener('click', function(){
    SideBar.classList.toggle('navbars'); 
    overlay.style.display = 'block';
    
});
overlay.addEventListener('click', function(){
    overlay.style.display = 'none';
    SideBar.classList.toggle('navbars'); 
});
closeBars.addEventListener('click', function(){
    overlay.style.display = 'none';
    SideBar.classList.toggle('navbars');
});

 