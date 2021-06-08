# RegateDDD (French)
Exercice illustrant une façon d'appliquer les patterns tactiques du DDD (Value Object, Entity et Aggregate).

L'objectif est d'identifier dans le code les bonnes et les mauvaises pratiques du DDD.

## Pratiques DDD

Nous proposons les bonnes pratiques suivantes
* [A Value Object is defined by its values ] : les Value Object doivent être définies par leur propriété (égalité par valeur). On devrait trouver une méthode d'égalité qui vérifie ce point.
* [An Entity is defined by its id] : les Entity doivent être définies par leur id (égalité par id). On devrait trouver un id et une méthode d'égalité qui vérifie ce point.
* [An Aggregate is defined by its id] : les agregats doivent être définis par leur id (égalité par id). Tout comme les entity, on devrait trouver un id et une méthode d'égalité qui vérifie ce point.
* [A Value Object is immutable] : un Value Object ne change jamais au cours du temps. Il faut vérifier que toutes les valeurs sont définies dans le constructeur. De plus, il ne faut aucune méthode qui change les valeurs.
* [An Entity has a state that is mutable] : une Entity a un état qui change au cours du temps. On doit bien voir des propriétés qui peuvent changer. 
* [An Entity should provide business methods] : une Entity propose des méthodes métiers (nommage métier); celles-ci peuvent faire changer l'état de l'entity. Il faut faire attention au nommage métier (pas de setXXX).
* [An Aggregate controls some Entities] : un agregat contient des entity ; il contrôle leur cycle de vie. On doit voir des entity référencées par l'aggregate. Celui-ci ne doit jamais échanger ces références (il les garde pour lui).


## L'application
L'application développée simule des régates nautiques.

On peut créer une régate (**Regate**) en définissant un point GPS (**PointGPS**) de départ et d'arrivé.
La régate est alors ouverte aux inscriptions.
On peut alors s'inscrire, ce qui va entrainer la création d'un bateau (**Bateau**).
On peut aussi fermer la régate aux inscriptions ; cela empêche les nouvelles inscriptions.
Enfin on peut démarrer la régate.
Il est alors possible de changer le cap des bateaux.

Ce code n'est pas très complexe mais il exploite les patterns tactiques du DDD (VO, Entity et Aggregate).


## Objectif

1. Dans le répertoire domaine, identifiez pour chaque classe (sauf RegateRepository.ts) quel pattern a été suivi (VO, Entity ou Aggregate). 
2. Vérifiez le pattern VO. 
3. Vérifier le pattern Entity. 
4. Vérifier le pattern Aggregate. 

Aller plus loin:
1. Proposez une correction.
2. Regardez le Repository et proposez une implémentation avec une base de données.


## compiler

Vous devez avoir JavaScript et NPM 

    npm i typescript -g
    npm i
    npm run compile


## tester

    npm test


## Correction

La branche **correction** propose une correction.







