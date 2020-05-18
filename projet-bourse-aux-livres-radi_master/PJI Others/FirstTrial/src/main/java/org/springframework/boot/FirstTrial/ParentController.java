package org.springframework.boot.FirstTrial;
	import javax.validation.Valid;

	import org.springframework.beans.factory.annotation.Autowired;

	import org.springframework.stereotype.Controller;
	import org.springframework.ui.Model;
	import org.springframework.validation.BindingResult;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

	/**
	 * @author Lina RADI
	 *
	 */
	@Controller
	public class ParentController implements WebMvcConfigurer{
		
		@Autowired private ParentRepository parentRepository;
		
		@GetMapping("/parent/add")
		public String addNewParent(Parent parent) {
		    //model.addAttribute("adherent", new Adherent());
		    return "parent";
		  }
		@PostMapping("/parent/add") // Map ONLY POST Requests
		public String addNewParent(@Valid Parent parent,BindingResult bindingResult)
	    {
		  if (bindingResult.hasErrors()) {
				return "parent";
			  //return "Saved";
			}
		  
		    parentRepository.save(parent);
			return "Saved";
		}
		
		/**
		 * 
		 */
		
		@GetMapping(path="/parent/parents")
		  public String parents( Model model) {
				model.addAttribute("parents", parentRepository.findAll());
				return "parents";
			}

	}

