package com.pji.project.services;

import java.util.List;

import com.pji.project.models.Eleve;

public interface EleveService {
	Boolean createEleve(Eleve eleve);
    Boolean UpdateEleve(Eleve eleve);
    Boolean deleteEleveById(Integer  eleve_id);
    Eleve getEleveById(Integer  eleve_id);
    List<Eleve> getEleveByName(String  name);
    List<Eleve> findAll();
}
