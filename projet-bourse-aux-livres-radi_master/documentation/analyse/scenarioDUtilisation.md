# Scénarion d'utilisation concrets de l'application

Ce document decrit des scenarios d'utilisation concret de l'application. 

# Identification du bénévol
Avant de pouvoir utiliser l'application, un bénévol doit s'identfier. Il ne peut le faire que si il est déja enregistré dans l'application.
Alice est bénévole, et elle veut s'identifier. Elle lance l'application qui lui demande de s'identifier. Elle entre son nom de login et son password. L'application valide, et Alice peut choisir parms les différentes activités.

# Retrait des livres
Bob vient de s'inscrire à l'association. Il va chercher ses livres. 

Il se rend au local. Alice l'accueille. Elle lui demande son nom et recherche sa fiche sur l'application. L'application lui présente la fiche de Bob. Alice selectionne la page avec les livres. L'application montre les livres empruntable. Ils sont pour l'instant dans l'état "empruntable". Alice demande à Bob quels livres il veut emprunter, et les selectionne dans l'application, les faisant passer dans l'etat "a preparer". L'application propose une option pour les faire passer tous dans cette état. 
Alice va chercher les livres dans la reserve, puis elle selectionne ceux qu'elle à trouvé, les faisant passé dans l'etat "emprunté". La selection peut se faire en cliquant sur le livre dans l'application, ou a l'aide de l'application "ScanLivreAndroid".
  
Alice demande a Bob de valider la liste de livres empruntés (comment ??).
Alice demande a Bob si il veut un récapitulatif papier ou par mail de son emprunt. Bob indique par mail. Alice selectionne l'option et l'application envoie le mail.

# Rendre des livres
## Tous les livres
C'est la fin de l'année, Bob va rendre ses livres. Il se rend au local. Alice l'accueil, et lui demande son nom et sa classe. Elle recherche sa fiche, puis fait l'inventaire de ses livres. Elle indique pour chaque livre s'il a été rendu. 
L'application indique que Bob a rendu tous ces livres, et que la caution peut lui etre rendu. Alice rend la caution et l'indique dans l'application.

Question : Bob doit il signer quelque chose ? Le fait que la caution est rendue ?

## Une partie des livres
Bob rend ses livres. 
Alice recherche sa fiche, puis fait l'inventaire de ses livres. Elle indique pour chaque livre s'il a été rendu. 
L'application indique que le livre de Math manque. Alice le signal a Bob et lui demande de le ramener rapidement. Alice garde les livres rendus, et l'application indique que ces livres sont deja rendu. L'application envoi un mail a Bob indiquant le livre manquant.

## Ramener des livres manquants
Bob a déjà rendu une partie des livres. Il amène aujourd'hui les livres manquants
Alice recherche la fiche de Bob, puis inventorie le livre. L'application indique que tous les livres sont rendus, et que La caution peut être rendus.

Question : Bob doit il signer quelque chose ? Le fait que la caution est rendue ?

## Livre perdu
Bob rend ses livres, mais il a perdu son livre de geo.
Alice recherche la fiche de Bob, puis fait l'inventaire de ses livres. Elle indique pour chaque livre s'il a été rendu. 
L'application indique que le livre de Geo manque. Alice le signal a Bob qui dit l'avoir perdu. L'application indique a Alice le prix que doit payer Bob pour le livre perdu. Bob paie le prix demandé. Alice l'indique dans l'application. L'application signal que Bob ne doit plus rien, et que la caution peut etre rendue.

# Inscription des élèves

Avant la période des inscription, on sauvegarde les données de l'année précédente, et on remet à zéro les inscriptions.
On garde accessible d'une manière ou d'une autre les données de l'année précédente, afin de pouvoir récupérer les données d'un éléve. 
Les inscriptions de l'année précédente sont bien séparées des inscriptions de l'année courante.

Chaque année, les élèves doivent s'inscrire ou se réinscrire.
De manière générale, les élèves de seconde font une "première inscription", c'est à dire qu'ils s'inscrivent pour la première fois.
Les élèves de 1ere et Tnle se reinscivent : on récupère partielement les données de l'année dernière.

## L'éléve n'a jamais été inscrit / première inscription.
Alice entre en seconde. Elle n'a jamais été inscrite au lycée. 

Le jour de l'inscription au lycée, elle se rend au stand de la FCPE pour adherer et louer ses livres.

Elle est accueillie par Bob, qui va saisir les infos nécessaire à l'inscription. 

