"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type SkillLevel = "High" | "Medium" | "Low";

interface Skill {
  name: string;
  level: SkillLevel;
  category: "Programming" | "Tools";
}

type Role = {
  title: string;
  period: string;
  summary: string;
  highlight?: boolean;
};

type CompanyExperience = {
  company: string;
  overallPeriod: string;
  roles: Role[];
};

interface Education {
  place: string;
  period: string;
  title: string;
}

const skills: Skill[] = [
  { name: "C#", level: "High", category: "Programming" },
  { name: "Python", level: "High", category: "Programming" },
  { name: "Java", level: "High", category: "Programming" },
  { name: "Vanilla JavaScript", level: "High", category: "Programming" },
  { name: "jQuery", level: "High", category: "Programming" },
  { name: "Go", level: "Medium", category: "Programming" },
  { name: "Lua", level: "Medium", category: "Programming" },
  { name: "React", level: "Medium", category: "Programming" },
  { name: "Vue", level: "Medium", category: "Programming" },
  { name: "PHP", level: "Medium", category: "Programming" },
  { name: "Ruby on Rails", level: "Low", category: "Programming" },

  { name: "MySQL", level: "High", category: "Tools" },
  { name: "PostgreSQL", level: "High", category: "Tools" },
  { name: "SQL Server", level: "High", category: "Tools" },
  { name: "SQLite", level: "High", category: "Tools" },
  { name: "MongoDB", level: "High", category: "Tools" },
  { name: "GitHub", level: "High", category: "Tools" },
  { name: "Visual Studio", level: "High", category: "Tools" },
  { name: "Unity3D", level: "High", category: "Tools" },
  { name: "Jira", level: "High", category: "Tools" },
  { name: "Jenkins", level: "High", category: "Tools" },
  { name: "Roblox", level: "High", category: "Tools" },
  { name: "Eclipse", level: "High", category: "Tools" },
  { name: "Netbeans", level: "High", category: "Tools" },
  { name: "Firebase", level: "High", category: "Tools" },
  { name: "AWS", level: "High", category: "Tools" },
  { name: "Ubuntu", level: "Medium", category: "Tools" },
  { name: "Odoo (ERP)", level: "Medium", category: "Tools" },
  { name: "Discourse", level: "Medium", category: "Tools" },
  { name: "Electron", level: "Medium", category: "Tools" },
  { name: "Azure", level: "Medium", category: "Tools" },
];

const experiencesByCompany: CompanyExperience[] = [
  {
    company: "Blue Vinegar",
    overallPeriod: "8 months",
    roles: [
      {
        title: "Technical Analyst",
        period: "Jul 2020 - Feb 2021",
        summary:
          "Created and enhanced ERP solutions on the Odoo platform with custom modules and workflows.",
      },
    ],
  },
  {
    company: "Self-Employed",
    overallPeriod: "6 months",
    roles: [
      {
        title: "Freelance",
        period: "Feb 2021 - Jul 2023",
        summary:
          "Taking on various freelance projects including web development, automation scripts, data analysis and small applications for clients.",
      },
    ],
  },
  {
    company: "Verisense Health",
    overallPeriod: "1 year",
    roles: [
      {
        title: "Software Engineer",
        period: "Jul 2023 - Jul 2024",
        summary:
          "Maintained AWS infrastructure, Jenkins deployment pipelines and full-stack features for Verisense Cloud.",
      },
    ],
  },
  {
    company: "Self-Employed",
    overallPeriod: "6 months",
    roles: [
      {
        title: "Freelance",
        period: "Jul 2024 - Dec 2024",
        summary:
          "Taking on various freelance projects including web development, automation scripts, data analysis and small applications for clients.",
      },
    ],
  },
  {
    company: "Ricrym",
    overallPeriod: "3 months",
    roles: [
      {
        title: "FullStack Developer",
        period: "Dec 2024 - Feb 2025",
        summary:
          "Improved system security and UX with SSO, remember-me, data encryption/decryption, frontend redesign, backend refactor, deployment and Discourse community setup.",
      },
    ],
  },
    {
    company: "Self-Employed",
    overallPeriod: "6 months",
    roles: [
      {
        title: "Freelance",
        period: "Feb 2025 - Apr 2025",
        summary:
          "Taking on various freelance projects including web development, automation scripts, data analysis and small applications for clients.",
      },
    ],
  },
  {
    company: "Okakichi Sdn. Bhd",
    overallPeriod: "Apr 2025 – Present",
    roles: [
      {
        title: "Lead Developer",
        period: "Oct 2025 – Present",
        summary:
          "Leading the client engineering team: owning technical direction, code quality, repo structure, build automation and performance across backend and froentend flows.",
        highlight: true,
      },
      {
        title: "Full-Stack Developer",
        period: "Apr 2025 – Oct 2025",
        summary:
          "Joined as Full-Stack Developer focusing on gameplay for frontend and backend, profiling and performance fixes, tools, automation and integrations — leading to promotion.",
      },
    ],
  },
];

