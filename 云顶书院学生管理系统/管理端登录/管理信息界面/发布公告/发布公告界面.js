var back = document.getElementsByClassName("back");
back[0].onclick = function () {
    location.href = "../管理信息界面.html";
}
/*和后端接口*/



submitContent =document.getElementById("submitContent")
submitContent.onclick = function() {
    // 获取文本框内容
    var content = document.getElementById("content").value;

    // 发送数据到后端
    axios({
        url: 'http://jmyj75.natappfree.cc/auth-serve/publish/add',
            method: 'post',
        data: {
                content: content,
    }
        }).then((result) => {
            const data = result.data;
            if (data.code === 200) {
                alert('发布成功');
              } else {
                alert(data.message); 
              }

    })
}

