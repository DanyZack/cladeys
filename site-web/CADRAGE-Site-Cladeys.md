# Cadrage — site vitrine Cladéys (one-page)

> Document de travail, 25 octobre 2026. Phase 0 : avant toute génération.
> À annoter directement par Dany (réponses sous chaque question, ou en marge).

---

## 1. Ce que je sais déjà (pas besoin de le redire)

- **Société** : Cladéys, SAS à 2 associés (Dany : technique/delivery ; une associée : commerce), conseil sécurité Microsoft (Intune, Defender, Entra, M365, Purview) pour PME/ETI 10-300 users, Bordeaux puis France, au forfait.
- **Gamme** : matrice 3×3 Cladiag (comprendre) / Cladact (agir) / Cladvision (suivre) × Sécu M365 / Usage & licences / IA. Moteur « Claudit ». Seul prix public : Cladiag Sécu M365 4 000 € HT, 2 200 € HT lancement.
- **Récit** : le paradoxe des PME, les 3 tensions du dirigeant, les 4 piliers, le forfait comme transfert de risque, promesse honnête (jamais 100 %), indépendance éditeur. Devise « Aller vite et à l'essentiel ». Signature « Cladéys ne propose pas une offre spéciale PME… ».
- **Charte** : navy #263357 / #1C2B5E, or #CEAB70 / #E2C98B, crème #D8CDB8, ivoire #EEE7D2, bordeaux #8B1A2B, vert anglais #31654D, bleu roi #294293, violet royal #4B2E83, bronze #7A5C2E. Montserrat seule. Filets or, capitales espacées, italiques or, fleurs de lys ton sur ton, double cadre or, bandeau diagonal tricolore navy → bordeaux → or (signature), photos en duotone, icônes Microsoft officielles en couleur (seule exception).
- **Assets disponibles** : logos PNG/PSD (OneDrive `Cladeys/`), logo blanc-or + pictogrammes + motif fleur de lys + icônes MS + Montserrat TTF (`videos/cladeys-promo/assets/`), kit isométrique CSS (`assets/iso-kit.css`), `frame.md` (design system vidéo), favicon, vidéo promo ~92 s (voix placeholder, musique placeholder).
- **Site actuel** (`index.html`, avril 2026) : Cormorant + Raleway, sections Vision / Expertise / Offres « Conseil, Accompagnement, Régie », mentions Azure, Sentinel, Power Platform, chiffres non sourcés (« 50+ projets », « 24 h garanti »). **Il contredit le positionnement actuel** (régie, Power Platform, pas la matrice). À remplacer entièrement, pas à retoucher.
- **Règles dures** : stats sourcées (ANSSI, MDDR, CESIN, IBM, Groupama, Cybermalveillance), stat « 60 % ferment en 18 mois » interdite, ton honnête, IA = outil interne.
- **Environnement** : repo GitHub `DanyZack/cladeys` (un seul fichier commité), Node 24 / npm 11, pas de `gh` CLI, MCP connectés : Flora (génération image/vidéo), Canva (génération image, brand kit), GitHub, Claude Design (artboards), HyperFrames (vidéo).

---

## 2. Outils : ce qui sert à quoi (évaluation franche)

