const profile = [
  "I hold an LLB (Hons) from Eastern University and an LLM from East West University. While my legal education gave me sharp analytical, research, and problem-solving skills, I’ve chosen to build my career in operations, client guidance, and management rather than traditional legal practice.",
  "In my professional work, I’ve guided hundreds of students through complex visa procedures, led a team of five on communication strategy to grow enrollment by 12%, and supported international clients remotely with a 95% customer satisfaction rate. I bring strong attention to detail, clear communication, and reliable follow-through to every team I join.",
];

const focus = [
  {
    title: "Research & Analysis",
    text: "Legal training built on careful reading, structured arguments, and data-driven problem solving.",
  },
  {
    title: "Client-Facing Guidance",
    text: "Visa counseling for students and remote customer support, maintaining a 95% satisfaction rate.",
  },
  {
    title: "Team Leadership",
    text: "Led a team of five on a new communication plan that increased student enrollments by 12%.",
  },
];

const education = [
  { degree: "LLM", school: "East West University", location: "Dhaka", grade: "3.41 / 4.00", system: "CGPA" },
  { degree: "LLB (Hons)", school: "Eastern University", location: "Dhaka", grade: "3.99 / 4.00", system: "CGPA" },
  { degree: "HSC, Humanities", school: "Savar Cantonment Public School and College", location: "Dhaka", grade: "4.58 / 5.00", system: "GPA" },
  { degree: "SSC, Science", school: "Savar Adhar Chandra High School", location: "Dhaka", grade: "5.00 / 5.00", system: "GPA" },
];

const skills = [
  { group: "Thinking", items: ["Research", "Critical thinking", "Data analysis", "Problem solving"] },
  { group: "Working with people", items: ["Client communication", "Team leadership", "Adaptability", "Collaboration"] },
  { group: "Tools", items: ["MS Office", "Google Workspace", "Excel", "Task Management"] },
  { group: "Languages", items: ["English", "Bangla"] },
];

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 gap-4 border-t border-[#111318]/15 pt-6 sm:gap-6 sm:pt-8 lg:grid-cols-12 lg:gap-x-12 lg:pt-10">
      <h3 className="text-lg font-bold tracking-tight text-[#111318] sm:text-xl lg:col-span-4">{label}</h3>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#F4F3EF] px-4 py-14 text-[#111318] sm:px-6 sm:py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div>
          <h2 className="text-[clamp(1.75rem,6vw,3rem)] font-extrabold leading-tight tracking-tight">
            About me
          </h2>
          <span className="mt-3 block h-1 w-12 rounded-full bg-[#1F3FD1]" aria-hidden="true" />

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-[#111318]/85 sm:mt-8 sm:text-base md:text-lg">
            {profile.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-12 lg:space-y-14">
          <Row label="What I bring">
            <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
              {focus.map((f) => (
                <div
                  key={f.title}
                  className="border-l-2 border-[#1F3FD1]/30 pl-4 sm:border-l-0 sm:pl-0"
                >
                  <h4 className="text-base font-bold">{f.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#111318]/70">{f.text}</p>
                </div>
              ))}
            </div>
          </Row>

          <Row label="Education">
            <ul className="divide-y divide-[#111318]/10">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="flex items-start justify-between gap-4 py-3.5 first:pt-0 last:pb-0 sm:items-baseline sm:gap-6 sm:py-4"
                >
                  <div className="min-w-0">
                    <h4 className="text-base font-bold">{e.degree}</h4>
                    <p className="text-sm leading-snug text-[#111318]/65">
                      {e.school}, {e.location}
                    </p>
                  </div>
                  <p className="shrink-0 whitespace-nowrap text-right text-sm font-semibold">
                    {e.grade}
                    <span className="block text-xs font-normal text-[#111318]/60 sm:ml-1 sm:inline">
                      {e.system}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </Row>

          <Row label="Skills">
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1F3FD1]">{s.group}</p>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[#111318]/15 bg-white/80 px-3 py-1 text-xs font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Row>
        </div>
      </div>
    </section>
  );
}