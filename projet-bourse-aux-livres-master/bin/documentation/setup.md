# Setup


# Compiler l'application
L'application utilise Gradle pour la compilation. Elle peut être compilé à partir d'Eclipse ou en ligne de comande.

## Compiler Dans Eclipse
* Selectionner la racine du projet
* right click -> gradle -> Refresh Gradle Project

## Compiler En ligne de commande (Gradle)
* ouvrir une console
* aller dans le répertoir racine de l'application (ou est situé le fichier build.gradle)
* console> **gradle bootJar**

# Lancement de l'application
Il existe plusieurs façon de lancer l'application : dans Eclipse, en ligne de commande ...

## Lancement avec Eclipse
* Selectionner la classe ProjectApplication
* right click -> Run As -> Java Application


## Lancement En ligne de commande (Gradle)
L'aplication peut être lancé en ligne de commande en utilisant gradle. 
* ouvrir une console
* aller dans le répertoir racine de l'application (ou est situé le fichier build.gradle)
* console> **gradle bootRun**

# Base de données
L'application utilise une base de données pour sauvegarder les données.
L'application n'est pas lié à une BD particulière. Il est possible de changer le fournisseur de la BD. L'application doit être paramétré pour la BD choisit.
Le paramétrage de a BD se fait en général dans le fichier **application.properties**

## MySQL
Pour utiliser MySQL, vous devez avoir un serveur de BD MySQL installé.
Les paramêtres à utiliser dans l'application sont les suivants :

	spring.jpa.hibernate.ddl-auto=create-drop
	spring.datasource.driver-class-name=com.mysql.jdbc.Driver
	
	spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/adherents?serverTimezone=UTC
	spring.datasource.username=springuser
	spring.datasource.password=spring_password
	
	mybatis.config=mybatis-config.xml
	mybatis.check-config-location=true
	
	logging.level.org.hibernate.SQL=DEBUG
	logging.level.org.hibernate.type=TRACE

### Initialisation de MySQL
Il faut créer la BD de donnée **db_example** et l'utilsateur **springuser**.
Pour cela, ouvrir une console/client sur la BD, et taper les instructions suivantes :

	mysql> create database db_example ; -- Creates the new database
	mysql> create user 'user'@'%' identified by 'ThePassword'; -- Creates the user
	mysql> grant all on db_example.* to 'user'@'%'; -- Gives all privileges to the new user on the newly created database

### Installer un serveur MySQL
Le plus simple est d'installer [Wamp](https://fr.wikipedia.org/wiki/WampServer) ou [Lamp](https://fr.wikipedia.org/wiki/LAMP). 

Ce sont des suites d'applications permettant de mettre en place un serveur web, et installant par defaut une BD MySQL, ainsi que les applications pour l'administrer.
