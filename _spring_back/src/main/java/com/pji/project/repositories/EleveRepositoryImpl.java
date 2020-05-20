/**
 * 
 */
package com.pji.project.repositories;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pji.project.models.Eleve;

/**
 * @author Lina RADI
 *
 */

@Service
public class EleveRepositoryImpl {

	 @Autowired 
	  private EleveRepository eleveRepository;
	
	/**
	 * update student's informations
	 * @param eleve
	 * @param id 
	 */
	public void update(Eleve eleve, int id) {
		Optional<Eleve> oldEleve = eleveRepository.findById(id);
        
        if(oldEleve.isPresent()) 
        {
        	
        	Eleve newEntity = oldEleve.get();
        	newEntity.setNom(eleve.getNom());
        	newEntity.setPrenom(eleve.getPrenom());
        	newEntity.setDateNaissance(eleve.getDateNaissance());
        	newEntity.setAddress(eleve.getAddress());
        	newEntity.setPere(eleve.getPere());
        	newEntity.setMere(eleve.getMere());
           
            eleveRepository.save(newEntity);
             
            return ;
        }else {
        	return;
        }
	}
	
	
}	


        
