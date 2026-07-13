import { brands } from '../../data/brands';

// Duplicate items multiple times for a truly seamless infinite loop
const doubledBrands = [...brands, ...brands, ...brands, ...brands];

export default function BrandMarquee() {
  return (
    <section className="relative py-16 border-y border-white/5 overflow-hidden bg-white/[0.01] transition-colors duration-300">
      {/* Background orb */}
      <div className="glow-orb glow-orb-blue w-[400px] h-[200px] top-0 left-1/4 opacity-10 pointer-events-none" />

      <div className="relative z-10">
        {/* Label */}
        <div className="text-center mb-10">
          <span className="text-slate-400 text-xs tracking-[0.3em] uppercase font-mono font-semibold">
            Trusted by innovative brands
          </span>
        </div>

        {/* Marquee Track */}
        <div className="marquee-container">
          <div className="marquee-track">
            {doubledBrands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-8 px-6 select-none"
              >
                {/* Clickable Brand Card */}
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 px-5 py-3 rounded-xl border border-white/5 bg-white/[0.02] shadow-sm backdrop-blur-md w-[190px] h-14 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.05] hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.displayName}
                    className="max-h-6 max-w-[40px] object-contain select-none"
                  />
                  <span className="text-slate-200 font-medium text-sm tracking-wide whitespace-nowrap">
                    {brand.displayName}
                  </span>
                </a>
                {/* Separator */}
                <span className="text-slate-800 text-xl select-none">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
