var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}
function registerStudent() {
    const student_id = document.querySelector('.student_id').value;

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
      axios({
        url:''
        method: 'post'
        data:{
          student_id
        }
        
      }).then((result) => {
        后.。。=data
        alert('注册成功')
    }).catch(
        alert('404 NOT FOUNT')
    )
  }
