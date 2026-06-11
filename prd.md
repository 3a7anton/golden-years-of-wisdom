# PRD — Golden Years of Wisdom Website
## Product Requirements Document · v1.0

**Project:** Golden Years of Wisdom — Senior Citizen Care Home Website  
**Initiated by:** Spectrum EduCare Limited  
**Tech Stack:** Next.js 14 (App Router), GSAP + ScrollTrigger, Tailwind CSS (utility layer only), TypeScript  
**Design Reference:** `designer.md` (companion file — must be read before any implementation)  
**Status:** Ready for Development

---

## 1. Executive Summary

Build a 4-page marketing and lead-generation website for **Golden Years of Wisdom**, a boutique senior citizen care home project by Spectrum EduCare Limited. The facility is currently in pre-construction phase (land acquisition stage, target completion 2031) in Vakurta, Savar, Dhaka, Bangladesh.

The website's primary business goal is to **capture early interest from families** who want to secure a studio apartment for their parents, and to **build trust** that this project is legitimate, dignified, and community-oriented — not a clinical facility.

Secondary goal: Position Spectrum EduCare Limited as a credible, values-driven organisation.

---

## 2. Project Context

| Attribute | Detail |
|---|---|
| **Organisation** | Spectrum EduCare Limited |
| **Project Name** | Golden Years of Wisdom |
| **Category** | Senior Citizen Care Home |
| **Project Site** | Vakurta (between Basila & Amin Bazar), Savar, Dhaka |
| **Head Office** | 41/1, Shantinagar (Khadem Tower), Dhaka-1217 |
| **Phone** | 01911596109 / 01726208154 |
| **Email** | spectrumeducareltd@gmail.com |
| **Timeline** | 2026 land finalisation → 2027 filling → 2028 construction → 2031 completion |
| **Audience** | Families of seniors (35–55), seniors themselves (55+), Bengali-literate, Dhaka metro area |
| **Investment angle** | Studio apartments available for purchase + rental income potential |

---

## 3. Pages & URL Structure

| Page | Route | Priority |
|---|---|---|
| Home | `/` | P0 |
| About Us | `/about` | P0 |
| Studio Apartments | `/studio-apartments` | P0 |
| Contact Us | `/contact` | P0 |
| Privacy Policy | `/privacy` | P1 (simple page) |
| Terms of Service | `/terms` | P1 (simple page) |
| Careers | `/careers` | P2 (placeholder) |
| Volunteer | `/volunteer` | P2 (placeholder) |

---

## 4. Page-by-Page Requirements

---

### 4.1 Home Page (`/`)

**Purpose:** First impression. Evoke emotional trust, communicate the philosophy, and push visitors toward scheduling a visit or learning more.

#### 4.1.1 Navigation (shared across all pages)

**Requirements:**
- Logo (icon + "Golden Years of Wisdom" text) on left
- Nav links: Home, About Us, Studio Apartments, Contact Us
- "Call Now" CTA button on right (pill shape, gold background)
- Transparent on hero section, transitions to solid dark teal on scroll (sticky)
- Mobile: hamburger icon → full-screen overlay navigation
- Active page link underlined in gold

**Acceptance Criteria:**
- [ ] Nav is sticky and readable at all scroll positions
- [ ] "Call Now" opens device phone dialer with `tel:+8801911596109`
- [ ] Mobile hamburger menu opens/closes with animation
- [ ] Active route is visually indicated

#### 4.1.2 Hero Section

**Requirements:**
- Full-viewport-height section (`100svh`)
- Background: full-bleed photo of elderly people in a park, dark teal overlay
- Centered content stack:
  1. Circular logo badge (white circle, logo inside)
  2. "Golden Years of Wisdom" in display/script font, gold
  3. "Senior Citizen Care Home" subtitle, white
  4. Two CTA buttons: "Learn More" (brown filled) and "Schedule a Visit" (white outlined)
  5. Scroll indicator arrow (animated bounce)
- Hero image has parallax scroll effect

**Acceptance Criteria:**
- [ ] Hero fills full viewport on all screen sizes
- [ ] Logo badge visible and centred
- [ ] Title text animates on load (GSAP character stagger)
- [ ] "Learn More" scrolls to Philosophy section (`#philosophy`)
- [ ] "Schedule a Visit" links to `/contact`
- [ ] Parallax effect on scroll (no motion if reduced-motion preference set)

