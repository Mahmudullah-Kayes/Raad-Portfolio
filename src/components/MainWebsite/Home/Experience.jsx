import { Briefcase, Building2, MapPin, CheckCircle2 } from "lucide-react";

const roles = [
  {
    title: "Virtual Assistant",
    roleType: "Remote Operations & Support",
    org: "Time Etc",
    location: "New York, NY (Remote)",
    tenure: "Remote Experience",
    metric: "95%",
    metricLabel: "Customer satisfaction rating",
    summary:
      "Provided high-touch remote executive assistance and customer support for international clients, ensuring responsive communication, meticulous task follow-through, and schedule management.",
    bullets: [
      "Maintained an exceptional 95% customer satisfaction rating through rapid email handling, accurate information delivery, and dependable support.",
      "Managed executive calendar scheduling, client correspondence, document preparation, and confidential record-keeping.",
      "Executed administrative workflows across multiple time zones using Google Workspace, MS Office, and online productivity platforms.",
    ],
    skills: ["Customer Support", "Remote Collaboration", "Executive Assistance", "MS Office", "Task Management"],
  },
  {
    title: "Education Counselor & Team Lead",
    roleType: "Client Counseling & Operations",
    org: "Study Visa Guide",
    location: "Mohammadpur, Dhaka",
    tenure: "Full-Time Experience",
    metric: "300+",
    metricLabel: "Applications handled monthly / +12% growth",
    summary:
      "Directed end-to-end client consultation and documentation for prospective international students, managing high-volume visa pipelines while leading a collaborative counseling team.",
    bullets: [
      "Oversaw and quality-checked over 300 visa application files monthly with rigorous attention to detail, strict deadlines, and zero tolerance for documentation errors.",
      "Guided clients step-by-step from initial inquiry and university selection to embassy interview prep and visa lodgment.",
      "Led and mentored a team of five counselors to develop and roll out a structured communication strategy, driving a 12% increase in successful student enrollments within six months.",
    ],
    skills: ["Process Management", "Client Counseling", "Team Leadership", "Compliance & Quality Control", "Communication Strategy"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F4F3EF] px-6 py-20 text-[#111318] md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#1F3FD1]">
              Work History
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Professional Experience
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#111318]/70 md:text-base">
            Proven track record in remote operations, client advisory, and high-volume file management.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {roles.map((r) => (
            <article
              key={r.org}
              className="relative overflow-hidden rounded-3xl border border-[#111318]/10 bg-white p-7 shadow-sm transition duration-300 hover:border-[#1F3FD1]/30 hover:shadow-md md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                {/* Left Metric Column */}
                <div className="flex flex-col justify-between border-b border-[#111318]/10 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <div>
                    <span className="inline-block rounded-full bg-[#1F3FD1]/10 px-3 py-1 text-xs font-semibold text-[#1F3FD1]">
                      {r.tenure}
                    </span>
                    <p className="mt-6 text-5xl font-black tracking-tight text-[#1F3FD1]">
                      {r.metric}
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#111318]/60">
                      {r.metricLabel}
                    </p>
                  </div>

                  <div className="mt-6 hidden md:block">
                    <p className="text-xs font-semibold text-[#111318]/50 uppercase tracking-wide">Organization</p>
                    <p className="text-sm font-bold text-[#111318]">{r.org}</p>
                    <p className="text-xs text-[#111318]/60">{r.location}</p>
                  </div>
                </div>

                {/* Right Content Column */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-2xl font-extrabold tracking-tight text-[#111318]">
                      {r.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#1F3FD1]">
                      {r.roleType}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#111318]/75 md:hidden">
                    <span>{r.org}</span>
                    <span>·</span>
                    <span className="text-xs text-[#111318]/55">{r.location}</span>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-[#111318]/80">
                    {r.summary}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2.5">
                    {r.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#111318]/80">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#1F3FD1]"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="mt-7 flex flex-wrap gap-2 pt-4 border-t border-[#111318]/10">
                    {r.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#111318]/10 bg-[#F4F3EF] px-3 py-1 text-xs font-medium text-[#111318]/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}