
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
let data;
var area = document.getElementById("area").value;
// 获取文本框内容
// 发送数据到后端
function s() {
    const res = axios.post(' http://jmyj75.natappfree.cc/auth-serve/publish/add', {
        "content": area,
    }).then(function (response) {
        console.dir(response);
        alert("发布成功");
    })
} 
    // 在这里处理数据并展示到页面上     
//     const response = axios.get(' http://jmyj75.natappfree.cc/auth-serve/publish/add');   
//     if (response.status === 200) {         // 获取数据并展示到页面上  
//     const textfive = document.getElementsByClassName('textfive');  
//     textfive.innerHTML = response.data;   
//     } else {  
//          console.error('Error fetching data:', response.status);  
// }  
    
    // const response = axios.get(' http://jmyj75.natappfree.cc/auth-serve/publish/add')
    //     .then(function (response) {
    //         console.log(response);
    //         if (response.status === 200) {         // 获取数据并展示到页面上  
    //             document.getElementsByClassName('textfive') = response;
    //         }
    //     })
    