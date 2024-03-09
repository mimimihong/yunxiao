document.querySelector('.student_login').addEventListener('click', function () {
    let inputEmail = document.querySelector('.student_id input').value;
    let inputPassword = document.querySelector('.student_password input').value;

    // 发送登录请求
    axios.post("http://jmyj75.natappfree.cc/auth-serve/loginPass", {
        userName: inputEmail,
        passWord: inputPassword
    })
    .then(function (response) {
        // 处理登录成功的逻辑，根据服务器返回的结果进行跳转等操作
        const data = response.data;
        console.log(data);
        if(data.code === 200) {
            window.location.href = './学生信息界面/学生信息界面.html';
        } else {
            alert(data.message); // 在页面上显示登录失败的信息
        }
    })
    .catch(function (error) {
        // 处理登录失败的逻辑，比如网络错误等
        console.error(error);
        alert("登录失败，请稍后重试！");
    });
});