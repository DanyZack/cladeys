# Site vitrine Cladéys

Site one-page Astro, hébergé sur Netlify, domaine cladeis.fr.

## Commandes

```bash
npm install        # dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production dans dist/
npm run preview    # aperçu du build
```

Depuis la racine du dépôt : `npm --prefix site-web run dev` (c'est ce que fait `.claude/launch.json`).

## Netlify

Le dépôt contient d'autres projets à sa racine : `netlify.toml` (à la racine) fixe `base = "site-web"`,
`command = "npm run build"`, `publish = "dist"`. Rien à configurer dans l'interface Netlify au-delà
de brancher le dépôt et le domaine.

## Structure

- `src/layouts/Layout.astro` : en-tête HTML, métadonnées, Lenis + GSAP, bascule de la navigation sur fond clair.
- `src/components/` : `HeroWalk` (marche 3D dans la galerie), `Constat`, `Tensions`, `Gamme`, `Methode`, `Contact` (+ pied de page), `Frame` (cadre fixe), `Nav`, `Cursor` (couche souris), `Ornament` / `LogoMark`.
- `src/assets/ornaments.ts` : ornements vectorisés depuis la police des documents Cladéys.
- `src/lib/tuneincloud.ts` : derniers articles du blog, lus au build.
- `public/brand/` : photo du hero, logos, icônes Microsoft, motif de fond, image de partage.
- `brand/` : logos sources (PNG et SVG tracés).
- `src/pages/_variante-a.astro` : page de travail (hero en traits or), non publiée.
- `CADRAGE-Site-Cladeys.md` : cahier des charges et journal des décisions.