#### 4.1.3 Philosophy Section (`#philosophy`)

**Requirements:**
- Eyebrow label: "OUR PHILOSOPHY" (magenta, uppercase, letter-spaced)
- Heading: "A Boutique Approach to Care" (teal, heading font)
- Subtitle paragraph (2 lines)
- 2×2 grid of feature cards:
  1. **Safety & Care** — Icon: shield. Tags: "24/7 Nursing", "Emergency Call"
  2. **Community Living** — Icon: users/people. Tags: "Social Events", "Fine Dining"
  3. **Spiritual Peace** — Icon: person/meditation. Tags: "Meditation", "Therapy Gardens"
  4. **Modern Apartments** — Icon: building. Tags: "Accessible Design", "Housekeeping"
- Section background: cream with arabesque SVG texture

**Acceptance Criteria:**
- [ ] Arabesque texture rendered as SVG background tile
- [ ] All 4 feature cards rendered with correct content and icons
- [ ] Cards animate in with GSAP stagger on scroll enter
- [ ] Tags styled as pill badges

#### 4.1.4 Quote Strip

**Requirements:**
- Full-width section, cream-warm background
- Large decorative `"` quotation marks, teal, low opacity
- Quote: *"We don't just add years to life, we add life to years. Every detail is designed with dignity and joy in mind."*
- Attribution: *— Spectrum EduCare Limited* (gold, bold)

**Acceptance Criteria:**
- [ ] Decorative quote marks positioned as background decor
- [ ] Quote text is semantic `<blockquote>` element
- [ ] Attribution is italicised and gold coloured

#### 4.1.5 Footer (shared across all pages)

**Requirements:**
- Dark teal background
- Logo icon + "Golden Years of Wisdom" (gold, display font)
- Tagline: "Dignity, warmth, and care for those who built our world."
- Footer links: Privacy Policy, Terms of Service, Careers, Volunteer
- Copyright line: "© 2024 Golden Years of Wisdom. All rights reserved."

**Acceptance Criteria:**
- [ ] Footer renders consistently on all pages
- [ ] All footer links functional
- [ ] Copyright year accurate

---

### 4.2 About Us Page (`/about`)

**Purpose:** Build credibility and emotional connection. Explain the vision, the challenge being solved, and the project timeline.

#### 4.2.1 Page Hero Banner

**Requirements:**
- Teal background with circular repeating pattern (CSS `radial-gradient`)
- Centred heading: "About Us"
- No photo on this hero (pattern only)

#### 4.2.2 Vision Section

**Requirements:**
- Two-column layout: photo left, text right
- Photo: two elderly men smiling outdoors
- Heading: "Our Vision for Dignified Living" (teal, heading font)
- Two paragraphs describing the boutique hospitality concept
- "Dignity First" badge below text (teal outline pill)

**Content (from brochure):**
> At Golden Years of Wisdom, we believe that the later chapters of life should be defined by comfort, community, and respect. Our project envisions a sanctuary where seniors can thrive in an environment tailored to their physical and emotional well-being.

> Moving away from clinical isolation, we are building a boutique hospitality experience. It's a place that feels like a well-appointed, sun-drenched residence, fostering genuine connections and offering a peaceful retreat wrapped in warmth and empathetic care.

**Acceptance Criteria:**
- [ ] Two-column layout on desktop, single column (photo top) on mobile
- [ ] Photo has `border-radius` and subtle shadow
- [ ] "Dignity First" badge is present with teal circle-check icon
- [ ] Section animates in on scroll (image slides left, text slides right)

#### 4.2.3 Timeline Section

**Requirements:**
- Section heading: "The Journey Ahead" (centred, heading font)
- 4-step horizontal timeline:

| Year | Title | Description | Icon |
|---|---|---|---|
| 2026 | Land Acquisition | Securing the perfect serene location. | Mountain/terrain icon |
| 2027 | Land Filling | Preparing the foundation for our vision. | People/community icon |
| 2028 | Construction Begins | Building the boutique residences. | Person/walk icon |
| 2031 | Project Completion | Opening doors to our community. | Key icon |

- Horizontal connector line between nodes
- Year in gold, title in charcoal, description in muted grey
- Icon circles: alternating teal and gold backgrounds

