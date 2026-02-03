import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/transaction-framework", label: "Transaction Framework" },
  { href: "/products", label: "Products" },
  { href: "/documentation", label: "Documentation" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-wide text-slate-900">
          SIMCOL PETROLEUM
        </span>

        <div className="flex gap-6 text-sm text-slate-700">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="hover:text-slate-900 transition"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
