


const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

//toggle.addEventListener('clik', () => nav.classList.toggle('active'))
let viewPassword=document.getElementById('viewPassword');
let password=document.getElementById('password');

let click = false;

viewPassword.addEventListener('click', (e)=>{
    if(!click){
        password.type = 'text'
        click = true
    }else if(click){
        password.type = 'password'
        click = false
    }
})