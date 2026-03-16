# Qina Design — Especificações do Site

## Visão Geral do Projeto

**Cliente:** Qina Design  
**Tipo:** Site institucional / portfólio  
**Tecnologias:** HTML5, CSS3, JavaScript (Vanilla)  
**Slogan:** _Do seu jeito. Com a nossa entrega._

---

## Identidade da Marca

### Posicionamento
A Qina Design é um estúdio de design de interiores e marcenaria que existe entre a técnica e o cuidado — nem o mais caro, nem o mais simples. **Funciona com critério e proximidade.**

**Arquétipo:** Cuidador — escuta, compreende e entrega. Está ao lado, não no centro.

**Tom de voz:** Calmo, preciso, empático. Transparente. Resolve sem exagero. Fala na hora certa.

### O que NÃO é Qina:
- Não é móveis prontos de baixa qualidade
- Não é luxo aspiracional fora da realidade
- Não é promessa sem entrega

### O que É Qina:
- Projetos funcionais, bem resolvidos
- Atendimento presente e transparente
- Execução com domínio técnico
- Prazo, responsabilidade e clareza

---

## Paleta de Cores

```
--color-ferro:     #1A1A1C   /* Ferro Cru — fundo principal / dark */
--color-verde:     #39446B → real: #3A5443  /* Verde Profundo — cor primária de destaque */
--color-bege:      #766F57   /* Bege Areia — cor de apoio / detalhe */
--color-offwhite:  #E4DECE   /* Off White — textos claros, fundos claros */
--color-verde-med: #4A6B58   /* Verde médio — variação do verde profundo */
--color-verde-claro: #5C7A65 /* Verde mais claro nos backgrounds */
```

**Referência de cores pelo brandbook (p.38):**
- Ferro Cru: HEX `#1A1A1C` — CMYK 0,0,0,90 — Pantone Process Black C
- Verde Profundo: HEX `#39444B` aprox. `#3A5443` — CMYK 24,0,9,74 — Pantone 5535 C
- Bege Areia: HEX `#766F57` — CMYK 0,3,40,55
- Off White: HEX `#E4DECE` — CMYK 0,3,8,4 — Pantone 7527 C

---

## Tipografia

**Primária (títulos e chamadas):** Satoshi Bold  
**Secundária (subtítulos):** Satoshi Regular / Medium  
**Corpo de texto:** Satoshi Light  
**Detalhes (legendas, datas):** Erode Regular ou Medium (serifada, uso mínimo e em tamanhos pequenos)

**Fonte web fallback:** `'DM Sans', sans-serif` para Satoshi  
**CDN sugerido:** Google Fonts ou Fontshare (Satoshi disponível no Fontshare)

---

## Estrutura do Site (Páginas / Seções)

### Single Page Application — Seções na ordem:

1. **Hero / Abertura**
2. **Sobre a Qina**
3. **Serviços**
4. **Portfólio / Projetos**
5. **Processo**
6. **Depoimentos**
7. **Contato**
8. **Footer**

---

## Seção 1 — Hero

**Layout:** Full-screen com background do símbolo em overlay  
**Background:** `qina_background.png` ou `qina_background-2.png` (gradiente verde escuro com símbolo)  
**Conteúdo:**
```
[Logo: qinadesign + símbolo]
Navegação topo: Sobre | Serviços | Projetos | Processo | Contato

[Headline grande]
"Do seu jeito."
"Com a nossa entrega."

[Subtítulo]
"Projetos de interiores e marcenaria sob medida,
do briefing à execução — com técnica, cuidado e presença."

[CTA Button]
"Ver Projetos →"

[CTA secundário]
"Conheça a Qina"
```

**Efeitos:**
- Fade-in suave do texto (staggered)
- Parallax leve no background
- Cursor customizado (círculo verde)
- Partículas ou grain overlay sutil no fundo

---

## Seção 2 — Sobre a Qina

**Layout:** Split 50/50 — texto à esquerda, imagem à direita  
**Background:** Off White `#E4DECE`  
**Conteúdo:**
```
[Label pequeno em Erode]
"Quem somos"

[Título]
"Não o mais caro.
Não o mais simples.
O que funciona."

[Texto]
"A Qina Design existe para atender pessoas e empresas
que valorizam soluções completas e humanas. Nossa missão
é tornar projetos mais acessíveis e bem conduzidos —
da escuta ao acabamento."

[4 pilares em grid 2x2]
🔵 "Ouvimos antes de falar"
🔵 "Acompanhamos do início ao fim"
🔵 "Presença mesmo quando algo sai do planejado"
🔵 "Técnica sem abrir mão da humanidade"
```

