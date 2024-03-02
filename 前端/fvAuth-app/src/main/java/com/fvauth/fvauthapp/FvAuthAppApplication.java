package com.fvauth.fvauthapp;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@MapperScan(basePackages = "com.fvauth.fvauthapp.mapper")
@SpringBootApplication
public class FvAuthAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(FvAuthAppApplication.class, args);
    }

//    @ConfigurationProperties(prefix = "cloud-voice-config-properties")
//    @Bean(name = "readVoice")
//    public CloudVoiceProperties cloudVoiceProperties() {
//        return new CloudVoiceProperties();
//    }
//
//
//    @ConfigurationProperties(prefix = "baidu-config-properties")
//    @Bean(name = "readFace")
//    public BaiDuFaceAiProperties baiDuFaceAiProperties() {
//        return new BaiDuFaceAiProperties();
//    }
//
//    @ConfigurationProperties(prefix = "keda-config-properties")
//    @Bean(name = "readKeDaVoice")
//    public KeDaVoiceProperties keDaVoiceProperties() {
//        return new KeDaVoiceProperties();
//    }


}
