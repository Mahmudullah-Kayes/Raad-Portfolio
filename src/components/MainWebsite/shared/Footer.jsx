import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaLinkedinIn, FaPhone, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import { Download, Check, Copy, ArrowUpRight, ArrowUp } from "lucide-react";

const EMAIL = "raadmanjarehassin@gmail.com";
const PHONE = "+8801759001761";

const ring =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3FD1]";

const tiles = [
  { key: "email", label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: FaEnvelope, copy: EMAIL, breakAll: true },
  { key: "phone", label: "Phone", value: "+880 1759 001761", href: `tel:${PHONE}`, icon: FaPhone, copy: PHONE },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "manjare-hassin-raad",
    href: "https://www.linkedin.com/in/manjare-hassin-raad-7072a5362/",
    icon: FaLinkedinIn,
    external: true,
  },
];

export default function Footer() {
  const [copiedKey, setCopiedKey] = useState(null);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch {
        /* ignore */
      }
      document.body.removeChild(el);
    }
    setCopiedKey(key);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <footer
      id="contact"
      className="overflow-hidden bg-[#F4F3EF] px-4 pb-6 pt-14 text-[#111318] sm:px-6 sm:pb-8 sm:pt-20 md:px-10 md:pt-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Contact panel */}
        <div className="relative overflow-hidden rounded-[28px] border border-[#111318]/10 bg-white px-5 py-9 text-[#111318] shadow-sm sm:rounded-[36px] sm:px-10 sm:py-14 md:px-14 md:py-16">

          <div className="relative">
            <h2 className="max-w-[16ch] text-[clamp(2.25rem,9vw,4.5rem)] font-extrabold leading-[1] tracking-tight">
              Let’s work together.
            </h2>
            <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-[#111318]/70 sm:text-base md:text-lg">
              Open to new roles and opportunities. The quickest way to reach me is WhatsApp or email.
            </p>

            {/* Primary actions */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <a
                href="https://wa.me/8801759001761"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp (opens in a new tab)"
                className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#1F3FD1] px-6 text-sm font-bold text-[#F4F3EF] shadow-sm transition hover:bg-[#1833ad] active:scale-[0.98] motion-reduce:transition-none ${ring}`}
              >
                <FaWhatsapp size={20} aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href="/cv.pdf"
                download
                className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#111318]/20 px-6 text-sm font-semibold text-[#111318] transition hover:border-[#1F3FD1] hover:text-[#1F3FD1] active:scale-[0.98] motion-reduce:transition-none ${ring}`}
              >
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            </div>

            {/* Detail tiles */}
            <ul className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-3">
              {tiles.map((t) => {
                const Icon = t.icon;
                const copied = copiedKey === t.key;
                return (
                  <li key={t.key} className="relative">
                    <a
                      href={t.href}
                      {...(t.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={`${t.label}: ${t.value}${t.external ? " (opens in a new tab)" : ""}`}
                      className={`group flex h-full min-h-[84px] items-center gap-4 rounded-2xl border border-[#111318]/10 bg-[#F4F3EF] p-4 pr-14 transition hover:border-[#1F3FD1]/40 hover:bg-white motion-reduce:transition-none sm:min-h-[132px] sm:flex-col sm:items-start sm:justify-between sm:gap-0 sm:p-5 ${ring}`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111318] text-white transition group-hover:bg-[#1F3FD1]">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-[#111318]/55">{t.label}</span>
                        <span
                          className={`mt-0.5 block text-sm font-semibold ${
                            t.breakAll ? "break-all" : "truncate"
                          }`}
                        >
                          {t.value}
                        </span>
                      </span>
                      {t.external && (
                        <ArrowUpRight
                          size={16}
                          className="absolute right-4 top-4 text-[#111318]/40 transition group-hover:text-[#1F3FD1]"
                          aria-hidden="true"
                        />
                      )}
                    </a>

                    {t.copy && (
                      <button
                        type="button"
                        onClick={() => handleCopy(t.copy, t.key)}
                        aria-label={copied ? `${t.label} copied` : `Copy ${t.label.toLowerCase()}`}
                        title={`Copy ${t.label.toLowerCase()}`}
                        className={`absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full transition motion-reduce:transition-none ${ring} ${
                          copied ? "bg-emerald-50 text-emerald-600" : "text-[#111318]/50 hover:bg-[#111318]/5 hover:text-[#1F3FD1]"
                        }`}
                      >
                        {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 flex items-center gap-2 text-sm text-[#111318]/65">
              <FaLocationDot size={14} aria-hidden="true" />
              Dhaka, Bangladesh · Available worldwide
            </p>
          </div>
        </div>

        <span className="sr-only" role="status" aria-live="polite">
          {copiedKey ? "Copied to clipboard" : ""}
        </span>

        {/* Bottom bar */}
        <div className="mt-6 flex items-center justify-between gap-4 text-xs text-[#111318]/55 sm:mt-8">
          <p>© {new Date().getFullYear()} Manjare Hassin Raad</p>
          <a
            href="#home"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 font-semibold transition hover:text-[#1F3FD1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1F3FD1]"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}