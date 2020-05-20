/**
 * 
 */
package com.pji.project.controllers;



import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.pji.project.models.Eleve;
import com.pji.project.models.Parent;
import com.pji.project.repositories.EleveRepository;
import com.pji.project.repositories.EleveRepositoryImpl;
import com.pji.project.repositories.ParentRepository;


/**
 * @author Lina RADI
 *
 */
@Controller
@RequestMapping(path="/eleve") 
public class EleveController implements WebMvcConfigurer{
	
	
	  @Autowired // This means to get the bean called eleveRepository
	  private EleveRepository eleveRepository;
	  @Autowired
	  private ParentRepository parentRepository;
	  @Autowired
	  public EleveRepositoryImpl eleveRepositoryImpl;
	  
	  
	  											//------------------ CREATE ----------------- //
	  /**
	   * get method to add a student 
	   * @param model
	   * @return : add student form 
	   */
	  @GetMapping(path="/add")  
	  public String addForm( Model model) {
	    model.addAttribute("eleve", new Eleve());
	    List<Parent> parents = (List<Parent>) parentRepository.findAll();
	    
	    List<Parent> meres=new ArrayList<Parent>();
	    List<Parent> peres=new ArrayList<Parent>();
	  
	    // To distuiguish beetween fathers and mothers 
	    for(Parent parent : parents){
	    	   if(parent.getSexe()== Parent.SEXE.F) {
	    		   meres.add(parent);
	    	   }else {
	    		   peres.add(parent);   
	    	   }
	    	  
	    	}
	    model.addAttribute("peres", peres);
	    model.addAttribute("meres", meres);
	
	    return "eleves/eleve";   //eleve.html 
	  }
	  
	  
	  
	  /**
	   * receiving the form to add a student 
	   * @param eleve
	   * @param bindingResult
	   * @param pere
	   * @param mere
	   * @return : the appropriate page according to the result  
	   */
	  @PostMapping(path="/add") // Map ONLY POST Requests
	  //@Valid removed from adherent  and BindingResult bindingResult from arguments // @ModelAttribute before mere pere elev
		public String addNewAdherent(@Valid Eleve eleve ,BindingResult bindingResult , Parent pere ,Parent mere)
	    {
		  if (bindingResult.hasErrors()) {
				return "eleves/eleve";
			  //return "Saved";
			}
		  	
		  	eleveRepository.save(eleve);
			return "redirect:/eleve/eleves";
		}
	  										 //------------------ READ ----------------- //
	  /**
	   * Get method to show all the students 
	   * @param model
	   * @return
	   */
	  @GetMapping(path="/eleves")
	  public String adherents( Model model) {
			model.addAttribute("eleves", eleveRepository.findAll());
			return "eleves/eleves";
		}
	  
	  										//------------------ UPDATE ----------------- //
	  /**
	   * get method to update a student 
	   * @param model
	   * @return
	   */
	  //@GetMapping(path="/update")  
	  @RequestMapping(value = "/update", method = RequestMethod.GET)
	  public String updateStudents( Model model) {
		model.addAttribute("eleve", new Eleve());
	    model.addAttribute("eleves", eleveRepository.findAll());
	    return "eleves/updateEleves";   //eleve.html 
	  }
	  
	  /**
	   * Method to update student 
	   * @param id: the student's id 
	   * @return: form to update student 
	   */
	  
	  @RequestMapping(value = "/updateEleves", method = RequestMethod.POST)
	  private String updateStudent(@RequestParam int id,Model model){
		  model.addAttribute("eleve", new Eleve());
		  
		  Optional<Eleve> eleveOpt= eleveRepository.findById(id);
	      Eleve oldEleve = eleveOpt.get();
	      model.addAttribute("oldEleve", oldEleve);
	      
	      List<Parent> parents = (List<Parent>) parentRepository.findAll();
		    
		    List<Parent> meres=new ArrayList<Parent>();
		    List<Parent> peres=new ArrayList<Parent>();
		  
		    // To distuiguish beetween fathers and mothers 
		    for(Parent parent : parents){
		    	   if(parent.getSexe()== Parent.SEXE.F) {
		    		   meres.add(parent);
		    	   }else {
		    		   peres.add(parent);   
		    	   }
		    	  
		    	}
		    model.addAttribute("peres", peres);
		    model.addAttribute("meres", meres);
	     
	      return "eleves/updateEleve";
	  }
	  
	  /**
	   * The method to update a student 
	   * @param eleve 
	   * @param bindingResult
	   * @param pere
	   * @param mere
	   * @param id
	   * @return
	   */
	  @RequestMapping(value = "/update", method = RequestMethod.POST)
		public String updateEleve(@Valid Eleve eleve ,BindingResult bindingResult , Parent pere ,Parent mere,@RequestParam int id)
	    {
		  
		  if (bindingResult.hasErrors()) {
				return "redirect:/eleve/updateEleves";    
			}
		  
		  eleveRepositoryImpl.update(eleve,id);
		  return "redirect:/eleve/eleves";
		}
	  
	  										//------------------ DELETE----------------- //
	  /**
	   * get method to delete a student 
	   * @param model
	   * @return
	   */
	  @GetMapping(path="/delete")  
	  public String deleteStudent( Model model) {
		model.addAttribute("eleve", new Eleve());
	    model.addAttribute("eleves", eleveRepository.findAll());
	    return "eleves/deleteEleve";   //eleve.html 
	  }
	  
	  /**
	   * Method to delete student 
	   * @param id: the student's id 
	   * @return: list of students after delete
	   */
	  
	  @RequestMapping(value = "/deleteEleve", method = RequestMethod.POST)
	  private String deleteStudent(@RequestParam int id){
	      System.out.println("Student_Id : "+id);
	      eleveRepository.deleteById(id);
	      //return "eleves/eleves";
	      return "redirect:/eleve/eleves";
	  }
	  
	  
	
	
}
