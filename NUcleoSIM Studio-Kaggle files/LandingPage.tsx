import React, { useState, useEffect, useRef } from 'react';
import { 
  Dna, 
  Play, 
  Flame, 
  Cpu, 
  Atom, 
  Download, 
  History, 
  FileJson, 
  Database, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  GraduationCap, 
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface Preset {
  name: string;
  seq: string;
  type: 'DNA' | 'RNA';
  desc: string;
}

interface LandingPageProps {
  onLaunch: (tab: 'simulator' | 'academy' | 'translation', initialSeq?: string, initialType?: 'DNA' | 'RNA') => void;
  presets: Preset[];
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLaunch, presets }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredPreset, setHoveredPreset] = useState<string | null>(null);
  const [quickInput, setQuickInput] = useState('ATGCGATCGCTA');
  const [quickType, setQuickType] = useState<'DNA' | 'RNA'>('DNA');

  // DNA Interactive Double Helix Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 240);

    // Handle Resize
    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 240;
      }
    };
    window.addEventListener('resize', handleResize);

    let angle = 0;
    const speed = 0.015;
    const amplitude = 50;
    const frequency = 0.02;
    const numNodes = 28;

    const bases = ['A', 'T', 'C', 'G'];
    const colors = {
      A: '#10B981', // emerald-500
      T: '#EF4444', // red-500
      C: '#F59E0B', // amber-500
      G: '#3B82F6', // blue-500
      U: '#06B6D4'  // cyan-500
    };

    const drawHelix = () => {
      ctx.clearRect(0, 0, width, height);
      
      const step = width / (numNodes - 1);
      
      // Draw connection lines first (back layer)
      for (let i = 0; i < numNodes; i++) {
        const x = i * step;
        const y1 = height / 2 + Math.sin(angle + x * frequency) * amplitude;
        const y2 = height / 2 + Math.sin(angle + x * frequency + Math.PI) * amplitude;
        
        ctx.beginPath();
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw strands and nodes
      for (let i = 0; i < numNodes; i++) {
        const x = i * step;
        const sineVal1 = Math.sin(angle + x * frequency);
        const sineVal2 = Math.sin(angle + x * frequency + Math.PI);
        const y1 = height / 2 + sineVal1 * amplitude;
        const y2 = height / 2 + sineVal2 * amplitude;
        
        // Size modulation for depth illusion
        const r1 = 5 + (sineVal1 + 1) * 2.5;
        const r2 = 5 + (sineVal2 + 1) * 2.5;

        // Base color selection based on position index
        const baseChar1 = bases[i % 4];
        const baseChar2 = bases[(i + 2) % 4];
        const col1 = colors[baseChar1 as keyof typeof colors];
        const col2 = colors[baseChar2 as keyof typeof colors];

        // Draw node 1
        ctx.beginPath();
        ctx.arc(x, y1, r1, 0, Math.PI * 2);
        ctx.fillStyle = col1;
        ctx.shadowColor = col1;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Draw node 2
        ctx.beginPath();
        ctx.arc(x, y2, r2, 0, Math.PI * 2);
        ctx.fillStyle = col2;
        ctx.shadowColor = col2;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Draw node text (subtle)
        if (i % 2 === 0 && r1 > 6) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#94A3B8';
          ctx.font = 'bold 9px monospace';
          ctx.fillText(baseChar1, x - 3, y1 - r1 - 4);
        }
      }

      // Reset shadow blur
      ctx.shadowBlur = 0;

      angle += speed;
      animationFrameId = requestAnimationFrame(drawHelix);
    };

    drawHelix();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleQuickLaunch = () => {
    onLaunch('simulator', quickInput, quickType);
  };

  return (
    <div className="space-y-16 py-6 pb-20 animate-in fade-in duration-700">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900/30 border border-slate-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col items-center text-center space-y-8">
        {/* Subtle decorative glowing backdrops */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Hero Badging */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Molecular Simulation Suite v3.0</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>

        {/* Hero Headline & Intro */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-500 bg-clip-text text-transparent">
            Unravel Genomes in Real-Time
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The web's most visual, high-fidelity biological computing studio. Code, transcribe, mutate, and translate nucleic acid strands with deep biophysical analytics and integrated server-side AI.
          </p>
        </div>

        {/* Interactive Helix Visualizer Component */}
        <div className="w-full max-w-4xl bg-slate-950/40 rounded-3xl border border-white/5 p-4 relative backdrop-blur-sm">
          <div className="absolute top-3 left-4 flex items-center gap-1.5 text-[10px] text-slate-500 uppercase tracking-widest font-mono">
            <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>Live Interactive Helix Render</span>
          </div>
          <canvas ref={canvasRef} className="w-full h-[180px] md:h-[220px]" />
        </div>

        {/* Core Launch CTA Suite */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg pt-4">
          <button
            onClick={() => onLaunch('simulator')}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl shadow-xl shadow-emerald-500/10 hover:shadow-emerald-400/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 text-sm"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            Launch Sequence Studio
          </button>
          
          <button
            onClick={() => onLaunch('translation')}
            className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-2xl hover:border-slate-700 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Layers className="w-4 h-4 text-sky-400" />
            Ribosome Lab
          </button>

          <button
            onClick={() => onLaunch('academy')}
            className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-2xl hover:border-slate-700 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
          >
            <GraduationCap className="w-4 h-4 text-purple-400" />
            Base Bonding
          </button>
        </div>

        {/* Offline App Download Banner */}
        <div className="pt-2">
          <a
            href="/api/download-standalone"
            download="nucleosim_studio_offline.html"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/60 hover:bg-emerald-500/10 text-xs font-semibold text-emerald-400 border border-emerald-500/15 hover:border-emerald-500/30 transition-all"
            title="Download fully responsive, self-contained single-file offline simulator"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Standalone Offline App (HTML)</span>
          </a>
        </div>
      </section>

      {/* QUICK WORKSPACE PLAYGROUND / QUICK LAUNCH */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-5">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Instant Genome Loadout
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Enter any custom genomic sequence or seed a sample below to jump directly into the sequence simulator with pre-populated configurations.
          </p>

          <div className="bg-slate-900/20 p-4 rounded-2xl border border-slate-900 space-y-3">
            <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
              <span>WATSON-CRICK COMPLEMENT</span>
              <span className="text-emerald-500 font-bold">Auto-Generated</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs tracking-widest break-all text-slate-400">
              {quickType === 'DNA' ? (
                quickInput.split('').map((char, i) => {
                  const comp: Record<string, string> = { A: 'T', T: 'A', C: 'G', G: 'C' };
                  return <span key={i} className={char === 'A' || char === 'T' ? 'text-emerald-400 font-bold' : 'text-blue-400 font-bold'}>{comp[char.toUpperCase()] || char}</span>;
                })
              ) : (
                <span className="text-slate-600 italic">Complementary pairs only applicable to DNA Double-Helix</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Sandbox Editor Column */}
        <div className="lg:col-span-7 bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-white/5 space-y-6 relative">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Workspace Preseed</span>
            <div className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button 
                onClick={() => {
                  setQuickType('DNA');
                  setQuickInput(prev => prev.replace(/U/g, 'T'));
                }}
                className={`px-3 py-1 text-[10px] rounded-lg font-bold transition-all ${quickType === 'DNA' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 'text-slate-400'}`}
              >
                DNA
              </button>
              <button 
                onClick={() => {
                  setQuickType('RNA');
                  setQuickInput(prev => prev.replace(/T/g, 'U'));
                }}
                className={`px-3 py-1 text-[10px] rounded-lg font-bold transition-all ${quickType === 'RNA' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/20' : 'text-slate-400'}`}
              >
                RNA
              </button>
            </div>
          </div>

          <textarea
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-slate-300 text-sm tracking-widest focus:outline-none focus:ring-1 focus:ring-emerald-500 min-h-[90px] uppercase"
            value={quickInput}
            onChange={(e) => setQuickInput(e.target.value.toUpperCase().replace(/[^ATCGU]/g, ''))}
            placeholder="Type code (A, T, C, G)..."
          />

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-950">
            <div className="flex flex-wrap gap-1.5">
              {['A', 'T', 'C', 'G', 'U'].map((b) => {
                const disabled = (quickType === 'DNA' && b === 'U') || (quickType === 'RNA' && b === 'T');
                return (
                  <button
                    key={b}
                    disabled={disabled}
                    onClick={() => setQuickInput(prev => prev + b)}
                    className={`w-8 h-8 rounded-lg font-bold text-xs transition-all border ${
                      disabled 
                        ? 'bg-slate-950 text-slate-800 border-slate-900/40 cursor-not-allowed' 
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
              <button
                onClick={() => setQuickInput('')}
                className="px-2 h-8 bg-slate-950 hover:bg-slate-900 text-slate-500 hover:text-slate-300 rounded-lg text-[10px] font-bold border border-slate-800 transition-all"
              >
                Reset
              </button>
            </div>

            <button
              onClick={handleQuickLaunch}
              className="px-5 py-2.5 bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 text-xs font-bold rounded-xl border border-emerald-500/20 hover:border-transparent transition-all flex items-center gap-1.5"
            >
              <span>Load Sequence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* CORE FEATURES BENTO GRID */}
      <section className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-white tracking-tight">Enterprise Genomics Toolchain</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Professional bio-informatics modeling mapped to high-fidelity, fluid visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Sequence Studio */}
          <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900/60 hover:border-white/5 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center">
              <Dna className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Sequence Studio</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time biological double-helix representation and duplex replication models. Instantly transcribe genes to matching messenger RNA strings.
              </p>
            </div>
          </div>

          {/* Card 2: Environmental Mutagen Suite */}
          <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900/60 hover:border-white/5 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Environmental Mutagen Suite</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Induce solar ultraviolet light lesions or chemical alkylation. Map replication slippage with frameshift insertion controls.
              </p>
            </div>
          </div>

          {/* Card 3: Ribosome Lab */}
          <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900/60 hover:border-white/5 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Ribosome Lab</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A fully interactive polypeptide sequencer. Step frame-by-frame through tRNA anticodons reading Ribosomal A, P, and E sites.
              </p>
            </div>
          </div>

          {/* Card 4: Base Bonding Academy */}
          <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900/60 hover:border-white/5 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Base Bonding Academy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Thermodynamic educational dashboard for base pair pairings. Inspect hydrogen bond lengths, donors/acceptors, and steric rules.
              </p>
            </div>
          </div>

          {/* Card 5: Biophysical Analytics */}
          <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900/60 hover:border-white/5 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/10 flex items-center justify-center">
              <Atom className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Biophysical Analytics</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Predict melting points using Wallace/Basic formula algorithms. Estimate accurate molecular weights and nucleotide ratios.
              </p>
            </div>
          </div>

          {/* Card 6: AI-Powered Reasoner */}
          <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900/60 hover:border-white/5 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">AI-Powered Reasoner</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Unlock advanced genetic summaries and transcription factors using Google Gemini model structures. Safe local rules fallback.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BIOLOGICAL GENOMIC PRESETS QUICK TRIGGER SECTION */}
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="border-t border-slate-900/80 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Explore Predefined Templates</h2>
            <p className="text-slate-400 text-xs mt-1">Start instantly with real sequence blueprints validated from public biological databases.</p>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-widest">
            {presets.length} blueprinted loops
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {presets.map((preset) => (
            <div
              key={preset.name}
              onMouseEnter={() => setHoveredPreset(preset.name)}
              onMouseLeave={() => setHoveredPreset(null)}
              onClick={() => onLaunch('simulator', preset.seq, preset.type)}
              className="p-5 bg-slate-900/25 border border-slate-900 hover:border-emerald-500/30 rounded-2xl transition-all cursor-pointer hover:scale-[1.01] flex flex-col justify-between h-[160px] group relative"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${preset.type === 'DNA' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-sky-500/10 text-sky-400'}`}>
                    {preset.type}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="font-bold text-sm text-slate-100 group-hover:text-emerald-300 transition-colors line-clamp-1">{preset.name}</h3>
                <p className="text-[11px] text-slate-500 leading-normal line-clamp-3 group-hover:text-slate-400 transition-colors">{preset.desc}</p>
              </div>

              {/* Sequence preview at bottom */}
              <div className="font-mono text-[9px] text-slate-600 group-hover:text-emerald-400/70 truncate tracking-wider pt-2 border-t border-slate-900">
                {preset.seq}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFLINE COMPLIANCE & ACCREDITATION BANNER */}
      <section className="max-w-6xl mx-auto p-8 rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900/60 to-slate-950 border border-slate-900/80 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">Fully Compliant & Offline Ready</h3>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              NucleoSim Studio runs completely on client hardware. All base mutations, hydrogen calculations, and visual transcriptions execute locally. To work fully disconnected from the internet, you can download the standalone executable HTML template above.
            </p>
          </div>
        </div>

        <a
          href="/api/download-standalone"
          download="nucleosim_studio_offline.html"
          className="flex-shrink-0 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-500/5 hover:shadow-emerald-400/20"
        >
          Get Standalone App
        </a>
      </section>

    </div>
  );
};
