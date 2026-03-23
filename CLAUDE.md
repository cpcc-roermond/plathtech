# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev       # Start dev server at localhost:8080
npm run build     # Production build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

No test framework is currently configured.

## Hosting & Deployment

### Production Environment

- **Hosting**: Vercel (free tier)
- **Domain**: plath-tech.com (registered at IONOS, DNS points to Vercel)
- **GitHub Repository**: https://github.com/cpcc-roermond/plathtech

### Deployment Workflow

```
Local changes → git push → Vercel auto-deploys → Live on plath-tech.com
```

To deploy changes:
```bash
git add .
git commit -m "Beschreibung der Änderungen"
git push
```

Vercel automatically builds and deploys on every push to `main`. No manual deployment needed.

### DNS Configuration (at IONOS)

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### History

- Originally created as CPCC homepage (cp-cc.com, GitHub: cpcc-roermond/cpcc-homepage)
- Rebranded to PLATHTECH in March 2026; new repo and domain created
- Built with Lovable (React/Vite app), exported to GitHub
- Now hosted on Vercel with custom domain plath-tech.com

## Architecture Overview

This is a **React 18 + TypeScript + Vite** single-page application for **PLATHTECH INNOVATION & ARTIFICIAL INTELLIGENCE RESEARCH & CONSULTANCIES L.L.C S.O.C** (short: **PLATHTECH**) - a boutique AI consulting firm landing page. Managing Director: Christian Plath. Address: Office S1-252, Dubai Investment Park First, Dubai, UAE. Contact: info@plath-tech.com | +49-152-05198771.

### Key Directories

- `src/pages/` - Route components (Index, ContactForm, Privacy, AboutMe, KIStarthilfe, Projektmanagement, KIProzessOptimierung, KIMarketingSales, KISchulungen, KIAusschreibungen, NotFound)
- `src/components/` - Landing page sections (Header, Hero, About, KISparring, Products, Contact, Footer)
- `src/components/ui/` - shadcn/ui components (60+ pre-built components)
- `src/contexts/` - React Context (LanguageContext for i18n)
- `src/utils/` - translations.ts (strongly-typed i18n system)
- `src/hooks/` - Custom hooks (use-toast, use-mobile)
- `src/lib/utils.ts` - `cn()` helper (clsx + tailwind-merge)

### Routing (React Router v6)

```
/                        → Index (one-page landing with scroll sections)
/datenschutz             → Privacy policy
/kontakt                 → Contact form
/ueber-mich              → AboutMe (founder profile, project experience timeline)
/ki-starthilfe           → KIStarthilfe (service detail page, fully multilingual)
/projektmanagement       → Projektmanagement (service detail page, fully multilingual)
/ki-prozess-optimierung  → KIProzessOptimierung (service detail page, fully multilingual)
/ki-marketing-sales      → KIMarketingSales (service detail page, fully multilingual)
/ki-schulungen           → KISchulungen (service detail page, fully multilingual)
/ki-ausschreibungen      → KIAusschreibungen (service detail page, fully multilingual)
*                        → NotFound (404)
```

Section IDs for scroll navigation: `about`, `ki-sparring`, `products`, `contact`

### URL Language Parameter (`?lang=`)

All pages support a `?lang=` query parameter that skips the LoadingScreen and sets the language directly:

```
https://plath-tech.com/?lang=de                       → German homepage (no LoadingScreen)
https://plath-tech.com/?lang=en                       → English homepage
https://plath-tech.com/?lang=nl                       → Dutch homepage
https://plath-tech.com/?lang=ar                       → Arabic homepage (RTL)
https://plath-tech.com/?lang=ru                       → Russian homepage
https://plath-tech.com/ki-starthilfe?lang=en          → English KI-Starthilfe directly
https://plath-tech.com/projektmanagement?lang=en      → English Projektmanagement directly
https://plath-tech.com/ki-prozess-optimierung?lang=en → English KI-Geschäftsoptimierung directly
https://plath-tech.com/ki-marketing-sales?lang=en     → English KI in Marketing & Sales directly
https://plath-tech.com/ki-schulungen?lang=en          → English KI-Schulungen directly
https://plath-tech.com/ki-ausschreibungen?lang=en     → English KI in Ausschreibungen directly
```

