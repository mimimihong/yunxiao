var back = document.getElementsByClassName("back");
        back[0].onclick = function () {
            location.href = "../学生信息界面.html";
        }
        // 从后端获取数据并在页面上显示
	axios.get("http://prjs7y.natappfree.cc/auth-serve/publish/add")
		.then(response => {
			console.log(response);
			var content = response.data.content;
			console.log(content);
			if(response.data.content){
				document.getElementById("content").innerText = content;
			}else{
				document.getElementById("content").innerText = "暂无公告";
			}
		}).catch(error => console.log('获取失败'));