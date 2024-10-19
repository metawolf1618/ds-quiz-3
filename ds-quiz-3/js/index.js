  

 let toggleBTN = document.querySelector('.toggle-btn')
 let faBars = document.querySelector('.fa-bars')
 let xmark = document.querySelector('.fa-xmark')
 let nav = document.querySelector('.nav')

 toggleBTN.addEventListener('click', ()=> {



       faBars.classList.toggle('hide')
       xmark.classList.toggle('hide')
       nav.classList.toggle('nav')



 })