Section anchors work combined with `?lang=`:

```
https://plath-tech.com/?lang=de#products    → German homepage, scrolled to products
https://plath-tech.com/?lang=de#about       → scrolled to about section
https://plath-tech.com/?lang=de#ki-sparring → scrolled to KI-Sparring section
https://plath-tech.com/?lang=de#contact     → scrolled to contact section
```

All section anchor links are included in `public/sitemap.xml` for all 5 languages with appropriate priorities (products: 0.8, ki-sparring: 0.7, about/contact: 0.6).

This is implemented in `LanguageContext.tsx`: on init, `getUrlLanguage()` reads `?lang=` from `window.location.search`. If valid, language is set and `hasCompletedLoading` is initialized to `true` (bypasses LoadingScreen). Works on all routes/subpages.

**Hash anchor scrolling**: `Index.tsx` includes a `useEffect` that reads `window.location.hash` and scrolls to the target element 800ms after load — after the fade-in animation completes. Without this delay, the browser jumped to the wrong section.

### SPA Routing (vercel.json)

`vercel.json` in the root configures Vercel to rewrite all routes to `index.html`, enabling React Router to handle client-side navigation. Without this, direct URL access to subpages (e.g. `/ki-starthilfe`) returns 404.

The rewrite rule explicitly excludes static files so they are served correctly:
```json
{ "source": "/((?!sitemap.xml|robots.txt|logos/).*)", "destination": "/index.html" }
```
Without this exclusion, `sitemap.xml` and `robots.txt` would be intercepted and served as the React app.

### Multi-Language System (DE/EN/NL/AR/RU)

Custom strongly-typed i18n implementation (no external library):

```tsx
const { language } = useLanguage();
const t = useTranslations(language);
// Access: t.hero.title, t.nav.about, t.contactForm.fields.name, t.aboutMe.projects.*,
// t.kiStarthilfePage.*, t.projektmanagementPage.*, t.kiGeschaeftsoptimierungPage.*,
// t.kiMarketingSalesPage.*, t.kiSchulungenPage.*, t.kiAusschreibungenPage.*, etc.
```

Supported languages:
- **de** - German (source language)
- **en** - English (UK flag)
- **nl** - Dutch (Netherlands flag)
- **ar** - Arabic (UAE flag) - RTL support enabled
- **ru** - Russian (Russia flag)

When adding new UI text:
1. Extend the `Translations` interface in `src/utils/translations.ts`
2. Add entries for all five languages (de, en, nl, ar, ru)
3. Reference via `useLanguage` + `useTranslations`

### RTL Support (Arabic)

Arabic uses right-to-left (RTL) text direction. The `RTLWrapper` component in `App.tsx` automatically:
- Sets `dir="rtl"` on `<html>` when Arabic is selected
- Sets `dir="ltr"` for all other languages
- Updates `lang` attribute accordingly

RTL-specific CSS rules in `index.css` handle:
- Text alignment
- Spacing classes (margins, paddings)
- Flexbox direction reversal
- Positioning (left/right swaps)

### Translation Guidelines

**German (de)** is the source language – German texts should remain unchanged.

**Translation Principles**:
- Use **contextual/idiomatic translations**, not literal word-for-word translations
- Technical terms, job titles, and qualifications require domain-specific translations
- International standards (PRINCE2®, ITIL®, SCRUM®, ISO 27001, GDPR/AVG) remain unchanged
- All translations must consider the **business context** and cultural appropriateness

**Key Terminology Decisions**:

