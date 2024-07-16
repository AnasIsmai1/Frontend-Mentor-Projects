const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const pass = document.querySelector('#password');
const email = document.querySelector('#email');
const form  = document.getElementById('form');
const submit = document.getElementById('submit');

function checkInput(name, len) {
    const errId = name.getAttribute('data-id');
    var err = document.querySelectorAll(`#${errId}`);
    if(name == email) {
        var regex = /^([a-zA-Z0-9\._-]+)@([a-z]{2,8}).([a-z]{2,4})$/
        if(name.value == "" || !regex.test(email.value)) {
                name.classList.add('miss');
                err.forEach(e => {
                    e.classList.add('show');
                })
        }else {
            name.classList.remove('miss');
            err.forEach(e => {
                e.classList.remove('show');
            })
        }
    }
    else if(name.value == "" || name.value.length < len) {
        name.classList.add('miss');
        err.forEach(e => {
            e.classList.add('show');
            })
    }else {
            name.classList.remove('miss');
            err.forEach(e => {
                e.classList.remove('show');
            })
    }
    }


firstName.addEventListener('input', function(){
    checkInput(firstName, 3)}
);
lastName.addEventListener('input', function(){
    checkInput(lastName, 3)
} 
);
email.addEventListener('input', function(){
    checkInput(email, 8)
});
pass.addEventListener('input', function(){

    checkInput(pass, 8)
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    submit.addEventListener('click', function(){
    
    })
    
})
