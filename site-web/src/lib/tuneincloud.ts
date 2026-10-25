/* Derniers articles du blog TuneInCloud, lus au moment du build.
   Repli statique si le flux ne répond pas ou ne contient pas au moins deux vrais articles. */
export type Post = { title: string; href: string };

const FALLBACK: Post[] = [
  { title: 'Intune, Entra, Defender, Purview : l’actualité Microsoft 365 décryptée', href: 'https://tuneincloud.fr/' },
  { title: 'Brèves, dossiers et guides, en français, par des praticiens', href: 'https://tuneincloud.fr/' },
];

const ITEM = /<item>([\s\S]*?)<\/item>/g;
const TITLE = /<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/;
const LINK = /<link>([\s\S]*?)<\/link>/;

const decode = (s: string) =>
  s.replace(/&apos;/g, '’').replace(/&#39;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

export async function getPosts(): Promise<Post[]> {
  for (const url of ['https://tuneincloud.fr/rss.xml']) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
      if (!res.ok) continue;
      const xml = await res.text();
      const parsed = Array.from(xml.matchAll(ITEM))
        .map((m) => {
          const t = TITLE.exec(m[1]);
          const l = LINK.exec(m[1]);
          // le flux publie encore des liens en .com : on les ramène sur le .fr
          return t && l ? { title: decode(t[1].trim()), href: l[1].trim().replace(/^https?:\/\/(www\.)?tuneincloud\.com/, 'https://tuneincloud.fr') } : null;
        })
        .filter((p): p is Post => !!p && !/hello world/i.test(p.title))
        .slice(0, 3);
      if (parsed.length >= 2) return parsed;
    } catch {
      /* repli statique */
    }
  }
  return FALLBACK;
}
