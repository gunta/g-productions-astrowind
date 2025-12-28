---
name: whitespace-design
description: Apply professional whitespace (negative space) design principles to create clean, sophisticated layouts. Use this skill when the user asks to design interfaces, layouts, or compositions that need elegance, visual hierarchy, or professional polish. Triggers on requests for "clean design," "minimal layout," "whitespace," "negative space," "professional typography," "grid-based design," or when refining cluttered interfaces.
---

# Whitespace Design: 6 Principles for Professional Layout

This skill provides a systematic approach to using whitespace (negative space) as a primary design tool. Apply these six principles to transform any layout from amateur to professionally sophisticated.

## Core Philosophy

Whitespace is not empty space—it is an active design element. Treat negative space as the protagonist that gives meaning, hierarchy, and breathing room to content. Professional design emerges from what you remove, not what you add.

## The 6 Principles

### 1. Hierarchy Control

**Instruction**: Eliminate bold text; create hierarchy using only size and position.

**Effect**: Structural beauty that doesn't rely on decoration.

**Implementation**:
- Remove all `font-weight: bold` from body content
- Establish hierarchy through font-size ratios (e.g., 48px → 24px → 16px → 14px)
- Use vertical position to indicate importance (top = primary)
- Let size differentials speak instead of weight variations
- Reserve bold only for critical UI affordances (buttons, links)

```css
/* Instead of bold for emphasis */
.title { font-size: 2.5rem; font-weight: 400; }
.subtitle { font-size: 1.25rem; font-weight: 400; opacity: 0.8; }
.body { font-size: 1rem; font-weight: 400; }
```

### 2. Vertical Axis

**Instruction**: Limit starting points to very few vertical axes; snap all elements to them.

**Effect**: Clear visual guidance with strong sense of cleanliness.

**Implementation**:
- Define 2-3 vertical alignment points maximum for entire layout
- All text and elements must align to these axes
- Create invisible vertical lines that act as "rails"
- Avoid centered text mixed with left-aligned text
- Use CSS Grid or explicit margin-left values to enforce alignment

```css
/* Two-axis system */
.container {
  --axis-primary: 64px;    /* Main content start */
  --axis-secondary: 400px; /* Secondary column start */
}
.content { margin-left: var(--axis-primary); }
.sidebar { margin-left: var(--axis-secondary); }
```

### 3. Modular Scale

**Instruction**: Bind all numeric values to specific ratios only (golden ratio, etc.).

**Effect**: Mathematical harmony and rhythm across the entire screen.

**Implementation**:
- Choose a scale: Golden Ratio (1.618), Perfect Fourth (1.333), or Major Third (1.25)
- Generate all spacing, font sizes, and dimensions from base × ratio^n
- Never use arbitrary values like "17px" or "23px"
- Common golden ratio scale from 16px base: 16, 26, 42, 68, 110...
- Apply to margins, padding, line-height, and element dimensions

```css
:root {
  --ratio: 1.618;
  --base: 1rem;
  --space-xs: calc(var(--base) / var(--ratio) / var(--ratio)); /* ~0.38rem */
  --space-sm: calc(var(--base) / var(--ratio));                /* ~0.62rem */
  --space-md: var(--base);                                      /* 1rem */
  --space-lg: calc(var(--base) * var(--ratio));                /* ~1.62rem */
  --space-xl: calc(var(--base) * var(--ratio) * var(--ratio)); /* ~2.62rem */
}
```

### 4. Negative Shape

**Instruction**: Place whitespace first as the "protagonist shape" before placing content.

**Effect**: Bold, luxurious spatial potential.

**Implementation**:
- Design the empty areas before designing content areas
- Whitespace should form intentional geometric shapes
- Ask "What shape is my whitespace?" not "Where do I put content?"
- Create dramatic margins that feel generous, not wasteful
- Let whitespace pool in specific areas rather than distributing evenly

```css
/* Intentional whitespace as a design element */
.hero {
  padding: 20vh 15vw; /* Generous, intentional negative space */
}
.card {
  padding: 3rem 2.5rem; /* Whitespace forms the card's character */
  margin-bottom: 4rem;  /* Space between is the design */
}
```

### 5. Baseline Grid

**Instruction**: Snap all lines to a consistent vertical rhythm with complete precision.

**Effect**: Architectural order and academic trustworthiness.

**Implementation**:
- Establish a baseline unit (e.g., 8px or based on line-height)
- All vertical spacing must be multiples of this unit
- line-height, margin, padding, heights all conform to grid
- Text from different columns should align horizontally
- Use browser extensions or overlays to verify alignment

```css
:root {
  --baseline: 8px;
  --line-height: calc(var(--baseline) * 3); /* 24px */
}
body {
  line-height: var(--line-height);
}
p { margin-bottom: var(--line-height); }
h1 { 
  font-size: 2.5rem;
  line-height: calc(var(--baseline) * 6); /* 48px - maintains rhythm */
  margin-bottom: var(--line-height);
}
```

### 6. Borderless Proximity

**Instruction**: Eliminate borders; classify and group elements only by distance between them.

**Effect**: Modern transparency with minimized visual noise.

**Implementation**:
- Remove all decorative borders (1px solid #ccc)
- Group related items with tight spacing (8-16px)
- Separate unrelated groups with generous spacing (32-64px)
- Use whitespace ratios: related items 1x, groups 3-4x apart
- Cards can use subtle shadows or background shifts instead of borders

```css
/* Instead of borders */
.card {
  border: none;
  background: rgba(0,0,0,0.02);
  /* Or subtle shadow for depth */
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.related-items { gap: 0.5rem; }      /* Tight = related */
.section-gap { margin-top: 4rem; }   /* Wide = new context */
```

## Application Workflow

1. **Audit existing design**: Identify bold text, arbitrary values, borders, inconsistent axes
2. **Establish modular scale**: Choose ratio, define CSS custom properties
3. **Define vertical axes**: Mark 2-3 alignment rails
4. **Set baseline grid**: Choose unit, apply to all vertical spacing
5. **Design negative shapes**: Sketch whitespace before content
6. **Remove borders**: Replace with proximity relationships
7. **Eliminate bold**: Restructure hierarchy with size and position

## Quick Checklist

- [ ] No bold text in body content (hierarchy through size only)
- [ ] Maximum 3 vertical alignment axes
- [ ] All values derived from modular scale
- [ ] Whitespace forms intentional shapes
- [ ] All vertical spacing snaps to baseline grid
- [ ] No decorative borders (proximity-based grouping)

## Principle Synergy

These principles reinforce each other:
- **Modular Scale + Baseline Grid** = mathematically perfect vertical rhythm
- **Vertical Axis + Negative Shape** = powerful compositional structure
- **Hierarchy Control + Borderless Proximity** = elegant minimalism without decoration

Apply all six for maximum sophistication, or apply selectively for targeted refinement.
