var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}
let input = document.querySelector("input");
input.addEventListener('focus', function
    () {
    input.value = ""
})
/*和后端接口*/
function submitContent() {
    // 获取文本框内容
    var title = document.querySelector(".title").value;
    var content = document.getElementById("content").value;

    // 发送数据到后端
    axios.post(" ", { content: content })
        .then(response => console.log(response))
        .catch(error => console.error(error));
}