| German | English | Dutch | Arabic | Russian |
|--------|---------|-------|--------|---------|
| Gesetzliche Krankenversicherung (GKV) | Statutory Health Insurance | Wettelijke zorgverzekeraar | التأمين الصحي الحكومي | Государственное медицинское страхование |
| IT-System-Kaufmann (IHK) | Qualified IT Business Professional (IHK) | Gediplomeerd IT-bedrijfsspecialist (IHK) | متخصص أعمال تكنولوجيا المعلومات المعتمد (IHK) | Квалифицированный IT-бизнес-специалист (IHK) |
| Wirtschaftsinformatiker (B.Sc.) | Business Informatics (B.Sc.) | Bedrijfsinformatica (B.Sc.) | بكالوريوس نظم المعلومات الإدارية (B.Sc.) | Бизнес-информатика (B.Sc.) |
| Ausschreibungen | Tender Processes | Aanbestedingen | المناقصات | Тендеры |
| Teilprojektleitung | Sub-Project Manager | Deelprojectleider | مدير مشروع فرعي | Менеджер подпроекта |
| Leistungsscheinkonzeption | Service Level Agreement design | Service level agreements ontwerp | تصميم اتفاقيات مستوى الخدمة | Разработка соглашений об уровне сервиса |

**Dutch-specific rules**:
- Compound words are written as one word: "decennialange" not "decennia-lange"
- Avoid mixing German words into Dutch translations
- English business terms (SLA, KPI, LLM, SPOC) are acceptable in Dutch IT context

**Arabic-specific rules**:
- Use Modern Standard Arabic (فصحى) for professional/business context
- English technical acronyms (SLA, KPI, LLM, SPOC, MVP) are acceptable and commonly used
- Maintain formal business tone appropriate for Gulf region
- Numbers can remain in Western Arabic numerals (1, 2, 3)

**Russian-specific rules**:
- Use formal "вы" (you) form for professional context
- English technical acronyms (SLA, KPI, LLM, SPOC, MVP, EBIT) are acceptable
- Transliterate names: Christian Plath → Кристиан Плат
- Use established Russian IT terminology where available

### Styling & Design System

**Color System (60/30/10 Rule)**:
- 60% Main: Navy (`--color-main`, `navy`) - backgrounds
- 30% Secondary: Warm grays (`--color-secondary*`) - surfaces
- 10% Accent: Gold (`--color-accent*`, `gold`) - CTAs and highlights

**Typography Utilities** (defined in `src/index.css`):
- `.heading-style` - Playfair Display, semi-bold, tight tracking
- `.body-style` - Inter, light, max-width 65ch
- `.nav-style` - Inter, medium weight
- `.display-style` - Playfair Display, bold

**Spacing Utilities**:
- `.section-spacing` - `py-20 md:py-24`
- `.element-spacing` - `mb-8`
- `.large-spacing` - `mb-16`

**Effect Classes**:
- `.glass-morphism` - Semi-transparent cards with blur and shadow
- `.neumorphism-gold` - Premium gold button style with glow
- `.cta-button` - Pre-configured CTA styling
- Animations: `animate-blur-to-clear`, `animate-pulse-line`, `float-animation`, `glow-animation`, `shimmer`

**Rules**:
- Use Tailwind utilities, no new hex colors outside config
- Avoid inline styles except for dynamic values (animationDelay, mouse-position gradients)
- Build new UI on shadcn/ui components with `cn()` from `@/lib/utils`

### Import Alias

Use `@/` for imports from `src/`:
```tsx
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
```

### Forms & Validation

Pattern (see `ContactForm.tsx`):
```tsx
const schema = z.object({ ... });
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
});
```
- Validation messages should be multilingual (`language === 'de' ? ... : ...`)
- Form submissions go to Formspree endpoint

### State & Feedback

- **LanguageContext** for language selection and loading state (`hasCompletedLoading` prevents LoadingScreen from showing again after initial visit)
- **React Query** (QueryClientProvider configured) for async data
- **Toast**: `const { toast } = useToast();` - limit 1 toast at a time

## Coding Conventions

### TypeScript
- Always use `.ts`/`.tsx` files
- Define explicit interfaces for props and complex data structures
- Use the centralized `Translations` interface for i18n typing