**Acceptance Criteria:**
- [ ] All 4 timeline nodes rendered correctly
- [ ] Horizontal line animated to draw on scroll (GSAP `scaleX`)
- [ ] Cards stagger up after line draw
- [ ] On mobile: vertical stack layout with vertical connector line

#### 4.2.4 Challenge & Approach Cards

**Requirements:**
- Two side-by-side cards:
  - **The Challenge** (icon: target/search): Many seniors face profound isolation and loneliness in traditional care settings or when aging alone at home. The lack of tailored engagement and sterile environments often diminish their quality of life.
  - **Our Approach** (icon: handshake/community): We cultivate vibrant community living through purposely designed spaces that encourage interaction, shared activities, and mutual support, replacing isolation with a warm, empathetic neighborhood feel.

**Acceptance Criteria:**
- [ ] Cards styled distinctly (neutral vs. teal-tinted)
- [ ] Icons present, from Lucide React
- [ ] Cards animate in on scroll

---

### 4.3 Studio Apartments Page (`/studio-apartments`)

**Purpose:** Detail the apartment specifications, amenities, and eligibility. Convert interested visitors into inquiry submissions.

#### 4.3.1 Page Hero Banner

**Requirements:**
- Full-width image strip, apartment interior photo, teal overlay
- Centred white text:
  - H1: "Studio Apartments"
  - Subtitle: "Thoughtfully designed living spaces offering independence, dignity, and comfort in a boutique hospitality setting."

#### 4.3.2 Refined Living Spaces Section

**Requirements:**
- Two-column: text/checklist left, apartment photo right
- Section heading: "Refined Living Spaces"
- Lead paragraph about accessibility and aesthetic elegance
- Checklist (7 items, teal circle-outline icons):

| # | Feature |
|---|---|
| 1 | Generous 600 sq ft floor plan |
| 2 | Spacious, light-filled sleeping area |
| 3 | Dedicated dining alcove |
| 4 | Elder-friendly, accessible bathroom |
| 5 | Private balcony with scenic views |
| 6 | Fully equipped kitchenette |
| 7 | Premium slip-resistant flooring throughout |

- Photo: bright apartment interior (dining/living area, warm natural light)

**Acceptance Criteria:**
- [ ] All 7 checklist items rendered with teal circle icons
- [ ] Photo correctly placed, `border-radius` applied
- [ ] Section is responsive (stacks on mobile)

#### 4.3.3 Amenities & Care Section

**Requirements:**
- Teal-tinted background (light)
- Section heading: "Included Amenities & Care" (teal)
- 3-column card grid:

| Column | Title | Icon | Content |
|---|---|---|---|
| 1 | Safety & Emergency | First-aid icon | 24/7 on-call staff, emergency response systems in every room, and daily wellness checks to ensure peace of mind for residents and their families. |
| 2 | Daily Living | Chair/furniture icon | Weekly housekeeping, flat linen laundry service, and property maintenance so residents can focus on enjoying their time and activities. |
| 3 | Health & Dining | Fork/utensil icon | Access to the main dining room for chef-prepared meals, customised nutrition plans, and a vibrant calendar of fitness and social events. |

**Acceptance Criteria:**
- [ ] 3 cards in correct grid layout
- [ ] Cards have top-border accent on hover (magenta, 3px)
- [ ] Icons in warm brown colour
- [ ] Transition to single column on mobile

#### 4.3.4 Resident Eligibility Section

**Requirements:**
- White/cream background, centred layout
- Section heading: "Resident Eligibility"
- Subtext: "To maintain our serene and supportive community atmosphere, we ask that prospective residents meet the following criteria."
- 3 criteria (full-width pill cards, white bg, green check circle):
  1. Age 55+ minimum requirement
  2. Clear background check
  3. Commitment to a respectful community
- CTA button: "Inquire About Availability" (teal, white text, pill shape, large, centred)

**Acceptance Criteria:**
- [ ] All 3 criteria rendered as pill cards
- [ ] Green check icons present (forest green)
- [ ] CTA button links to `/contact`
- [ ] Button hover state active
- [ ] Section fully centred on all breakpoints

---

### 4.4 Contact Us Page (`/contact`)

