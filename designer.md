# designer.md — Golden Years of Wisdom
## Senior Citizen Care Home · Design System & Implementation Guide

> **For AI IDE use.** This file is the single source of truth for all visual and interaction decisions. Every color, type choice, spacing unit, animation, and component described here should be followed exactly. Do not substitute defaults.

---

## 1. Design Intent

This is not a medical facility website. It is a **boutique hospitality experience** for dignified senior living. The visual language must feel like a **sun-warmed private residence** — calm, trustworthy, spiritually grounded — not a clinical care centre. Every visual decision should answer: *"Does this feel like a place someone's loved parent would want to live?"*

**Audience:** Families of seniors (35–55) in Dhaka, Bangladesh; and seniors themselves (55+). Bengali-literate. Value community, dignity, faith, and family connection.

**Single page job per section:**
- Home → Evoke trust and warmth immediately
- About → Tell the project story with a timeline of hope
- Studio Apartments → Sell comfort and independence
- Contact → Remove friction from reaching out

---

## 2. Token System

### 2.1 Color Palette

```css
:root {
  /* Primary */
  --color-teal:        #2A9D8F;   /* dominant hero bg, nav bg, footer bg */
  --color-teal-dark:   #1B7A6E;   /* deeper section backgrounds */
  --color-teal-light:  #3DB8A8;   /* hover states, subtle accents */

  /* Neutrals */
  --color-cream:       #F5F0E8;   /* page background, card backgrounds */
  --color-cream-warm:  #EDE7D9;   /* alternating section bg */
  --color-white:       #FFFFFF;

  /* Accents */
  --color-gold:        #C9960A;   /* "Golden Years of Wisdom" title, CTAs */
  --color-gold-light:  #E8B42A;   /* hover on gold elements */
  --color-brown:       #8B5E3C;   /* logo icon, subheading accents, warm tags */
  --color-magenta:     #E040A0;   /* decorative border trim, highlight tags */
  --color-forest:      #2D7A2D;   /* Bengali section subheadings, check icons */

  /* Text */
  --color-charcoal:    #2C2C2C;   /* primary body text */
  --color-muted:       #6B6B6B;   /* secondary/caption text */
  --color-white-soft:  #F0EEEA;   /* text on dark teal backgrounds */

  /* Semantic */
  --color-bg-primary:  var(--color-cream);
  --color-bg-dark:     var(--color-teal);
  --color-border-accent: var(--color-magenta);
}
```

### 2.2 Typography

```css
/* Import via next/font or Google Fonts */

/* Display — Brand title "Golden Years of Wisdom" */
/* Use: Playfair Display (serif, decorative weight) */
--font-display: 'Playfair Display', Georgia, serif;

/* Headings — Section titles, card headings */
/* Use: Lora (warm serif, readable at all sizes) */
--font-heading: 'Lora', Georgia, serif;

/* Body — Paragraphs, descriptions */
/* Use: Inter (clean, accessible, highly legible) */
--font-body: 'Inter', system-ui, sans-serif;

/* Bengali text — Brochure content sections */
/* Use: Hind Siliguri (excellent Bengali support) */
--font-bengali: 'Hind Siliguri', sans-serif;
```

**Type Scale:**

| Token | Size | Weight | Usage |
|---|---|---|---|
| `--text-display` | clamp(2.8rem, 5vw, 5rem) | 700 | "Golden Years of Wisdom" hero |
| `--text-h1` | clamp(2rem, 3.5vw, 3.2rem) | 600 | Page section titles |
| `--text-h2` | clamp(1.5rem, 2.5vw, 2.2rem) | 600 | Card headings |
| `--text-h3` | 1.25rem | 600 | Sub-section labels |
| `--text-body-lg` | 1.125rem | 400 | Lead paragraphs |
| `--text-body` | 1rem | 400 | Standard body text |
| `--text-caption` | 0.875rem | 400 | Labels, tags, footnotes |
| `--text-eyebrow` | 0.75rem | 600 | "OUR PHILOSOPHY" uppercase labels |

### 2.3 Spacing Scale