const education: Education[] = [
  {
    place: "Universiti Malaysia Terengganu (UMT)",
    period: "2017 – 2020",
    title: "Bachelor in Software Engineering",
  },
  {
    place: "Politeknik Sultan Mizan Zainal Abidin (PSMZA)",
    period: "2013 – 2015",
    title: "Diploma in Mechanical Engineering",
  },
  {
    place: "Sekolah Menengah Kebangsaan Sura",
    period: "2006 – 2012",
    title: "Sijil Pelajaran Malaysia (SPM)",
  },
];

/** Full-screen Matrix rain background */
function MatrixRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    const fontSize = 16;
    const characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGabcdefg";

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text =
          characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20 bg-black"
    />
  );
}

function levelColor(level: SkillLevel, mode: "light" | "dark") {
  if (mode === "light") {
    switch (level) {
      case "High":
        return "bg-emerald-50 text-emerald-900 border-emerald-200";
      case "Medium":
        return "bg-lime-50 text-lime-900 border-lime-200";
      case "Low":
        return "bg-sky-50 text-sky-900 border-sky-200";
    }
  }

  // dark
  switch (level) {
    case "High":
      return "bg-emerald-500/5 text-emerald-100 border-emerald-400/40";
    case "Medium":
      return "bg-lime-500/5 text-lime-200 border-lime-400/40";
    case "Low":
      return "bg-sky-500/5 text-sky-200 border-sky-400/40";
  }
}


