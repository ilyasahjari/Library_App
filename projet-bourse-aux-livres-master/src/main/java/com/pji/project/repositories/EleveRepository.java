/**
 * 
 */
package com.pji.project.repositories;
import java.util.List;

import javax.validation.Valid;

import org.springframework.data.repository.CrudRepository;

import com.pji.project.models.Classes;
import com.pji.project.models.Eleve;


/**
 * @author Lina RADI
 *
 */

public interface EleveRepository extends CrudRepository<Eleve, Integer>{
//        void deleteEleveById(Integer eleve_id);
//        Eleve findEleveById(Integer eleve_id);
//        List<Eleve> findEleveByNom(String nom);
}
