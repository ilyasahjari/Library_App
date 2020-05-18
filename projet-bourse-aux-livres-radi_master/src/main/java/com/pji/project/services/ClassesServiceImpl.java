package com.pji.project.services;

import com.pji.project.models.Classes;
import com.pji.project.repositories.ClassesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ClassesServiceImpl implements ClassesService{

    private ClassesRepository classesRepository;
    private static final Logger LOGGER = LoggerFactory.getLogger(ClassesServiceImpl.class);

    public ClassesServiceImpl(ClassesRepository classesRepository) {
        this.classesRepository = classesRepository;
    }

    @Override
    public Boolean createClass(Classes classes) {
        if (!validateClasses(classes)) {
            LOGGER.warn("the calless object is not valid {}",classes);
            return false;
        }
        try {
            classesRepository.save(classes);
        } catch (Exception e) {
            LOGGER.error("error while saving the object {}",e.getMessage());
            return false;
        }
        return true;
    }



    @Override
    public Boolean UpdateClass(Classes classes) {
        if (!validateClasses(classes) && null!= classes.getId()) {
            LOGGER.warn("the calless object is not valid {}",classes);
            return false;
        }
        try {
            classesRepository.save(classes);
        } catch (Exception e) {
            LOGGER.error("error while updating the object {}",e.getMessage());
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public Boolean deleteClassById(Integer id) {
        if(null == id) {
            return  false;
        }
        try {
            classesRepository.deleteClassesById(id);
        } catch (Exception e) {
            LOGGER.error("error while deleting the object {}",e.getMessage());
            return  false;
        }
        return true;
    }

    @Override
    public Classes getClassById(Integer id) {
        if(null == id) {
            return  null;
        }
        try {
            return classesRepository.findClassesById(id);
        } catch (Exception e) {
            LOGGER.error("error while retrieving  the object {}",e.getMessage());
            return  null;
        }
    }

    @Override
    public List<Classes> getClassByName(String name) {
        if(StringUtils.isEmpty(name)) {
            return  Collections.emptyList();
        }
        try {
            Iterable<Classes> iterator = classesRepository.findClassesByNom(name);
            return StreamSupport.stream(
                    Spliterators.spliteratorUnknownSize(iterator.iterator(), Spliterator.ORDERED),
                    false).collect(Collectors.toList());
        } catch (Exception e) {
            LOGGER.error("error while retrieving the objects {}",e.getMessage());
            return  Collections.emptyList();
        }
    }

    @Override
    public List<Classes> findAll() {
        try {
            Iterable<Classes> iterator =classesRepository.findAll();
            return StreamSupport.stream(
                    Spliterators.spliteratorUnknownSize(iterator.iterator(), Spliterator.ORDERED),
                    false).collect(Collectors.toList());
        } catch (Exception e) {
            LOGGER.error("error while retrieving the objects {}",e.getMessage());
            return  Collections.emptyList();
        }
    }

    private boolean validateClasses(Classes classes) {
        return null != classes && !StringUtils.isEmpty(classes.getNom());
    }
}
