 
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
    let inputEmail = document.querySelector('student_id').value;
    let inputPassword = document.querySelector('student_password').value;
    document.querySelector('student_login').addEventListener('click',
        function () {
            axios({
                url: ''
            params: {
                    //后端
                }
            data: {
                    admin_id,
                    admin_password
                }.then((result) => {
                    后端.map(student => {
                        if (student === inputEmail) {
                            后端.map(password => {
                                if (password === inputPassword) {
                                    window.location.href = '学生。。。'
                                }
                            })
                           }
                        else {
                            alert('账号或密码错误');
                        }
                    })
                }).catch(alert('404 NOT FOUNT'))
    
            })
        }); 