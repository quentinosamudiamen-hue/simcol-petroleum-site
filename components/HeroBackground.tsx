import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base image */}
      <Image
        src="/brand/banner-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-left-top"
      />

      {/* Base dark wash (kills panel seams) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Directional gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-[#061326]/75" />

      {/* NEW: subtle green radial glow (brand depth) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(46,204,113,0.18),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(46,204,113,0.10),transparent_60%)]" />

      {/* NEW: dot grid overlay (very subtle) */}
      <div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(circle_at_35%_35%,black_0%,transparent_62%)]">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(46,204,113,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* NEW: micro-noise overlay (premium texture) */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette for a premium “finance” look */}
      <div className="absolute inset-0 shadow-[inset_0_0_260px_rgba(0,0,0,0.9)]" />
    </div>
  );
}