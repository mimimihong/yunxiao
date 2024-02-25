var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}
let input = document.querySelector("input");
input.addEventListener('focus', function
    () {
    input.value = ""
})