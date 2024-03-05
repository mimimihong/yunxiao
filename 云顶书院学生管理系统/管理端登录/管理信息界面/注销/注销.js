/*data = [
    { name: "张三", stuId: "12345678", direction: "全栈", period: "八期" }, { name: "李四", stuId: "56789101", direction: "全栈", period: "八期" }, { name: "王五", stuId: "87654321", direction: "全栈", period: "八期" }
]

let i = 0;
for (i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    all[0].appendChild(div);
    var text = document.createElement("div");
    div.appendChild(text);
    var detail = document.createElement("button");
    div.appendChild(detail);
    detail.innerHTML = "注销";
    detail.onclick = function () {
        //从数据库删除学生信息函数
        axios({
            url:''
            method:'delete'
            data:{
                student:`${data.student}
                
                `
            }
        })
    }
    text.innerHTML = "姓名:" + data[i].name + "&nbsp&nbsp&nbsp&nbsp学号:" + data[i].stuId + "&nbsp&nbsp&nbsp&nbsp方向:" + data[i].direction + "&nbsp&nbsp&nbsp&nbsp期数:" + data[i].period;

}*/

/*var submmit = document.getElementById("submmit");
console.dir(submmit);
submmit.onclick = function () {
    var search = document.getElementById("search");
    var stuId = search.value;
    console.log(stuId);
    all[0].innerHTML = "";
    for (i = 0; i < data.length; i++) {
        if (data[i].stuId == stuId) {
            var div = document.createElement("div");
            all[0].appendChild(div);
            var text = document.createElement("div");
            div.appendChild(text);
            var detail = document.createElement("button");
            div.appendChild(detail);
            detail.innerHTML = "注销";
            detail.onclick = function deleteStudent() {            /*注销*/
/* window.onload = function() {             
     axios.get(`/students/${studentId}`)
       .then(response => {
         const student = response.data;
         document.getElementById('name').textContent = student.name;
         document.getElementById('age').textContent = student.age;
         document.getElementById('gender').textContent = student.gender;
       })
       .catch(error => console.error('Error:', error));
   };*/
/*    axios.delete(`/api/students/${studentId}`)
     .then(response => {
         if (response.status === 200) {
             alert('Student deleted successfully');
             window.location.reload(); // 刷新页面以更新学生列表
         } else {
             alert('Error deleting student');
         }
     })
     .catch(error => console.error('Error:', error));
}
text.innerHTML = "姓名:" + data[i].name + "&nbsp&nbsp&nbsp&nbsp学号:" + data[i].stuId + "&nbsp&nbsp&nbsp&nbsp方向:" + data[i].direction + "&nbsp&nbsp&nbsp&nbsp期数:" + data[i].period;
i = data.length;
}
if (i == data.length - 1) {
var div = document.createElement("div");
div.innerHTML = "查无此人";
all[0].appendChild(div);

}
}
}*/
let id = document.querySelector('.student_id')          /*  111111*/
console.log(window.location.href);
var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}
var all = document.getElementsByClassName("all");
axios({                                                         /*显示所有学生信息*/
    url: 'https://577b-211-93-248-152.ngrok-free.app/auth-serve/student/queryList',
    method: 'get'
}).then((result) => {
    let student = result.data.student
    let theLi = list.map(student => `<li>&nbsp;${student.userName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.studentNo} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.direction} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.duringTime}
    <button class=''>注销</button>`).join('')
    document.querySelector('li').innerHTML = theLi
}).catch(() => { console.log('error') })

document.querySelector('.button').addEventListener('click', () => {                     /*注销*/
    axios({
        url: `http://localhost:11000/auth-serve/student/queryNo?id=${id}`,
        method: 'delete'
    }).then((result) => {
        alert("删除成功请刷新查看")
    }).catch((error) => { console.log("error") })
})
document.getElementById('submit').addEventListener('click', () => {                     /*查询*/
    axios({
        url: `http://localhost:11000/auth-serve/student/queryNo?id=${id}`,
        method: 'get'
    }).then((result) => {
        let student = result.data.student
        if(student){
            let theLi = `<li>&nbsp;${student.userName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.studentNo} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.direction} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.duringTime}
        <button class=''>注销</button>`
        document.querySelector('li').innerHTML = theLi
        }else{
            alert("查无此人")
        }
    }).catch(() => { console.log('error') })
})
