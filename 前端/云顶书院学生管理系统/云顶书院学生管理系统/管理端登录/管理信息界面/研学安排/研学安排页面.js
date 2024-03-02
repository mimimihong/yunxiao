data = "https://flowermooon.oss-cn-beijing.aliyuncs.com/%E7%A0%94%E5%AD%A6%E5%AE%89%E6%8E%92.png";

const res = axios.get("")
    .then(function (response) {
        data = response.data;
    })

var date = document.getElementsByClassName("date");
var now = new Date();
var month = now.getMonth();
var day = now.getDate();
console.dir(now);
date[0].innerHTML = month + "." + day + "研学安排表";

var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}

var img = document.getElementById("img");
img.src = data;