---

## Seção 3 — Serviços

**Layout:** Cards em grid 3 colunas (desktop) / 1 coluna (mobile)  
**Background:** Verde Profundo `#3A5443`  
**Conteúdo:**
```
[Label]
"O que fazemos"

[Título]
"Cada espaço tem
sua própria medida."

[Cards de serviços]
1. Projetos de Interiores
   "Planejamento completo do ambiente, da planta ao acabamento."

2. Marcenaria Sob Medida
   "Peças projetadas para o seu espaço com execução criterioso."

3. Acompanhamento de Obra
   "Presente em cada etapa. Transparente, sempre."

4. Consultoria de Ambientes
   "Para quem precisa de orientação antes de decidir."

5. Reforma e Renovação
   "Espaços que precisam de um novo propósito."

6. Projeto Comercial
   "Ambientes de trabalho que funcionam com identidade."
```

---

## Seção 4 — Portfólio / Projetos

**Layout:** Masonry grid ou grade com hover reveal  
**Background:** Ferro Cru `#1A1A1C`  
**Conteúdo:**
```
[Label]
"Projetos"

[Título]
"Do esboço à entrega —
projetos feitos para durar."

[Grid de projetos — placeholder para fotos reais]
- Projeto 01: Residência Recife
- Projeto 02: Escritório Corporativo
- Projeto 03: Apartamento Compacto
- Projeto 04: Ambiente Comercial

[Cada card ao hover:]
→ Nome do projeto
→ Categoria
→ "Ver projeto →"

[Botão]
"Ver todos os projetos"
```

---

## Seção 5 — Processo

**Layout:** Timeline horizontal (desktop) / vertical (mobile)  
**Background:** Off White `#E4DECE`  
**Conteúdo:**
```
[Label]
"Como trabalhamos"

[Título]
"Do seu jeito,
com o nosso método."

[Etapas]
01 → Escuta
    "Entendemos o espaço, o uso e as expectativas."

02 → Briefing
    "Documentamos tudo antes de começar a projetar."

03 → Projeto
    "Desenho técnico e visualização 3D do ambiente."

04 → Aprovação
    "Ajustes até que o projeto seja exatamente o que você imaginou."

05 → Execução
    "Acompanhamento total da obra e marcenaria."

06 → Entrega
    "Espaço pronto, com suporte pós-entrega."
```

---

## Seção 6 — Depoimentos

**Layout:** Carrossel / slider  
**Background:** Verde Profundo `#3A5443`  
**Conteúdo:**
```
[Label]
"O que dizem sobre a Qina"

[Título]
"E quem escolhe a Qina sabe:
vai ser cuidado, vai ser ouvido,
e vai funcionar."

[Cards de depoimento — placeholders]
"Placeholder depoimento cliente 01"
— Nome, Projeto

"Placeholder depoimento cliente 02"
— Nome, Projeto
```

---

## Seção 7 — Contato / CTA Final

**Layout:** Full-width com fundo escuro + formulário  
**Background:** `qina_background-3.png` (background texturizado verde)  
**Conteúdo:**
```
[Título grande]
"Pronto para começar
o seu projeto?"

[Subtítulo]
"Conta pra gente o que você tem em mente.
A gente ouve antes de qualquer coisa."

[Formulário]
- Nome
- E-mail
- Telefone (WhatsApp)
- Tipo de projeto (select: Residencial / Comercial / Marcenaria / Consultoria)
- Mensagem
- [Botão] "Enviar mensagem →"

[Contatos diretos]
📧 contato@qinadesign.com.br
📱 WhatsApp: (81) XXXXX-XXXX
📍 Recife, PE

[Links redes sociais]
Instagram | LinkedIn
```

---

## Seção 8 — Footer

**Layout:** 4 colunas (desktop) / empilhado (mobile)  
**Background:** `#0F0F10` (quase preto)  
**Conteúdo:**
```
[Col 1] Logo + símbolo + tagline
"Do seu jeito. Com a nossa entrega."

[Col 2] Navegação
Sobre | Serviços | Projetos | Processo | Contato

[Col 3] Serviços
Projetos de Interiores | Marcenaria | Acompanhamento | Consultoria

[Col 4] Contato
Email | WhatsApp | Instagram | LinkedIn

[Bottom bar]
© 2025 Qina Design. Todos os direitos reservados.
```

