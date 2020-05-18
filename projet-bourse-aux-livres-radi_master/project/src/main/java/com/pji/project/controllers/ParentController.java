/**
 * 
 */
package com.pji.project.controllers;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.pji.project.models.Eleve;
import com.pji.project.models.Parent;
import com.pji.project.repositories.ParentRepository;

	/**
	 * @author Lina RADI
	 *
	 */
	@Controller
	public class ParentController implements WebMvcConfigurer{
		
		@Autowired private ParentRepository parentRepository;
		 
		
														//------------------ CREATE ----------------- //
		/**
		 * Method to add a new parent 
		 * @param parent
		 * @return : page listing all the parents 
		 */
		@GetMapping("/parent/add")
		public String addNewParent(Parent parent) {
		    //model.addAttribute("adherent", new Adherent());
		    return "parents/parent";
		  }
		
		/**
		 * Post method to add a parent 
		 * @param parent : parent object 
		 * @param bindingResult : to check the validation of the results 
		 * @return : main page or add parent page 
		 */
		@PostMapping("/parent/add") // Map ONLY POST Requests
		public String addNewParent(@Valid Parent parent,BindingResult bindingResult)
	    {
		  if (bindingResult.hasErrors()) {
				return "parents/parent";
			  //return "Saved";
			}
		  
		    parentRepository.save(parent);
			return "redirect:/parent/parents";
		}
		
														//------------------ READ ----------------- //
		/**
		 * Method to list all the parents 
		 * @param model
		 * @return : page listing all the parents 
		 */
		@GetMapping(path="/parent/parents")
		  public String parents( Model model) {
				model.addAttribute("parents", parentRepository.findAll());
				return "parents/parents";
			}
														//------------------ UPDATE ----------------- //
		
		
		
		
		
														//------------------ DELETE----------------- //
		/**
		   * get method to delete a parent 
		   * @param model
		   * @return
		   */
		  @GetMapping(path="/parent/delete")  
		  public String deleteStudent( Model model) {
			model.addAttribute("parent", new Parent());
		    model.addAttribute("parents", parentRepository.findAll());
		    return "parents/deleteParent";  
		  }
		
		/**
		   * Method to delete parent 
		   * @param id: the parent's id 
		   * @return: list of parents after delete
		   */
		  
		  @RequestMapping(value = "/parent/deleteParent", method = RequestMethod.POST)
		  private String deleteParent(@RequestParam int id){
		      System.out.println("parent id : "+id);
		      Optional<Parent> parentOpt= parentRepository.findById(id);
		      Parent parent = parentOpt.get();
		      if(parent.getSexe()== Parent.SEXE.F) {
	    		   for (Eleve child : parent.getEnfantsM()) {
	    			   child.setMere(null);  
	    		   }
	    	   }else {
	    		   for (Eleve child : parent.getEnfantsP()) {
	    			  child.setPere(null);
	    		   }
	    		    
	    	   }
		      parentRepository.deleteById(id);
		      return "redirect:/parent/parents";
		  }
		  

	}



