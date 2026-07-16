import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "@/assets/logo-fl.png";
import logoWhiteAsset from "@/assets/logo-fl-white.png";

export const WHATSAPP_URL =
  "https://wa.me/5567984574855?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20da%20FL%20Consultoria.";
export const WHATSAPP_DISPLAY = "(67) 9 8457-4855";
export const EMAIL = "fljpostigo@gmail.com";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border/60"
          : "bg-cream/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-fl flex h-20 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group" aria-label="FL Consultoria — Início">
          <img
            src={logoAsset}
            alt="FL Consultoria"
            width={44}
            height={44}
            className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-navy">
              FL Consultoria
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Educação Corporativa
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-navy" : "text-navy/70 hover:text-navy"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-px transition-all ${
                    active ? "bg-mint-deep" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-mint-deep px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-mint hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Fale conosco
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-navy"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-cream/95 backdrop-blur-md animate-fade-in">
          <nav className="container-fl flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-base font-medium text-navy border-b border-border/60 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-mint-deep px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-navy text-cream texture-dark">
      <svg
        className="pointer-events-none absolute right-0 top-0 h-36 w-36 opacity-10"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <g fill="none" stroke="#83CDA4" strokeWidth="1.2">
          <circle cx="40" cy="40" r="4" />
          <circle cx="80" cy="40" r="4" />
          <circle cx="120" cy="40" r="4" />
          <line x1="44" y1="40" x2="76" y2="40" />
          <line x1="84" y1="40" x2="116" y2="40" />
          <circle cx="40" cy="80" r="4" />
          <circle cx="80" cy="80" r="4" />
          <line x1="44" y1="80" x2="76" y2="80" />
        </g>
      </svg>

      <div className="container-fl relative flex flex-col items-center justify-between gap-5 py-7 md:flex-row">
        <Link to="/" aria-label="FL Consultoria — Início" className="shrink-0">
          <img
            src={logoWhiteAsset}
            alt="FL Consultoria"
            width={54}
            height={54}
            className="h-12 w-12 object-contain"
          />
        </Link>

        <nav aria-label="Links institucionais">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-cream/85 transition-colors hover:text-mint-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/12">
        <div className="container-fl py-3 text-center text-[10px] text-cream/60">
          <p>© {new Date().getFullYear()} FL Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint-deep text-white shadow-lg shadow-navy/20 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="site-canvas pt-20">{children}</main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-cream-deep/40 texture-paper-soft">
      <Decor />
      <div
        className={`container-fl relative ${compact ? "py-12 md:py-16" : "py-20 md:py-28"}`}
      >
        <div className="max-w-5xl rounded-[1.75rem] border border-border/85 bg-cream/85 p-7 shadow-[0_16px_40px_rgba(38,36,91,0.08)] backdrop-blur-sm md:p-10">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-navy md:text-6xl">
            {title} {highlight && <span className="text-mint-deep">{highlight}</span>}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function Decor() {
  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 h-[420px] w-[420px] opacity-60"
        viewBox="0 0 400 400"
      >
        <path
          d="M400 200 a200 200 0 0 1 -200 200"
          fill="none"
          stroke="#B9E2C7"
          strokeWidth="40"
          strokeLinecap="round"
        />
        <circle cx="200" cy="60" r="6" fill="#76C792" />
        <circle cx="260" cy="80" r="4" fill="#76C792" />
        <circle cx="320" cy="120" r="4" fill="#76C792" />
      </svg>
    </>
  );
}

export function DiagonalStripes({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 60 60" className={className}>
      <g stroke="#83CDA4" strokeWidth="2">
        <line x1="0" y1="50" x2="50" y2="0" />
        <line x1="10" y1="60" x2="60" y2="10" />
        <line x1="20" y1="60" x2="60" y2="20" />
      </g>
    </svg>
  );
}