**Purpose:** Make it as easy as possible for families to reach out, with all contact info clearly displayed.

#### 4.4.1 Page Hero Banner

**Requirements:**
- Teal background with plus-sign dot pattern (CSS background)
- Centred content:
  - H1: "Contact Us"
  - Subtitle: "We're here to answer any questions you have about our care, facilities, and community."

#### 4.4.2 Get in Touch + Map Section

**Requirements:**
- Two-column layout: contact card left, map right
- **Contact Card** (white bg, left border magenta 3px):
  - Section heading: "Get in Touch"
  - 4 rows with icon + label + value:
    1. 📍 Our Location — Vakurta, Savar, Dhaka
    2. 🏢 Head Office — Shantinagar, Dhaka (41/1, Khadem Tower, Dhaka-1217)
    3. 📞 Phone — +880 123 456 7890 / +880 987 654 3210 (also display real numbers: 01911596109 / 01726208154)
    4. ✉️ Email — care@goldenyearsofwisdom.com
- **Map** (right column): Embed OpenStreetMap or Google Maps iframe centred on Vakurta, Savar. Show "Vakurta Residence" pin label. `border-radius: var(--radius-lg)`.

**Acceptance Criteria:**
- [ ] Contact card renders with magenta left border
- [ ] All 4 contact rows present with icons
- [ ] Phone numbers are `<a href="tel:...">` links
- [ ] Email is `<a href="mailto:...">` link
- [ ] Map embeds correctly and is responsive
- [ ] Map has fallback static image if iframe fails

#### 4.4.3 Inquiry Form

**Requirements:**
- Card-style form, centred, max-width 600px
- Heading: "Send an Inquiry"
- Subtext: "We'd love to hear from you. Please fill out the form below."
- Fields:
  | Field | Type | Required | Placeholder |
  |---|---|---|---|
  | Full Name | text | Yes | — |
  | Phone Number | tel | Yes | — |
  | Email Address | email | No | — |
  | Message | textarea (5 rows) | No | — |
- Submit button: "Submit Inquiry" (gold background, dark teal text, pill shape, right-aligned)

**Form Behaviour:**
- Client-side validation: Full Name and Phone Number required, show inline error if empty on submit
- On submit: show inline success message "Thank you! We'll be in touch shortly." (no page reload)
- No backend required for P0 — form can use a static form service (Formspree, Netlify Forms) or `mailto:` fallback
- Optional P1: integrate with a serverless API route at `/api/contact` that sends email via Resend or Nodemailer

**Acceptance Criteria:**
- [ ] Form renders all fields
- [ ] Validation fires on submit attempt with empty required fields
- [ ] Success message displays after submission
- [ ] Submit button has loading state (spinner)
- [ ] Form is accessible (labels, focus states, aria-required)

---

## 5. Shared Component Requirements

### 5.1 Navbar

| Requirement | Detail |
|---|---|
| Position | Sticky, top: 0, z-index: 1000 |
| Initial state | Transparent (on hero sections) |
| Scrolled state | Dark teal, `backdrop-filter: blur(12px)`, transition duration 0.3s |
| Logo | Icon + brand name, links to `/` |
| Links | Home, About Us, Studio Apartments, Contact Us |
| Active state | Gold underline on active route |
| CTA | "Call Now" pill button, gold bg, links to `tel:01911596109` |
| Mobile | Hamburger at ≤768px, opens full-screen overlay with vertical nav links |

### 5.2 Footer

| Requirement | Detail |
|---|---|
| Background | `var(--color-teal-dark)` |
| Content | Logo + brand name (gold) + tagline + footer links + copyright |
| Links | Privacy Policy, Terms of Service, Careers, Volunteer |
| Font | Brand name in display font; links in body font |

---

## 6. Animation Requirements Summary

