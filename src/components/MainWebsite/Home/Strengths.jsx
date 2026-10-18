import { FileCheck, Users, ShieldCheck, TrendingUp } from "lucide-react";

const strengths = [
  {
    icon: FileCheck,
    title: "Process & File Management",
    tag: "High-Volume Precision",
    description:
      "Handled 300+ international student application files monthly where precision was non-negotiable. Experienced in complex multi-step documentation, strict deadlines, and systematic quality control.",
  },
  {
    icon: Users,
    title: "Client Counseling & Support",
    tag: "95% Satisfaction",
    description:
      "Demonstrated ability to listen actively, simplify complicated procedures, and guide clients with empathy and clarity. Maintained a 95% customer satisfaction rating in remote support environments.",
  },
  {
    icon: ShieldCheck,
    title: "Analytical & Research Rigor",
    tag: "Legal Foundation",
    description:
      "My advanced legal studies (LLM & LLB) instilled structured critical thinking, contract literacy, and careful policy synthesis—ensuring all operational workflows remain compliant and watertight.",
  },
  {
    icon: TrendingUp,
    title: "Team Leadership & Initiative",
    tag: "+12% Growth Driven",
    description:
      "Led a 5-member counseling team to revamp follow-up protocols and communication strategies, directly contributing to a 12% increase in successful client conversions over a six-month period.",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="bg-[#EFECE6] px-6 py-20 text-[#111318] md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#1F3FD1]">
              Value & Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Core Strengths
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#111318]/70 md:text-base">
            Combining analytical discipline with practical client care and process execution.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-[#111318]/10 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#1F3FD1]/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1F3FD1]/10 text-[#1F3FD1] transition group-hover:bg-[#1F3FD1] group-hover:text-white">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-[#111318]/10 bg-[#F4F3EF] px-3 py-1 text-xs font-semibold text-[#111318]/70">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111318]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#111318]/75">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
