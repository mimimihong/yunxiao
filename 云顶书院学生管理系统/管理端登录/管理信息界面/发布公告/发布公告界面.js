var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}
/*和后端接口*/
function submitContent() {
    // 获取文本框内容
    var title = document.querySelector(".title").value;
    var content = document.getElementById("content").value;

    // 发送数据到后端
    axios({
        url: 'https://577b-211-93-248-152.ngrok-free.app/auth-serve/student/add',
            method: 'post',
            data:{
                content
    }
        }).then((result) => {
            const data = result.data;
            if (data.code === 200) {
                alert('发布成功');
              } else {
                alert(data.message); 
              }

    }).catch(
        alert('404 NOT FOUNT')
    )
}