package com.pji.project.RestController;

import com.pji.project.dto.ClassesResponseDto;
import com.pji.project.models.Classes;
import com.pji.project.services.ClassesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/rest/classes")
public class ClassesRestController {
    ClassesService classesService;
    private static final Logger LOGGER = LoggerFactory.getLogger(ClassesRestController.class);


    public ClassesRestController(ClassesService classesService) {
        this.classesService = classesService;
    }

    @RequestMapping(path = "",method = RequestMethod.POST)
    public ClassesResponseDto createClasses(@RequestBody Classes classes) {
        Boolean  isDone= classesService.createClass(classes);
        return setClassesResponseDto(isDone,Collections.emptyList());
    }


    @RequestMapping(path = "",method = RequestMethod.PUT)
    public ClassesResponseDto UpdateClasses(@RequestBody Classes classes) {
        Boolean  isDone= classesService.UpdateClass(classes);
       return setClassesResponseDto(isDone,Collections.emptyList());
    }

    @RequestMapping(path = "",method = RequestMethod.DELETE)
    public ClassesResponseDto deleteClasses(@RequestBody Classes classes) {
        Boolean  isDone= classesService.deleteClassById(classes.getId());
       return setClassesResponseDto(isDone,Collections.emptyList());
    }

    @RequestMapping(path = "",method = RequestMethod.GET)
    public ClassesResponseDto findAll() {
        List<Classes> classes= classesService.findAll();
       return setClassesResponseDto(Boolean.FALSE,classes);
    }

    @RequestMapping(path = "/find",method = RequestMethod.GET)
    public ClassesResponseDto findByName(@RequestParam String name) {
        List<Classes> classes= classesService.getClassByName(name);
       return setClassesResponseDto(Boolean.FALSE,classes);
    }

    private ClassesResponseDto setClassesResponseDto(Boolean isDone, List<Classes> results) {
        ClassesResponseDto classesResponseDto = new ClassesResponseDto();
        classesResponseDto.setDone(isDone);
        classesResponseDto.setResult(results);
        return classesResponseDto;
    }
}
