package org.springframework.boot.FirstTrial;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.boot.FirstTrial.Adherent;



/**
 * @author Lina RADI
 *
 */

@Entity(name = "Parent")
@Table(name = "parent")
public class Parent{
	enum SEXE {
		  F,
		  M
		} 
	
	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  @Column(name = "parent_id")
	  private Integer parent_id;
	
	@NotNull
	  @Size(min=3, max=30)
	private String nom;
	
	@NotNull
	  @Size(min=3, max=30)
	private String prenom;
	
	@NotNull
	@Email
	private String email;
	
	@NotNull
	private SEXE sexe;
	

	@Pattern(regexp = "(0)[0-9]{9}")
	private String phoneNumber;
	
	
	 //cascade = CascadeType.ALL,
	//	        orphanRemoval = true
	@OneToMany(mappedBy="pere")
	    private List<Adherent> enfants = new ArrayList<>();
	
	
	public Parent() {
		
	}
	/**
	 * @param nom
	 * @param prenom
	 * @param email
	 * @param phoneNumber
	 */
	public Parent(@NotNull @Size(min = 3, max = 30) String nom, @NotNull @Size(min = 3, max = 30) String prenom,
			@NotNull @Email String email, @Pattern(regexp = "(0)[0-9]{9}") String phoneNumber) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.phoneNumber = phoneNumber;
		
	}
	public Integer getId() {
		return parent_id;
	}
	public void setId(Integer id) {
		this.parent_id = id;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public Integer getParent_id() {
		return parent_id;
	}
	public void setParent_id(Integer parent_id) {
		this.parent_id = parent_id;
	}
	public SEXE getSexe() {
		return sexe;
	}
	public void setSexe(SEXE sexe) {
		this.sexe = sexe;
	}
	public List<Adherent> getEnfants() {
		return enfants;
	}
	public void setEnfants(List<Adherent> enfants) {
		this.enfants = enfants;
	}
	public void addEnfant(Adherent enfant) {
		enfants.add(enfant);
		enfant.setParent(this);
    }
 
    public void removeEnfant(Adherent enfant) {
    	enfants.remove(enfant);
    	enfant.setParent(this);
    }
	
	
	 
	
	

}
