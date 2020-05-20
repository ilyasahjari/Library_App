//package com.pji.project.RestController;
//
//import java.util.Collections;
//import java.util.List;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.web.bind.annotation.*;
//import com.pji.project.dto.EleveResponseDto;
//import com.pji.project.models.Eleve;
//import com.pji.project.services.EleveService;
//
//@RestController
//@CrossOrigin("http://localhost:3000")
//@RequestMapping("/rest/eleve")
//public class EleveRestController {
//	
//	EleveService eleveService;
//	private static final Logger LOGGER = LoggerFactory.getLogger(EleveRestController.class);
//
//
//	public EleveRestController(EleveService eleveService) {
//		 this.eleveService = eleveService;
//	}	
//	
//	 @RequestMapping(path = "",method = RequestMethod.POST)
//	 public EleveResponseDto createEleve(@RequestBody Eleve eleve) {
//		 Boolean  isDone= eleveService.createEleve(eleve);
//	     return setEleveResponseDto(isDone,Collections.emptyList());
//	 }
//	 
//	 @RequestMapping(path = "",method = RequestMethod.PUT)
//	 public EleveResponseDto UpdateEleve(@RequestBody Eleve eleve) {
//		 Boolean  isDone= eleveService.UpdateEleve(eleve);
//	     return setEleveResponseDto(isDone,Collections.emptyList());
//	 }
//	 
//	 @RequestMapping(path = "",method = RequestMethod.DELETE)
//	 public EleveResponseDto deleteEleve(@RequestBody Eleve eleve) {
//		 Boolean  isDone= eleveService.deleteEleveById(eleve.getId());
//		 return setEleveResponseDto(isDone,Collections.emptyList());
//	 }
//	 
//	 @RequestMapping(path = "",method = RequestMethod.GET)
//	 public EleveResponseDto findAll() {
//		 List<Eleve> eleve = eleveService.findAll();
//	     return setEleveResponseDto(Boolean.FALSE,eleve);
//	 }
//	 
//	 @RequestMapping(path = "/find",method = RequestMethod.GET)
//	 public EleveResponseDto findByName(@RequestParam String name) {
//	    List<Eleve> eleve = eleveService.getEleveByName(name);
//	    return setEleveResponseDto(Boolean.FALSE,eleve);
//	 }
//	 
//	 
//	 private EleveResponseDto setEleveResponseDto(Boolean isDone, List<Eleve> results) {
//		 EleveResponseDto eleveResponseDto = new EleveResponseDto();
//		 eleveResponseDto.setDone(isDone);
//		 eleveResponseDto.setResult(results);
//		 return eleveResponseDto;
//	 }
//
//	
//	
//}