```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

### 2.4 Border Radius

```css
:root {
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   32px;
  --radius-full: 9999px;
}
```

### 2.5 Shadow System

```css
:root {
  --shadow-card:   0 2px 20px rgba(42, 157, 143, 0.08);
  --shadow-hover:  0 8px 40px rgba(42, 157, 143, 0.18);
  --shadow-modal:  0 24px 80px rgba(0, 0, 0, 0.24);
}
```

---

## 3. Signature Element — The "Mandala Reveal"

The single unforgettable design element is the **arabesque/mandala watermark pattern** seen on cream backgrounds in the brochure. This geometric motif appears as a **subtle SVG background texture** on all cream sections, and is animated on scroll with a slow **radial fade-in** (opacity 0 → 0.06, scale 0.95 → 1.0, duration 1.2s ease-out). It should feel like the room is breathing.

- Use an SVG pattern tile (geometric Islamic/arabesque style, single colour `#C9960A` at very low opacity)
- Apply as `background-image: url(mandala-tile.svg)` on `.section-cream`
- Animate entrance with GSAP ScrollTrigger

---

## 4. Layout System

### 4.1 Grid

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* 2-column grid for feature cards */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-8); }

/* 3-column grid for amenity cards */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }

/* 4-column for timeline */
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); }

/* Responsive breakpoints */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}
```

### 4.2 Section Rhythm

Every section alternates between:
- **Teal dark background** (hero, footer, CTA strips) — white/cream text
- **Cream background** (philosophy, features, eligibility) — charcoal text

Sections have `padding: var(--space-24) 0` on desktop, `var(--space-16) 0` on mobile.

---

## 5. Component Specifications

### 5.1 Navigation

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo Icon]  Golden Years of Wisdom   Home  About  Studios  Contact  [Call Now]  │
└─────────────────────────────────────────────────────────────────┘
```

- Background: `var(--color-teal)` on hero scroll, transitions to `var(--color-teal-dark)` with `backdrop-filter: blur(12px)` on scroll
- Logo text: `var(--font-display)`, `var(--color-gold)`, 1.5rem
- Nav links: `var(--font-body)`, white, 0.95rem, weight 500
- Active underline: 2px solid `var(--color-gold)`, animated slide-in
- CTA "Call Now": pill shape, `background: var(--color-gold)`, `color: var(--color-teal-dark)`, font-weight 600
- Mobile: hamburger → full-screen overlay, teal background, links stack vertically

**GSAP:** Nav fades in from top on page load (y: -20 → 0, opacity: 0 → 1, duration 0.6s, ease "power2.out")

### 5.2 Hero Section (Home)

```
┌────────────────────────────────────────────┐
│  [Full-bleed photo: elderly couple, park]  │
│  ─── dark teal overlay (opacity 0.55) ───  │
│                                            │
│         [Circle Logo Badge]                │
│                                            │
│    Golden Years of Wisdom  (gold display)  │
│      Senior Citizen Care Home  (white h2)  │
│                                            │
│    [Learn More]    [Schedule a Visit]      │
│                                            │
│           ▼ (scroll indicator)             │
└────────────────────────────────────────────┘
```

- Full viewport height (`100svh`)
- Photo: object-fit cover, parallax scroll effect via GSAP (y moves at 30% scroll speed)
- Logo badge: white circle, drops in with `scale: 0.8 → 1.0, opacity: 0 → 1` on load (0.4s delay)
- Title "Golden Years of Wisdom": `var(--font-display)`, `var(--color-gold)`, display size, animates letter by letter with GSAP SplitText (stagger 0.04s)
- Subtitle: white, h2 size, fades in 0.8s delay
- Buttons:
  - "Learn More": filled `var(--color-brown)`, white text, `border-radius: var(--radius-full)`
  - "Schedule a Visit": outlined white border, white text, same radius
  - Both: hover scale 1.03, box-shadow transition
- Scroll arrow: gentle `translateY` bounce animation, CSS keyframes

### 5.3 Philosophy / Feature Cards (Home)

```
┌──────────────────────────────────────────────────┐
│  OUR PHILOSOPHY  (eyebrow, magenta)              │
│  A Boutique Approach to Care  (h1, teal)         │
│  [subtitle paragraph]                            │
│                                                  │
│  ┌────────────────┐  ┌────────────────┐          │
│  │ [icon circle]  │  │ [icon circle]  │          │
│  │ Safety & Care  │  │ Community      │          │
│  │ [description]  │  │ [description]  │          │
│  │ [tag] [tag]    │  │ [tag] [tag]    │          │
│  └────────────────┘  └────────────────┘          │
│  ┌────────────────┐  ┌────────────────┐          │
│  │ Spiritual Peace│  │ Modern Apts    │          │
│  └────────────────┘  └────────────────┘          │
└──────────────────────────────────────────────────┘
```

