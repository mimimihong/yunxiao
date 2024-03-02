package com.fvauth.fvauthapp;

import com.fvauth.fvauthapp.config.BaiDuFaceAiProperties;
import com.fvauth.fvauthapp.config.CloudVoiceProperties;
import com.fvauth.fvauthapp.inter.FunRead;
import com.fvauth.fvauthapp.service.ReadObjFormat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class FvAuthAppApplicationTests {

    @Autowired
    private BaiDuFaceAiProperties baiDuFaceAiProperties;

    @Autowired
    private CloudVoiceProperties cloudVoiceProperties;

    @Test
    void contextLoads() {
        String accessToken = SignUtils.getAccessToken(baiDuFaceAiProperties.getApiKey(), baiDuFaceAiProperties.getSecretKey());
        System.out.println(accessToken);
    }

    @Test
    void testId() {
        System.out.println("123123");
//        System.out.println("开启了一个线程");
        for (int i = 0; i < 100; i++) {
            System.out.println("开启了" + i + "个线程");
        }
//        testLambda();
    }


    @Test
    void testLambda() {

        new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                System.out.println("开启了" + i + "个线程");
            }
        }).start();
    }

    @Test
    void testRead() {
        ReadObjFormat readObjFormat = readTest((item, num) -> {
            System.out.println(item.toString());
            System.out.println(num);
            return item.compareCon();
        });
        System.out.println(readObjFormat);
    }

    private static ReadObjFormat readTest(FunRead funRead) {
        ReadObjFormat readObjFormat = new ReadObjFormat("www.baidu.com", true, "测试表达式");
        funRead.startInit(readObjFormat, "1787123123");
        List<String> list = new ArrayList<>();
        list.add("123");
        list.add("222");
//        list.stream().filter()
        return readObjFormat;

    }

    @Test
    void testArray() {
        int[] arr = {1, 2, 5, 8, 9, 10, 19,22};
        int num = findNum(arr, 5);
        System.out.println("num=" + num);
    }

    private static int findNum(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int mind = (left + right) / 2;
            //取出中间值
            int mindValue = arr[mind];
            if (mindValue == target) {
                return mindValue;
            }
            if (mindValue > target) {
                right = mindValue - 1;
            } else if(mindValue < target){
                left = mindValue + 1;
            } else {
                return mindValue;
            }
        }
        return -1;
    }
}
