// Données partagées des formations — importé par catalogue-formations.html (aperçu public)
// et espace-formation.html (contenu complet, après vérification du code d'accès).
//
// Champs par formation :
//   duree, public, prerequis, modules  -> toujours présents (fiche formation)
//   contenuComplet                     -> HTML du cours complet (optionnel, affiché après accès)
//   pdfUrl                             -> lien vers le support PDF téléchargeable (optionnel)
//
// L'aperçu public affiché dans le catalogue est généré automatiquement à partir du
// début de `contenuComplet` (voir apercu.js) : pas besoin de le rédiger à la main.

export const FORMATIONS = {
  "Excel — Tableaux de bord": {
    duree: "Sur-mesure", public: "Assistants, gestionnaires, chargés de reporting", prerequis: "Bases d'Excel",
    modules: ["Fonctions et formules avancées", "Construction de tableaux de bord dynamiques", "Mise en forme et présentation aux dirigeants"]
  },
  "Word — Documents officiels": {
    duree: "Sur-mesure", public: "Secrétariats, agents administratifs", prerequis: "Aucun",
    modules: ["Styles, sommaires et numérotation automatique", "Mise en page de rapports et courriers officiels", "Publipostage et modèles réutilisables"]
  },
  "PowerPoint — Présentations d'impact": {
    duree: "Sur-mesure", public: "Cadres, chargés de communication", prerequis: "Bases bureautiques",
    modules: ["Structurer un message avant de designer", "Charte visuelle et gabarits de slides", "Techniques de prise de parole appuyée"]
  },
  "Initiation aux outils du web": {
    duree: "Sur-mesure", public: "Entrepreneurs, équipes commerciales", prerequis: "Aucun",
    modules: ["Panorama des outils indispensables", "Mise en place d'une présence en ligne cohérente", "Bonnes pratiques de sécurité numérique"]
  },
  "IA générative appliquée": {
    duree: "Sur-mesure", public: "Toute équipe souhaitant gagner du temps", prerequis: "Aisance informatique de base",
    modules: ["Comprendre les usages utiles vs les effets de mode", "Prompts pour la rédaction et le visuel", "Intégrer l'IA dans ses processus quotidiens", "Les meilleures IA et leur spécificité"],
    pdfUrl: "formations-pdf/formation-ia-generative-appliquee.pdf",
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
  "Gestion de projet en ligne": {
    duree: "Sur-mesure", public: "Chefs de projet, managers", prerequis: "Aucun",
    modules: ["Choisir son outil de gestion de projet", "Planifier, suivre, prioriser en équipe", "Automatiser les tâches répétitives"]
  },
  "Google Sheets": {
    duree: "Sur-mesure", public: "Assistants, gestionnaires, équipes collaboratives", prerequis: "Bases d'Excel utiles mais non obligatoires",
    modules: ["Prise en main et travail collaboratif en temps réel", "Formules, mise en forme et tableaux croisés", "Partage, permissions et automatisations simples"]
  },
  "Outlook & Google Meet": {
    duree: "Sur-mesure", public: "Assistants, cadres, équipes en télétravail", prerequis: "Aucun",
    modules: ["Gérer efficacement sa boîte mail et son agenda avec Outlook", "Organiser et animer des réunions avec Google Meet", "Bonnes pratiques de communication professionnelle à distance"]
  },
  "Adobe Photoshop — Retouche & création visuelle": {
    duree: "Sur-mesure", public: "Community managers, graphistes débutants, entrepreneurs", prerequis: "Aisance informatique de base",
    modules: ["Prise en main de l'interface et des calques", "Retouche photo et détourage", "Création de visuels pour le web et les réseaux sociaux"]
  },
  "Adobe Premiere Pro — Montage vidéo": {
    duree: "Sur-mesure", public: "Créateurs de contenu, community managers, entrepreneurs", prerequis: "Aisance informatique de base",
    modules: ["Prise en main du montage et de la timeline", "Découpe, transitions et habillage texte", "Export optimisé pour le web et les réseaux sociaux"]
  },
  "Gestion & pilotage": {
    duree: "Sur-mesure", public: "Gérants, dirigeants d'entreprise", prerequis: "Aucun",
    modules: ["Diagnostic de l'organisation actuelle", "Mise en place d'outils de pilotage simples", "Suivi mensuel des indicateurs clés"]
  },
  "Stratégie d'entreprise": {
    duree: "Sur-mesure", public: "Fondateurs, comités de direction", prerequis: "Aucun",
    modules: ["Clarification du positionnement", "Priorisation des actions à fort impact", "Plan d'action à 90 jours"]
  },
  "Posture de dirigeant": {
    duree: "Sur-mesure", public: "Managers et gérants", prerequis: "Aucun",
    modules: ["Communication claire en interne", "Prise de décision sous pression", "Délégation et suivi d'équipe"]
  },
  "Community Manager": {
    duree: "Sur-mesure", public: "Entrepreneurs, chargés de communication, créateurs de contenu", prerequis: "Aisance informatique de base",
    modules: ["Définir une stratégie de contenu et une ligne éditoriale", "Planifier et animer les réseaux sociaux", "Analyser les statistiques et ajuster sa communication"]
  }
};

// Extrait un aperçu texte à partir du début d'un contenu HTML (balises retirées).
export function genererApercu(html, longueur = 200) {
  if (!html) return null;
  const texte = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (texte.length <= longueur) return texte;
  const coupe = texte.slice(0, longueur).replace(/\s+\S*$/, '').replace(/[.,;:—-]+$/, '');
  return coupe + '…';
}
