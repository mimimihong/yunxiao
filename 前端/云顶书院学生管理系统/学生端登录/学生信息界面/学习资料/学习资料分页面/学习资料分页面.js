data = [{
    title: "python学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OI.jpg", author: "张三", from: "哔哩大学a教授", introduce: "一个关于python学习的视频", url:"https://www.bilibili.com/"
}, { title: "java学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C.jpg" }, { title: "ps学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C%20(3).jpg" }, { title: "js学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C%20(2).jpg" }, { title: "c++学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C%20(1).jpg" }, { title: "c语言学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/download.jpg" }]
//临时使用
key = localStorage.getItem("key");
var img = document.getElementsByClassName("img");
img[0].querySelector("img").src = data[key].img;
var author = document.getElementById("author");
author.innerHTML = "&nbsp&nbsp&nbsp&nbsp" + data[key].author;
var from = document.getElementById("from");
from.innerHTML = "&nbsp&nbsp&nbsp&nbsp" + data[key].from;
var introduce = document.getElementById("introduce");
introduce.innerHTML = "&nbsp&nbsp&nbsp&nbsp" + data[key].introduce;
img[0].onclick = function () {
    location.href = data[key].url;

}
var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../学习资料主页面.html";
}