let Hambutton = document.querySelector('.hamburger')
console.log(Hambutton)
let ul = document.querySelector('.nav-bar')
console.log(ul)
let btn1 = document.querySelector('.H-btn')
let btn2 = document.querySelector('.A-btn')
let btn3 = document.querySelector('.C-btn')
let btn4 = document.querySelector('.B-btn')
let btn5 = document.querySelector('.button')

let home = document.querySelector('.home')
let about = document.querySelector('.about')
console.log(about)
let contact = document.querySelector('.contact')
let blog = document.querySelector('Blog')

console.log(btn5.scrollTop)
console.log(btn5.scrollLeft)

window.addEventListener('scroll', scrollit)

function scrollit() {
    if(window.pageYOffset > 100) {
        btn5.style.display = 'flex'
 }else{
    btn5.style.display = 'none'
}

}


function show() {
    ul.classList.toggle('show')
}
Hambutton.addEventListener('click', show)


function showhome() {
  window.scrollTo(0, 60)
  ul.classList.toggle('show') 
}

btn1.addEventListener('click', showhome)

function showabout() {
   window.scrollTo(0, 510) 
   ul.classList.toggle('show')
}

btn2.addEventListener('click', showabout)

function showcontact() {
    window.scrollTo(0 , 920)
    ul.classList.toggle('show')
    
    
}

btn3.addEventListener('click', showcontact)

function showblog() {
    window.scrollTo(0, 1320)
    ul.classList.toggle('show')
}

btn4.addEventListener('click', showblog)

function tothemoon() {
   window.scrollTo(0, 0)
}

btn5.addEventListener('click', tothemoon)

