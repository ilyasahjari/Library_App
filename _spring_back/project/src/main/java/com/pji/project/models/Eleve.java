/**
 * 
 */
package com.pji.project.models;

/**
 * 
 */
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.*;



import javax.persistence.*;
/**
 * @author radi
 *
 */

@Entity(name = "Eleve")
@Table(name = "eleve")
public class Eleve{
	enum SEXE {
		  F,
		  M
		} 
	
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  @Column(name = "eleve_id")
	  private Integer eleve_id;
	  
	  
	  @NotNull
	  	@Size(min=3, max=30)
	  private String nom;
	  @NotNull
	  @Size(min=3, max=30)
	  private String prenom;
	  //@Past
	  private Date dateNaissance;
	 
	  @Embedded
	    @AttributeOverrides(value = {
	        @AttributeOverride(name = "addressLine1", column = @Column(name = "numero_log")),
	        @AttributeOverride(name = "addressLine2", column = @Column(name = "rue"))
	    })
	    private Address address;

	  //@NotNull
	  @ManyToOne
	  private Parent pere;
	  
	  //@NotNull 
	  @ManyToOne
	  private Parent mere;
	
	 
	public Eleve() {
		
	}


	/**
	 * @param nom
	 * @param prenom
	 * @param dateNaissance
	 * @param address
	 * @param mere
	 */
	public Eleve(@NotNull @Size(min = 3, max = 30) String nom, @NotNull @Size(min = 3, max = 30) String prenom,
			Date dateNaissance, Address address, Parent mere) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.address = address;
		this.mere = mere;
	}


	


	/**
	 * @param nom
	 * @param prenom
	 * @param dateNaissance
	 * @param address
	 */
	public Eleve(@NotNull @Size(min = 3, max = 30) String nom, @NotNull @Size(min = 3, max = 30) String prenom,
			Date dateNaissance, Address address) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.address = address;
	}


	/**
	 * @param id
	 * @param nom
	 * @param prenom
	 * @param dateNaissance
	 * @param address
	 */
	public Eleve( @NotNull @Size(min = 3, max = 30) String nom,
			@NotNull @Size(min = 3, max = 30) String prenom, Date dateNaissance, Address address,Parent pere,Parent mere) {
	
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.address = address;
		this.pere=pere;
		this.mere=mere;
	}
	
	
	public Integer getId() {
		return eleve_id;
	}
	public void setId(Integer id) {
		this.eleve_id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public Date getDateNaissance() {
		return dateNaissance;
	}
	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}


	/**
	 * 
	 * @param parent
	 * @return
	 */
	public Boolean setParent(Parent parent) {
		if(parent.getSexe()== Parent.SEXE.M) {
			this.setPere(parent);
		}else {
			this.setMere(parent);
		}
		return true;
	}
	public Parent getPere() {
		return pere;
	}


	public void setPere(Parent pere) {
		this.pere = pere;
	}


	public Parent getMere() {
		return mere;
	}


	public void setMere(Parent mere) {
		this.mere = mere;
	}
  
}

