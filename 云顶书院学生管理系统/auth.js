const token=localStorage.getItem("token");
if(!token) {
    location.href ='管理端登录/adminlogin.html';
}