Bob ouvre la page d'accueil de l'application qui propose de saisir un nom et un prenom, ou de choisir une action a effectuer. 
Bob lui demande son nom de famille et son prénom qu'il saisie, puis il choisit l'action "inscription". L'application  valide (après vérification) qu'il n'y a pas d'inscription a ce nom ni cette année, ni l'année précédente. L'application ouvre alors la page d'inscription, en préremplissant le nom et le prénom. Bob demande les champs manquants et les saisie.
Bob saisie notamment le niveau (2nde, 1ere, Tnle) et selectionne les options d'Alice. L'application peut alors constituer la liste des livres nécessaire a Alice. L'application permet d'ajouter des livres qui ne sont pas dans la liste par défaut.
Alice choisit de prendre les livres a l'association.

Pour les infos des parents, Bob commence par saisir le noms et le prenom du parent 1. L'application valide que celui-ci n'existe pas ni dans la liste des parents de l'année en cours, ni dans la liste des parents de l'année précédente. Bob demande alors les infos et les saisies.
Bob fait de même pour le parent 2.

Bob demande si Alica a un frére ou une soeur deja inscrite à la FCPE. Ce n'est pas le cas, alors Bob indique que la cotisation est de 10€. 
Option : Bob demande si Alice veut s'abonner au magazin de la FCPE. Bob demande si Alice veut faire un don a la FCPE departemental. Alice repond nom au deux. Bob saisie ces choix dans l'application.

Bob indique que l'association vend aussi la calculatrice (68€), des clé USB (5€) et des normographes (5€). Bob demande a ALice si l'un de ces article l'interesse. Alice desire prendre la calculatrice. Bob saisie ce choix. 

### paiement
L'application indique le montant total a regler. Bob le communique a Alice : 128€


Bob indique les moyens de paiement possibles.
L'association autorise les reglements par :
  - cheque
  - argent liquide
  - virement bancaire
  - SEPA (a verifier la faisabilité)
  - carte HDF différée (dans ce cas, une caution equivalente est demandée). Attention, la carte HdF permet de regler des 'fournitures'. Elles interdit le reglement de la cotisation adhesion.
L'association autorise le mixage des paiements (a verifier la faisabilité).
La caution doit toujours etre séparée du reste.

L'application indique le montant total, le montant autorisé avec la carte HdF, le montant de la caution.
Ici, total=128€, max HdF=118€, caution=100€.

Bob demand comment Alice veut regler.
Alice indique : 100€ par HdF différé, 28€ par cheque, caution par cheque.
Bob selectionne ces moyens de paiement et pour chacun d'eux indique le montant.
L'application indique que Bob doit recevoir 3 cheques : un de 100€ pour caution des livres; un de 100€ en attendant le paiement HdF, un de 28€ a encaisser.
  
Bob indique pour chaque cheque le numero du cheque.

Bob imprime la fiche adherent en deux exemplaire. Il en fait signer une qu'il range avec les cheques dans une pochette en plastique. Il remet l'autre a Alice.
Fin de l'inscription.
Bob indique que Alice peut aller chercher ces livres au local.

## L'éléve était inscrit l'année précédente

Alice entre en première. Elle était inscrite au lycée l'année dernière. 

Le jour de l'inscription au lycée, elle se rend au stand de la FCPE pour adherer et louer ses livres.

Elle est accueillie par Bob, qui va saisir les infos nécessaire à l'inscription. 
Bob ouvre la page d'accueil de l'application qui propose de saisir un nom et un prenom, ou de choisir une action a effectuer. 
Bob lui demande son nom de famille et son prénom qu'il saisie, puis il choisit l'action "inscription".
 L'application signale a Bob qu'il existe une fiche au même nom et prénom, et montre des données comme la date de naissance et l'adresse. Bob demande alors la date de naissance de Alice, et compare a ce que lui montre l'application. C'est la même, alors Bob choisit de reutiliser la fiche trouvée. L'application demande le nouveau niveau d'Alice. Bob indique 'premiere'. L'application ouvre une fiche d'inscription, et préremplie les infos.  
 
 Bob vérifie avec Alice les infos, et change certaines si necessaire (email, tel ...).
   Bob demande les option d'Alice et les selectionne. L'application peut alors constituer la liste des livres nécessaire a Alice. L'application permet d'ajouter des livres qui ne sont pas dans la liste par défaut.
Alice choisit de prendre les livres a l'association.

  Bob demande si les infos parents ont changé. Alice repond que oui, l'email de sa mère à changé. Bob change l'email.
  
  Suite comme dans [premiere inscription](premiere inscription)
  
  
