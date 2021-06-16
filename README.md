# RegateDDD (French)
Exercice illustrant une façon d'appliquer les patterns tactiques du DDD (Value Object, Entity et Aggregate).

L'objectif est d'identifier dans le code les bonnes et les mauvaises pratiques du DDD.

## L'application
L'application développée simule des régates nautiques.

On peut créer une régate (**Regate**) en définissant un point GPS (**PointGPS**) de départ et d'arrivé.
La régate est alors ouverte aux inscriptions.
On peut alors s'inscrire, ce qui va entrainer la création d'un bateau (**Bateau**).
On peut aussi fermer la régate aux inscriptions ; cela empêche les nouvelles inscriptions.
Enfin on peut démarrer la régate.
Il est alors possible de changer le cap des bateaux.

Ce code n'est pas très complexe mais il exploite les patterns tactiques du DDD (VO, Entity et Aggregate).


## Choix de conception DDD 

Le code que nous avons développé pour cette application suit les principes du DDD.

En particulier, nous avons appliqués les patterns tactiques suivants :
* Value Object (Objet immutable identifé par ses valeurs) pour les classes **Cap** et **PointGPS**
* Entity (Objet mutable avec un identifiant) pour la classe **Bateau**
* Aggregate (Objet composite) pour la classe **Regate**
* Repository (Interface de sauvegarde des agrégats) pour la classe **RegateRepository**
## Objectifs (Atelier Craft)

L'atelier que nous vous proposons vise à vérifier que les patterns VO, Entity et Aggregate ont été respectés.

1. Vérifiez le pattern VO. 
    * Ajouter (positif ou négatif) les tags [A Value Object is defined by its values ], [A Value Object is immutable]
2. Vérifier le pattern Entity. 
    * Ajouter (positif ou négatif) les tags [An Entity is defined by its id], [An Entity has a state that is mutable], [An Entity should provide business methods that respect encapsulation]
3. Vérifier le pattern Aggregate. 
    * Ajouter (positif ou négatif) les tags [An Aggregate is defined by its id], [An Aggregate controls some Entities], [An Aggregate should provide business methods that respect encapsulation]

Aller plus loin:
1. Proposez une correction pour les tags négatifs que vous avez mis
2. Ajoutez vos propres tags
3. Regardez le Repository et proposez une implémentation avec une base de données.


## Pratiques DDD (tags proposés)

Nous proposons les bonnes pratiques suivantes:
* [A Value Object is defined by its values ] : les Value Object doivent être définies par leur propriété (égalité par valeur). On devrait trouver une méthode d'égalité qui vérifie ce point.
* [An Entity is defined by its id] : les Entity doivent être définies par leur id (égalité par id). On devrait trouver un id et une méthode d'égalité qui vérifie ce point.
* [An Aggregate is defined by its id] : les agregats doivent être définis par leur id (égalité par id). Tout comme les entity, on devrait trouver un id et une méthode d'égalité qui vérifie ce point.
* [A Value Object is immutable] : un Value Object ne change jamais au cours du temps. Il faut vérifier que toutes les valeurs sont définies dans le constructeur. De plus, il ne faut aucune méthode qui change les valeurs.
* [An Entity has a state that is mutable] : une Entity a un état qui change au cours du temps. On doit bien voir des propriétés qui peuvent changer. 
* [An Aggregate controls some Entities] : un agregat contient des entity ; il contrôle leur cycle de vie. On doit voir des entity référencées par l'aggregate. 
* [An Entity should provide business methods that respect encapsulation] : une Entity propose des méthodes métiers (nommage métier); celles-ci peuvent faire changer l'état de l'entity. Il faut faire attention au nommage métier (pas de setXXX). Il faut faire attention à l'encapsulation (l'Entity ne doit pas donner accès à son état)
* [An Aggregate should provide business methods that respect encapsulation] : un agregat propose des méthodes métiers (nommage métier); celles-ci peuvent faire changer l'état de l'agrégat. Il faut faire attention au nommage métier. Il faut faire attention à l'encapsulation (l'Entity ne doit pas donner accès à son état et surtout pas donner de référence vers les entity qu'il contrôle)



## compiler

Vous devez avoir JavaScript et NPM 

    npm i typescript -g
    npm i
    npm run compile


## tester

    npm test


## Correction

La branche **correction** propose une correction.







