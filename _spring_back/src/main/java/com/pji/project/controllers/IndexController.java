/**
 * 
 */
package com.pji.project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Lina RADI
 *
 */
@Controller
public class IndexController {
	
	@GetMapping(path="Index")
	  public String indexPage(Model model) {
			return "Index";
		}

}
