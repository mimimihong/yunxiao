var retn = document.getElementById('return');
function gofirstpage() {
    window.location.href = "../学生信息界面.html";
}
var time = document.getElementById('time');
function gotime() {
    window.location.href = "研学时间.html";
}
var change = document.getElementById('change');
function gochange() {
    window.location.href = "研学安排.html";
}
var leave = document.getElementById('leave');
function goleave() {
    window.location.href = "请假.html";
}
var eimg = document.getElementsByClassName(".eimg");

//研学时间
// const res = axios.get(" http://jmyj75.natappfree.cc/auth-serve/student/st").then(function(response) {
//     document.getElementsByClassName('.eimg').innerHTML = response.data;
//     console.log(response.data)
// })