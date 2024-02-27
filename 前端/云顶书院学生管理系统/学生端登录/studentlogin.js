 
    let eye = document.querySelector('.eye');
    eye.addEventListener('click', function () {         /*密码眼睛设置*/
        let password = document.getElementById("password");
        password.type = (password.type === 'password') ? 'text' : 'password';
    })
    //登陆验证
    const res = axios.get(" ")
    .then(function (response) {
        data = response.data;
    }) 

document.querySelector('student_login').addEventListener('click',
function () {
    let inputEmail = document.querySelector('student_id').value;
    let inputPassword = document.querySelector('student_password').value;

    for (let i = 0; i < data.length; i++) {
        let inf = data[i];
        if (reg.test(inputEmail)) {
            if (inf.email === inputEmail && inf.password === inputPassword) {

            }
            else {
                document.getElementById('result').textContent = '账号或密码错误';
            }

        }

    }

});   