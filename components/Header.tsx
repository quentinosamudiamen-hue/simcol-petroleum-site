import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur relative z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo / Home Link */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition"
          aria-label="Simcol Petroleum Nigeria Limited Home"
        >
          <Image
            src="/brand/simcol-logo.png"
            alt="Simcol Petroleum Nigeria Limited"
            width={42}
            height={42}
            priority
          />

          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">
              Simcol Petroleum Nigeria Limited
            </div>
            <div className="text-[11px] tracking-widest text-emerald-400">
              DUBAI EXECUTION DESK
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/products" className="hover:text-white transition">Products</Link>
          <Link href="/transaction-framework" className="hover:text-white transition">Framework</Link>
          <Link href="/documentation" className="hover:text-white transition">Documentation</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

      </div>
    </header>
  );
}