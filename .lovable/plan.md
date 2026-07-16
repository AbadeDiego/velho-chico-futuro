
# Landing Page — Jovens do Velho Chico

Página institucional single-page em português, com todas as 12 seções do briefing, conteúdo centralizado em um único arquivo de configuração e visual moderno inspirado no Rio São Francisco e no Sertão.

## Arquitetura

- Rota única `/` reescrevendo `src/routes/index.tsx` (substitui o placeholder).
- Metadados SEO + Open Graph + Twitter no `head()` da rota (título, descrição, og:title/description/type, twitter:card) e ajuste do `__root.tsx` para remover os defaults "Lovable App".
- Fontes carregadas via `<link>` no `__root.tsx` (Inter + Space Grotesk como display), registradas em `@theme` de `src/styles.css`.
- Design tokens em `src/styles.css` (paleta abaixo) usando OKLCH, sem hardcode de cores nos componentes.

## Conteúdo editável

Arquivo único `src/content/site-content.ts` exportando um objeto tipado com: nav, hero, desafio (contexto + 3 cards), proposta (4 benefícios), solução (5 módulos), comoFunciona (4 etapas), metas (8 indicadores), impactos (8 itens + 3 ODS), galeria (array de imagens/legendas), depoimentos (3), CTA final, footer (links, redes, contatos, parceiros). Todos os textos e números vêm daí.

## Componentes (em `src/components/landing/`)

- `Navbar.tsx` — menu fixo, blur ao rolar, scroll suave via `scrollIntoView`, CTA "Baixar o App", menu mobile (Sheet do shadcn).
- `Hero.tsx` — headline grande, subtítulo, CTA, mockup de smartphone (frame SVG + imagem gerada), imagem de fundo/lateral.
- `Desafio.tsx` — título + parágrafo + 3 cards com ícones Lucide + faixa fotográfica.
- `PropostaValor.tsx` — 4 cards de benefícios.
- `Solucao.tsx` — 5 módulos em grid com ícones + mockup do app.
- `ComoFunciona.tsx` — timeline vertical (mobile) / horizontal (desktop) com 4 etapas numeradas + CTA "Começar agora".
- `Indicadores.tsx` — seção com fundo azul profundo, números com contagem animada via IntersectionObserver + `requestAnimationFrame`, frase final.
- `Impactos.tsx` — grid de blocos de impacto + linha com 3 badges de ODS.
- `Galeria.tsx` — mosaico responsivo (CSS grid com spans variados), hover zoom, lightbox usando Dialog do shadcn com navegação por teclado (setas/Esc).
- `Depoimentos.tsx` — 3 cards com foto/nome/comunidade/texto, marcados como "conteúdo provisório".
- `CTAFinal.tsx` — headline, texto, botão, mockup do smartphone.
- `Footer.tsx` — logo, descrição, navegação, redes, contato, políticas, parceiros.
- `FloatingDownload.tsx` — botão flutuante fixo visível apenas < md.
- `ScrollReveal.tsx` — wrapper utilitário com IntersectionObserver + classes Tailwind (`opacity-0 translate-y-4` → `opacity-100 translate-y-0`) para animações discretas.
- `Counter.tsx` — hook/componente para números animados.
- `Logo.tsx` — wordmark simples "Jovens do Velho Chico" (SVG inline com onda estilizada representando o rio).

## Design System

Paleta (OKLCH), adicionada em `:root` e mapeada em `@theme inline`:

- `--background`: off-white (~oklch 0.98 0.005 85)
- `--foreground`: grafite escuro (~oklch 0.22 0.01 250)
- `--primary`: azul-esverdeado profundo do Velho Chico (~oklch 0.38 0.06 200)
- `--primary-foreground`: off-white
- `--accent`: terracota/areia do Sertão (~oklch 0.62 0.12 45)
- `--muted`: areia clara (~oklch 0.94 0.02 75)
- `--border`, `--card`, `--ring` derivados coerentemente
- Dark mode não é requerido; manter tokens do shadcn intactos para não quebrar componentes.

Tipografia: `Space Grotesk` para display/headings, `Inter` para corpo. Cantos arredondados generosos (`rounded-2xl`/`3xl`), sombras suaves, muito whitespace, ícones Lucide lineares com `strokeWidth={1.5}`.

## Imagens

Gerar 4–6 imagens com `imagegen` (fast/standard) e salvar em `src/assets/`:

1. Hero — jovens ao ar livre em comunidade ribeirinha do São Francisco, luz natural, autêntico documental.
2. Faixa da seção Desafio — paisagem do Sertão com jovens.
3. Comunidade quilombola — oficina/roda de conversa.
4. Mockup screen do app — UI mockada (usada dentro do frame de smartphone SVG).
5–8. Galeria — oficinas, território, cultura, jovens usando o app.

Todas com `alt` descritivo, `loading="lazy"` (exceto o hero), `decoding="async"`, `<img>` com `aspect-*` wrappers.

## Acessibilidade & SEO

- `<main>` único na rota, headings hierárquicos (h1 no hero, h2 por seção).
- `aria-label` em botões só de ícone; foco visível via `focus-visible:ring`.
- Links de navegação semânticos com `href="#secao"` + handler de smooth scroll (respeitando `prefers-reduced-motion`).
- Alt text pt-BR em todas as imagens; galeria com legendas.
- SEO: title, description, canonical relativo, og:title/description/type=website, twitter:card=summary_large_image, JSON-LD Organization no root.

## Notas técnicas

- Sem backend/Lovable Cloud — página puramente institucional.
- Sem dependências novas além do que o template já tem (shadcn + lucide + tailwind v4 já presentes).
- Animações somente com CSS/Tailwind + IntersectionObserver (sem Framer Motion) para manter performance.
- Placeholder atual em `src/routes/index.tsx` é substituído pela nova página.
