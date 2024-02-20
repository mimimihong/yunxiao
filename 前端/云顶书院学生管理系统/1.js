document.addEventListener("DOMContentLoaded", function () {
    let eye = document.querySelector('.eye');
    eye.addEventListener('click', function () {
        let password = document.getElementById("password");
        password.type = (password.type === 'password') ? 'text' : 'password';
    })
})


