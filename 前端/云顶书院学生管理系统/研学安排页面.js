data = [
    [{ name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }],
    [{ name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }],
    [{ name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }],
    [{ name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }, { name: "张三", direction: "全栈", class: "软件2325" }]
];


var date = document.getElementsByClassName("date");
var now = new Date();
var month = now.getMonth();
var day = now.getDate();
console.dir(now);
date[0].innerHTML = month + "." + day + "研学安排表";
var boxs = document.getElementsByClassName("box");
let i = 0;
let j = 0;
for (i = 0; i < 4; i++) {
    for (j = 0; j < data[i].length; j++) {
        var div = document.createElement("div");
        div.innerHTML = data[i][j].direction + "-" + data[i][j].class + "-" + data[i][j].name;
        boxs[i].appendChild(div);
    }
}
var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "学生信息界面.html";
}