## L'éléve à des frères ou soeurs dans l'établissement

Carl fait son inscription. Bob l'accueil et rempli les infos.

Au moment de demander si Carl a un frère ou une soeur inscrite à la FCPE, Carl répond que sa soeur Alice est aussi dans le lycée. Bob Demande son nom et son prénom. Le nom est le meme que Carl, le nom est Alice. L'application permet de saisir le nom et le prenom, et le nom est prerempli. Bob ne saisie pas le prenom, et fait "recherche adhesion". L'application propose une liste des adhesions a ce nom. Bob selectionne celle correspondant a Alice. L'application montre alors l'adhesion. Bob peut verifier que c'est la bonne adhesion en posant des questions sur les infos a Carl,. C'est la bonne fiche, et Bob confirme qu'il veut l'utiliser et l'associer a l'adhesion de Carl. L'application relie la fiche de Carl a l'adhesion de Alice.

Lors du paiement, l'application indique que l'adhesion n'est plus a payer. Son montant est de 0€ pour Carl.


# L'éléve à des frères ou soeurs hors établissement
Carl fait son inscription. Bob l'accueil et rempli les infos.

Au moment de demander si Carl a un frère ou une soeur inscrite à la FCPE, Carl répond que sa soeur Alice est aussi a la FCPE, mais dans un autre établissement. Bob indique alors "adhesion hors etablissement". L'application demande alors le nom de l'etablissement, ainsi que le nom et prenom du frere ou de la soeur, et eventuellement le numero d'inscription a la FCPE.


Lors du paiement, l'application indique que l'adhesion n'est plus a payer. Son montant est de 0€ pour Carl.

## Pré-inscription

Les élèves peuvent se pré-inscrire avant de passer au stand de l'association. La préinscripton consiste à pré-remplir soi même les infos qui seront demandées. Ces infos sont stockées a part des inscriptions validées par un membre FCPE. Les infos serviront à remplir la fiche d'inscription lors de la validation avec un membre FCPE.

Questions : comment faire des pre-inscriptions en absence de connection internet ??
 
## Pré-inscription en attendant son tour
L'idée est de permettre aux eleves de pré-remplir leur fiche en attendant d'etre reçu par un membre de l'association. 
Sur quel support font-ils la pre-inscription : leur telephone, une tablette prétée ...
Comment transmettre les données ?


# Gestion des livres

L'application permet d'etablir la liste des titres en pret.

Lors de la premiere utilisation, il faut entrer chaque titre. Cela peut se faire manuellement, ou par scan du code-barre avec l'appli Android BALandroid.

Chaque année, il faut mettre a jour la liste des titres : suppression de ceux inutilisé, ajout des nouveaux.
Pour chaque titre, il faut preciser le ou les niveaux ou il est utilisée, ainsi que les options auquelles il correspond. Un titre peut etre utilisé dans plusieurs niveau et plusieurs options, mais cela reste rare.

# Ajout des nouveaux livres de l'année
A écrire
# Retrait des livres non utilisés
A écrire
# Constitution des listes de livres en fonction du niveau et des options
A écrire
# Import / Export 
A écrire

## Import du fichier excel
A écrire

## Export vers le fichier excel
Necessaire ?

## Import vers CSV
A écrire

## Export vers CVS
A écrire

# Mailing
L'application permet de faire du mailing apres selection d'un ensemble d'adherent. Des mails pret enregistré sont disponibles.


# Selection par critères
L'application permet de selectionner un ensemble d'adherents à l'aide de critères. L'ensemble selectionné peut alors être utilisé pour effectuer une opération, comme du mailing liste.

Exemples de criteres :
* tous les eleves d'un niveau
* tous les parents ayant un enfants en 1ere
* tous les eleves n'ayant pas encore échangé leur carte HDF
* tous les éléves n'ayant pas encore recupéré leur livres
* ...

# Changement d'année
Lors du changement d'année, il faut archiver les adhérent de l'année passée, et créer une nouvelle liste pour l'année en cours.

Les fiches de l'année précédente doivent rester accessibles, afin de faciliter la création des nouvelles fiches (par copie).

# Paiements
Etudier les différents moyen de paiements :
* cheque
* espece
* SEPA
* virement bancaire
* autres ??

# Tresorerie
Quel sont les fonction de tresorerie a fournir ?


# glossaire
* local
* adherent
* niveau
* classe
* 
