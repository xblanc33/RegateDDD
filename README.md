# RegateDDD (French)
Projet illustrant une façon d'appliquer les patterns tactiques du DDD


## compiler

Vous devez avoir JavaScript et NPM 

    npm i typescript -g
    npm i
    npm run compile


## tester

    npm test


## atelier

L'atelier `atelier-Domain` propose une version avec quelques mauvaises pratiques dans le domain.

    git checkout atelier-Domain


Voici les bonnes pratiques que nous proposons (charge à vous de trouver où elles sont bien suivies et où elles sont mal suivies)
* [A Value Object is defined by its values ] : les Value Object doivent être définies par leur propriété (égalité par valeur). On devrait trouver une méthode d'égalité qui vérifie ce point.
* [An Entity is defined by its id] : les Entity doivent être définies par leur id (égalité par id). On devrait trouver un id et une méthode d'égalité qui vérifie ce point.
* [An Aggregate is defined by its id] : les agregats doivent être définis par leur id (égalité par id). Tout comme les entity, on devrait trouver un id et une méthode d'égalité qui vérifie ce point.
* [A Value Object is immutable] : un Value Object ne change jamais au cours du temps. Il faut vérifier que toutes les valeurs sont définies dans le constructeur. De plus, il ne faut aucune méthode qui change les valeurs.
* [An Entity has a state that is mutable] : une Entity a un état qui change au cours du temps. On doit bien voir des propriétés qui peuvent changer. 
* [An Entity should provide business methods] : une Entity propose des méthodes métiers (nommage métier); celles-ci peuvent faire changer l'état de l'entity. Il faut faire attention au nommage métier (pas de setXXX).
* [An Aggregate controls some Entities] : un agregat contient des entity ; il contrôle leur cycle de vie. On doit voir des entity référencées par l'aggregate. Celui-ci ne doit jamais échanger ces références (il les garde pour lui).







