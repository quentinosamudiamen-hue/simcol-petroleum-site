import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <Link href="/" className="flex items-center gap-3">
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

        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/transaction-framework">Framework</Link>
          <Link href="/documentation">Documentation</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

