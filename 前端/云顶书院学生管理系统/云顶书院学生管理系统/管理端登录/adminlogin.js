
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
                        //让输入的数据和数据库里的比较
document.querySelector('admin_login').addEventListener('click',
    function () {
        let inputEmail = document.querySelector('admin_id').value;
        let inputPassword = document.querySelector('admin_password').value;

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
