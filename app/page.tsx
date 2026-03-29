"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

type Education = {
  institution: string;
  degree: string;
  period: string;
};

type Reference = {
  name: string;
  title: string;
  company: string;
  note: string;
};

const experiences: Experience[] = [
  {
    company: "Okakichi Sdn. Bhd.",
    role: "Lead Developer",
    period: "Oct 2025 – Present",
    highlights: [
      "Lead engineering delivery across backend and frontend workstreams, with ownership of technical direction, code quality, repository structure, and build automation.",
      "Support maintainable product delivery by improving engineering workflows, collaboration, and overall implementation quality.",
      "Work across product and technical needs with a focus on reliability, performance, and scalable development practices.",
    ],
  },
  {
    company: "Okakichi Sdn. Bhd.",
    role: "Full-Stack Developer",
    period: "Apr 2025 – Oct 2025",
    highlights: [
      "Built and supported frontend and backend features for gameplay-focused product work.",
      "Handled profiling, performance improvements, bug fixes, tooling, automation, and integrations.",
      "Contributed to engineering quality and product delivery, leading to promotion into a lead role.",
    ],
  },
  {
    company: "Ricrym",
    role: "Full-Stack Developer",
    period: "Dec 2024 – Feb 2025",
    highlights: [
      "Improved security and user experience with SSO and remember-me workflows.",
      "Worked on encryption and decryption flows, frontend redesign, backend refactoring, deployment, and Discourse community setup.",
    ],
  },
  {
    company: "Verisense Health",
    role: "Software Engineer",
    period: "Jul 2023 – Jul 2024",
    highlights: [
      "Maintained AWS infrastructure and Jenkins deployment pipelines for Verisense Cloud.",
      "Built and supported full-stack product features with emphasis on reliable deployment and engineering support.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Software Developer",
    period: "Feb 2021 – Apr 2025",
    highlights: [
      "Delivered freelance work across web development, automation scripts, data-related tasks, and small business applications.",
      "Handled practical implementation across backend logic, frontend interfaces, and client-focused technical problem-solving.",
    ],
  },
  {
    company: "Blue Vinegar",
    role: "Technical Analyst",
    period: "Jul 2020 – Feb 2021",
    highlights: [
      "Created and enhanced ERP solutions on the Odoo platform through custom modules and workflow improvements.",
    ],
  },
];

const skillGroups = [
  {
    title: "Core Competencies",
    items: [
      "Backend Engineering",
      "DevOps & CI/CD",
      "System Design",
      "Full-Stack Development",
      "Automation & Scripting",
      "Game Systems Development",
    ],
  },
  {
    title: "Programming Languages",
    items: [
      "C#",
      "Python",
      "JavaScript",
      "TypeScript",
      "Go",
      "Java",
      "Rust (Basic)",
    ],
  },
  {
    title: "Backend & API Development",
    items: [
      "RESTful API Design",
      "Authentication (OAuth, SSO)",
      "Data Processing",
      "Service Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "AWS (EC2, S3, Deployment)",
      "CI/CD Pipelines (Jenkins)",
      "Linux Server Management",
      "Nginx",
      "Deployment Automation",
      "Build Automation",
      "Cost & Performance Monitoring",
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      "React",
      "Vue.js",
      "Next.js",
      "jQuery",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Game Development",
    items: [
      "Unity (3D)",
      "Game AI Systems",
      "Combat Systems",
      "Animation Systems",
      "Mobile Game Development",
      "Game Performance Optimization",
    ],
  },
  {
    title: "Automation & Tools",
    items: [
      "Python Automation",
      "Bash Scripting",
      "Web Scraping",
      "Discourse Integration",
      "Odoo ERP Customization",
      "Workflow Automation",
      "KPIs & Monitoring",
    ],
  },
];

const education: Education[] = [
  {
    institution: "Universiti Malaysia Terengganu (UMT)",
    degree: "Bachelor in Software Engineering",
    period: "2017 – 2020",
  },
  {
    institution: "Politeknik Sultan Mizan Zainal Abidin (PSMZA)",
    degree: "Diploma in Mechanical Engineering",
    period: "2013 – 2015",
  },
];

const references: Reference[] = [
  {
    name: "Muhammad Amir Qushairi Jais",
    title: "Lead Fullstack Developer",
    company: "Okakichi Sdn. Bhd.",
    note: "Available upon request",
  },
  {
    name: "Aqil Ashraaf",
    title: "Web Developer",
    company: "Ricrym",
    note: "Available upon request",
  },
  {
    name: "Muaaz Badrul Hisham",
    title: "Senior Software Engineer",
    company: "Shimmer Sensing & Verisense Health",
    note: "Available upon request",
  },
  {
    name: "Nisa Asila",
    title: "Senior Software Engineer",
    company: "Blue Vinegar",
    note: "Available upon request",
  },
];

const resumePdfUrl = "/Wan_Muhammad_Faiz_Resume.pdf";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("resume-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("resume-theme", theme);
  }, [theme]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8 lg:px-10">
        <header className="mb-6 border-b border-[var(--border)] bg-[color:var(--background)/0.92] backdrop-blur md:sticky md:top-0 md:z-20 md:mb-8">
          <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:py-5">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs md:text-sm md:tracking-[0.24em]">
                Wan Muhammad Faiz Bin Wan Abd Ghani
              </p>

              <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl md:mt-2 md:text-4xl">
                Software Engineer
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--soft-foreground)] md:mt-3 md:max-w-2xl md:text-base md:leading-7">
                Backend and full-stack software engineer with experience in cloud
                infrastructure, deployment automation, product engineering, and
                practical system delivery across web and software platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:flex md:flex-wrap md:items-center md:gap-3">
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-center text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View Resume
              </a>

              <a
                href={resumePdfUrl}
                download
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-90"
              >
                Download PDF Resume
              </a>

              <button
                type="button"
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)] sm:col-span-2 md:col-span-1"
              >
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.75fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">Professional Summary</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--soft-foreground)] md:text-base">
                I build reliable software across backend systems, full-stack
                products, deployment pipelines, and cloud environments. My work
                includes application development, engineering automation,
                infrastructure support, performance improvement, and practical
                delivery across business and product-focused teams.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Backend Engineering",
                  "Full-Stack Development",
                  "DevOps & CI/CD",
                  "Cloud Infrastructure",
                  "Automation",
                  "Game Development",
                ].map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">Experience</h2>

              <div className="mt-6 space-y-8">
                {experiences.map((job) => (
                  <article
                    key={`${job.company}-${job.role}-${job.period}`}
                    className="border-l border-[var(--border)] pl-5"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="text-sm font-medium text-[var(--accent)]">
                          {job.company}
                        </p>
                      </div>
                      <p className="text-sm text-[var(--muted)]">{job.period}</p>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-[var(--soft-foreground)]"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">References</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--soft-foreground)]">
                Professional references available below.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {references.map((reference) => (
                  <div className="rounded-2xl border border-[var(--border)] bg-[color:var(--background)/0.35] p-5" key={reference.name}>
                    <h3 className="text-base font-semibold">{reference.name}</h3>
                    <p className="mt-1 text-sm text-[var(--soft-foreground)]">
                      {reference.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--soft-foreground)]">
                      {reference.company}
                    </p>
                    <p className="mt-1 text-sm text-[var(--soft-foreground)]">
                      {reference.note}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">Contact</h2>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="label">Resume</p>
                  <div className="mt-1 flex flex-col gap-2">
                    <a
                      className="value linkish"
                      href={resumePdfUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Resume
                    </a>
                    <a className="value linkish" href={resumePdfUrl} download>
                      Download PDF Resume
                    </a>
                  </div>
                </div>

                <div>
                  <p className="label">Location</p>
                  <p className="value">Malaysia</p>
                </div>

                <div>
                  <p className="label">Email</p>
                  <a className="value linkish" href="mailto:wan_faiz@yahoo.com">
                    wan_faiz@yahoo.com
                  </a>
                </div>

                <div>
                  <p className="label">Phone</p>
                  <a className="value linkish" href="tel:+60104164294">
                    +60 10-416 4294
                  </a>
                </div>

                <div>
                  <p className="label">LinkedIn</p>
                  <Link
                    className="value linkish"
                    href="https://www.linkedin.com/in/wan-m-faiz"
                    target="_blank"
                  >
                    linkedin.com/in/wan-m-faiz
                  </Link>
                </div>

                <div>
                  <p className="label">GitHub</p>
                  <Link
                    className="value linkish"
                    href="https://github.com/WMFaiz"
                    target="_blank"
                  >
                    github.com/WMFaiz
                  </Link>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">Core Skills</h2>

              <div className="mt-5 space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                      {group.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">Education</h2>

              <div className="mt-5 space-y-5">
                {education.map((item) => (
                  <div key={`${item.institution}-${item.degree}`}>
                    <p className="text-sm font-semibold">{item.degree}</p>
                    <p className="mt-1 text-sm text-[var(--soft-foreground)]">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <footer className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>© 2020 Wan Muhammad Faiz Bin Wan Abd Ghani</span>
            <span>Build with Next.js</span>
          </div>
        </footer>
      </div>
    </main>
  );
}