### Components
- **Functional components only** (no class components)
- Pages (route targets) → `src/pages/`
- Reusable sections → `src/components/`
- Generic UI elements → build on `src/components/ui/*`
- New hooks → `src/hooks/` with clear return types

### Adding New Sections to Landing Page
1. Create component in `src/components/NewSection.tsx`
2. Add to `Index.tsx` with unique `id` attribute
3. If navigable: add to Header menu + `t.nav.*` translation entry
4. Use `scrollIntoView({ behavior: 'smooth' })` for scroll navigation

### Scroll Animation Pattern
Index.tsx uses IntersectionObserver with `animate-blur-to-clear` class for scroll-triggered section animations.

## SEO & Accessibility

### Per-Page SEO (dynamic)
Subpages update `document.title` and `meta[name="description"]` dynamically via `useEffect` on mount, and restore them on unmount. This works for Google (which executes JS) but not for social-media link previews (which read raw HTML). For full OG-tag support per page, `react-helmet-async` would be needed.

### Structured Data (JSON-LD)
`index.html` includes comprehensive schema.org markup:
- **Organization** - Company info, founder, contact points
- **ProfessionalService** - Local business with geo coordinates
- **Service** - Service catalog with all 6 offerings, each with URL and full description
- **FAQPage** - Common questions for AI search optimization; includes FAQ entries for all 6 product pages (16 questions total)
- **WebSite** - Site metadata

### Semantic HTML
- `<main>` wraps page content in Index.tsx
- `<nav>` with `aria-label` for navigation menus
- `<article>` for product cards and feature items
- `<address>` for contact information
- `<section>` with proper `id` attributes for scroll navigation

### Accessibility (a11y)
- `aria-label` on interactive elements (buttons, navigation)
- `aria-hidden="true"` on decorative elements (icons, backgrounds)
- `aria-pressed` on toggle buttons (language switcher)
- `aria-expanded` and `aria-controls` on mobile menu
- `role` attributes where semantic HTML isn't sufficient
- Descriptive `alt` texts on all meaningful images

### AI Search Optimization
- `robots.txt` allows major AI crawlers (GPTBot, ChatGPT-User, Anthropic-AI, PerplexityBot, etc.)
- FAQPage schema provides structured Q&A for AI understanding
- Clear, well-structured content hierarchy
- Comprehensive meta descriptions and keywords

### Files
- `public/robots.txt` - Crawler permissions
- `public/sitemap.xml` - Site structure for search engines; includes `/`, `/kontakt`, `/datenschutz`, `/ueber-mich`, all 6 product detail pages (priority 0.9: `/ki-starthilfe`, `/projektmanagement`, `/ki-prozess-optimierung`, `/ki-marketing-sales`, `/ki-schulungen`, `/ki-ausschreibungen`) and all 4 landing page scroll anchors; every entry has 5 language variants + `x-default`

## Content Guidelines

### Consistent Messaging
- **Experience years**: Always use the following across all languages – never "15 years":
  - German: "über 10 Jahre"
  - English: "over 10 years"
  - Dutch: "meer dan 10 jaar"
  - Arabic: "أكثر من 10 سنوات"
  - Russian: "более 10 лет"
- The founder's consulting experience is consistently stated as "over 10 years" across all languages

## Project-Specific Notes

