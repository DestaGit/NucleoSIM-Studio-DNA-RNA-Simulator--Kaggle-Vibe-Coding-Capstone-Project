# NucleoSim Studio v3.0 User Manual
## Professional Molecular Biology Simulation & Cloud Analytics Guide

---

### 1. Introduction
Welcome to **NucleoSim Studio v3.0**, the premium molecular sequence workbench. NucleoSim Studio provides professional-grade tools for modeling, modifying, and analyzing molecular biological structures (DNA & RNA), predicting translational structures, and invoking advanced Gemini AI genomics assessments.

---

### 2. Getting Started & Interactive Workspaces

#### 2.1. Navigating the Interface
The application is structured into three primary spaces:
1. **Sequence Studio**: The centralized laboratory cockpit where double-helix strands are rendered, physical properties computed, and point mutations stimulated.
2. **Base Bonding**: Interactive chemistry sandbox displaying base classifications (Purines vs. Pyrimidines), molecular structures, and correct hydrogen bond groupings.
3. **Ribosome Lab**: Full animation chamber illustrating tRNA codon binding, ribosome translocation steps, and nascent chain expansion.

#### 2.2. Selecting Sequence Presets
To quickly load model sequences, navigate to the **Select Genomic Preset** grid in the bottom left sidebar:
- **TATA Box Promoter**: Loads eukaryotic promoter structures.
- **Human Insulin Segment**: Loads human regulatory structures.
- **SARS-CoV-2 Spike Segment**: Loads viral single-strand structures.

---

### 3. Molecular Studio Operations

#### 3.1. Sequencing & Interactive Input
- Type or paste standard genetic letters into the **Sequence Editor** panel.
- Use the **Genomic Keyboard** (`A`, `T`, `C`, `G`, `U` buttons) to input specific base letters directly.
- The interface automatically monitors sequence parameters based on mode:
  - If DNA contains `U` or RNA contains `T`, a warning card is displayed. Click **✓ Auto-Repair Sequence** to automatically resolve compatibility errors.

#### 3.2. Single Nucleotide Polymorphism (SNP) Mutation Lab
- Click any active base circular button in the **Molecular Strand Visualizer**.
- This opens the **Molecular Base Inspector & Mutation Lab** modal.
- Inspect the base details: Standard naming, purine/pyrimidine categorization, hydrogen bond count.
- Click any mutation button in the right side of the inspector to substitute the selected base.
- Once clicked:
  - The sequence instantly shifts.
  - The complementary strand adapts dynamically.
  - Translating amino acids are recompiled.
  - The event is logged in the **Mutation Ledger** with instant classifications (**Silent**, **Missense**, or **Nonsense** mutations).

---

### 4. Interactive Ribosome Simulation

To simulate biological protein translation:
1. Load a sequence in the Sequence Studio.
2. Select the **Ribosome Lab** tab in the top header.
3. Use the control deck underneath the simulation board:
   - **Play**: Starts automatic codon step-by-step translation.
   - **Pause**: Halts animation in-place to allow careful study of tRNA docking.
   - **Step Forward/Backward**: Step manually through individual codons.
   - **Speed Multipliers**: Toggle synthesis frequency between `0.5x`, `1.0x`, and `2.0x`.
   - **Reset**: Empties the ribosomal chamber and starts over from codon index 1.

---

### 5. Exporters & Local Storage Workspace

#### 5.1. File Exporters
Located in the **Mutation History Log & Export Studio** at the bottom of the page:
- **FASTA Export**: Click to download a standardized bioinformatic `.fasta` sequence file with descriptive headers.
- **JSON Payload Export**: Click to download the full experimental JSON snapshot containing the DNA/RNA sequence, the translated amino acid string, and all mutations registered during the session.

#### 5.2. Persistent Session Manager
- Enter a name in the **Workspace Manager** form and click **Save Current Research**.
- This pushes the entire simulation state (including type, active sequence, translated protein, and cached AI analysis details) securely to the cloud Firestore database.
- Easily reload previous workspace snapshots by selecting item rows in the **Saved Research library** panel.
