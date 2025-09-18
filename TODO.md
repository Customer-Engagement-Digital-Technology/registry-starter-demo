## Registry Minimalization TODO

Objective: Reduce to basic primitives, essential components, and 4 blocks: header, main (placeholder), footer, dashboard.

### 1) Registry catalog cleanup (registry.json)
- [ ] Remove nonessential blocks: `store`
- [ ] Remove nonessential components: `hero`, `promo`, `product-grid`, `login` (unless needed)
- [ ] Prune UI primitives to a minimal set (keep only those required by header/footer/dashboard)
  - Keep: `button`, `input`, `avatar`, `separator`, `badge`, `dropdown-menu`, `dialog`, `tooltip`
  - Optional (if used by dashboard): `card`, `tabs`, `table`, `skeleton`, `select`, `switch`
- [ ] Add `footer` component entry
- [ ] Add `main` placeholder block (or repurpose `blank`) that wires header + footer and shows placeholder content

### 2) Components and layouts
- [ ] Create `src/components/footer.tsx` (minimal footer)
- [ ] Ensure `src/components/brand-header.tsx` remains and is referenced
- [ ] Update `src/layouts/minimal-layout.tsx` to include `<Header />` and `<Footer />`
- [ ] Update `src/layouts/shell-layout.tsx` (dashboard) to include `<Header />` and optional sidebar, and `<Footer />`

### 3) Blocks (pages wiring)
- [ ] Keep `dashboard` block and its files (page + layout)
- [ ] Create `main` placeholder block (page shows placeholder content)
- [ ] Decide whether to keep `blank` (likely remove if replaced by `main`)

### 4) Demo and preview cleanup
- [ ] Prune `src/app/demo/[name]/blocks/*` to only `dashboard-page.tsx` and new `main-page.tsx`
- [ ] Prune `src/app/demo/[name]/components/*` to only items used by header/sidebar/login if retained
- [ ] Consider removing demo entirely if not needed for distribution

### 5) UI primitives directory pruning
- [ ] Under `src/components/ui/`, keep only primitives referenced by the surviving components/blocks
- [ ] Remove unused UI primitive files and their corresponding entries in `registry.json`

### 6) Public registry artifacts
- [ ] Prune `public/r/*.json` to entries that match the kept registry items
- [x] Update `public/r/registry.json` to reflect one item per section (theme, 1 block, 1 component, 1 UI)

### 7) Code references and imports
- [ ] Search and remove dead imports/usages of deleted components/primitives
- [x] Verify `src/lib/registry.ts` — updated to limit output to one item per section without deleting source entries

### 8) Build and run
- [ ] Run `npm run dev` (or `pnpm dev`) and confirm `registry:build` materializes only the minimal set
- [ ] Fix any type/lint issues introduced by removals

### 9) Documentation
- [ ] Update `README.md` to list the minimal primitives/components and how to use the 4 blocks

### 10) Optional hardening
- [ ] Add basic tests/smoke checks for header, footer, dashboard rendering
- [ ] Add a CI lint/build job (optional)

Notes:
- Aim to err on the side of deleting aggressively; re-add via the registry if needed.
- Keep `@registry-starter/theme` to avoid tailwind/shadcn breakage.

