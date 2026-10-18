import { Building2, MapPin, CheckCircle2 } from "lucide-react";

const roles = [
  {
    title: "Virtual Assistant",
    roleType: "Remote Operations & Support",
    org: "Time Etc",
    location: "New York, NY (Remote)",
    tenure: "Remote",
    metric: "95%",
    metricLabel: "Customer satisfaction",
    bullets: [
      "Handled client emails quickly and accurately, keeping satisfaction at 95%.",
      "Managed executive calendars, correspondence, documents, and confidential records.",
      "Ran admin workflows across time zones using Google Workspace and MS Office.",
    ],
    skills: ["Customer Support", "Executive Assistance", "Remote Collaboration", "Task Management"],
  },
  {
    title: "Education Counselor & Team Lead",
    roleType: "Client Counseling & Operations",
    org: "Study Visa Guide",
    location: "Mohammadpur, Dhaka",
    tenure: "Full-Time",
    metric: "300+",
    metricLabel: "Applications monthly, +12% enrollments",
    bullets: [
      "Quality-checked 300+ visa files a month with zero tolerance for documentation errors.",
      "Guided clients from university selection to interview prep and visa lodgment.",
      "Led five counselors on a new communication strategy, lifting enrollments 12% in six months.",
    ],
    skills: ["Client Counseling", "Team Leadership", "Process Management", "Quality Control"],
  },
];

function OrgMeta({ org, location, className = "" }) {
  return (
    <div className={className}>
      <p className="flex items-center gap-2 text-sm font-bold text-[#111318]">
        <Building2 size={16} className="shrink-0 text-[#1F3FD1]" aria-hidden="true" />
        {org}
      </p>
      <p className="mt-1 flex items-center gap-2 text-xs text-[#111318]/60">
        <MapPin size={14} className="shrink-0" aria-hidden="true" />
        {location}
      </p>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="overflow-hidden bg-[#F4F3EF] px-4 py-14 text-[#111318] sm:px-6 sm:py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#1F3FD1]">Work History</p>
            <h2 className="mt-2 text-[clamp(1.75rem,6vw,3rem)] font-extrabold leading-tight tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#111318]/70 md:text-base">
            Proven track record in remote operations, client advisory, and high-volume file management.
          </p>
        </div>

        <div className="mt-8 space-y-5 sm:mt-12 sm:space-y-8">
          {roles.map((r) => (
            <article
              key={r.org}
              className="relative overflow-hidden rounded-2xl border border-[#111318]/10 bg-white p-5 shadow-sm transition duration-300 hover:border-[#1F3FD1]/30 hover:shadow-md motion-reduce:transition-none sm:rounded-3xl sm:p-7 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-[200px_1fr] md:gap-12">
                {/* Metric column: compact row on mobile, tall column on md+ */}
                <div className="flex flex-col gap-4 border-b border-[#111318]/10 pb-5 md:justify-between md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <div>
                    <span className="inline-block rounded-full bg-[#1F3FD1]/10 px-3 py-1 text-xs font-semibold text-[#1F3FD1]">
                      {r.tenure}
                    </span>
                    <div className="mt-4 flex items-center gap-4 md:mt-6 md:block">
                      <p className="shrink-0 text-4xl font-black leading-none tracking-tight text-[#1F3FD1] sm:text-5xl">
                        {r.metric}
                      </p>
                      <p className="text-xs font-medium uppercase leading-snug tracking-wider text-[#111318]/60 md:mt-2">
                        {r.metricLabel}
                      </p>
                    </div>
                  </div>

                  <OrgMeta org={r.org} location={r.location} className="hidden md:block" />
                </div>

                {/* Content column */}
                <div className="min-w-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4 sm:gap-y-1">
                    <h3 className="text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
                      {r.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#1F3FD1]">{r.roleType}</span>
                  </div>

                  <OrgMeta org={r.org} location={r.location} className="mt-3 md:hidden" />

                  <ul className="mt-4 space-y-2.5">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-[#111318]/80">
                        <CheckCircle2
                          size={16}
                          className="mt-[3px] shrink-0 text-[#1F3FD1]"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul
                    className="mt-5 flex flex-wrap gap-2 border-t border-[#111318]/10 pt-4"
                    aria-label={`Skills for ${r.title}`}
                  >
                    {r.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-[#111318]/10 bg-[#F4F3EF] px-3 py-1 text-xs font-medium text-[#111318]/80"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}