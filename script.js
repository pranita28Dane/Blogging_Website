const hamburger = document.getElementById('hamburger');
const navHorizontal = document.getElementById('navbar');
const close = document.getElementById('close');


hamburger.addEventListener('click',() => {
    navHorizontal.classList.add('show');
    navHorizontal.classList.remove('hide');

});

close.addEventListener('click',() => {
    navHorizontal.classList.add('hide');
    navHorizontal.classList.remove('show');
})
window.onscroll = function(){
    navHorizontal.classList.add('hide');
    navHorizontal.classList.remove('show');
}
const views=document.getElementById('views');
const users=document.getElementById('users');

//update views count
const updateViews = () =>{
    fetch('https://api.countapi.xyz/update/blogging/views?amount=1')
    .then(res=>res.json())
    .then(res=>{
        views.innerHTML=res.value;
    })
}

updateViews();

//update users count
const updateUsers = () =>{
    fetch('https://api.countapi.xyz/update/blogging/views?amount=-9')
    .then(res=>res.json())
    .then(res=>{
        users.innerHTML=res.value;
    })
}

updateUsers();