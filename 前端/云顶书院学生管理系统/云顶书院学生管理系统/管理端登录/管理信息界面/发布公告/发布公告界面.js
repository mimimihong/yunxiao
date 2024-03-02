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
    axios({
        url: ''
            method: 'post'
            data{
        后端。。=title
        =content
    }
        }).then((result) => {
        后.。。=data
        alert('发布成功')
    }).catch(
        alert('404 NOT FOUNT')
    )
}