document.querySelector('.admin_login').addEventListener('click', function () {
    let inputEmail = document.querySelector('.iinput').value;
    let inputPassword = document.querySelector('.pinput').value;

    // 发送登录请求
    axios({
        url: "http://wrgk8g.natappfree.cc/auth-serve/student/loginPass",
        method: 'post',
        data: {
            userName: inputEmail,
            passWord: inputPassword
        },
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
        }
    })
        .then(function (response) {
            console.dir(response)
            // 处理登录成功的逻辑，根据服务器返回的结果进行跳转等操作
            const data = response.data;
            console.log(response,data);
            if (data.code === 200) {
                sessionStorage.setItem("inputEmail", inputEmail);
              sessionStorage.getItem("inputEmail");
                console.log(localStorage.getItem("inputEmail"))
                location.href = '管理信息界面/管理信息界面.html';
            } else {
                alert(data.message); // 在页面上显示登录失败的信息
            }
        })
        .catch(function (error) {
            // 处理登录失败的逻辑，比如网络错误等
            console.log(data.message);
        });
});
