package com.fvauth.fvauthapp.mapper;



import com.fvauth.fvauthapp.domain.SysStudent;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SysStudentMapper  {

   /**
    * 插入用户信息
    * @param student
    * @return
    */
   int insertSysStudent(SysStudent student);

   /**
    * 删除用户信息
    * @param id
    */
   void deleteSysStudentById(Long id);

   /**
    * 更新用户信息
    * @param student
    */
   void updateSysStudent(SysStudent student);

   /**
    * 查询学生信息
    * @return
    */
   List<SysStudent> selectAllSysStudents();

   /**
    * 根据学号查询
    * @param studentNo
    * @return
    */
   SysStudent queryStuNo(String studentNo);

   /**
    * 根据用户名查询
    * @param userName
    * @return
    */
   SysStudent queryStuName(String userName);

}
