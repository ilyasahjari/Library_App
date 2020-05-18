/**
 * 
 */
package com.pji.project.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pji.project.models.Classes;
import com.pji.project.models.Eleve;
import com.pji.project.models.Parent;
import com.pji.project.repositories.ClassesRepository;


/**
 * @author Lina RADI
 *
 */
@Controller
@RequestMapping(path="/classe")
public class ClassesController {
	 @Autowired
	  private ClassesRepository classeRepository;
	 
	 
			//------------------ CREATE ----------------- //
	/**
	* creates a new classe 
	* @param model
	* @return : classes list
	*/
	@GetMapping(path="/creer")  
		public String addClassForm( Model model) {
		model.addAttribute("classe", new Classes());
		return "classes/classe";   //eleve.html 
		}

	/**
	   * receiving the form to add a student 
	   * @param eleve
	   * @param bindingResult
	   * @param pere
	   * @param mere
	   * @return : the appropriate page according to the result  
	   */
	  @PostMapping(path="/creer") // Map ONLY POST Requests
	  //@Valid removed from adherent  and BindingResult bindingResult from arguments // @ModelAttribute before mere pere elev
		public String addNewClass(@Valid Classes classe ,BindingResult bindingResult)
	    {
		  if (bindingResult.hasErrors()) {
				return "classes/classe";
			  //return "Saved";
			}
		  	
		  classeRepository.save(classe);
		  System.out.println("avant redirect");
		  return "redirect:/classe/classes";
		 
		}
	  
			//------------------ READ ----------------- //
	/**
	* Get method to show all the students 
	* @param model
	* @return
	*/
		@GetMapping(path="/classes")
		public String adherents( Model model) {
		model.addAttribute("classes", classeRepository.findAll());
		return "classes/classes";
		}



}
