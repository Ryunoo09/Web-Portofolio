# Design System Master File: Professional & Elegant Portfolio

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Portfolio (Professional & Elegant)
**Domain:** Full-Stack & Software Engineering Showcase
**Style Philosophy:** Luxury Editorial meets High-End Tech Craftsmanship

---

## Global Rules

### Color Palette

The color strategy is a deep, immersive midnight navy background accented with brushed champagne gold and crisp silver highlights.

| Role                     | Light Theme Hex | Dark Theme Hex | CSS Variable             |
| ------------------------ | --------------- | -------------- | ------------------------ |
| Background               | `#F8FAFC`       | `#0A0F1D`      | `--background`           |
| Foreground               | `#0A0F1D`       | `#F1F5F9`      | `--foreground`           |
| Card                     | `#FFFFFF`       | `#111C35`      | `--card`                 |
| Card Foreground          | `#0A0F1D`       | `#F1F5F9`      | `--card-foreground`      |
| Primary (Navy Anchor)    | `#0B132B`       | `#F1F5F9`      | `--primary`              |
| Primary Foreground       | `#FFFFFF`       | `#0A0F1D`      | `--primary-foreground`   |
| Accent (Champagne Gold)  | `#C59B27`       | `#E5C158`      | `--accent-gold`          |
| Accent Muted             | `#D4AF37`       | `#C59B27`      | `--accent-gold-muted`    |
| Secondary (Slate / Navy) | `#F1F5F9`       | `#1E293B`      | `--secondary`            |
| Secondary Foreground     | `#0F172A`       | `#E2E8F0`      | `--secondary-foreground` |
| Muted                    | `#F1F5F9`       | `#16223D`      | `--muted`                |
| Muted Foreground         | `#64748B`       | `#94A3B8`      | `--muted-foreground`     |
| Border                   | `#E2E8F0`       | `#1E2D4A`      | `--border`               |
| Ring                     | `#D4AF37`       | `#E5C158`      | `--ring`                 |

---

### Typography

- **Heading Font:** Playfair Display (Luxury Serif, timeless, authoritative, editorial)
- **Body Font:** Inter / Plus Jakarta Sans (Clean, high-legibility sans-serif)
- **Mono Font:** JetBrains Mono (For tech badges, code tags, metrics)

---

### Spacing & Elevation

- Spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Cards: Subtle inner glow `box-shadow: 0 0 0 1px rgba(229, 193, 88, 0.1), 0 20px 40px -15px rgba(0, 0, 0, 0.5)`
- Smooth transitions: `transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1)`

---

## Anti-Patterns

- ❌ No bright neon or playful pastel childish themes
- ❌ No emoji used as structural icons — use Lucide SVG icons
- ❌ No cluttered, low-contrast text
- ❌ No unresponsive horizontal overflow
