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

## Architecture Overview

This is a **React 18 + TypeScript + Vite** single-page application for Christian Plath Consulting Company B.V. - a boutique consulting firm landing page.

### Key Directories

- `src/pages/` - Route components (Index, ContactForm, Privacy, AboutMe, NotFound)
- `src/components/` - Landing page sections (Header, Hero, About, KISparring, Products, Contact, Footer)
- `src/components/ui/` - shadcn/ui components (60+ pre-built components)
- `src/contexts/` - React Context (LanguageContext for i18n)
- `src/utils/` - translations.ts (strongly-typed i18n system)
- `src/hooks/` - Custom hooks (use-toast, use-mobile)
- `src/lib/utils.ts` - `cn()` helper (clsx + tailwind-merge)

### Routing (React Router v6)

```
/              → Index (one-page landing with scroll sections)
/datenschutz   → Privacy policy
/kontakt       → Contact form
/ueber-mich    → AboutMe (founder profile, project experience timeline)
*              → NotFound (404)
```

Section IDs for scroll navigation: `about`, `ki-sparring`, `products`, `contact`

### Multi-Language System (DE/EN/NL/AR/RU)

Custom strongly-typed i18n implementation (no external library):

```tsx
const { language } = useLanguage();
const t = useTranslations(language);
// Access: t.hero.title, t.nav.about, t.contactForm.fields.name, t.aboutMe.projects.*, etc.
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

### Structured Data (JSON-LD)
`index.html` includes comprehensive schema.org markup:
- **Organization** - Company info, founder, contact points
- **ProfessionalService** - Local business with geo coordinates
- **Service** - Service catalog with all offerings
- **FAQPage** - Common questions for AI search optimization
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
- `public/sitemap.xml` - Site structure for search engines

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
- Product cards in `Products.tsx` are display-only (no detail pages exist)
- Language defaults to 'de' and is not persisted across page reloads
- `LoadingScreen.tsx` shows initial splash with language selection (5 flags: DE, EN, NL, AR, RU) before main content; only displays once per session (controlled by `hasCompletedLoading` in LanguageContext) - navigating back from subpages skips the loading screen
- `Hero.tsx` has dynamic mouse-position-based gradient background via useEffect; founder description text is left-aligned for better readability
- `App.css` contains legacy Vite template styles (mostly unused, can be ignored)
- `NotFound.tsx` uses the site's design system with Header/Footer and supports all five languages
- `AboutMe.tsx` features an interactive project timeline with scroll animations, expandable items, and mouse-tracking gradient; linked from Hero.tsx founder card via "Mehr erfahren"
- `Header.tsx` uses `useLocation()` to detect the current route; navigation links and CTA button are only shown on the homepage (`/`), while the LanguageSwitcher remains visible on all pages
- `Contact.tsx` dialog description text is left-aligned within centered card for better readability

### Language Switcher Flags

`LanguageSwitcher.tsx` and `LoadingScreen.tsx` display CSS-based flag icons:
- **German (de)** - Germany flag (black-red-gold horizontal stripes)
- **English (en)** - Union Jack (UK flag with crosses)
- **Dutch (nl)** - Netherlands flag (red-white-blue horizontal stripes)
- **Arabic (ar)** - UAE flag (green-white-black horizontal stripes with red vertical bar on left)
- **Russian (ru)** - Russia flag (white-blue-red horizontal stripes)

### Icon Usage (Lucide React)

Icons are chosen to semantically match their context:

**Products.tsx** (service cards):
- KI-Starthilfe → `Rocket` (launch/start metaphor)
- Projektmanagement 3.0 → `LayoutDashboard` (PM dashboard)
- KI-Prozess-Optimierung → `TrendingUp` (optimization/growth)
- KI in Marketing & Sales → `Megaphone` (marketing)
- KI-Schulungen → `GraduationCap` (education)
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
