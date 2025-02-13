# Guide d'installation
___
Voici les différentes étapes nécessaires pour installer et lancer le projet. Elles supposent l'utilisation d'un environnement Linux et l'installation sur l'ordinateur de `PostgreSQL`, `PHP`, `php-pgsql` et `yarn`.

## Étape 1 : Création de la base de données

Dans votre terminal, déplacez-vous dans le dossier `db` à la racine du projet.
```
$ cd db
```
Puis, connectez vous à l'utilisateur `postgres`.
```
$ sudo su postgres
```
Puis, créez la base de données `targetle` :
```
$ psql -c 'CREATE DATABASE targetle;'
```

Nous allons désormais créer les tables et insérer les données de l'application.

Lancez les fichiers de création de la base de données et de son remplissage.
```
$ psql -d targetle -a -f db.sql
$ psql -d targetle -a -f data.sql
```

La création de la base de données est terminée, vous pouvez désormais quitter l'utilisateur `postgres`
```
$ exit
```

## Étape 2 : Lancement du serveur PHP

Dans votre terminal, déplacez vous dans le dossier `src` à la racine du projet.
```
$ cd src
```
Lancer le serveur PHP sur le port 8000.
```
$ php -S 127.0.0.1:8000
```

### Étape 3 : Lancement du client web

Dans un nouveau terminal, déplacez vous dans le dossier `app` à la racine du projet.
```
$ cd app
```
Au premier lancement du projet, vous devrez installer les modules nodes afin que l'application fonctionne.
```
$ yarn
```
Une fois les modules installés, vous pouvez lancer le client web.
```
$ yarn dev
```
Le navigateur s'ouvre, avec l'application fonctionnel. Si ce n'est pas le cas, allez à cette adresse dans votre navigateur : [http://localhost:5173/](http://localhost:5173/)