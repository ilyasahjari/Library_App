## Faire un prototype pour creer et afficher les adherents


### Objectifs
 Le but de cette tache est :

de se familiariser avec les technos Spring, thymleaf, JPA ...
de realiser une premiere application
Essayer de construire une petite appli permettant de creer un adh (avec nom, prenom, date de naissance, classe), et de lister l'ensemble des adherents. Vous pouvez chercher des exemples sur le net. Faites votre proto dans votre propre branche, ou dans un projet a part.

### Instructions :

  Le prototype est basé sur:

  -L'utilisation d'une BD openSource MySql.
   La creation de la base de données: 
> mysql> create database db_example ; -- Creates the new database
mysql> create user 'user'@'%' identified by 'ThePassword'; -- Creates the user
mysql> grant all on db_example.* to 'user'@'%'; -- Gives all privileges to the new user on the newly created database

 -L'ajout de la Validation des donnees avec le BindingResult. 

 -Le projet est sous gradle.


### Execution :
 Lancer la commande 'mvn spring-boot:run' dans un terminal puis consulter les pages suivantes: 

	**Page d'acceuil**

  -La page d'accueil 
	http://localhost:8080/Index

	**Parent**

  -La page qui permet d'ajouter un parent: 
	http://localhost:8080/parent/add


  -Le lien suivant permet d'afficher tous les parents: 
       http://localhost:8080/parent/parents

  -La page qui permet de supprimer un parent: 
	http://localhost:8080/parent/deleteParent

	 **Eleve**

  -La page qui permet d'ajouter un nouvel eleve: 
	http://localhost:8080/eleve/add


  -Le lien suivant permet d'afficher tous les eleves: 
       http://localhost:8080/eleve/eleves

  -La page qui permet de supprimer un eleve: 
	http://localhost:8080/eleve/deleteEleve

