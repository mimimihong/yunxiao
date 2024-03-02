package com.fvauth.fvauthapp.controller;


import com.fvauth.fvauthapp.common.AjaxResponse;
import com.fvauth.fvauthapp.domain.SysStudent;
import com.fvauth.fvauthapp.mapper.SysStudentMapper;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class SysStudentController {


    @Autowired
    private SysStudentMapper sysStudentMapper;

    /**
     * 新增用户数据信息
     * @param student
     * @return
     */
    @PostMapping("/addStudent")
    public AjaxResponse addStudent(@RequestBody SysStudent student) {
        sysStudentMapper.insertSysStudent(student);
        return new AjaxResponse("新增成功",200);
    }

    /**
     * 更新用户数据信息
     * @param student
     * @return
     */
    @PutMapping("/editStudent")
    public AjaxResponse editStudent(@RequestBody SysStudent student) {
        sysStudentMapper.updateSysStudent(student);
        return new AjaxResponse("修改成功",200);
    }

    /**
     * 根据学号查询
     * @param studentNo
     * @return
     */
    @GetMapping("/queryNo")

    public AjaxResponse queryNo(String studentNo) {
        SysStudent sysStudent = sysStudentMapper.queryStuNo(studentNo);
        return new AjaxResponse(200,"查询成功",sysStudent);
    }
    /**
     * 删除用户信息
     * @param id
     * @return
     */
    @DeleteMapping("/delStud")
    public AjaxResponse delStud(Long id) {
        sysStudentMapper.deleteSysStudentById(id);
        return new AjaxResponse("删除成功",200);
    }

    /**
     * 获取用户列表数据
     * @return
     */
    @GetMapping("/queryList")
    public AjaxResponse queryList() {
        List<SysStudent> sysStudents = sysStudentMapper.selectAllSysStudents();
        return new AjaxResponse(200,"查询成功",sysStudents);
    }

    /**
     * 登录校验
     * @param student
     * @return
     */
    @PostMapping("/loginPass")
    public AjaxResponse loginPass(@RequestBody SysStudent student, HttpSession session) {
        AjaxResponse ajaxResponse = null;
        String userName = student.getUserName();
        SysStudent sysStudent = sysStudentMapper.queryStuName(userName);
        if (sysStudent != null) {
            String passWord = sysStudent.getPassWord();
            if (passWord.equals(student.getPassWord())) {
                //缓存登录用户信息
                session.setAttribute("loggedInUser", sysStudent);
                ajaxResponse = new AjaxResponse("登录成功",200);
            } else {
                ajaxResponse = new AjaxResponse("密码错误",500);
            }
        } else {
             ajaxResponse = new AjaxResponse("用户名不存在",500);
        }
        return ajaxResponse;
    }

}


