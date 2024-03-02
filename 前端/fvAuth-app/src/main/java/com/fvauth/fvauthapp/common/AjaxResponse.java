package com.fvauth.fvauthapp.common;

import lombok.Data;

@Data
public class AjaxResponse<T> {


    private String message;

    private int code;
    private T data;

    // Constructors

    public AjaxResponse() {
        // Default constructor
    }

    public AjaxResponse(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public AjaxResponse(String message,int code) {
        this.message = message;
        this.code = code;
    }


}