- Section bg: `var(--color-cream)` with mandala SVG texture
- Eyebrow label: uppercase, `var(--color-magenta)`, letter-spacing 0.15em, font-weight 600
- Section title: `var(--font-heading)`, `var(--color-teal)`
- Cards: white bg, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-card)`
- Card left border: 3px solid `var(--color-magenta)` on left edge
- Icon circles: `background: var(--color-teal)` at 15% opacity, icon in `var(--color-teal)`
- Card headings: `var(--color-teal)`, `var(--font-heading)`
- Tags: pill shape, `background: var(--color-cream-warm)`, `color: var(--color-charcoal)`, `border: 1px solid #DDD`

**GSAP ScrollTrigger:** Cards animate in staggered: each card `y: 40 → 0, opacity: 0 → 1`, stagger 0.15s, trigger when 80% in viewport.

### 5.4 Quote Strip (Home)

```
┌─────────────────────────────────────────────────┐
│  Background: var(--color-cream-warm)            │
│  Decorative large " " quote marks (teal, 20%)   │
│                                                  │
│  "We don't just add years to life..."           │
│         — Spectrum EduCare Limited              │
└─────────────────────────────────────────────────┘
```

- Quote text: `var(--font-display)`, `var(--color-charcoal)`, italic, 1.6rem
- Attribution: `var(--color-gold)`, font-weight 600, small caps
- Large `"` decorative marks: `var(--color-teal)`, opacity 0.12, position absolute, size ~8rem

### 5.5 About Page — Vision Section

```
┌───────────────────────────────────────────────────┐
│  [Photo: seniors smiling, 45% width]  [Text block]│
│                                                   │
│  [Text block content]                             │
│  Our Vision for Dignified Living  (h2, teal)      │
│  [paragraphs]                                     │
│  [Dignity First badge — teal outline pill]        │
└───────────────────────────────────────────────────┘
```

- Image: border-radius `var(--radius-lg)`, box-shadow, slight rotation on hover (`rotate: 1deg`)
- Text block: plain white card, padding generous
- On mobile: stacks vertically, image on top

### 5.6 Timeline (About Page)

```
┌────────────────────────────────────────────────────────┐
│           The Journey Ahead                            │
│                                                        │
│  [2026]     [2027]     [2028]     [2031]               │
│  Land Acq.  Filling    Construct  Completion           │
│  [desc]     [desc]     [desc]     [desc]               │
└────────────────────────────────────────────────────────┘
```

- Year labels: `var(--color-gold)`, `var(--font-display)`, bold
- Icon circles: alternating `var(--color-teal)` and `var(--color-gold)` backgrounds
- Connecting horizontal line: 1px dashed `var(--color-teal)` at 40% opacity, runs between all 4
- **GSAP:** On scroll enter, connecting line draws left-to-right (`scaleX: 0 → 1`), then each card fades/slides up with 0.2s stagger

### 5.7 Challenge & Approach Cards (About)

```
┌───────────────────┐  ┌────────────────────┐
│ 🔍 The Challenge  │  │ 🤝 Our Approach    │
│ [text]            │  │ [text]             │
└───────────────────┘  └────────────────────┘
```

- Left card: cream bg, `border: 1px solid #E0D8CC`
- Right card: `background: var(--color-teal)` at 8% opacity, teal border
- Both: `border-radius: var(--radius-lg)`, generous padding

### 5.8 Studio Apartments Page

**Hero:** Full-width image strip with teal overlay and centered white title

**Refined Living Spaces section:**
```
┌─────────────────────────────────────────────────┐
│  [Text with checklist]    [Apartment Photo]     │
│                                                  │
│  ✓ 600 sq ft floor plan                        │
│  ✓ Sleeping area                               │
│  ✓ Dining alcove                               │
│  ✓ Accessible bathroom                         │
│  ✓ Private balcony                             │
│  ✓ Kitchenette                                 │
│  ✓ Premium flooring                            │
└─────────────────────────────────────────────────┘
```

- Checklist icons: circle border in `var(--color-teal)`, not filled checkboxes
- Photo: right-aligned, `border-radius: var(--radius-lg)`, natural shadow

**Amenities Grid (3-col):**
- Cards with top border `3px solid var(--color-magenta)` on hover (transitions on hover)
- Icon in `var(--color-brown)`

**Eligibility Section:**
- Centered, cream bg
- Each criterion: white pill card with `✓` in `var(--color-forest)` circle
- CTA button: `var(--color-teal)`, white text, full-radius pill, large padding

### 5.9 Contact Page

**Hero banner:** Teal with cross/plus `+` pattern (CSS background-image, subtle)

