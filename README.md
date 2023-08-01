# jabiProject

## Explication rapide du projet:
Le projet est une petite application pour pouvoir créer des task, les modifier, les supprimer ou les marquer comme terminée. L'application est développée en React Native.
J'ai utilisée expo pour pouvoir tester le projet sur un émulateur. J'ai travaillé sur ios mais normalement cela fonctionne aussi sur Android sauf l'affichage d'une légère ombre sur Android. J'ai réutilisé les couleurs de majorconnect/Jabi que j'ai pu trouver sur le site. Pareil pour la police.
## Libraires utilisées: 
* @expo-google-fonts/roboto : pour avoir une autre police.
* react-native-vector-icons/Entypo & react-native-vector-icons/FontAwesome : pour avoir des icons.

## Structure du projet: 
* /components : Contient les composants utilisés dans l'application.
* /modals : Contient les modals pour la création et l'édition des tâches.
* /assets : Contient les ressources telles que les polices, les couleurs et les icônes utilisées dans l'application.

## avancée souhaité: 
J'aurais bien aimé ajouter un DateTimePicker pour définir une date de fin de la task et donc passer la task en terminé si elle était dépassé mais j'ai pas eu le temps de finir et j'ai préféré rendre clair le reste. 

## Outils utilisés:
* Internet: (stackoverflow et autre) pour régler des problèmes pour l'installation, comprendre le fonctionnement de react native et régler des problèmes lors du projet.
* Youtube: pour voir des videos de personne codant en react et voir un peu les possibilités.
* Chatgpt: pour poser des questions sur des choses que je ne comprenais pas bien tel que le useState ou demander les bonnes pratiques en react etc..
* Fork: pour gérer le lien avec github (push,pull etc..).

## images type de L'application: 
1) image de la vue de base de l'application avec une FlatList avec les task. Si terminés elles sont en beige autrement en vert eau.
  ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-07-31 at 16 44 10](https://github.com/noemiegaillard/jabiProject/assets/112878674/e1315eea-9497-42cd-88e3-5fc21e77594a)

2) image de la création d'une task. le champ de description n'est pas obligatoire pour créer une task.
  ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-07-31 at 16 36 01](https://github.com/noemiegaillard/jabiProject/assets/112878674/98c13871-03a9-4bc0-9cc1-a7a33be1276a)


3) image de la liste des options pour une task.

    ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-07-31 at 16 35 19](https://github.com/noemiegaillard/jabiProject/assets/112878674/e0bc3c17-b760-4d32-ac52-57d6ea4deafd)

