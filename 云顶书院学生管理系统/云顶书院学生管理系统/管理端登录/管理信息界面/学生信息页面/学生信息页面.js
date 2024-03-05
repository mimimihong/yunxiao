data = [
    { name: "张三", stuId: "12345678", direction: "全栈", period: "八期" }, { name: "李四", stuId: "56789101", direction: "全栈", period: "八期" }, { name: "王五", stuId: "87654321", direction: "全栈", period: "八期" }
]
const res = axios.get("")
    .then(function (response) {
        data = response.data;
    })
var all = document.getElementsByClassName("all");
let i = 0;
for (i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    all[0].appendChild(div);
    var text = document.createElement("div");
    div.appendChild(text);
    var detail = document.createElement("button");
    div.appendChild(detail);
    detail.innerHTML = "详细信息";
    detail.onclick = function () {
        location.href = "../../../学生端登录/学生信息界面/学生信息/基本信息.html";//之后换成学生信息页面..
    }
    text.innerHTML = "姓名:" + data[i].name + "&nbsp&nbsp&nbsp&nbsp学号:" + data[i].stuId + "&nbsp&nbsp&nbsp&nbsp方向:" + data[i].direction + "&nbsp&nbsp&nbsp&nbsp期数:" + data[i].period;

}

var submmit = document.getElementById("submmit");
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
            detail.innerHTML = "详细信息";
            detail.onclick = function () {
                location.href = "../../../学生端登录/学生信息界面/学生信息/基本信息.html";

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
}
var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}