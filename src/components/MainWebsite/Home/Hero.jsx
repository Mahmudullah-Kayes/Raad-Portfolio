import { useState } from "react";
import { Download, Mail, MessageSquare, Check, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("raadmanjarehassin@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F4F3EF] px-6 pb-20 pt-28 text-[#111318] md:px-10 md:pb-28 md:pt-36"
    >
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[650px] rounded-full bg-gradient-to-tr from-[#1F3FD1]/10 via-[#1F3FD1]/5 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-[1fr_320px] md:items-center md:gap-16">
          <div>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#111318]/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#111318] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Open to new roles</span>
            </div>

            {/* Name */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#111318] sm:text-5xl md:text-6xl">
              Manjare Hassin Raad
            </h1>

            <p className="mt-5 max-w-[32ch] text-xl font-medium leading-snug text-[#111318]/90 md:text-2xl">
              Law graduate with strong analytical ability, client guidance experience, and proven team leadership.
            </p>

            <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-[#111318]/70 md:text-lg">
              Bringing structured thinking, clear communication, and dependable follow-through to every role I take on.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[#1F3FD1] px-6 py-3.5 text-sm font-semibold text-[#F4F3EF] shadow-sm transition hover:bg-[#1833ad] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3FD1]"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>

              <a
                href="https://wa.me/8801759001761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#111318]/20 bg-white/70 px-5 py-3.5 text-sm font-semibold text-[#111318] shadow-sm transition hover:border-[#1F3FD1] hover:bg-white hover:text-[#1F3FD1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]"
              >
                <MessageSquare size={16} aria-hidden="true" />
                WhatsApp
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-[#111318]/15 bg-transparent px-4 py-3.5 text-xs font-semibold text-[#111318]/75 transition hover:bg-[#111318]/5 hover:text-[#111318]"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" aria-hidden="true" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail size={14} aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Profile Card (Clean, distinguished, no overlay badge) */}
          <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border-2 border-white bg-white shadow-xl shadow-[#111318]/5">
              <img
                src="/raad.jpg"
                alt="Manjare Hassin Raad"
                className="aspect-[4/5] w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
              />

              {/* Bottom subtle gradient with location */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111318]/85 via-[#111318]/30 to-transparent p-4 text-white">
                <p className="text-sm font-bold tracking-wide">Manjare Hassin Raad</p>
                <p className="text-xs text-white/80">Dhaka, Bangladesh · Available Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-[#111318]/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-4 md:mt-20">
          <div className="border-r border-[#111318]/10 pr-4 last:border-none">
            <p className="text-3xl font-extrabold tracking-tight text-[#1F3FD1]">95%</p>
            <p className="mt-1 text-xs font-medium text-[#111318]/70">
              Customer satisfaction rate
            </p>
          </div>
          <div className="border-r border-[#111318]/10 pr-4 last:border-none sm:pl-4">
            <p className="text-3xl font-extrabold tracking-tight text-[#111318]">300+</p>
            <p className="mt-1 text-xs font-medium text-[#111318]/70">
              Applications handled monthly
            </p>
          </div>
          <div className="border-r border-[#111318]/10 pr-4 last:border-none sm:pl-4">
            <p className="text-3xl font-extrabold tracking-tight text-[#111318]">+12%</p>
            <p className="mt-1 text-xs font-medium text-[#111318]/70">
              Enrollment growth in six months
            </p>
          </div>
          <div className="sm:pl-4">
            <p className="text-3xl font-extrabold tracking-tight text-[#1F3FD1]">LLM & LLB</p>
            <p className="mt-1 text-xs font-medium text-[#111318]/70">
              3.99 CGPA academic foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}