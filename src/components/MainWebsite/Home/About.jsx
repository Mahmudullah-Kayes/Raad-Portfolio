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
  {
    degree: "LLM",
    school: "East West University",
    location: "Dhaka",
    grade: "3.41 / 4.00",
    system: "CGPA",
  },
  {
    degree: "LLB (Hons)",
    school: "Eastern University",
    location: "Dhaka",
    grade: "3.99 / 4.00",
    system: "CGPA",
  },
  {
    degree: "HSC, Humanities",
    school: "Savar Cantonment Public School and College",
    location: "Dhaka",
    grade: "4.58 / 5.00",
    system: "GPA",
  },
  {
    degree: "SSC, Science",
    school: "Savar Adhar Chandra High School",
    location: "Dhaka",
    grade: "5.00 / 5.00",
    system: "GPA",
  },
];

const skills = [
  {
    group: "Thinking",
    items: ["Research", "Critical thinking", "Data analysis", "Problem solving"],
  },
  {
    group: "Working with people",
    items: ["Client communication", "Team leadership", "Adaptability", "Collaboration"],
  },
  {
    group: "Tools",
    items: ["MS Office", "Google Workspace", "Excel", "Task Management"],
  },
  {
    group: "Languages",
    items: ["English", "Bangla"],
  },
];

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-[#111318]/15 pt-10 md:grid-cols-12 md:gap-x-12">
      <div className="md:col-span-4">
        <h3 className="text-xl font-bold tracking-tight text-[#111318]">{label}</h3>
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#F4F3EF] px-6 py-20 text-[#111318] md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Simple, warm header */}
        <div className="w-full">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About me
          </h2>
          <span className="mt-4 block h-1 w-12 rounded-full bg-[#1F3FD1]" aria-hidden="true" />

          <div className="mt-8 space-y-4 text-base leading-relaxed text-[#111318]/85 md:text-lg">
            {profile.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Content rows */}
        <div className="mt-16 space-y-14">
          {/* What I bring */}
          <Row label="What I bring">
            <div className="grid gap-6 sm:grid-cols-3">
              {focus.map((f) => (
                <div key={f.title} className="space-y-2">
                  <h4 className="text-base font-bold text-[#111318]">{f.title}</h4>
                  <p className="text-sm leading-relaxed text-[#111318]/70">{f.text}</p>
                </div>
              ))}
            </div>
          </Row>

          {/* Education */}
          <Row label="Education">
            <ul className="divide-y divide-[#111318]/10">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="flex flex-col justify-between gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <div>
                    <h4 className="text-base font-bold text-[#111318]">{e.degree}</h4>
                    <p className="text-sm text-[#111318]/65">
                      {e.school}, {e.location}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-[#111318]">
                    {e.grade} <span className="text-xs font-normal text-[#111318]/60">{e.system}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Row>

          {/* Skills */}
          <Row label="Skills">
            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1F3FD1]">
                    {s.group}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[#111318]/15 bg-white/80 px-3.5 py-1 text-xs font-medium text-[#111318]"
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