**Get in Touch Card:**
- Left card (contact info): white bg, left border `3px solid var(--color-magenta)`
- Icon circles: `var(--color-teal)` at 15% opacity
- Right: Map embed placeholder (OpenStreetMap iframe or Google Maps embed)

**Inquiry Form:**
- Input fields: `border: 1.5px solid #DDD`, focus `border-color: var(--color-teal)`, focus ring `box-shadow: 0 0 0 3px rgba(42,157,143,0.2)`
- Labels: `var(--color-charcoal)`, weight 500, `var(--font-body)` small
- Submit button: `var(--color-gold)`, `color: var(--color-teal-dark)`, weight 700, pill shape, hover `background: var(--color-gold-light)`

### 5.10 Footer

```
┌─────────────────────────────────────────────────┐
│  Background: var(--color-teal-dark)             │
│                                                  │
│  [Logo icon]                                    │
│  Golden Years of Wisdom  (gold, display font)   │
│  Dignity, warmth, and care for those...         │
│                                                  │
│  Privacy Policy | Terms | Careers | Volunteer   │
│                                                  │
│  © 2024 Golden Years of Wisdom. All rights...   │
└─────────────────────────────────────────────────┘
```

- Footer bg: `var(--color-teal-dark)`
- Brand name: `var(--color-gold)`, display font
- Tagline: white at 80% opacity
- Links: white, `hover: var(--color-gold)`, transition 0.2s

---

## 6. Animation Specification (GSAP)

### 6.1 Global Principles

- All animations respect `prefers-reduced-motion` — wrap all GSAP in a media query check or use `matchMedia`
- Duration range: fast micro (0.2s) → medium reveal (0.6s) → slow ambient (1.2s)
- Default ease: `"power2.out"` for reveals, `"power3.inOut"` for page transitions
- No animation on first contentful paint — hero content begins animating after LCP

### 6.2 Page Load Sequence (Home)

```javascript
// Timeline order on DOMContentLoaded
const tl = gsap.timeline({ delay: 0.1 });

tl.from('.nav', { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
  .from('.hero-logo-badge', { scale: 0.7, opacity: 0, duration: 0.5 }, '-=0.2')
  .from('.hero-title .char', { 
    opacity: 0, y: 20, 
    stagger: 0.04, duration: 0.6, ease: 'power3.out' 
  }, '-=0.1')
  .from('.hero-subtitle', { opacity: 0, y: 15, duration: 0.5 }, '-=0.3')
  .from('.hero-cta-group', { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
  .from('.hero-scroll-arrow', { opacity: 0, duration: 0.4 }, '-=0.1');
```

### 6.3 Scroll-triggered Reveals

```javascript
// Feature cards — staggered fade up
gsap.from('.feature-card', {
  scrollTrigger: { trigger: '.features-section', start: 'top 80%' },
  y: 50, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out'
});

// Timeline draw
gsap.from('.timeline-line', {
  scrollTrigger: { trigger: '.timeline-section', start: 'top 70%', scrub: false },
  scaleX: 0, transformOrigin: 'left center', duration: 1.2, ease: 'power2.inOut'
});

gsap.from('.timeline-card', {
  scrollTrigger: { trigger: '.timeline-section', start: 'top 70%' },
  y: 40, opacity: 0, stagger: 0.2, duration: 0.7, delay: 0.4
});

// Section headings
gsap.from('.section-heading', {
  scrollTrigger: { trigger: '.section-heading', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
});

// Mandala texture fade
gsap.from('.mandala-bg', {
  scrollTrigger: { trigger: '.mandala-bg', start: 'top 90%' },
  opacity: 0, scale: 0.97, duration: 1.2, ease: 'power1.out'
});
```

### 6.4 Hero Parallax

```javascript
gsap.to('.hero-image', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  y: '30%'
});
```

### 6.5 Nav Scroll Behavior

```javascript
ScrollTrigger.create({
  start: 'top -60px',
  onUpdate: (self) => {
    if (self.direction === 1) {
      gsap.to('.nav', { backgroundColor: 'rgba(27,122,110,0.95)', 
        backdropFilter: 'blur(12px)', duration: 0.3 });
    }
  }
});
```

### 6.6 Card Hover Micro-interactions (CSS)

```css
.feature-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
```

---

## 7. Iconography

- Use **Lucide React** icon set throughout
- Icon wrapper: circular bg `rgba(42,157,143,0.12)`, size 48px × 48px
- Icons rendered at 24px, color `var(--color-teal)` in light sections, white in dark sections
- Exception: brown sections use `var(--color-brown)`

