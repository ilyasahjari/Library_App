/**
 * 
 */
package com.pji.project.models;

/**
 * @author Lina RADI
 *
 */

/**
 * Represente les niveaux dans un lycee 
 */

public enum Niveau {

		PREMIERE("Premiere"), 
		SECONDE("Seconde"),
		TERMINALE("Terminale");
		
		private final String nomNiveau;
	
	Niveau(String nomNiveau) {
		this.nomNiveau=nomNiveau;
	}

	public String getNomNiveau() {
		return nomNiveau;
	}
	
	
}
