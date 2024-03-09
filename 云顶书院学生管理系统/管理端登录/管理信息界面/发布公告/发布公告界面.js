var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}
/*和后端接口*/
function submitContent() {
    // 获取文本框内容
    var content = document.getElementById("content").value;

    // 发送数据到后端
    axios({
        url: 'http://wrgk8g.natappfree.cc/auth-serve/publish/add',
        method: 'post',
        data: {
            content:'123456978'
        }
    }).then((result) => {
        const data = result.data;
        console.log(data);
        console.log('success')
        if (data.code === 500) {
            alert('发布成功');
        } else {
            alert(data.message);
        }

    }).catch(
        alert('404 NOT FOUNT')
    )
}
