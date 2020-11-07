const togleButton =document.getElementsByClassName('navbugger')[0]
const navbarlinks1=document.getElementsByClassName('navlinks1')[0]


togleButton.addEventListener('click', () =>  {
    navbarlinks1.classList.toggle('active')
    
});
