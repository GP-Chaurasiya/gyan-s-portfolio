# Design Brief

## Vision
Modern, professional personal portfolio for BCA student targeting internships. Blue-dominant, clean card-based layout with smooth interactions and generous white space.

## Tone
Contemporary professional with human-centered warmth. Sharp technical edges paired with approachable design.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary Blue | `0.55 0.18 255` | Buttons, active states, accents |
| Secondary Light Blue | `0.85 0.08 260` | Hover states, subtle backgrounds |
| Success Green | `0.65 0.15 142` | Highlights, achievements |
| Background | `0.99 0 0` | Page background, cards |
| Foreground | `0.18 0 0` | Primary text |
| Muted Grey | `0.92 0 0` | Dividers, subtle elements |
| Border | `0.94 0 0` | Card borders |

## Typography

| Role | Font | Weight | Scale |
|------|------|--------|-------|
| Display (Hero, Headings) | DM Sans | 700 | 3.5rem → 1.5rem |
| Body (Content, Cards) | Figtree | 400–600 | 1rem, 0.875rem |
| Code/Mono | Geist Mono | 400 | 0.875rem |

## Structural Zones

| Zone | Background | Border | Treatment |
|------|------------|--------|-----------|
| Header/Nav | White (`0.99 0 0`) | Bottom 1px Primary | Sticky, shadow-sm on scroll |
| Hero Section | White with gradient accent | None | Gradient orb 8% opacity top-right |
| Content Cards | White (`1.0 0 0`) | 1px muted border | shadow-md, rounded-lg |
| Section Dividers | Muted grey (`0.92 0 0`) | None | 1px full-width |
| Footer | Foreground text on white | Top 1px border | Contact info, link section |

## Spacing & Rhythm
- Hero: Full viewport height, 6rem top padding on sections
- Card gap: 2rem (md) / 1rem (sm)
- Padding: 2rem (cards) / 3rem (sections)
- Line-height: 1.6 (body), 1.2 (headings)

## Component Patterns

| Component | Primary Color | State | Animation |
|-----------|---------------|-------|-----------|
| Button CTA | Blue `0.55 0.18 255` | Hover: Light Blue + scale-102 | fade-in 0.4s |
| Project Card | White card + Blue accent bar | Hover: shadow-lg + translate-y-1 | slide-up 0.5s |
| Nav Link | Foreground text | Active: Blue underline + bold | transition-smooth 0.3s |
| Skill Badge | Muted background | N/A | pulse on scroll (optional) |

## Motion & Interactions
- Smooth scroll behavior on all anchors
- Fade-in 0.4s on section entries
- Slide-up 0.5s on card stagger loads
- Hover lift (translate-y-1) on interactive elements
- 0.3s transition on all state changes

## Anti-Patterns (Avoid)
- No full-page gradients; use subtle orbs
- No multiple color families; stay in blue-green-neutral spectrum
- No bouncy animations; prefer smooth easing
- No generic shadows; use contextual elevation

## Signature Detail
**Blue accent bar on left edge of project cards** — thin 4px vertical bar in Primary Blue with rounded corner. Creates visual rhythm and hierarchy.

## Dark Mode
Shift primary to `0.68 0.16 255` (brighter), background to `0.12 0 0`, maintain contrast AA+ across all elements.

## Responsive Breakpoints
- Mobile-first: base 16px radius, 1rem gaps
- `sm` (640px): 2rem gaps, tighter typography
- `md` (768px): 3rem gaps, expanded spacing
- `lg` (1024px): 4-column grid, full nav reveal

## Constraints
- Max content width: 1200px
- Font weights: 400, 600, 700 only
- Border radius: 0.5rem (consistent)
- No arbitrary colors; all from token palette
- All interactions from motion library
