/* ============================================================
   Les sites réalisés se gèrent désormais depuis l'espace admin
   (onglet « Portfolio Studio Design » : ajouter, modifier,
   supprimer, choisir ceux affichés sur l'accueil).
   Cette liste reste vide ; ce fichier ne sert plus qu'à dessiner
   les cartes d'aperçu des sites sans image.
   ============================================================ */
window.SKK_REALISATIONS = [];

/* Construit une carte cliquable (aperçu de navigateur + lien) */
window.skkCarteRealisation = function (item, avecDescription) {
  var host = item.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  var c = item.couleur || '#3E6BE0';
  var a = document.createElement('a');
  a.className = 'pf-item pf-link pf-preview pf-web';
  a.href = item.url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Voir le site ' + item.titre + ' en ligne (nouvel onglet)');
  a.innerHTML =
    '<div class="preview-frame">' +
    '<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="400" height="400" fill="#12213d"/><rect width="400" height="30" fill="#1B2A4A"/>' +
    '<circle cx="14" cy="15" r="4" fill="#E8631C"/><circle cx="28" cy="15" r="4" fill="#D98E3D"/><circle cx="42" cy="15" r="4" fill="#4C6B54"/>' +
    '<rect x="70" y="7" width="290" height="16" rx="8" fill="#25324F"/>' +
    '<text x="84" y="19" font-family="monospace" font-size="9" fill="#B9C2D6" class="pf-host"></text>' +
    '<rect x="0" y="30" width="400" height="130" fill="#1B2A4A"/>' +
    '<rect x="30" y="58" width="230" height="14" rx="3" fill="' + c + '"/>' +
    '<rect x="30" y="80" width="180" height="14" rx="3" fill="#3E6BE0"/>' +
    '<rect x="30" y="108" width="260" height="8" rx="3" fill="#5A6C93"/>' +
    '<rect x="30" y="122" width="200" height="8" rx="3" fill="#5A6C93"/>' +
    '<rect x="30" y="140" width="86" height="18" rx="9" fill="' + c + '"/>' +
    '<rect x="0" y="160" width="400" height="240" fill="#F6F1E7"/>' +
    '<rect x="30" y="188" width="80" height="80" rx="8" fill="#fff" stroke="#E4DCCB" stroke-width="1.5"/><circle cx="70" cy="215" r="12" fill="' + c + '"/>' +
    '<rect x="160" y="188" width="80" height="80" rx="8" fill="#fff" stroke="#E4DCCB" stroke-width="1.5"/><circle cx="200" cy="215" r="12" fill="#3E6BE0"/>' +
    '<rect x="290" y="188" width="80" height="80" rx="8" fill="#fff" stroke="#E4DCCB" stroke-width="1.5"/><circle cx="330" cy="215" r="12" fill="#4C6B54"/>' +
    '<rect x="30" y="290" width="340" height="60" rx="8" fill="#1B2A4A"/>' +
    '</svg>' +
    '<div class="preview-label"><span class="pf-titre"></span></div></div>';
  a.querySelector('.pf-host').textContent = host.length > 40 ? host.slice(0, 40) + '…' : host;
  var lab = a.querySelector('.pf-titre');
  lab.textContent = item.titre + ' ↗';
  return a;
};
