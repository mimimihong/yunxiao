package com.fvauth.fvauthapp.service;

import lombok.Data;

@Data
public class ReadObjFormat {

    private String configUrl;

    private Boolean isOpen;

    private String appName;

    public ReadObjFormat() {

    }
    public ReadObjFormat(String configUrl, Boolean isOpen, String appName) {
        this.configUrl = configUrl;
        this.isOpen = isOpen;
        this.appName = appName;
    }

    /**
     * 准备连接
     * @return
     */
    public ReadObjFormat compareCon() {
        return this;
    }

}
