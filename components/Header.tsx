import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur relative z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo / Home Link */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
          aria-label="Simcol Petroleum Nigeria Limited Home"
        >
          <Image
            src="/brand/simcol-logo.png"
            alt="Simcol Petroleum Nigeria Limited"
            width={46}
            height={46}
            quality={100}
            priority
            sizes="42px"
            className="object-contain"
          />

          <div className="leading-tight select-none">
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
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/transaction-framework" className="hover:text-white transition-colors">Framework</Link>
          <Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

      </div>
    </header>
  );
}