| Outil | Rôle pertinent | Limites |
|---|---|---|
| **Claude Design** (artboards) | Explorer 2-3 directions artistiques (hero + section offres) et valider la DA **avant** de coder. Mockups statiques, comparables côte à côte. | Ne produit pas le site. Pas d'animation. Tout est à ré-implémenter. |
| **Claude Code** | Produire le site réel (HTML/CSS/JS ou Astro), itérer section par section avec aperçu navigateur, perf, SEO, déploiement. | C'est l'outil de production, pas d'exploration visuelle. |
| **HyperFrames** | Pas un outil de site. Utile seulement pour **un fragment vidéo** (boucle hero muette 10-15 s, sting logo) exporté en MP4/WebM. | Une vidéo en hero coûte en poids et en CPU ; à n'utiliser que si on la veut vraiment. |
| **Flora / Canva (MCP)** | Générer les visuels (photos d'ambiance à passer en duotone, textures, ornements, illustrations 3D sobres). | Coût par génération (Flora en USD) ; risque de « look IA » si on laisse faire. À cadrer par des prompts stricts + post-traitement duotone en CSS. |
| **Stock photo** (Unsplash / Pexels, licence libre) | Photos d'architecture, pierre, Bordeaux, bureaux. Passées en duotone navy/sépia elles deviennent « nôtres ». | Moins unique qu'un shooting. |
| **Astro** (que Dany connaît via TuneInCloud) | Structure, composants, images optimisées, pages légales, SEO, build statique très léger. | Un build à maintenir (vs un seul fichier HTML). |
| **GSAP + ScrollTrigger (+ Lenis)** | Le standard des sites « agence » : révélations au scroll, sections épinglées, compteurs, parallaxe maîtrisé. ~60 ko. | À doser : trop d'effets = site lourd et « démo ». |
| Three.js / Spline (3D temps réel) | Effet « wahou » (arche 3D, scène iso). | Lourd (300 ko+), GPU, mobile fragile. Déconseillé pour un site vitrine « peu consommateur ». |

**Recommandation** : Claude Design pour trancher la DA sur 2-3 planches, puis Claude Code en Astro + GSAP, images générées via Flora/Canva ou stock puis duotonées en CSS, boucle vidéo hero **optionnelle** via HyperFrames, hébergement statique (Cloudflare Pages ou GitHub Pages), prise de RDV via Microsoft Bookings (on est chez Microsoft, c'est cohérent et gratuit).

---

## 3. Architecture de page proposée (à valider / réordonner)

1. **Hero** : accroche courte, sous-titre italique or, 2 CTA (« Prendre rendez-vous » / « Découvrir les offres »), fond navy fleur de lys + double cadre, motif animé discret.
2. **Le constat** : 3 ou 4 chiffres sourcés (ANSSI 2025, CESIN 2026, Groupama 2025) en compteurs. Ton factuel, pas anxiogène.
3. **Le paradoxe des PME** et les 3 tensions du dirigeant (« pas les moyens / pas le temps / trop opaque ») → la réponse Cladéys en face de chacune.
4. **La gamme** : la matrice 3×3 comme pièce centrale (axes Cladiag / Cladact / Cladvision, colonnes Sécu / Usage / IA), interactive : survol ou scroll épinglé qui éclaire une ligne puis une colonne.
5. **Zoom sur l'offre d'ancrage** Cladiag Sécu M365 : déroulé 2 semaines, livrables (score, matrice criticité × effort, Top 10), prix barré 4 000 → 2 200 € HT. Visuels tirés du vrai rapport (donut, matrice) = preuve de produit.
6. **Comment on travaille** : forfait = transfert de risque, aucun accès résiduel au tenant, référentiels CISA / CIS / ANSSI, indépendance éditeur, « propulsé par Claudit ».
7. **Pourquoi nous** : Dany (11 ans, 40+ clients, conférences, TuneInCloud), l'associée, certifications. Mur de logos éventuel.
8. **Ce qu'on promet / ce qu'on ne promettra jamais** (section « honnêteté », différenciante).
9. **Contact** : Bookings intégré ou lien, email, téléphone, LinkedIn, Bordeaux.
10. **Footer** : mentions légales, politique de confidentialité, SIREN, lien TuneInCloud.

---

## 4 bis. Réponses de Dany (25 octobre 2026) — décisions actées

**Conversion**
- CTA unique : prise de rendez-vous via **Microsoft Bookings** (lien à fournir par Dany) + email direct. Aucun téléchargement, aucune fiche, aucun formulaire complexe. Présentation + prise de contact, rien d'autre.
- Email, téléphone et lien Bookings affichés **en bas de page**.
- Audience : hébergement **Netlify** (comme TuneInCloud) → utiliser la mesure d'audience de l'hébergeur (Netlify Analytics, côté serveur, sans cookie ni bannière) ou l'outil déjà en place sur TuneInCloud, à aligner.

**Audience et message**
- Cible : **dirigeant**, langage business en priorité, termes techniques très répandus tolérés (MFA, Microsoft 365, Copilot…).
- Accroche hero : **« Voir clair, agir juste, viser loin. »** Volontairement sans référence aux PME ; la PME est le sous-texte, évoquée au plus dans un sous-titre.
- Chiffres sourcés : **3 chiffres principaux** tirés de l'IntroAVV (ANSSI / CESIN / Groupama), pas plus. Évolutifs.
- Section « ce qu'on ne promettra jamais » : **non**, pas sur le site.

**Contenu**
- Les **9 cases** de la matrice présentées de façon très synthétique : 3 axes × 3 sujets, « rapide, efficace, clé en main ».
- Après la matrice, une mention : pour tout projet personnalisé, d'autres accompagnements sur mesure existent, à définir ensemble. La valeur ajoutée reste la vitesse d'exécution des 9 offres.
- **Prix : aucun en v1** (acté le 25 oct.). Disponibilité : les 3 Cladiag et les 3 Cladact sont **disponibles**, les 3 Cladvision sont **« bientôt disponibles »**. « Propulsé par Claudit » : non mentionné (hypothèse Claude, non contredite).
- **Mentions légales : oui**, une ligne sobre en pied de page dès la v1 (acté le 25 oct.). Données à fournir par Dany : SIREN, siège social, directeur de publication (hébergeur = Netlify).
- **Contact** : Bookings `https://bookings.cloud.microsoft/book/RendezvousdinformationCladys@cladeys.fr/?ismsaljsauthenabled` · email `dpolonio@cladeys.fr`. Téléphone : à fournir.
- **Hero : deux variantes partielles à comparer** (A traits or / B photo duotone) avant de poursuivre le site complet.
- Équipe : **rien**. Ni nom, ni photo, ni nombre d'associés. On présente une **marque**. Seul lien externe : le site d'expertise **TuneInCloud**.
- Aucun logo client, aucun client cité. On peut citer des **chiffres d'expérience** (années, nombre de clients accompagnés, diversité de tailles et secteurs) sans nommer personne.
- Pas de certifications. **Français uniquement.** Pas de pages légales dans la v1 (décision de Dany ; note : les mentions légales restent une obligation LCEN pour un site d'entreprise, à réévaluer avant mise en ligne).

**Identité visuelle**
- Typographie : **libre**, Montserrat n'est pas imposé sur le web (réservé aux PPT). Rester dans le thème old money / royal. **Contrainte forte : lisibilité** — pas de polices trop fines ni de corps trop petits, le texte doit se lire clairement.
- Dominante **navy sombre**, animations fondues dans ce fond ; ce qui ressort : **or et ivoire**. La palette complète (bordeaux, vert anglais, violet royal) doit rester visible, même discrètement.
- Ornements : curseur sur **affirmé**.
- Imagerie : **architecture et pierre, style Versailles / haussmannien** (pas forcément Bordeaux), avec des touches d'isométrie héritées de la vidéo. Référence à la cybersécurité **discrète**, intégrée au décor : pas de cadenas, pas de visuels cyber vus partout.
- Sources : **génération IA ou stock libre**, qualité élevée, conçues pour le site. Aucune image fournie.
- Logo : nouvelle version importée le 25 octobre dans `site/brand/` (mark + full, dark + white, PNG ~1000 px) → à vectoriser en SVG.
- Références d'animation (charte sans rapport, seules les animations comptent) : sofihealth.com, flowninja.com, daddyyankee.com, mosaic.flabbergast.agency, jimo.ai/product/ai, potadot.com.my.

**Animation**
- Intensité : **affirmée, type Apple, voire spectaculaire**, toujours fondue dans le fond navy.
- Hero : **image animée pilotée par le scroll** (parallaxe / scroll-driven).
- Matrice 3×3 : au choix de Claude (ce qui s'intègre le mieux).
- Vidéo promo : **pas intégrée**.

**Technique**
- **Astro + Netlify**, comme TuneInCloud. Domaine **cladeis.fr** déjà acheté (vérification INPI faite ; dépôt de marque INPI à venir côté Dany).
- Pas de budget contraint pour images / domaine / hébergement.

**Méthode**
- Au choix de Claude (le plus propre et maintenable). Maquette Claude Design possible mais pas exigée : si assez d'éléments, aller directement au code.
- **Section par section, validation à chaque étape.** Pas de première version complète.

---

## 4. Questionnaire initial (conservé pour trace)

### A. Objectif et conversion
- A1. Action n°1 attendue du visiteur : prise de RDV (Bookings / Calendly), formulaire, email/téléphone ?
- A2. Action secondaire : télécharger la fiche Cladiag ? LinkedIn ? Rien ?
- A3. Mesure d'audience : Plausible / Matomo (sans bannière cookie) ou Google Analytics (bannière RGPD) ou rien ?

### B. Audience et message
- B1. Cible prioritaire : dirigeant (langage business) ou DSI/RSI (langage technique) ?
- B2. Accroche hero : « Aller vite et à l'essentiel » ? la signature PME ? « L'expertise grand compte, au forfait » ? autre ?
- B3. Chiffres sourcés en page d'accueil : oui (lesquels) ou non ?
- B4. Section « ce qu'on ne promettra jamais » : OK pour l'afficher publiquement ?

### C. Contenu
- C1. Niveau de détail des offres : 3 axes seulement, ou les 9 cases ?
- C2. Les offres non construites (Usage, IA, Cladvision) : affichées comme disponibles, « bientôt », ou masquées ?
- C3. Prix : afficher 4 000 → 2 200 € HT ? aucun prix ? « à partir de » ?
- C4. « Propulsé par Claudit » : mentionné ou non ?
- C5. Équipe : nom + photo de Dany ? nom + photo de l'associée ? Juste « deux associés » ?
- C6. Logos clients de carrière (Airbus, LVMH…) : autorisés ? Logos de clients Cladéys (AFORIS) ?
- C7. Certifications à afficher ?
- C8. Bilingue FR/EN ou FR seul ?
- C9. Pages légales : SIREN, siège, hébergeur, directeur de publication disponibles ?

### D. Identité visuelle
- D1. Typographie : Montserrat strict, ou Montserrat + serif classique en titres (Cormorant / Playfair) pour le côté royal ?
- D2. Dominante : navy sombre majoritaire (sections ivoire en respiration) ou l'inverse ?
- D3. Dosage des ornements (fleurs de lys, double cadre, volutes, bandeau tricolore) : discret, affirmé, ou maximal ?
- D4. Imagerie : photos duotone (architecture, pierre, Bordeaux, gens au travail), monde isométrique de la vidéo, abstrait (textures, lumière), ou mix ?
- D5. Source des images : génération IA (Flora / Canva), stock libre, shooting réel, mix ?
- D6. Version du logo de référence : V2 / V3, fond blanc-or ?
- D7. Mode sombre/clair auto ou thème unique ?
- D8. 2-3 sites admirés à montrer comme référence (agences, Apple, autres) ? Sites détestés ?

### E. Animation
- E1. Intensité : sobre (révélations, compteurs), affirmée (sections épinglées type Apple, parallaxe), spectaculaire (3D, curseur custom) ?
- E2. Hero : image fixe animée, boucle vidéo muette (HyperFrames), ou typographie seule ?
- E3. Matrice 3×3 : survol simple, ou scroll-storytelling épinglé ?
- E4. Vidéo promo 92 s : intégrée (lecteur) ? Elle a encore voix + musique placeholder.
- E5. Respect de `prefers-reduced-motion` : oui par défaut.

### F. Technique
- F1. Stack : Astro (recommandé) ou un seul fichier HTML ?
- F2. Hébergement : Cloudflare Pages, GitHub Pages, Netlify, Vercel, O2switch/OVH ?
- F3. Nom de domaine : lequel est acheté/visé (cladeys.fr / .com / autre) ? Vérification INPI faite ?
- F4. Email de contact et téléphone à afficher ?
- F5. Lien Bookings / Calendly existant ?
- F6. Budget : génération d'images, stock, domaine, hébergement ?
- F7. Contrainte de délai ?

### G. Méthode
- G1. Valider la DA sur maquettes Claude Design (2-3 planches) avant de coder, ou aller directement au code avec aperçu live ?
- G2. Rythme d'itération : section par section avec validation, ou première version complète puis tri (ta préférence habituelle) ?
- G3. Éléments à fournir par Dany : logo vectoriel (seuls PNG/PSD existent), photo(s), textes validés, infos légales, lien RDV.

---

## 6. Enseignements des six sites de référence (analysés le 25 oct. 2026)

| Site | Stack observée | Ce qu'on retient pour Cladéys |
|---|---|---|
| sofihealth.com | Next.js, 2 canvas (séquence d'images pilotée par le scroll), page de 24 000 px, indicateur « scroll 0 % » | Un objet héros qui se transforme au scroll ; phrases dont les mots s'éclairent un à un au défilement ; passages plein écran noir ↔ clair. |
| flowninja.com | Webflow + **GSAP 3.14 + ScrollTrigger + SplitType + Lottie**, fond navy | Titres découpés en mots/lettres qui montent à l'entrée ; cartes colorées en « stack » ; fond navy profond avec halos. La preuve que navy + GSAP fonctionne. |
| daddyyankee.com | Webflow + **Lenis**, page de 40 000 px, préloader « ENTER » | Scroll inertiel, typographie énorme, compositions éditoriales. On retient Lenis, pas le préloader (gadget). |
| mosaic.flabbergast.agency | **Astro** + Lenis + 1 canvas, fond #121212 | Objet 3D (carte) qui tourne et se décompose au scroll ; lignes de grille verticales fixes ; sections sombres ↔ claires. Preuve qu'Astro suffit pour ce niveau. |
| jimo.ai/product/ai | Next.js + Framer Motion, 15 canvas, 11 éléments sticky | Sections **épinglées** (sticky) avec un visuel qui évolue pendant que le texte défile ; ciel étoilé et cercles concentriques très sobres ; typographie lisible et grande. |
| potadot.com.my | **GSAP + ScrollTrigger + Lenis**, 3 canvas | Paragraphe « qui s'éclaire » mot à mot au scroll ; onglets interactifs avec aperçu ; fond clair, à l'opposé de notre dominante. |

Patterns communs retenus : Lenis (scroll inertiel) + GSAP ScrollTrigger ; **sections épinglées** avec visuel qui évolue ; **texte révélé mot à mot** au scroll ; un **objet héros** qui se transforme ; très grande typographie ; animations fondues dans le fond.

---

## 7. Méthode définitive (proposition du 25 oct. 2026)

**Décision : pas de maquette Claude Design.** Les éléments suffisent (charte, logo vectorisé, références, réponses). Le hero codé en Astro sera la maquette : on le valide, et il fixe le système (typo, ornements, rythme) pour toutes les sections suivantes.

**Stack** : Astro 6 (statique, comme TuneInCloud) · GSAP 3 + ScrollTrigger · Lenis · polices locales en `.woff2` (chargées via `fontProviders.local()`) · SVG inline pour tous les ornements (fleur de lys, double cadre, volutes, bandeau) · images en `.avif/.webp` passées en duotone navy ou sépia par CSS (`mix-blend-mode` + `filter`) · `prefers-reduced-motion` respecté · Netlify (build `astro build`, dossier `dist`) · mesure d'audience : Netlify Analytics (côté serveur, sans cookie) ou l'outil de TuneInCloud (aucun n'est en place aujourd'hui dans TuneInCloud).

**Arborescence** : le site vit à la racine du dépôt `cladeys` (`src/`, `public/`, `astro.config.mjs`) pour que Netlify builde directement. L'ancien `index.html` est supprimé au premier commit du nouveau site. Les dossiers `Audit Secu M365/`, `Cladiag IA/`, `videos/` ne sont pas touchés (ils ne sont pas commités).

**Ordre des sections** (une validation par étape) :
0. Socle : tokens, typographie, ornements SVG, logo, navigation, Lenis + GSAP, page vide qui tient. Livré avec la section 1.
1. **Hero** scroll-driven.
2. Le constat : 3 chiffres sourcés.
3. Les 3 tensions du dirigeant → les 3 réponses.
4. La matrice 3×3 (section épinglée) + mention « sur mesure ».
5. La méthode Cladéys (forfait, 2 semaines, aucun accès résiduel, référentiels).
6. L'expérience (chiffres anonymes) + lien TuneInCloud.
7. Contact + pied de page (Bookings, email, téléphone).
8. Finitions : performance, SEO, Open Graph, favicon, mobile, reduced-motion.
9. Déploiement Netlify + domaine cladeis.fr.

**Concept du hero (à valider)** : une **galerie classique** vue de face (arcades en plein cintre, pilastres, corniche — vocabulaire Versailles / Haussmann), dessinée en **traits or sur navy**, en plusieurs plans. Au chargement, les traits se tracent (draw-on) et le titre « Voir clair, agir juste, viser loin. » se révèle mot à mot. Au scroll, la caméra **avance dans la galerie** (les plans se séparent en parallaxe, l'arche centrale grossit) et le visiteur « franchit la porte » vers la section suivante. La porte, c'est l'arche du logo : le pictogramme devient l'architecture. Référence cyber discrète : la **clé de voûte** de l'arche centrale porte un motif gravé (un sceau, une grille d'identité) et quelques pierres s'allument en or au passage, comme des points de contrôle. Variante B si la gravure vectorielle ne suffit pas : mêmes plans, mais en **photo générée** (Flora / Canva) d'une galerie de pierre passée en duotone navy, découpée en 3 calques pour la parallaxe.

---

## 8. État au 25 octobre 2026 (soir)

**Rangement du 26 octobre** : tout le site vit désormais dans `site-web/` (Astro, `src/`, `public/`, `brand/`, ce cadrage). La racine du dépôt ne contient plus que les projets frères (`Audit Secu M365/`, `Cladiag IA/`, `videos/`) et `.claude/launch.json` (qui lance `npm --prefix site-web run dev`). L'ancien `index.html` de la racine est supprimé. Les chemins cités plus bas (`src/…`, `public/…`) s'entendent relativement à `site-web/`.

- Socle Astro 6 en place à la racine du dépôt : `src/styles/global.css` (tokens, typo Playfair Display / Cinzel / Source Sans 3, boutons), `src/layouts/Layout.astro` (Lenis + GSAP), `src/components/Frame.astro` (double cadre or fixe + volutes), `Nav.astro`, `LogoMark.astro` (SVG inliné), `HeroText.astro`.
- Trois pages de comparaison : `/variante-a` (galerie en traits or, `HeroA.astro`), `/variante-b` (photo de galerie de palais, `HeroB.astro`), `/variante-b2` (arcade haussmannienne). `/` = page de choix provisoire.
- Images générées via Flora (Nano Banana Pro, 2K 21:9, 0,18 $ chacune) dans `public/brand/hero-gallery*.{jpg,webp}` ; sources PNG 3168×1344 dans le projet Flora « Cladéys site — visuels ».
- Aperçu local : `npm run dev` puis http://localhost:4321/ (config `.claude/launch.json`).
- Non fait : commit, suppression de l'ancien `index.html`, ligne de mentions légales (attend SIREN / siège), sections 2 à 9.

**Retouches du 25 octobre (soir, 2e passe)** après retour de Dany (traits trop simples, cadre pas fidèle) :
- Ornements : la police d'ornements des documents Cladéys (`12Akruti Image`, installée dans les polices utilisateur Windows) a été lue avec fontTools ; les glyphes sont extraits en chemins SVG dans `src/assets/ornaments.ts` (glyphe `%` = volutes d'acanthe des slides, `0` = coin fleur de lys, fleur de lys seule isolée). Composant `Ornament.astro`.
- Cadre (`Frame.astro`) : filet or 1,5 px + filet fin, volutes d'acanthe identiques aux slides dans les 4 coins, fleur de lys au milieu des bords haut et bas.
- Galerie A redessinée : 11 travées (ratio 0,8), pilastres corinthiens (abaque doré, volutes, feuilles d'acanthe, cannelures, base et plinthe), archivolte à trois rouleaux, clef de voûte en console, corniche à denticules, médaillons fleurdelisés dans les écoinçons, dallage.

**Décision du 25 octobre (3e passe) : variante A retenue**, à continuer d'enrichir. Retouches faites :
- Voûte à caissons (nervures longitudinales en lignes de fuite, anneau et rosaces par travée), frise de perles sous la corniche.
- **Parquet de Versailles** : diagonales de chaque dalle recalculées à chaque image en JS (elles dépendent de deux travées), bordures et lignes de fuite.
- **Portail monumental** pour la dernière travée : pilastres doublés, guirlandes, archivolte à cinq rouleaux, entablement, fronton triangulaire, cartouche au pictogramme Cladéys, fleurs de lys (police d'ornements) en acrotères, lumière et rayons dans l'ouverture.
- Motif de fond à main levée (`public/brand/pattern-sketch.png`) : treillis tremblé + fleurs de lys croquées (`fleur-de-lys-sketch.png` de la vidéo), opacité 10 %, remplace le treillis trop régulier.
- Cadre : volutes de coin réduites (≈ 3,6 vw, max 64 px), fleurs de lys haut/bas agrandies (≈ 4 vw, max 62 px).

**Hero validé par Dany le 25 octobre (3e passe).**

**Section 2 — Le constat** (`src/components/Constat.astro`, 25 octobre) : chapitre « II », titre « Les attaques ne visent plus seulement les grands groupes. », trois anneaux or dont l'arc se trace jusqu'à la valeur, compteur 0 → valeur au scroll, libellé, précision, lien vers la source. Chute : « Ce n'est pas une question de taille. C'est une question de clarté. »
Chiffres **vérifiés en ligne le 25 octobre 2026** :
| Chiffre | Libellé | Source primaire |
|---|---|---|
| 48 % | des victimes de rançongiciel en France sont des TPE, PME et ETI (37 % l'année précédente) | ANSSI, Panorama de la cybermenace 2025, CERT-FR CERTFR-2026-CTI-002 (mars 2026) |
| 55 % | des attaques significatives commencent par un hameçonnage | CESIN · OpinionWay, 11e Baromètre de la cybersécurité des entreprises (janvier 2026) |
| 58 % | des dirigeants de TPE/PME pensent bénéficier d'un bon ou très bon niveau de protection ; 3/4 investissent moins de 2 000 €/an | Cybermalveillance.gouv.fr · OpinionWay, baromètre ImpactCyber 2025 (588 entreprises < 250 salariés, juin-juillet 2025) |
Correction par rapport au deck IntroAVV : le « 80 % dépensent moins de 5 000 €/an » n'existe pas dans la source ; l'étude dit « 3/4 investissent moins de 2 000 €/an » et « 80 % ne sont pas préparées aux attaques ou l'ignorent ». **À corriger aussi dans le deck.**

**Section 2 validée par Dany le 25 octobre**, avec un changement : le chiffre « hameçonnage » (55 % CESIN) est remplacé par un chiffre sur l'IA offensive, vérifié : **54 % de clics sur un hameçonnage rédigé par une IA, contre 12 % pour un hameçonnage classique** (Microsoft Digital Defense Report 2025, repris dans le billet Microsoft Security du 2 avril 2026 : « click-through rates reach 54%, compared to roughly 12% … a 450% increase »). Le lede devient « la cible, l'arme, l'illusion ». Alternative écartée : GTG-1002 (Anthropic, nov. 2025, 80-90 % des opérations tactiques exécutées par l'IA), plus spectaculaire mais plus difficile à lire en un coup d'œil.

**Retour Dany (25 octobre, soir)** : le 54 % Microsoft ne lui plaît pas ; il veut un chiffre plus global sur l'IA qui transforme la cybersécurité (détection et attaque), et propose « 48 heures ». Remplacé par : **48 h entre la publication d'une vulnérabilité et son exploitation active**, détail « Un délai qui se comptait en jours il y a deux ans. L'IA accélère tout : la détection comme l'attaque. » Sources vérifiées : FortiGuard Labs, *Global Threat Landscape Report 2026* (délai passé de 5 jours à 24-48 h, menace « quasi autonome boostée à l'IA ») ; CrowdStrike, *2026 Threat Hunting Report* (88 % des CVE avec code d'exploitation public attaquées sous 48 h). Note d'honnêteté : ces sources mesurent la vitesse des attaquants en général, l'IA étant citée comme accélérateur, pas un test « modèle → exploit » chiffré. L'anneau est plein (lecture « cadran »), suffixe « h ». Lede : « la cible, la vitesse, l'illusion ».

**Section 3 — Les trois tensions** (`src/components/Tensions.astro`, 25 octobre, construite sans validation préalable à la demande de Dany) : chapitre « III », titre « Trois phrases que nous entendons à chaque premier rendez-vous. », colonne vertébrale or qui se trace au scroll, trois sceaux numérotés (bordeaux, vert anglais, violet royal), phrase du dirigeant en italique à gauche, réponse Cladéys à droite (forfait / deux semaines / priorités lisibles + indépendance licences). Chute : « Le paradoxe des PME — Les plus ciblées. Les moins accompagnées. Et pourtant celles qui agissent le plus vite. » + bouton « Découvrir les offres ». Sur mobile : colonne à gauche, sceau + citation + réponse empilés.

**Retouches section 3 demandées par Dany (25 octobre, soir), faites** : chapeau « Les tensions du dirigeant de PME » ; titre « Trois objections qui reviennent fréquemment. » ; lede « Elles sont légitimes. Cladéys est une société construite pour répondre aux exigences et aux demandes des PME. » ; objection II « Nous n'avons pas le temps ni la bande passante d'en faire un projet. » avec réponse « Des projets courts. » (plus de « deux semaines ») ; chute « Et pourtant celles qui ont la possibilité d'agir le plus vite. » ; **fond ivoire** (rupture entre les sections navy 2 et 4) : titres navy, filets et chapeaux or foncé, titres de réponse dans la couleur du sceau, bouton navy, motif croqué inversé en encre, **bandeau diagonal tricolore** navy → bordeaux → or en pied (signature de la charte). La barre de navigation fixe passe en encre navy au survol des sections `data-theme="light"` (ScrollTrigger dans `Layout.astro`).

**Sections 2 et 3 validées par Dany le 25 octobre** (seule retouche : le suffixe « h » du 48 h remis à la place du « % »).

**Section 4 — La gamme** (`src/components/Gamme.astro`, 25 octobre, fond navy profond) : chapitre « IV », titre « Trois axes, trois sujets. Neuf offres clé en main. » Scène **épinglée** (desktop) : les trois axes s'allument l'un après l'autre dans la matrice avec leur définition à gauche (Cladiag · Comprendre / Cladact · Agir / Cladvision · Suivre), puis la matrice complète reste visible et chaque case révèle sa promesse au survol (ou au clic / clavier). Colonnes : Sécurité M365 · Usages & licences · Intelligence artificielle. Cladiag et Cladact « Disponible », Cladvision « Bientôt » (hachures discrètes). Pas de prix. Chute « Et au-delà des neuf offres » : accompagnement sur mesure possible, la valeur ajoutée reste la vitesse d'exécution des neuf offres. Mobile : pas d'épinglage, matrice empilée par axe avec promesses visibles.
Retouches Dany (25 oct.) faites : paragraphe d'introduction sur le périmètre Microsoft 365 (identités, messagerie, collaboration, documents, appareils = cœur du quotidien et périmètre le plus exposé) avec les icônes officielles Entra, Exchange, Teams, SharePoint, OneDrive, Intune, Defender, Purview (`public/brand/ms/`, 112 px) ; distance d'épinglage réduite de 220 % à 130 % de la hauteur d'écran. La révélation des cases est en CSS (classe `is-revealed`), plus fiable que le tween GSAP initial.
Section 4 validée par Dany le 25 oct. Dernières retouches : icône **Copilot** ajoutée (paquet Dashboard Icons, `public/brand/ms/ms-copilot.png`), ordre : Defender, Intune, Copilot, Purview, Entra ID, Exchange, Teams, SharePoint, OneDrive.

**Section 5 — Comment nous travaillons** (`src/components/Methode.astro`, 25 octobre, fond **ivoire**, fusion des anciennes sections 5 et 6 validée par Dany) : chapitre « V », titre « Vite, et à l'essentiel. » À gauche, la méthode en quatre temps reliés par un filet or tracé au scroll : 01 cadrage rapide et efficace · 02 accès temporaires automatisés, qui expirent, toute trace effacée · 03 collecte automatisée contre les référentiels CISA/CIS/ANSSI pleinement intégrés · 04 restitution lisible (score, écarts, criticité × effort). À droite, quatre engagements avec fleur de lys (forfait, aucun accès résiduel, référentiels reconnus, indépendance licences) puis un topo d'expérience (onze ans, plus de quarante entreprises, PME → grand groupe, secteurs variés, signature « pas une offre spéciale PME »). En pied, la carte du blog **TuneInCloud** (fenêtre navy, titres des derniers articles lus au build via `src/lib/tuneincloud.ts` avec repli statique ; aujourd'hui tuneincloud.com/rss ne renvoie qu'un « Hello world! » WordPress, donc repli affiché) animée au scroll (redressement 3D, titres en cascade), bouton « Lire le blog », bandeau tricolore. Retouches Dany (25 oct., soir) faites : la colonne de gauche devient **« Nos piliers »** (01 haut niveau d'expertise · 02 la qualité, pas le temps passé · 03 un complément à vos équipes · 04 des référentiels reconnus CISA/CIS/ISO/ANSSI) pour ne plus répéter les engagements ; **engagements** réécrits : au forfait (prix connu, engagement de résultat, pas de moyens) · aucun accès résiduel (autorisation précise, conditions de travail serein, droits supprimés automatiquement) · indépendants (ne travaille pas pour l'éditeur, sans citer les commissions sur licences) · transparents (réduction considérable du risque, accompagnement IA et usages, jamais 100 %). Encart blog refait : plaque ivoire encadrée, **logo TuneInCloud** fourni par Dany (`public/brand/tuneincloud-mark.png`) à gauche, nom avec trait de crayon or qui se trace, lignes de contenu, bouton navy.
Section 5 validée par Dany le 25 oct. (texte blog : « par un expert reconnu », au singulier, Dany alimente seul le blog).

**Décision hero (25 oct., soir) : Dany retient finalement la variante B (photo duotone)** ; il veut la faire évoluer ensuite vers un rendu réaliste « comme une vidéo qui se décompose, comme si on marchait dans le couloir d'arches ». La variante A (traits or) reste accessible sur `/variante-a` comme page de travail. `/` = site complet avec HeroB ; `/variante-b`, `/variante-b2` et le placeholder supprimés.

**Section 6 — Contact + pied de page** (`src/components/Contact.astro`, 25 octobre, navy profond) : chapitre « VI », titre « Parlons-en. », lede « Un premier échange, sans engagement, pour comprendre votre situation et vous dire franchement par où commencer. » À gauche, une grande arche or qui se trace (triple archivolte, clef, lumière) avec le pictogramme Cladéys au centre, rappel de la porte du hero. Bouton Bookings doré, email `dpolonio@cladeys.fr`, téléphone affiché seulement s'il est renseigné (constante `PHONE`), « Bordeaux et la Nouvelle-Aquitaine sur place. Toute la France à distance. » Pied de page navy encre : logo, liens (Offres, Méthode, Contact, TuneInCloud), **ligne de mentions légales** avec Cladéys SAS, hébergeur Netlify, contact, « aucun cookie de suivi », et trois champs **« à compléter » visibles** (SIREN, siège social, directeur de la publication) ; copyright avec la devise.

**Hero « marche dans la galerie »** (`src/components/HeroWalk.astro`, 25-26 octobre) : Dany voulait une vidéo découpée image par image d'une marche dans le couloir. La génération vidéo par IA (Flora : Kling 3.0 Pro, MiniMax H3 Max, ~0,5-0,7 $ le clip) est **refusée par le plan Flora actuel** (`paid_plan_required`). Solution retenue sans vidéo : projection de la photo sur un couloir 3D (technique *Tour Into the Picture* : point de fuite + sol, plafond, deux murs, mur du fond), rendu WebGL maison (~10 Ko, aucune bibliothèque), caméra qui avance réellement au scroll avec un léger pas et balancement, duotone navy/or calculé dans le shader, lumière qui monte vers la fin puis flash. Paramètres : point de fuite (0,497 ; 0,62), mur du fond à 14 % du cadre, focale = largeur de la photo. Repli automatique sur la photo + zoom CSS sans WebGL ou en mouvement réduit. Limite connue : le sol proche de la caméra s'étire (résolution de la photo), inhérent à la technique ; une vraie vidéo IA (Flora payant) resterait l'étape supérieure.

**Couche souris** (`src/components/Cursor.astro`, 26 octobre, inspiration potadot.com.my mais volontairement discrète) : curseur personnalisé (point or précis + anneau fin qui suit avec retard, s'ouvre sur liens/boutons/cartes, se resserre au clic, passe en encre navy sur les sections ivoire), boutons légèrement magnétiques (±7 px), cartes `[data-tilt]` (cases de la matrice, anneaux du constat, encart expérience, plaque du blog) inclinées de 2 à 3° vers le pointeur avec un reflet or qui le suit, et la caméra du hero qui suit légèrement le regard. Actif uniquement avec `(hover: hover) and (pointer: fine)` et sans mouvement réduit ; rien sur tactile.

Piège rencontré : une regex contenant `<item>` dans le frontmatter Astro fait échouer la compilation (« Could not import ») → logique déplacée dans un module `.ts` ; le serveur de dev a dû être redémarré (cache Vite) et un ancien `astro dev` orphelin tué sur le port 4321.

---

## 5. Pièges « AI slop » que l'on évitera explicitement

- Dégradés violets / bleus électriques, blobs flous, glassmorphism, grilles de 3 cartes avec icônes génériques, emojis en guise d'icônes (le site actuel en a).
- Photo de laptop / cadenas / hoodie, « hero » stock d'open space.
- Texte générique (« solutions innovantes », « transformation digitale »).
- Animations partout : on choisit 3-4 moments forts, le reste reste calme.
- À la place : typographie éditoriale, ornements dessinés en SVG (pas en police dingbat), vrais extraits du rapport Cladiag, vraies personnes, vrai lieu (Bordeaux), chiffres sourcés en note.
