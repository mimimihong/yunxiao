var submmit = document.getElementById("submmit");
submmit.onclick = function () {
    var nick_name = document.getElementById("nick_name").value;
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;
    var reason = document.getElementById("reason").value;
    const res = axios.post('http://wrgk8g.natappfree.cc/auth-serve/leave/createLeaveRequest', {
        "nickName": nick_name,
        "startTime": startTime,
        "endTime": endTime,
        "reason": reason,
    }).then(function (response) {
        console.dir(response);
        alert("请假成功");
    }

    )
}
