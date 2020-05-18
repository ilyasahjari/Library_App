//package com.pji.project.services;
//
//import java.util.Collections;
//import java.util.List;
//import java.util.Spliterator;
//import java.util.Spliterators;
//import java.util.stream.Collectors;
//import java.util.stream.StreamSupport;
//
//import javax.transaction.Transactional;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.stereotype.Service;
//import org.springframework.util.StringUtils;
//
//import com.pji.project.services.EleveService;
//import com.pji.project.models.Eleve;
//import com.pji.project.repositories.EleveRepository;
//
//@Service
//public class EleveServiceImpl implements EleveService {
//	
//    private EleveRepository eleveRepository;
//    private static final Logger LOGGER = LoggerFactory.getLogger(EleveServiceImpl.class);
//    
//    public EleveServiceImpl(EleveRepository eleveRepository) {
//        this.eleveRepository = eleveRepository;
//    }
//
//	@Override
//	public Boolean createEleve(Eleve eleve) {
//		if (!validateEleve(eleve)) {
//            LOGGER.warn("the call object is not valid {}",eleve);
//            return false;
//        }
//        try {
//            eleveRepository.save(eleve);
//        } catch (Exception e) {
//            LOGGER.error("error while saving the object {}",e.getMessage());
//            return false;
//        }
//        return true;	
//    }
//
//	@Override
//	public Boolean UpdateEleve(Eleve eleve) {
//		if (!validateEleve(eleve) && null!= eleve.getId()) {
//            LOGGER.warn("the calless object is not valid {}",eleve);
//            return false;
//        }
//        try {
//            eleveRepository.save(eleve);
//        } catch (Exception e) {
//            LOGGER.error("error while updating the object {}",e.getMessage());
//            return false;
//        }
//        return true;
//	}
//
//	@Override
//	@Transactional
//	public Boolean deleteEleveById(Integer eleve_id) {
//		 if(null == eleve_id) {
//	            return  false;
//	        }
//	        try {
//	            eleveRepository.deleteEleveById(eleve_id);
//	        } catch (Exception e) {
//	            LOGGER.error("error while deleting the object {}",e.getMessage());
//	            return  false;
//	        }
//	        return true;
//	}
//	
//
//	@Override
//	public Eleve getEleveById(Integer eleve_id) {
//		 if(null == eleve_id) {
//	            return  null;
//	        }
//	        try {
//	            return eleveRepository.findEleveById(eleve_id);
//	        } catch (Exception e) {
//	            LOGGER.error("error while retrieving  the object {}",e.getMessage());
//	            return  null;
//	        }     
//	}
//
//	@Override
//	public List<Eleve> getEleveByName(String name) {
//		 if(StringUtils.isEmpty(name)) {
//	            return  Collections.emptyList();
//	        }
//	        try {
//	            Iterable<Eleve> iterator = eleveRepository.findEleveByNom(name);
//	            return StreamSupport.stream(
//	                    Spliterators.spliteratorUnknownSize(iterator.iterator(), Spliterator.ORDERED),
//	                    false).collect(Collectors.toList());
//	        } catch (Exception e) {
//	            LOGGER.error("error while retrieving the objects {}",e.getMessage());
//	            return  Collections.emptyList();
//	        }	
//	}
//
//	
//	@Override
//	public List<Eleve> findAll() {
//		 try {
//	            Iterable<Eleve> iterator = eleveRepository.findAll();
//	            return StreamSupport.stream(
//	                    Spliterators.spliteratorUnknownSize(iterator.iterator(), Spliterator.ORDERED),
//	                    false).collect(Collectors.toList());
//	        } catch (Exception e) {
//	            LOGGER.error("error while retrieving the objects {}",e.getMessage());
//	            return  Collections.emptyList();
//	        }
//	}
//	
//	private boolean validateEleve(Eleve eleve) {
//        return null != eleve && !StringUtils.isEmpty(eleve.getNom()) && !StringUtils.isEmpty(eleve.getPrenom()) && !StringUtils.isEmpty(eleve.getNiveau().getNomNiveau());
//    }
//}
