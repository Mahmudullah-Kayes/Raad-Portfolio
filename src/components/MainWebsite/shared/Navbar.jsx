import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3FD1]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-[#111318]/10 bg-[#F4F3EF]/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-[#F4F3EF]/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
        <a href="#home" className={`text-base font-bold tracking-tight text-[#111318] hover:text-[#1F3FD1] transition ${focus}`}>
          Manjare Hassin Raad
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[#111318]/70 transition hover:text-[#1F3FD1] ${focus}`}
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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`rounded-full p-2 text-[#111318] hover:bg-[#111318]/5 md:hidden ${focus}`}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[#111318]/10 bg-[#F4F3EF] px-6 pb-6 pt-2 shadow-lg md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-[#111318]/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3.5 text-base font-semibold text-[#111318] ${focus}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/cv.pdf"
            download
            onClick={() => setOpen(false)}
            className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F3FD1] px-5 py-3 text-sm font-bold text-white shadow-sm ${focus}`}
          >
            <Download size={15} aria-hidden="true" />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}