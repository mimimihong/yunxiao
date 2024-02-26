var retn = document.getElementById('return');
function gofirstpage() {
    window.location.href="../学生信息界面.html";
}
var time = document.getElementById('time');
function gotime() {
    window.location.href="研学时间.html";
}
var change = document.getElementById('change');
function gochange() {
    window.location.href="调研学.html";
}
var leave = document.getElementById('leave');
function goleave() {
    window.location.href="请假.html";
}
var offset = document.getElementById('offset');
function gooffset() {
    window.location.href="补研学.html";
}
var seat = document.getElementById('seat');
function goseat() {
    window.location.href="座位预约.html";
}
function show_change() {
    const xha=new XMLHttpRequest();
    xha.open("GET","  ");    //将调整的研学数据展示
    xha.send();
    xha.onreadystatechange=function(){
        if(xha.readyState==XMLHttpRequest.DONE&&xha.status==200){
            change_text=JSON.parse(xha.responseText);
            for(let i=0;i<change_text.data.length;i++){
                document.getElementsByClassName("change_text").innerHTML += change_text.data[i] + "<br>";
            }
        }
    }
}
function show_leave() {
    const xha=new XMLHttpRequest();
    xha.open("GET","  ");    //将请假展示
    xha.send();
    xha.onreadystatechange=function(){
        if(xha.readyState==XMLHttpRequest.DONE&&xha.status==200){
            leave_text=JSON.parse(xha.responseText);
            for(let i=0;i<leave_text.data.length;i++){
                document.getElementsByClassName("leave_text").innerHTML += leave_text.data[i] + "<br>";
            }
        }
    }
}
function show_offset() {
    const xha=new XMLHttpRequest();
    xha.open("GET","  ");    //将补研学展示
    xha.send();
    xha.onreadystatechange=function(){
        if(xha.readyState==XMLHttpRequest.DONE&&xha.status==200){
            offset_text=JSON.parse(xha.responseText);
            for(let i=0;i<offset_text.data.length;i++){
                document.getElementsByClassName("offset_text").innerHTML += offset_text.data[i] + "<br>";
            }
        }
    }
}
function show_seat() {
    const xha=new XMLHttpRequest();
    xha.open("GET","  ");    //将座位预约展示
    xha.send();
    xha.onreadystatechange=function(){
        if(xha.readyState==XMLHttpRequest.DONE&&xha.status==200){
            seat_text=JSON.parse(xha.responseText);
            for(let i=0;i<seat_text.data.length;i++){
                document.getElementsByClassName("seat_text").innerHTML += seat_text.data[i] + "<br>";
            }
        }
    }
}