- `References.tsx` and `Resources.tsx` exist but are not integrated in Index.tsx (German-only, not in i18n)
- Product cards in `Products.tsx`: **all 6 products** are now linked and fully multilingual. The hover label "Mehr erfahren" uses `t.aboutMe.learnMore` (already translated in all 5 languages).
- Language defaults to 'de' and is not persisted across page reloads
- `LoadingScreen.tsx` shows initial splash with language selection (5 flags: DE, EN, NL, AR, RU) before main content; only displays once per session (controlled by `hasCompletedLoading` in LanguageContext) - navigating back from subpages skips the loading screen. Logo: `/logos/logo1.jpg`
- `Hero.tsx` has dynamic mouse-position-based gradient background via useEffect; founder description text is left-aligned for better readability. Background watermark logo: `/logos/logo2.jpg` (light ghost variant, blurred)
- `App.css` contains legacy Vite template styles (mostly unused, can be ignored)
- `NotFound.tsx` uses the site's design system with Header/Footer and supports all five languages
- `AboutMe.tsx` features an interactive project timeline with scroll animations, expandable items, and mouse-tracking gradient; linked from Hero.tsx founder card via "Mehr erfahren". **Note**: Uses inline language ternaries (not `t.*`) for translations — all 5 languages (de/en/nl/ar/ru) must be explicitly handled; missing cases fall through to the last branch (previously caused Dutch to show for Arabic/Russian)
- `Header.tsx` uses `useLocation()` to detect the current route; navigation links and CTA button are only shown on the homepage (`/`), while the LanguageSwitcher remains visible on all pages. Logo: `/logos/logo1.jpg` (dark navy variant)
- `Contact.tsx` dialog description text is left-aligned within centered card for better readability
- `KIStarthilfe.tsx` is the **reference implementation** for product detail pages. Uses: mouse-tracking gradient, IntersectionObserver scroll animations, inline SVG decorations, translation namespace `t.kiStarthilfePage.*`, dynamic `document.title`/meta-description per language, `<Link>` card in Products.tsx with hover arrow indicator. Use the `/new-product-page` skill to create further product pages following this pattern.
- `Projektmanagement.tsx` – `/projektmanagement` – DashboardSVG + 3 Benefit-Cards + Fokus/Setup/Ergebnis-Strip. Namespace: `t.projektmanagementPage.*`
- `KIProzessOptimierung.tsx` – `/ki-prozess-optimierung` – FlowSVG + GearSVG + 6-stufiger nummerierter Prozess (2×3 Grid). Namespace: `t.kiGeschaeftsoptimierungPage.*`
- `KIMarketingSales.tsx` – `/ki-marketing-sales` – FunnelSVG + MegaphoneAccentSVG + 4 thematische Blöcke mit Sub-Bullets (2×2 Grid). Namespace: `t.kiMarketingSalesPage.*`
- `KISchulungen.tsx` – `/ki-schulungen` – GrowthTreeSVG + BookAccentSVG + 3 Säulen (Kulturwandel, Schulungen, Integration). Namespace: `t.kiSchulungenPage.*`
- `KIAusschreibungen.tsx` – `/ki-ausschreibungen` – DocumentStackSVG + ScaleAccentSVG + Pain-Points-Grid + 2 Seiten-Karten (Kunde / Provider). Namespace: `t.kiAusschreibungenPage.*`

### Logo Assets

Logos are stored in `public/logos/` (served as static assets):

| File | Description | Used in |
|------|-------------|---------|
| `logo1111.png` | Transparent, outlined CPCC monogram, gold lion, gold PLATHTECH text | Header, LoadingScreen, Favicon |
| `logo2222.png` | Transparent, ghost/faded CPCC, gold lion, gold PLATHTECH text | Footer large decorative logo, Hero background watermark (4% opacity, blur-md) |
| `logo33.png` | Transparent, black CPCC, grey lion — for light backgrounds | Reserve / print use |

### Language Switcher Flags

`LanguageSwitcher.tsx` and `LoadingScreen.tsx` display CSS-based flag icons:
- **German (de)** - Germany flag (black-red-gold horizontal stripes)
- **English (en)** - Union Jack (UK flag with crosses)
- **Dutch (nl)** - Netherlands flag (red-white-blue horizontal stripes)
- **Arabic (ar)** - UAE flag (green-white-black horizontal stripes with red vertical bar on left)
- **Russian (ru)** - Russia flag (white-blue-red horizontal stripes)

**Responsive sizing** (`LanguageSwitcher.tsx`): flags use `w-7 h-5` on mobile and `w-10 h-7 md:` on desktop; spacing is `space-x-1` on mobile and `space-x-3 md:` on desktop. This ensures all 5 flags fit in the mobile header alongside the hamburger button.

### Icon Usage (Lucide React)

Icons are chosen to semantically match their context:

