var back = document.getElementsByClassName("back");
back[0].onclick = function () {
  location.href = "../管理信息界面.html";
}


  /*  data = [
        { name: "张三", stuId: "12345678", direction: "全栈", period: "八期" }, { name: "李四", stuId: "56789101", direction: "全栈", period: "八期" }, { name: "王五", stuId: "87654321", direction: "全栈", period: "八期" }
    ]

    // 使用 Axios 发送 POST 请求
    axios.post('#', data)
      .then(response => {
        if (response.status === 200) {
          alert('Student registered successfully');
        } else {
          alert('Error registering student');
        }
      })
      .catch(error => console.error('Error:', error));*/
       document.querySelector('.student_quit').addEventListener('click', () => {
    const input = document.querySelector('.input').value;
    axios({
      url: 'https://577b-211-93-248-152.ngrok-free.app/auth-serve/student/addStudent',
          method: 'post',
          data: {
        student: input                         /*是学生名字还是学号*/
      }

    }).then(function (response) {
      // 处理注册成功的逻辑，根据服务器返回的结果进行跳转等操作
      const data = response.data;
      console.log(data);
      if (data.code === 200) {
        alert('新增成功');
      } else {
        alert(data.message); // 在页面上显示注册失败的信息
      }
    }).catch(function (error) {
        // 处理登录失败的逻辑，比如网络错误等
        console.error(error);
        alert("注册失败，请稍后重试！");
      });

  })
