import { useEffect, useState } from "react";
import { Home, Briefcase, User, Mail, Download } from "lucide-react";

const links = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3FD1]";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Top bar style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));

    // The footer is short, so force "contact" when scrolled to the very bottom
    const onBottom = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive("contact");
      }
    };
    window.addEventListener("scroll", onBottom, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onBottom);
    };
  }, []);

  return (
    <>
      {/* Top bar: slim on mobile, full nav on desktop */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
          scrolled
            ? "border-b border-[#111318]/10 bg-[#F4F3EF]/90 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-[#F4F3EF]/60 backdrop-blur-sm"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 md:h-16 md:px-10"
        >
          <a
            href="#home"
            className={`text-[15px] font-bold tracking-tight text-[#111318] transition hover:text-[#1F3FD1] md:text-base ${focus}`}
          >
            Manjare Hassin Raad
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {links
                .filter((l) => l.id !== "home")
                .map((l) => (
                  <li key={l.id}>
                    <a
                      href={l.href}
                      aria-current={active === l.id ? "true" : undefined}
                      className={`transition hover:text-[#1F3FD1] ${
                        active === l.id ? "text-[#1F3FD1]" : "text-[#111318]/70"
                      } ${focus}`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
            </ul>
            <a
              href="/cv.pdf"
              download
              className={`inline-flex items-center gap-2 rounded-full bg-[#1F3FD1] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#1833ad] hover:shadow ${focus}`}
            >
              <Download size={13} aria-hidden="true" />
              Download CV
            </a>
          </div>

          {/* Mobile: CV as a compact icon button */}
          <a
            href="/cv.pdf"
            download
            aria-label="Download CV"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#1F3FD1] text-white shadow-sm transition active:scale-95 md:hidden ${focus}`}
          >
            <Download size={18} aria-hidden="true" />
          </a>
        </nav>
      </header>

      {/* Mobile bottom tab bar */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#111318]/10 bg-[#F4F3EF]/90 backdrop-blur-lg md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <ul className="mx-auto grid max-w-md grid-cols-4 px-2">
          {links.map((l) => {
            const Icon = l.icon;
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative flex h-16 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold transition motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1F3FD1] ${
                    isActive ? "text-[#1F3FD1]" : "text-[#111318]/55 active:text-[#111318]"
                  }`}
                >
                  <span
                    className={`flex h-8 w-14 items-center justify-center rounded-full transition motion-reduce:transition-none ${
                      isActive ? "bg-[#1F3FD1]/12" : "group-active:bg-[#111318]/5"
                    }`}
                  >
                    <Icon size={20} strokeWidth={isActive ? 2.4 : 2} aria-hidden="true" />
                  </span>
                  <span>{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}