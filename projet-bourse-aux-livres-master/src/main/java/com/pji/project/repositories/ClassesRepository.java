/**
 * 
 */
package com.pji.project.repositories;

import org.springframework.data.repository.CrudRepository;

import com.pji.project.models.Classes;
import com.pji.project.models.Eleve;

import java.util.List;

/**
 * @author Lina RADI
 *
 */
public interface ClassesRepository extends CrudRepository<Classes, Integer>{
	
        void deleteClassesById(Integer id);
        Classes findClassesById(Integer id);
        List<Classes> findClassesByNom(String name);
}
