/**
 * 
 */
package com.pji.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author Lina RADI
 *
 */
@Entity(name = "Classes")
@Table(name = "Classes")
public class Classes {
	
	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  private Integer id;
	
	
	@NotNull
  	@Size(min=1, max=30)
	private String nom;

	public Classes() {
	}
	/**
	 * @param name
	 */
	public Classes(String nom) {
		super();
		this.nom = nom;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	

}
