# Product Requirements Document (PRD)
## NucleoSim Studio v3.0 — Enterprise-Grade Molecular Biology Simulator & AI Analyst

---

### 1. Executive Summary
NucleoSim Studio is a cloud-native, high-fidelity web platform designed for molecular biologists, educators, and bioinformatics researchers. It provides real-time, interactive modeling of nucleic acid structures (DNA and RNA), codon translation, ribosomal synthesis visualization, biophysical computations, and advanced genomic analyses powered by Google Gemini AI models. Version 3.0 elevates the software to enterprise-ready status by integrating persistent cloud workspace synchronizations, full-stack security patterns, bioinformatics standard exporters, and interactive point mutation sandboxes.

---

### 2. Objectives & Scope
- **Interactive Modeling**: Real-time modeling of DNA double-helix and RNA single-strand sequences.
- **Ribosomal Simulation**: Interactive visualizer showing codon scanning, tRNA anticodon docking, and nascent polypeptide chain growing.
- **Biochemical Calculus**: Instantaneous mathematical evaluation of Molecular Weight, GC percentage, hydrogen bonding, melting temperatures ($T_m$), and purine-pyrimidine distributions.
- **AI-Powered Diagnostics**: Deep analysis of promoter regions, transcription signal detection, open reading frame (ORF) predictions, and hypothetical point mutations.
- **Collaborative Persistence**: Cloud storage of active sessions and research templates via Firestore.
- **Bioinformatics Interoperability**: Direct exports to standardized formats (FASTA) and modern data structures (JSON).

---

### 3. Core Functional Requirements

#### 3.1. Interactive Sequence Studio & Editor
- **Input System**: High-contrast, custom monospaced text input that auto-normalizes lowercase keys to uppercase genetic letters (`A`, `T`, `C`, `G`, `U`).
- **Real-Time Validation**: Proactive evaluation of sequence integrity based on mode (e.g., flagging Uracil `U` in DNA mode, or Thymine `T` in RNA mode).
- **Auto-Repair Engine**: Single-click corrective mechanism to repair structural violations automatically.
- **Genomic Keyboard**: Quick-click on-screen buttons to construct sequences quickly without manual typing.
- **Preset Library**: Curated list of high-interest biological constructs (TATA Promoter, Human Insulin Segment, SARS-CoV-2 Spike Segment) to jumpstart research.

#### 3.2. Biophysical properties Engine
- **Molecular Weight Calculator**: Accurate estimation of total molecular weight ($g/mol$) for DNA and RNA, factoring in standard average base weights and terminal end groups.
- **GC Content metrics**: Real-time ratio tracking; highly critical for assessing strand thermodynamic stability and annealing properties.
- **Melting Temperature ($T_m$) Estimate**: Basic Wallace calculation ($2(A+T) + 4(G+C)$) for short oligonucleotides ($<14$ bases) and standard salt-adjusted estimations for longer sequences.
- **Bonds & Classifications**: Live tracking of Watson-Crick hydrogen bonding density and Purine vs. Pyrimidine distribution with structured visual bars.

#### 3.3. Molecular Strand & Mutation Lab
- **Double-Helix Visualization**: Dynamic, interactive layout representing the sense (top, $5'\rightarrow3'$) and antisense (bottom, $3'\rightarrow5'$) strands.
- **Complementary Base Pairing**: Correct color-coded base rendering (Adenine, Thymine, Uracil, Cytosine, Guanine) with visual hydrogen bond bridges.
- **In-Place Mutation Trigger**: Ability to click any nucleotide in the strand to inspect its chemical properties and trigger a Single Nucleotide Polymorphism (SNP) point mutation.
- **Mutation Ledger**: Automatic tracking of point mutations with real-time effect evaluation (Silent, Missense, Nonsense).

#### 3.4. Ribosome & Translation Animator
- **Ribosome Chamber**: Graphical rendering of a ribosome divided into the codon scanning line and active $A$-Site.
- **tRNA Docking Simulator**: Visual tRNA molecule docking simulation with correct anticodon base-pairing and aminoacyl connectors.
- **Polypeptide Synthesis Tracker**: Linear growing chain of named amino acid peptides linked together by visual peptide bonds.
- **Speed & Control Deck**: Forward, backward, pause, speed multipliers ($0.5x$, $1.0x$, $2.0x$), and full reset capabilities.

#### 3.5. Collaborative Cloud Library
- **Firestore Integration**: Instant, server-less data persistence that lets teams save sequences, custom names, hypothesis notes, and cached AI reports to a cloud repository.
- **Collaborative List**: Real-time list of all saved templates with quick-load capabilities and search/refresh triggers.

#### 3.6. Server-Side AI Deep Analytics
- **Secure Integration**: Google Gemini API key is locked in server environment variables and never exposed to the client browser.
- **Promoter & Motif Detection**: AI scans sequence to locate TATA boxes, Shine-Dalgarno sequences, Kozak consensus regions, or start/stop locations.
- **Mutation Impact Evaluation**: Suggests 2 potential point mutations and writes a narrative on their biochemical, clinical, or evolutionary impacts.

---

### 4. Non-Functional Requirements

#### 4.1. Security & Compliance
- **API Key Secrecy**: The server proxies all AI prompts. No client-side direct calls to the Gemini models are permitted.
- **Firestore Security Rules**: Rules configured to allow rapid research read/writes while remaining extensible for user-level access controls.

#### 4.2. Usability & Device Responsiveness
- **Desktop-First Precision**: Elaborate Bento Grid dashboards featuring side-by-side visualization, metrics, database logs, and ledger items.
- **Mobile adaptability**: Fluid horizontal scroll viewports for massive nucleotide sequences, preventing UI breakages. Touch targets are styled to be at least $44px$.
- **Typography & Theme**: Built with high-contrast, eye-safe midnight slate background (`#030712`) paired with professional neon accents (Emerald for DNA, Sky Blue for RNA, Amber for Ribosomal activity).

#### 4.3. Performance & Stability
- **Sub-Second Rendering**: DNA base mutation triggers recalculate complementary strands, molecular weight, peptide translation, and graphs in under 5ms.
- **Vite Bundler Compliance**: Production builds compile via `esbuild` to unified CommonJS (`dist/server.cjs`) to guarantee reliable deployments.
