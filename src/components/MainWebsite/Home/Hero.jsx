import { useState, useRef, useEffect } from "react";
import { Download, Mail, Check } from "lucide-react";

const EMAIL = "raadmanjarehassin@gmail.com";
const WHATSAPP_URL = "https://wa.me/8801759001761";

// lucide-react has no brand icons, so WhatsApp is an inline SVG (inherits currentColor)
function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.4z" />
    </svg>
  );
}

const STATS = [
  { value: "95%", label: "Customer satisfaction rate", accent: true },
  { value: "300+", label: "Applications handled monthly" },
  { value: "+12%", label: "Enrollment growth in six months" },
  { value: "LLM & LLB", label: "3.99 CGPA academic foundation", accent: true },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for browsers/contexts without the Clipboard API
      const el = document.createElement("textarea");
      el.value = EMAIL;
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
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F4F3EF] px-4 pb-14 pt-24 text-[#111318] sm:px-6 sm:pb-20 sm:pt-28 md:px-10 md:pb-28 md:pt-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#1F3FD1]/10 via-[#1F3FD1]/5 to-transparent blur-3xl sm:h-[450px] sm:w-[650px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[1fr_300px] md:items-center md:gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Photo: on top for mobile, right column on desktop */}
          <div className="order-first mx-auto w-full max-w-[220px] sm:max-w-[260px] md:order-last md:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border-2 border-white bg-white shadow-xl shadow-[#111318]/5">
              <img
                src="/raad.jpg"
                alt="Manjare Hassin Raad"
                className="aspect-[4/5] w-full object-cover object-top transition duration-500 motion-reduce:transition-none md:hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111318]/85 via-[#111318]/30 to-transparent p-3 text-white sm:p-4">
                <p className="text-sm font-bold tracking-wide">Manjare Hassin Raad</p>
                <p className="text-[11px] text-white/80 sm:text-xs">
                  Dhaka, Bangladesh · Available Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#111318]/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Open to new roles</span>
            </div>

            <h1 className="mt-5 text-[clamp(2rem,8vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight">
              Manjare Hassin Raad
            </h1>

            <p className="mx-auto mt-4 max-w-[34ch] text-lg font-medium leading-snug text-[#111318]/90 sm:text-xl md:mx-0 md:mt-5 md:text-2xl">
              Law graduate with strong analytical ability, client guidance experience, and proven team leadership.
            </p>

            <p className="mx-auto mt-3 max-w-[42ch] text-[15px] leading-relaxed text-[#111318]/70 sm:text-base md:mx-0 md:mt-4 md:text-lg">
              Bringing structured thinking, clear communication, and dependable follow-through to every role I take on.
            </p>

            {/* CTAs: full-width primary, then two equal buttons on mobile; inline row from sm up */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center md:justify-start sm:justify-center">
              <a
                href="/cv.pdf"
                download
                className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1F3FD1] px-6 text-sm font-semibold text-[#F4F3EF] shadow-sm transition hover:bg-[#1833ad] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3FD1] active:scale-[0.98] motion-reduce:transition-none"
              >
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp (opens in a new tab)"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-white px-4 text-sm font-semibold text-[#111318] shadow-sm transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] active:scale-[0.98] sm:px-5 motion-reduce:transition-none"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366] transition group-hover:text-white" />
                WhatsApp
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={copied ? "Email address copied" : "Copy email address"}
                title="Copy email to clipboard"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3FD1] active:scale-[0.98] sm:px-5 motion-reduce:transition-none ${
                  copied
                    ? "border-emerald-500/50 bg-emerald-50 text-emerald-700"
                    : "border-[#111318]/20 bg-white text-[#111318] hover:border-[#1F3FD1] hover:text-[#1F3FD1]"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={18} aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Mail size={18} aria-hidden="true" />
                    Email
                  </>
                )}
              </button>
            </div>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>
        </div>

        {/* Highlights: 2x2 on mobile, 4 across from sm. gap-px over a tinted bg draws clean dividers */}
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#111318]/10 bg-[#111318]/10 shadow-sm sm:grid-cols-4 md:mt-20">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/90 p-4 text-center sm:p-6 sm:text-left">
              <dt className="sr-only">{s.label}</dt>
              <dd
                className={`text-[clamp(1.35rem,5vw,1.875rem)] font-extrabold leading-tight tracking-tight ${
                  s.accent ? "text-[#1F3FD1]" : "text-[#111318]"
                }`}
              >
                {s.value}
              </dd>
              <p className="mt-1 text-[11px] font-medium leading-snug text-[#111318]/70 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}