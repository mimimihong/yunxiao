 // 打开模态框
 document.addEventListener("DOMContentLoaded", function () {
    let login = document.querySelector('.button_login');
    login.addEventListener('click',             /*点击登录显示出页面*/
        function () {
            document.querySelector(".login").style.display = "flex";
            document.querySelector(".button_login").style.color = " rgb(165, 211, 255)";
        })
    let eye = document.querySelector('.eye');
    eye.addEventListener('click', function () {         /*密码眼睛设置*/
        let password = document.getElementById("password");
        password.type = (password.type === 'password') ? 'text' : 'password';
    })
})