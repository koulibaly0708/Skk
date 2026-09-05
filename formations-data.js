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

  "Excel — Tableaux de bord": {
    titre: "Excel — Tableaux de bord",
    duree: "Sur-mesure", public: "Assistants, gestionnaires, chargés de reporting", prerequis: "Bases d'Excel",
    modules: ["Fonctions et formules avancées", "Construction de tableaux de bord dynamiques", "Mise en forme et présentation aux dirigeants"],
    apercu: "Fonctions avancées, tableaux de bord dynamiques et présentation de résultats aux dirigeants.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Word — Documents officiels": {
    titre: "Word — Documents officiels",
    duree: "Sur-mesure", public: "Secrétariats, agents administratifs", prerequis: "Aucun",
    modules: ["Styles, sommaires et numérotation automatique", "Mise en page de rapports et courriers officiels", "Publipostage et modèles réutilisables"],
    apercu: "Styles, sommaires automatiques, publipostage et modèles réutilisables pour vos documents officiels.",
    contenuComplet: null,
    pdfUrl: null
  },

  "PowerPoint — Présentations d'impact": {
    titre: "PowerPoint — Présentations d'impact",
    duree: "Sur-mesure", public: "Cadres, chargés de communication", prerequis: "Bases bureautiques",
    modules: ["Structurer un message avant de designer", "Charte visuelle et gabarits de slides", "Techniques de prise de parole appuyée"],
    apercu: "Structurer un message, charte visuelle et techniques de prise de parole pour des présentations marquantes.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Initiation aux outils du web": {
    titre: "Initiation aux outils du web",
    duree: "Sur-mesure", public: "Entrepreneurs, équipes commerciales", prerequis: "Aucun",
    modules: ["Panorama des outils indispensables", "Mise en place d'une présence en ligne cohérente", "Bonnes pratiques de sécurité numérique"],
    apercu: "Panorama des outils indispensables et bonnes pratiques de sécurité numérique.",
    contenuComplet: null,
    pdfUrl: null
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
    modules: ["Choisir son outil de gestion de projet", "Planifier, suivre, prioriser en équipe", "Automatiser les tâches répétitives"],
    apercu: "Choisir son outil, planifier en équipe et automatiser les tâches répétitives.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Google Sheets": {
    titre: "Google Sheets",
    duree: "Sur-mesure", public: "Assistants, gestionnaires, équipes collaboratives", prerequis: "Bases d'Excel utiles mais non obligatoires",
    modules: ["Prise en main et travail collaboratif en temps réel", "Formules, mise en forme et tableaux croisés", "Partage, permissions et automatisations simples"],
    apercu: "Travail collaboratif en temps réel, formules et tableaux croisés dynamiques.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Outlook & Google Meet": {
    titre: "Outlook & Google Meet",
    duree: "Sur-mesure", public: "Assistants, cadres, équipes en télétravail", prerequis: "Aucun",
    modules: ["Gérer efficacement sa boîte mail et son agenda avec Outlook", "Organiser et animer des réunions avec Google Meet", "Bonnes pratiques de communication professionnelle à distance"],
    apercu: "Gérer sa boîte mail, son agenda et animer des réunions à distance efficacement.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Adobe Photoshop — Retouche & création visuelle": {
    titre: "Adobe Photoshop — Retouche & création visuelle",
    duree: "Sur-mesure", public: "Community managers, graphistes débutants, entrepreneurs", prerequis: "Aisance informatique de base",
    modules: ["Prise en main de l'interface et des calques", "Retouche photo et détourage", "Création de visuels pour le web et les réseaux sociaux"],
    apercu: "Prise en main de l'interface, retouche photo, détourage et création de visuels pour le web.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Adobe Premiere Pro — Montage vidéo": {
    titre: "Adobe Premiere Pro — Montage vidéo",
    duree: "Sur-mesure", public: "Créateurs de contenu, community managers, entrepreneurs", prerequis: "Aisance informatique de base",
    modules: ["Prise en main du montage et de la timeline", "Découpe, transitions et habillage texte", "Export optimisé pour le web et les réseaux sociaux"],
    apercu: "Montage, transitions, habillage texte et export optimisé pour les réseaux sociaux.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Gestion & pilotage": {
    titre: "Gestion & pilotage",
    duree: "Sur-mesure", public: "Gérants, dirigeants d'entreprise", prerequis: "Aucun",
    modules: ["Diagnostic de l'organisation actuelle", "Mise en place d'outils de pilotage simples", "Suivi mensuel des indicateurs clés"],
    apercu: "Diagnostic de l'organisation, outils de pilotage simples et suivi mensuel des indicateurs clés.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Stratégie d'entreprise": {
    titre: "Stratégie d'entreprise",
    duree: "Sur-mesure", public: "Fondateurs, comités de direction", prerequis: "Aucun",
    modules: ["Clarification du positionnement", "Priorisation des actions à fort impact", "Plan d'action à 90 jours"],
    apercu: "Clarification du positionnement et plan d'action concret à 90 jours.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Posture de dirigeant": {
    titre: "Posture de dirigeant",
    duree: "Sur-mesure", public: "Managers et gérants", prerequis: "Aucun",
    modules: ["Communication claire en interne", "Prise de décision sous pression", "Délégation et suivi d'équipe"],
    apercu: "Communication interne, prise de décision sous pression et délégation efficace.",
    contenuComplet: null,
    pdfUrl: null
  },

  "Community Manager": {
    titre: "Community Manager",
    duree: "Sur-mesure", public: "Entrepreneurs, chargés de communication, créateurs de contenu", prerequis: "Aisance informatique de base",
    modules: ["Définir une stratégie de contenu et une ligne éditoriale", "Planifier et animer les réseaux sociaux", "Analyser les statistiques et ajuster sa communication"],
    apercu: "Stratégie de contenu, animation des réseaux sociaux et analyse des statistiques.",
    contenuComplet: null,
    pdfUrl: null
  }

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
