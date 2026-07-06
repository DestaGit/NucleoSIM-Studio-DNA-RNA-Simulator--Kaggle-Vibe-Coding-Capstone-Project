# NucleoSim Studio Documentation & Style Guide Manual
## Standards for Code Structure, Styling, and Documentation Maintenance

---

### 1. Document Management Policies
To ensure clarity across research cohorts, all structural documents within NucleoSim Studio must follow the standards defined below.

#### 1.1. Core Documentation Deliverables
- **PRD.md**: Main Product Requirements Document. Must be updated whenever new functional features (e.g. additional biophysical properties or file exporters) are integrated.
- **architecture.md**: System Architecture document. Must reflect state flow updates, database collection modifications, or API route restructuring.
- **user_manual.md**: Direct instructions for the scientific end-user. Focuses on UI interactions, simulators, and keyboard inputs.

---

### 2. Frontend Development & Design Guidelines

#### 2.1. Visual Theme (The "Cosmic Slate" Aesthetics)
All NucleoSim Studio components must adhere to the high-contrast slate-dark aesthetic:
- **Primary Background**: Deep Obsidian Slate (`#030712`, `bg-slate-950`).
- **Surface Panels**: Transparent Dark slate (`bg-slate-900/50` or `bg-slate-900/40`) bounded by thin high-fidelity borders (`border-white/5` or `border-slate-800`).
- **DNA Strand Elements**: Neon Emerald (`#34d399`, `text-emerald-400`). Represents stability, nature, and helical genetics.
- **RNA Strand Elements**: Electric Sky Blue (`#38bdf8`, `text-sky-400`). Represents active single-strand transcriptions.
- **Ribosomal/Synthesis Accents**: Warm Amber/Gold (`#fbbf24`, `text-amber-400`). Represents enzymatic activity, tRNA docking, and chemical synthesis.

#### 2.2. Interactive Elements
- Hover feedback should be subtle but communicative (`hover:scale-[1.02]` or `hover:border-slate-700` with `transition-all duration-200`).
- Touch targets on mobile screen overlays must measure a minimum of $44px \times 44px$ to ensure correct touch interaction.

---

### 3. Engineering Styles & Coding Standards

#### 3.1. Type Safety
- Every biological data type must reside inside `/src/types.ts`. Avoid local inline type redeclarations.
- Utilize strict TypeScript annotations. Avoid declaring generic `any` values unless mapping polymorphic third-party inputs.
- All biological constants (including base names, hydrogen bonding tables, and codon tables) must reside in `/src/constants.ts`.

#### 3.2. State Preservation & React Hooks
- Use `useMemo` for high-overhead computations including Molecular Weight sums and GC ratio calculations.
- Provide clean dependency arrays for all `useEffect` hooks. Avoid state updates directly within rendering pipelines to prevent infinite loops.

---

### 4. Database Schema Guidelines
- Keep collection keys lowercase and clear (e.g., `savedStrands` or `mutationLogs`).
- Always structure database operations using modern asynchronous blocks with descriptive try/catch error handling.
- Ensure Firestore records include transactional timestamps (`serverTimestamp()`) rather than static client-side dates.
