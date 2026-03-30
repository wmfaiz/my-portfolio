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
    role: "Lead Application Developer",
    period: "Oct 2025 – March 2026",
    highlights: [
      "Led a team of 8 engineers, driving client-side development and ensuring seamless integration with backend systems.",
      "Resolved full-stack issues to maintain stable cross-platform builds for Android and iOS.",
      "Coordinated feature delivery across frontend and backend, contributing to gameplay systems and product improvements.",
      "Managed deployment pipelines and improved automation workflows using Jenkins.",
    ]
  },
  {
    company: "Okakichi Sdn. Bhd.",
    role: "Full-Stack Developer",
    period: "Apr 2025 – Oct 2025",
    highlights: [
      "Developed and maintained full-stack features for cross-platform mobile applications.",
      "Diagnosed and resolved system issues, improving stability and reducing build failures.",
      "Implemented gameplay features and client-side mechanics.",
      "Supported deployment and automation workflows using Jenkins.",
    ]
  },
  {
    company: "Ricrym",
    role: "Full-Stack Developer",
    period: "Dec 2024 – Feb 2025",
    highlights: [
      "Developed and maintained full-stack features for cross-platform mobile applications.",
      "Diagnosed and resolved system issues, improving stability and reducing build failures.",
      "Implemented gameplay features and client-side mechanics.",
      "Supported deployment and automation workflows using Jenkins.",
    ]
  },
  {
    company: "Verisense Health",
    role: "Software Engineer",
    period: "Jul 2023 – Jul 2024",
    highlights: [
      "Implemented authentication systems including SSO and session management.",
      "Refactored backend and frontend architecture to improve maintainability.",
      "Developed encryption and decryption workflows for secure data handling.",
      "Supported deployment processes and integrated Discourse platform.",
    ]
  },
    {
    company: "Shimmer Sensing",
    role: "Software Engineer",
    period: "Jun 2021 – Jul 2023",
    highlights: [
      "Maintained AWS infrastructure to ensure system stability and availability.",
      "Managed CI/CD pipelines using Jenkins for continuous delivery.",
      "Developed and supported full-stack features with focus on reliability.",
      "Collaborated across teams to support deployment and operational workflows.",
    ]
  },
  {
    company: "Blue Vinegar",
    role: "Technical Analyst",
    period: "Jul 2020 – Feb 2021",
    highlights: [
      "Developed and customized ERP solutions using Odoo.",
      "Implemented modules and workflows to improve business processes.",
      "Translated business requirements into system-level solutions.",
    ]
  },
  {
    company: "Self-Employed",
    role: "Freelance Software Developer",
    period: "Feb 2021 – Apr 2025",
    highlights: [
      "Delivered full-stack and automation solutions for various client projects.",
      "Built backend services, frontend interfaces, and system integrations.",
      "Developed automation scripts to improve workflow efficiency.",
      "Translated business needs into technical implementations.",
    ]
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
    items: ["React", "Vue.js", "Next.js", "jQuery"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Firebase"],
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

const summaryTags = [
  "Backend Engineering",
  "Full-Stack Development",
  "DevOps & CI/CD",
  "Cloud Infrastructure",
  "Automation",
  "Game Development",
];

const resumePdfUrl = "/Wan_Muhammad_Faiz_Resume.pdf";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showCV, setShowCV] = useState(false);

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
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-5 md:px-8 md:py-8 lg:px-10">
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
              <button
                type="button"
                onClick={() => setShowCV(true)}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-center text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                CV
              </button>

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
                {summaryTags.map((item, index) => (
                  <span key={`summary-tag-${index}-${item}`} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">Experience</h2>

              <div className="mt-6 space-y-8">
                {experiences.map((job, jobIndex) => (
                  <article
                    key={`experience-${jobIndex}-${job.company}-${job.role}-${job.period}`}
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
                      {job.highlights.map((item, highlightIndex) => (
                        <li
                          key={`highlight-${jobIndex}-${highlightIndex}`}
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
                {references.map((reference, index) => (
                  <div
                    key={`reference-${index}-${reference.name}`}
                    className="rounded-2xl border border-[var(--border)] bg-[color:var(--background)/0.35] p-5"
                  >
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
              <h2 className="section-title">Education</h2>

              <div className="mt-5 space-y-5">
                {education.map((item, index) => (
                  <div
                    key={`education-${index}-${item.institution}-${item.degree}`}
                  >
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

            <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <h2 className="section-title">Core Skills</h2>

              <div className="mt-5 space-y-5">
                {skillGroups.map((group, groupIndex) => (
                  <div key={`skill-group-${groupIndex}-${group.title}`}>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                      {group.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item, itemIndex) => (
                        <span
                          key={`skill-item-${groupIndex}-${itemIndex}-${item}`}
                          className="chip"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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

      {showCV && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/55 p-2 sm:p-4 md:p-6"
          onClick={() => setShowCV(false)}
        >
          <div
            className="relative h-[96vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-slate-300 bg-white text-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex flex-col gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 print:hidden">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Curriculum Vitae
                </p>
                <h2 className="mt-1 text-lg font-semibold sm:text-xl">
                  Wan Muhammad Faiz Bin Wan Abd Ghani
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowCV(false)}
                  className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium transition hover:border-slate-500"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mx-auto max-w-[900px] px-5 py-6 sm:px-8 sm:py-8">
              <section className="border-b border-slate-200 pb-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      Wan Muhammad Faiz Bin Wan Abd Ghani
                    </h1>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-slate-600">
                      Software Engineer
                    </p>
                  </div>

                  <div className="space-y-1 text-sm text-slate-700 md:text-right">
                    <p>Malaysia</p>
                    <p>
                      <a
                        href="mailto:wan_faiz@yahoo.com"
                        className="hover:underline"
                      >
                        wan_faiz@yahoo.com
                      </a>
                    </p>
                    <p>
                      <a href="tel:+60104164294" className="hover:underline">
                        +60 10-416 4294
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/wan-m-faiz"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/wan-m-faiz
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/WMFaiz"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        github.com/WMFaiz
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Professional Summary
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Backend-focused Software Engineer with experience in full-stack
                    development, cloud infrastructure, and DevOps automation. Proven
                    ability to deliver scalable systems, maintain CI/CD pipelines, and
                    support cross-platform applications (Android & iOS), with
                    additional experience in game systems development.
                  </p>
                </div>
              </section>

              <div className="grid gap-8 pt-5 md:grid-cols-[1.65fr_0.95fr]">
                <div className="space-y-6">
                  <section>
                    <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                      Professional Experience
                    </h2>

                    <div className="mt-4 space-y-5">
                      {experiences.map((job, jobIndex) => (
                        <article
                          key={`cv-exp-${jobIndex}-${job.company}-${job.role}`}
                        >
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-base font-semibold text-slate-900">
                                {job.role}
                              </h3>
                              <p className="text-sm font-medium text-slate-700">
                                {job.company}
                              </p>
                            </div>
                            <p className="text-sm text-slate-500">{job.period}</p>
                          </div>

                          <ul className="mt-2 space-y-1.5">
                            {job.highlights.map((item, itemIndex) => (
                              <li
                                key={`cv-exp-item-${jobIndex}-${itemIndex}`}
                                className="flex gap-2 text-sm leading-6 text-slate-700"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="space-y-6">
                  <section>
                    <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                      Technical Skills
                    </h2>

                    <div className="mt-4 space-y-2.5 text-sm leading-6 text-slate-700">
                      <p>
                        <span className="font-semibold text-slate-900">
                          Languages:
                        </span>{" "}
                        C#, Go, Python, JavaScript, TypeScript
                      </p>

                      <p>
                        <span className="font-semibold text-slate-900">Backend:</span>{" "}
                        REST APIs, OAuth, System Integration
                      </p>

                      <p>
                        <span className="font-semibold text-slate-900">DevOps:</span>{" "}
                        AWS, CI/CD (Jenkins), Linux, Nginx
                      </p>

                      <p>
                        <span className="font-semibold text-slate-900">
                          Frontend:
                        </span>{" "}
                        React, Vue.js, Next.js
                      </p>

                      <p>
                        <span className="font-semibold text-slate-900">
                          Databases:
                        </span>{" "}
                        PostgreSQL, MySQL, MongoDB
                      </p>

                      <p>
                        <span className="font-semibold text-slate-900">Other:</span>{" "}
                        Unity (3D), Automation, Web Scraping
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                      Education
                    </h2>

                    <div className="mt-4 space-y-4">
                      {education.map((item, index) => (
                        <div key={`cv-edu-${item.institution}-${index}`}>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.degree}
                          </p>
                          <p className="text-sm text-slate-700">
                            {item.institution}
                          </p>
                          <p className="text-sm text-slate-500">{item.period}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                      References
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {references.map((reference, index) => (
                        <div
                          key={`reference-${index}-${reference.name}`}
                        >
                          <h3 className="text-base font-semibold">{reference.name}</h3>
                          <p className="mt-1 text-sm text-[var(--soft-foreground)]">
                            {reference.title}
                          </p>
                          <p className="mt-1 text-sm text-[var(--soft-foreground)]">
                            {reference.company}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[var(--soft-foreground)]">
                            {reference.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}