---

## 8. Imagery Guidelines

- Hero photos: warm, natural light, outdoor or sunlit interior, elderly people looking joyful (not posed clinically)
- Always apply `object-fit: cover` and a dark teal overlay (`rgba(27,122,110,0.5)`) on hero images
- Apartment photos: bright, minimal, warm-toned interiors
- Use `next/image` with priority flag on hero, lazy loading on all others
- Alt text must be descriptive and in English; provide Bengali alt text as `aria-label` if section is Bengali

---

## 9. Decorative Patterns

### 9.1 Mandala/Arabesque Texture

Place as SVG background tile on all `.section-cream` and `.section-cream-warm` elements:
```css
.section-cream {
  background-image: url('/patterns/arabesque-tile.svg');
  background-size: 200px 200px;
  background-color: var(--color-cream);
  /* SVG tile color: #C9960A at 5% opacity */
}
```

### 9.2 Contact Page Plus Pattern

```css
.contact-hero {
  background-image: 
    radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 32px 32px;
  background-color: var(--color-teal);
}
```

### 9.3 About Page Hero — Circle Pattern

```css
.about-hero {
  background-image: 
    repeating-radial-gradient(
      circle at 50% 50%, 
      transparent 30px, 
      rgba(255,255,255,0.06) 31px, 
      rgba(255,255,255,0.06) 32px, 
      transparent 33px
    );
  background-size: 80px 80px;
}
```

---

## 10. Responsive Breakpoints

```css
/* Mobile first */
/* sm */  @media (min-width: 480px)  { }
/* md */  @media (min-width: 768px)  { }
/* lg */  @media (min-width: 1024px) { }
/* xl */  @media (min-width: 1280px) { }
```

Mobile behavior:
- Nav collapses to hamburger
- Hero text scales down (display font uses `clamp`)
- All grids → single column
- Timeline becomes vertical stack
- Cards full width

---

## 11. Accessibility Requirements

- Colour contrast: all text/background combinations must pass WCAG AA (4.5:1 minimum)
- Focus rings: `outline: 2px solid var(--color-gold); outline-offset: 3px` on all interactive elements
- `prefers-reduced-motion`: disable all GSAP animations, keep CSS transitions at `0.1s`
- All images: descriptive alt text
- Form labels: explicit `for`/`id` pairing
- Skip link: first focusable element on every page

---

## 12. File Structure (Next.js)

```
/app
  /page.tsx              (Home)
  /about/page.tsx
  /studio-apartments/page.tsx
  /contact/page.tsx
  /layout.tsx            (Nav + Footer, font imports)
  /globals.css           (CSS variables, base reset)

/components
  /ui/
    Button.tsx
    Card.tsx
    FeatureCard.tsx
    SectionEyebrow.tsx
    TimelineCard.tsx
  /sections/
    Hero.tsx
    Philosophy.tsx
    QuoteStrip.tsx
    Vision.tsx
    Timeline.tsx
    StudioFeatures.tsx
    Amenities.tsx
    Eligibility.tsx
    ContactForm.tsx
    Footer.tsx
  /layout/
    Navbar.tsx

/public
  /patterns/
    arabesque-tile.svg
  /images/
    hero-elderly-couple.jpg
    apartment-interior.jpg
    seniors-smiling.jpg

/lib
  /animations.ts         (GSAP timeline configs, exported hooks)
  /useScrollAnimation.ts (custom hook wrapping ScrollTrigger)
```

---

## 13. Key Content Strings (English)

| Key | Value |
|---|---|
| brand.name | Golden Years of Wisdom |
| brand.tagline | Senior Citizen Care Home |
| brand.subtagline | Dignity, warmth, and care for those who built our world. |
| hero.cta1 | Learn More |
| hero.cta2 | Schedule a Visit |
| philosophy.eyebrow | OUR PHILOSOPHY |
| philosophy.title | A Boutique Approach to Care |
| philosophy.subtitle | We believe in dignity, warmth, and maintaining a high quality of life through tailored services and a supportive community. |
| quote.text | We don't just add years to life, we add life to years. Every detail is designed with dignity and joy in mind. |
| quote.attr | — Spectrum EduCare Limited |
| contact.email | care@goldenyearsofwisdom.com |
| contact.phone1 | +880 123 456 7890 |
| contact.phone2 | +880 987 654 3210 |
| contact.location | Vakurta, Savar, Dhaka |
| contact.office | 41/1, Shantinagar (Khadem Tower), Dhaka-1217 |