| Animation | Trigger | GSAP Feature | Detail |
|---|---|---|---|
| Nav entrance | Page load | Timeline | Fade + slide down, 0.5s |
| Hero logo badge | Page load | Timeline | Scale + fade, 0.5s delay |
| Hero title | Page load | SplitText | Per-character stagger, 0.04s |
| Hero subtitle + CTA | Page load | Timeline | Fade up, 0.8s delay |
| Hero image | Scroll | ScrollTrigger scrub | Parallax y: 30% |
| Mandala texture | Scroll enter | ScrollTrigger | opacity + scale, 1.2s |
| Section headings | Scroll enter | ScrollTrigger | y: 30→0, opacity, 0.6s |
| Feature cards | Scroll enter | ScrollTrigger | Staggered y: 50→0, 0.15s stagger |
| Timeline line | Scroll enter | ScrollTrigger | scaleX: 0→1, 1.2s |
| Timeline cards | Scroll enter | ScrollTrigger | Staggered y: 40→0, 0.2s stagger |
| Challenge cards | Scroll enter | ScrollTrigger | Slide in from sides |
| Apartment photo | Scroll enter | ScrollTrigger | Fade + slight scale |
| Amenity cards | Scroll enter | ScrollTrigger | Stagger fade up |
| Eligibility criteria | Scroll enter | ScrollTrigger | Stagger slide in |
| Nav scroll transition | Scroll | ScrollTrigger | Background colour change |

**All animations must be disabled if `prefers-reduced-motion: reduce` is set.**

---

## 7. Technical Requirements

### 7.1 Stack & Dependencies

```json
{
  "framework": "Next.js 14+ (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS (for utility spacing/layout) + CSS custom properties (design tokens from designer.md)",
  "animation": "gsap@3.x + @gsap/react + ScrollTrigger plugin",
  "icons": "lucide-react",
  "fonts": [
    "Playfair Display (Google Fonts via next/font)",
    "Lora (Google Fonts via next/font)",
    "Inter (Google Fonts via next/font)",
    "Hind Siliguri (Google Fonts via next/font)"
  ],
  "forms": "react-hook-form + Formspree or Netlify Forms (P0); custom API route (P1)",
  "images": "next/image"
}
```

### 7.2 Performance Requirements

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID / INP | < 200ms |
| Lighthouse Score | ≥ 90 (Performance), ≥ 95 (Accessibility), ≥ 90 (SEO) |
| Image optimization | All images via `next/image`, WebP format, lazy loaded except hero |
| Font loading | `display: swap`, preload critical fonts |
| GSAP | Loaded client-side only (`"use client"` + `useEffect` guard) |

### 7.3 SEO Requirements

