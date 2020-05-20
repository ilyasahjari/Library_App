package com.pji.project.services;

import com.pji.project.models.Classes;

import java.util.List;

public interface ClassesService {
    Boolean createClass(Classes classes);
    Boolean UpdateClass(Classes classes);
    Boolean deleteClassById(Integer  id);
    Classes getClassById(Integer  id);
    List<Classes> getClassByName(String  name);
    List<Classes> findAll();
}
