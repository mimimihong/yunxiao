// 点击检验两次密码是否相同
function check() {
    var new1 = document.getElementById('pwd').value;
    var new2 = document.getElementById('sure').value;
    var error = document.getElementById('error');
    error.innerHTML = '';
    if (new1 !== new2) {
        console.log('111');
        error.innerHTML = '两次密码不相同';
    } else {
        error.innerHTML = '修改成功';
        console.log('222');
        console.log(new1);
        console.log(new2);
    }
    axios({
        method: 'put',
        url: 'https://577b-211-93-248-152.ngrok-free.app/auth-serve/student/editStudent',
        params:{
        id: document.querySelector('.student_id').value
    }
        data: {
        passWord: pwd
    }
    }).then(function (response) {
        const data = response.data.passWord;
        console.log(data);
        if(data.code === 200) {
           console.log('修改成功')
        } else {
            console.log('修改失败')
        }
    })
    .catch(function (error) {
        console.error(error);
        console.log("修改失败，请稍后重试！");
    });
}
var back = document.getElementsByClassName("back");
back[0].onclick = function () {
  location.href = "../学生信息界面.html";
}
