"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* CONFIGURATION                                                      */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Framework", href: "/transaction-framework" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/* SUBCOMPONENTS                                                      */
/* ------------------------------------------------------------------ */

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      {/* Text logo plate (Phase 1 placeholder) */}
      <div className="flex h-9 items-center rounded-xl border border-neutral-800 bg-neutral-900/80 px-3 transition-colors group-hover:border-neutral-700">
        <span className="text-[11px] font-semibold tracking-[0.18em] text-neutral-200">
          SIMCOL
        </span>
      </div>

      {/* Identity (hidden on mobile) */}
      <div className="hidden leading-tight sm:block">
        <span className="block text-sm font-semibold text-neutral-100">
          Simcol Petroleum Nigeria Limited
        </span>
        <span className="block text-xs text-neutral-400">
          Dubai Execution Desk
        </span>
      </div>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-6 md:flex"
      aria-label="Main navigation"
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded text-sm text-neutral-300 transition-colors hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function MobileMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col gap-1.5 rounded p-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
    >
      <span
        className={`h-0.5 w-5 bg-neutral-300 transition-transform duration-300 ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 w-5 bg-neutral-300 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-0.5 w-5 bg-neutral-300 transition-transform duration-300 ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );
}

function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <nav
      id="mobile-nav"
      className="border-t border-neutral-900 py-4 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex flex-col gap-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-3 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((v) => !v);
  const handleClose = () => setIsOpen(false);

  // Scroll lock + Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <DesktopNav />
          <MobileMenuButton isOpen={isOpen} onClick={handleToggle} />
        </div>

        <MobileNav isOpen={isOpen} onClose={handleClose} />
      </div>
    </header>
  );
}