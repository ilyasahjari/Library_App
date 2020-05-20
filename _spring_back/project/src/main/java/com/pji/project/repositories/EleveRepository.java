/**
 * 
 */
package com.pji.project.repositories;
import javax.validation.Valid;

import org.springframework.data.repository.CrudRepository;

import com.pji.project.models.Eleve;


/**
 * @author Lina RADI
 *
 */

public interface EleveRepository extends CrudRepository<Eleve, Integer>{

	//void update(@Valid Eleve eleve);

}