function WhiteView() {
  return (
<div className="relative min-h-screen overflow-hidden">
      {/* overlays for readability + subtle grid glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-100" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),transparent_60%)]" />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 text-sm text-slate-800 md:px-8 lg:pt-14">
        {/* Info + Experience */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Information panel */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-emerald-200/70 pb-3">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
                  NODE:// INFORMATION
                </h2>
                <p className="mt-1 text-[0.8rem] text-slate-600">
                  WAN MUHAMMAD FAIZ BIN WAN ABD GHANI
                </p>
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-emerald-200/70 pb-3">
              <div className="flex flex-wrap gap-2 text-[0.7rem] text-slate-700">
                <span className="rounded-full border border-emerald-200 bg-white/60 px-4 py-1 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  LEVEL <span className="font-bold text-emerald-700">05</span>{" "}
                  / SOFTWARE ENGINEER
                </span>
                <span className="rounded-full border border-emerald-200/70 bg-white/60 px-4 py-1">
                  XP: <span className="font-semibold text-lime-700">92%</span> →
                  NEXT UPGRADE
                </span>
              </div>
              <div className="text-right text-[0.65rem] text-slate-600">
                <div>LOCATION: MY, JOHOR</div>
                <div>LANGUAGE: EN / MY</div>
              </div>
            </div>

            {/* profile + summary */}
            <div className="mb-4 flex items-center gap-4">
              <Image
                src="/profile-icon.png"
                alt="Portrait of Wan Muhammad Faiz"
                width={96}
                height={96}
                priority
                className="h-35 w-35"
              />
              <p className="text-[0.8rem] leading-relaxed text-slate-800">
                Motivated software engineer with strong experience in cloud,
                backend and client engineering. Enjoys solving complex problems,
                improving product performance and working across the full stack
                from infrastructure to UX.
              </p>
            </div>

            {/* XP bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[0.7rem] text-slate-700">
                <span>CAREER_XP</span>
                <span>5+ YEARS</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-emerald-100">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-cyan-300" />
              </div>
            </div>

            {/* contact list */}
            <div className="mt-5 grid gap-2 text-[0.75rem] text-slate-800">
              <a
                href="tel:+60104164294"
                className="flex items-center justify-between rounded-lg border border-emerald-200 bg-white/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-slate-700">PHONE</span>
                <span className="text-slate-800">+60 10-416 4294</span>
              </a>
              <a
                href="mailto:wan_faiz@yahoo.com"
                className="flex items-center justify-between rounded-lg border border-emerald-200 bg-white/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-slate-700">EMAIL</span>
                <span className="truncate text-slate-800">
                  wan_faiz@yahoo.com
                </span>
              </a>
              <Link
                href="https://www.linkedin.com/in/wan-m-faiz"
                target="_blank"
                className="flex items-center justify-between rounded-lg border border-emerald-200 bg-white/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-slate-700">
                  LINKEDIN
                </span>
                <span className="truncate text-cyan-700">/in/wan-m-faiz</span>
              </Link>
              <Link
                href="https://github.com/WMFaiz"
                target="_blank"
                className="flex items-center justify-between rounded-lg border border-emerald-200 bg-white/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-slate-700">GITHUB</span>
                <span className="truncate text-cyan-700">
                  github.com/WMFaiz
                </span>
              </Link>
            </div>
          </div>

          {/* experience timeline */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)] backdrop-blur">
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              NODE:// CAREER
            </h2>
            <p className="mb-4 mt-1 text-[0.7rem] text-slate-600">
              INDUSTRIAL EXPOSURE & EXPERIENCE
            </p>

            <ol className="space-y-5 text-[0.8rem]">
              {[...experiencesByCompany].reverse().map((exp, index) => (
                <li key={`${exp.company}-${exp.overallPeriod}-${index}`} className="relative pl-5">
                  <div className="absolute left-0 top-1 h-3 w-3 rounded-full border border-emerald-400 bg-white" />
                  {index !== experiencesByCompany.length - 1 && (
                    <div className="absolute left-[6px] top-4 h-full w-px bg-emerald-200/70" />
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold text-slate-800">
                      {exp.company}
                    </div>
                    <div className="text-[0.7rem] text-slate-600">
                      {exp.overallPeriod}
                    </div>
                  </div>

                  <div className="mt-2 space-y-2">
                    {exp.roles.map((role) => (
                      <div
                        key={role.title + role.period}
                        className="rounded-xl border border-emerald-200/70 bg-white/70 px-3 py-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[0.75rem] font-semibold text-slate-800">
                              {role.title}
                            </span>
                            {role.highlight && (
                              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-slate-700">
                                PROMOTED
                              </span>
                            )}
                          </div>
                          <span className="text-[0.65rem] text-slate-600">
                            {role.period}
                          </span>
                        </div>
                        <p className="mt-1 text-[0.7rem] leading-relaxed text-slate-800">
                          {role.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* skills + tools */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,2.3fr)_minmax(0,1.7fr)]">
          <div className="overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.10)] backdrop-blur">
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              SUPPORT:// PROGRAMMING
            </h2>
            <p className="mb-4 mt-1 text-[0.7rem] text-slate-600">
              LANGUAGES & FRAMEWORKS
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {skills
                .filter((s) => s.category === "Programming")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex flex-col gap-1 rounded-xl border px-3 py-2 text-[0.75rem] transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] ${levelColor(
                      skill.level,
                      "light"
                    )}`}
                  >
                    <div className="font-semibold">{skill.name}</div>
                    <div className="text-[0.6rem] uppercase tracking-[0.16em] text-slate-700">
                      {skill.level} MASTERY
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.10)] backdrop-blur">
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              SUPPORT:// TOOLS
            </h2>
            <p className="mb-4 mt-1 text-[0.7rem] text-slate-600">
              DATABASES · DEVOPS · CLOUD
            </p>
            <div className="flex flex-wrap gap-2 text-[0.7rem]">
              {skills
                .filter((s) => s.category === "Tools")
                .map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full border px-3 py-1 transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(34,197,94,0.3)] ${levelColor(
                      skill.level,
                      "light"
                    )}`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        </section>

        {/* CV overview */}
        <section className="overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/75 p-5 shadow-[0_14px_44px_rgba(15,23,42,0.10)] backdrop-blur">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
                CV_OVERVIEW
              </h2>
              <p className="mt-1 text-[0.7rem] text-slate-600">
                SNAPSHOT OF EDUCATION & REFERENCES
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.7rem] text-slate-700">
              <span className="rounded-full border border-emerald-200 bg-white/70 px-3 py-1">
                Bachelor in Software Engineering (UMT) - Software Engineer
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)]">
            {/* objective + education */}
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  CAREER_OBJECTIVE
                </h3>
                <p className="text-[0.8rem] leading-relaxed text-slate-800">
                  Software engineer with years of hands-on experience shipping and 
                  maintaining real-world products. I take ownership, write clean and scalable code, 
                  and consistently deliver reliable features backed by automation, strong debugging, 
                  and performance-first engineering.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  EDUCATION
                </h3>
                <ul className="space-y-2 text-[0.8rem]">
                  {education.map((edu) => (
                    <li key={edu.place}>
                      <div className="flex items-center justify-between text-[0.7rem] text-slate-600">
                        <span>{edu.place}</span>
                        <span>{edu.period}</span>
                      </div>
                      <div className="text-[0.8rem] font-semibold text-slate-800">
                        {edu.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* references */}
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  REFERENCES
                </h3>
                <div className="grid gap-3 text-[0.75rem] text-slate-800 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-3">
                    <div className="font-semibold text-slate-800">
                      Muhammad Amir Qushairi Jais
                    </div>
                    <div className="text-slate-600">
                      Lead Fullstack Developer
                    </div>
                    <div className="mt-2 text-slate-800">
                      Phone: 019-9111920
                    </div>
                    <div className="truncate text-slate-800">
                      Email: muhd.amirqushairijais@gmail.com
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-3">
                    <div className="font-semibold text-slate-800">
                      Aqil Ashraaf
                    </div>
                    <div className="text-slate-600">Web Developer</div>
                    <div className="mt-2 text-slate-800">
                      Phone: 010-5739057
                    </div>
                    <div className="truncate text-slate-800">
                      Email: aqilashraaf.18@gmail.com
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-3">
                    <div className="font-semibold text-slate-800">
                      Muaaz Badrul Hisham
                    </div>
                    <div className="text-slate-600">Software Engineer</div>
                    <div className="mt-2 text-slate-800">
                      Phone: 019-9652230
                    </div>
                    <div className="truncate text-slate-800">
                      Email: muaazbadrul@gmail.com
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-3">
                    <div className="font-semibold text-slate-800">
                      Nisa Asila
                    </div>
                    <div className="text-slate-600">Software Engineer</div>
                    <div className="mt-2 text-slate-800">
                      Phone: 013-3236905
                    </div>
                    <div className="truncate text-slate-800">
                      Email: nisaasilamn@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="mt-4 flex items-center justify-between border-t border-emerald-200/70 pt-3 text-[0.65rem] text-emerald-700/80">
          <span>© 2020 Wan Muhammad Faiz</span>
          <span>Power with Next.js</span>
        </footer>
      </main>
    </div>
  );
}

function DarkView() {
  return (
<div className="relative min-h-screen overflow-hidden">
      <MatrixRainBackground />

      {/* overlays for readability + subtle grid glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/90 to-black" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),transparent_60%)]" />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 text-sm text-emerald-100 md:px-8 lg:pt-14">
        {/* Info + Experience */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Information panel */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/70 p-5 shadow-[0_0_40px_rgba(34,197,94,0.25)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-emerald-500/20 pb-3">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  NODE:// INFORMATION
                </h2>
                <p className="mt-1 text-[0.8rem] text-emerald-300/80">
                  WAN MUHAMMAD FAIZ BIN WAN ABD GHANI
                </p>
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-emerald-500/20 pb-3">
              <div className="flex flex-wrap gap-2 text-[0.7rem] text-emerald-200/80">
                <span className="rounded-full border border-emerald-500/40 bg-black/60 px-4 py-1 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  LEVEL <span className="font-bold text-emerald-300">05</span>{" "}
                  / SOFTWARE ENGINEER
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-black/60 px-4 py-1">
                  XP: <span className="font-semibold text-lime-300">92%</span> →
                  NEXT UPGRADE
                </span>
              </div>
              <div className="text-right text-[0.65rem] text-emerald-300/70">
                <div>LOCATION: MY, JOHOR</div>
                <div>LANGUAGE: EN / MY</div>
              </div>
            </div>

            {/* profile + summary */}
            <div className="mb-4 flex items-center gap-4">
              <Image
                src="/profile-icon.png"
                alt="Portrait of Wan Muhammad Faiz"
                width={96}
                height={96}
                priority
                className="h-35 w-35"
              />
              <p className="text-[0.8rem] leading-relaxed text-emerald-100/90">
                Motivated software engineer with strong experience in cloud,
                backend and client engineering. Enjoys solving complex problems,
                improving product performance and working across the full stack
                from infrastructure to UX.
              </p>
            </div>

            {/* XP bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[0.7rem] text-emerald-200/90">
                <span>CAREER_XP</span>
                <span>5+ YEARS</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-emerald-900/60">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-cyan-300" />
              </div>
            </div>

            {/* contact list */}
            <div className="mt-5 grid gap-2 text-[0.75rem] text-emerald-100">
              <a
                href="tel:+60104164294"
                className="flex items-center justify-between rounded-lg border border-emerald-500/40 bg-black/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-emerald-200">PHONE</span>
                <span className="text-emerald-100/90">+60 10-416 4294</span>
              </a>
              <a
                href="mailto:wan_faiz@yahoo.com"
                className="flex items-center justify-between rounded-lg border border-emerald-500/40 bg-black/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-emerald-200">EMAIL</span>
                <span className="truncate text-emerald-100/90">
                  wan_faiz@yahoo.com
                </span>
              </a>
              <Link
                href="https://www.linkedin.com/in/wan-m-faiz"
                target="_blank"
                className="flex items-center justify-between rounded-lg border border-emerald-500/40 bg-black/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-emerald-200">
                  LINKEDIN
                </span>
                <span className="truncate text-cyan-300">/in/wan-m-faiz</span>
              </Link>
              <Link
                href="https://github.com/WMFaiz"
                target="_blank"
                className="flex items-center justify-between rounded-lg border border-emerald-500/40 bg-black/70 px-3 py-2 hover:border-lime-400/70 hover:bg-emerald-500/10"
              >
                <span className="font-semibold text-emerald-200">GITHUB</span>
                <span className="truncate text-cyan-300">
                  github.com/WMFaiz
                </span>
              </Link>
            </div>
          </div>

          {/* experience timeline */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/70 p-5 shadow-[0_0_40px_rgba(34,197,94,0.25)] backdrop-blur">
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
              NODE:// CAREER
            </h2>
            <p className="mb-4 mt-1 text-[0.7rem] text-emerald-300/80">
              INDUSTRIAL EXPOSURE & EXPERIENCE
            </p>

            <ol className="space-y-5 text-[0.8rem]">
              {[...experiencesByCompany].reverse().map((exp, index) => (
                <li key={`${exp.company}-${exp.overallPeriod}-${index}`} className="relative pl-5">
                  <div className="absolute left-0 top-1 h-3 w-3 rounded-full border border-emerald-400 bg-black" />
                  {index !== experiencesByCompany.length - 1 && (
                    <div className="absolute left-[6px] top-4 h-full w-px bg-emerald-700/60" />
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold text-emerald-100">
                      {exp.company}
                    </div>
                    <div className="text-[0.7rem] text-emerald-300/80">
                      {exp.overallPeriod}
                    </div>
                  </div>

                  <div className="mt-2 space-y-2">
                    {exp.roles.map((role) => (
                      <div
                        key={role.title + role.period}
                        className="rounded-xl border border-emerald-500/30 bg-black/70 px-3 py-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[0.75rem] font-semibold text-emerald-100">
                              {role.title}
                            </span>
                            {role.highlight && (
                              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-emerald-200">
                                PROMOTED
                              </span>
                            )}
                          </div>
                          <span className="text-[0.65rem] text-emerald-300/80">
                            {role.period}
                          </span>
                        </div>
                        <p className="mt-1 text-[0.7rem] leading-relaxed text-emerald-100/90">
                          {role.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* skills + tools */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,2.3fr)_minmax(0,1.7fr)]">
          <div className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/70 p-5 shadow-[0_0_35px_rgba(34,197,94,0.25)] backdrop-blur">
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
              SUPPORT:// PROGRAMMING
            </h2>
            <p className="mb-4 mt-1 text-[0.7rem] text-emerald-300/80">
              LANGUAGES & FRAMEWORKS
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {skills
                .filter((s) => s.category === "Programming")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex flex-col gap-1 rounded-xl border px-3 py-2 text-[0.75rem] transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] ${levelColor(skill.level, "dark")}`}
                  >
                    <div className="font-semibold">{skill.name}</div>
                    <div className="text-[0.6rem] uppercase tracking-[0.16em] text-emerald-100/80">
                      {skill.level} MASTERY
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/70 p-5 shadow-[0_0_35px_rgba(34,197,94,0.25)] backdrop-blur">
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
              SUPPORT:// TOOLS
            </h2>
            <p className="mb-4 mt-1 text-[0.7rem] text-emerald-300/80">
              DATABASES · DEVOPS · CLOUD
            </p>
            <div className="flex flex-wrap gap-2 text-[0.7rem]">
              {skills
                .filter((s) => s.category === "Tools")
                .map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full border px-3 py-1 transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(34,197,94,0.3)] ${levelColor(skill.level, "dark")}`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        </section>

        {/* CV overview */}
        <section className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/80 p-5 shadow-[0_0_45px_rgba(34,197,94,0.3)] backdrop-blur">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
                CV_OVERVIEW
              </h2>
              <p className="mt-1 text-[0.7rem] text-emerald-300/80">
                SNAPSHOT OF EDUCATION & REFERENCES
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.7rem] text-emerald-200/90">
              <span className="rounded-full border border-emerald-500/40 bg-black/70 px-3 py-1">
                Bachelor in Software Engineering (UMT) - Software Engineer
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)]">
            {/* objective + education */}
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  CAREER_OBJECTIVE
                </h3>
                <p className="text-[0.8rem] leading-relaxed text-emerald-100/90">
                  Software engineer with years of hands-on experience shipping and 
                  maintaining real-world products. I take ownership, write clean and scalable code, 
                  and consistently deliver reliable features backed by automation, strong debugging, 
                  and performance-first engineering.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  EDUCATION
                </h3>
                <ul className="space-y-2 text-[0.8rem]">
                  {education.map((edu) => (
                    <li key={edu.place}>
                      <div className="flex items-center justify-between text-[0.7rem] text-emerald-300/80">
                        <span>{edu.place}</span>
                        <span>{edu.period}</span>
                      </div>
                      <div className="text-[0.8rem] font-semibold text-emerald-100">
                        {edu.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* references */}
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  REFERENCES
                </h3>
                <div className="grid gap-3 text-[0.75rem] text-emerald-100 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-500/30 bg-black/70 p-3">
                    <div className="font-semibold text-emerald-100">
                      Muhammad Amir Qushairi Jais
                    </div>
                    <div className="text-emerald-300/80">
                      Lead Fullstack Developer
                    </div>
                    <div className="mt-2 text-emerald-100/90">
                      Phone: 019-9111920
                    </div>
                    <div className="truncate text-emerald-100/90">
                      Email: muhd.amirqushairijais@gmail.com
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-black/70 p-3">
                    <div className="font-semibold text-emerald-100">
                      Aqil Ashraaf
                    </div>
                    <div className="text-emerald-300/80">Web Developer</div>
                    <div className="mt-2 text-emerald-100/90">
                      Phone: 010-5739057
                    </div>
                    <div className="truncate text-emerald-100/90">
                      Email: aqilashraaf.18@gmail.com
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-black/70 p-3">
                    <div className="font-semibold text-emerald-100">
                      Muaaz Badrul Hisham
                    </div>
                    <div className="text-emerald-300/80">Software Engineer</div>
                    <div className="mt-2 text-emerald-100/90">
                      Phone: 019-9652230
                    </div>
                    <div className="truncate text-emerald-100/90">
                      Email: muaazbadrul@gmail.com
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-black/70 p-3">
                    <div className="font-semibold text-emerald-100">
                      Nisa Asila
                    </div>
                    <div className="text-emerald-300/80">Software Engineer</div>
                    <div className="mt-2 text-emerald-100/90">
                      Phone: 013-3236905
                    </div>
                    <div className="truncate text-emerald-100/90">
                      Email: nisaasilamn@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="mt-4 flex items-center justify-between border-t border-emerald-500/30 pt-3 text-[0.65rem] text-emerald-400/80">
          <span>© 2020 Wan Muhammad Faiz</span>
          <span>Power with Next.js</span>
        </footer>
      </main>
    </div>);
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved === "dark" ? "dark" : "light"; // default: light
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleTheme}
        className={`fixed right-6 top-6 z-[60] rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm transition ${
          theme === "dark"
            ? "border-emerald-500/30 bg-black/70 text-emerald-100 hover:bg-black/80"
            : "border-emerald-200 bg-white text-slate-900 hover:bg-slate-50"
        }`}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>

      {theme === "dark" ? <DarkView /> : <WhiteView />}
    </div>
  );
}
