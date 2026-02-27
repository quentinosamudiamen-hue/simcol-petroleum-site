"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");

  const links = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/products", label: "Products" },
      { href: "/transaction-framework", label: "Framework" },
      { href: "/documentation", label: "Documentation" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  // Active link logic: supports nested routes
  const isActiveHref = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Keep inputs in sync with URL when user navigates (important!)
  // NOTE: we do NOT use useSearchParams() to avoid prerender/Suspense issues on /_not-found, /404.
  useEffect(() => {
    if (pathname !== "/search") return;

    const q =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("q") ?? ""
        : "";

    queueMicrotask(() => {
      setSearchQuery(q);
      setMobileSearchQuery(q);
    });
  }, [pathname]);

  // Navbar elevation on scroll
  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 50;
      queueMicrotask(() => setElevated(next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    queueMicrotask(() => setOpen(false));
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Media query injection (in effect; safe)
  useEffect(() => {
    if (document.getElementById("simcol-nav-mq")) return;

    const style = document.createElement("style");
    style.id = "simcol-nav-mq";
    style.textContent = `
      @media (max-width: 980px) {
        nav ul.simcol-desktop-menu { display: none !important; }
        nav form.simcol-desktop-search { display: none !important; }
        nav button.simcol-hamburger { display: inline-flex !important; }
      }
      @media (max-width: 768px) {
        nav.simcol-nav { padding: 1rem 1.5rem !important; }
        .simcol-mobile-inner { padding: 0 1.5rem 1.25rem 1.5rem !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.getElementById("simcol-nav-mq")?.remove();
    };
  }, []);

  // Always navigate to /search?q=... (even if already on /search)
  const goSearch = (qRaw: string) => {
    const q = qRaw.trim();
    const nextUrl = q ? `/search?q=${encodeURIComponent(q)}` : `/search`;

    if (pathname === "/search") {
      router.replace(nextUrl);
      router.refresh();
    } else {
      router.push(nextUrl);
      router.refresh();
    }
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    goSearch(searchQuery);
  };

  const handleMobileSearch = (e: FormEvent) => {
    e.preventDefault();
    setOpen(false);
    goSearch(mobileSearchQuery);
  };

  return (
    <>
      <div style={navWrapperStyle(elevated)}>
        <nav className="simcol-nav" style={navStyle} aria-label="Primary">
          {/* Brand */}
          <Link href="/" style={brandStyle} aria-label="Simcol Petroleum Home">
            <div style={logoBadgeStyle}>
              <img
                src="/brand/simcol-logo.png"
                alt="Simcol Petroleum Nigeria Limited"
                style={logoImgStyle}
              />
            </div>

            <div style={{ lineHeight: 1.1 }}>
              <div style={brandTitleStyle}>Simcol Petroleum Nigeria Limited</div>
              <div style={brandSubStyle}>Dubai Execution Desk</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="simcol-desktop-menu" style={desktopMenuStyle}>
            {links.map((l) => {
              const isActive = isActiveHref(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={desktopLinkStyle(isActive)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                    {isActive ? <span style={activeUnderline} /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: desktop search + hamburger */}
          <div style={rightSideStyle}>
            <form
              className="simcol-desktop-search"
              onSubmit={handleSearch}
              style={{ display: "flex", gap: 8 }}
              role="search"
              aria-label="Site search"
            >
              <input
                type="search"
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={searchStyle}
                aria-label="Search"
              />
            </form>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="simcol-hamburger"
              style={hamburgerBtnStyle}
            >
              <span style={srOnly}>Menu</span>
              <HamburgerIcon open={open} />
            </button>
          </div>
        </nav>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          style={{
            ...mobilePanelStyle,
            maxHeight: open ? 620 : 0,
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
          }}
          aria-hidden={!open}
        >
          <div className="simcol-mobile-inner" style={mobileInnerStyle}>
            <form
              onSubmit={handleMobileSearch}
              style={{ marginBottom: 12 }}
              role="search"
              aria-label="Site search (mobile)"
            >
              <input
                type="search"
                placeholder="Search…"
                value={mobileSearchQuery}
                onChange={(e) => setMobileSearchQuery(e.target.value)}
                style={mobileSearchStyle}
                aria-label="Search"
              />
            </form>

            <div style={mobileLinksWrapStyle}>
              {links.map((l) => {
                const isActive = isActiveHref(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={mobileLinkStyle(isActive)}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div style={{ marginTop: 14 }}>
              <Link
                href="/contact"
                style={mobileCtaStyle}
                onClick={() => setOpen(false)}
              >
                Contact Execution Desk
              </Link>
            </div>

            <div style={mobileMetaStyle}>
              Export-only refined products • Institutional buyer engagement • Dubai
              execution
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          ...backdropStyle,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      />
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  const lineBase: CSSProperties = {
    display: "block",
    height: 2,
    width: 22,
    background: "#E5E7EB",
    borderRadius: 999,
    transition: "transform 180ms ease, opacity 180ms ease",
  };

  return (
    <span style={{ display: "grid", gap: 5 }}>
      <span
        style={{
          ...lineBase,
          transform: open ? "translateY(7px) rotate(45deg)" : "none",
        }}
      />
      <span style={{ ...lineBase, opacity: open ? 0 : 1 }} />
      <span
        style={{
          ...lineBase,
          transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
        }}
      />
    </span>
  );
}

/* -------------------- styles (inline) -------------------- */

const navWrapperStyle = (elevated: boolean): CSSProperties => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: "rgba(0,0,0,0.55)",
  backdropFilter: "blur(14px)",
  boxShadow: elevated
    ? "0 10px 30px rgba(0,0,0,0.35)"
    : "0 6px 18px rgba(0,0,0,0.25)",
  transition: "all 0.25s ease",
});

const navStyle: CSSProperties = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "1.15rem 3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
};

const brandStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.9rem",
  textDecoration: "none",
};

const logoBadgeStyle: CSSProperties = {
  width: 56,
  height: 56,
  borderRadius: 999,
  background: "rgba(0,0,0,0.62)",
  border: "1px solid rgba(255,255,255,0.14)",
  display: "grid",
  placeItems: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
};

const logoImgStyle: CSSProperties = {
  width: "84%",
  height: "84%",
  objectFit: "contain",
  filter:
    "drop-shadow(0 0 10px rgba(46,204,113,0.70)) drop-shadow(0 2px 6px rgba(0,0,0,0.60))",
};

const brandTitleStyle: CSSProperties = {
  fontSize: "0.95rem",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  color: "#FFFFFF",
};

const brandSubStyle: CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.70)",
  textTransform: "uppercase",
};

const desktopMenuStyle: CSSProperties = {
  display: "flex",
  gap: "1.65rem",
  listStyle: "none",
  alignItems: "center",
  margin: 0,
  padding: 0,
};

const desktopLinkStyle = (isActive: boolean): CSSProperties => ({
  color: isActive ? "#2ECC71" : "rgba(255,255,255,0.82)",
  textDecoration: "none",
  fontSize: "0.78rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  whiteSpace: "nowrap",
  position: "relative",
});

const activeUnderline: CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: -10,
  height: 2,
  background: "#2ECC71",
  borderRadius: 999,
};

const rightSideStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const searchStyle: CSSProperties = {
  padding: "0.55rem 0.85rem",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(0,0,0,0.25)",
  color: "#fff",
  borderRadius: 10,
  fontSize: "0.85rem",
  width: 220,
  outline: "none",
};

const hamburgerBtnStyle: CSSProperties = {
  appearance: "none",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.25)",
  borderRadius: 12,
  padding: "0.65rem 0.7rem",
  display: "none",
  cursor: "pointer",
};

const srOnly: CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
};

const mobilePanelStyle: CSSProperties = {
  maxWidth: 1400,
  margin: "0 auto",
  overflow: "hidden",
  transition: "max-height 220ms ease, opacity 220ms ease",
};

const mobileInnerStyle: CSSProperties = {
  padding: "0 3rem 1.25rem 3rem",
};

const mobileSearchStyle: CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.25)",
  color: "#fff",
  borderRadius: 12,
  fontSize: "0.95rem",
  outline: "none",
};

const mobileLinksWrapStyle: CSSProperties = {
  display: "grid",
  gap: 10,
};

const mobileLinkStyle = (isActive: boolean): CSSProperties => ({
  textDecoration: "none",
  color: isActive ? "#2ECC71" : "rgba(255,255,255,0.92)",
  fontWeight: 800,
  padding: "0.95rem 0.95rem",
  borderRadius: 14,
  border: `1px solid ${
    isActive ? "rgba(46,204,113,0.35)" : "rgba(255,255,255,0.10)"
  }`,
  background: "rgba(0,0,0,0.22)",
});

const mobileCtaStyle: CSSProperties = {
  display: "block",
  textAlign: "center",
  textDecoration: "none",
  background: "#2ECC71",
  color: "#0B0F10",
  fontWeight: 900,
  padding: "1rem 1rem",
  borderRadius: 14,
};

const mobileMetaStyle: CSSProperties = {
  marginTop: 12,
  fontSize: "0.8rem",
  color: "rgba(255,255,255,0.70)",
};

const backdropStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  zIndex: 999,
  transition: "opacity 200ms ease",
};