
var groups = document.getElementsByClassName('group');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
console.log(groups.length);
function group() {
    for (var i = 0; i < groups.length; i++) {
        console.log('111')
        groups[i].onclick = function () {
            for (var j = 0; j < groups.length; j++) {
                groups[j].style.background = '#F4F0F0';
                groups[j].style.border = '1px solid #D9D9D9';
            }
            this.style.background = 'white';
            this.style.border = '2px solid #D9D9D9'
            console.log('222');
            third.style.display = 'none';
            console.log(i);
        }

    }

}

var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../学生信息界面.html";
}

/*const student_id = document.querySelector('.student')
const student_name = document.querySelector('.student_name')
const student_password = document.querySelector('.student_password')
const student_gender = document.querySelector('.student_gender')
const student_class = document.querySelector('.student_class')
const periods = document.querySelector('.periods')
const direction = document.querySelector('.direction')
const awards = document.querySelector('.awards')
const message = document.querySelector('.message1')*/

axios({
    url: '/queryNo',
    method: 'get',
    params:{
    id: document.querySelector('.student_id').value
}
}).then((response) =>{
    console.dir(response)
    const data = response.data;
    console.log(data);
    if (data.code === 200) {
        massage.innerHTML = `<tr>
        <td>学号/账号:</td>
        <td><input type="text" class="student_id" value=${data.studentNo}></td><br>
    </tr>
    <tr>
        <td>密码:</td>
        <td><input type="text" class="student_password" value=${ data.passWord }></td><br>
    </tr>
    <tr>
        <td>姓名:</td>
        <td><input type="text" class="student_name" value=${ data.userName }></td><br>
    </tr>
    <tr>
        <td>性别:</td>
        <td><input type="text" class="student_gender" value=${data.sex}></td><br>
    </tr>
    <tr>
        <td>学院和班级:</td>
        <td><input type="text" class="student_class" value=${data.duringTime}></td><br>
    </tr>
    <tr>
        <td>期数:</td>
        <td><input type="text" class="periods" value=${data.duringTime}></td><br>
    </tr>
    <tr>
        <td>方向:</td>
        <td><input type="text" class="direction" value=${ data.direction }></td><br>
    </tr>
    <tr>
        <td>获奖经历:</td>
        <td><textarea name="" id="" cols="22" rows="3" class="awards" value=${ data.awardInfo }
        ></textarea></td>
    </tr>`
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
    });