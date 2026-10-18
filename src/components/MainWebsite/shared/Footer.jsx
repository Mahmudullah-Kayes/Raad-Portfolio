import { useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaPhone, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import { Download, Check } from "lucide-react";

export default function Footer() {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type, e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3FD1]";

  return (
    <footer id="contact" className="bg-[#F4F3EF] px-6 pb-12 pt-20 text-[#111318] md:px-10 md:pt-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 border-t border-[#111318]/15 pt-12 md:grid-cols-12 md:gap-x-12">
          {/* Left Column */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's connect</h2>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-[#111318]/75">
              Open to new roles and opportunities. The quickest way to reach me is WhatsApp or email.
            </p>
            <div className="mt-8">
              <a
                href="/cv.pdf"
                download
                className={`inline-flex items-center gap-2 rounded-full bg-[#1F3FD1] px-6 py-3.5 text-sm font-semibold text-[#F4F3EF] shadow-sm transition hover:bg-[#1833ad] hover:shadow-md ${focus}`}
              >
                <Download size={15} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Contact List */}
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2 md:col-span-7">
            {/* Email */}
            <li>
              <div className="group flex items-start gap-4">
                <a
                  href="mailto:raadmanjarehassin@gmail.com"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#111318]/15 text-[#111318] transition group-hover:border-[#1F3FD1] group-hover:bg-[#1F3FD1] group-hover:text-white"
                >
                  <FaEnvelope size={15} />
                </a>
                <div className="min-w-0 pt-0.5">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#111318]/50">
                    Email
                  </span>
                  <a
                    href="mailto:raadmanjarehassin@gmail.com"
                    className="mt-1 block break-all text-sm font-semibold transition hover:text-[#1F3FD1]"
                  >
                    raadmanjarehassin@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={(e) => handleCopy("raadmanjarehassin@gmail.com", "email", e)}
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-[#111318]/50 hover:text-[#1F3FD1]"
                  >
                    {copiedType === "email" ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <Check size={11} /> Copied!
                      </span>
                    ) : (
                      "Click to copy"
                    )}
                  </button>
                </div>
              </div>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href="https://wa.me/8801759001761"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#111318]/15 text-[#111318] transition group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white">
                  <FaWhatsapp size={16} />
                </span>
                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#111318]/50">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm font-semibold transition group-hover:text-emerald-600">
                    +880 1759 001761
                  </span>
                  <span className="mt-1 block text-[11px] font-medium text-[#111318]/50">
                    Available for direct messaging
                  </span>
                </span>
              </a>
            </li>

            {/* Phone */}
            <li>
              <div className="group flex items-start gap-4">
                <a
                  href="tel:+8801759001761"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#111318]/15 text-[#111318] transition group-hover:border-[#1F3FD1] group-hover:bg-[#1F3FD1] group-hover:text-white"
                >
                  <FaPhone size={14} />
                </a>
                <div className="min-w-0 pt-0.5">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#111318]/50">
                    Phone
                  </span>
                  <a
                    href="tel:+8801759001761"
                    className="mt-1 block text-sm font-semibold transition hover:text-[#1F3FD1]"
                  >
                    +880 1759 001761
                  </a>
                  <button
                    type="button"
                    onClick={(e) => handleCopy("+8801759001761", "phone", e)}
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-[#111318]/50 hover:text-[#1F3FD1]"
                  >
                    {copiedType === "phone" ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <Check size={11} /> Copied!
                      </span>
                    ) : (
                      "Click to copy"
                    )}
                  </button>
                </div>
              </div>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/manjare-hassin-raad-7072a5362/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#111318]/15 text-[#111318] transition group-hover:border-[#1F3FD1] group-hover:bg-[#1F3FD1] group-hover:text-white">
                  <FaLinkedinIn size={15} />
                </span>
                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#111318]/50">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-sm font-semibold transition group-hover:text-[#1F3FD1]">
                    manjare-hassin-raad
                  </span>
                  <span className="mt-1 block text-[11px] font-medium text-[#111318]/50">
                    Connect professionally
                  </span>
                </span>
              </a>
            </li>

            {/* Location */}
            <li className="flex items-start gap-4 sm:col-span-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#111318]/15 text-[#111318]">
                <FaLocationDot size={14} />
              </span>
              <span className="min-w-0 pt-0.5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#111318]/50">
                  Location
                </span>
                <span className="mt-1 block text-sm font-semibold text-[#111318]">
                  Dhaka, Bangladesh
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#111318]/10 pt-6 text-xs text-[#111318]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Manjare Hassin Raad. All rights reserved.</p>
          <a
            href="#home"
            className={`font-semibold underline-offset-4 hover:text-[#1F3FD1] hover:underline ${focus}`}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}