---

## Arquivos de Assets Disponíveis

```
assets/
  images/
    qina_avatar_instagram.png    → Logo/avatar principal da marca
    qina_simbolo.png             → Símbolo isolado (ícone QD interligado)
    qina_background.png          → Background gradiente verde/preto (geral)
    qina_background-2.png        → Background com símbolo em overlay (hero)
    qina_background-3.png        → Background texturizado com curvas (seção 3)
```

---

## Diretrizes de Layout e Componentes

### Navegação
- Fixa no topo com fundo transparente → blur/dark ao scroll
- Logo + links + botão CTA "Fale conosco" verde
- Menu hamburguer no mobile com overlay animado

### Botões
```css
/* Primário */
bg: #3A5443, text: #E4DECE, border-radius: 2px, padding: 14px 32px
hover: bg: #4A6B58, transform translateY(-2px)

/* Secundário / outline */
bg: transparent, border: 1px solid #E4DECE, text: #E4DECE
hover: bg: rgba(255,255,255,0.05)
```

### Cards
- Border-radius: 4px (sutil — marca não é arredondada demais)
- Sombra: `0 4px 24px rgba(0,0,0,0.3)`
- Hover: leve elevação + border verde

### Scroll e Animações
- Intersection Observer para revelar elementos ao scroll
- Fade + slide-up com 0.6s ease
- Stagger nos grupos de elementos (0.1s delay entre itens)
- Smooth scroll nativo entre seções

### Cursor Customizado
```js
// Círculo seguidor customizado em verde
cursor: circle 16px, bg: rgba(58,84,67,0.6), border: 1px solid #3A5443
hover em links/botões: scale(2.5) + mix-blend-mode: difference
```

### Tipografia — Tamanhos Base
```css
--text-xs:   0.75rem   /* 12px — legendas Erode */
--text-sm:   0.875rem  /* 14px — labels, datas */
--text-base: 1rem      /* 16px — corpo */
--text-lg:   1.25rem   /* 20px — subtítulos */
--text-xl:   1.5rem    /* 24px */
--text-2xl:  2rem      /* 32px */
--text-3xl:  3rem      /* 48px — títulos seção */
--text-4xl:  4rem      /* 64px — hero */
--text-5xl:  6rem      /* 96px — headline hero desktop */
```

### Responsive Breakpoints
```css
mobile:  < 768px
tablet:  768px — 1024px
desktop: > 1024px
```

---

## Efeitos Especiais a Implementar

1. **Grain overlay** no hero — textura de ruído sutil em CSS/canvas
2. **Parallax** suave no fundo do hero ao scroll
3. **Cursor customizado** — circle follower com blend mode
4. **Texto split animation** na hero headline (letra por letra ou linha por linha)
5. **Contador animado** — possível seção de números (X projetos entregues, X anos, etc.)
6. **Hover nos cards do portfólio** — imagem sobe, texto aparece com overlay
7. **Navbar morphing** — de transparente para vidro fosco (backdrop-filter) ao scroll
8. **Smooth reveal** com Intersection Observer em todas as seções

---

## Estrutura de Arquivos do Site

```
site/
├── index.html
├── QINA_SITE_SPEC.md        ← este arquivo
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── qina_avatar_instagram.png
│   │   ├── qina_simbolo.png
│   │   ├── qina_background.png
│   │   ├── qina_background-2.png
│   │   └── qina_background-3.png
│   └── fonts/              ← Satoshi (adicionar via Fontshare CDN)
```

---

## Notas Finais para o Gerador

- O site deve ser **single-file inicialmente** (`index.html` com CSS e JS inline ou em arquivos separados na pasta assets)
- Priorizar **performance** — imagens otimizadas, lazy loading
- **Acessibilidade básica** — aria-labels, contraste, foco visível
- **SEO básico** — meta tags, OG tags para redes sociais
- Usar **Google Fonts CDN** para Satoshi (ou Fontshare): `https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap`
- Todo texto placeholder deve ser **em português**
- Manter **coerência visual** com o brandbook — a marca é sofisticada, contida, precisa
