# Monis Workspace Designer

An interactive workspace rental configurator for Monis. The app lets digital nomads, remote workers, and small teams in Bali curate a desk setup, preview the room visually, review the monthly estimate, and submit a lightweight rental inquiry.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Static product data

## Features

- Choose between curated desk options
- Choose between curated chair options
- Toggle workspace accessories including monitor, lamp, plant, keyboard, coffee machine, and whiteboard
- Live room preview with animated product and accessory changes
- Product cards with real asset thumbnails
- Search and category filtering across desks, chairs, and accessories
- Multi-currency estimates for USD, EUR, JPY, IDR, THB, RUB, CNY, and VND
- Language selector for key interface copy
- Monthly rental estimate based on selected items
- Setup summary with selected products and pricing
- Rental inquiry modal with preferred delivery date and basic validation
- Success state after inquiry submission
- Sticky mobile rent CTA
- Responsive desktop and mobile layout

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Architecture

```txt
app/
  layout.tsx
  page.tsx
components/
  WorkspaceDesigner.tsx
  WorkspaceCanvas.tsx
  ProductSelector.tsx
  ProductCard.tsx
  AccessoryToggle.tsx
  SetupSummary.tsx
  CheckoutModal.tsx
  SuccessState.tsx
data/
  products.ts
lib/
  pricing.ts
types/
  product.ts
```

`WorkspaceDesigner` owns the MVP state. Product selections are stored with React `useState`, pricing is derived with `calculateMonthlyTotal`, and child components receive focused props for rendering and interaction.

## Product And UX Decisions

The workspace preview is treated as the main interface, not a secondary illustration. Selection controls and pricing are kept close to the visual scene so users can quickly imagine a setup, understand cost, and send an inquiry without leaving the page.

The visual direction follows Monis: calm, minimal, premium, practical, and warm enough to feel connected to Bali remote-work life. The UI avoids marketplace density and keeps the rental path lightweight.

## Future Improvements

- Real inventory availability
- Backend inquiry submission
- Saved workspace presets
- Drag-and-drop item placement
- Team package builder
- Calendar-based rental duration pricing
- Admin product management

## Asset Generation Workflow

This project is designed around an asset-first workflow for Monis:

- Generate full room scene backgrounds first
- Create isolated object assets per category with consistent perspective
- Produce variant sets for configurator slots
- Use room previews as reference images for object generation

See `ASSET_GENERATION.md` for a full prompt strategy and example templates.
See `ASSET_PROMPTS.md` for the ordered workstation prompt sequence.
