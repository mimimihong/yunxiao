data = [{
    title: "python学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OI.jpg"
}, { title: "java学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C.jpg" }, { title: "ps学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C%20(3).jpg" }, { title: "js学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C%20(2).jpg" }, { title: "c++学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/OIP-C%20(1).jpg" }, { title: "c语言学习资料", img: "https://flowermooon.oss-cn-beijing.aliyuncs.com/download.jpg" }]
//临时使用
const res = axios.get("")
    .then(function (response) {
        data = response.data;
    })
    
var img = document.getElementsByClassName("img");
var resources = document.getElementsByClassName("resources");
var left = document.getElementsByClassName("left");
var right = document.getElementsByClassName("right");
let i = 0;
let j = 0;
for (i = 0; i < 6; i++) {
    img[i].children[0].src = data[i + j].img;//之后改成后端Jason里面的图片
    console.dir(img[i]);
    resources[i].children[1].innerHTML = data[i + j].title;
}
img[0].onclick = function () {
    localStorage.setItem("key", 0);
    location.href = "./学习资料分页面/学习资料分页面.html";
}
img[1].onclick = function () {
    localStorage.setItem("key", 1);
    location.href = "./学习资料分页面/学习资料分页面.html";
}
img[2].onclick = function () {
    localStorage.setItem("key", 2);
    location.href = "./学习资料分页面/学习资料分页面.html";
}
img[3].onclick = function () {
    localStorage.setItem("key", 3);;
    location.href = "./学习资料分页面/学习资料分页面.html";
}
img[4].onclick = function () {
    localStorage.setItem("key", 4);
    location.href = "./学习资料分页面/学习资料分页面.html";
}
img[5].onclick = function () {
    localStorage.setItem("key", 5);
    location.href = "./学习资料分页面/学习资料分页面.html";
}
right[0].onclick = function () {
    let i = 0;
    j = j + 6;
    for (i = 0; i < 6; i++) {
        img[i].children[0].src = data[i + j].img;//之后改成后端Jason里面的图片
        console.dir(img[i]);
        resources[i].children[1].innerHTML = data[i + j].title;
    }
}
left[0].onclick = function () {
    let i = 0;
    if (j > 0) {
        j = j + 6;
    }
    for (i = 0; i < 6; i++) {
        img[i].children[0].src = data[i + j].img;//之后改成后端Jason里面的图片
        console.dir(img[i]);
        resources[i].children[1].innerHTML = data[i + j].title;
    }
}
var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}