- `<title>` and `<meta name="description">` on every page via Next.js `metadata` export
- Open Graph tags for social sharing (title, description, image)
- `robots.txt` and `sitemap.xml` generated via Next.js
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`
- H1 present and unique on every page
- Structured data (JSON-LD): `LocalBusiness` schema on contact page

**Page metadata:**

| Page | Title | Description |
|---|---|---|
| Home | Golden Years of Wisdom – Senior Citizen Care Home, Dhaka | A boutique senior care community offering dignified living, 24/7 care, and spiritual peace in Vakurta, Savar, Dhaka. |
| About | About Us – Golden Years of Wisdom | Learn about our vision for dignified senior living and the journey ahead toward completing our boutique care home in Dhaka. |
| Studio Apartments | Studio Apartments – Golden Years of Wisdom | Explore our 600 sq ft senior studio apartments featuring modern design, safety systems, and full-care amenities. |
| Contact | Contact Us – Golden Years of Wisdom | Get in touch with Golden Years of Wisdom. Ask about residency, studio apartments, and investment opportunities. |

### 7.4 Accessibility Requirements

- WCAG 2.1 AA compliance
- All interactive elements keyboard-navigable
- Focus indicators visible (gold outline)
- `prefers-reduced-motion` respected (all GSAP disabled)
- Screen reader: all images have `alt` text; decorative images `alt=""`
- Form fields: `<label>` elements linked to inputs via `htmlFor`/`id`
- Skip navigation link at top of each page

### 7.5 Internationalisation

- P0: English only
- P1: Bengali (বাংলা) language toggle — all content translations sourced from the brochure PDF
- Fonts must support Bengali: Hind Siliguri loaded and applied to `.lang-bn` class when toggle is active

### 7.6 Browser Support

- Chrome 100+, Firefox 100+, Safari 15+, Edge 100+
- Mobile: iOS Safari 15+, Chrome Android 100+
- No IE11 support required

---

## 8. Content Requirements

### 8.1 Image Assets Required

| Image | Usage | Dimensions | Notes |
|---|---|---|---|
| `hero-home.jpg` | Home hero background | 1920×1080+ | Elderly couple in park, warm/natural |
| `hero-about.jpg` | About page (optional) | 1200×600 | Two seniors smiling outdoors |
| `apartment-dining.jpg` | Studio Apartments hero + feature | 1200×800 | Bright interior, warm tones |
| `apartment-bedroom.jpg` | Studio features | 800×600 | Well-furnished studio bedroom |
| `logo-icon.svg` | Navbar, footer, hero badge | SVG | Tree/circle logo mark |
| `arabesque-tile.svg` | Section background texture | 200×200 SVG | Geometric Islamic pattern, gold stroke |

### 8.2 Feature Cards Content

#### Safety & Care
**Description:** Round-the-clock professional medical support and discrete wellness monitoring, ensuring peace of mind without compromising personal independence.  
**Tags:** 24/7 Nursing, Emergency Call

#### Community Living
**Description:** Engaging social calendars, shared dining experiences, and curated group activities designed to foster meaningful connections and lifelong friendships.  
**Tags:** Social Events, Fine Dining

#### Spiritual Peace
**Description:** Tranquil meditation spaces, beautiful gardens, and holistic wellness programs that nurture the mind, body, and spirit in a serene environment.  
**Tags:** Meditation, Therapy Gardens

#### Modern Apartments
**Description:** Spacious, sun-drenched private residences featuring ergonomic design, premium finishes, and accessibility features that feel like a luxury home.  
**Tags:** Accessible Design, Housekeeping

---

## 9. Out of Scope (P0)

The following are explicitly **not** in scope for the initial launch:

- Payment/booking system
- User accounts or login
- Blog or news section
- Live chat widget
- Bengali language version (deferred to P1)
- Backend CMS
- Animation on page transitions (deferred to P1)
- Investment calculator

---

## 10. Development Checklist

### Setup
- [ ] Next.js 14 project initialised with App Router and TypeScript
- [ ] Tailwind CSS configured
- [ ] CSS custom properties (design tokens) added to `globals.css`
- [ ] GSAP + ScrollTrigger installed and wrapped in `"use client"` components
- [ ] Google Fonts loaded via `next/font` (Playfair Display, Lora, Inter, Hind Siliguri)
- [ ] Lucide React installed
- [ ] `arabesque-tile.svg` pattern created and placed in `/public/patterns/`

### Components
- [ ] `Navbar` — sticky, scroll-aware, mobile hamburger
- [ ] `Footer` — dark teal, brand + links
- [ ] `Button` — variants: filled-gold, filled-teal, outline-white, outline-teal
- [ ] `FeatureCard` — icon + title + description + tags
- [ ] `SectionEyebrow` — uppercase magenta label
- [ ] `TimelineNode` — year + icon + title + description
- [ ] `AmenityCard` — icon + title + description + hover border
- [ ] `EligibilityCriteria` — check icon + text pill
- [ ] `ContactRow` — icon + label + value (with link)
- [ ] `InquiryForm` — full form with validation and success state

### Pages
- [ ] Home page (`/`)
- [ ] About page (`/about`)
- [ ] Studio Apartments page (`/studio-apartments`)
- [ ] Contact page (`/contact`)
- [ ] Privacy Policy page (`/privacy`) — minimal placeholder
- [ ] Terms of Service page (`/terms`) — minimal placeholder

### Animations
- [ ] GSAP `useScrollAnimation` custom hook created
- [ ] `prefers-reduced-motion` guard in place
- [ ] All animations listed in Section 6 implemented
- [ ] Hero parallax working
- [ ] Timeline line draw working

### QA
- [ ] All pages tested on Chrome, Firefox, Safari
- [ ] Mobile tested at 375px, 768px, 1024px, 1440px
- [ ] Lighthouse run — all scores meet targets
- [ ] Accessibility audit (axe DevTools)
- [ ] All links functional (no 404s)
- [ ] Form submits and shows success message
- [ ] Phone/email links work on mobile
- [ ] Fonts load correctly (Bengali characters render)
- [ ] Images have alt text
- [ ] Focus states visible on all interactive elements

---

## 11. Revision History

| Version | Date | Author | Notes |
|---|---|---|---|
| 1.0 | 2026-06-11 | Claude (Anthropic) | Initial PRD generated from Figma screenshots and brochure PDF |
