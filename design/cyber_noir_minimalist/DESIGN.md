---
name: Cyber-Noir Minimalist
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#abd600'
  on-tertiary: '#283500'
  tertiary-container: '#070c00'
  on-tertiary-container: '#688300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#c3f400'
  tertiary-fixed-dim: '#abd600'
  on-tertiary-fixed: '#161e00'
  on-tertiary-fixed-variant: '#3c4d00'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0em
  data-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 140%
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The design system is a fusion of high-end editorial aesthetics and low-level terminal interfaces. It targets a hyper-niche audience that values technical exclusivity and raw, unpolished sophistication. The brand personality is cold, precise, and authoritative.

The style leverages **Neo-Brutalism** through its rejection of rounded corners and use of hair-line borders, blended with **Minimalism** via aggressive negative space. It creates a "hacking terminal" atmosphere while maintaining the luxury feel of a premium fashion magazine through disciplined typography and a restricted, high-contrast palette.

## Colors

The palette is strictly functional and high-contrast to ensure a technical, nocturnal aesthetic. 

- **Deep Obsidian (#0A0A0A):** The foundation. Used for all primary backgrounds to create a sense of infinite depth.
- **Stark White (#FFFFFF):** The primary ink. Used for body copy, titles, and structural borders to provide maximum legibility.
- **Acid Green (#CCFF00):** The tactical highlight. Reserved exclusively for interactive states, critical notifications, and primary calls to action. It represents the "active" signal in a terminal.
- **Neutral Grey (#262626):** Used for secondary borders, disabled states, and subtle grid lines to prevent visual clutter.

## Typography

This design system utilizes a dual-font strategy to balance editorial luxury with technical data visualization.

- **Headlines (Inter):** Set with heavy weights and tight letter-spacing to mimic high-end mastheads. Large-scale displays should use "Extra Bold" to anchor the page.
- **Technical Data (Space Grotesk):** All price points, SKU numbers, release dates, and brand names must be set in this monospaced-leaning typeface. It conveys the "hacking terminal" vibe and ensures data is perceived as precise and objective.
- **Body Text:** Clean and utilitarian. Use standard Inter for descriptions to ensure readability against the dark background.

## Layout & Spacing

The layout philosophy relies on a **Fixed Grid** with an emphasis on "Heavy Negative Space." Elements are intentionally pushed to the edges or isolated in the center to create an air of exclusivity.

- **Grid:** A 12-column system for desktop and a 4-column system for mobile.
- **Rhythm:** All spacing must be a multiple of 4px. 
- **Gutters:** 1px borders are often used in place of gutters to separate content, creating a blueprint-like appearance.
- **Margins:** Large outer margins are used to frame the content, treating the screen like a gallery wall.

## Elevation & Depth

This design system avoids drop shadows entirely to maintain its sharp, flat, and digital-first aesthetic. Depth is communicated through:

- **1px Outlines:** Distinct boxes define hierarchy. High-priority items use White (#FFFFFF) borders; secondary items use Neutral (#262626).
- **Glassmorphism Overlays:** Hover states and modal overlays utilize a 20% opacity white fill with a heavy background blur (20px-40px). This creates a "scanning" effect over the deep obsidian background.
- **Tonal Layering:** Occasional use of a slightly lighter grey (#121212) for container backgrounds to separate them from the primary void.

## Shapes

The shape language is strictly **Linear and Angular**. 

- **Radius:** 0px across all components (buttons, cards, inputs, images).
- **Lines:** 1px solid strokes are the primary decorative and functional divider.
- **Imagery:** Product photography should be clipped into hard-edged rectangles. Avoid any softening or vignetting that compromises the sharp aesthetic.

## Components

- **Buttons:** Rectangular with 1px White borders. On hover, the background fills with Acid Green (#CCFF00) and text flips to Deep Obsidian (#0A0A0A). Primary CTAs are always Acid Green.
- **Data Cards:** 1px borders with monospaced data points in the top-right corner. Use glassmorphism blurs for the image container background.
- **Input Fields:** Bottom-border only (1px White). Label is always uppercase monospaced above the line. Focus state turns the border Acid Green.
- **Status Chips:** Small rectangular boxes with monospaced text. "In Stock" uses Acid Green text; "Sold Out" uses White text with a strike-through.
- **Navigation:** Top-tier navigation uses wide-set Inter. Hovering reveals a thin Acid Green underline that spans the width of the text.
- **Terminal Feed:** A dedicated component for real-time drops, using a vertical scrolling list of monospaced timestamps and product IDs.