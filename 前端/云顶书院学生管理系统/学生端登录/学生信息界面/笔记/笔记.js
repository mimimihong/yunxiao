var retn = document.getElementById('return');
function gofirstpage() {
    window.location.href="../学生信息界面.html";
}
var add = document.getElementsByClassName('add');
function goadd() {
    window.location.href="添加笔记.html";
}
var person = document.getElementsByClassName('person');
function goperson() {
    window.location.href="个人笔记.html";
}
function enter_note(){
    var area = document.getElementById("area").value;
    const xhr=new XMLHttpRequest();
    xhr.open("POST","   ");    //文本框中的内容输入后台
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({
       note: area,
    }));
}
function show_note() {
    const xha=new XMLHttpRequest();
    xha.open("GET","  ");    //将添加的笔记展示到个人笔记
    xha.send();
    xha.onreadystatechange=function(){
        if(xha.readyState==XMLHttpRequest.DONE&&xha.status==200){
            textfive=JSON.parse(xha.responseText);
            for(let i=0;i<textfive.data.length;i++){
                document.getElementsByClassName("textfive").innerHTML += textfive.data[i] + "<br>";
                var delete_new = document.getElementById("delete_new");
                delete_new.hidden = false; //删除键目前只有一个，页面也只能放一篇笔记
            }
        }
    }
}
//删除无法实现   