# Gestion des adhérents et de la bourse aux livres (BAL) d'une association

# Présentation 
## Contexte
Dans les lycées, les livres de classe sont à la charge des familles. Autrement dit, c'est aux familles d'acheter les livres de classe.
Afin de diminuer le cout des livres, certaines associations de parent d'élèves de lycées organisent des "Bourses Aux Livres" (BAL) : les lycéens peuvent louer les livres de l'année pour une somme bien moindre que le prix de l'achat des livres. Les associations peuvent aussi faire des achats groupés afin d'obtenir des prix sur par exemple les calculatrices.

Pour avoir les livres, les lycéens adhèrent à l'association. Celle-ci doit gérer les adhésions, la liste des livres distribués et les paiements.


## Projet

Le but de ce projet est d'informatiser la gestion de la BAL : gérer les adhésions, gérer les livres distribués, gérer les paiements. Toutes les procédures de gestion sont déjà bien établies, et sont partiellement informatisées (mais sous la forme de feuille excel :-().

Une solution possible est de réaliser une application de type web, utilisant un serveur de base de données libre (Derby, MySQL ...). La partie WEB peut être réalisée avec le framework Spring MVC, la persistance avec Spring JPA (ORM de type Hibernate), les pages de présentation avec Thymleaf ou Mustache. Tous ces frameworks permettent une réalisation rapide de ce type d'application.


## Mots clés
Java, application web, Spring MVC, Spring JPA, Spring Boot, client-serveur

## URLs
  - [Spring](https://spring.io)
  - [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
  - [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
  - [Spring guides](https://spring.io/guides)

# Organisation du projet

 * Les documents sont dans le répertoire "documentation".

## Répartition des taches
Nous utilisans un tableau "Kanban" pour gérer les taches.
Le tableau est divisés en plusieurs colonnes, chaque colonne contient des étiquetes (postit) représentant une tache.
Les différentes colonnes sont :
* Taches
  * Ensembles des taches identifiés.

* A faire
  * Taches devant être faites. Ensemble des taches devant être faites pour la prochaine itération. Vous choisissez parmi ces taches celle que vous voulez faire. Vous la faite alors passer dans la colonne suivante.

* En cours - exigences
  * Ensemble des taches en cours de realisation, phase d'identification des exigences.
  * Les taches dans cette colonne sont en cours de realisation.
  * On identifie les exigences liées a la tache, c'est a dire que l'on identifie plus clairement ce qui doit etre realisé.

* En cours - développement
  * Ensemble des taches en cours de réalisation, phase de  développement.
  * Les taches dans cette colonne sont en cours de développement.

* A tester
  * Ensemble des taches réalisées, qui sont maintenant à tester.
* Terminé
  * Ensembles des taches réalisés. 



## Comment modifier le projet
Le projet interdit la modification directe de la branche 'master'. Vous devez faire vos modifications dans une branche que vous créez. Une fois les modifications approuvées, vous informez la personne autorisé a faire un merge avec la branche master.
