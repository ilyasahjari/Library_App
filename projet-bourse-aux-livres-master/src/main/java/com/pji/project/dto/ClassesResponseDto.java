package com.pji.project.dto;

import com.pji.project.models.Classes;

import java.util.List;

public class ClassesResponseDto {
    private List<Classes> result;
    private Boolean isDone;
    private Boolean isError;


    public List<Classes> getResult() {
        return result;
    }

    public void setResult(List<Classes> result) {
        this.result = result;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone(Boolean done) {
        isDone = done;
    }

    public Boolean getError() {
        return isError;
    }

    public void setError(Boolean error) {
        isError = error;
    }
}
