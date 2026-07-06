# NucleoSim Studio v3.0 — Full-Stack Genomic Simulation Platform

NucleoSim Studio is an advanced, high-fidelity bioinformatics modeling platform built for molecular biologists, researchers, and students. It combines real-time physical-chemical biological metrics with responsive visual sequence editing, translation simulations, point mutation triggers, and cloud-native persistent storage.

---

## 🚀 Key Modules & Capabilities

- **Interactive Sequence Studio**: Modern UI designed to inspect sense and antisense structures, check thermodynamic weights, calculate GC counts, and trigger custom mutations.
- **Biochemical Analysis Engine**: Calculates accurate Molecular Weights ($g/mol$), Purine/Pyrimidine percentages, Watson-Crick hydrogen bonding structures, and melting temperatures ($T_m$).
- **Ribosomal Translation Animator**: High-fidelity ribosomal simulator that translates triplet codons by docking active tRNA complexes to synthesize growing peptide structures in real-time.
- **Enterprise-Grade Cloud Workspace**: Connects directly to Google Cloud Firestore, letting researchers persist custom sequences, mutation ledgers, and AI diagnostics.
- **Server-Side AI Analytics**: Integrated secure proxies calling Google Gemini models to detect critical consensus sequences (e.g. TATA box, Shine-Dalgarno) and evaluate clinical mutation profiles.
- **Bioinformatics Interoperability**: Fully supports standard FASTA exports and JSON structured snapshot outputs.

---

## 🛠️ Technology Stack & Frameworks

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Lucide Icons, Recharts
- **Backend Server**: Node.js, Express, tsx, esbuild
- **Database**: Google Firestore (Firebase)
- **AI Integration**: `@google/genai` (utilizing Google Gemini models)

---

## 📁 Repository Structure Blueprint

```
├── .env.example              # Declarations of required environment variables
├── package.json              # Platform dependencies & builds
├── server.ts                 # Full-stack Node Express server entry point
├── PRD.md                    # Core product requirements document
├── architecture.md           # Structural system architecture maps
├── user_manual.md            # Interactive operational guide
├── standalone_index.html     # Single-file offline-friendly simulator
├── documentation_guideline_manual.md # Standard documentation and formatting guides
├── src/
│   ├── App.tsx               # Main React orchestration layout
│   ├── main.tsx              # Primary mounting entry point
│   ├── types.ts              # Global type interfaces and structures
│   ├── constants.ts          # Biochemical mappings and tables
│   ├── components/
│   │   ├── StrandVisualizer.tsx      # Dual-strand nucleotide renderer
│   │   ├── BasePairingExplorer.tsx   # Chemical bonding explorer
│   │   ├── TranslationAnimator.tsx   # Animated Ribosome simulation
│   │   ├── BiophysicalAnalyzer.tsx   # Biological calculations panel
│   │   ├── WorkspaceManager.tsx      # Cloud persistent library controls
│   │   └── MutationLog.tsx           # Standardized files exporter & mutation ledger
│   └── services/
│       ├── firebase.ts               # Google Firebase configuration
│       └── geminiService.ts          # Server AI communications client
```

---

## 🔧 Installation & Local Setup

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 2. Configure Environment Secrets
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Boot Dev Server
```bash
npm run dev
```
The server will start running on port `3000`. Open `http://localhost:3000` to interact with the full workspace.

### 5. Build for Production Compilation
```bash
npm run build
```
This command compiles static client files into `/dist` and bundles the Express server into `dist/server.cjs` using `esbuild` for maximum execution speed.
