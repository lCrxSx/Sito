const toggleBtn = document.querySelector('.toggle_btn')
const menu = document.querySelector('.menu')
const links = document.querySelectorAll('.links a')

toggleBtn.addEventListener('click',( )=>{
    menu.classList.toggle('open')
    toggleBtn.classList.toggle('open')
})

links.forEach(link =>{
link.addEventListener('click', ()=>{
    //first remove all active classes
    links.forEach(link => link.classList.remove('active'))
    link.classList.add('active')
    menuClose()
    })
})

function menuClose(){
    menu.classList.remove('open')
    toggleBtn.classList.toggle.remove('open')
}