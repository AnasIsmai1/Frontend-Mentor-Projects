const button = document.getElementById('share');
const popup = document.getElementById('popup');

button.addEventListener('click', function(){
    button.classList.toggle('active');
    popup.classList.toggle('active');
})