**Products.tsx** (service cards):
- KI-Starthilfe → `Rocket` (launch/start metaphor)
- Projektmanagement 3.0 → `LayoutDashboard` (PM dashboard)
- KI-Geschäftsoptimierung → `TrendingUp` (optimization/growth)
- KI in Marketing & Sales → `Megaphone` (marketing)
- KI-Schulungen & Transformation → `GraduationCap` (education)
- KI in Ausschreibungen → `FileText` (documents)
- CTA Button → 📅 emoji (scheduling appointment)

**About.tsx** (three pillars):
- Strategische Tiefe → `Target` (strategic focus)
- Technologische Innovation → `Lightbulb` (innovation/ideas)
- Menschliche Expertise → `Users` (human element)

**AboutMe.tsx** (timeline):
- AI projects → `Bot`, `Cpu` with gold highlight
- Classic consulting → `Briefcase`, `Brain`, `Users`
- Credentials → `Building2` (industries), `Award` (certifications), `GraduationCap` (education)

**KIStarthilfe.tsx** (service detail page):
- Hero background decoration → inline `NeuralNetSVG` (gold nodes/connections, 6% opacity)
- Hero decorative element → `Rocket` (oversized, 5% opacity)
- Highlight card → inline `CompassSVG` + `CircuitSVG`
- Process steps → `Search` (Focus), `Map` (Setup), `Rocket` (Result)
- Core questions → `Target` (needs), `TrendingUp` (strategy), `Users` (enablement)
- Benefits section → `CheckCircle2`, `Brain`
- CTA section → `Rocket`, `ChevronRight`

**Projektmanagement.tsx** (service detail page):
- Hero background → inline `DashboardSVG` (grid + cards, 6% opacity)
- Hero decorative element → `LayoutDashboard` (oversized, 5% opacity)
- Highlight card corner → inline `CalendarCornerSVG`
- Benefits → `Clock` (Meetings), `Zap` (Delegation), `CheckSquare` (Tracking)
- CTA section → `LayoutDashboard`, `ChevronRight`

**KIProzessOptimierung.tsx** (service detail page):
- Hero background → inline `ProcessFlowSVG` (6 nodes with arrows, 6% opacity)
- Hero decorative element → `TrendingUp` (oversized, 5% opacity)
- Highlight card corner → inline `GearSVG`
- Process steps → `Search`, `Shield`, `Wrench`, `Calculator`, `Lightbulb`, `Rocket`
- CTA section → `TrendingUp`, `ChevronRight`

**KIMarketingSales.tsx** (service detail page):
- Hero background → inline `FunnelSVG` (funnel + trend line, 6% opacity)
- Hero decorative element → `Megaphone` (oversized, 5% opacity)
- Highlight card corner → inline `MegaphoneAccentSVG`
- Theme blocks → `BarChart2` (Analytics), `Zap` (Lead-Gen), `FileText` (Content), `Users` (Enablement)
- Result section → `TrendingUp`
- CTA section → `Megaphone`, `ChevronRight`

**KISchulungen.tsx** (service detail page):
- Hero background → inline `GrowthTreeSVG` (tree with branches, 6% opacity)
- Hero decorative element → `GraduationCap` (oversized, 5% opacity)
- Highlight card corner → inline `BookAccentSVG`
- Pillars → `RefreshCw` (Kulturwandel), `BookOpen` (Schulungen), `Sparkles` (Integration)
- Result section → `Brain`
- CTA section → `GraduationCap`, `ChevronRight`

**KIAusschreibungen.tsx** (service detail page):
- Hero background → inline `DocumentStackSVG` (stacked documents + scale, 6% opacity)
- Hero decorative element → `FileText` (oversized, 5% opacity)
- Highlight card corner → inline `ScaleAccentSVG`
- Pain points → `AlertCircle`
- Side cards → `Building2` (Kunde), `Briefcase` (Provider), `CheckCircle2` (items)
- Result section → `ShieldCheck`
- CTA section → `Scale`, `ChevronRight`
