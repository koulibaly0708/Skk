// Données des formations — importé par catalogue-formations.html (aperçu public)
// et espace-formation.html (contenu complet, après vérification du code d'accès).
//
// Structure de chaque entrée :
//   titre           -> nom affiché de la formation
//   duree, public, prerequis, modules -> fiche formation (affichée dans "Programme")
//   apercu          -> court texte visible dans le catalogue, SANS code (déjà l'extrait
//                      automatique du début de contenuComplet quand celui-ci existe)
//   contenuComplet  -> HTML du cours complet, visible seulement après le code (null si pas encore rédigé)
//   pdfUrl          -> lien vers le support PDF téléchargeable (null si pas encore disponible)
//
// Les clés restent les intitulés exacts des formations (et non des slugs courts) car
// ce sont ces mêmes chaînes qui sont utilisées comme valeur du champ "formation" dans
// Firebase (formationCodes/{code}) et dans le menu déroulant de génération de code côté
// admin (espace.html). Renommer une clé ici casserait le lien avec les codes déjà générés.

export const FORMATIONS = {

  "PowerPoint — Niveau débutant": {
    titre: "PowerPoint — Niveau débutant",
    duree: "Environ 1h30", public: "Grand public, première prise en main de PowerPoint", prerequis: "Aucun",
    modules: ["Module 1 — Découvrir l'interface et créer sa présentation", "Module 2 — Construire et illustrer ses diapositives", "Module 3 — Habiller sa présentation", "Module 4 — Présenter et exporter", "Exercice final récapitulatif"],
    apercu: "Un guide pratique, étape par étape, pour apprendre à construire une présentation professionnelle : interface, texte, images, formes, thèmes, animations, diaporama et export…",
    pdfUrl: "formation-powerpoint-niveau-debutant.pdf",
    contenuComplet: `
      <p class="lede-cours">Un guide pratique, étape par étape, pour apprendre à construire une présentation professionnelle avec PowerPoint : interface, texte, images, formes, thèmes, animations, diaporama et export — sans jargon, et sans aucun prérequis.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Découvrir l'interface et créer sa présentation</h3>
        <h4>Découvrir l'interface</h4>
        <p>À l'ouverture du logiciel, l'écran se divise toujours en quatre grandes zones :</p>
        <ul>
          <li><strong>Le ruban</strong> (en haut) — tous les outils, classés par onglets (Accueil, Insertion, Création…)</li>
          <li><strong>Le volet des diapositives</strong> (à gauche) — la liste miniature de toutes vos diapositives</li>
          <li><strong>La zone de travail</strong> (au centre) — la diapositive en cours d'édition, en grand</li>
          <li><strong>Le volet des notes</strong> (en bas) — vos notes personnelles pour la présentation orale</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> si le ruban a disparu, il a probablement été réduit ; un clic sur une flèche en haut à droite de l'écran le fait réapparaître.
        </div>

        <h4>Créer sa première présentation</h4>
        <ol>
          <li>Ouvrez le logiciel : l'écran de démarrage propose des modèles et le choix « Présentation vide »</li>
          <li>Cliquez sur « Présentation vide » pour partir d'une base simple à personnaliser</li>
          <li>Une première diapositive de titre apparaît, avec deux zones : « Titre » et « Sous-titre »</li>
          <li>Cliquez dans la zone de titre et tapez le nom de votre présentation</li>
          <li>Enregistrez immédiatement le fichier pour ne rien perdre</li>
        </ol>
        <div class="callout">
          <strong>Astuce —</strong> si vous démarrez souvent le même type de présentation (rapport mensuel, cours…), explorez les modèles proposés au démarrage : ils font gagner un temps précieux.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Prendre en main l'interface et créer un fichier</h4>
          <ol>
            <li>Passez la souris sur chaque onglet du ruban et notez 3 outils qui vous semblent utiles</li>
            <li>Créez une présentation vide</li>
            <li>Sur la diapositive de titre, écrivez un titre et un sous-titre (votre nom + la date)</li>
            <li>Enregistrez le fichier sous le nom « formation-powerpoint.pptx »</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Construire et illustrer ses diapositives</h3>
        <h4>Gérer les diapositives</h4>
        <table class="table-cours">
          <thead><tr><th>Action</th><th>Comment faire</th></tr></thead>
          <tbody>
            <tr><td>Ajouter une diapositive</td><td>Onglet Accueil → « Nouvelle diapositive », ou Ctrl + M</td></tr>
            <tr><td>Choisir une disposition</td><td>« Nouvelle diapositive » → flèche du bas → choisir un modèle (Titre seul, Deux contenus…)</td></tr>
            <tr><td>Dupliquer</td><td>Clic droit sur la diapositive dans le volet de gauche → « Dupliquer la diapositive »</td></tr>
            <tr><td>Réorganiser</td><td>Glisser-déposer la diapositive dans le volet de gauche</td></tr>
            <tr><td>Supprimer</td><td>Clic droit → « Supprimer la diapositive », ou touche Suppr</td></tr>
          </tbody>
        </table>

        <h4>Travailler le texte</h4>
        <ol>
          <li>Cliquez une fois dans une zone de texte pour la sélectionner, cliquez une deuxième fois pour écrire dedans</li>
          <li>Sélectionnez le texte à modifier en le surlignant avec la souris</li>
          <li>Dans l'onglet Accueil, utilisez : police, taille, gras (Ctrl + G), italique (Ctrl + I), couleur</li>
          <li>Pour ajouter une zone de texte libre : onglet Insertion → « Zone de texte », puis dessinez-la sur la diapositive</li>
          <li>Pour aligner ou centrer le texte, utilisez les icônes d'alignement dans l'onglet Accueil</li>
        </ol>
        <div class="callout">
          <strong>Astuce —</strong> évitez plus de 6 lignes de texte par diapositive ; une diapositive n'est pas un document Word — elle doit soutenir votre parole, pas la remplacer.
        </div>

        <h4>Insérer des images</h4>
        <ol>
          <li>Onglet Insertion → « Images » → choisir une image sur votre ordinateur</li>
          <li>Cliquez sur l'image insérée : des poignées apparaissent à ses coins</li>
          <li>Tirez une poignée de coin pour redimensionner sans déformer l'image</li>
          <li>Glissez l'image pour la positionner ; des repères d'alignement apparaissent automatiquement</li>
          <li>Clic droit → « Format de l'image » pour ajuster la luminosité, le contraste ou ajouter un cadre</li>
        </ol>
        <div class="callout">
          <strong>Astuce —</strong> pour redimensionner une photo sans jamais la déformer, utilisez toujours une poignée de coin — jamais celles du milieu des côtés.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Construire le squelette de sa présentation</h4>
          <ol>
            <li>Ajoutez 4 nouvelles diapositives : Titre et contenu, Deux contenus, Titre seul, Vide — réorganisez-les pour que « Titre seul » soit en dernier</li>
            <li>Sur la diapositive « Titre et contenu », écrivez 3 phrases courtes et mettez le mot le plus important de chacune en gras et en couleur</li>
            <li>Insérez une image sur la diapositive « Deux contenus », redimensionnez-la pour qu'elle occupe la moitié droite, puis centrez-la verticalement</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Habiller sa présentation</h3>
        <h4>Formes & icônes</h4>
        <ol>
          <li>Onglet Insertion → « Formes » → choisir une forme, puis dessinez-la sur la diapositive</li>
          <li>Pour écrire à l'intérieur d'une forme, double-cliquez dessus et tapez le texte</li>
          <li>Sélectionnez la forme pour changer sa couleur de remplissage et de contour (onglet « Format »)</li>
          <li>Pour des icônes prêtes à l'emploi : onglet Insertion → « Icônes »</li>
          <li>Maintenez Maj en dessinant un cercle ou un carré pour garder des proportions parfaites</li>
        </ol>

        <h4>Thèmes & couleurs</h4>
        <ol>
          <li>Onglet Création : une galerie de thèmes prédéfinis s'affiche</li>
          <li>Cliquez sur un thème pour l'appliquer instantanément à toute la présentation</li>
          <li>À droite du même onglet, bouton « Variantes » : change la palette de couleurs sans changer la mise en page</li>
          <li>Pour une couleur personnalisée : sélectionnez un élément → menu couleur → « Autres couleurs » → entrez un code</li>
        </ol>
        <div class="callout">
          <strong>Astuce —</strong> choisissez un thème avant de remplir vos diapositives de contenu — cela évite d'avoir à tout réajuster ensuite.
        </div>

        <h4>Transitions & animations</h4>
        <table class="table-cours">
          <thead><tr><th>Type</th><th>Où</th><th>Ce que ça fait</th></tr></thead>
          <tbody>
            <tr><td>Transition</td><td>Onglet Transitions</td><td>Effet entre deux diapositives (fondu, balayage…)</td></tr>
            <tr><td>Animation</td><td>Onglet Animations</td><td>Effet sur un élément d'une diapositive (apparition d'un texte…)</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>Astuce —</strong> une seule transition simple (fondu) sur toute la présentation est souvent plus élégante que dix effets différents.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Donner une identité visuelle à sa présentation</h4>
          <ol>
            <li>Créez un petit schéma avec 3 rectangles reliés par 2 flèches pour représenter « Avant → Pendant → Après »</li>
            <li>Appliquez un thème à votre présentation et testez 3 variantes de couleurs</li>
            <li>Appliquez la même transition « Fondu » à toutes vos diapositives et ajoutez une animation d'apparition sur le titre de la première</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Module 4</span>
        <h3>Présenter et exporter</h3>
        <h4>Mode diaporama</h4>
        <ul>
          <li><strong>F5 —</strong> lance le diaporama depuis la première diapositive</li>
          <li><strong>Maj + F5 —</strong> lance depuis la diapositive actuelle</li>
          <li><strong>Flèches du clavier ou clic gauche —</strong> diapositive suivante</li>
          <li><strong>Échap —</strong> quitter le diaporama à tout moment</li>
          <li><strong>B —</strong> écran noir temporaire (pour capter l'attention)</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> le « Mode présentateur » affiche vos notes sur votre écran, tandis que le public ne voit que la diapositive — pratique en réunion.
        </div>

        <h4>Enregistrer & exporter</h4>
        <table class="table-cours">
          <thead><tr><th>Format</th><th>Usage recommandé</th></tr></thead>
          <tbody>
            <tr><td>.pptx</td><td>Format de travail, pour continuer à modifier la présentation</td></tr>
            <tr><td>.pdf</td><td>Pour envoyer un document figé, garanti identique chez tous les destinataires</td></tr>
            <tr><td>Vidéo (.mp4)</td><td>Pour une présentation qui se lance automatiquement, sans logiciel</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>Astuce —</strong> avant d'envoyer une présentation par e-mail, exportez-la aussi en PDF — c'est le format le plus sûr pour être vu correctement par le destinataire.
        </div>

        <h4>Raccourcis utiles</h4>
        <table class="table-cours">
          <thead><tr><th>Raccourci</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + M</td><td>Nouvelle diapositive</td></tr>
            <tr><td>Ctrl + D</td><td>Dupliquer l'élément sélectionné</td></tr>
            <tr><td>Ctrl + S</td><td>Enregistrer</td></tr>
            <tr><td>Ctrl + Z</td><td>Annuler la dernière action</td></tr>
            <tr><td>Ctrl + G / I</td><td>Gras / Italique</td></tr>
            <tr><td>F5</td><td>Lancer le diaporama depuis le début</td></tr>
            <tr><td>Échap</td><td>Quitter le diaporama</td></tr>
          </tbody>
        </table>

        <h4>Erreurs de débutants à éviter</h4>
        <ul>
          <li><strong>Trop de texte —</strong> une diapositive saturée de phrases n'est pas lue par le public, elle est ignorée</li>
          <li><strong>Trop de polices différentes —</strong> limitez-vous à 1 ou 2 polices maximum par présentation</li>
          <li><strong>Trop d'animations —</strong> un effet différent à chaque élément distrait plus qu'il n'aide</li>
          <li><strong>Images déformées —</strong> toujours redimensionner depuis un coin, jamais depuis un côté</li>
          <li><strong>Contraste insuffisant —</strong> un texte clair sur fond clair (ou foncé sur foncé) devient illisible en salle</li>
          <li><strong>Ne jamais enregistrer —</strong> prenez l'habitude de Ctrl + S toutes les 10 minutes</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique final récapitulatif</span>
          <h4>Créer une présentation complète de 5 diapositives</h4>
          <ol>
            <li>Diapositive 1 : titre du projet + votre nom (disposition « Titre »)</li>
            <li>Diapositive 2 : « Sommaire » avec 3 points listés (disposition « Titre et contenu »)</li>
            <li>Diapositive 3 : une idée illustrée d'une image (disposition « Deux contenus »)</li>
            <li>Diapositive 4 : un petit schéma avec 3 formes reliées par des flèches</li>
            <li>Diapositive 5 : « Merci » + vos coordonnées (disposition « Titre seul »)</li>
            <li>Appliquez un thème unique et une transition « Fondu » sur toutes les diapositives</li>
            <li>Testez le résultat en mode diaporama (F5), enregistrez en .pptx puis exportez en .pdf</li>
          </ol>
          <p><strong>Livrable attendu —</strong> une présentation .pptx de 5 diapositives, cohérente et exportée en .pdf.</p>
        </div>
      </div>
    `
  },

  "Excel — Tableaux de bord": {
    titre: "Excel — Tableaux de bord",
    duree: "4 séances d'1h30, une par semaine", public: "Assistants, gestionnaires, chargés de reporting", prerequis: "Bases d'Excel",
    modules: ["Séance 1 — Préparer ses données", "Séance 2 — Calculer les indicateurs", "Séance 3 — Visualiser ses données", "Séance 4 — Assembler le dashboard"],
    apercu: "Concevoir un tableau de bord produits en 4 séances : structurer et nettoyer ses données avec Claude IA, calculer les indicateurs clés du commerce, créer des graphiques parlants et assembler un dashboard interactif et partageable…",
    pdfUrl: "formation-excel-tableaux-de-bord.pdf",
    contenuComplet: `
      <p class="lede-cours">Quatre séances d'1h30, une par semaine, pour construire un tableau de bord produits complet à partir de données de ventes : structurer et nettoyer les données avec l'aide de Claude IA, calculer les indicateurs clés du commerce avec les bonnes formules Excel, créer des graphiques et tableaux croisés dynamiques parlants, puis assembler un dashboard interactif, cohérent et prêt à partager.</p>

      <div class="module-block">
        <span class="module-tag">Séance 1</span>
        <h3>Préparer ses données produits</h3>
        <h4>Qu'est-ce qu'un tableau de bord produits ?</h4>
        <p>Un tableau de bord regroupe en un coup d'œil les chiffres essentiels pour suivre une activité commerciale, sans avoir à fouiller dans les données brutes. Quatre familles d'indicateurs reviennent dans la majorité des tableaux de bord commerce et guideront toute la formation :</p>
        <ul>
          <li><strong>Chiffre d'affaires —</strong> total des ventes, par période, par produit ou par catégorie</li>
          <li><strong>Évolution des ventes —</strong> la tendance dans le temps : progression, saisonnalité, baisses</li>
          <li><strong>Répartition des produits —</strong> quels produits ou catégories pèsent le plus dans les ventes</li>
          <li><strong>Marge et rentabilité —</strong> ce qui reste après les coûts, pour identifier les produits les plus rentables</li>
        </ul>

        <h4>Structurer ses données brutes</h4>
        <p>Avant tout calcul, les données doivent suivre une règle simple : une ligne = une vente, une colonne = une information (date, produit, catégorie, quantité, prix unitaire, région…).</p>
        <ul>
          <li>Pas de cellules fusionnées ni de lignes ou colonnes vides dans le tableau</li>
          <li>Un format cohérent par colonne (dates, nombres, texte)</li>
          <li>Convertir la plage en « Tableau structuré » Excel (Ctrl+T)</li>
        </ul>

        <h4>Nettoyer ses données avec Claude IA</h4>
        <p>Claude peut analyser un extrait de vos données (copié-collé ou fichier) et repérer ce qui doit être corrigé avant tout calcul : doublons, valeurs aberrantes, cellules vides. Il propose la formule Excel adaptée ou une structure de colonnes plus claire, mais ne modifie jamais directement le fichier.</p>
        <table class="table-cours">
          <thead><tr><th>Besoin</th><th>Exemple de prompt</th></tr></thead>
          <tbody>
            <tr><td>Repérer les anomalies</td><td>« Voici un extrait de mes données de ventes [coller]. Repère les doublons, les valeurs manquantes et les formats de date incohérents. »</td></tr>
            <tr><td>Formule de contrôle</td><td>« Propose-moi une formule Excel pour repérer les lignes où le prix ou la quantité est vide. »</td></tr>
            <tr><td>Uniformiser une colonne</td><td>« Uniformise les noms de catégories : « Deco », « décoration » et « Décoration » doivent devenir une seule valeur. »</td></tr>
          </tbody>
        </table>

        <h4>Bonnes pratiques avant de calculer</h4>
        <ul>
          <li><strong>Tableau structuré —</strong> sélectionner les données puis Ctrl+T : cela nomme le tableau et facilite toutes les formules à venir</li>
          <li><strong>En-têtes clairs —</strong> un nom de colonne précis et unique (« Prix unitaire » plutôt que « Prix »)</li>
          <li><strong>Une seule feuille de données brutes —</strong> toutes les ventes au même endroit, sans calcul mélangé dans les mêmes colonnes</li>
          <li><strong>Feuilles séparées —</strong> une feuille « Données », une feuille « Calculs », une feuille « Dashboard »</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> pas de jeu de données sous la main ? Demandez à Claude d'en générer un exemple réaliste (produits, catégories, ventes sur 3 mois) pour vous entraîner.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Préparer un premier jeu de données</h4>
          <ol>
            <li>Importer ou saisir un jeu de données de ventes</li>
            <li>Le convertir en tableau structuré (Ctrl+T) avec des en-têtes clairs</li>
            <li>Demander à Claude de repérer les incohérences à corriger (doublons, valeurs manquantes, formats)</li>
            <li>Organiser le classeur en feuilles séparées : Données, Calculs, Dashboard</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Séance 2</span>
        <h3>Calculer les indicateurs clés</h3>
        <h4>Les formules Excel essentielles</h4>
        <p>Quatre familles de formules couvrent la plupart des besoins d'un tableau de bord produits :</p>
        <ul>
          <li><strong>SOMME.SI / SOMME.SI.ENS —</strong> additionner un montant selon une ou plusieurs conditions (ex. CA d'une catégorie)</li>
          <li><strong>NB.SI / NB.SI.ENS —</strong> compter des lignes selon une condition (ex. nombre de ventes d'un produit)</li>
          <li><strong>RECHERCHEV / XLOOKUP —</strong> récupérer une information liée à un produit (prix, catégorie) depuis une autre table</li>
          <li><strong>SOMMEPROD —</strong> calculer un total pondéré, utile pour la marge ou le chiffre d'affaires global</li>
        </ul>

        <h4>Demander une formule à Claude IA</h4>
        <p>Décrire le résultat souhaité en langage courant permet à Claude de construire la formule Excel correspondante, puis d'expliquer chaque partie pour pouvoir l'adapter soi-même ensuite.</p>
        <div class="callout">
          <strong>Exemple de prompt —</strong> « J'ai un tableau « Ventes » avec les colonnes Produit, Catégorie, Quantité et Prix unitaire. Donne-moi la formule pour calculer le chiffre d'affaires total de la catégorie « Mobilier ». »
        </div>
        <ul>
          <li>Indiquer les noms exacts de vos colonnes et du tableau</li>
          <li>Préciser le résultat attendu (un nombre, un pourcentage, un classement)</li>
          <li>Copier le message d'erreur Excel si la formule ne fonctionne pas</li>
        </ul>

        <h4>Les tableaux croisés dynamiques (TCD)</h4>
        <p>Un TCD résume automatiquement de grandes quantités de données par catégorie, produit ou période, sans écrire de formule.</p>
        <ol>
          <li>Sélectionner le tableau de données puis Insertion → Tableau croisé dynamique</li>
          <li>Glisser « Catégorie » ou « Produit » dans la zone Lignes</li>
          <li>Glisser « Quantité » ou « Montant » dans la zone Valeurs</li>
          <li>Glisser « Date » dans Colonnes pour suivre l'évolution dans le temps</li>
          <li>Actualiser le TCD (clic droit → Actualiser) après chaque mise à jour des données</li>
        </ol>

        <h4>Les indicateurs clés à calculer</h4>
        <ul>
          <li><strong>CA total et par catégorie —</strong> le chiffre d'affaires global, puis réparti par catégorie de produits</li>
          <li><strong>Top et flop produits —</strong> les 5 produits qui génèrent le plus (et le moins) de chiffre d'affaires</li>
          <li><strong>Marge moyenne —</strong> l'écart entre prix de vente et coût, pour situer la rentabilité</li>
          <li><strong>Évolution mensuelle —</strong> la progression des ventes mois après mois, pour repérer les tendances</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Calculer les indicateurs clés</h4>
          <ol>
            <li>Créer un TCD du chiffre d'affaires par catégorie et par mois</li>
            <li>Calculer le top 5 produits avec l'aide de Claude pour les formules</li>
            <li>Vérifier chaque formule générée en la comparant à un calcul manuel simple</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Séance 3</span>
        <h3>Visualiser ses données</h3>
        <h4>Choisir le bon graphique</h4>
        <p>Chaque type de graphique répond à une question différente : le choisir dépend de ce que vous voulez montrer.</p>
        <table class="table-cours">
          <thead><tr><th>Type</th><th>Utilité</th></tr></thead>
          <tbody>
            <tr><td>Barres</td><td>Comparer des catégories entre elles (ex. CA par catégorie de produits)</td></tr>
            <tr><td>Courbes</td><td>Suivre une évolution dans le temps (ex. ventes mois par mois)</td></tr>
            <tr><td>Camembert</td><td>Montrer une répartition en parts d'un tout (ex. part de chaque catégorie dans le CA)</td></tr>
            <tr><td>Jauge / indicateur</td><td>Comparer une valeur à un objectif (ex. CA réalisé vs objectif du mois)</td></tr>
          </tbody>
        </table>

        <h4>Créer des graphiques liés aux TCD</h4>
        <ol>
          <li>Sélectionner le tableau croisé dynamique déjà créé</li>
          <li>Insertion → Graphique croisé dynamique, puis choisir le type (barres, courbes...)</li>
          <li>Simplifier le graphique : retirer les boutons de champs, garder un titre clair</li>
          <li>Le graphique se met à jour automatiquement quand le TCD est actualisé</li>
          <li>Copier le graphique vers la feuille « Dashboard » (collage lié)</li>
        </ol>

        <h4>Repérer les tendances avec la mise en forme conditionnelle</h4>
        <p>La mise en forme conditionnelle colore automatiquement les cellules selon leur valeur, pour repérer les alertes en un coup d'œil.</p>
        <ul>
          <li><strong>Barres de données —</strong> une barre colorée proportionnelle à la valeur, directement dans la cellule (utile sur une colonne de CA)</li>
          <li><strong>Nuances de couleur —</strong> un dégradé du rouge au vert pour visualiser rapidement les meilleurs et les moins bons résultats</li>
          <li><strong>Jeux d'icônes —</strong> des flèches ou pastilles de couleur pour signaler une progression, une stagnation ou une baisse</li>
        </ul>
        <div class="callout">
          <strong>Principe de lecture d'un dashboard —</strong> en haut, les chiffres clés (CA, marge) en gros, visibles immédiatement ; au centre, les graphiques principaux (évolution, répartition) ; en bas, le détail ou le tableau si besoin d'aller plus loin.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Construire les visuels du dashboard</h4>
          <ol>
            <li>Créer 3 graphiques liés à vos TCD</li>
            <li>Appliquer une mise en forme conditionnelle sur au moins une colonne</li>
            <li>Esquisser la disposition du dashboard (chiffres clés en haut, graphiques au centre, détail en bas)</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Séance 4</span>
        <h3>Assembler le tableau de bord</h3>
        <h4>Structurer la feuille « Dashboard »</h4>
        <p>Le dashboard final vit sur sa propre feuille, séparée des données et des calculs, pour rester lisible et facile à partager : une feuille « Données » (le tableau brut, jamais modifié directement), une feuille « Calculs » (TCD et formules intermédiaires, masqués si besoin), et la feuille « Dashboard » (uniquement les indicateurs et graphiques finaux).</p>

        <h4>Ajouter des filtres interactifs</h4>
        <p>Les segments (slicers) et chronologies permettent de filtrer tout le dashboard en un clic, sans toucher aux formules.</p>
        <ol>
          <li>Cliquer sur un TCD, puis Analyse de TCD → Insérer un segment</li>
          <li>Choisir les champs à filtrer (ex. Catégorie, Région)</li>
          <li>Insérer une chronologie pour filtrer par période (mois, trimestre)</li>
          <li>Relier un même segment à plusieurs TCD (clic droit → Connexions de rapports)</li>
          <li>Positionner les segments en haut du dashboard, bien visibles</li>
        </ol>

        <h4>Un habillage professionnel et cohérent</h4>
        <ul>
          <li><strong>Deux ou trois couleurs maximum —</strong> une couleur principale, une secondaire, une pour les alertes — pas plus</li>
          <li><strong>Des titres explicites —</strong> chaque graphique et indicateur porte un titre clair, sans jargon technique</li>
          <li><strong>Masquer le superflu —</strong> quadrillage, en-têtes de lignes/colonnes Excel masqués pour un rendu épuré</li>
        </ul>
        <div class="callout">
          <strong>Exemple de prompt —</strong> « Propose-moi une palette de 3 couleurs harmonieuses pour un dashboard de vente, avec les codes hexadécimaux. »
        </div>

        <h4>Checklist avant le partage</h4>
        <ul>
          <li>Les données brutes ne sont jamais modifiées manuellement pour « arranger » un chiffre</li>
          <li>Tous les TCD et graphiques sont actualisés (clic droit → Actualiser tout)</li>
          <li>Les segments filtrent bien l'ensemble des graphiques du dashboard</li>
          <li>Le quadrillage et les éléments techniques Excel sont masqués sur la feuille Dashboard</li>
          <li>Le fichier est enregistré, et une version PDF est exportée pour un partage simple (Fichier → Exporter)</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Assembler et partager le dashboard</h4>
          <ol>
            <li>Assembler tous les éléments sur la feuille Dashboard</li>
            <li>Ajouter des segments interactifs et les relier aux TCD concernés</li>
            <li>Harmoniser les couleurs et masquer le quadrillage</li>
            <li>Exporter une version PDF pour le partage</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Séance 1 —</strong> structurer et nettoyer un jeu de données produits avec l'aide de Claude IA</li>
          <li><strong>Séance 2 —</strong> calculer les indicateurs clés avec les bonnes formules et des TCD</li>
          <li><strong>Séance 3 —</strong> visualiser les données avec des graphiques et la mise en forme conditionnelle</li>
          <li><strong>Séance 4 —</strong> assembler un dashboard interactif, cohérent et prêt à partager</li>
        </ul>
        <div class="callout">
          <strong>Pour aller plus loin —</strong> tableaux de bord automatisés avec Power Query, connexion à une base de données externe, ou création de macros simples — autant d'étapes à explorer une fois les bases maîtrisées.
        </div>
      </div>
    `
  },

  "Word — Documents officiels": {
    titre: "Word — Documents officiels",
    duree: "Sur-mesure", public: "Secrétariats, agents administratifs", prerequis: "Aucun",
    modules: ["Styles, sommaires et numérotation automatique", "Mise en page de rapports et courriers officiels", "Publipostage et modèles réutilisables"],
    apercu: "Styles, sommaires, numérotation, mise en page de rapports et de courriers, publipostage et modèles réutilisables — les réflexes à prendre pour ne plus jamais mettre en forme à la main…",
    pdfUrl: "formation-word.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour poser une structure que Word peut lire, mettre à jour et numéroter tout seul : styles, sommaires et numérotation automatique, mise en page de rapports et de courriers officiels, puis publipostage et modèles réutilisables — les réflexes à prendre pour ne plus jamais mettre en forme à la main.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Styles, sommaires et numérotation automatique</h3>
        <p>Poser une structure que Word peut lire, mettre à jour et numéroter tout seul.</p>

        <h4>Les styles, la base de tout</h4>
        <p>Un style enregistre une mise en forme (police, taille, couleur, espacement) sous un nom réutilisable. L'appliquer à un titre, plutôt que de le formater à la main, garantit la cohérence et permet à Word de comprendre la structure du document (onglet Accueil, groupe Styles).</p>
        <p>Mise en forme manuelle (à éviter) :</p>
        <ul>
          <li>Chaque titre formaté séparément</li>
          <li>Incohérences d'une page à l'autre</li>
          <li>Un changement global = tout reprendre</li>
          <li>Sommaire automatique impossible</li>
        </ul>
        <p>Styles Titre 1, Titre 2… (à privilégier) :</p>
        <ul>
          <li>Mise en forme cohérente en un clic</li>
          <li>Modifier le style met à jour tout le document</li>
          <li>Base du sommaire et de la numérotation</li>
          <li>Navigation facilitée (volet Navigation)</li>
        </ul>
        <ol>
          <li>Sélectionner un texte déjà mis en forme comme vous le souhaitez</li>
          <li>Volet Styles &gt; clic droit sur le style à modifier &gt; « Modifier »</li>
          <li>Ajuster police, taille, couleur, espacement, puis valider</li>
          <li>Cocher « Mettre à jour automatiquement » pour propager les futurs réglages</li>
        </ol>
        <div class="callout">
          <strong>Astuce —</strong> basez toujours vos styles Titre 1 / Titre 2 sur la hiérarchie réelle du document : c'est exactement ce que lira le sommaire automatique.
        </div>

        <h4>Générer une table des matières automatique</h4>
        <p>Une fois les styles de titre appliqués, la table des matières se construit — et se met à jour — sans retaper une seule ligne.</p>
        <ol>
          <li>Appliquer les styles Titre 1, Titre 2… à tous les titres du document</li>
          <li>Placer le curseur à l'endroit où le sommaire doit apparaître</li>
          <li>Onglet Références &gt; Table des matières, puis choisir un style</li>
          <li>Clic droit sur la table &gt; « Mettre à jour les champs » après toute modification</li>
        </ol>
        <p>Exemple de sommaire généré automatiquement :</p>
        <table class="table-cours">
          <thead><tr><th>Titre</th><th>Page</th></tr></thead>
          <tbody>
            <tr><td>1. Introduction</td><td>3</td></tr>
            <tr><td>2. Contexte</td><td>4</td></tr>
            <tr><td>2.1 Objectifs</td><td>4</td></tr>
            <tr><td>2.2 Méthodologie</td><td>5</td></tr>
            <tr><td>3. Résultats</td><td>7</td></tr>
            <tr><td>4. Conclusion</td><td>10</td></tr>
          </tbody>
        </table>

        <h4>Numérotation multiniveau</h4>
        <p>Pour des titres numérotés (1., 1.1, 1.2, 2.…) qui se recalculent automatiquement quand une partie est ajoutée, déplacée ou supprimée (onglet Accueil &gt; Liste à plusieurs niveaux) :</p>
        <ol>
          <li>Sélectionner les titres concernés</li>
          <li>Choisir une bibliothèque « Liée au style » dans la galerie de listes</li>
          <li>Chaque niveau de numérotation suit alors le style de titre associé</li>
          <li>La numérotation se recalcule seule en cas d'ajout ou de suppression d'une section</li>
        </ol>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Mise en page de rapports et courriers officiels</h3>
        <p>Donner à chaque document la présentation attendue par son destinataire.</p>

        <h4>Structurer un rapport professionnel</h4>
        <ul>
          <li><strong>Sauts de section —</strong> isoler la page de garde, passer une page en orientation paysage, changer la numérotation entre parties</li>
          <li><strong>Marges et colonnes —</strong> Mise en page &gt; Marges ; largeur adaptée à la reliure ou à l'impression recto verso</li>
          <li><strong>En-têtes et pieds de page —</strong> titre du rapport, numéro de page, date ; liés ou différenciés selon la section</li>
          <li><strong>Page de garde et annexes —</strong> page de garde intégrée (Insertion &gt; Page de garde) ; saut de page avant chaque nouvelle partie majeure</li>
        </ul>

        <h4>La structure d'un courrier officiel aux normes</h4>
        <p>Un courrier professionnel suit un ordre attendu : coordonnées, lieu et date, objet, formule d'appel, corps, formule de politesse, signature.</p>
        <ul>
          <li>Enregistrer le format type comme modèle réutilisable (voir module 3)</li>
          <li>Aligner les blocs d'adresse avec des tabulations, jamais des espaces</li>
          <li>Créer un style « Signature » dédié pour la formule de politesse</li>
          <li>Insérer la date via Insertion &gt; Date, avec mise à jour automatique</li>
          <li>Vérifier les marges asymétriques si le courrier doit être relié</li>
        </ul>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Publipostage et modèles réutilisables</h3>
        <p>Produire en série des documents personnalisés, sans tout retaper.</p>

        <h4>Le publipostage en cinq étapes</h4>
        <ol>
          <li><strong>Préparer la source —</strong> tableau Excel ou liste Outlook, une colonne par champ</li>
          <li><strong>Démarrer la fusion —</strong> Publipostage &gt; Démarrer la fusion : lettres, e-mails, étiquettes</li>
          <li><strong>Sélectionner les destinataires —</strong> relier le fichier de données à la fusion</li>
          <li><strong>Insérer les champs —</strong> un champ de fusion à chaque endroit personnalisé</li>
          <li><strong>Aperçu et fusion finale —</strong> aperçu des résultats, puis imprimer ou envoyer</li>
        </ol>

        <h4>Créer un modèle réutilisable (.dotx)</h4>
        <p>Pourquoi un modèle ?</p>
        <ul>
          <li>Styles, en-têtes, logo et mise en page déjà en place</li>
          <li>Un double-clic ouvre un document vierge, jamais le modèle lui-même</li>
          <li>Toute l'équipe part du même point de départ</li>
          <li>Idéal pour rapports, courriers types, comptes rendus</li>
        </ul>
        <ol>
          <li>Fichier &gt; Enregistrer sous</li>
          <li>Type de fichier : Modèle Word (.dotx)</li>
          <li>Enregistrer dans le dossier « Modèles personnalisés »</li>
          <li>Le modèle apparaît ensuite dans Fichier &gt; Nouveau &gt; Personnel</li>
        </ol>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Les réflexes à garder</h3>
        <ul>
          <li><strong>Styles d'abord —</strong> ne jamais mettre en forme un titre à la main : appliquer un style</li>
          <li><strong>Sommaire lié —</strong> mettre à jour les champs après chaque modification de structure</li>
          <li><strong>Sections maîtrisées —</strong> un saut de section par rupture de mise en page (garde, orientation, numérotation)</li>
          <li><strong>Modèle unique —</strong> un .dotx par type de document récurrent, partagé à toute l'équipe</li>
          <li><strong>Source propre —</strong> une feuille de données bien nommée avant tout publipostage</li>
          <li><strong>Aperçu systématique —</strong> toujours prévisualiser avant de fusionner ou d'imprimer en nombre</li>
        </ul>
      </div>
    `
  },

  "PowerPoint — Présentations d'impact": {
    titre: "PowerPoint — Présentations d'impact",
    duree: "Sur-mesure", public: "Cadres, chargés de communication", prerequis: "Bases bureautiques",
    modules: ["Structurer un message avant de designer", "Charte visuelle et gabarits de slides", "Techniques de prise de parole appuyée"],
    apercu: "Définir son objectif et son message clé avant d'ouvrir PowerPoint, construire une charte visuelle simple et des gabarits réutilisables, puis défendre sa présentation à l'oral avec une voix, une posture et une gestion du trac maîtrisées…",
    pdfUrl: "presentations-impact.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour concevoir et défendre une présentation qui marque les esprits : structurer son message avant d'ouvrir PowerPoint, construire une charte visuelle simple avec des gabarits réutilisables, puis délivrer sa présentation à l'oral avec assurance.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Structurer un message avant de designer</h3>
        <h4>Le piège du « PowerPoint réflexe »</h4>
        <p>Ouvrir l'ordinateur et commencer à empiler des slides est la première cause de présentations confuses. Une présentation efficace se construit dans l'ordre suivant : le message, puis la structure, puis le visuel.</p>
        <ol>
          <li><strong>Définir l'objectif —</strong> informer, convaincre ou faire décider ? Chaque objectif appelle une structure et un niveau de détail différents</li>
          <li><strong>Formuler le message clé —</strong> une phrase unique qui résume ce que l'audience doit retenir si elle ne retient qu'une chose</li>
          <li><strong>Construire la structure —</strong> organiser les idées secondaires pour qu'elles démontrent et renforcent ce message clé</li>
        </ol>

        <h4>Une trame narrative en 4 temps</h4>
        <p>La structure « Situation → Complication → Résolution → Action » fonctionne pour la grande majorité des présentations professionnelles :</p>
        <ul>
          <li><strong>Situation —</strong> poser le contexte connu et partagé par l'audience, pour démarrer sur un terrain commun</li>
          <li><strong>Complication —</strong> introduire le problème, l'enjeu ou le changement qui justifie la présentation</li>
          <li><strong>Résolution —</strong> présenter la solution, l'analyse ou la recommandation, appuyée par des preuves</li>
          <li><strong>Action —</strong> conclure sur ce qui est attendu de l'audience : décider, valider, agir</li>
        </ul>

        <h4>Le titre-assertion et le storyboard papier</h4>
        <p>Plutôt qu'un titre-mot comme « Résultats », préférez une assertion qui porte le message du slide, par exemple « Les ventes ont progressé de 18 % au T3 ». Un lecteur qui ne voit que les titres doit pouvoir reconstituer toute l'histoire.</p>
        <p>Avant d'ouvrir PowerPoint, esquissez chaque slide sur papier ou post-it : un post-it = un slide = une idée. Réorganiser l'ordre est gratuit sur papier, coûteux à l'écran — ne passez à l'ordinateur qu'une fois la trame validée.</p>
        <div class="callout">
          <strong>À retenir —</strong> le temps passé à clarifier le message avant de designer est le temps le plus rentable de toute la préparation.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Storyboarder une présentation</h4>
          <ol>
            <li>Choisir une présentation réelle à préparer et formuler son objectif et son message clé en une phrase</li>
            <li>Esquisser sur papier ou post-it la trame en 4 temps : situation, complication, résolution, action</li>
            <li>Reformuler chaque titre de slide en assertion plutôt qu'en mot-clé</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Charte visuelle et gabarits de slides</h3>
        <h4>Construire une charte visuelle simple</h4>
        <p>Une charte efficace tient sur une seule page : elle limite les choix pour aller plus vite et rester cohérent d'un slide à l'autre.</p>
        <ul>
          <li><strong>Palette de couleurs —</strong> une couleur principale, une couleur d'accent, et deux ou trois neutres (gris, blanc) — jamais plus de 4 couleurs actives</li>
          <li><strong>Typographie —</strong> une police pour les titres, une police pour le texte courant, cohérentes avec l'identité de l'entreprise et lisibles à distance</li>
          <li><strong>Grille et marges —</strong> des marges constantes et une grille invisible pour aligner systématiquement titres, textes et visuels</li>
        </ul>

        <h4>Les 5 gabarits indispensables</h4>
        <table class="table-cours">
          <thead><tr><th>Gabarit</th><th>Usage</th><th>Règle clé</th></tr></thead>
          <tbody>
            <tr><td>Titre</td><td>Ouverture, ou transition entre parties</td><td>Un message fort, très peu de texte</td></tr>
            <tr><td>Contenu standard</td><td>Développer une idée avec texte ou visuel</td><td>Un titre-assertion + 3 à 5 éléments maximum</td></tr>
            <tr><td>Chiffre clé</td><td>Mettre en avant une donnée marquante</td><td>Un seul chiffre géant, contexte en une phrase</td></tr>
            <tr><td>Comparaison</td><td>Opposer deux options, avant/après</td><td>Structure symétrique, même poids visuel</td></tr>
            <tr><td>Clôture</td><td>Résumer et lancer l'appel à l'action</td><td>Rappeler le message clé, une action explicite</td></tr>
          </tbody>
        </table>
        <p>Créer ces gabarits une fois dans le masque des diapositives évite de refaire la mise en page à chaque nouvelle présentation.</p>

        <h4>Hiérarchie visuelle et code couleur</h4>
        <p>Pour guider l'œil : la taille (le message principal est toujours l'élément le plus grand du slide), la graisse (le gras isole les mots-clés, jamais des phrases entières) et la couleur (une couleur d'accent unique pour signaler ce qui compte le plus).</p>
        <p>Un code couleur cohérent facilite la lecture : bleu pour un fait ou une donnée, orange pour un point d'attention ou un message clé, vert pour un résultat positif ou une action validée.</p>

        <h4>Bonnes pratiques et pièges à éviter</h4>
        <table class="table-cours">
          <thead><tr><th>À faire</th><th>À éviter</th></tr></thead>
          <tbody>
            <tr><td>Une idée par slide, avec de l'espace blanc autour</td><td>Plus de 4 couleurs ou 2 polices sur une même présentation</td></tr>
            <tr><td>Des visuels en haute résolution, cohérents en style</td><td>Des slides denses, lus mot à mot à l'audience</td></tr>
            <tr><td>Un texte lisible à 3 mètres de distance</td><td>Effets de transition ou animations 3D superflus</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>À retenir —</strong> une charte visuelle simple, appliquée avec discipline, a plus d'impact qu'un design sophistiqué mais incohérent.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Construire ses gabarits</h4>
          <ol>
            <li>Définir sa palette (1 couleur principale, 1 accent, 2-3 neutres) et sa typographie (1 police titre, 1 police texte)</li>
            <li>Créer les 5 gabarits dans le masque des diapositives : titre, contenu standard, chiffre clé, comparaison, clôture</li>
            <li>Appliquer le code couleur (bleu/orange/vert) à une présentation existante</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Techniques de prise de parole appuyée</h3>
        <h4>Se préparer avant de parler</h4>
        <p>La meilleure présentation orale n'est pas lue : elle est connue, répétée, puis délivrée avec naturel. Répétez à voix haute au moins trois fois, chronomètre en main, en connaissant votre message clé par cœur pour ne jamais perdre le fil sous le stress.</p>

        <h4>Voix, rythme et posture</h4>
        <ul>
          <li><strong>Une voix qui porte le message —</strong> varier le volume pour souligner les points importants, marquer une pause avant et après une idée clé, ralentir le débit sur les chiffres et les noms propres</li>
          <li><strong>Une posture d'ancrage —</strong> pieds ancrés, poids réparti, gestes ouverts vers l'audience ; contact visuel réparti sur toute la salle, pas uniquement au premier rang ; se déplacer avec intention, pas par nervosité</li>
        </ul>

        <h4>Apprivoiser le trac</h4>
        <ul>
          <li><strong>Respiration abdominale —</strong> quelques respirations profondes avant d'entrer en salle abaissent le rythme cardiaque</li>
          <li><strong>Ancrage physique —</strong> sentir ses appuis au sol recentre l'attention sur le corps plutôt que sur le stress</li>
          <li><strong>Visualisation positive —</strong> s'imaginer délivrer sa présentation avec succès avant de la commencer</li>
        </ul>

        <h4>Répondre aux questions difficiles</h4>
        <ul>
          <li><strong>Reformuler la question —</strong> gagner du temps et s'assurer d'avoir bien compris l'intention derrière la question</li>
          <li><strong>Temporiser si besoin —</strong> « C'est une bonne question, laissez-moi y revenir précisément » est une réponse honnête</li>
          <li><strong>Revenir au message clé —</strong> chaque réponse peut se reconnecter au message central de la présentation</li>
        </ul>
        <div class="callout">
          <strong>À retenir —</strong> le trac ne disparaît pas avec l'expérience : il se gère. La préparation et la respiration en sont les meilleurs outils.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Répéter sa prise de parole</h4>
          <ol>
            <li>Répéter sa présentation à voix haute, chronomètre en main, en s'enregistrant si possible</li>
            <li>Identifier deux moments où marquer une pause ou ralentir le débit</li>
            <li>Anticiper une question difficile et préparer une réponse en trois temps : reformuler, répondre, reconnecter au message clé</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Module 1 —</strong> le message et la structure se construisent avant d'ouvrir PowerPoint, pas pendant</li>
          <li><strong>Module 2 —</strong> une charte simple et des gabarits réutilisables valent mieux qu'un design sophistiqué mais incohérent</li>
          <li><strong>Module 3 —</strong> une présentation se délivre, elle ne se lit pas : voix, posture et respiration en sont les leviers</li>
        </ul>
        <div class="callout">
          <strong>Prochaine étape —</strong> choisir une prochaine présentation, la storyboarder sur papier avant tout, puis la répéter à voix haute au moins trois fois.
        </div>
      </div>
    `
  },

  "Initiation aux outils du web": {
    titre: "Initiation aux outils du web",
    duree: "Sur-mesure", public: "Entrepreneurs, équipes commerciales", prerequis: "Aucun",
    modules: ["Panorama des outils indispensables", "Mise en place d'une présence en ligne cohérente", "Bonnes pratiques de sécurité numérique"],
    apercu: "Panorama des outils indispensables, mise en place d'une présence en ligne cohérente et bonnes pratiques de sécurité numérique — les repères essentiels, expliqués en détail…",
    pdfUrl: "formation-outils-web.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour s'équiper juste, exister en ligne de façon cohérente et se protéger simplement : panorama des grandes familles d'outils indispensables, mise en place d'une présence en ligne reconnaissable sur tous les canaux, puis bonnes pratiques de sécurité numérique au quotidien.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Panorama des outils indispensables</h3>
        <p>S'équiper juste, sans se noyer sous les options : les grandes familles d'outils et la méthode pour bien choisir.</p>

        <h4>Six familles d'outils à connaître</h4>
        <p>Avant de chercher un outil précis, il est utile de connaître les grandes catégories qui couvrent la quasi-totalité des besoins numériques du quotidien.</p>
        <ul>
          <li><strong>Navigateur web —</strong> Chrome, Firefox, Edge, Safari — la porte d'entrée vers tout le reste. Un seul navigateur bien configuré suffit largement</li>
          <li><strong>Messagerie —</strong> une adresse professionnelle claire, organisée par dossiers, avec une signature soignée et lisible</li>
          <li><strong>Stockage en ligne —</strong> Google Drive, OneDrive, Dropbox — pour sauvegarder et partager sans clé USB ni pièce jointe trop lourde</li>
          <li><strong>Visioconférence —</strong> Teams, Zoom, Google Meet — pour les échanges à distance, avec un lien de réunion stable à partager</li>
          <li><strong>Travail collaboratif —</strong> documents partagés et tableaux de tâches — pour avancer à plusieurs sans se perdre dans les versions</li>
          <li><strong>Gestionnaire de mots de passe —</strong> un coffre-fort unique pour tous les comptes — le socle du module 3 sur la sécurité</li>
        </ul>

        <h4>Cinq critères pour choisir un outil sans se tromper</h4>
        <ol>
          <li><strong>Le besoin réel —</strong> partir d'une tâche précise (partager un fichier, planifier une réunion), jamais de l'outil à la mode</li>
          <li><strong>La compatibilité —</strong> vérifier qu'il fonctionne avec ce que vos contacts et collègues utilisent déjà</li>
          <li><strong>La simplicité d'usage —</strong> un outil que personne n'ouvre au bout d'un mois n'a rien résolu</li>
          <li><strong>La sécurité des données —</strong> où sont hébergées les données, qui peut les consulter, y a-t-il un chiffrement</li>
          <li><strong>Le coût réel —</strong> une version gratuite suffisante, ou un abonnement réellement justifié par l'usage prévu</li>
        </ol>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Mise en place d'une présence en ligne cohérente</h3>
        <p>Être reconnaissable, quel que soit le canal utilisé pour vous trouver.</p>

        <h4>Les quatre piliers d'une présence en ligne cohérente</h4>
        <ul>
          <li><strong>Identité —</strong> même nom, même photo ou logo, même façon de se présenter sur chaque canal</li>
          <li><strong>Ton —</strong> un registre constant (formel, chaleureux, technique) reconnaissable d'un message à l'autre</li>
          <li><strong>Visuel —</strong> couleurs, typographie et mise en page qui se répètent sur le site, les réseaux et les documents</li>
          <li><strong>Canaux —</strong> une poignée de canaux tenus à jour vaut mieux que dix profils abandonnés</li>
        </ul>

        <h4>Construire un point d'entrée principal</h4>
        <p>Un site simple ou une page profil complète (LinkedIn, Google Business Profile…) sert de référence : c'est vers elle que doivent pointer tous vos autres canaux.</p>
        <ol>
          <li><strong>Choisir un nom stable —</strong> le même identifiant partout : url, pseudo, adresse e-mail</li>
          <li><strong>Rédiger une présentation courte —</strong> qui vous êtes, ce que vous faites, pour qui, en deux ou trois phrases</li>
          <li><strong>Ajouter une photo ou un logo net —</strong> le même visuel sur tous les canaux, en bonne résolution</li>
          <li><strong>Renseigner les coordonnées utiles —</strong> un seul e-mail et un seul numéro à jour, faciles à trouver</li>
          <li><strong>Relier les autres canaux —</strong> réseaux sociaux, portfolio, page de contact, tous accessibles depuis ce point d'entrée</li>
        </ol>

        <h4>Harmoniser ses profils sur les réseaux sociaux</h4>
        <p>Check-list avant publication :</p>
        <ul>
          <li>Même nom d'utilisateur, ou très proche, sur chaque plateforme</li>
          <li>Photo de profil et bannière de la même famille visuelle</li>
          <li>Biographie courte et à jour, avec un lien vers le point d'entrée</li>
          <li>Fréquence de publication réaliste plutôt qu'ambitieuse puis abandonnée</li>
          <li>Ton et vocabulaire cohérents avec le reste de la présence en ligne</li>
        </ul>
        <div class="callout">
          <strong>Un ou deux réseaux, bien tenus —</strong> mieux vaut être actif et réactif sur un seul réseau adapté à votre public que présent partout et silencieux sur la plupart. Question à se poser : « Où mon public me cherche-t-il vraiment ? »
        </div>

        <h4>Se rendre trouvable sur les moteurs de recherche</h4>
        <ul>
          <li><strong>Titre et description clairs —</strong> chaque page indique en une phrase ce qu'elle contient, avec les mots que vos visiteurs tapent réellement</li>
          <li><strong>Fiche établissement à jour —</strong> Google Business Profile : adresse, horaires et téléphone identiques partout</li>
          <li><strong>Avis et retours —</strong> répondre aux avis, même négatifs, avec calme et professionnalisme</li>
          <li><strong>Cohérence des informations —</strong> même nom, même adresse, même numéro sur le site, les annuaires et les réseaux sociaux</li>
        </ul>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Bonnes pratiques de sécurité numérique</h3>
        <p>Protéger comptes, données et vie privée, sans complexité inutile.</p>

        <h4>Des mots de passe forts, gérés simplement</h4>
        <p>À éviter :</p>
        <ul>
          <li>Un mot de passe unique réutilisé partout</li>
          <li>Des informations personnelles devinables (date de naissance, prénom)</li>
          <li>Un mot de passe noté sur un post-it visible</li>
          <li>Moins de 12 caractères, sans mélange de types</li>
        </ul>
        <p>À adopter :</p>
        <ul>
          <li>Une phrase longue et unique par compte (16 caractères ou plus)</li>
          <li>Un gestionnaire de mots de passe qui les génère et les retient pour vous</li>
          <li>Un mot de passe maître très solide, connu de vous seul</li>
          <li>Un renouvellement immédiat en cas de fuite de données signalée</li>
        </ul>

        <h4>La double authentification (2FA) en pratique</h4>
        <p>Même avec un mot de passe volé, un compte protégé par la 2FA reste inaccessible sans le second facteur.</p>
        <ol>
          <li><strong>Identifiant + mot de passe —</strong> saisie des identifiants habituels</li>
          <li><strong>Second facteur demandé —</strong> le service exige une preuve supplémentaire</li>
          <li><strong>Code reçu —</strong> par SMS, application ou clé physique</li>
          <li><strong>Accès accordé —</strong> uniquement si les deux facteurs sont valides</li>
        </ol>
        <div class="callout">
          <strong>À activer en priorité —</strong> messagerie principale, banque en ligne, réseaux sociaux professionnels, gestionnaire de mots de passe.
        </div>

        <h4>Repérer un e-mail d'hameçonnage (phishing)</h4>
        <div class="callout">
          <strong>Exemple de mail piégé —</strong> expéditeur « securite@banque-support-info.com » ; objet « Action urgente requise sous 24h » ; message annonçant la suspension du compte et incitant à cliquer immédiatement sur un lien pour confirmer les identifiants ; lien raccourci suspect (bit.ly/verif-compte-2847).
        </div>
        <ul>
          <li><strong>L'expéditeur —</strong> un domaine qui imite la marque sans être le vrai</li>
          <li><strong>L'urgence —</strong> la pression à agir « immédiatement » pour empêcher toute vérification</li>
          <li><strong>Le lien —</strong> une adresse raccourcie ou légèrement différente du site officiel</li>
        </ul>

        <h4>Sauvegardes et mises à jour : les habitudes qui protègent</h4>
        <ul>
          <li><strong>Sauvegarder régulièrement —</strong> copier ses fichiers importants sur un stockage en ligne et un support externe, selon la règle 3-2-1</li>
          <li><strong>Mettre à jour sans attendre —</strong> système, navigateur et applications : les mises à jour corrigent des failles de sécurité connues</li>
          <li><strong>Vérifier les autorisations —</strong> revoir périodiquement les applications qui ont accès à vos comptes et retirer celles inutilisées</li>
          <li><strong>Séparer usages pro et perso —</strong> des comptes distincts limitent les conséquences en cas de compromission de l'un des deux</li>
        </ul>

        <h4>Réseaux publics et vie privée : les réflexes simples</h4>
        <ol>
          <li>Éviter les opérations sensibles (banque, achats) sur un Wi-Fi public non sécurisé</li>
          <li>Vérifier le cadenas et le « https » dans la barre d'adresse avant de saisir des données</li>
          <li>Limiter les informations personnelles partagées publiquement sur les réseaux sociaux</li>
          <li>Se déconnecter des sessions actives sur les appareils partagés ou publics</li>
          <li>Lire au moins les grandes lignes des permissions demandées par une nouvelle application</li>
        </ol>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Les réflexes à garder</h3>
        <ul>
          <li><strong>Un outil, un besoin —</strong> choisir en fonction de l'usage réel, jamais de la tendance</li>
          <li><strong>Une seule identité —</strong> même nom, même visuel, même ton sur tous les canaux</li>
          <li><strong>Peu de canaux, bien tenus —</strong> mieux vaut deux profils actifs que dix abandonnés</li>
          <li><strong>Mots de passe uniques —</strong> un gestionnaire dédié plutôt que la mémoire ou un post-it</li>
          <li><strong>2FA activée partout où c'est possible —</strong> le second facteur bloque l'essentiel des tentatives d'accès</li>
          <li><strong>Prudence avant de cliquer —</strong> vérifier expéditeur, lien et urgence avant toute action</li>
        </ul>
      </div>
    `
  },

  "IA générative appliquée": {
    titre: "IA générative appliquée",
    duree: "Sur-mesure", public: "Toute équipe souhaitant gagner du temps", prerequis: "Aisance informatique de base",
    modules: ["Comprendre les usages utiles vs les effets de mode", "Prompts pour la rédaction et le visuel", "Intégrer l'IA dans ses processus quotidiens", "Les meilleures IA et leur spécificité"],
    apercu: "Distinguer les usages utiles des effets de mode, écrire de bons prompts et intégrer l'IA dans son quotidien professionnel — formation en quatre modules, avec un exercice pratique à la fin de chacun…",
    pdfUrl: "formation-ia-generative-appliquee.pdf",
    contenuComplet: `
      <p class="lede-cours">Distinguer les usages utiles des effets de mode, écrire de bons prompts et intégrer l'IA dans son quotidien professionnel — formation en quatre modules, avec un exercice pratique à la fin de chacun.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Usages utiles vs effets de mode</h3>
        <h4>L'IA générative en une page</h4>
        <ul>
          <li>Des modèles entraînés sur d'immenses quantités de texte, d'images ou de sons, capables de produire du contenu nouveau à partir d'une consigne (le « prompt »)</li>
          <li>Elle ne « sait » rien au sens humain : elle prédit la suite la plus probable, d'où des erreurs plausibles mais fausses (hallucinations)</li>
          <li>Trois grandes familles d'usage : générer (texte, image, code), transformer (résumer, traduire, reformuler), analyser (extraire, classer, répondre sur un document)</li>
          <li>L'IA est un outil de productivité, pas un jugement : elle propose, la personne décide et valide</li>
        </ul>
        <div class="callout">
          <strong>À retenir —</strong> Un bon usage de l'IA générative fait gagner du temps sur une tâche précise, de manière fiable et répétable — pas seulement « impressionnante » une fois.
        </div>

        <h4>Usages utiles vs effets de mode</h4>
        <table class="table-cours">
          <thead><tr><th>Signes d'un usage utile</th><th>Signes d'un effet de mode</th></tr></thead>
          <tbody>
            <tr><td>Résout un problème récurrent et identifié</td><td>Utilisé « parce que tout le monde en parle »</td></tr>
            <tr><td>Fait gagner un temps mesurable</td><td>Aucun problème précis à résoudre au départ</td></tr>
            <tr><td>Le résultat est vérifiable avant diffusion</td><td>Résultat non vérifié, publié tel quel</td></tr>
            <tr><td>Reproductible sur plusieurs cas similaires</td><td>Usage ponctuel, jamais répété ensuite</td></tr>
            <tr><td>S'intègre dans un outil déjà utilisé</td><td>Ajoute une étape sans réduire l'effort global</td></tr>
          </tbody>
        </table>

        <h4>Pièges courants et vigilance</h4>
        <ul>
          <li><strong>Hallucinations —</strong> l'IA peut inventer des faits, sources ou chiffres avec une confiance totale : toujours vérifier les informations factuelles, croiser une information importante avec une autre source, garder une trace de ce qui a été généré.</li>
          <li><strong>Sur-confiance —</strong> accepter une réponse sans relecture critique, surtout sur des sujets sensibles (juridique, santé, chiffres).</li>
          <li><strong>Dépendance —</strong> perdre en autonomie de rédaction ou de réflexion à force de tout déléguer à l'outil.</li>
          <li><strong>Confidentialité —</strong> ne jamais saisir de données sensibles ou personnelles dans un outil grand public sans vérifier sa politique de confidentialité.</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Trier usages utiles et effets de mode</h4>
          <ol>
            <li>Lister 5 tâches de votre travail où vous avez déjà pensé à utiliser l'IA</li>
            <li>Pour chacune, appliquer la grille : gain de temps réel ? résultat vérifiable ? répétable ?</li>
            <li>Classer chaque tâche en « usage utile », « à tester » ou « effet de mode »</li>
            <li>Identifier une tâche répétitive non encore assistée par l'IA à explorer ensuite</li>
            <li>Partager en groupe un exemple d'hallucination ou d'erreur d'IA rencontré</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Prompts pour la rédaction et le visuel</h3>
        <h4>Anatomie d'un bon prompt</h4>
        <ul>
          <li><strong>Rôle —</strong> « Tu es un(e) … » — donne un cadre et un niveau d'expertise à l'IA</li>
          <li><strong>Contexte —</strong> la situation, le public visé, les contraintes à respecter</li>
          <li><strong>Tâche —</strong> l'action précise demandée (rédiger, résumer, comparer, corriger…)</li>
          <li><strong>Format —</strong> longueur, structure, ton, langue, exemple de sortie attendue</li>
          <li><strong>Itération —</strong> reformuler, préciser ou corriger la réponse plutôt que recommencer de zéro</li>
        </ul>
        <div class="callout">
          <strong>Exemple de structure —</strong> « Tu es un(e) [rôle]. Voici le contexte : [contexte]. Rédige [tâche précise]. Format : [longueur, ton, structure]. Voici un exemple de ce que j'attends : [exemple]. »
        </div>

        <h4>Techniques de prompting utiles</h4>
        <ul>
          <li><strong>Donner des exemples —</strong> fournir 1 à 2 exemples du résultat attendu (« few-shot »), très efficace pour imposer un ton ou un format précis, idéal pour reproduire un style maison</li>
          <li><strong>Décomposer la tâche —</strong> demander un plan avant le texte complet, traiter une tâche complexe en plusieurs étapes, valider chaque étape avant de continuer</li>
          <li><strong>Itérer et préciser —</strong> « Raccourcis », « Rends plus formel », « Ajoute un exemple » — corriger un détail plutôt que relancer un nouveau prompt, demander plusieurs variantes pour comparer</li>
        </ul>

        <h4>Prompts pour la rédaction</h4>
        <table class="table-cours">
          <thead><tr><th>Besoin</th><th>Exemple de prompt</th></tr></thead>
          <tbody>
            <tr><td>E-mail professionnel</td><td>« Rédige un e-mail formel à un client pour reporter un rendez-vous, ton courtois, 5 phrases maximum. »</td></tr>
            <tr><td>Résumé de document</td><td>« Résume ce texte en 5 points clés, pour un lecteur non spécialiste, en français. »</td></tr>
            <tr><td>Réécriture / ton</td><td>« Réécris ce paragraphe sur un ton plus chaleureux et moins technique, même longueur. »</td></tr>
            <tr><td>Article de blog</td><td>« Rédige un article de 400 mots sur [sujet], structuré avec intitulés, pour un public débutant. »</td></tr>
            <tr><td>Relecture</td><td>« Corrige l'orthographe et la grammaire de ce texte sans changer le style. »</td></tr>
          </tbody>
        </table>

        <h4>Prompts pour le visuel</h4>
        <ul>
          <li><strong>Sujet principal —</strong> ce que l'image doit montrer, en premier dans le prompt</li>
          <li><strong>Style —</strong> photo réaliste, illustration, aquarelle, 3D, logo minimaliste…</li>
          <li><strong>Composition & cadrage —</strong> plan large, gros plan, vue de dessus, centré…</li>
          <li><strong>Lumière & ambiance —</strong> lumière douce, contre-jour, couleurs vives ou pastel</li>
          <li><strong>Format —</strong> carré, portrait, paysage, selon l'usage final (réseau social, impression)</li>
          <li><strong>Exclusions —</strong> préciser ce qu'on ne veut pas voir apparaître</li>
        </ul>
        <div class="callout">
          <strong>Exemple de prompt visuel —</strong> « Illustration plate et moderne d'une équipe travaillant autour d'un ordinateur, style minimaliste, palette de couleurs violet et bleu, fond uni, format carré, sans texte. »
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Rédiger ses propres prompts</h4>
          <ol>
            <li>Écrire un prompt structuré (rôle, contexte, tâche, format) pour un e-mail professionnel réel</li>
            <li>Tester le même prompt sans structure, puis comparer les deux résultats</li>
            <li>Écrire un prompt visuel complet pour illustrer un projet ou une présentation</li>
            <li>Itérer une fois sur chaque résultat (préciser, raccourcir, changer le ton ou le style)</li>
            <li>Conserver les meilleurs prompts dans un document partagé de l'équipe</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Intégrer l'IA dans ses processus quotidiens</h3>
        <h4>Cartographier ses tâches</h4>
        <ol>
          <li><strong>Lister ses tâches récurrentes —</strong> rédaction d'e-mails, comptes-rendus, recherche d'information, création de visuels, relecture de documents.</li>
          <li><strong>Identifier le temps passé —</strong> estimer le temps consacré à chaque tâche sur une semaine type, pour prioriser où l'IA apporte le plus de valeur.</li>
          <li><strong>Repérer les tâches « assistables » —</strong> tâches répétitives, à faible risque, avec un résultat facilement vérifiable sont les meilleures candidates.</li>
          <li><strong>Prioriser 2 ou 3 tâches —</strong> commencer petit : mieux vaut bien intégrer l'IA sur 2 tâches que la tester partout sans suivi.</li>
        </ol>

        <h4>Où insérer l'IA dans son flux de travail</h4>
        <table class="table-cours">
          <thead><tr><th>En amont</th><th>Pendant la production</th><th>En aval</th></tr></thead>
          <tbody>
            <tr><td>Recherche et synthèse d'information</td><td>Rédaction assistée de premiers jets</td><td>Relecture, correction, reformulation</td></tr>
            <tr><td>Brainstorming d'idées ou de plans</td><td>Génération de visuels ou de variantes</td><td>Résumé et synthèse pour diffusion</td></tr>
            <tr><td>Préparation de brouillons rapides</td><td>Aide à la structuration d'un document</td><td>Traduction ou adaptation de ton</td></tr>
          </tbody>
        </table>

        <h4>Des outils déjà intégrés à votre environnement</h4>
        <ul>
          <li>Assistants intégrés aux suites bureautiques (traitement de texte, tableur, présentation) pour rédiger, résumer ou analyser sans changer d'outil</li>
          <li>Extensions de navigateur pour résumer une page web ou reformuler un texte en un clic</li>
          <li>Assistants dans la messagerie pour rédiger ou raccourcir des e-mails</li>
          <li>Chatbots dédiés pour les tâches ponctuelles (rédaction, recherche, brainstorming)</li>
          <li>Automatisations simples (règles, macros) combinées à l'IA pour des tâches répétitives</li>
        </ul>
        <div class="callout">
          <strong>Principe clé —</strong> privilégier l'outil qui vit déjà dans votre flux de travail plutôt que d'ajouter une étape de copier-coller supplémentaire.
        </div>

        <h4>Bonnes pratiques et vigilance</h4>
        <table class="table-cours">
          <thead><tr><th>À faire</th><th>À éviter</th></tr></thead>
          <tbody>
            <tr><td>Vérifier systématiquement les faits et chiffres générés</td><td>Saisir des données confidentielles ou personnelles sans vérification</td></tr>
            <tr><td>Garder une trace des prompts efficaces pour les réutiliser</td><td>Publier un contenu généré sans relecture humaine</td></tr>
            <tr><td>Adapter le ton final à la voix de l'entreprise ou de la personne</td><td>Utiliser l'IA pour des décisions à fort enjeu sans validation</td></tr>
            <tr><td>Mesurer régulièrement le temps réellement gagné</td><td>Multiplier les outils sans réelle valeur ajoutée</td></tr>
            <tr><td>Former les équipes aux mêmes bonnes pratiques</td><td>Perdre la maîtrise du sujet en déléguant tout le raisonnement</td></tr>
          </tbody>
        </table>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Construire un mini-workflow assisté par l'IA</h4>
          <ol>
            <li>Choisir une tâche récurrente identifiée précédemment</li>
            <li>Découper la tâche en étapes : préparation, production, vérification</li>
            <li>Indiquer à quelle(s) étape(s) l'IA apporte une aide concrète</li>
            <li>Rédiger un prompt type réutilisable pour cette tâche</li>
            <li>Définir un point de contrôle humain avant toute diffusion du résultat</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 4</span>
        <h3>Les meilleures IA et leur spécificité</h3>
        <h4>Il n'existe pas de « meilleure IA » universelle</h4>
        <ul>
          <li>Le marché évolue très vite : le classement des outils change régulièrement</li>
          <li>Chaque famille d'outils a une vraie spécialité : conversation, rédaction, image, vidéo, audio, code</li>
          <li>La plupart des professionnels utilisent 2 à 3 outils complémentaires plutôt qu'un seul</li>
          <li>Le bon choix dépend du besoin, de l'écosystème déjà utilisé (bureautique, messagerie) et des exigences de confidentialité</li>
        </ul>
        <div class="callout">
          <strong>Question à se poser avant de choisir —</strong> quel est mon besoin précis (texte, image, vidéo, code) ? Ai-je besoin qu'il s'intègre à mes outils actuels ? Quel niveau de confidentialité est requis ?
        </div>

        <h4>Assistants conversationnels et rédaction</h4>
        <table class="table-cours">
          <thead><tr><th>Outil</th><th>Spécificité</th></tr></thead>
          <tbody>
            <tr><td>ChatGPT (OpenAI)</td><td>Très polyvalent : rédaction, image, code et navigation web dans une même conversation</td></tr>
            <tr><td>Claude (Anthropic)</td><td>Réputé pour des textes longs, nuancés et un style naturel ; solide en analyse et en code</td></tr>
            <tr><td>Gemini (Google)</td><td>Intégration native à Google Workspace (Gmail, Docs, Sheets) et long contexte</td></tr>
            <tr><td>Perplexity</td><td>Orienté recherche : synthétise plusieurs sources web avec leurs références</td></tr>
            <tr><td>Mistral</td><td>Alternative européenne, plusieurs modèles ouverts, bon rapport performance/coût</td></tr>
          </tbody>
        </table>

        <h4>Génération d'images</h4>
        <ul>
          <li><strong>Midjourney —</strong> référence pour la qualité artistique et créative, fort contrôle du style visuel, très utilisé par les créatifs et designers</li>
          <li><strong>DALL·E / ChatGPT Images —</strong> génération intégrée directement dans la conversation, pratique pour un usage rapide au quotidien, bonne compréhension des consignes en langage naturel</li>
          <li><strong>Adobe Firefly —</strong> entraîné sur des contenus sous licence (usage pro sécurisé), intégré à Photoshop et Illustrator, choix privilégié des équipes créatives en entreprise</li>
        </ul>

        <h4>Vidéo, audio et code</h4>
        <ul>
          <li><strong>Vidéo —</strong> Synthesia, HeyGen (vidéos avec avatars parlants pour la formation), Runway, Pika (génération et montage vidéo créatif court)</li>
          <li><strong>Audio & musique —</strong> Suno (composition musicale à partir d'une description), AIVA, Soundraw (musiques libres de droits pour contenus)</li>
          <li><strong>Code —</strong> GitHub Copilot (suggestions de code dans l'éditeur), Claude Code (assistant agentique pour des tâches de développement complètes)</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Associer le bon outil au bon besoin</h4>
          <ol>
            <li>Reprendre les 2-3 tâches prioritaires identifiées au module 3</li>
            <li>Pour chacune, identifier la famille d'outil adaptée (texte, image, vidéo, audio, code)</li>
            <li>Choisir un outil précis à tester en tenant compte de l'écosystème déjà utilisé</li>
            <li>Vérifier le niveau de confidentialité requis avant de choisir l'outil final</li>
            <li>Partager ses choix en groupe et comparer les arguments</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Module 1 —</strong> vérifier gain de temps réel et fiabilité, rester vigilant face aux hallucinations, éviter un usage sans valeur ajoutée</li>
          <li><strong>Module 2 —</strong> structurer rôle, contexte, tâche, format ; donner des exemples et itérer ; adapter le prompt au texte ou au visuel</li>
          <li><strong>Module 3 —</strong> cartographier ses tâches récurrentes, insérer l'IA sans multiplier les outils, garder un point de contrôle humain</li>
          <li><strong>Module 4 —</strong> pas d'IA universelle, des spécialités : choisir selon le besoin et l'écosystème, combiner 2-3 outils complémentaires</li>
        </ul>
        <div class="callout">
          <strong>Pour aller plus loin —</strong> tester un nouvel outil par mois sur une tâche précise, et partager les retours d'expérience en équipe.
        </div>
      </div>
    `
  },

  "Créer un site web avec l'IA": {
    titre: "Créer un site web avec l'IA",
    duree: "4 séances d'1h30, une par semaine", public: "Débutants souhaitant créer leur site avec l'IA", prerequis: "Aucun",
    modules: ["Séance 1 — Site vitrine avec Claude", "Séance 2 — Personnalisation & e-commerce", "Séance 3 — Mise en ligne gratuite (Vercel & Netlify)", "Séance 4 — Base de données Firebase"],
    apercu: "Une séance d'1h30 par semaine pour apprendre à créer un site vitrine puis une boutique en ligne avec Claude IA, les publier gratuitement et les connecter à une vraie base de données…",
    pdfUrl: "formation-creer-un-site-web-avec-ia.pdf",
    contenuComplet: `
      <p class="lede-cours">Quatre séances d'1h30, une par semaine, pour passer d'une idée à un site vitrine ou une boutique en ligne publiée, en utilisant Claude IA pour écrire le code, puis Vercel/Netlify pour l'héberger et Firebase pour le rendre dynamique. Formation 100 % gratuite, aucun outil payant n'est nécessaire.</p>

      <div class="module-block">
        <span class="module-tag">Séance 1</span>
        <h3>Site vitrine avec Claude</h3>
        <h4>Qu'est-ce que Claude IA ?</h4>
        <ol>
          <li>Aller sur claude.ai et créer un compte gratuit</li>
          <li>Choisir la fonctionnalité « Artifacts » pour afficher un aperçu du site</li>
          <li>Décrire le site souhaité en une ou plusieurs phrases</li>
          <li>Demander des ajustements par des messages successifs</li>
        </ol>
        <div class="callout">
          <strong>Exemple de prompt —</strong> « Crée-moi un site vitrine pour un salon de coiffure, avec une page d'accueil, nos services et un formulaire de contact. »
        </div>

        <h4>Les trois briques d'une page web</h4>
        <ul>
          <li><strong>HTML — le contenu —</strong> le texte, les images, les titres, les boutons : la structure de la page</li>
          <li><strong>CSS — le style —</strong> les couleurs, les polices, les espacements : l'apparence de la page</li>
          <li><strong>JavaScript — l'interactivité —</strong> le menu qui s'ouvre, le panier qui se met à jour, les animations</li>
        </ul>

        <h4>Bien écrire son prompt</h4>
        <table class="table-cours">
          <thead><tr><th>À éviter</th><th>À privilégier</th></tr></thead>
          <tbody>
            <tr><td>« Fais-moi un site » — trop vague : Claude devra deviner votre activité, vos couleurs et vos contenus.</td><td>« Crée un site vitrine pour ma boulangerie artisanale : accueil avec grande image, section « nos pains » avec 4 produits, horaires, plan d'accès et formulaire de contact. Palette chaleureuse marron/crème. »</td></tr>
          </tbody>
        </table>

        <h4>Anatomie d'un site vitrine</h4>
        <ol>
          <li><strong>En-tête (header) —</strong> logo, nom du site et menu de navigation vers les sections</li>
          <li><strong>Section d'accueil (hero) —</strong> grand titre accrocheur, image et bouton d'action principal</li>
          <li><strong>Services / produits —</strong> présentation de l'activité avec 3 à 6 blocs illustrés</li>
          <li><strong>Contact —</strong> formulaire, adresse, téléphone, horaires ou carte</li>
          <li><strong>Pied de page (footer) —</strong> liens utiles, réseaux sociaux, mentions légales</li>
        </ol>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Créer son premier site vitrine</h4>
          <p>Créer avec Claude un site vitrine complet pour une activité de votre choix (commerce, artisan, association) avec les cinq sections vues ci-dessus.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Séance 2</span>
        <h3>Personnaliser le design et créer une boutique</h3>
        <h4>Personnaliser le design</h4>
        <ul>
          <li><strong>Couleurs —</strong> « Utilise une palette bleu marine et blanc, avec un accent doré pour les boutons. »</li>
          <li><strong>Polices —</strong> « Utilise une police élégante pour les titres et une police simple pour le texte. »</li>
          <li><strong>Images —</strong> « Ajoute des images illustrant [votre activité] dans la section d'accueil. »</li>
        </ul>
        <div class="callout">
          <strong>À retenir —</strong> Faites une demande à la fois : il est plus facile de corriger un petit changement qu'une refonte complète.
        </div>

        <h4>Rendre son site responsive</h4>
        <p>« Responsive » signifie que le site s'adapte automatiquement à toutes les tailles d'écran : ordinateur, tablette, téléphone.</p>
        <div class="callout">
          <strong>Le prompt à retenir —</strong> « Adapte automatiquement la mise en page pour qu'elle reste lisible et bien organisée sur mobile et tablette. »
        </div>

        <h4>Créer une boutique en ligne</h4>
        <ul>
          <li><strong>Catalogue produits —</strong> une grille de cartes : image, nom, prix, bouton « ajouter au panier »</li>
          <li><strong>Fiche produit —</strong> une page dédiée par produit avec description détaillée et photos</li>
          <li><strong>Panier —</strong> un résumé des articles choisis avec quantité et total, mis à jour en direct</li>
        </ul>

        <h4>Prompts pour générer produits et panier</h4>
        <div class="callout">
          <strong>Catalogue + fiche produit —</strong> « Ajoute une page « Boutique » avec une grille de 6 produits (image, nom, prix, bouton Ajouter au panier). Chaque produit doit ouvrir une fiche détaillée avec description. »
        </div>
        <div class="callout">
          <strong>Panier —</strong> « Ajoute un panier accessible depuis un bouton en haut à droite, qui liste les produits ajoutés, leur quantité et le total. »
        </div>
        <p style="color:#5a5349; font-size:.92rem;">Le panier créé ainsi fonctionne sans paiement réel. Le paiement en ligne (Stripe, PayPal…) est une étape avancée, hors périmètre gratuit de cette formation.</p>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Personnaliser et ajouter une boutique</h4>
          <p>Personnaliser les couleurs et polices de votre site, vérifier son affichage mobile, puis ajouter une page boutique avec 3 à 5 produits et un panier.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Séance 3</span>
        <h3>Publier son site avec Vercel et Netlify</h3>
        <h4>Comprendre l'hébergement web</h4>
        <p>Pour qu'un site soit visible sur Internet, son code doit être placé sur un serveur. GitHub stocke le code, Vercel ou Netlify le publient et le mettent à jour automatiquement à chaque modification.</p>

        <h4>Déployer avec Netlify</h4>
        <ol>
          <li>Créer un compte gratuit sur netlify.com</li>
          <li>Cliquer sur « Add new site » puis « Import an existing project »</li>
          <li>Se connecter à GitHub et choisir le dépôt du site</li>
          <li>Laisser les réglages par défaut et cliquer sur « Deploy »</li>
          <li>Récupérer l'adresse fournie automatiquement (ex. moncafe.netlify.app)</li>
        </ol>

        <h4>Déployer avec Vercel</h4>
        <ol>
          <li>Créer un compte gratuit sur vercel.com</li>
          <li>Cliquer sur « Add New… » puis « Project »</li>
          <li>Se connecter à GitHub et importer le dépôt du site</li>
          <li>Vérifier les réglages proposés et cliquer sur « Deploy »</li>
          <li>Récupérer l'adresse fournie automatiquement (ex. moncafe.vercel.app)</li>
        </ol>

        <h4>Nom de domaine et comparatif</h4>
        <table class="table-cours">
          <thead><tr><th></th><th>Netlify</th><th>Vercel</th></tr></thead>
          <tbody>
            <tr><td>Prix de base</td><td>Gratuit</td><td>Gratuit</td></tr>
            <tr><td>Connexion à GitHub</td><td>Oui</td><td>Oui</td></tr>
            <tr><td>Mise à jour automatique</td><td>Oui</td><td>Oui</td></tr>
            <tr><td>Adresse fournie</td><td>.netlify.app</td><td>.vercel.app</td></tr>
            <tr><td>Idéal pour</td><td>Sites vitrine, HTML/CSS</td><td>Sites vitrine et applications</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>À savoir —</strong> Pour un vrai nom de domaine (ex. moncafe.fr), il faudra l'acheter séparément chez un registrar (quelques euros par an) — cette formation reste 100 % gratuite avec l'adresse fournie par Vercel ou Netlify.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Mettre son site en ligne</h4>
          <p>Déposer votre code sur GitHub, puis déployer votre site avec Netlify ou Vercel et partager le lien obtenu.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Séance 4</span>
        <h3>Connecter son site à Firebase</h3>
        <h4>Pourquoi une base de données ?</h4>
        <ul>
          <li><strong>Formulaire de contact —</strong> les messages envoyés sont enregistrés et consultables, au lieu de se perdre</li>
          <li><strong>Produits dynamiques —</strong> ajouter, modifier ou retirer un produit sans toucher au code du site</li>
          <li><strong>Suivi des demandes —</strong> garder une trace des commandes ou demandes reçues via le site</li>
        </ul>

        <h4>Créer un projet Firebase</h4>
        <ol>
          <li>Aller sur firebase.google.com et se connecter avec un compte Google</li>
          <li>Cliquer sur « Ajouter un projet » et lui donner un nom</li>
          <li>Dans le menu, ouvrir « Firestore Database » puis « Créer une base de données »</li>
          <li>Choisir le mode « test » pour commencer (accès ouvert temporaire)</li>
          <li>Copier la « configuration Firebase » (clés) fournie pour le site</li>
        </ol>

        <h4>Connecter Firebase à son site</h4>
        <div class="callout">
          <strong>Formulaire de contact —</strong> « Connecte le formulaire de contact à Firebase avec cette configuration [coller la configuration], pour que chaque message envoyé soit enregistré dans Firestore. »
        </div>
        <div class="callout">
          <strong>Produits —</strong> « Fais en sorte que la liste des produits de la boutique soit chargée depuis Firestore au lieu d'être écrite dans le code. »
        </div>

        <h4>Sécuriser sa base de données</h4>
        <table class="table-cours">
          <thead><tr><th>Sans règles de sécurité</th><th>Avec des règles de sécurité</th></tr></thead>
          <tbody>
            <tr><td>N'importe qui sur Internet peut lire, modifier ou supprimer les données de votre base.</td><td>« Écris des règles Firestore qui autorisent tout le monde à lire les produits, mais interdisent l'écriture sauf pour le formulaire de contact. »</td></tr>
          </tbody>
        </table>

        <h4>Checklist avant la mise en ligne définitive</h4>
        <ul>
          <li>Le site s'affiche correctement sur ordinateur, tablette et mobile</li>
          <li>Toutes les pages (accueil, boutique, contact) fonctionnent sans erreur</li>
          <li>Le formulaire de contact enregistre bien les messages dans Firestore</li>
          <li>Les règles de sécurité Firestore sont activées (plus de mode « test »)</li>
          <li>Le site est déployé sur Vercel ou Netlify avec une adresse fonctionnelle</li>
          <li>Le lien du site a été testé depuis un autre appareil</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Connecter et sécuriser sa base</h4>
          <p>Connecter le formulaire de contact et le catalogue produits à Firebase, puis sécuriser la base avant la mise en ligne définitive.</p>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Séance 1 —</strong> Claude génère le code à partir d'une description en français ; un bon prompt précise l'activité, les sections et le style</li>
          <li><strong>Séance 2 —</strong> personnaliser par petites demandes successives ; un site responsive s'adapte à tous les écrans ; une boutique simple, c'est un catalogue, des fiches produit et un panier</li>
          <li><strong>Séance 3 —</strong> GitHub héberge le code, Vercel/Netlify publient le site, avec mise à jour automatique à chaque modification</li>
          <li><strong>Séance 4 —</strong> Firebase rend le site dynamique (contact, produits) ; toujours sécuriser la base avant la mise en ligne définitive</li>
        </ul>
      </div>
    `
  },

  "Gestion de projet en ligne": {
    titre: "Gestion de projet en ligne",
    duree: "Sur-mesure", public: "Chefs de projet, managers", prerequis: "Aucun",
    modules: ["Les fondamentaux de la gestion de projet", "Choisir son outil de gestion de projet", "Planifier, suivre et prioriser en équipe", "Automatiser les tâches répétitives"],
    apercu: "Comprendre le cycle de vie d'un projet et le triangle qualité-coût-délai, choisir l'outil adapté au profil de son équipe, planifier et prioriser avec les bonnes méthodes, puis automatiser les tâches répétitives pour se concentrer sur l'essentiel…",
    pdfUrl: "formation-gestion-projet.pdf",
    contenuComplet: `
      <p class="lede-cours">Quatre modules pour mener un projet de bout en bout : comprendre le cycle de vie d'un projet et l'équilibre qualité-coût-délai, choisir l'outil adapté au profil de son équipe, planifier, suivre et prioriser le travail avec des méthodes concrètes, puis automatiser les tâches répétitives pour libérer du temps pour l'essentiel.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Les fondamentaux de la gestion de projet</h3>
        <h4>Le cycle de vie d'un projet</h4>
        <p>Un projet est un ensemble d'actions temporaires, avec un début et une fin, mené pour atteindre un objectif précis dans des délais et un budget donnés. Il suit quatre grandes étapes :</p>
        <ul>
          <li><strong>Initier —</strong> définir l'objectif, les parties prenantes et la faisabilité du projet</li>
          <li><strong>Planifier —</strong> découper le travail en tâches, estimer les délais et les ressources nécessaires</li>
          <li><strong>Exécuter —</strong> réaliser les tâches et coordonner l'équipe au quotidien</li>
          <li><strong>Clôturer —</strong> livrer, évaluer les résultats et capitaliser sur les apprentissages</li>
        </ul>

        <h4>Le triangle qualité-coût-délai</h4>
        <p>Modifier l'un de ces trois axes impacte toujours les deux autres : accélérer un délai coûte souvent plus cher ou pèse sur la qualité, réduire le budget oblige à revoir le périmètre ou les délais. Garder cet équilibre visible en continu évite les arbitrages non assumés.</p>

        <h4>Les rôles clés dans un projet</h4>
        <ul>
          <li><strong>Sponsor / commanditaire —</strong> porte les objectifs stratégiques et débloque les ressources</li>
          <li><strong>Chef de projet —</strong> planifie, coordonne et arbitre au quotidien</li>
          <li><strong>Équipe projet —</strong> réalise les tâches et fait remonter les blocages</li>
          <li><strong>Parties prenantes —</strong> utilisateurs et contributeurs impactés par le résultat</li>
        </ul>
        <div class="callout">
          <strong>À retenir —</strong> avant de choisir un outil ou une méthode, un projet a d'abord besoin d'un objectif clair, de rôles identifiés et d'un équilibre qualité-coût-délai assumé par tous.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Cadrer un projet</h4>
          <ol>
            <li>Choisir un projet réel ou fictif et rédiger son objectif en une phrase</li>
            <li>Lister les quatre rôles clés et attribuer un nom à chacun</li>
            <li>Positionner le projet sur le triangle qualité-coût-délai : quel axe est prioritaire, lequel peut être ajusté ?</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Choisir son outil de gestion de projet</h3>
        <h4>Cinq critères pour choisir son outil</h4>
        <ul>
          <li><strong>Taille de l'équipe —</strong> un outil simple pour 3 personnes devient vite limité à 30</li>
          <li><strong>Complexité des projets —</strong> dépendances, jalons multiples : certains outils gèrent mieux la charge</li>
          <li><strong>Budget disponible —</strong> coût par utilisateur et fonctionnalités réservées aux offres payantes</li>
          <li><strong>Intégrations nécessaires —</strong> connexion avec messagerie, calendrier, code, facturation…</li>
          <li><strong>Courbe d'apprentissage —</strong> un outil puissant mais complexe risque d'être sous-utilisé par l'équipe</li>
        </ul>

        <h4>Étude comparative des outils du marché</h4>
        <table class="table-cours">
          <thead><tr><th>Outil</th><th>Idéal pour</th><th>Points forts</th><th>Limites</th></tr></thead>
          <tbody>
            <tr><td>Trello</td><td>Petites équipes, usage simple</td><td>Kanban visuel, très intuitif</td><td>Peu adapté aux projets complexes</td></tr>
            <tr><td>Asana</td><td>Équipes marketing / produit</td><td>Vues multiples, automatisations</td><td>Interface riche, courbe d'apprentissage</td></tr>
            <tr><td>monday.com</td><td>Équipes multi-métiers</td><td>Très visuel, personnalisable</td><td>Prix qui grimpe avec les options</td></tr>
            <tr><td>Jira</td><td>Équipes techniques / dev</td><td>Suivi agile poussé (Scrum, Kanban)</td><td>Configuration complexe</td></tr>
            <tr><td>Notion</td><td>Docs + projets combinés</td><td>Très flexible, tout-en-un</td><td>Gestion de projet moins structurée</td></tr>
          </tbody>
        </table>

        <h4>Quel outil pour quel profil d'équipe ?</h4>
        <ul>
          <li><strong>Petite équipe / freelances —</strong> Trello ou Notion, mise en place en quelques minutes, sans configuration lourde</li>
          <li><strong>Équipe produit ou marketing —</strong> Asana ou monday.com, avec vues multiples (liste, calendrier, charge) et automatisations natives</li>
          <li><strong>Équipe technique / développement —</strong> Jira, avec sprints, backlog et intégration native aux outils de code</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> tarifs et fonctionnalités évoluent vite : vérifiez toujours l'offre en cours avant de vous engager, plutôt que de vous fier à un comparatif figé.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Choisir l'outil adapté</h4>
          <ol>
            <li>Décrire le profil de son équipe (taille, métier, complexité des projets)</li>
            <li>Passer ce profil au filtre des cinq critères de choix</li>
            <li>Sélectionner un outil du comparatif et justifier ce choix en trois phrases</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Planifier, suivre et prioriser en équipe</h3>
        <h4>Planifier : du découpage au diagramme de Gantt</h4>
        <ol>
          <li><strong>Découper en tâches (WBS) —</strong> décomposer le projet en livrables, puis en tâches suffisamment petites pour être estimées et assignées</li>
          <li><strong>Identifier dépendances et jalons —</strong> repérer les tâches bloquantes et poser des jalons de contrôle réguliers</li>
          <li><strong>Visualiser sur un Gantt —</strong> la plupart des outils (Asana, monday.com, Jira) génèrent le Gantt automatiquement à partir des tâches et de leurs dates</li>
        </ol>

        <h4>Suivre l'avancement au fil de l'eau</h4>
        <p>Un tableau Kanban permet de visualiser en un coup d'œil où en est chaque tâche, en la faisant avancer dans les colonnes « À faire », « En cours », « En revue » et « Terminé ».</p>
        <p>Indicateurs à suivre en équipe : avancement des jalons, charge par membre de l'équipe, tâches en retard, vélocité (si méthode agile).</p>

        <h4>Prioriser en équipe</h4>
        <p><strong>Matrice d'Eisenhower —</strong> classer chaque tâche selon deux axes, urgence et importance : urgent et important (à faire immédiatement), important mais pas urgent (à planifier), urgent mais pas important (à déléguer), ni urgent ni important (à reporter ou abandonner).</p>
        <p><strong>Méthode MoSCoW —</strong> classer les besoins d'un projet en quatre niveaux :</p>
        <ul>
          <li><strong>Must have —</strong> indispensable au succès du projet</li>
          <li><strong>Should have —</strong> important mais non bloquant</li>
          <li><strong>Could have —</strong> souhaitable si le temps le permet</li>
          <li><strong>Won't have —</strong> exclu de cette itération</li>
        </ul>

        <h4>Les rituels qui font vivre la planification</h4>
        <table class="table-cours">
          <thead><tr><th>Rituel</th><th>Fréquence</th><th>Objectif</th></tr></thead>
          <tbody>
            <tr><td>Daily / point quotidien</td><td>Tous les jours, 15 min</td><td>Chacun partage ce qui avance, ce qui bloque, ce qui vient</td></tr>
            <tr><td>Revue hebdomadaire</td><td>Chaque semaine, 30 min</td><td>Vérifier l'avancement global par rapport au planning et ajuster les priorités</td></tr>
            <tr><td>Rétrospective</td><td>Fin de sprint / de phase</td><td>Identifier ce qui a bien fonctionné et ce qui peut être amélioré</td></tr>
            <tr><td>Revue de jalon</td><td>À chaque étape clé</td><td>Valider un livrable avec le sponsor avant de passer à la suite</td></tr>
          </tbody>
        </table>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Planifier et prioriser un projet</h4>
          <ol>
            <li>Découper un projet en 8 à 10 tâches (WBS) et identifier les dépendances</li>
            <li>Organiser ces tâches dans un tableau Kanban à 4 colonnes</li>
            <li>Classer les tâches selon la méthode MoSCoW</li>
            <li>Choisir un rituel d'équipe à mettre en place et en préciser la fréquence</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 4</span>
        <h3>Automatiser les tâches répétitives</h3>
        <h4>Pourquoi automatiser les tâches répétitives ?</h4>
        <p>Chaque tâche manuelle et répétitive (relance, mise à jour de statut, rappel) est un risque d'oubli et un temps qui n'est plus consacré au travail de fond. Bien ciblée, l'automatisation réduit d'environ 30% le temps passé sur des tâches administratives, supprime les oublis de relance grâce aux déclencheurs automatiques, et continue de s'exécuter même en dehors des heures de travail.</p>

        <h4>Les outils pour automatiser son workflow</h4>
        <table class="table-cours">
          <thead><tr><th>Outil</th><th>Type</th><th>Ce qu'il permet</th></tr></thead>
          <tbody>
            <tr><td>Automatisations natives</td><td>Intégré à l'outil</td><td>Règles simples : « si statut change, alors notifier » (Asana, monday.com, Trello)</td></tr>
            <tr><td>Zapier</td><td>Plateforme no-code</td><td>Connecte des milliers d'applications entre elles (email, tableur, CRM…)</td></tr>
            <tr><td>Make (ex-Integromat)</td><td>Plateforme no-code</td><td>Scénarios visuels plus avancés, avec conditions et boucles</td></tr>
            <tr><td>Power Automate</td><td>Plateforme Microsoft</td><td>Automatisations intégrées à l'écosystème Microsoft 365</td></tr>
          </tbody>
        </table>

        <h4>Trois automatisations à mettre en place dès demain</h4>
        <ul>
          <li><strong>Alerte de retard automatique —</strong> déclenchée quand une échéance est dépassée, elle notifie le responsable et le chef de projet (Asana / monday.com)</li>
          <li><strong>Création de tâches récurrentes —</strong> chaque lundi matin, création automatique des tâches du rituel hebdomadaire (automatisation native)</li>
          <li><strong>Rapport d'avancement automatique —</strong> chaque vendredi à 17h, génération et envoi d'un résumé par e-mail (Zapier / Make)</li>
        </ul>

        <h4>Bonnes pratiques et pièges à éviter</h4>
        <table class="table-cours">
          <thead><tr><th>À faire</th><th>À éviter</th></tr></thead>
          <tbody>
            <tr><td>Automatiser une tâche déjà bien définie et stable</td><td>Automatiser un processus encore mal défini</td></tr>
            <tr><td>Tester une automatisation sur un projet pilote avant de la généraliser</td><td>Multiplier les règles sans vue d'ensemble ni suivi</td></tr>
            <tr><td>Documenter chaque règle active pour l'équipe</td><td>Retirer toute vérification humaine sur les actions sensibles</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>À retenir —</strong> l'automatisation sert l'équipe, elle ne la remplace pas : elle libère du temps pour la décision, la coordination et le travail de fond.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Mettre en place une automatisation</h4>
          <ol>
            <li>Choisir une tâche répétitive et stable dans son propre travail d'équipe</li>
            <li>Décrire son déclencheur et l'action attendue</li>
            <li>Identifier l'outil le plus adapté pour la mettre en place (natif, Zapier, Make, Power Automate)</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Module 1 —</strong> un projet réussi s'appuie sur un cycle de vie clair et un équilibre qualité-coût-délai assumé</li>
          <li><strong>Module 2 —</strong> le bon outil dépend du profil de l'équipe, pas des fonctionnalités les plus impressionnantes</li>
          <li><strong>Module 3 —</strong> planifier, suivre et prioriser sont trois habitudes à installer en équipe, pas des actions isolées</li>
          <li><strong>Module 4 —</strong> automatiser les tâches répétitives et stables libère du temps pour ce qui compte vraiment</li>
        </ul>
        <div class="callout">
          <strong>Prochaine étape —</strong> choisir un outil, l'essayer sur un seul projet pilote pendant deux semaines, puis l'étendre.
        </div>
      </div>
    `
  },

  "Google Sheets": {
    titre: "Google Sheets",
    duree: "Sur-mesure", public: "Assistants, gestionnaires, équipes collaboratives", prerequis: "Bases d'Excel utiles mais non obligatoires",
    modules: ["Prise en main et travail collaboratif en temps réel", "Formules, mise en forme et tableaux croisés", "Partage, permissions et automatisations simples"],
    apercu: "De la prise en main de l'interface Google Sheets au travail collaboratif en temps réel, jusqu'aux formules avancées, aux tableaux croisés dynamiques, au partage sécurisé et aux automatisations avec macros et Apps Script…",
    pdfUrl: "formation-google-sheets.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour aller de la prise en main de l'interface Google Sheets et du travail collaboratif en temps réel jusqu'aux formules avancées, à la mise en forme des données et aux tableaux croisés dynamiques, puis au partage sécurisé et aux automatisations simples avec macros et Apps Script.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Prise en main et travail collaboratif en temps réel</h3>
        <p>Interface, navigation, création de fichiers et co-édition avec vos équipes.</p>

        <h4>Découvrir l'interface de Google Sheets</h4>
        <ul>
          <li>Accès : sheets.google.com ou via Google Drive (Nouveau &gt; Google Sheets)</li>
          <li>Barre de menus : Fichier, Édition, Affichage, Insertion, Format, Données, Outils, Extensions, Aide</li>
          <li>Barre d'outils : mise en forme rapide, alignement, fusion de cellules, filtres, fonctions</li>
          <li>Barre de formule : affiche et permet de modifier le contenu de la cellule active</li>
          <li>Onglets de feuilles en bas de l'écran : créer, renommer, dupliquer ou colorer des feuilles</li>
          <li>Cellules référencées par lettre (colonne) + numéro (ligne), ex. B4</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> Ctrl+Alt+M insère un commentaire, Ctrl+Espace sélectionne une colonne, Maj+Espace sélectionne une ligne.
        </div>

        <h4>Créer, organiser et importer des fichiers</h4>
        <ol>
          <li><strong>Créer un classeur —</strong> depuis Drive : Nouveau &gt; Google Sheets, ou dupliquer un modèle depuis la galerie (Fichier &gt; Nouveau &gt; À partir d'un modèle)</li>
          <li><strong>Organiser dans Drive —</strong> classer vos classeurs dans des dossiers, utiliser des couleurs de dossier et l'étoile pour les fichiers importants</li>
          <li><strong>Importer un fichier —</strong> Fichier &gt; Importer : glissez un .xlsx, .csv ou .ods ; choisissez de créer un nouveau classeur ou d'insérer les données</li>
          <li><strong>Exporter / télécharger —</strong> Fichier &gt; Télécharger : Excel (.xlsx), PDF, CSV, ODS — utile pour l'archivage ou l'envoi hors ligne</li>
        </ol>
        <h4>Raccourcis de navigation</h4>
        <ul>
          <li>Ctrl+Flèche : bord d'une plage de données</li>
          <li>Ctrl+Fin / Ctrl+Début : dernière / première cellule utilisée</li>
          <li>Ctrl+G : atteindre une cellule précise</li>
          <li>Ctrl+K : insérer un lien hypertexte</li>
          <li>Ctrl+Z / Ctrl+Y : annuler / rétablir</li>
        </ul>

        <h4>Travailler à plusieurs en temps réel</h4>
        <ul>
          <li>Édition simultanée : plusieurs personnes modifient le même classeur en direct</li>
          <li>Curseurs et sélections colorés : chaque collaborateur a une couleur distincte, visible en haut à droite</li>
          <li>Chat intégré : icône bulle en haut à droite, active dès que plusieurs personnes sont connectées</li>
          <li>Mentions : taper @ + nom dans une cellule ou un commentaire pour notifier une personne par e-mail</li>
          <li>Voir qui modifie quoi : survoler l'avatar d'un collaborateur affiche sa cellule active</li>
        </ul>
        <h4>Bonnes pratiques collaboratives</h4>
        <ul>
          <li>Convenir d'une structure de fichier avant de démarrer</li>
          <li>Nommer clairement les onglets (ex. Suivi, Budget, Archives)</li>
          <li>Protéger les plages sensibles pour éviter les erreurs</li>
          <li>Préférer les commentaires aux modifications directes</li>
          <li>Créer une feuille de brouillon pour les tests</li>
        </ul>

        <h4>Commentaires, suggestions et historique des versions</h4>
        <ul>
          <li><strong>Commentaires —</strong> clic droit &gt; Commentaire ou Ctrl+Alt+M ; répondre, résoudre ou rouvrir un fil ; @mention pour notifier par e-mail ; poser des questions sans modifier les données</li>
          <li><strong>Mode Suggestion —</strong> icône crayon en haut à droite &gt; Suggestion ; les modifications apparaissent en couleur, à valider ; idéal pour relire le travail d'un collègue ; l'auteur original accepte ou refuse chaque suggestion</li>
          <li><strong>Historique des versions —</strong> Fichier &gt; Historique des versions &gt; Afficher l'historique ; revenir à une version antérieure en un clic ; nommer une version importante pour la retrouver ; voir qui a modifié quoi, et quand</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Mettre en place un classeur collaboratif</h4>
          <ol>
            <li>Créer un nouveau classeur nommé « Suivi_Projet_[Votre nom] »</li>
            <li>Renommer l'onglet « Feuille 1 » en « Suivi », ajouter un onglet « Archives »</li>
            <li>Partager le classeur avec un(e) collègue en mode Commentateur</li>
            <li>Ajouter un commentaire avec une @mention sur une cellule</li>
            <li>Passer en mode Suggestion et proposer une modification</li>
            <li>Consulter l'historique des versions et nommer la version actuelle « V1 – Structure initiale »</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Formules, mise en forme et tableaux croisés dynamiques</h3>
        <p>Automatiser les calculs, présenter les données et croiser les informations.</p>

        <h4>Les bases des formules</h4>
        <ul>
          <li>Toute formule commence par le signe =, ex. =A1+A2</li>
          <li>Références relatives (A1), absolues ($A$1) et mixtes ($A1 ou A$1)</li>
          <li>F4 (ou Cmd+T sur Mac) bascule entre les types de référence</li>
          <li>Recopier une formule : sélectionner la cellule, tirer la poignée bleue en bas à droite</li>
          <li>Référence à une autre feuille : NomFeuille!A1</li>
        </ul>
        <table class="table-cours">
          <thead><tr><th>Fonction</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td>=SOMME(A1:A10)</td><td>Additionne une plage</td></tr>
            <tr><td>=MOYENNE(A1:A10)</td><td>Calcule la moyenne</td></tr>
            <tr><td>=SI(A1&gt;10;"Oui";"Non")</td><td>Test conditionnel</td></tr>
            <tr><td>=NB.SI(A1:A10;"&gt;5")</td><td>Compte selon un critère</td></tr>
            <tr><td>=SOMME.SI(A:A;"Nord";B:B)</td><td>Somme conditionnelle</td></tr>
            <tr><td>=RECHERCHEV(A1;B:D;3;FAUX)</td><td>Recherche verticale</td></tr>
            <tr><td>=CONCATENER(A1;" ";B1)</td><td>Assemble du texte</td></tr>
          </tbody>
        </table>

        <h4>Aller plus loin avec les formules</h4>
        <ul>
          <li><strong>Recherche de données —</strong> RECHERCHEV / RECHERCHEX pour trouver une valeur liée ; INDEX + EQUIV pour une recherche flexible dans les deux sens ; RECHERCHEX gère mieux les erreurs et recherches inversées</li>
          <li><strong>Logique &amp; texte —</strong> SI, SI.CONDITIONS, ET, OU pour des tests combinés ; SIERREUR pour éviter l'affichage de #N/A ; GAUCHE, DROITE, STXT, MAJUSCULE pour le texte</li>
          <li><strong>Dates &amp; séries —</strong> AUJOURDHUI(), DATEDIF pour calculer une durée ; SEQUENCE, LIGNE, COLONNE pour générer des séries ; formules matricielles avec ARRAYFORMULA</li>
        </ul>

        <h4>Mise en forme des données</h4>
        <ol>
          <li><strong>Formats de base —</strong> police, taille, couleur, alignement, fusion de cellules, formats numériques (monnaie, pourcentage, date)</li>
          <li><strong>Mise en forme conditionnelle —</strong> Format &gt; Mise en forme conditionnelle : colorer automatiquement selon une règle (valeur, texte, échelle de couleurs)</li>
          <li><strong>Styles de tableau —</strong> alternance de couleurs de lignes (Format &gt; Alternance de couleurs) pour améliorer la lisibilité</li>
          <li><strong>Validation des données —</strong> Données &gt; Validation des données : listes déroulantes, cases à cocher, plages numériques autorisées</li>
        </ol>
        <h4>Exemples de règles conditionnelles</h4>
        <ul>
          <li>Rouge si la valeur est négative</li>
          <li>Vert si le statut = « Terminé »</li>
          <li>Échelle de couleurs pour visualiser des écarts</li>
          <li>Barres de données pour comparer des quantités</li>
          <li>Mise en évidence des doublons</li>
        </ul>

        <h4>Créer un tableau croisé dynamique (TCD)</h4>
        <ul>
          <li>Sélectionner les données, puis Insertion &gt; Tableau croisé dynamique</li>
          <li>Choisir de créer le TCD sur une nouvelle feuille (recommandé)</li>
          <li>Glisser les champs dans les zones : Lignes, Colonnes, Valeurs, Filtres</li>
          <li>Modifier l'agrégation : SOMME, MOYENNE, NBVAL, MAX, MIN</li>
          <li>Ajouter un graphique croisé dynamique pour visualiser les résultats</li>
          <li>Actualisation automatique si les données source changent</li>
        </ul>
        <h4>Cas d'usage courants</h4>
        <ul>
          <li>Total des ventes par région et par mois</li>
          <li>Nombre de tâches par statut et par responsable</li>
          <li>Répartition d'un budget par catégorie de dépense</li>
          <li>Moyenne des notes par classe ou par matière</li>
          <li>Suivi d'indicateurs mensuels par agence</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Analyser un jeu de données de ventes</h4>
          <ol>
            <li>Importer un fichier de ventes (Produit, Région, Mois, Montant)</li>
            <li>Calculer le total et la moyenne des ventes avec SOMME et MOYENNE</li>
            <li>Ajouter une colonne « Performance » avec SI selon un seuil de montant</li>
            <li>Appliquer une mise en forme conditionnelle sur la colonne Montant</li>
            <li>Créer une liste déroulante de statuts avec la validation des données</li>
            <li>Construire un TCD : total des ventes par Région et par Mois, avec graphique</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Partage, permissions et automatisations simples</h3>
        <p>Sécuriser l'accès aux données et gagner du temps grâce à l'automatisation.</p>

        <h4>Partager un classeur en toute sécurité</h4>
        <ul>
          <li>Bouton « Partager » en haut à droite du classeur</li>
          <li>Ajouter des personnes par e-mail ou générer un lien de partage</li>
          <li>Trois rôles : Lecteur, Commentateur, Éditeur</li>
          <li>Restreindre le partage à une organisation ou le rendre public sur le web</li>
          <li>Désactiver le téléchargement, l'impression et la copie pour les lecteurs/commentateurs</li>
        </ul>
        <table class="table-cours">
          <thead><tr><th>Rôle</th><th>Peut faire</th></tr></thead>
          <tbody>
            <tr><td>Lecteur</td><td>Consulter uniquement, aucune modification</td></tr>
            <tr><td>Commentateur</td><td>Consulter + ajouter des commentaires et suggestions</td></tr>
            <tr><td>Éditeur</td><td>Modifier, mettre en forme, partager (selon réglages)</td></tr>
            <tr><td>Propriétaire</td><td>Contrôle total, peut transférer la propriété</td></tr>
          </tbody>
        </table>

        <h4>Protéger des feuilles et des plages</h4>
        <ol>
          <li><strong>Protéger une plage —</strong> sélectionner la plage &gt; clic droit &gt; Protéger la plage : définir qui peut modifier</li>
          <li><strong>Protéger une feuille entière —</strong> Données &gt; Feuilles et plages protégées &gt; choisir la feuille à verrouiller</li>
          <li><strong>Avertissement vs restriction —</strong> « Afficher un avertissement » (souple) ou « Restreindre les utilisateurs » (strict)</li>
          <li><strong>Cas d'usage —</strong> verrouiller les formules et en-têtes tout en laissant les zones de saisie libres</li>
        </ol>
        <h4>Bonnes pratiques de sécurité</h4>
        <ul>
          <li>Ne jamais partager en « Éditeur » par défaut : commencer par Commentateur</li>
          <li>Revoir régulièrement la liste des personnes ayant accès</li>
          <li>Utiliser des liens avec expiration pour un partage ponctuel</li>
          <li>Dupliquer un classeur avant un partage externe sensible</li>
          <li>Activer la notification par e-mail lors des modifications importantes</li>
        </ul>

        <h4>Automatiser les tâches répétitives</h4>
        <ul>
          <li><strong>Sans code —</strong> règles de notification (Outils &gt; Règles de notification), modules complémentaires (Extensions &gt; Modules complémentaires), formulaires Google reliés à une feuille pour collecter des données, IMPORTRANGE / IMPORTHTML pour lier des sources</li>
          <li><strong>Apps Script (macros) —</strong> Extensions &gt; Macros &gt; Enregistrer une macro ; rejouer la macro via un raccourci clavier personnalisé ; Extensions &gt; Apps Script pour écrire des scripts sur mesure ; déclencheurs (triggers) pour lancer un script à heure fixe</li>
        </ul>

        <h4>Exemple : enregistrer une macro simple</h4>
        <ol>
          <li><strong>Lancer l'enregistrement —</strong> Extensions &gt; Macros &gt; Enregistrer une macro, choisir « références absolues » ou « relatives »</li>
          <li><strong>Effectuer les actions —</strong> mettre en gras l'en-tête, appliquer une couleur, trier une colonne : Sheets enregistre chaque étape</li>
          <li><strong>Enregistrer et nommer —</strong> nom explicite (ex. « Mise_en_forme_rapport ») et raccourci clavier (Ctrl+Alt+Maj+1 à 9)</li>
          <li><strong>Réutiliser la macro —</strong> via Extensions &gt; Macros, le raccourci clavier, ou un bouton dessiné sur la feuille</li>
        </ol>
        <div class="callout">
          <strong>Rappel —</strong> une macro enregistrée est convertie automatiquement en script Apps Script, modifiable ensuite pour aller plus loin.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Sécuriser et automatiser un classeur partagé</h4>
          <ol>
            <li>Partager le classeur de l'exercice 2 avec deux rôles différents (Lecteur et Éditeur)</li>
            <li>Protéger la plage contenant les formules de calcul du total</li>
            <li>Créer une règle de notification en cas de modification du classeur</li>
            <li>Enregistrer une macro qui met en forme automatiquement l'en-tête du tableau</li>
            <li>Exécuter la macro via son raccourci clavier et vérifier le résultat</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Module 1 —</strong> naviguer et organiser un classeur, co-éditer en temps réel, commenter, suggérer, revenir en arrière</li>
          <li><strong>Module 2 —</strong> écrire des formules fiables, mettre en forme pour la lisibilité, analyser avec un TCD</li>
          <li><strong>Module 3 —</strong> partager selon le bon rôle, protéger les données sensibles, automatiser avec macros et scripts</li>
        </ul>
        <div class="callout">
          <strong>Pour aller plus loin —</strong> explorer les modules complémentaires (Extensions &gt; Modules complémentaires) et s'initier à Apps Script pour créer des automatisations sur mesure.
        </div>
      </div>
    `
  },

  "Outlook & Google Meet": {
    titre: "Outlook & Google Meet",
    duree: "3 modules x 1h30", public: "Assistants, cadres, équipes en télétravail", prerequis: "Aucun",
    modules: ["Gérer efficacement sa boîte mail et son agenda avec Outlook", "Organiser et animer des réunions avec Google Meet", "Bonnes pratiques de communication professionnelle à distance"],
    apercu: "Organiser sa boîte de réception et traiter ses mails avec la méthode des 4D, bloquer des créneaux de travail concentré, préparer et animer des réunions Google Meet, puis adopter les bonnes pratiques de communication à distance…",
    pdfUrl: "outlook-google-meet.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour reprendre le contrôle de ses outils du quotidien : gérer sa boîte mail et son agenda avec Outlook pour gagner du temps et réduire la charge mentale, organiser et animer des réunions utiles avec Google Meet, puis adopter les bonnes pratiques de communication professionnelle à distance.</p>

      <div class="module-block">
        <span class="module-tag">Objectifs</span>
        <h3>Objectifs pédagogiques</h3>
        <p>À l'issue de cette formation, vous serez capable de :</p>
        <ul>
          <li><strong>Organiser —</strong> sa boîte de réception avec des dossiers, règles et catégories efficaces</li>
          <li><strong>Traiter —</strong> ses mails rapidement grâce à la méthode des 4D</li>
          <li><strong>Bloquer —</strong> des créneaux de travail concentré dans son agenda</li>
          <li><strong>Préparer —</strong> des réunions utiles avec un ordre du jour clair</li>
          <li><strong>Animer —</strong> des visioconférences engageantes avec Google Meet</li>
          <li><strong>Communiquer —</strong> à distance avec le bon canal, au bon moment</li>
        </ul>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Gérer sa boîte mail et son agenda avec Outlook</h3>
        <p>Reprendre le contrôle de sa messagerie pour gagner du temps et réduire la charge mentale.</p>

        <h4>Organiser sa boîte de réception</h4>
        <ul>
          <li><strong>Dossiers ciblés —</strong> un nombre limité de dossiers (« À traiter », « En attente de réponse », « Archives projet X ») plutôt qu'une arborescence trop fine</li>
          <li><strong>Règles automatiques —</strong> Fichier > Gérer les règles > Nouvelle règle pour classer newsletters, notifications ou mails d'une équipe précise</li>
          <li><strong>Catégories couleur —</strong> repérez en un coup d'œil l'urgence ou le type de mail (Client, Interne, Urgent)</li>
          <li><strong>Indicateur de suivi —</strong> marquez un mail à traiter plus tard ; il apparaît dans la barre des tâches</li>
          <li><strong>Balayage / Nettoyer —</strong> supprime automatiquement les futurs mails d'une conversation ou ne garde que le dernier message</li>
        </ul>
        <div class="callout">
          <strong>Astuce pratique —</strong> visez une boîte de réception qui ne contient que ce qui reste à traiter. Tout ce qui est fait est archivé ou supprimé — la boîte de réception n'est pas une liste de tâches.
        </div>

        <h4>La méthode des 4D pour traiter ses mails</h4>
        <table class="table-cours">
          <thead><tr><th>Action</th><th>Quand l'utiliser</th><th>Réflexe Outlook</th></tr></thead>
          <tbody>
            <tr><td><strong>Do</strong> — Faire</td><td>Répondre prend moins de 2 minutes</td><td>Répondre immédiatement puis archiver</td></tr>
            <tr><td><strong>Delegate</strong> — Déléguer</td><td>Une autre personne est mieux placée</td><td>Transférer + indicateur de suivi</td></tr>
            <tr><td><strong>Defer</strong> — Différer</td><td>Cela demande du temps ou de la réflexion</td><td>Drapeau + bloc dans l'agenda pour le traiter</td></tr>
            <tr><td><strong>Delete</strong> — Supprimer / Classer</td><td>Information terminée ou inutile</td><td>Supprimer ou déplacer vers un dossier d'archive</td></tr>
          </tbody>
        </table>

        <h4>Raccourcis clavier gain de temps</h4>
        <table class="table-cours">
          <thead><tr><th>Action</th><th>Raccourci</th></tr></thead>
          <tbody>
            <tr><td>Nouveau message</td><td>Ctrl + N</td></tr>
            <tr><td>Répondre / Répondre à tous</td><td>Ctrl + R / Ctrl + Maj + R</td></tr>
            <tr><td>Transférer</td><td>Ctrl + F</td></tr>
            <tr><td>Marquer lu / non lu</td><td>Ctrl + Q / Ctrl + U</td></tr>
            <tr><td>Rechercher</td><td>Ctrl + E</td></tr>
            <tr><td>Ignorer une conversation</td><td>Clic droit &gt; Ignorer</td></tr>
          </tbody>
        </table>

        <h4>Gérer efficacement son agenda</h4>
        <ul>
          <li><strong>Time blocking —</strong> bloquez des créneaux « Travail concentré » pour éviter les réunions imprévues</li>
          <li><strong>Assistant Planification —</strong> voir les disponibilités des participants avant de proposer une réunion</li>
          <li><strong>Créneau de battement —</strong> raccourcir automatiquement les réunions (25 min au lieu de 30)</li>
          <li><strong>Catégoriser —</strong> distinguer réunions internes, clients et RDV personnels par couleur</li>
          <li><strong>Rappels adaptés —</strong> ajuster le délai selon le type d'événement</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Exercice 1 — Nettoyage express de la boîte mail</h4>
          <p>En 15 minutes, mettez en pratique les principes vus dans ce module :</p>
          <ol>
            <li>Créez 3 dossiers maximum adaptés à votre activité</li>
            <li>Configurez une règle automatique pour un type de mail récurrent (newsletter, notification d'outil...)</li>
            <li>Bloquez 2 plages de « travail concentré » de 45 minutes dans votre agenda de la semaine prochaine</li>
            <li>Identifiez une réunion récurrente à laquelle vous pourriez ne plus assister systématiquement</li>
          </ol>
          <p><strong>Livrable attendu —</strong> 3 dossiers créés, 1 règle automatique active, 2 créneaux bloqués dans l'agenda et 1 réunion identifiée à questionner. Durée indicative : 15 minutes.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Organiser et animer des réunions avec Google Meet</h3>
        <p>Préparer des réunions utiles, les animer efficacement et exploiter les bonnes fonctionnalités.</p>

        <h4>Avant la réunion : préparer</h4>
        <ul>
          <li><strong>Se poser la question de l'utilité —</strong> un mail, un message Chat ou un document partagé suffit-il ? Une réunion se justifie pour décider, arbitrer ou co-construire</li>
          <li><strong>Ordre du jour écrit —</strong> envoyez-le avec l'invitation Google Agenda (objectif, points à aborder, durée par point)</li>
          <li><strong>Liste de participants resserrée —</strong> n'invitez que les personnes nécessaires ; les autres en « optionnel » ou destinataires du compte-rendu</li>
          <li><strong>Lien Meet automatique —</strong> créez l'événement dans Google Agenda ; le lien Meet est ajouté automatiquement</li>
          <li><strong>Documents en amont —</strong> joignez ou liez les documents à consulter avant la réunion pour ne pas perdre de temps en séance</li>
        </ul>

        <h4>Pendant la réunion : les fonctionnalités clés</h4>
        <table class="table-cours">
          <thead><tr><th>Fonctionnalité</th><th>Usage pratique</th></tr></thead>
          <tbody>
            <tr><td>Partage d'écran</td><td>Partager un onglet précis (plus fluide) plutôt que tout l'écran</td></tr>
            <tr><td>Sous-titres instantanés</td><td>Utile en réunion multilingue ou environnement bruyant</td></tr>
            <tr><td>Enregistrement</td><td>À activer avec l'accord des participants, pour ceux qui sont absents</td></tr>
            <tr><td>Levée de main</td><td>Structure la prise de parole dans les groupes nombreux</td></tr>
            <tr><td>Sondages / Questions</td><td>Recueillir un avis rapide ou animer une session interactive</td></tr>
            <tr><td>Salles de sous-groupes</td><td>Travailler en petits groupes puis restituer en plénière</td></tr>
            <tr><td>Chat de la réunion</td><td>Partager un lien ou une question sans couper la parole</td></tr>
            <tr><td>Arrière-plan flouté</td><td>Limiter les distractions visuelles</td></tr>
          </tbody>
        </table>

        <h4>Animer efficacement sa réunion</h4>
        <ol>
          <li>Démarrez à l'heure et rappelez l'objectif et la durée en 30 secondes</li>
          <li>Désignez un(e) preneur/preneuse de notes si besoin de compte-rendu formel</li>
          <li>Sollicitez explicitement les personnes silencieuses (« Qu'en penses-tu, [prénom] ? »)</li>
          <li>Terminez par un récapitulatif des décisions et des actions, avec un responsable et une échéance pour chacune</li>
        </ol>
        <div class="callout">
          <strong>Astuce pratique —</strong> pour les réunions de plus de 5 personnes, coupez les micros par défaut à l'arrivée et rappelez l'usage de la fonction « lever la main ».
        </div>

        <h4>Après la réunion : capitaliser</h4>
        <ul>
          <li><strong>Compte-rendu court —</strong> décisions prises, actions, responsables, échéances — envoyé dans l'heure si possible</li>
          <li><strong>Enregistrement partagé —</strong> déposez-le dans le Drive du dossier projet, avec une date de suppression si non nécessaire long terme</li>
          <li><strong>Suivi des actions —</strong> reprenez-les dans l'ordre du jour de la réunion suivante</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Exercice 2 — Préparer une réunion type</h4>
          <p>En 20 minutes, préparez une prochaine réunion selon la méthode vue dans ce module :</p>
          <ol>
            <li>Choisissez une prochaine réunion que vous devez organiser</li>
            <li>Rédigez un ordre du jour en 3 points maximum, avec une durée associée à chacun</li>
            <li>Créez l'événement dans Google Agenda avec le lien Meet et l'ordre du jour en description</li>
            <li>Définissez à l'avance qui prendra les notes et comment le compte-rendu sera partagé</li>
          </ol>
          <p><strong>Livrable attendu —</strong> un événement Google Agenda créé avec ordre du jour, lien Meet et modalités de compte-rendu définies. Durée indicative : 20 minutes.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Bonnes pratiques de communication professionnelle à distance</h3>
        <p>Choisir le bon canal, écrire des messages clairs, respecter le temps et l'attention de chacun.</p>

        <h4>Choisir le bon canal</h4>
        <table class="table-cours">
          <thead><tr><th>Situation</th><th>Canal recommandé</th></tr></thead>
          <tbody>
            <tr><td>Information non urgente, traçable</td><td>Email</td></tr>
            <tr><td>Question rapide, échange informel</td><td>Chat / messagerie instantanée</td></tr>
            <tr><td>Décision à plusieurs, sujet complexe</td><td>Réunion (Google Meet)</td></tr>
            <tr><td>Urgence réelle</td><td>Appel téléphonique ou message direct</td></tr>
            <tr><td>Suivi de tâches / projet</td><td>Outil de gestion de projet dédié</td></tr>
          </tbody>
        </table>

        <h4>Rédiger des emails clairs et efficaces</h4>
        <ol>
          <li><strong>Objet précis et actionnable —</strong> « Validation budget T3 – réponse attendue avant vendredi » plutôt que « Question »</li>
          <li><strong>Un message, une idée —</strong> si plusieurs sujets, envisagez plusieurs mails distincts, plus faciles à traiter et archiver</li>
          <li><strong>Structure lisible —</strong> phrases courtes, paragraphes aérés, mise en gras des points clés, listes à puces pour les actions</li>
          <li><strong>Appel à l'action explicite —</strong> indiquez clairement ce que vous attendez du destinataire et pour quand</li>
          <li><strong>Copie (Cc) raisonnée —</strong> mettez en copie pour informer, pas pour se couvrir systématiquement ; utilisez Cci avec parcimonie</li>
        </ol>

        <h4>Étiquette de visioconférence</h4>
        <ul>
          <li>Caméra allumée autant que possible pour maintenir le lien</li>
          <li>Micro coupé quand vous ne parlez pas dans les réunions à plusieurs</li>
          <li>Éviter le multitâche visible (lire ses mails pendant la réunion)</li>
          <li>Se connecter 2 à 3 minutes avant l'heure pour régler les aspects techniques</li>
          <li>Prévenir en cas de retard ou d'absence, comme en présentiel</li>
        </ul>

        <h4>Gérer le temps et les fuseaux horaires</h4>
        <ul>
          <li><strong>Vérifier le fuseau horaire —</strong> des participants avant de proposer un créneau (Google Agenda affiche plusieurs fuseaux)</li>
          <li><strong>Respecter les plages de disponibilité —</strong> affichées dans le calendrier de chacun, sans solliciter en dehors sauf urgence</li>
          <li><strong>Alterner les horaires —</strong> pour les équipes en fuseaux multiples, afin de répartir l'effort équitablement</li>
        </ul>

        <h4>Le droit à la déconnexion</h4>
        <ul>
          <li><strong>Envoi différé —</strong> utiliser l'envoi différé pour ne pas solliciter un collègue en dehors de ses horaires</li>
          <li><strong>Pas de réponse immédiate —</strong> ne pas attendre de réponse immédiate à un message envoyé tard le soir</li>
          <li><strong>Horaires affichés —</strong> définir des heures de disponibilité claires dans sa signature ou son statut de messagerie</li>
        </ul>
        <div class="callout">
          <strong>Astuce pratique —</strong> un message envoyé tard n'appelle pas une réponse immédiate : programmez l'envoi pour le lendemain matin si le sujet n'est pas urgent.
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Checklist récapitulative</h3>
        <ul>
          <li><strong>Outlook, chaque semaine —</strong> boîte de réception vidée des mails traités (archivés ou supprimés) ; créneaux de travail concentré bloqués dans l'agenda ; réunions de la semaine vérifiées (ordre du jour présent, présence justifiée)</li>
          <li><strong>Google Meet, avant chaque réunion —</strong> réunion réellement nécessaire (vs mail, Chat, document partagé) ; ordre du jour rédigé et partagé à l'avance ; participants limités aux personnes nécessaires ; compte-rendu et actions envoyés après la réunion</li>
          <li><strong>Communication à distance, au quotidien —</strong> bon canal choisi selon l'urgence et la complexité du sujet ; objet de mail clair et actionnable ; horaires de disponibilité respectés (les vôtres et ceux des autres)</li>
        </ul>
        <div class="callout">
          <strong>Mon plan d'action personnel —</strong> à compléter individuellement à l'issue de la formation : ce que je vais changer, à partir de quand, comment je mesure le résultat. Astuce : commencez par 1 ou 2 changements maximum — mieux vaut un plan tenu qu'une liste ambitieuse abandonnée.
        </div>
      </div>
    `
  },

  "Outils numériques du quotidien": {
    titre: "Outils numériques du quotidien",
    duree: "Sur-mesure", public: "Toute personne souhaitant gagner du temps au quotidien", prerequis: "Aisance informatique de base",
    modules: ["Module 1 — Documents, PDF et visuels", "Module 2 — Notes, organisation et intelligence artificielle", "Module 3 — Communication, confidentialité et business en ligne", "Module 4 — Apprentissage, veille et bonnes pratiques"],
    apercu: "27 outils numériques classés par catégorie, expliqués un par un : ce qu'ils font, à quoi ils servent concrètement et comment les utiliser — documents et PDF, visuels et design, notes, intelligence artificielle, communication, business en ligne et veille…",
    pdfUrl: "guide-outils-productivite.pdf",
    contenuComplet: `
      <p class="lede-cours">Un guide complet et détaillé présentant 27 outils numériques classés par catégorie : ce qu'ils font, à quoi ils servent concrètement, et comment les utiliser efficacement au quotidien — sans se disperser entre trop d'outils différents.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Documents, PDF et visuels</h3>
        <h4>Documents &amp; PDF</h4>
        <p>Créer, convertir, scanner et manipuler des documents sans logiciel installé.</p>
        <ul>
          <li><strong>iLovePDF —</strong> service en ligne gratuit regroupant une trentaine d'outils pour fusionner, diviser, compresser ou convertir des PDF (vers/depuis Word, Excel, image), ajouter un mot de passe ou signer électroniquement. Utile pour fusionner plusieurs devis avant envoi ou compresser un dossier trop lourd pour un email.</li>
          <li><strong>PDF Scanner — Ace Scanner —</strong> application mobile qui transforme la caméra du téléphone en scanner : détection automatique des bords, redressement de la perspective et éclaircissement du texte pour produire un PDF net (facture papier, contrat signé, carte de visite).</li>
          <li><strong>Convertio —</strong> convertisseur en ligne prenant en charge plus de 300 formats (documents, images, audio, vidéo). Pratique pour transformer un .heic en .jpg, une présentation .pptx en vidéo, ou un .wav en .mp3.</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> l'outil « Compresser PDF » d'iLovePDF est idéal quand une pièce jointe dépasse la limite de taille d'un email ; sur Ace Scanner, numériser plusieurs pages à la suite pour les regrouper automatiquement dans un seul PDF multi-pages.
        </div>

        <h4>Visuels, images &amp; design</h4>
        <p>Trouver, créer et retoucher des visuels professionnels sans être graphiste.</p>
        <ul>
          <li><strong>PhotoRoom —</strong> détecte automatiquement le sujet d'une photo pour détourer et supprimer l'arrière-plan en un clic, puis propose des fonds unis ou des mises en scène (photo produit pour boutique en ligne, portrait pour CV).</li>
          <li><strong>DaFont —</strong> bibliothèque de polices d'écriture gratuites et originales, classées par style, pour un logo, une affiche ou une miniature de vidéo.</li>
          <li><strong>Pixabay —</strong> banque de photos, illustrations et vidéos libres de droits, utilisables même dans un cadre commercial.</li>
          <li><strong>Pngtree —</strong> millions d'images PNG détourées, illustrations vectorielles et maquettes (mockups), en gratuit et en premium.</li>
          <li><strong>Freepik —</strong> ressources graphiques (vecteurs, photos, PSD, icônes) dans le même esprit que Pixabay et Pngtree, avec une offre premium plus large.</li>
        </ul>
        <div class="callout">
          <strong>Attention —</strong> vérifiez toujours la licence indiquée sous une police ou une ressource graphique avant un usage commercial — certaines sont réservées à un usage personnel. Gardez Pixabay, Pngtree et Freepik en favoris : ils se complètent bien selon le style recherché.
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Notes, organisation et intelligence artificielle</h3>
        <h4>Notes &amp; organisation</h4>
        <p>Centraliser ses idées, tâches et informations importantes.</p>
        <ul>
          <li><strong>OneNote —</strong> application Microsoft organisée en classeurs, sections et pages, qui accepte texte, images, tableaux et écriture manuscrite, synchronisée sur tous les appareils. Utile pour centraliser les notes d'une réunion ou un classeur de suivi client par projet.</li>
          <li><strong>Notes Keeper —</strong> prise de notes minimaliste, pensée pour capturer une idée en quelques secondes sans structure complexe — l'inverse d'OneNote, qui organise des dossiers entiers.</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> réservez Notes Keeper aux notes très courtes et ponctuelles ; pour un classeur structuré, préférez OneNote.
        </div>

        <h4>Intelligence artificielle</h4>
        <p>Rédiger, corriger, générer de la voix et automatiser la réflexion grâce à l'IA.</p>
        <ul>
          <li><strong>ChatGPT (OpenAI) —</strong> assistant conversationnel capable de rédiger, résumer, coder, brainstormer ou répondre à des questions dans un dialogue naturel.</li>
          <li><strong>Claude (Anthropic) —</strong> orienté vers des réponses détaillées et fiables, capable de traiter de longs documents, de générer des fichiers (Word, PDF, tableurs) et de raisonner pas à pas — utile pour analyser un long contrat ou produire un support de formation complet.</li>
          <li><strong>Grok (xAI) —</strong> assistant intégré à la plateforme X, connu pour son accès à l'actualité en temps réel et un ton parfois plus direct.</li>
          <li><strong>Grammarly —</strong> correcteur d'orthographe, de grammaire et de style qui s'intègre au navigateur, à Word ou aux emails pour corriger le texte en temps réel pendant la frappe.</li>
          <li><strong>ElevenLabs —</strong> synthèse vocale par IA qui transforme un texte écrit en voix off réaliste, dans plusieurs langues et intonations — utile pour une vidéo de formation sans studio d'enregistrement.</li>
          <li><strong>HyperWrite —</strong> assistant d'écriture IA avec suggestions de phrases, correcteur avancé et modèles de rédaction (email, article, résumé).</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> décrivez le résultat attendu avec le plus de détails possible (format, longueur, public visé) et affinez la réponse par des messages de suivi plutôt que de tout redemander depuis le début.
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Communication, confidentialité et business en ligne</h3>
        <h4>Communication &amp; collaboration</h4>
        <ul>
          <li><strong>Loom —</strong> enregistrement vidéo d'écran (et webcam) qui génère instantanément un lien à partager, sans montage. Une vidéo de 2 minutes remplace souvent un email de 10 lignes mal compris.</li>
          <li><strong>Slack —</strong> messagerie professionnelle organisée en canaux thématiques, avec messages directs, partage de fichiers et fils de discussion pour ne pas noyer un canal.</li>
          <li><strong>Superhuman —</strong> client email haut de gamme conçu pour traiter sa boîte de réception beaucoup plus vite, grâce à des raccourcis clavier pour chaque action (archiver, répondre plus tard, snoozer).</li>
        </ul>

        <h4>Emails temporaires &amp; confidentialité</h4>
        <ul>
          <li><strong>Temp Mail —</strong> génère instantanément une adresse email temporaire et aléatoire, avec une boîte de réception accessible directement dans le navigateur, sans inscription.</li>
          <li><strong>Xemail —</strong> service similaire, utile en solution de secours si un site bloque déjà les domaines des services les plus connus.</li>
        </ul>
        <div class="callout">
          <strong>Attention —</strong> n'utilisez jamais un email jetable pour un compte important (banque, administration) — la boîte de réception est temporaire et peut être consultée par d'autres.
        </div>

        <h4>Gestion &amp; business en ligne</h4>
        <ul>
          <li><strong>SpeedInvoice —</strong> application de facturation pour indépendants et petites entreprises : devis et factures depuis un téléphone, signature électronique, suivi des paiements, sauvegarde cloud.</li>
          <li><strong>Systeme.io —</strong> plateforme française tout-en-un : tunnels de vente, emailing automatisé, hébergement de formations en ligne, blog et programme d'affiliation, sans compétences techniques.</li>
          <li><strong>Form.app —</strong> créateur de formulaires en ligne (sondages, inscriptions, questionnaires de satisfaction) avec collecte des réponses en temps réel.</li>
          <li><strong>Zapier —</strong> connecte entre elles des applications qui ne communiquent pas nativement, pour automatiser des tâches répétitives via des scénarios (« Zaps ») : un déclencheur, puis une action exécutée automatiquement.</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> commencez par automatiser une seule tâche répétitive et chronophage avec Zapier avant d'en enchaîner plusieurs.
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Module 4</span>
        <h3>Apprentissage, veille et bonnes pratiques</h3>
        <h4>Apprentissage &amp; veille</h4>
        <ul>
          <li><strong>Photomath —</strong> résout un exercice de mathématiques photographié avec le téléphone, en détaillant chaque étape du raisonnement.</li>
          <li><strong>OpenClassrooms —</strong> plateforme française de cours en ligne, du niveau débutant au niveau expert, avec des parcours certifiants.</li>
          <li><strong>Clubic —</strong> site d'actualité et de tests dédié à la technologie, avec une logithèque pour télécharger des logiciels testés et vérifiés plutôt qu'une source inconnue.</li>
        </ul>

        <h4>Tableau récapitulatif — les 27 outils par catégorie</h4>
        <table class="table-cours">
          <thead><tr><th>Catégorie</th><th>Outils</th><th>Usage principal</th></tr></thead>
          <tbody>
            <tr><td>Documents &amp; PDF</td><td>iLovePDF, PDF Scanner, Convertio</td><td>Créer, convertir, numériser des documents</td></tr>
            <tr><td>Visuels &amp; design</td><td>PhotoRoom, DaFont, Pixabay, Pngtree, Freepik</td><td>Trouver et retoucher des visuels</td></tr>
            <tr><td>Notes &amp; organisation</td><td>OneNote, Notes Keeper</td><td>Centraliser idées et informations</td></tr>
            <tr><td>Intelligence artificielle</td><td>ChatGPT, Claude, Grok, Grammarly, ElevenLabs, HyperWrite</td><td>Rédiger, corriger, générer voix et texte</td></tr>
            <tr><td>Communication</td><td>Loom, Slack, Superhuman</td><td>Échanger vite et clairement</td></tr>
            <tr><td>Emails temporaires</td><td>Temp Mail, Xemail</td><td>Protéger sa boîte mail principale</td></tr>
            <tr><td>Business en ligne</td><td>SpeedInvoice, Systeme.io, Form.app, Zapier</td><td>Facturer, vendre, automatiser</td></tr>
            <tr><td>Apprentissage &amp; veille</td><td>Photomath, OpenClassrooms, Clubic</td><td>Se former et s'informer</td></tr>
          </tbody>
        </table>

        <h4>Bonnes pratiques générales</h4>
        <p>Pour éviter la dispersion entre 27 outils :</p>
        <ol>
          <li>Choisir un seul outil par besoin (ex. un seul outil de notes, une seule IA principale) et réserver les autres aux cas particuliers</li>
          <li>Utiliser Zapier pour relier automatiquement ses outils clés plutôt que de copier-coller l'information à la main</li>
          <li>Vérifier toujours la licence d'un visuel ou d'une police avant un usage commercial</li>
          <li>Ne jamais confier un mot de passe important ou une donnée sensible à un email jetable (Temp Mail, Xemail)</li>
          <li>Faire régulièrement un tri : désinstaller ou résilier les outils non utilisés depuis 2 mois</li>
        </ol>
      </div>
    `
  },


  "Adobe Photoshop — Retouche & création visuelle": {
    titre: "Adobe Photoshop — Retouche & création visuelle",
    duree: "Sur-mesure", public: "Community managers, graphistes débutants, entrepreneurs", prerequis: "Aisance informatique de base",
    modules: ["Comprendre l'interface Photoshop", "Les outils essentiels et les calques", "Détourage et retouche photo", "Créer des designs pour le web et l'impression"],
    apercu: "De la prise en main de l'interface à la création de visuels prêts à diffuser : outils essentiels, calques, détourage, retouche photo et créations pour le web, les réseaux sociaux et l'impression…",
    pdfUrl: "formation-adobe-photoshop.pdf",
    contenuComplet: `
      <p class="lede-cours">Une progression en quatre modules, de la découverte du logiciel jusqu'à la production de visuels prêts à diffuser : comprendre l'interface, maîtriser les outils essentiels et les calques, détourer et retoucher une photo sans jamais abîmer le fichier original, puis créer des designs pour le web, les réseaux sociaux, les événements et les logos.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Comprendre l'interface Photoshop</h3>
        <h4>Repérer les zones de travail</h4>
        <ul>
          <li><strong>Barre de menus —</strong> tout en haut : Fichier, Édition, Image, Calque, Sélection, Filtre… l'accès complet aux commandes</li>
          <li><strong>Barre d'options —</strong> change selon l'outil actif ; affiche ses réglages (taille, opacité, mode…)</li>
          <li><strong>Boîte à outils —</strong> colonne verticale à gauche : tous les outils de sélection, peinture et retouche</li>
          <li><strong>Canevas —</strong> la zone centrale où l'image prend forme ; onglets si plusieurs documents sont ouverts</li>
          <li><strong>Panneaux —</strong> à droite : Calques, Propriétés, Couleur, Historique… personnalisables et détachables</li>
          <li><strong>Barre d'état —</strong> en bas : zoom, informations sur le document et le fichier</li>
        </ul>
        <div class="callout">
          <strong>Astuce espace de travail —</strong> « Fenêtre → Espace de travail » permet d'enregistrer une disposition personnalisée (ex. « Photographie » ou « Design ») et de la retrouver en un clic. La touche <strong>Tab</strong> masque temporairement tous les panneaux pour ne garder que le canevas — idéal pour juger un visuel sans distraction.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Prendre ses repères</h4>
          <ol>
            <li>Ouvrir une image et identifier chaque zone de l'interface (menus, options, outils, panneaux)</li>
            <li>Déplacer et détacher un panneau, puis le rattacher à sa place d'origine</li>
            <li>Enregistrer une disposition personnalisée via Fenêtre → Espace de travail</li>
            <li>Utiliser la touche Tab pour basculer entre vue épurée et vue complète</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Les outils essentiels et les calques</h3>
        <h4>Outils de sélection</h4>
        <ul>
          <li><strong>Sélection rectangle / ellipse (M) —</strong> pour des formes géométriques simples et des recadrages nets</li>
          <li><strong>Lasso (L) —</strong> tracé libre à main levée ; le lasso polygonal crée des segments droits</li>
          <li><strong>Baguette magique (W) —</strong> sélectionne par plage de couleur similaire ; idéale sur fonds unis</li>
          <li><strong>Sélection rapide (W) —</strong> on « peint » la zone à sélectionner ; Photoshop en trouve les contours</li>
        </ul>

        <h4>Peinture &amp; retouche</h4>
        <ul>
          <li><strong>Pinceau (B) —</strong> peint avec la couleur de premier plan ; taille et dureté réglables</li>
          <li><strong>Tampon de duplication (S) —</strong> clone une zone de l'image sur une autre — base de toute retouche</li>
          <li><strong>Correcteur / pièce (J) —</strong> corrige défauts et imperfections en fusionnant automatiquement les textures</li>
          <li><strong>Dégradé / Pot de peinture (G) —</strong> remplit une sélection ou un calque d'une couleur ou d'un dégradé</li>
        </ul>

        <h4>Texte, formes &amp; recadrage</h4>
        <ul>
          <li><strong>Outil Texte (T) —</strong> crée un calque de texte modifiable à tout moment</li>
          <li><strong>Formes vectorielles —</strong> rectangles, ellipses, formes personnalisées — redimensionnables sans perte</li>
          <li><strong>Recadrage (C) —</strong> redéfinit le cadrage et les dimensions finales du document</li>
          <li><strong>Plume (P) —</strong> trace des courbes vectorielles précises — base du détourage professionnel</li>
        </ul>
        <div class="callout">
          <strong>Bonnes pratiques —</strong> le texte et les formes créent toujours un nouveau calque, modifiable indéfiniment tant qu'il n'est pas « aplati ». Pour le recadrage, n'activer « Supprimer les pixels rognés » que si aucune retouche future n'est prévue hors cadre.
        </div>

        <h4>Les calques : la base de tout montage</h4>
        <ul>
          <li><strong>Empilement —</strong> chaque élément vit sur son propre calque ; l'ordre d'empilement définit ce qui est visible devant ou derrière</li>
          <li><strong>Groupes —</strong> regroupe plusieurs calques dans un dossier pour organiser un projet complexe</li>
          <li><strong>Modes de fusion —</strong> définissent comment un calque interagit avec ceux du dessous (Produit, Incrustation, Lumière tenue…)</li>
          <li><strong>Calques de réglage —</strong> corrigent couleur ou luminosité sans jamais altérer les pixels d'origine</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>S'entraîner sur les outils de base</h4>
          <ol>
            <li>Découper une forme simple avec la sélection rectangle, puis la même avec le lasso</li>
            <li>Utiliser le tampon de duplication pour effacer un élément indésirable sur une photo</li>
            <li>Ajouter un calque de texte et une forme vectorielle sur une image</li>
            <li>Organiser 3 à 4 calques en groupe et tester deux modes de fusion différents</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Détourage et retouche photo</h3>
        <p>Isoler un sujet avec précision et sublimer une image, sans jamais abîmer le fichier original.</p>
        <h4>Détourage précis</h4>
        <ul>
          <li><strong>Sélection rapide + Améliorer —</strong> rapide sur sujets nets ; affiner ensuite les bords avec « Sélectionner et Masquer » (Ctrl/Cmd+Alt+R)</li>
          <li><strong>Outil Plume —</strong> tracé vectoriel point par point — la méthode la plus précise, idéale sur des contours nets (packshots, logos)</li>
          <li><strong>Sélectionner un sujet —</strong> détection automatique par IA — excellent point de départ à affiner ensuite</li>
          <li><strong>Masque de fusion —</strong> on exporte toujours la sélection finale vers un masque de fusion, jamais en supprimant les pixels : le détourage reste modifiable à vie, même après avoir fermé et rouvert le fichier</li>
        </ul>
        <div class="callout">
          <strong>Sélectionner et masquer —</strong> ce panneau permet d'affiner les bords d'une sélection : rayon de détection des contours, contraste, lissage, et surtout « Décontaminer les couleurs » pour supprimer les franges de l'ancien fond (très utile sur les cheveux).
        </div>

        <h4>Retoucher une photo comme un pro</h4>
        <p>La retouche se fait toujours sur un calque dupliqué (Ctrl/Cmd+J) — jamais directement sur l'original.</p>
        <ul>
          <li><strong>Fréquence de séparation —</strong> sépare texture et couleur pour lisser la peau sans perdre le grain naturel</li>
          <li><strong>Densité + / – (Dodge &amp; Burn) —</strong> sculpte la lumière : éclaircit et assombrit pour donner du volume</li>
          <li><strong>Courbes &amp; Niveaux —</strong> réglages non destructifs pour corriger contraste et exposition avec précision</li>
          <li><strong>Balance des couleurs —</strong> harmonise les tons (ombres, tons moyens, hautes lumières) pour une ambiance cohérente</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Détourer et retoucher une photo</h4>
          <ol>
            <li>Reprendre une ancienne photo et détourer le sujet principal avec « Sélectionner un sujet », puis affiner avec « Sélectionner et Masquer »</li>
            <li>Exporter la sélection en masque de fusion plutôt que de supprimer les pixels</li>
            <li>Sur un calque dupliqué, corriger l'exposition avec Courbes et harmoniser les couleurs</li>
            <li>Comparer le rendu avant/après sans jamais avoir touché au calque d'origine</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 4</span>
        <h3>Créer des designs pour le web et l'impression</h3>
        <p>Web, réseaux sociaux, événements, logos : produire des visuels prêts à diffuser.</p>
        <h4>Bien préparer son fichier</h4>
        <table class="table-cours">
          <thead><tr><th>Réglage</th><th>Recommandation</th></tr></thead>
          <tbody>
            <tr><td>Résolution</td><td>72 dpi pour l'écran, 300 dpi pour l'impression</td></tr>
            <tr><td>Mode couleur</td><td>RVB pour le numérique, CMJN pour tout ce qui sera imprimé</td></tr>
            <tr><td>Repères &amp; grilles</td><td>Affichage → Nouveau repère, pour aligner textes et éléments proprement</td></tr>
            <tr><td>Fichier source</td><td>Toujours conserver un .PSD avec tous les calques intacts</td></tr>
          </tbody>
        </table>

        <h4>Formats web &amp; réseaux sociaux</h4>
        <table class="table-cours">
          <thead><tr><th>Usage</th><th>Dimensions</th></tr></thead>
          <tbody>
            <tr><td>Story / Reel</td><td>1080 × 1920 px</td></tr>
            <tr><td>Publication carrée</td><td>1080 × 1080 px</td></tr>
            <tr><td>Bannière web (image de lien)</td><td>1200 × 628 px</td></tr>
            <tr><td>Miniature vidéo YouTube</td><td>1280 × 720 px</td></tr>
          </tbody>
        </table>

        <h4>Affiches &amp; flyers d'événement</h4>
        <p>Une affiche efficace se lit en 3 secondes : l'essentiel doit sauter aux yeux.</p>
        <ul>
          <li><strong>Hiérarchie de l'information —</strong> titre, date/lieu, puis détails — dans cet ordre de lecture</li>
          <li><strong>Typographie limitée —</strong> deux polices maximum : une pour les titres, une pour le texte courant</li>
          <li><strong>Grille &amp; alignement —</strong> aligner tous les éléments sur une grille invisible pour un rendu professionnel</li>
          <li><strong>Contraste des couleurs —</strong> s'assurer que le texte reste lisible sur l'image ou le fond choisi</li>
        </ul>

        <h4>Concevoir un logo</h4>
        <p>Un bon logo reste lisible en très petit, en noir et blanc, et sur n'importe quel fond.</p>
        <ul>
          <li><strong>Formes simples —</strong> partir de formes vectorielles basiques — plus mémorisable qu'un dessin complexe</li>
          <li><strong>Tracés vectoriels —</strong> utiliser la Plume ou les formes pour un rendu net, redimensionnable sans perte</li>
          <li><strong>Test en niveaux de gris —</strong> vérifier que le logo fonctionne encore sans la couleur</li>
          <li><strong>Test sur fonds variés —</strong> le présenter sur fond clair, foncé et en situation réelle (t-shirt, en-tête)</li>
        </ul>
        <div class="callout">
          <strong>Livrables logo —</strong> toujours livrer le logo en plusieurs versions : couleur, noir, blanc, et fond transparent (PNG) — prêt à l'emploi, sans manipulation supplémentaire.
        </div>

        <h4>Exporter ses créations</h4>
        <table class="table-cours">
          <thead><tr><th>Format</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td>PNG</td><td>Fond transparent possible — idéal pour logos et éléments à superposer</td></tr>
            <tr><td>JPEG</td><td>Fichier léger, sans transparence — parfait pour photos et publications sociales</td></tr>
            <tr><td>PDF</td><td>Conserve la qualité vectorielle — le standard pour l'impression professionnelle</td></tr>
            <tr><td>Exporter sous</td><td>Menu dédié avec aperçu en direct pour ajuster qualité et poids du fichier</td></tr>
          </tbody>
        </table>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Produire un visuel complet</h4>
          <ol>
            <li>Créer un visuel réseaux sociaux complet : un post carré et une story, aux bonnes dimensions</li>
            <li>Concevoir un premier logo simple et le tester sur 3 fonds différents (clair, foncé, en situation)</li>
            <li>Exporter chaque création dans le format adapté (PNG, JPEG ou PDF selon l'usage)</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Module 1 —</strong> repérer chaque zone de l'interface et personnaliser son espace de travail</li>
          <li><strong>Module 2 —</strong> maîtriser sélection, peinture, texte, formes, et organiser son projet avec les calques</li>
          <li><strong>Module 3 —</strong> détourer via un masque de fusion (jamais en supprimant les pixels) et retoucher sur un calque dupliqué, sans jamais toucher à l'original</li>
          <li><strong>Module 4 —</strong> adapter résolution et mode couleur à l'usage (écran ou impression), et exporter dans le bon format</li>
        </ul>
        <div class="callout">
          <strong>Pour aller plus loin —</strong> reprendre une photo personnelle chaque semaine pour s'entraîner à la retouche, et constituer une bibliothèque de logos et visuels tests pour progresser.
        </div>
      </div>
    `
  },

  "Adobe Premiere Pro — Montage vidéo": {
    titre: "Adobe Premiere Pro — Montage vidéo",
    duree: "Sur-mesure", public: "Créateurs de contenu, community managers, entrepreneurs", prerequis: "Aisance informatique de base",
    modules: ["Prise en main du montage et de la timeline", "Découpe, transitions et habillage texte", "Export optimisé pour le web et les réseaux sociaux"],
    apercu: "De la prise en main du montage à l'export optimisé pour le web et les réseaux sociaux : timeline, découpe, montage en 3 points, transitions, habillage texte et Adobe Media Encoder…",
    pdfUrl: "formation-adobe-premiere-pro.pdf",
    contenuComplet: `
      <p class="lede-cours">Une progression en trois modules, de la prise en main du logiciel jusqu'à la publication de vos vidéos : organiser un projet et se repérer dans la timeline, découper et enchaîner ses plans avec le montage en 3 points, habiller ses vidéos de texte et de transitions, puis exporter au bon format pour chaque plateforme.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Prise en main du montage et de la timeline</h3>
        <h4>Se repérer dans l'espace de travail</h4>
        <ul>
          <li><strong>Panneau Projet —</strong> la bibliothèque de tous vos médias importés : vidéos, sons, images, séquences</li>
          <li><strong>Moniteur source —</strong> prévisualise un clip brut avant de l'insérer dans la timeline</li>
          <li><strong>Moniteur programme —</strong> affiche le résultat final de la séquence en cours de montage</li>
          <li><strong>Timeline —</strong> l'établi du montage : on y assemble clips, sons et effets dans le temps</li>
          <li><strong>Panneau Effets —</strong> toutes les transitions et effets vidéo/audio, à glisser sur un clip</li>
          <li><strong>Panneau Historique —</strong> revenir en arrière à n'importe quelle étape du montage</li>
        </ul>

        <h4>La timeline en détail</h4>
        <p>Chaque élément sonore ou visuel occupe une piste ; l'ordre et la superposition des pistes définissent le rendu final.</p>
        <ul>
          <li><strong>Pistes vidéo (V1, V2…) —</strong> empilées : la piste du dessus masque celle du dessous</li>
          <li><strong>Pistes audio (A1, A2…) —</strong> voix, musique, bruitages — chacune sur sa propre piste</li>
          <li><strong>Échelle temporelle —</strong> zoom avant/arrière sur la timeline pour un montage précis à l'image</li>
          <li><strong>Marqueurs —</strong> repères visuels pour retrouver un moment clé (beat musical, réplique…)</li>
        </ul>
        <div class="callout">
          <strong>Astuce navigation —</strong> la barre d'espace lance et arrête la lecture ; les touches J, K, L permettent de lire en arrière, de mettre en pause et de lire en avant — en appuyant plusieurs fois pour accélérer. La molette + Alt zoome la timeline sans changer d'outil.
        </div>

        <h4>Importer et organiser ses médias</h4>
        <ul>
          <li><strong>Bins (dossiers) —</strong> organiser ses rushs par scène, caméra ou type (vidéo, son, musique) dès l'import</li>
          <li><strong>Séquences —</strong> chaque séquence est un montage indépendant — on peut en créer plusieurs par projet</li>
          <li><strong>Proxies —</strong> versions allégées des fichiers lourds (4K, 8K) pour un montage plus fluide</li>
        </ul>

        <h4>Réglages audio de base</h4>
        <p>Un son propre compte souvent plus que l'image dans la perception de qualité d'une vidéo.</p>
        <ul>
          <li><strong>Niveau sonore (gain) —</strong> ajuster le volume de chaque clip pour éviter la saturation</li>
          <li><strong>Fondus audio —</strong> adoucir les débuts et fins de clip pour éviter les coupures brutales</li>
          <li><strong>Keyframes de volume —</strong> faire varier le son dans le temps (ex. baisser la musique quand la voix parle)</li>
        </ul>
        <div class="callout">
          <strong>Bonnes pratiques —</strong> garder la musique environ 10 à 15 dB en dessous de la voix pour une lisibilité confortable, et toujours écouter son montage au casque avant l'export final.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Organiser un premier projet</h4>
          <ol>
            <li>Importer quelques rushs et les ranger dans des bins par type (vidéo, son, musique)</li>
            <li>Créer une séquence et assembler 3 à 4 clips sur la timeline</li>
            <li>Ajouter une piste audio de musique et régler son gain sous le niveau de la voix</li>
            <li>Ajouter un fondu audio en début et fin de piste musicale</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Découpe, transitions et habillage texte</h3>
        <p>Assembler les images avec précision et donner du rythme et de la lisibilité au montage.</p>
        <h4>Outils de découpe</h4>
        <ul>
          <li><strong>Outil Lame de rasoir (C) —</strong> coupe un clip en deux à l'endroit du curseur</li>
          <li><strong>Outil Sélection (V) —</strong> déplace, redimensionne et réorganise les clips sur la timeline</li>
          <li><strong>Montage ondulé (Ripple) —</strong> raccourcit un clip en refermant automatiquement le vide laissé</li>
          <li><strong>Montage roulant (Rolling) —</strong> déplace le point de coupe entre deux clips sans changer la durée totale</li>
        </ul>

        <h4>Le montage en 3 points</h4>
        <p>La technique de base pour insérer un clip précisément dans une séquence.</p>
        <ol>
          <li><strong>Définir Entrée / Sortie —</strong> sur le clip source, marquer le début (I) et la fin (O) du passage voulu</li>
          <li><strong>Positionner sur la timeline —</strong> placer le curseur à l'endroit d'insertion dans la séquence</li>
          <li><strong>Insertion —</strong> insère le clip et repousse tout ce qui suit, sans rien écraser</li>
          <li><strong>Incrustation —</strong> remplace uniquement la portion couverte, sans décaler le reste</li>
        </ol>
        <div class="callout">
          <strong>J-cut &amp; L-cut —</strong> le J-cut fait entendre le son du plan suivant avant de voir l'image ; le L-cut garde le son du plan précédent après le changement d'image. Ces décalages son/image rendent les transitions de dialogue beaucoup plus naturelles.
        </div>

        <h4>Utiliser les transitions à bon escient</h4>
        <ul>
          <li><strong>Coupe franche —</strong> la transition par défaut, invisible — la plus utilisée dans 90 % des montages</li>
          <li><strong>Fondu au noir —</strong> marque une vraie pause narrative — fin de chapitre, changement de lieu ou de temps</li>
          <li><strong>Fondu enchaîné —</strong> superpose deux plans en douceur — utile pour un effet de passage du temps</li>
          <li><strong>Durée maîtrisée —</strong> une transition trop longue ralentit le rythme : rester généralement sous 1 seconde</li>
        </ul>

        <h4>Habillage texte &amp; titres</h4>
        <p>Le texte guide l'attention et apporte du contexte — il doit rester lisible et cohérent tout au long de la vidéo.</p>
        <ul>
          <li><strong>Texte essentiel —</strong> panneau dédié pour créer et styliser un titre directement sur le moniteur</li>
          <li><strong>Habillages (lower thirds) —</strong> bandeaux d'information en bas d'écran — nom, titre, sous-titres</li>
          <li><strong>Animation de texte —</strong> keyframes de position/opacité pour faire entrer et sortir un texte en douceur</li>
          <li><strong>Styles réutilisables —</strong> enregistrer un style de texte pour garder une identité visuelle cohérente</li>
        </ul>
        <div class="callout">
          <strong>Lisibilité —</strong> toujours vérifier le contraste du texte sur l'image (ombre portée ou fond semi-transparent si besoin), et rester dans la zone de sécurité du cadre pour ne pas risquer un texte coupé sur certains écrans.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Découper et habiller un montage</h4>
          <ol>
            <li>Insérer un clip dans une séquence existante avec la technique du montage en 3 points</li>
            <li>Ajouter une transition (fondu enchaîné ou fondu au noir) entre deux plans, en maîtrisant sa durée</li>
            <li>Créer un titre et un habillage (lower third) avec une animation d'entrée et de sortie</li>
            <li>Vérifier la lisibilité du texte sur l'image et l'ajuster si besoin</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Export optimisé pour le web et les réseaux sociaux</h3>
        <p>Livrer un fichier léger, net et au bon format pour chaque plateforme de diffusion.</p>
        <h4>Préparer l'export</h4>
        <table class="table-cours">
          <thead><tr><th>Réglage</th><th>Recommandation</th></tr></thead>
          <tbody>
            <tr><td>Codec</td><td>H.264 — le standard universel pour le web</td></tr>
            <tr><td>Résolution</td><td>1080p suffit pour la plupart des usages web</td></tr>
            <tr><td>Débit (bitrate)</td><td>VBR, 2 passes — meilleure qualité à poids égal</td></tr>
            <tr><td>Audio</td><td>AAC, 48 kHz — compatible avec toutes les plateformes</td></tr>
          </tbody>
        </table>

        <h4>Le bon format pour chaque plateforme</h4>
        <table class="table-cours">
          <thead><tr><th>Usage</th><th>Format &amp; dimensions</th></tr></thead>
          <tbody>
            <tr><td>Story / Reel / TikTok</td><td>Vertical 9:16 — 1080 × 1920 px, idéalement sous 60 s</td></tr>
            <tr><td>Publication carrée</td><td>1:1 — 1080 × 1080 px</td></tr>
            <tr><td>YouTube / site web</td><td>16:9 — 1920 × 1080 px</td></tr>
          </tbody>
        </table>

        <h4>Exporter avec Adobe Media Encoder</h4>
        <p>Media Encoder traite les exports en arrière-plan, sans bloquer le travail dans Premiere Pro.</p>
        <ul>
          <li><strong>File d'attente —</strong> empiler plusieurs séquences ou formats à exporter d'affilée</li>
          <li><strong>Préréglages —</strong> choisir un préréglage tout prêt (« Instagram Story », « YouTube 1080p »…)</li>
          <li><strong>Export multi-formats —</strong> générer plusieurs versions (web, réseaux, archive) à partir de la même séquence</li>
        </ul>
        <div class="callout">
          <strong>Gain de temps —</strong> le raccourci Ctrl/Cmd+M ouvre directement la fenêtre d'export depuis Premiere Pro. Envoyer vers Media Encoder (au lieu d'exporter directement) permet de continuer à monter pendant que l'export se termine.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Monter et exporter une vidéo complète</h4>
          <ol>
            <li>Monter une courte vidéo (30–60 s) à partir de rushs existants, en appliquant le montage en 3 points</li>
            <li>Ajouter un habillage texte et une transition entre deux séquences du montage</li>
            <li>Exporter la même vidéo en format YouTube (16:9) et en format Story (9:16)</li>
            <li>Envoyer les deux exports vers Adobe Media Encoder pour les traiter en file d'attente</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Module 1 —</strong> organiser ses médias en bins, comprendre les pistes de la timeline et régler un niveau audio propre</li>
          <li><strong>Module 2 —</strong> insérer un clip avec le montage en 3 points, doser les transitions et habiller le texte avec une bonne lisibilité</li>
          <li><strong>Module 3 —</strong> adapter codec et format à la plateforme de diffusion, et utiliser Media Encoder pour exporter sans bloquer le montage</li>
        </ul>
        <div class="callout">
          <strong>Pour aller plus loin —</strong> monter une courte vidéo chaque semaine à partir de rushs personnels, en variant les formats de sortie (16:9, 9:16, 1:1) pour s'entraîner à chaque plateforme.
        </div>
      </div>
    `
  },

  "Gestion & pilotage": {
    titre: "Gestion & pilotage",
    duree: "Sur-mesure", public: "Gérants, dirigeants d'entreprise", prerequis: "Aucun",
    modules: ["Diagnostic de l'organisation actuelle", "Mise en place d'outils de pilotage simples", "Suivi mensuel des indicateurs clés"],
    apercu: "Diagnostiquer l'organisation actuelle sur 4 axes, mettre en place un tableau de bord simple avec 5 à 7 indicateurs prioritaires, puis installer un rituel mensuel qui transforme les chiffres suivis en décisions concrètes…",
    pdfUrl: "gestion-pilotage.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour piloter son entreprise avec des faits plutôt qu'à l'instinct : diagnostiquer l'organisation actuelle pour repérer les zones de flou, mettre en place un tableau de bord simple et réellement tenu à jour, puis installer un rituel de suivi mensuel qui transforme chaque indicateur en décision.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Diagnostic de l'organisation actuelle</h3>
        <h4>Pourquoi diagnostiquer avant de piloter</h4>
        <p>Beaucoup de dirigeants ajoutent des outils de suivi sans avoir clarifié au préalable qui fait quoi, où se situent les zones de flou et quelles décisions se prennent encore « à l'instinct ». Le diagnostic évite de piloter dans le vide.</p>
        <ul>
          <li><strong>Cartographier les processus —</strong> identifier les grandes fonctions de l'entreprise (commercial, production ou livraison, finance, RH) et qui en a la responsabilité</li>
          <li><strong>Repérer les zones de flou —</strong> tâches sans responsable clair, décisions prises au feeling, information dispersée entre mails et tableurs multiples</li>
          <li><strong>Prioriser 2 à 3 chantiers —</strong> résister à l'envie de tout changer en même temps ; choisir les zones de flou qui coûtent le plus cher à l'organisation</li>
        </ul>

        <h4>Un diagnostic en 4 axes</h4>
        <p>Passer l'organisation au crible de quatre axes complémentaires, chacun noté de 1 (flou total) à 5 (parfaitement maîtrisé) :</p>
        <table class="table-cours">
          <thead><tr><th>Axe</th><th>Question clé</th></tr></thead>
          <tbody>
            <tr><td><strong>Organisation</strong></td><td>Chaque tâche récurrente a-t-elle un responsable identifié et connu de l'équipe ?</td></tr>
            <tr><td><strong>Finance</strong></td><td>Peut-on répondre en moins de 5 minutes à « quelle est notre trésorerie actuelle » ?</td></tr>
            <tr><td><strong>Activité commerciale</strong></td><td>Sait-on combien d'opportunités sont en cours et à quel stade elles se trouvent ?</td></tr>
            <tr><td><strong>Ressources humaines</strong></td><td>Repère-t-on une surcharge de travail avant qu'elle ne provoque un arrêt ou un départ ?</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>À retenir —</strong> un diagnostic honnête vaut mieux qu'un tableau de bord sophistiqué construit sur des bases floues.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Réaliser son auto-diagnostic</h4>
          <ol>
            <li>Noter chacun des 4 axes de 1 à 5 selon l'état réel de l'organisation</li>
            <li>Identifier pour chaque axe une zone de flou concrète (tâche sans responsable, information dispersée…)</li>
            <li>Sélectionner les 2 à 3 chantiers prioritaires à traiter en premier</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Mise en place d'outils de pilotage simples</h3>
        <h4>Les 3 principes d'un bon tableau de bord</h4>
        <ul>
          <li><strong>Tenir sur une page —</strong> si le tableau de bord nécessite de faire défiler plusieurs onglets pour se faire une idée, il ne sera pas consulté régulièrement</li>
          <li><strong>Être facile à mettre à jour —</strong> un indicateur qui demande une heure de collecte manuelle chaque mois finit toujours par être abandonné</li>
          <li><strong>Être compris de toute l'équipe —</strong> un tableau de bord n'a de valeur que si chacun comprend ce qu'il mesure et pourquoi cela compte</li>
        </ul>

        <h4>Comparatif des outils disponibles</h4>
        <table class="table-cours">
          <thead><tr><th>Outil</th><th>Idéal pour</th><th>Points forts</th><th>Limites</th></tr></thead>
          <tbody>
            <tr><td>Tableur (Excel / Google Sheets)</td><td>Petites structures, démarrage rapide</td><td>Gratuit, flexible, pas de courbe d'apprentissage</td><td>Peu collaboratif, risque d'erreurs manuelles</td></tr>
            <tr><td>Notion / monday.com</td><td>Équipes qui veulent un visuel partagé</td><td>Très visuel, personnalisable, collaboratif en temps réel</td><td>Demande un peu de mise en place initiale</td></tr>
            <tr><td>Google Data Studio / Power BI</td><td>Organisations avec plusieurs sources de données</td><td>Connecté directement aux sources, mise à jour automatique</td><td>Courbe d'apprentissage plus longue, souvent besoin d'un référent technique</td></tr>
          </tbody>
        </table>
        <p>Commencer simple (tableur) et migrer vers un outil plus riche une fois le rituel de suivi installé est souvent le chemin le plus efficace.</p>

        <h4>Mettre en place son tableau de bord en 4 étapes</h4>
        <ol>
          <li><strong>Choisir 5 à 7 indicateurs prioritaires —</strong> un indicateur par enjeu réel de l'entreprise, pas un par donnée disponible ; éliminer tout indicateur qui ne déclenchera jamais de décision</li>
          <li><strong>Définir la fréquence de suivi —</strong> hebdomadaire pour l'activité commerciale, mensuel pour la finance et les RH ; une fréquence trop fine épuise l'équipe sans apporter de valeur</li>
          <li><strong>Désigner un responsable de mise à jour —</strong> un tableau de bord sans propriétaire clair n'est jamais tenu à jour ; prévoir un créneau récurrent dédié à la mise à jour</li>
          <li><strong>Automatiser la collecte quand c'est possible —</strong> connecter les sources existantes (CRM, comptabilité) plutôt que ressaisir ; chaque automatisation économisée est un risque d'oubli en moins</li>
        </ol>
        <div class="callout">
          <strong>À retenir —</strong> mieux vaut 5 indicateurs suivis chaque mois que 20 indicateurs mis à jour une fois puis oubliés.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Construire son tableau de bord</h4>
          <ol>
            <li>Lister 5 à 7 indicateurs prioritaires à partir des chantiers identifiés au module 1</li>
            <li>Choisir l'outil adapté à la taille de son équipe (tableur, Notion/monday.com, ou Data Studio/Power BI)</li>
            <li>Désigner un responsable de mise à jour et caler la fréquence de suivi de chaque indicateur</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Suivi mensuel des indicateurs clés</h3>
        <h4>Les catégories d'indicateurs à suivre</h4>
        <ul>
          <li><strong>Indicateurs financiers —</strong> chiffre d'affaires, marge, trésorerie disponible</li>
          <li><strong>Indicateurs d'activité —</strong> nombre de clients, taux de conversion, pipeline commercial</li>
          <li><strong>Indicateurs RH —</strong> turnover, absentéisme, charge de travail par personne</li>
          <li><strong>Indicateurs de satisfaction —</strong> avis clients, taux de réclamation, taux de fidélisation</li>
        </ul>

        <h4>Comment lire un indicateur</h4>
        <p>Un chiffre isolé ne dit rien : c'est sa tendance et son écart à l'objectif qui déclenchent une décision.</p>
        <ul>
          <li><strong>La tendance —</strong> comparer au mois précédent et aux mois antérieurs : le chiffre progresse-t-il, stagne-t-il ou recule-t-il ?</li>
          <li><strong>L'écart à l'objectif —</strong> se situer par rapport à une cible définie à l'avance, pas par rapport à une impression générale</li>
          <li><strong>L'action si hors norme —</strong> chaque écart significatif appelle une action décidée sur le moment, pas un simple constat</li>
        </ul>

        <h4>Structurer sa réunion mensuelle de pilotage</h4>
        <table class="table-cours">
          <thead><tr><th>Temps</th><th>Contenu</th><th>Durée indicative</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Revue des indicateurs clés et de leur évolution</td><td>20 min</td></tr>
            <tr><td>2</td><td>Suivi des décisions et actions prises le mois précédent</td><td>15 min</td></tr>
            <tr><td>3</td><td>Décisions et actions pour le mois à venir, avec un responsable et une échéance</td><td>20 min</td></tr>
          </tbody>
        </table>
        <p>Une réunion mensuelle de pilotage tient généralement en 45 à 60 minutes, avec les personnes qui peuvent décider ou agir sur les écarts identifiés.</p>
        <div class="callout">
          <strong>À retenir —</strong> un indicateur suivi sans décision associée n'est qu'un constat : le pilotage commence quand le chiffre déclenche une action.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Préparer sa première réunion de pilotage</h4>
          <ol>
            <li>Choisir une date récurrente pour la réunion mensuelle de pilotage</li>
            <li>Préparer l'ordre du jour en 3 temps : revue des indicateurs, suivi des actions, décisions à venir</li>
            <li>Identifier à l'avance un écart significatif et l'action qui pourrait y répondre</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>Ce qu'il faut retenir</h3>
        <ul>
          <li><strong>Module 1 —</strong> le diagnostic révèle les zones de flou avant de choisir quels outils ou indicateurs mettre en place</li>
          <li><strong>Module 2 —</strong> un tableau de bord simple, tenu à jour, vaut mieux qu'un outil sophistiqué laissé à l'abandon</li>
          <li><strong>Module 3 —</strong> le suivi mensuel transforme les chiffres en décisions : un écart sans action n'est qu'un constat</li>
        </ul>
        <div class="callout">
          <strong>Prochaine étape —</strong> réaliser son auto-diagnostic sur les 4 axes, puis choisir 5 indicateurs prioritaires à suivre dès le mois prochain.
        </div>
      </div>
    `
  },

  "Stratégie d'entreprise": {
    titre: "Stratégie d'entreprise",
    duree: "Sur-mesure", public: "Fondateurs, comités de direction", prerequis: "Aucun",
    modules: ["Clarification du positionnement", "Priorisation des actions à fort impact", "Plan d'action à 90 jours"],
    apercu: "Trois modules pour passer d'une intuition stratégique à un plan concret : clarifier un positionnement net et différenciant, prioriser les actions qui pèsent vraiment sur les résultats, puis les…",
    pdfUrl: "strategie-entreprise.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour passer d'une intuition stratégique à un plan concret : clarifier un positionnement net et différenciant, prioriser les actions qui pèsent vraiment sur les résultats, puis les organiser dans un plan d'action à 90 jours, réaliste et suivi dans le temps.</p>

      <div class="module-block">
        <span class="module-tag">Objectifs</span>
        <h3>Objectifs de la formation</h3>
        <p>À l'issue de cette formation, chaque dirigeant sera capable de :</p>
        <ul>
          <li><strong>Clarifier son positionnement —</strong> formuler une offre distincte et une proposition de valeur compréhensible en une phrase</li>
          <li><strong>Prioriser avec méthode —</strong> distinguer les actions à fort impact de celles qui dispersent l'énergie de l'équipe</li>
          <li><strong>Passer à l'exécution —</strong> structurer un plan d'action réaliste sur 90 jours, avec responsables, échéances et suivi</li>
        </ul>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Clarification du positionnement</h3>
        <h4>Pourquoi un positionnement flou coûte cher</h4>
        <p>Une entreprise qui veut s'adresser à tout le monde finit souvent par ne convaincre personne : le message se dilue, les commerciaux improvisent un discours différent selon le client, et les décisions internes (produit, prix, communication) manquent de boussole commune. Clarifier le positionnement n'est pas un exercice de communication, mais une décision de gestion : il tranche ce que l'entreprise fait, pour qui, et ce qu'elle choisit de ne pas faire.</p>

        <h4>Les 3 questions du positionnement</h4>
        <ul>
          <li><strong>Pour qui —</strong> quelle cible précise l'entreprise sert-elle en priorité, plutôt que « tout le monde » ?</li>
          <li><strong>Quoi de différent —</strong> quel avantage concret la distingue des alternatives que ce client pourrait choisir ?</li>
          <li><strong>Pourquoi vous —</strong> quelle preuve (expérience, résultats, méthode) rend cette différence crédible ?</li>
        </ul>

        <h4>La matrice de positionnement</h4>
        <p>Placer son offre et celles des principaux concurrents sur deux axes pertinents pour le client (par exemple prix / niveau de personnalisation, ou rapidité / expertise) fait apparaître les zones déjà occupées et les espaces libres. L'objectif n'est pas d'être le meilleur sur tous les axes, mais d'occuper une place identifiable et défendable.</p>
        <div class="callout">
          <strong>Le piège du « tout pour tout le monde » —</strong> un positionnement qui cherche à séduire chaque segment de client finit par ne parler fort à aucun d'entre eux ; mieux vaut un « oui » clair pour une cible précise que des compromis pour convenir à tous.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Rédiger sa proposition de valeur en une phrase</h4>
          <ol>
            <li>Répondre par écrit, en une phrase chacune, aux 3 questions du positionnement (pour qui, quoi de différent, pourquoi vous)</li>
            <li>Assembler les 3 réponses en une seule proposition de valeur : « Nous aidons [cible] à [bénéfice], grâce à [différence], contrairement à [alternative] »</li>
            <li>Tester la phrase auprès d'un collègue ou associé : peut-il la répéter dans ses propres mots après une seule écoute ?</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Priorisation des actions à fort impact</h3>
        <h4>Le piège de la liste à rallonge</h4>
        <p>Une fois le positionnement clarifié, la tentation est de lancer plusieurs chantiers en même temps : nouveau produit, refonte du site, prospection, recrutement… Chaque action prise isolément semble justifiée, mais leur accumulation dilue le temps et les ressources disponibles. Prioriser, c'est accepter de retarder ou d'abandonner des actions par ailleurs légitimes pour concentrer l'énergie sur celles qui comptent le plus maintenant.</p>

        <h4>La matrice impact / effort</h4>
        <p>Chaque action candidate est notée sur deux axes : l'impact attendu sur les résultats de l'entreprise, et l'effort nécessaire pour la mener à bien (temps, budget, complexité). Ce croisement fait apparaître quatre zones :</p>
        <table class="table-cours">
          <thead><tr><th>Zone</th><th>Caractéristique</th><th>Action recommandée</th></tr></thead>
          <tbody>
            <tr><td>Impact fort, effort faible</td><td>Résultat rapide et peu coûteux</td><td>Lancer en premier (quick win)</td></tr>
            <tr><td>Impact fort, effort élevé</td><td>Levier majeur mais exigeant</td><td>Planifier avec un responsable et des jalons clairs</td></tr>
            <tr><td>Impact faible, effort faible</td><td>Tâche secondaire</td><td>Déléguer ou traiter en tâche de fond</td></tr>
            <tr><td>Impact faible, effort élevé</td><td>Chantier coûteux et peu rentable</td><td>Reporter ou abandonner</td></tr>
          </tbody>
        </table>

        <h4>La règle des 20/80 appliquée à la stratégie</h4>
        <p>Dans la plupart des organisations, une minorité d'actions concentre l'essentiel des résultats. L'enjeu de la priorisation n'est pas de tout faire un peu, mais d'identifier ce noyau d'actions à fort effet de levier et de lui donner les moyens de réussir avant d'ouvrir de nouveaux chantiers.</p>
        <div class="callout">
          <strong>Se limiter volontairement —</strong> retenir 3 à 5 actions prioritaires par trimestre, pas plus ; toute nouvelle idée attend son tour dans une liste séparée plutôt que de s'ajouter au plan en cours.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Prioriser ses actions</h4>
          <ol>
            <li>Lister 10 actions envisagées pour les 3 prochains mois</li>
            <li>Noter chacune de 1 à 5 sur son impact attendu, puis de 1 à 5 sur l'effort nécessaire</li>
            <li>Placer les 10 actions dans la matrice impact / effort et sélectionner les 3 à 5 actions prioritaires</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Plan d'action à 90 jours</h3>
        <h4>Pourquoi 90 jours</h4>
        <p>Un horizon trop long dilue l'urgence et laisse le temps de dériver ; un horizon trop court ne permet pas de mener une action à fort impact jusqu'au bout. 90 jours offrent un compromis éprouvé : assez de temps pour produire un résultat visible, assez court pour garder le rythme et ajuster rapidement si le contexte change.</p>

        <h4>Structurer son plan en 3 sprints de 30 jours</h4>
        <ul>
          <li><strong>Sprint 1 (jours 1-30) —</strong> cadrer chaque action prioritaire : objectif précis, responsable, ressources nécessaires, premier jalon</li>
          <li><strong>Sprint 2 (jours 31-60) —</strong> exécuter, en traitant les blocages au fil de l'eau plutôt qu'en les laissant s'accumuler</li>
          <li><strong>Sprint 3 (jours 61-90) —</strong> finaliser, mesurer le résultat obtenu par rapport à l'objectif de départ, et décider de la suite (généraliser, ajuster, arrêter)</li>
        </ul>

        <h4>Le tableau de pilotage</h4>
        <p>Un plan d'action se pilote sur une page, pas dans un long document : chaque action prioritaire y figure avec son responsable, son échéance, l'indicateur qui prouvera son succès, et son statut du moment.</p>
        <table class="table-cours">
          <thead><tr><th>Action</th><th>Responsable</th><th>Échéance</th><th>Indicateur de succès</th></tr></thead>
          <tbody>
            <tr><td>Action prioritaire 1</td><td>À désigner</td><td>Jour 30 / 60 / 90</td><td>Résultat mesurable attendu</td></tr>
            <tr><td>Action prioritaire 2</td><td>À désigner</td><td>Jour 30 / 60 / 90</td><td>Résultat mesurable attendu</td></tr>
            <tr><td>Action prioritaire 3</td><td>À désigner</td><td>Jour 30 / 60 / 90</td><td>Résultat mesurable attendu</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>Le rythme de suivi —</strong> un point hebdomadaire court (10 à 15 minutes, uniquement sur l'avancement et les blocages) et une revue mensuelle plus complète pour ajuster le plan si nécessaire.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Construire son plan à 90 jours</h4>
          <ol>
            <li>Reprendre les 3 à 5 actions prioritaires issues du Module 2</li>
            <li>Pour chacune, définir un responsable, une échéance et un indicateur de succès mesurable</li>
            <li>Répartir les actions sur les 3 sprints de 30 jours et fixer la date du premier point de suivi hebdomadaire</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>La checklist stratégie d'entreprise</h3>
        <ul>
          <li><strong>Positionnement —</strong> proposition de valeur formulée en une phrase, compréhensible et différenciante</li>
          <li><strong>Priorisation —</strong> 3 à 5 actions retenues selon leur impact et leur effort, le reste mis en attente</li>
          <li><strong>Plan 90 jours —</strong> actions réparties en 3 sprints de 30 jours, avec responsable et échéance pour chacune</li>
          <li><strong>Pilotage —</strong> tableau de suivi tenu à jour, rythme hebdomadaire court + revue mensuelle complète</li>
          <li><strong>Prochaine étape —</strong> lancer le sprint 1 et fixer dès maintenant la date de la première revue à J+30</li>
        </ul>
      </div>
    `
  },

  "Posture de dirigeant": {
    titre: "Posture de dirigeant",
    duree: "Sur-mesure", public: "Managers et gérants", prerequis: "Aucun",
    modules: ["Communication claire en interne", "Prise de décision sous pression", "Délégation et suivi d'équipe"],
    apercu: "Communiquer avec clarté pour éviter les malentendus qui coûtent cher, garder un cadre de décision fiable sous pression, puis déléguer une mission avec un cadre clair et un suivi qui responsabilise, sans microgérer…",
    pdfUrl: "posture-dirigeant.pdf",
    contenuComplet: `
      <p class="lede-cours">Trois modules pour développer sa posture de dirigeant : communiquer avec clarté pour faire comprendre vite et éviter les malentendus qui coûtent cher, garder un cadre de décision fiable même sous pression ou avec une information incomplète, puis confier une mission avec un cadre clair et la suivre sans microgérer.</p>

      <div class="module-block">
        <span class="module-tag">Objectifs</span>
        <h3>Objectifs de la formation</h3>
        <p>À l'issue de cette formation, chaque dirigeant sera capable de :</p>
        <ul>
          <li><strong>Communiquer avec clarté —</strong> transmettre une information utile, sans ambiguïté, à toute l'équipe</li>
          <li><strong>Décider sous pression —</strong> garder un cadre de décision fiable même dans l'urgence ou l'incertitude</li>
          <li><strong>Déléguer et suivre —</strong> confier une mission avec un cadre clair et un suivi qui responsabilise</li>
        </ul>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Communication claire en interne</h3>
        <h4>Pourquoi la clarté est un levier de pouvoir</h4>
        <p>Un message flou coûte du temps, de la confiance et de l'énergie à toute l'équipe. Le dirigeant n'est pas jugé sur la quantité d'informations transmises, mais sur la vitesse à laquelle son équipe comprend et agit.</p>
        <p>La posture attendue : dire les choses une fois, clairement, et vérifier la compréhension plutôt que la supposer. En pratique, cela change la manière de préparer chaque annonce, chaque brief et chaque retour à l'équipe.</p>
        <div class="callout">
          <strong>La compréhension avant la vitesse —</strong> une idée principale par message ; le contexte avant l'instruction ; faire reformuler plutôt que de relire ; le même canal pour le même type d'information.
        </div>

        <h4>4 leviers pour une communication claire</h4>
        <ul>
          <li><strong>Aller à l'essentiel —</strong> annoncer la conclusion d'abord, puis les détails si nécessaire</li>
          <li><strong>Structurer le message —</strong> contexte → décision → action attendue → échéance</li>
          <li><strong>Vérifier la compréhension —</strong> demander de reformuler dans ses propres mots, sans jugement</li>
          <li><strong>Choisir le bon canal —</strong> urgent = oral ou appel ; traçable = écrit ; sensible = en tête-à-tête</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Reformuler un message</h4>
          <ol>
            <li>Choisir un message important à transmettre à son équipe</li>
            <li>Le restructurer selon contexte → décision → action attendue → échéance</li>
            <li>Choisir le canal le plus adapté selon son degré d'urgence et de sensibilité</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Prise de décision sous pression</h3>
        <h4>Un cadre de décision en 4 étapes</h4>
        <p>À utiliser dès qu'une décision doit être prise rapidement, avec peu d'informations :</p>
        <ol>
          <li><strong>Cadrer —</strong> quel est le vrai problème ? quelle échéance réelle ?</li>
          <li><strong>Clarifier —</strong> quelles infos sont disponibles maintenant, lesquelles manquent ?</li>
          <li><strong>Choisir —</strong> retenir l'option réversible et suffisamment bonne, pas la parfaite</li>
          <li><strong>Communiquer —</strong> annoncer la décision, le raisonnement et le point de révision</li>
        </ol>

        <h4>Les pièges à éviter sous pression</h4>
        <ul>
          <li><strong>Chercher l'information parfaite —</strong> retarder une décision réversible en attendant une certitude qui n'arrivera pas</li>
          <li><strong>Décider seul par réflexe —</strong> écarter les avis des personnes de terrain qui ont l'information la plus fraîche</li>
          <li><strong>Confondre urgence et importance —</strong> réagir au bruit du moment au lieu de traiter ce qui a le plus d'impact</li>
          <li><strong>Ne jamais revenir sur une décision —</strong> s'entêter par fierté alors qu'un point de révision était prévu</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Appliquer le cadre en 4 étapes</h4>
          <ol>
            <li>Identifier une décision en attente, réelle ou récente</li>
            <li>La dérouler dans les 4 étapes : cadrer, clarifier, choisir, communiquer</li>
            <li>Repérer lequel des quatre pièges menaçait le plus cette décision</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Délégation et suivi d'équipe</h3>
        <h4>La matrice de délégation</h4>
        <p>Croiser l'importance de la mission et le niveau d'autonomie de la personne :</p>
        <table class="table-cours">
          <thead><tr><th>Situation</th><th>Posture à adopter</th></tr></thead>
          <tbody>
            <tr><td>Mission cadrée + équipe autonome</td><td>Déléguer entièrement : fixer l'objectif, laisser la méthode</td></tr>
            <tr><td>Mission complexe + équipe autonome</td><td>Déléguer avec points d'étape : jalons courts, décision finale confiée</td></tr>
            <tr><td>Mission simple + équipe en montée en compétence</td><td>Déléguer en accompagnant : cadrer, laisser essayer</td></tr>
            <tr><td>Mission critique + équipe peu expérimentée</td><td>Garder la main de près : binôme et validation à chaque étape</td></tr>
          </tbody>
        </table>

        <h4>Suivre sans microgérer : 3 rituels clés</h4>
        <ul>
          <li><strong>Le point court hebdomadaire —</strong> 15 minutes pour suivre l'avancement, lever les blocages, ajuster les priorités, pas pour tout recontrôler</li>
          <li><strong>Le jalon de mi-mission —</strong> une vérification prévue à l'avance sur les livrables clés, pas une surprise ni un contrôle permanent</li>
          <li><strong>Le retour après action —</strong> ce qui a fonctionné, ce qui peut s'améliorer, pour que la personne gagne en autonomie la fois suivante</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Positionner une délégation</h4>
          <ol>
            <li>Repérer une mission à déléguer dans son équipe</li>
            <li>La positionner sur la matrice de délégation selon l'importance de la mission et l'autonomie de la personne</li>
            <li>Choisir le rituel de suivi adapté et caler sa première occurrence</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>La posture de dirigeant tient en 3 piliers</h3>
        <ul>
          <li><strong>Clarté —</strong> un message compris du premier coup vaut mieux que dix messages relancés</li>
          <li><strong>Discernement —</strong> décider vite avec un cadre solide, plutôt que parfaitement avec du retard</li>
          <li><strong>Confiance déléguée —</strong> confier une mission avec un cadre clair, et suivre sans microgérer</li>
        </ul>
        <div class="callout">
          <strong>Plan d'action —</strong> choisir un message important et le reformuler (contexte → décision → action → échéance) ; identifier une décision en attente et lui appliquer le cadre en 4 étapes ; repérer une mission à déléguer et la positionner sur la matrice de délégation ; caler le premier point court hebdomadaire avec l'équipe.
        </div>
      </div>
    `
  },

  "Community Manager": {
    titre: "Community Manager",
    duree: "Sur-mesure", public: "Entrepreneurs, chargés de communication, créateurs de contenu", prerequis: "Aisance informatique de base",
    modules: ["Les fondamentaux du Community Management", "Stratégie de contenu et ligne éditoriale", "Planification éditoriale", "Animation et gestion de communauté", "Analyse des statistiques et optimisation"],
    apercu: "Cinq modules pour construire une stratégie de contenu, rédiger une ligne éditoriale, planifier un calendrier multi-réseaux, animer et modérer une communauté, puis analyser ses statistiques pour ajuster sa stratégie…",
    pdfUrl: "formation-community-management.pdf",
    contenuComplet: `
      <p class="lede-cours">Cinq modules pour maîtriser le métier de Community Manager : comprendre le rôle et l'écosystème des plateformes, construire une stratégie de contenu et une ligne éditoriale, planifier un calendrier multi-réseaux réaliste, animer et modérer une communauté au quotidien, puis analyser les statistiques pour ajuster sa stratégie sur des preuves plutôt que sur des impressions.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Les fondamentaux du Community Management</h3>
        <h4>Le rôle du Community Manager</h4>
        <p>Le CM est le point de contact entre une marque et sa communauté : il crée du lien, diffuse le message et remonte la voix des utilisateurs en interne.</p>
        <ul>
          <li><strong>Créer —</strong> produire et publier du contenu adapté à chaque plateforme</li>
          <li><strong>Animer —</strong> engager la conversation, répondre, faire vivre la communauté</li>
          <li><strong>Veiller —</strong> surveiller la e-réputation et les tendances du secteur</li>
          <li><strong>Modérer —</strong> filtrer les commentaires et gérer les situations sensibles</li>
          <li><strong>Mesurer —</strong> suivre les indicateurs de performance et ajuster</li>
          <li><strong>Coordonner —</strong> faire le lien avec marketing, service client et direction</li>
        </ul>

        <h4>Panorama des plateformes et de leurs codes</h4>
        <table class="table-cours">
          <thead><tr><th>Plateforme</th><th>Usage dominant</th><th>Formats clés</th></tr></thead>
          <tbody>
            <tr><td>Instagram</td><td>Visuel, esthétique, storytelling</td><td>Reels, carrousels, stories</td></tr>
            <tr><td>Facebook</td><td>Communauté large, format familial</td><td>Vidéos, événements, groupes</td></tr>
            <tr><td>LinkedIn</td><td>Expertise, B2B, crédibilité</td><td>Articles, posts texte, carrousels PDF</td></tr>
            <tr><td>TikTok</td><td>Divertissement, spontanéité, tendances</td><td>Vidéos courtes, sons tendance</td></tr>
            <tr><td>X (Twitter)</td><td>Actualité, réactivité, débat</td><td>Threads, réponses en temps réel</td></tr>
          </tbody>
        </table>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Audit de présence sociale</h4>
          <p>Choisir une marque (la vôtre ou un cas d'étude) et analyser sa présence sur 3 réseaux sociaux différents.</p>
          <ol>
            <li>La bio et l'identité visuelle sont-elles cohérentes ?</li>
            <li>La fréquence de publication est-elle régulière ?</li>
            <li>Le ton employé correspond-il à la cible ?</li>
            <li>L'engagement (likes, commentaires) est-il satisfaisant ?</li>
          </ol>
          <p><strong>Livrable attendu —</strong> un tableau comparatif (1 ligne par réseau) avec points forts, points faibles, et 2 recommandations d'amélioration par plateforme.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Stratégie de contenu et ligne éditoriale</h3>
        <h4>Définir des objectifs SMART et ses personas</h4>
        <ul>
          <li><strong>Objectifs SMART —</strong> Spécifique, Mesurable, Atteignable, Réaliste, Temporel</li>
          <li><strong>Profil —</strong> âge, situation, centres d'intérêt du persona</li>
          <li><strong>Besoins —</strong> ce que la personne recherche</li>
          <li><strong>Freins —</strong> ce qui l'empêche de passer à l'action</li>
          <li><strong>Réseaux utilisés —</strong> où la trouver, à quel moment</li>
          <li><strong>Ton attendu —</strong> formel, complice, expert, inspirant...</li>
        </ul>

        <h4>Construire sa ligne éditoriale</h4>
        <p>La ligne éditoriale répartit vos contenus en grandes familles récurrentes (« piliers ») pour équilibrer votre communication.</p>
        <table class="table-cours">
          <thead><tr><th>Pilier</th><th>Part</th><th>Contenu</th></tr></thead>
          <tbody>
            <tr><td>Inspirer</td><td>40%</td><td>Valeurs, coulisses, storytelling de marque</td></tr>
            <tr><td>Informer</td><td>25%</td><td>Actualités, expertise, conseils utiles</td></tr>
            <tr><td>Engager</td><td>20%</td><td>Questions, sondages, contenus interactifs</td></tr>
            <tr><td>Convertir</td><td>15%</td><td>Offres, produits, appels à l'action</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>Astuce —</strong> adaptez ces proportions à votre secteur : une marque B2B renforcera « Informer », une marque lifestyle renforcera « Inspirer ».
        </div>

        <h4>La charte éditoriale : les éléments clés</h4>
        <ul>
          <li><strong>Ton de voix —</strong> 3 adjectifs qui décrivent la personnalité de la marque à l'écrit</li>
          <li><strong>Vocabulaire —</strong> mots à privilégier, mots et expressions à bannir</li>
          <li><strong>Règles typographiques —</strong> emojis, majuscules, tutoiement/vouvoiement, hashtags</li>
          <li><strong>Identité visuelle —</strong> palette de couleurs, polices, gabarits de visuels</li>
          <li><strong>Do's &amp; Don'ts —</strong> exemples concrets de publications conformes et non conformes</li>
          <li><strong>Validation —</strong> qui relit et valide avant publication, délais associés</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Définir ses piliers de contenu</h4>
          <p>En binôme, définir 3 à 4 piliers de contenu pour une marque de votre choix, avec une répartition en pourcentage et 3 exemples de sujets par pilier (ex. pilier « Coulisses » 30% → portrait d'équipe, journée type, making-of produit), puis rédiger 3 phrases de ton de voix (« Nous sommes... », « Nous ne sommes jamais... »).</p>
          <p><strong>Livrable attendu —</strong> une fiche « ligne éditoriale » d'une page : piliers, répartition, ton de voix, 3 exemples de sujets par pilier.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Planification éditoriale</h3>
        <h4>Le calendrier éditorial</h4>
        <p>Un outil central qui planifie qui publie quoi, où, quand et pourquoi. Colonnes indispensables :</p>
        <ul>
          <li>Date et heure de publication</li>
          <li>Réseau social ciblé</li>
          <li>Pilier éditorial associé</li>
          <li>Format (visuel, vidéo, texte)</li>
          <li>Visuel / copywriting</li>
          <li>Statut de validation</li>
        </ul>
        <table class="table-cours">
          <thead><tr><th>Date</th><th>Réseau</th><th>Pilier</th><th>Format</th><th>Statut</th></tr></thead>
          <tbody>
            <tr><td>Lun. 03/03</td><td>Instagram</td><td>Inspirer</td><td>Reel</td><td>Publié</td></tr>
            <tr><td>Mer. 05/03</td><td>LinkedIn</td><td>Informer</td><td>Article</td><td>Publié</td></tr>
            <tr><td>Jeu. 06/03</td><td>TikTok</td><td>Engager</td><td>Vidéo courte</td><td>Planifié</td></tr>
            <tr><td>Ven. 07/03</td><td>Facebook</td><td>Convertir</td><td>Carrousel</td><td>Brouillon</td></tr>
          </tbody>
        </table>

        <h4>Fréquence de publication recommandée</h4>
        <ul>
          <li>Mieux vaut la régularité qu'une forte fréquence ponctuelle</li>
          <li>Adapter les horaires aux pics de connexion de l'audience</li>
          <li>Prévoir 20% de contenus réactifs (actualité, tendances)</li>
          <li>Regrouper la production en batch une fois par semaine</li>
          <li>Garder une réserve de contenus « evergreen »</li>
        </ul>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Construire un calendrier éditorial</h4>
          <p>À partir des piliers de contenu définis au module précédent, construire un calendrier éditorial pour 2 semaines sur 2 réseaux sociaux. Chaque publication doit être reliée à un pilier et respecter la fréquence recommandée pour le réseau choisi.</p>
          <p><strong>Livrable attendu —</strong> un tableau de 10 à 14 lignes (date, réseau, pilier, format, idée de contenu) prêt à être partagé à un client ou une équipe.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 4</span>
        <h3>Animation et gestion de communauté</h3>
        <h4>Engager sa communauté</h4>
        <ul>
          <li><strong>Questions ouvertes —</strong> inviter la communauté à s'exprimer en légende ou en story</li>
          <li><strong>Sondages &amp; quiz —</strong> utiliser les stickers interactifs pour recueillir un avis rapide</li>
          <li><strong>User-generated content —</strong> repartager les contenus créés par les abonnés</li>
          <li><strong>Réponses personnalisées —</strong> répondre aux commentaires avec le prénom, en 24h max</li>
          <li><strong>Lives &amp; sessions Q&amp;A —</strong> créer des rendez-vous réguliers en direct</li>
          <li><strong>Jeux-concours —</strong> stimuler la participation avec des règles simples et claires</li>
        </ul>

        <h4>Modération : le protocole en 4 étapes</h4>
        <ol>
          <li><strong>Écouter —</strong> lire le message sans réagir à chaud, comprendre l'intention</li>
          <li><strong>Qualifier —</strong> trolling, client mécontent, question légitime, spam ?</li>
          <li><strong>Répondre —</strong> ton posé, empathique, en public si possible</li>
          <li><strong>Escalader —</strong> basculer en message privé si le sujet est sensible</li>
        </ol>
        <div class="callout">
          <strong>Signaux d'alerte à ne jamais ignorer —</strong> multiplication soudaine de commentaires négatifs, mention par un compte à forte audience, sujet repris par des médias ou influenceurs, accusation grave (produit défectueux, discrimination...).
        </div>

        <h4>Bonnes pratiques de réponse</h4>
        <table class="table-cours">
          <thead><tr><th>À faire</th><th>À éviter</th></tr></thead>
          <tbody>
            <tr><td>Répondre rapidement (idéalement sous 24h)</td><td>Supprimer un commentaire négatif légitime</td></tr>
            <tr><td>Remercier avant de traiter une critique</td><td>Répondre sous le coup de la colère</td></tr>
            <tr><td>Personnaliser la réponse (prénom, contexte)</td><td>Copier-coller une réponse type impersonnelle</td></tr>
            <tr><td>Reconnaître l'erreur si elle est avérée</td><td>Ignorer un message pendant plusieurs jours</td></tr>
            <tr><td>Proposer une solution concrète et un contact dédié</td><td>Entrer dans un débat public prolongé</td></tr>
            <tr><td>Garder un ton humain, jamais robotique</td><td>Promettre ce que l'entreprise ne peut pas tenir</td></tr>
          </tbody>
        </table>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Simulation de modération</h4>
          <p>Par groupe de 3, rédiger une réponse à chacun de ces 3 commentaires : un client mécontent, un troll, une question produit légitime, en appliquant le protocole en 4 étapes (Écouter → Qualifier → Répondre → Escalader) pour chaque cas.</p>
          <p><strong>Livrable attendu —</strong> 3 réponses rédigées et justifiées, puis restitution orale de 2 minutes par groupe devant les autres participants.</p>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 5</span>
        <h3>Analyse des statistiques et optimisation</h3>
        <h4>Les KPIs essentiels par objectif</h4>
        <ul>
          <li><strong>Notoriété —</strong> portée, impressions, croissance d'abonnés</li>
          <li><strong>Engagement —</strong> taux d'engagement, commentaires, partages</li>
          <li><strong>Trafic —</strong> clics sur liens, visites générées vers le site</li>
          <li><strong>Conversion —</strong> leads, ventes, code promo utilisé</li>
          <li><strong>Satisfaction —</strong> temps de réponse, sentiment des commentaires</li>
        </ul>
        <div class="callout">
          <strong>Formule à retenir —</strong> taux d'engagement = (likes + commentaires + partages) ÷ portée × 100. Ne suivez que les KPIs reliés à un objectif business réel — trop d'indicateurs dilue l'analyse.
        </div>

        <h4>Construire son reporting mensuel</h4>
        <ol>
          <li>Résumé exécutif (3 lignes)</li>
          <li>Chiffres clés vs mois précédent</li>
          <li>Top 3 des publications</li>
          <li>Analyse des points bas</li>
          <li>Recommandations pour le mois suivant</li>
        </ol>
        <p>Fréquence recommandée : reporting hebdomadaire léger (indicateurs) + reporting mensuel complet (analyse et recommandations).</p>

        <h4>La boucle d'optimisation : test &amp; learn</h4>
        <ul>
          <li><strong>Analyser —</strong> identifier ce qui performe (formats, horaires, sujets)</li>
          <li><strong>Formuler une hypothèse —</strong> « Si je publie plus de vidéos courtes, l'engagement augmente »</li>
          <li><strong>Tester —</strong> appliquer le changement sur une période limitée (2-3 semaines)</li>
          <li><strong>Ajuster —</strong> généraliser si concluant, ou revenir en arrière si non</li>
        </ul>
        <p>Ce cycle se répète en continu : chaque mois de publication nourrit l'analyse du mois suivant.</p>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Lire et interpréter des statistiques</h4>
          <p>À partir d'un jeu de données (portée, engagement, clics sur 4 semaines), identifier 2 tendances positives et 1 point d'alerte, puis formuler une hypothèse de test à mettre en place le mois suivant, en suivant la boucle test &amp; learn.</p>
          <p><strong>Livrable attendu —</strong> une slide de synthèse « constat → hypothèse → action » prête à être présentée en réunion.</p>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Synthèse</span>
        <h3>La checklist du Community Manager</h3>
        <ul>
          <li><strong>Stratégie —</strong> objectifs SMART, personas et piliers de contenu définis</li>
          <li><strong>Ligne éditoriale —</strong> charte rédigée : ton, vocabulaire, identité visuelle</li>
          <li><strong>Planification —</strong> calendrier éditorial tenu à jour sur toutes les plateformes</li>
          <li><strong>Animation —</strong> réponses sous 24h, protocole de modération appliqué</li>
          <li><strong>Analyse —</strong> KPIs suivis chaque semaine, reporting mensuel produit</li>
          <li><strong>Optimisation —</strong> au moins un test mené par mois sur la base des données</li>
        </ul>
      </div>
    `
  },

  "Excel — Niveau débutant": {
    titre: "Excel — Niveau débutant",
    duree: "Sur-mesure", public: "Grand public, première prise en main d'Excel", prerequis: "Aucun",
    modules: ["Chapitre 1 — Prendre en main votre fichier", "Chapitre 2 — Organiser et mettre en forme votre fichier", "Chapitre 3 — Analyser vos données"],
    apercu: "Une formation pas à pas pour découvrir Excel sans jargon : ouvrir et enregistrer son premier classeur, saisir et mettre en forme des données, créer ses premières formules, puis analyser ses chiffres avec les fonctions de base, les tableaux croisés dynamiques et les graphiques…",
    pdfUrl: "formation-excel-niveau-debutant.pdf",
    contenuComplet: `
      <p class="lede-cours">Une formation conçue pour un vrai débutant : aucune connaissance préalable n'est nécessaire. En trois chapitres progressifs, vous apprendrez à ouvrir, enregistrer et organiser un classeur Excel, à saisir et mettre en forme vos données, à écrire vos premières formules de calcul, puis à analyser vos chiffres grâce aux fonctions courantes, à la mise en forme conditionnelle, aux tableaux croisés dynamiques et aux graphiques.</p>

      <div class="module-block">
        <span class="module-tag">Chapitre 1</span>
        <h3>Prendre en main votre fichier</h3>
        <h4>Démarrer et découvrir Excel</h4>
        <p>Deux méthodes simples permettent d'ouvrir le logiciel :</p>
        <ul>
          <li><strong>Depuis le bureau Windows —</strong> double-cliquer sur l'icône Excel si elle est présente</li>
          <li><strong>Depuis le menu Démarrer —</strong> chercher « Excel » dans la liste des programmes ou dans la zone de recherche</li>
        </ul>
        <p>Une fois le logiciel ouvert, il est conseillé de partir d'un <strong>classeur vide</strong> plutôt que d'un modèle préformaté, afin de bien comprendre chaque étape.</p>

        <h4>Créer et enregistrer son premier fichier (« classeur »)</h4>
        <p>Un fichier Excel est appelé un <strong>classeur</strong>. Pour ne pas perdre son travail :</p>
        <ul>
          <li>Cliquer sur l'icône « Enregistrer » (ou <strong>Ctrl + S</strong>)</li>
          <li>Choisir l'emplacement du fichier (par exemple « Documents ») via « Parcourir »</li>
          <li>Donner un nom clair au fichier, plutôt que de garder « Classeur1 »</li>
          <li>Cliquer sur « Enregistrer »</li>
        </ul>
        <div class="callout">
          <strong>Réflexe à prendre —</strong> enregistrer régulièrement son travail (Ctrl + S) pour éviter de tout perdre en cas de coupure ou de fermeture accidentelle.
        </div>

        <h4>Comprendre l'environnement de travail</h4>
        <ul>
          <li><strong>La zone de nom —</strong> affiche la cellule actuellement sélectionnée (ex. A1)</li>
          <li><strong>La barre de formule —</strong> affiche le contenu réel de la cellule sélectionnée (texte, nombre ou formule)</li>
          <li><strong>Les rubans —</strong> regroupent tous les outils, classés par onglets (Accueil, Insertion, Formules, Données…)</li>
          <li><strong>Les en-têtes de colonnes</strong> (A, B, C…) et <strong>les numéros de ligne</strong> (1, 2, 3…) permettent de repérer chaque cellule</li>
          <li><strong>La cellule active —</strong> la case sélectionnée, entourée d'un cadre vert</li>
        </ul>
        <p>Une feuille de calcul contient 16 384 colonnes (de A à XFD) et 1 048 576 lignes. Une cellule est toujours désignée par sa colonne puis sa ligne (ex. A1).</p>

        <h4>Sélectionner, saisir et corriger des données</h4>
        <ul>
          <li><strong>Sélectionner une seule cellule —</strong> cliquer dessus</li>
          <li><strong>Sélectionner une plage adjacente —</strong> cliquer sur la première cellule puis glisser (ou Shift) jusqu'à la dernière</li>
          <li><strong>Sélectionner plusieurs cellules non côte à côte —</strong> maintenir Ctrl en cliquant sur chacune</li>
        </ul>
        <p>Pour corriger une erreur, pas besoin de tout effacer : cliquer sur la cellule et modifier son contenu dans la barre de formule, puis valider avec Entrée.</p>

        <h4>Recopier des données rapidement (la « poignée de recopie »)</h4>
        <p>Un petit carré vert en bas à droite de la cellule sélectionnée, la <strong>poignée de recopie</strong>, permet de dupliquer une information sans la retaper :</p>
        <ul>
          <li><strong>Recopie simple —</strong> cliquer-glisser reproduit le même contenu</li>
          <li><strong>Recopie incrémentée —</strong> en maintenant Ctrl (ou avec deux valeurs de départ), Excel ajoute un écart constant</li>
          <li><strong>Recopie automatique —</strong> Excel reconnaît des listes toutes prêtes (mois, jours de la semaine)</li>
        </ul>

        <h4>Créer des formules de calcul</h4>
        <p>Une formule commence toujours par le signe égal (=). Par exemple, pour multiplier une quantité (colonne C) par un tarif (colonne D) : <strong>=C3*D3</strong>.</p>
        <p>Lorsqu'on recopie une formule, les références se décalent automatiquement : c'est une <strong>référence relative</strong>. Pour qu'une référence ne bouge pas lors de la recopie (ex. un tarif unique valable pour tout le tableau), on la transforme en <strong>référence absolue</strong> avec la touche <strong>F4</strong> : elle s'affiche alors avec des symboles dollar, par exemple <strong>$D$2</strong>.</p>
        <div class="callout">
          <strong>Réflexe utile —</strong> si un résultat recopié semble faux (erreur #VALEUR! ou 0 inattendu), vérifier si une référence aurait dû être rendue absolue avec F4.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Créer et enregistrer son premier classeur</h4>
          <ol>
            <li>Ouvrir Excel et créer un classeur vide</li>
            <li>L'enregistrer sous un nom clair dans le dossier « Documents »</li>
            <li>Saisir un petit tableau (nom, quantité, tarif) et écrire une formule de chiffre d'affaires</li>
            <li>Recopier la formule avec la poignée de recopie et transformer le tarif en référence absolue avec F4</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Chapitre 2</span>
        <h3>Organiser et mettre en forme votre fichier</h3>
        <h4>Manipuler les lignes, les colonnes et les feuilles</h4>
        <p>Un clic droit sur l'en-tête d'une colonne ou d'une ligne ouvre un menu contextuel permettant de :</p>
        <ul>
          <li><strong>Insérer</strong> une nouvelle ligne ou colonne vide</li>
          <li><strong>Masquer</strong> une ligne ou une colonne sans supprimer les données</li>
          <li><strong>Afficher</strong> à nouveau une ligne ou colonne masquée</li>
          <li><strong>Ajuster la taille</strong> d'une colonne à son contenu en double-cliquant sur le trait de séparation</li>
          <li><strong>Grouper</strong> plusieurs colonnes ou lignes pour les replier ou déplier en un clic</li>
        </ul>

        <h4>Gérer les onglets (les feuilles du classeur)</h4>
        <p>Un classeur peut contenir plusieurs <strong>feuilles</strong>, visibles en bas de l'écran sous forme d'onglets, pour séparer par exemple les données de plusieurs mois ou équipes :</p>
        <ul>
          <li><strong>Créer</strong> un onglet : cliquer sur le « + » à droite du dernier onglet</li>
          <li><strong>Renommer</strong> : double-cliquer sur son nom</li>
          <li><strong>Supprimer</strong> : clic droit puis « Supprimer » (action définitive)</li>
          <li><strong>Déplacer, masquer, colorer ou dupliquer</strong> : via un clic droit sur son nom</li>
        </ul>

        <h4>Mettre en page pour une meilleure lisibilité</h4>
        <ul>
          <li><strong>Bordures —</strong> à privilégier sur le quadrillage (qui ne s'imprime jamais) pour garder un tableau lisible à l'impression</li>
          <li><strong>Figer les volets —</strong> onglet Affichage > Figer les volets > Figer la ligne supérieure, pour garder les titres de colonnes visibles en faisant défiler un long tableau</li>
          <li><strong>Renvoyer à la ligne —</strong> affiche tout le texte d'une cellule sur plusieurs lignes plutôt que de le laisser déborder</li>
          <li><strong>Imprimer —</strong> Fichier > Imprimer (ou Ctrl + P)</li>
        </ul>

        <h4>La mise en forme conditionnelle</h4>
        <p>Elle applique automatiquement une couleur ou une icône à une cellule selon son contenu, et s'ajuste toute seule si la donnée change — contrairement à une couleur appliquée manuellement.</p>
        <p>Pour l'appliquer : sélectionner les cellules concernées, puis onglet Accueil > Mise en forme conditionnelle, et choisir une règle (par exemple « Inférieur à… ») ou un jeu d'icônes.</p>

        <h4>Filtrer et trier un tableau</h4>
        <table class="table-cours">
          <thead><tr><th>Outil</th><th>Ce qu'il fait</th></tr></thead>
          <tbody>
            <tr><td>Le filtre</td><td>Masque temporairement les lignes qui ne correspondent pas à un critère choisi, sans jamais supprimer les données</td></tr>
            <tr><td>Le tri</td><td>Classe les lignes selon un ordre choisi (croissant, décroissant, alphabétique, chronologique…) sans en masquer aucune</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>À savoir —</strong> filtre et tri peuvent tout à fait être combinés sur plusieurs colonnes en même temps pour affiner l'affichage d'un grand tableau.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Organiser un tableau existant</h4>
          <ol>
            <li>Insérer une colonne et ajuster sa largeur au contenu</li>
            <li>Renommer une feuille et en créer une seconde</li>
            <li>Ajouter des bordures et figer la ligne d'en-tête</li>
            <li>Appliquer une mise en forme conditionnelle, puis filtrer et trier le tableau</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Chapitre 3</span>
        <h3>Analyser vos données</h3>
        <h4>Utiliser les fonctions de calcul</h4>
        <p>Une fonction est une formule toute prête fournie par Excel. Les plus utiles pour débuter :</p>
        <ul>
          <li><strong>SOMME —</strong> additionne un ensemble de cellules (icône Σ de l'onglet Accueil)</li>
          <li><strong>MOYENNE —</strong> calcule la moyenne d'un ensemble de cellules</li>
          <li><strong>SI —</strong> fonction conditionnelle en trois arguments : la condition à tester, le résultat si vraie, le résultat si fausse</li>
        </ul>
        <div class="callout">
          <strong>Exemple —</strong> pour verser une prime de 5 000 GNF si le chiffre d'affaires dépasse 500 000 GNF, et 0 sinon : <strong>=SI(D2&gt;500000; 5000; 0)</strong>. En cas de doute sur une fonction, la touche F1 ouvre l'aide contextuelle.
        </div>

        <h4>Contrôler la saisie avec la validation des données</h4>
        <p>Cette fonctionnalité (onglet Données > Validation des données) permet de définir à l'avance quel type de contenu peut être saisi dans une cellule, avec un message d'aide et un message d'erreur personnalisés, afin d'éviter les erreurs de saisie.</p>

        <h4>Synthétiser avec les tableaux croisés dynamiques (TCD)</h4>
        <p>Un TCD résume rapidement un grand tableau selon plusieurs critères, sans écrire de formule. Avant de le créer, il faut s'assurer que le tableau source ne contient ni ligne ni colonne vide. La création se fait via l'onglet Insertion > Tableau croisé dynamique, puis il suffit de glisser les colonnes dans les zones Filtres, Colonnes, Lignes et Valeurs.</p>
        <div class="callout">
          <strong>Point important pour un débutant —</strong> si les données sources changent, le TCD ne se met pas à jour tout seul : il faut cliquer sur « Actualiser » après chaque modification.
        </div>

        <h4>Créer des graphiques pour visualiser les données</h4>
        <p>Pour créer un graphique, sélectionner les données (titres de colonnes compris) puis onglet Insertion :</p>
        <ul>
          <li><strong>Histogramme —</strong> idéal pour comparer des valeurs entre elles</li>
          <li><strong>Courbe —</strong> adaptée pour montrer une évolution dans le temps</li>
          <li><strong>Secteurs (« camembert ») —</strong> utile pour visualiser des proportions</li>
          <li><strong>Nuage de points —</strong> pour observer une relation entre deux séries de valeurs</li>
        </ul>
        <p>Le graphique reste entièrement personnalisable ensuite : titre, titres d'axes, légende, affichage des valeurs, déplacement sur une autre feuille.</p>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique final</span>
          <h4>Construire une petite analyse de ventes</h4>
          <ol>
            <li>Créer un tableau de ventes (vendeur, quantité, tarif) avec une formule de chiffre d'affaires en référence absolue</li>
            <li>Ajouter une colonne « Prime » avec une fonction SI</li>
            <li>Créer un tableau croisé dynamique du chiffre d'affaires par vendeur</li>
            <li>Représenter les résultats avec un histogramme</li>
          </ol>
        </div>
      </div>
    `
  },

  "Word — Niveau débutant": {
    titre: "Word — Niveau débutant",
    duree: "Sur-mesure", public: "Grand public, première prise en main de Word", prerequis: "Aucun",
    modules: ["Module 1 — Découvrir Word et gérer ses documents", "Module 2 — Mettre en forme le texte", "Module 3 — Mettre en page et illustrer", "Module 4 — Structurer, vérifier et exporter", "Exercice final récapitulatif"],
    apercu: "Un guide pratique, détaillé et illustré pour apprendre Word de A à Z : créer et enregistrer un document, saisir et mettre en forme du texte, insérer images et tableaux, structurer avec des styles, corriger l'orthographe, puis imprimer ou exporter en PDF…",
    pdfUrl: "formation-word-niveau-debutant.pdf",
    contenuComplet: `
      <p class="lede-cours">Un guide pratique, détaillé et illustré pour apprendre à créer, mettre en forme et présenter des documents professionnels avec Word — étape par étape, sans jargon, et sans aucun prérequis.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Découvrir Word et gérer ses documents</h3>
        <h4>Découvrir l'interface de Word</h4>
        <p>Quand vous ouvrez Word, l'écran est organisé en plusieurs zones fixes :</p>
        <ul>
          <li><strong>La barre de titre</strong> (tout en haut) — affiche le nom du document</li>
          <li><strong>Le ruban —</strong> contient des onglets (Accueil, Insertion, Mise en page…), chacun regroupant des outils par thème</li>
          <li><strong>La zone de travail —</strong> la feuille blanche où vous tapez votre texte</li>
          <li><strong>La barre d'état</strong> (tout en bas) — affiche le nombre de pages, de mots et la langue du document</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> l'onglet Accueil est celui que vous utiliserez le plus souvent : il contient la mise en forme du texte et des paragraphes.
        </div>

        <h4>Créer, enregistrer et ouvrir un document</h4>
        <p>Un document Word n'existe réellement sur l'ordinateur qu'une fois enregistré ; avant cela, il n'existe qu'en mémoire et disparaît si le logiciel se ferme brutalement.</p>
        <ul>
          <li><strong>Créer —</strong> « Document vierge » à l'ouverture de Word (ou Ctrl + N)</li>
          <li><strong>Enregistrer pour la première fois —</strong> Fichier > Enregistrer sous (ou Ctrl + S), choisir un emplacement, donner un nom clair, cliquer sur Enregistrer</li>
          <li><strong>Enregistrer les modifications suivantes —</strong> Ctrl + S régulièrement</li>
          <li><strong>Ouvrir un document existant —</strong> Fichier > Ouvrir (ou Ctrl + O)</li>
        </ul>
        <div class="callout">
          <strong>Réflexe le plus utile de la formation —</strong> appuyer sur Ctrl + S toutes les 5 minutes.
        </div>

        <h4>Saisir, sélectionner et modifier du texte</h4>
        <p>Avant de mettre en forme un mot ou une phrase, il faut d'abord la sélectionner : Word applique toujours ses réglages à la portion de texte sélectionnée (surlignée en bleu).</p>
        <ul>
          <li><strong>Un mot —</strong> double-cliquer dessus</li>
          <li><strong>Une phrase —</strong> maintenir Ctrl et cliquer dans la phrase</li>
          <li><strong>Un paragraphe —</strong> triple-cliquer dedans</li>
          <li><strong>Une portion libre —</strong> cliquer avant le premier mot, glisser jusqu'à la fin, relâcher</li>
          <li><strong>Tout le document —</strong> Ctrl + A</li>
        </ul>
        <p>Pour copier, couper et coller : sélectionner le texte, puis Ctrl + C / Ctrl + X / Ctrl + V. En cas d'erreur, Ctrl + Z annule la dernière action.</p>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Premiers pas dans Word</h4>
          <ol>
            <li>Créer un nouveau document et l'enregistrer sous un nom clair</li>
            <li>Écrire trois phrases courtes</li>
            <li>S'entraîner à sélectionner un mot, une phrase entière, puis tout le texte</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Mettre en forme le texte</h3>
        <h4>Mettre en forme les caractères</h4>
        <p>Ces réglages se trouvent dans le groupe Police de l'onglet Accueil :</p>
        <ul>
          <li><strong>Police et taille —</strong> sélectionner le texte, choisir une police (Calibri, Arial, Times New Roman…) et une taille (11-12 pour du texte courant, 16-28 pour un titre)</li>
          <li><strong>Gras, italique, souligné —</strong> Ctrl + G, Ctrl + I, Ctrl + U</li>
          <li><strong>Couleur du texte —</strong> flèche à côté du bouton A souligné de couleur, puis choisir dans la palette</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> évitez d'utiliser plus de deux polices différentes dans un même document — cela nuit à la lisibilité.
        </div>

        <h4>Mettre en forme les paragraphes</h4>
        <p>Contrairement à la mise en forme des caractères, elle s'applique à tout le paragraphe même sans sélection : il suffit que le curseur soit positionné dedans.</p>
        <ul>
          <li><strong>Aligner —</strong> Ctrl + L (gauche), Ctrl + E (centré), Ctrl + R (droite), Ctrl + J (justifié)</li>
          <li><strong>Interligne et espacement —</strong> icône d'interligne du groupe Paragraphe (1,0 pour un texte compact, 1,5 ou 2,0 pour aérer)</li>
          <li><strong>Retrait de première ligne —</strong> touche Tab en début de ligne</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> le justifié aligne le texte à gauche et à droite à la fois — c'est le réglage utilisé dans la plupart des rapports professionnels.
        </div>

        <h4>Créer des listes à puces et numérotées</h4>
        <ol>
          <li>Sélectionner les lignes concernées (ou placer le curseur où la liste doit commencer)</li>
          <li>Dans le groupe Paragraphe, cliquer sur l'icône Puces ou Numérotation</li>
          <li>Taper le premier élément, puis Entrée pour passer au suivant</li>
          <li>Pour arrêter la liste : deux fois Entrée, ou une fois Retour arrière</li>
        </ol>
        <p>Pour une sous-liste imbriquée : placer le curseur en début de ligne et appuyer sur Tab.</p>
        <div class="callout">
          <strong>Astuce —</strong> les puces pour des éléments sans ordre précis, la numérotation dès qu'un ordre ou des étapes comptent.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Mettre en forme un court texte</h4>
          <ol>
            <li>Taper un titre, le mettre en gras et en taille 20</li>
            <li>Rédiger un paragraphe en dessous en italique, aligné en justifié, avec un interligne de 1,5</li>
            <li>Créer une liste à puces de 3 éléments, puis une liste numérotée de 3 étapes</li>
          </ol>
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Mettre en page et illustrer</h3>
        <h4>Mettre en page le document</h4>
        <p>Ces réglages se trouvent dans l'onglet Mise en page :</p>
        <ul>
          <li><strong>Marges —</strong> Mise en page > Marges, modèle prédéfini ou marges personnalisées</li>
          <li><strong>Orientation et format —</strong> Mise en page > Orientation (Portrait/Paysage) et Taille (A4, Lettre US…)</li>
          <li><strong>Saut de page —</strong> Insertion > Saut de page (ou Ctrl + Entrée)</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> n'utilisez jamais plusieurs touches Entrée pour passer à la page suivante — un saut de page garde la mise en page stable si le texte est modifié plus tard.
        </div>

        <h4>Insérer et redimensionner une image</h4>
        <ul>
          <li>Placer le curseur à l'endroit voulu, puis Insertion > Images > Cet appareil</li>
          <li>Sélectionner le fichier puis Insérer</li>
          <li>Pour redimensionner : cliquer sur l'image puis glisser un carré de coin (jamais du milieu d'un côté, pour ne pas la déformer)</li>
          <li>Pour la disposition du texte autour : icône « Options de disposition » (Aligné sur le texte, Rapproché, Devant le texte…)</li>
        </ul>

        <h4>Insérer et mettre en forme un tableau</h4>
        <ul>
          <li>Placer le curseur, puis Insertion > Tableau, et glisser sur la grille pour choisir colonnes et lignes</li>
          <li>Tab pour passer d'une cellule à la suivante ; Tab dans la dernière cellule crée une nouvelle ligne</li>
          <li>Cliquer dans le tableau fait apparaître deux onglets : Création de tableau (styles prédéfinis) et Disposition (insérer/supprimer des lignes)</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> pour ajuster la largeur d'une colonne, placer le curseur sur la ligne de séparation jusqu'à voir une double flèche, puis glisser.
        </div>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique</span>
          <h4>Mettre en page un document illustré</h4>
          <ol>
            <li>Passer le document en Paysage puis le remettre en Portrait avec des marges « Étroites »</li>
            <li>Insérer une image, réduire sa taille de moitié et tester les dispositions de texte</li>
            <li>Insérer un tableau de 3 colonnes sur 3 lignes et le remplir avec une petite liste de contacts</li>
          </ol>
        </div>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Module 4</span>
        <h3>Structurer, vérifier et exporter</h3>
        <h4>En-têtes, pieds de page et numéros de page</h4>
        <ul>
          <li><strong>En-tête / pied de page —</strong> Insertion > En-tête (ou Pied de page), choisir un modèle ou taper son texte, puis « Fermer l'en-tête et le pied de page »</li>
          <li><strong>Numéros de page —</strong> Insertion > Numéro de page, choisir l'emplacement et l'alignement</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> pour ne pas afficher de numéro sur la première page (page de titre), cocher « Première page différente ».
        </div>

        <h4>Utiliser les styles pour structurer un document</h4>
        <p>Plutôt que de mettre un titre en gras et en grande taille manuellement, il est préférable d'utiliser les styles prédéfinis (onglet Accueil, groupe Styles) : Titre 1 pour un titre principal, Titre 2 pour un sous-titre — cela garantit une mise en forme cohérente dans tout le document.</p>
        <p>Pour générer une table des matières automatique : Références > Table des matières > modèle automatique. Word la construit à partir des titres mis en forme avec les styles Titre 1/Titre 2.</p>

        <h4>Vérifier l'orthographe et la grammaire</h4>
        <ul>
          <li><strong>Corriger un mot souligné —</strong> clic droit dessus (rouge = orthographe, bleu = grammaire) et choisir la correction proposée</li>
          <li><strong>Vérification complète —</strong> onglet Révision > Grammaire et orthographe (ou touche F7)</li>
        </ul>
        <div class="callout">
          <strong>Astuce —</strong> vérifier que la langue du document (en bas à gauche de l'écran) correspond bien à la langue d'écriture, sinon Word signale des fautes qui n'en sont pas.
        </div>

        <h4>Imprimer et exporter en PDF</h4>
        <ul>
          <li><strong>Imprimer —</strong> Fichier > Imprimer (ou Ctrl + P), vérifier l'aperçu, choisir l'imprimante</li>
          <li><strong>Exporter en PDF —</strong> Fichier > Exporter > Créer un document PDF/XPS, choisir l'emplacement puis Publier</li>
        </ul>
        <div class="callout">
          <strong>À savoir —</strong> un fichier PDF garantit que la mise en page reste identique quel que soit l'ordinateur qui l'ouvre — c'est le format à privilégier pour envoyer un document définitif.
        </div>

        <h4>Raccourcis clavier essentiels</h4>
        <table class="table-cours">
          <thead><tr><th>Raccourci</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + S</td><td>Enregistrer</td></tr>
            <tr><td>Ctrl + C / Ctrl + X / Ctrl + V</td><td>Copier / Couper / Coller</td></tr>
            <tr><td>Ctrl + Z / Ctrl + Y</td><td>Annuler / Rétablir</td></tr>
            <tr><td>Ctrl + G / Ctrl + I / Ctrl + U</td><td>Gras / Italique / Souligné</td></tr>
            <tr><td>Ctrl + A</td><td>Sélectionner tout</td></tr>
            <tr><td>Ctrl + L / Ctrl + E / Ctrl + R / Ctrl + J</td><td>Aligner à gauche / centrer / à droite / justifier</td></tr>
            <tr><td>Ctrl + P</td><td>Imprimer</td></tr>
            <tr><td>Ctrl + Entrée</td><td>Insérer un saut de page</td></tr>
            <tr><td>F7</td><td>Vérifier l'orthographe</td></tr>
          </tbody>
        </table>

        <div class="exercice">
          <span class="exercice-tag">Exercice pratique final récapitulatif</span>
          <h4>Rédiger « Ma première lettre professionnelle »</h4>
          <ol>
            <li>Créer un nouveau document et l'enregistrer sous le nom « Lettre_pratique »</li>
            <li>Ajouter un titre en style Titre 1</li>
            <li>Rédiger trois paragraphes (introduction, corps, conclusion) alignés en justifié, interligne 1,5</li>
            <li>Mettre un mot important en gras et un autre en italique</li>
            <li>Insérer une liste à puces de 3 points clés et un tableau de 2 colonnes sur 3 lignes</li>
            <li>Ajouter un pied de page avec son nom et un numéro de page</li>
            <li>Vérifier l'orthographe (F7) puis exporter le document final en PDF</li>
          </ol>
          <p><strong>Livrable attendu —</strong> un document PDF d'une page réunissant les neuf étapes ci-dessus.</p>
        </div>
      </div>
    `
  },

  "Initiation à l'informatique": {
    titre: "Initiation à l'informatique",
    duree: "Environ 2h30", public: "Grand public, aucune connaissance informatique préalable requise", prerequis: "Aucun",
    modules: ["Module 1 — Qu'est-ce qu'un ordinateur ?", "Module 2 — Allumer, éteindre, se repérer", "Module 3 — Maîtriser la souris et le clavier", "Module 4 — Gérer ses fichiers et dossiers", "Module 5 — Internet et le navigateur web", "Module 6 — La messagerie électronique (email)", "Module 7 — Rédiger un document (traitement de texte)", "Module 8 — Sécurité informatique de base", "Module 9 — Entretenir son ordinateur", "Module 10 — Glossaire des termes essentiels", "Module 11 — Tableau récapitulatif", "Module 12 — Bonnes pratiques générales"],
    apercu: "Une formation complète et progressive pour comprendre son ordinateur, naviguer sur Internet, gérer ses fichiers, écrire ses premiers documents et se protéger des dangers numériques — sans jargon inutile.",
    pdfUrl: "formation-initiation-informatique.pdf",
    contenuComplet: `
      <p class="lede-cours">Une formation complète et progressive pour comprendre son ordinateur, naviguer sur Internet, gérer ses fichiers, écrire ses premiers documents et se protéger des dangers numériques — sans jargon inutile. Chaque module se lit indépendamment : suivez l'ordre si vous débutez complètement, ou allez directement au sujet qui vous bloque aujourd'hui.</p>

      <div class="module-block">
        <span class="module-tag">Module 1</span>
        <h3>Qu'est-ce qu'un ordinateur ?</h3>
        <p>Un ordinateur est une machine composée de plusieurs éléments qui travaillent ensemble. Comprendre à quoi sert chaque pièce aide à mieux l'utiliser et à dialoguer avec un technicien si besoin.</p>
        <h4>Les éléments essentiels</h4>
        <ul>
          <li><strong>L'unité centrale —</strong> le « cerveau » de l'ordinateur (dans une tour, ou intégrée à l'écran/au clavier pour un ordinateur portable) ; elle contient le processeur, la mémoire et le disque dur</li>
          <li><strong>L'écran (moniteur) —</strong> affiche ce que l'ordinateur produit</li>
          <li><strong>Le clavier —</strong> permet d'écrire du texte et de donner des commandes</li>
          <li><strong>La souris (ou pavé tactile) —</strong> permet de pointer, cliquer et déplacer des éléments à l'écran</li>
          <li><strong>Le processeur (CPU) —</strong> effectue tous les calculs ; plus il est puissant, plus l'ordinateur est rapide</li>
          <li><strong>La mémoire vive (RAM) —</strong> stocke temporairement ce que l'ordinateur utilise à l'instant présent (elle s'efface à l'extinction)</li>
          <li><strong>Le disque dur ou SSD —</strong> stocke durablement vos fichiers, photos et logiciels, même une fois l'ordinateur éteint</li>
        </ul>
        <div class="callout">
          <strong>À retenir —</strong> la RAM, c'est la table de travail (tout disparaît une fois rangé) ; le disque dur, c'est l'armoire (tout reste après fermeture).
        </div>
        <h4>Ordinateur fixe, portable, tablette ou smartphone ?</h4>
        <p>Un ordinateur fixe est plus puissant et évolutif mais reste à un endroit ; un ordinateur portable offre la mobilité ; une tablette ou un smartphone simplifient certaines tâches (internet, email, photos) mais conviennent moins bien à la rédaction de longs documents.</p>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 2</span>
        <h3>Allumer, éteindre, se repérer</h3>
        <p>Bien démarrer et arrêter son ordinateur évite d'endommager les fichiers en cours d'utilisation.</p>
        <h4>Allumer l'ordinateur</h4>
        <ol>
          <li>Appuyez une seule fois sur le bouton d'alimentation (généralement marqué d'un symbole ⏻)</li>
          <li>Patientez pendant le démarrage du système (de quelques secondes à 1-2 minutes)</li>
          <li>Le bureau s'affiche : c'est votre espace de travail principal, avec des icônes et une barre en bas (ou en haut) de l'écran</li>
        </ol>
        <h4>Se repérer sur le bureau</h4>
        <ul>
          <li><strong>Icônes —</strong> petits dessins représentant des fichiers, dossiers ou logiciels ; un double-clic les ouvre</li>
          <li><strong>Barre des tâches (Windows) ou Dock (Mac) —</strong> liste les logiciels ouverts et les raccourcis fréquents</li>
          <li><strong>Menu Démarrer (Windows) ou icône Pomme/Launchpad (Mac) —</strong> donne accès à tous les logiciels installés</li>
        </ul>
        <h4>Éteindre correctement l'ordinateur</h4>
        <p>Ne coupez jamais l'alimentation directement. Utilisez toujours le menu du système : Démarrer → Éteindre sur Windows, ou Pomme → Éteindre sur Mac. Cela permet à l'ordinateur d'enregistrer les réglages et de fermer les logiciels proprement.</p>
        <div class="callout warning">
          <strong>Attention —</strong> éteindre en débranchant ou en maintenant le bouton d'alimentation peut corrompre des fichiers non enregistrés — à réserver aux cas de blocage total.
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 3</span>
        <h3>Maîtriser la souris et le clavier</h3>
        <h4>Les actions de base à la souris</h4>
        <ul>
          <li><strong>Clic gauche (simple) —</strong> sélectionne un élément</li>
          <li><strong>Double-clic gauche —</strong> ouvre un fichier, dossier ou logiciel</li>
          <li><strong>Clic droit —</strong> ouvre un menu d'options contextuelles (renommer, copier, supprimer…)</li>
          <li><strong>Glisser-déposer —</strong> maintenez le clic gauche enfoncé, déplacez la souris, puis relâchez pour déplacer un élément</li>
          <li><strong>Molette —</strong> fait défiler une page vers le haut ou le bas</li>
        </ul>
        <h4>Le clavier : zones importantes</h4>
        <ul>
          <li><strong>Touches alphanumériques —</strong> lettres et chiffres, comme sur une machine à écrire</li>
          <li><strong>Barre d'espace —</strong> insère un espace entre les mots</li>
          <li><strong>Touche Maj (Shift) —</strong> maintenue, écrit en majuscule ou accède au second symbole d'une touche</li>
          <li><strong>Touche Verr. Maj (Caps Lock) —</strong> verrouille les majuscules jusqu'à un nouvel appui</li>
          <li><strong>Touche Entrée (Enter) —</strong> valide une action ou passe à la ligne suivante</li>
          <li><strong>Touche Suppr / Retour arrière —</strong> efface le texte, respectivement après ou avant le curseur</li>
          <li><strong>Touches flèches —</strong> déplacent le curseur dans un texte ou une page</li>
        </ul>
        <h4>Raccourcis clavier indispensables</h4>
        <table class="table-cours">
          <thead><tr><th>Raccourci</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>Ctrl + C</td><td>Copier l'élément sélectionné</td></tr>
            <tr><td>Ctrl + X</td><td>Couper (déplacer) l'élément sélectionné</td></tr>
            <tr><td>Ctrl + V</td><td>Coller l'élément copié ou coupé</td></tr>
            <tr><td>Ctrl + Z</td><td>Annuler la dernière action</td></tr>
            <tr><td>Ctrl + A</td><td>Sélectionner tout le contenu</td></tr>
            <tr><td>Ctrl + S</td><td>Enregistrer le document en cours</td></tr>
            <tr><td>Ctrl + P</td><td>Imprimer le document</td></tr>
            <tr><td>Alt + Tab</td><td>Basculer entre les fenêtres ouvertes</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>Astuce —</strong> sur Mac, remplacez « Ctrl » par la touche « Cmd (⌘) » pour la plupart de ces raccourcis.
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 4</span>
        <h3>Gérer ses fichiers et dossiers</h3>
        <p>Un fichier contient une information (texte, photo, musique…). Un dossier permet de ranger plusieurs fichiers ensemble, comme une chemise cartonnée.</p>
        <h4>Créer et organiser</h4>
        <ol>
          <li>Ouvrez l'Explorateur de fichiers (Windows) ou le Finder (Mac)</li>
          <li>Rendez-vous à l'endroit voulu (ex. « Documents »)</li>
          <li>Clic droit → Nouveau → Dossier, puis donnez-lui un nom clair (ex. « Factures 2026 »)</li>
          <li>Faites glisser vos fichiers dedans, ou copiez-collez-les (Ctrl+C puis Ctrl+V)</li>
        </ol>
        <h4>Reconnaître les extensions courantes</h4>
        <table class="table-cours">
          <thead><tr><th>Extension</th><th>Type de fichier</th></tr></thead>
          <tbody>
            <tr><td>.docx / .doc</td><td>Document texte (Word)</td></tr>
            <tr><td>.pdf</td><td>Document figé, non modifiable directement</td></tr>
            <tr><td>.jpg / .png</td><td>Image ou photo</td></tr>
            <tr><td>.xlsx</td><td>Tableur (Excel)</td></tr>
            <tr><td>.mp3 / .mp4</td><td>Fichier audio / vidéo</td></tr>
            <tr><td>.zip</td><td>Dossier compressé (plusieurs fichiers regroupés)</td></tr>
          </tbody>
        </table>
        <h4>La corbeille : une sécurité, pas une suppression finale</h4>
        <p>Supprimer un fichier l'envoie dans la Corbeille — il reste récupérable tant qu'elle n'est pas vidée. Pour une suppression définitive, videz la corbeille depuis son icône sur le bureau.</p>
        <div class="callout">
          <strong>Astuce d'organisation —</strong> nommez vos fichiers de façon explicite et datée (ex. « Facture_EDF_2026-03 ») plutôt que « Document1 » — vous les retrouverez bien plus vite.
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 5</span>
        <h3>Internet et le navigateur web</h3>
        <p>Le navigateur (Chrome, Firefox, Edge, Safari…) est le logiciel qui permet d'accéder à Internet et de consulter des sites web.</p>
        <h4>Les éléments d'une page web</h4>
        <ul>
          <li><strong>Barre d'adresse —</strong> en haut, on y tape l'adresse d'un site (ex. www.exemple.fr) ou une recherche</li>
          <li><strong>Moteur de recherche (Google, Bing…) —</strong> permet de trouver de l'information en tapant des mots-clés</li>
          <li><strong>Onglets —</strong> permettent d'ouvrir plusieurs pages en même temps dans une seule fenêtre</li>
          <li><strong>Favoris / Signets —</strong> enregistrent un site pour le retrouver rapidement plus tard</li>
          <li><strong>Lien hypertexte —</strong> texte ou image souligné/coloré qui, en cliquant dessus, ouvre une autre page</li>
        </ul>
        <h4>Faire une recherche efficace</h4>
        <ol>
          <li>Ouvrez le navigateur et cliquez dans la barre de recherche</li>
          <li>Tapez des mots-clés précis plutôt qu'une phrase entière (ex. « horaires mairie Conakry » plutôt que « je voudrais savoir à quelle heure ouvre la mairie »)</li>
          <li>Appuyez sur Entrée, puis parcourez les premiers résultats</li>
        </ol>
        <h4>Télécharger un fichier</h4>
        <p>Cliquez sur le lien ou bouton de téléchargement : le fichier est enregistré automatiquement dans le dossier « Téléchargements ». Vous pouvez ensuite le déplacer où vous le souhaitez.</p>
        <div class="callout warning">
          <strong>Prudence —</strong> ne téléchargez que depuis des sites que vous connaissez ou jugez fiables — c'est la porte d'entrée la plus fréquente des virus (voir Module 8).
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 6</span>
        <h3>La messagerie électronique (email)</h3>
        <p>L'email permet d'envoyer et recevoir des messages écrits, avec ou sans documents joints, instantanément et gratuitement.</p>
        <h4>Créer une adresse email</h4>
        <ol>
          <li>Choisissez un service gratuit (Gmail, Outlook, Yahoo…)</li>
          <li>Rendez-vous sur son site et cliquez sur « Créer un compte »</li>
          <li>Renseignez vos informations et choisissez une adresse simple (ex. prenom.nom@gmail.com)</li>
          <li>Définissez un mot de passe solide (voir Module 8)</li>
        </ol>
        <h4>Envoyer un email</h4>
        <ol>
          <li>Cliquez sur « Nouveau message » ou « Écrire »</li>
          <li>Dans « À », saisissez l'adresse du destinataire</li>
          <li>Renseignez un « Objet » clair et résumant le message</li>
          <li>Rédigez votre texte dans le corps du message</li>
          <li>Pour joindre un document, cliquez sur l'icône trombone puis sélectionnez le fichier</li>
          <li>Cliquez sur « Envoyer »</li>
        </ol>
        <div class="callout">
          <strong>Bon à savoir —</strong> les mails indésirables ou suspects atterrissent souvent dans le dossier « Spam » ou « Courrier indésirable » — vérifiez-le si vous attendez un message qui n'arrive pas.
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 7</span>
        <h3>Rédiger un document (traitement de texte)</h3>
        <p>Un logiciel de traitement de texte (Word, Google Docs, LibreOffice Writer…) permet d'écrire, mettre en forme et imprimer des documents.</p>
        <h4>Les bases de la mise en forme</h4>
        <ul>
          <li><strong>Police et taille —</strong> choisissez la police (ex. Arial) et la taille du texte dans la barre d'outils</li>
          <li><strong>Gras, italique, souligné —</strong> sélectionnez le texte puis cliquez sur G, I ou S (ou Ctrl+G, Ctrl+I, Ctrl+U)</li>
          <li><strong>Alignement —</strong> gauche, centré, droit ou justifié</li>
          <li><strong>Listes à puces ou numérotées —</strong> pour structurer une énumération</li>
        </ul>
        <h4>Enregistrer son travail</h4>
        <ol>
          <li>Cliquez sur « Fichier » puis « Enregistrer sous » (ou Ctrl+S)</li>
          <li>Choisissez l'emplacement (ex. dossier « Documents »)</li>
          <li>Donnez un nom clair au fichier</li>
          <li>Validez : le document est désormais sauvegardé</li>
        </ol>
        <div class="callout">
          <strong>Réflexe essentiel —</strong> enregistrez régulièrement (Ctrl+S) pendant la rédaction — une coupure de courant ou un plantage peut faire perdre tout travail non enregistré.
        </div>
        <h4>Imprimer un document</h4>
        <p>Ctrl+P ouvre l'aperçu avant impression : vérifiez l'imprimante sélectionnée, le nombre de copies, puis cliquez sur « Imprimer ».</p>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 8</span>
        <h3>Sécurité informatique de base</h3>
        <p>Quelques réflexes simples suffisent à éviter la majorité des problèmes de sécurité.</p>
        <h4>Créer un mot de passe solide</h4>
        <ul>
          <li>Au moins 10-12 caractères, avec majuscules, minuscules, chiffres et symboles</li>
          <li>Évitez les informations personnelles évidentes (date de naissance, prénom)</li>
          <li>Un mot de passe différent pour chaque service important (email, banque…)</li>
        </ul>
        <h4>Repérer les tentatives d'arnaque (phishing)</h4>
        <ul>
          <li>Méfiez-vous des emails créant un sentiment d'urgence (« Votre compte sera fermé dans 24h »)</li>
          <li>Vérifiez l'adresse exacte de l'expéditeur, pas seulement le nom affiché</li>
          <li>Ne cliquez jamais sur un lien douteux ; passez plutôt directement par le site officiel en le tapant vous-même</li>
          <li>Aucune banque ou administration sérieuse ne demande un mot de passe par email</li>
        </ul>
        <h4>Protéger son ordinateur</h4>
        <ul>
          <li>Installez un antivirus et laissez-le à jour</li>
          <li>Effectuez les mises à jour du système dès qu'elles sont proposées — elles corrigent des failles de sécurité</li>
          <li>Ne branchez pas de clé USB inconnue sur votre ordinateur</li>
          <li>En cas de doute sur un email ou un site, ne cliquez sur rien et demandez conseil à une personne de confiance avant d'agir</li>
        </ul>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 9</span>
        <h3>Entretenir son ordinateur</h3>
        <h4>Gestes réguliers</h4>
        <ul>
          <li>Redémarrer l'ordinateur une fois par semaine environ, pour libérer la mémoire et appliquer les mises à jour</li>
          <li>Vider la corbeille et supprimer les fichiers inutiles régulièrement</li>
          <li>Désinstaller les logiciels que vous n'utilisez plus (Panneau de configuration → Programmes)</li>
          <li>Dépoussiérer physiquement les grilles d'aération de temps en temps pour éviter la surchauffe</li>
        </ul>
        <h4>Sauvegarder ses données</h4>
        <p>Copiez régulièrement vos fichiers importants (photos, documents) sur un support externe (clé USB, disque dur externe) ou un espace de stockage en ligne (Google Drive, OneDrive…). En cas de panne, vos données restent protégées.</p>
        <div class="callout">
          <strong>Règle simple —</strong> un fichier qui n'existe qu'à un seul endroit est un fichier en danger.
        </div>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 10</span>
        <h3>Glossaire des termes essentiels</h3>
        <ul>
          <li><strong>Bureau —</strong> écran principal affiché après le démarrage, contenant icônes et raccourcis</li>
          <li><strong>Cliquer —</strong> appuyer brièvement sur le bouton de la souris</li>
          <li><strong>Curseur —</strong> petite flèche ou trait clignotant indiquant la position active à l'écran</li>
          <li><strong>Fichier —</strong> élément numérique contenant une information (texte, image, son…)</li>
          <li><strong>Dossier —</strong> espace de rangement regroupant plusieurs fichiers</li>
          <li><strong>Logiciel / Application —</strong> programme installé permettant d'effectuer une tâche précise</li>
          <li><strong>Navigateur —</strong> logiciel utilisé pour accéder à Internet (Chrome, Firefox, Safari…)</li>
          <li><strong>Mot de passe —</strong> code secret protégeant l'accès à un compte ou un service</li>
          <li><strong>Wifi —</strong> connexion Internet sans fil</li>
          <li><strong>Téléchargement —</strong> action de récupérer un fichier depuis Internet vers son ordinateur</li>
          <li><strong>Mise à jour —</strong> amélioration d'un logiciel ou du système, souvent liée à la sécurité</li>
          <li><strong>Antivirus —</strong> logiciel protégeant l'ordinateur contre les programmes malveillants</li>
        </ul>
      </div>

      <div class="module-block">
        <span class="module-tag">Module 11</span>
        <h3>Tableau récapitulatif</h3>
        <table class="table-cours">
          <thead><tr><th>Module</th><th>Ce que vous savez faire ensuite</th></tr></thead>
          <tbody>
            <tr><td>1. L'ordinateur</td><td>Nommer les composants principaux et leur rôle</td></tr>
            <tr><td>2. Allumer/éteindre</td><td>Démarrer et arrêter sans risque, se repérer sur le bureau</td></tr>
            <tr><td>3. Souris et clavier</td><td>Cliquer, glisser-déposer, utiliser les raccourcis de base</td></tr>
            <tr><td>4. Fichiers et dossiers</td><td>Créer, ranger, renommer et retrouver ses documents</td></tr>
            <tr><td>5. Internet</td><td>Naviguer, rechercher et télécharger en toute confiance</td></tr>
            <tr><td>6. Email</td><td>Créer un compte, envoyer un message avec pièce jointe</td></tr>
            <tr><td>7. Traitement de texte</td><td>Rédiger, mettre en forme, enregistrer et imprimer</td></tr>
            <tr><td>8. Sécurité</td><td>Créer un mot de passe solide, repérer une arnaque</td></tr>
            <tr><td>9. Entretien</td><td>Garder un ordinateur rapide et ses données sauvegardées</td></tr>
          </tbody>
        </table>
      </div>

      <div class="module-block synthese">
        <span class="module-tag">Module 12</span>
        <h3>Bonnes pratiques générales</h3>
        <ol>
          <li>Prenez le temps de vous entraîner sur chaque geste avant de passer au suivant — la répétition ancre l'habitude</li>
          <li>N'ayez pas peur de cliquer : la plupart des actions sont réversibles (Ctrl+Z, corbeille)</li>
          <li>Notez les raccourcis que vous utilisez souvent pour les mémoriser plus vite</li>
          <li>Sauvegardez votre travail régulièrement, sans attendre la fin</li>
          <li>En cas de blocage, redémarrez l'ordinateur avant de chercher plus loin — cela résout une grande partie des soucis</li>
          <li>Demandez de l'aide sans hésiter : personne ne maîtrise l'informatique sans être passé par les mêmes débuts</li>
        </ol>
      </div>
    `
  },

};

// Utilitaire conservé pour les prochaines formations : à appeler une fois quand vous
// rédigez le contenuComplet d'une nouvelle formation, pour obtenir automatiquement le
// texte à coller dans son champ "apercu" (ça reste "automatique" même si la valeur est
// figée dans le fichier plutôt que recalculée à chaque chargement de page).
export function genererApercu(html, longueur = 200) {
  if (!html) return null;
  const texte = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (texte.length <= longueur) return texte;
  return texte.slice(0, longueur).replace(/\s+\S*$/, '').replace(/[.,;:—-]+$/, '') + '…';
}
