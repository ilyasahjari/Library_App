/**
 * 
 */
package org.springframework.boot.FirstTrial;

import java.sql.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/**
 * @author radi
 *
 */
@Controller
@RequestMapping(path="/adherent") // This means URL's start with /demo (after Application path)
public class MainController implements WebMvcConfigurer{
	
	
	  @Autowired // This means to get the bean called userRepository
	  private AdherentRepository adherentRepository;
	  @Autowired
	  private ParentRepository parentRepository;
	  
	  
	  @GetMapping(path="/add")  /* /adherent/add */
	  public String greetingForm( Model model) {
	    model.addAttribute("adherent", new Adherent());
	    //model add attribute (liste des parents hommes)
	    //model.addAttribute("pere", new Parent()); 
	    //model.addAttribute("mere", new Parent()); 
	    
	    
	    model.addAttribute("parents", parentRepository.findAll());
	    //listes des parents femmes 
	    
	    return "adherent";   //adherent.html 
	  }
	  
	  
	  @PostMapping(path="/add") // Map ONLY POST Requests
	  //@Valid removed from adherent  and BindingResult bindingResult from arguments
		public String addNewAdherent(@ModelAttribute Adherent adherent,@ModelAttribute Parent pere ,@ModelAttribute Parent mere ,Errors errors,Model model)
	    {
		  if (errors.hasErrors()) {
				return "adherent";
			  //return "Saved";
			}
		  	System.out.println("im adherent name : "+ adherent.getPrenom());
		  	System.out.println("i'm pere.getid() : "+ pere.getId());
		  	System.out.println("im pere.getPareit_id" + pere.getParent_id());
		  	
		    adherentRepository.save(adherent);
		    /**
		     * 
			//model.addAttribute("adherent", adherent);
		  	Optional<Parent> pereOpt= parentRepository.findById(pere.getId());
		  	Optional<Parent> mereOpt= parentRepository.findById(mere.getId());
		  	Parent pereP= pereOpt.get();
		  	Parent mereM= mereOpt.get();
		  	
		  	// add enfant 
		  	pereP.addEnfant(adherent);
		  	mereM.addEnfant(adherent);
		  	
		  	
		  	// add parent 
		    adherent.setParent(pereP);
		    adherent.setParent(mereM);
		    
		     */
		   // adherent.setParent(pere);
		    
			return "Saved";
		}
	 
	/*
	 * public @ResponseBody String addNewAdherent (@RequestParam int
	 * id, @RequestParam String nom , @RequestParam String prenom , @RequestParam
	 * Date dateNaissance) { // @ResponseBody means the returned String is the
	 * response, not a view name // @RequestParam means it is a parameter from the
	 * GET or POST request
	 * 
	 * Adherent a = new Adherent(); a.setId(id); a.setNom(nom); a.setPrenom(prenom);
	 * a.setDateNaissance(dateNaissance);
	 * 
	 * adherentRepository.save(a); return "Saved"; }
	 */

	  @GetMapping(path="/adherents")
	  public String adherents( Model model) {
			model.addAttribute("adherents", adherentRepository.findAll());
			return "adherents";
		}
	
}
