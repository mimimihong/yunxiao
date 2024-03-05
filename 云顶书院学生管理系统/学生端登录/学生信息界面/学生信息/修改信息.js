let massage = document.querySelector('.message1')
axios({
    url: 'https://577b-211-93-248-152.ngrok-free.app/auth-serve/student/addStudent',
    method: 'get',
    params:{
    id: document.querySelector('.student_id').value
}
}).then((response)=> {
    const data = response.data;
    console.log(data);
    if (data.code === 200) {
        massage.innerHTML = `学号/账号:<input type="text" class="student_id" value=${data.studentNo}><br>
        密码:<input type="text" class="student_password" value=${ data.passWord } ><br>
        姓名:<input type="text" class="student_name" value=${ data.userName } ><br>
        性别:<input type="text" class="student_gender" value=${ data.sex } ><br>
        学院和班级:<input type="text" class="student_class" value=${ data.academyDes }><br>
        期数:<input type="text" class="periods" value=${ data.duringTime } ><br>
        方向:<input type="text" class="direction" value=${ data.direction }><br>
        获奖经历:<input type="text" class="awards" value=${ data.awardInfo }><br>
        <button id="change">确认</button>`
        /*document.querySelector('.student_id').innerHTML = data.studentNo
        document.querySelector('.student_password').innerHTML = data.passWord
        document.querySelector('.student_name').innerHTML = data.userName
        document.querySelector('.student_gender').innerHTML = data.sex
        document.querySelector('.student_class').innerHTML = data.academyDes
        document.querySelector('.periods').innerHTML = data.duringTime
        document.querySelector('.direction').innerHTML = data.direction
        document.querySelector('.awards').innerHTML = data.awardInfo*/
    } else {
        alert(data.message);
    }
})
    .catch(function (error) {
        // 处理登录失败的逻辑，比如网络错误等
        console.error(error);
        alert("获取失败，请稍后重试！");
    });
document.getElementById('change').addEventListener('click', () => {
    axios({
        url: 'https://577b-211-93-248-152.ngrok-free.app/auth-serve/student/editStudent',
        method: 'put',
        params:{
        id: student_id.value
    }
       /* data: {
            data.studentNo : document.querySelector('.student_id').value 
            data.passWord: document.querySelector('.student_password').value  
            data.userName: document.querySelector('.student_name').value 
            data.sex: document.querySelector('.student_gender').value 
            data.academyDes: document.querySelector('.student_class').value 
            data.duringTime: document.querySelector('.periods').value 
            data.direction: document.querySelector('.direction').value 
            data.awardInfo: document.querySelector('.awards').value
    }*/
    }).then(() => {
        massage.innerHTML = `学号/账号:<input type="text" class="student_id" value=${data.studentNo}><br>
        密码:<input type="text" class="student_password" value=${ data.passWord } ><br>
        姓名:<input type="text" class="student_name" value=${ data.userName } ><br>
        性别:<input type="text" class="student_gender" value=${ data.sex } ><br>
        学院和班级:<input type="text" class="student_class" value=${ data.academyDes }><br>
        期数:<input type="text" class="periods" value=${ data.duringTime } ><br>
        方向:<input type="text" class="direction" value=${ data.direction }><br>
        获奖经历:<input type="text" class="awards" value=${ data.awardInfo }><br>
        <button id="change">确认</button>`
        alert("修改成功请刷新查看")
    }).catch(() => {
        console.error("Error")
        alert("修改失败，请稍后重试！");
    });
})
var back = document.getElementsByClassName("back");
back[0].onclick = function () {
  location.href = "../管理信息界面.html";
}
