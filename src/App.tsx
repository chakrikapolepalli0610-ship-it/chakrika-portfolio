import { useState, useEffect, useRef } from "react";

// ── Icon Components ─────────────────────────────────────────────────────────

function IconGithub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconMenu({ open }: { open: boolean }) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </>
      )}
    </svg>
  );
}

function IconBot({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function IconChevronUp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function IconSend({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

// ── Reusable Primitives ─────────────────────────────────────────────────────

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-colors duration-150">
      {label}
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-mono text-violet-400 uppercase tracking-[0.18em]">{children}</span>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Design", href: "#design" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    emoji: "🖥️",
    title: "Virtual Classroom Platform",
    period: "Dec 2025 – Jan 2026",
    tags: ["Node.js", "React", "WebRTC", "Socket.io", "MongoDB", "Tailwind CSS", "C++"],
    highlights: [
      "Real-time audio/video communication for up to 10 concurrent users via WebRTC",
      "Role-based authentication with dynamic React dashboards per role",
      "Assignment management system with submission tracking",
    ],
    github: "https://github.com/chakrikapolepalli0610-ship-it",
    live: null,
  },
  {
    emoji: "📚",
    title: "Learning Management System",
    period: "Sep 2025 – Oct 2025",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "OOP", "C++", "Git"],
    highlights: [
      "Centralized online learning platform with modular architecture",
      "Separate student & instructor interfaces with distinct role workflows",
      "Reusable React component library ensuring consistent design language",
    ],
    github: "https://github.com/chakrikapolepalli0610-ship-it",
    live: null,
  },
  {
    emoji: "📝",
    title: "Collaborative Online Notepad",
    period: "Feb 2025 – Mar 2025",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
    highlights: [
      "Real-time collaborative note editing with live synchronization",
      "Dynamic CRUD management interface with animated state transitions",
    ],
    github: "https://github.com/chakrikapolepalli0610-ship-it",
    live: null,
  },
];

const SKILL_CATEGORIES = [
  {
    icon: "⌨️",
    label: "Languages",
    skills: ["C", "C++", "Python", "DBMS"],
  },
  {
    icon: "🌐",
    label: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js"],
  },
  {
    icon: "🗄️",
    label: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "Figma"],
  },
  {
    icon: "✦",
    label: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"],
  },
];

const CERTIFICATIONS = [
  {
    icon: "🤖",
    title: "Master Generative AI and Generative AI Tools",
    provider: "Udemy",
    url: null,
  },
  {
    icon: "🌐",
    title: "The Bits and Bytes of Computer Networking",
    provider: "Coursera",
    url: null,
  },
  {
    icon: "⚙️",
    title: "Software Development Processes and Methodologies",
    provider: "Coursera",
    url: null,
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🏅",
    label: "LeetCode 100 Days Badge",
    accent: "amber",
    desc: "Maintained a 100-day streak of consistent problem solving, tackling 200+ algorithmic challenges across data structures and dynamic programming.",
  },
  {
    icon: "🏆",
    label: "Top 10 Hackathon Finalist",
    accent: "amber",
    desc: "Ranked in the top 10 out of 50+ competing teams at the college hackathon — recognized for technical execution and rapid UI/UX prototyping under time pressure.",
  },
];

// ── Navigation ───────────────────────────────────────────────────────────────

function Navbar({ scrolled, activeSection }: { scrolled: boolean; activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1120]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-1 group">
          <span className="text-xl font-bold font-mono text-violet-400 group-hover:text-violet-300 transition-colors tracking-tight">
            PC.
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 tracking-wide ${
                activeSection === link.href.slice(1)
                  ? "text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/chakrikapolepalli0610-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-sm text-slate-300 border border-white/[0.1] rounded-lg hover:border-violet-500/40 hover:text-white transition-all duration-200"
          >
            <IconGithub />
            GitHub
          </a>
          <a
            href="mailto:chakrikapolepalli0610@gmail.com?subject=Resume Request"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-colors duration-200 shadow-lg shadow-violet-500/20"
          >
            View Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <IconMenu open={menuOpen} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1120]/98 backdrop-blur-xl border-b border-white/[0.06] px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors py-1 ${
                activeSection === link.href.slice(1)
                  ? "text-white font-medium"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2.5 pt-2 border-t border-white/[0.06]">
            <a
              href="https://github.com/chakrikapolepalli0610-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 border border-white/10 rounded-lg"
            >
              <IconGithub /> GitHub
            </a>
            <a
              href="mailto:chakrikapolepalli0610@gmail.com?subject=Resume Request"
              className="px-4 py-2 text-sm font-semibold bg-violet-600 text-white rounded-lg"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-violet-700/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] bg-indigo-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-violet-500/5 rounded-full blur-[80px]" />
        {/* Dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #6366F1 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* ── Left: Text content ── */}
          <div className="flex-1 min-w-0">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-500/8 border border-violet-500/20 text-xs font-mono text-violet-300 mb-9">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities · B.Tech CSE · Lovely Professional University
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                Polepalli Chakrika
              </span>
            </h1>

            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 leading-snug mb-6">
              Full-Stack Developer &{" "}
              <span className="text-white">UX Prototype Designer</span>
            </h2>

            <p className="text-slate-400 text-base max-w-xl mb-10 leading-relaxed">
              B.Tech CSE Student building scalable web applications with{" "}
              <span className="text-violet-300 font-medium">Node.js, React, WebRTC</span>, and
              designing user-centered UI/UX prototypes that bridge engineering and design thinking.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#projects"
                className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-500 transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/25 text-sm"
              >
                Explore Projects
              </a>
              <a
                href="https://www.linkedin.com/in/chakrika-polepelli-55ab60383"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#1E293B] text-slate-200 font-medium rounded-xl border border-white/[0.09] hover:border-violet-500/40 hover:text-white transition-all duration-200 text-sm"
              >
                <IconLinkedin /> Connect on LinkedIn
              </a>
              <a
                href="https://github.com/chakrikapolepalli0610-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#1E293B] text-slate-200 font-medium rounded-xl border border-white/[0.09] hover:border-violet-500/40 hover:text-white transition-all duration-200 text-sm"
              >
                <IconGithub /> GitHub Profile
              </a>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              {[
                { value: "200+", label: "Problems Solved", sub: "Coding platforms", icon: "⚡" },
                { value: "100", label: "Days Badge", sub: "LeetCode streak", icon: "🔥" },
                { value: "Top 10", label: "Hackathon Rank", sub: "50+ teams", icon: "🏆" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="bg-[#1E293B] border border-white/[0.08] rounded-2xl p-4 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <span className="text-2xl font-black font-mono text-violet-400 group-hover:text-violet-300 transition-colors leading-none">
                      {stat.value}
                    </span>
                    <span className="text-base opacity-60">{stat.icon}</span>
                  </div>
                  <p className="text-white text-xs font-semibold">{stat.label}</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile photo ── */}
          <div className="lg:w-[340px] xl:w-[380px] shrink-0 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-violet-600/30 via-indigo-500/20 to-violet-400/10 blur-xl" />
              {/* Ring border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20"
                style={{ background: "radial-gradient(circle at 60% 30%, rgba(99,102,241,0.12), rgba(15,23,42,0.8))" }}>
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-indigo-600/20">
                    <div className="text-center">
                      <div className="text-6xl mb-2">👩‍💻</div>
                      <p className="text-white text-sm font-medium">Polepalli Chakrika</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/profile.png"
                    alt="Polepalli Chakrika — Full-Stack Developer & UX Designer"
                    className="w-full h-full object-cover object-top scale-110"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#1E293B] border border-violet-500/30 rounded-2xl px-3.5 py-2 shadow-xl">
                <p className="text-[10px] font-mono text-violet-400 leading-none mb-0.5">Status</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-white font-semibold">Available</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow>About Me</SectionEyebrow>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Content */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Passionate about building meaningful software experiences
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">B.Tech CSE student</span> at Lovely Professional University, deeply interested in the intersection of full-stack development, web technologies, and user-centered design.
              </p>
              <p>
                My journey spans from crafting scalable backend systems with <span className="text-violet-300 font-medium">Node.js and React</span> to designing intuitive UI/UX prototypes in Figma. I believe great software combines technical excellence with thoughtful user experience.
              </p>
              <p>
                I'm particularly drawn to <span className="text-white font-medium">artificial intelligence, problem-solving, and building practical software solutions</span> that make a real difference. Whether it's optimizing database queries or refining pixel-perfect interfaces, I enjoy the entire development lifecycle.
              </p>
              <p>
                When I'm not coding, you'll find me solving algorithmic challenges on LeetCode, exploring new frameworks, or collaborating on hackathon projects that push my technical boundaries.
              </p>
            </div>

            {/* Key interests */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Full-Stack Development", "Web Development", "UI/UX Design", "Artificial Intelligence", "Problem Solving"].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="space-y-4">
            {/* Location card */}
            <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl p-5 hover:border-violet-500/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">📍</span>
                <h3 className="text-white font-semibold text-sm">Location</h3>
              </div>
              <p className="text-slate-400 text-sm">Khammam, Telangana, India</p>
            </div>

            {/* Education card */}
            <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl p-5 hover:border-violet-500/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🎓</span>
                <h3 className="text-white font-semibold text-sm">Education</h3>
              </div>
              <p className="text-slate-400 text-sm">B.Tech Computer Science & Engineering</p>
              <p className="text-violet-400 text-xs font-medium mt-1">Lovely Professional University</p>
            </div>

            {/* Focus card */}
            <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl p-5 hover:border-violet-500/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🎯</span>
                <h3 className="text-white font-semibold text-sm">Current Focus</h3>
              </div>
              <p className="text-slate-400 text-sm">Building production-ready applications and expanding expertise in AI/ML and cloud technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow>Featured Work</SectionEyebrow>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Projects
            </h2>
            <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
              Real-world applications built with modern stacks — focused on
              performance, scalability, and clean user experience.
            </p>
          </div>
          <a
            href="https://github.com/chakrikapolepalli0610-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors whitespace-nowrap"
          >
            <IconGithub size={14} /> View all on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className="group bg-[#1E293B] border border-white/[0.08] rounded-2xl p-6 flex flex-col hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/[0.08] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl shrink-0">
                  {project.emoji}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-base leading-tight group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono mt-0.5 block">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mb-5 flex-1 space-y-2.5">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                    <span className="text-violet-500 mt-0.5 shrink-0 text-xs">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} label={tag} />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 border border-white/[0.1] rounded-lg hover:border-violet-500/40 hover:text-white transition-all duration-200"
                >
                  <IconGithub size={12} /> GitHub Repo
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-violet-600/15 text-violet-300 border border-violet-500/20 rounded-lg hover:bg-violet-600/25 transition-all duration-200"
                  >
                    <IconExternalLink /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 border border-white/[0.05] rounded-lg cursor-not-allowed">
                    <IconExternalLink /> Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Design Section ────────────────────────────────────────────────────────────

function DesignSection() {
  return (
    <section id="design" className="pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow>UX & Design</SectionEyebrow>

        <div className="relative overflow-hidden rounded-3xl gradient-border">
          {/* Ambient glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/12 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/8 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative p-8 sm:p-10 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Design Thinking", "Figma", "High-Fidelity Prototyping", "User Research"].map(
                    (tag) => (
                      <TechBadge key={tag} label={tag} />
                    )
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1.5">
                  UX Prototype Designer
                  <span className="text-violet-400"> &</span> Design Thinking Trainee
                </h3>
                <p className="text-violet-400 text-sm font-mono font-medium mb-4">
                  Lovely Professional University — Summer Training
                </p>
                <p className="text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
                  Conducted end-to-end user research following the{" "}
                  <span className="text-white font-medium">empathize → define → ideate → prototype → test</span>{" "}
                  lifecycle. Built a{" "}
                  <span className="text-violet-300 font-semibold">
                    20+ screen high-fidelity interactive Figma prototype
                  </span>{" "}
                  designed for usability testing, applying human-centered design principles at every stage.
                </p>

                {/* Design phases */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Empathize", "Define", "Ideate", "Prototype", "Test"].map((phase, i) => (
                    <div key={phase} className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-[10px] font-mono text-violet-400 font-bold">
                        {i + 1}
                      </span>
                      <span className="text-xs text-slate-400">{phase}</span>
                      {i < 4 && <span className="text-slate-600 text-xs">→</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats sidebar */}
              <div className="flex md:flex-col gap-3 md:w-44 shrink-0">
                {[
                  { value: "20+", label: "Figma Screens" },
                  { value: "5", label: "UX Phases" },
                  { value: "100%", label: "User-Centered" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 md:flex-none text-center bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4"
                  >
                    <div className="text-2xl font-black font-mono text-violet-400 leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow>Technical Expertise</SectionEyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 mb-12 max-w-lg text-sm leading-relaxed">
          Languages, frameworks, and tools I reach for — plus the soft skills that make the difference in collaborative engineering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="bg-[#1E293B] border border-white/[0.08] rounded-2xl p-6 hover:border-violet-500/25 hover:shadow-lg hover:shadow-violet-500/[0.07] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-base">
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold text-sm">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/20 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Achievements ──────────────────────────────────────────────────────────────

function Achievements() {
  return (
    <section id="achievements" className="pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Certifications */}
          <div>
            <SectionEyebrow>Continuous Learning</SectionEyebrow>
            <h2 className="font-display text-3xl font-bold text-white mb-8">Certifications</h2>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="bg-[#1E293B] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4 hover:border-violet-500/25 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-lg shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold leading-snug mb-1">
                      {cert.title}
                    </p>
                    <p className="text-violet-400 text-xs font-mono">{cert.provider}</p>
                  </div>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <IconExternalLink /> View
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <SectionEyebrow>Milestones</SectionEyebrow>
            <h2 className="font-display text-3xl font-bold text-white mb-8">Achievements</h2>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, i) => (
                <div
                  key={i}
                  className="bg-[#1E293B] border border-white/[0.08] rounded-xl p-5 hover:border-amber-500/25 hover:shadow-lg hover:shadow-amber-500/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-2xl">{ach.icon}</span>
                    <h3 className="text-white font-bold text-sm">{ach.label}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.desc}</p>
                </div>
              ))}

              {/* Coding stats card */}
              <div className="bg-gradient-to-br from-violet-600/10 via-[#1a2540] to-indigo-600/10 border border-violet-500/20 rounded-xl p-5">
                <p className="text-slate-400 text-xs font-mono mb-4">{"// quick stats"}</p>
                <div className="flex gap-8">
                  {[
                    { value: "200+", label: "Problems Solved" },
                    { value: "100", label: "Day Streak" },
                    { value: "50+", label: "Teams Beaten" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-black font-mono text-violet-400">{s.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────────

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in production, integrate with Formspree/EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow>Get in Touch</SectionEyebrow>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's connect
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and design. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:chakrikapolepalli0610@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#1E293B] border border-white/[0.08] rounded-xl hover:border-violet-500/25 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-slate-400 group-hover:text-violet-400 transition-colors">
                  <IconMail />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Email</p>
                  <p className="text-slate-400 text-sm">chakrikapolepalli0610@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917995099599"
                className="flex items-center gap-4 p-4 bg-[#1E293B] border border-white/[0.08] rounded-xl hover:border-violet-500/25 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-slate-400 group-hover:text-violet-400 transition-colors">
                  <IconPhone />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Phone</p>
                  <p className="text-slate-400 text-sm">+91-7995099599</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/chakrika-polepelli-55ab60383"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#1E293B] border border-white/[0.08] rounded-xl hover:border-violet-500/25 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-slate-400 group-hover:text-violet-400 transition-colors">
                  <IconLinkedin />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">LinkedIn</p>
                  <p className="text-slate-400 text-sm">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/chakrikapolepalli0610-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#1E293B] border border-white/[0.08] rounded-xl hover:border-violet-500/25 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-slate-400 group-hover:text-violet-400 transition-colors">
                  <IconGithub />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">GitHub</p>
                  <p className="text-slate-400 text-sm">View my projects</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <div className="bg-[#1E293B] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-semibold text-lg mb-6">Send a message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <p className="text-emerald-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-slate-400 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-400 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-violet-600"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-slate-500 text-xs text-center">
                  Or email me directly at{' '}
                  <a
                    href="mailto:chakrikapolepalli0610@gmail.com"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    chakrikapolepalli0610@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Back to Top ───────────────────────────────────────────────────────────────

function BackToTop({ visible }: { visible: boolean }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-40 w-12 h-12 bg-[#1E293B] border border-white/[0.1] rounded-lg shadow-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/30 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <IconChevronUp size={20} />
    </button>
  );
}

// ── AI Assistant ──────────────────────────────────────────────────────────────

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: "Hi! I'm Chakrika's AI assistant. Ask me about her skills, projects, education, or anything else!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Skills responses
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('know')) {
      return "Chakrika works with C++, Python, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, Git, GitHub, and Figma. She's also experienced with WebRTC and Socket.io for real-time applications.";
    }

    // Project responses
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('built') || lowerMessage.includes('create')) {
      return "She has worked on three main projects: a Virtual Classroom Platform with real-time video communication, a Learning Management System with role-based workflows, and a Collaborative Online Notepad with live synchronization.";
    }

    // Education responses
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('university') || lowerMessage.includes('college') || lowerMessage.includes('degree')) {
      return "Chakrika is pursuing a B.Tech in Computer Science & Engineering at Lovely Professional University (Aug 2023 – Present).";
    }

    // Certification responses
    if (lowerMessage.includes('certif') || lowerMessage.includes('course') || lowerMessage.includes('udemy') || lowerMessage.includes('coursera')) {
      return "She holds certifications in Master Generative AI and Generative AI Tools (Udemy), The Bits and Bytes of Computer Networking (Coursera), and Software Development Processes and Methodologies (Coursera).";
    }

    // Achievement responses
    if (lowerMessage.includes('achieve') || lowerMessage.includes('leetcode') || lowerMessage.includes('hackathon') || lowerMessage.includes('award') || lowerMessage.includes('badge')) {
      return "Chakrika has achieved a LeetCode 100 Days Badge, solved 200+ coding problems, and was a Top 10 Finalist in a college hackathon with 50+ competing teams.";
    }

    // Contact responses
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('hire') || lowerMessage.includes('opportunity')) {
      return "You can reach Chakrika at chakrikapolepalli0610@gmail.com or call +91-7995099599. She's also active on LinkedIn and GitHub!";
    }

    // Career/interest responses
    if (lowerMessage.includes('career') || lowerMessage.includes('interest') || lowerMessage.includes('goal') || lowerMessage.includes('future') || lowerMessage.includes('passion')) {
      return "Chakrika is passionate about full-stack development, web development, UI/UX design, artificial intelligence, and building practical software solutions that make a real difference.";
    }

    // Location responses
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('city') || lowerMessage.includes('place')) {
      return "Chakrika is based in Khammam, Telangana, India.";
    }

    // Default response
    return "I can tell you about Chakrika's skills, projects, education, certifications, achievements, or how to contact her. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-violet-600 text-white rounded-full shadow-lg shadow-violet-500/30 hover:bg-violet-500 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Ask Chakrika AI"
      >
        <IconBot size={24} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#1E293B] border border-white/[0.1] rounded-2xl shadow-2xl shadow-violet-500/10 overflow-hidden">
          {/* Header */}
          <div className="bg-violet-600/10 border-b border-violet-500/20 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <IconBot size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Ask Chakrika AI</h3>
                <p className="text-violet-400 text-xs">Ask about skills, projects, etc.</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === 'user'
                      ? 'bg-violet-600 text-white rounded-br-md'
                      : 'bg-white/[0.06] text-slate-300 rounded-bl-md'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/[0.06] rounded-2xl rounded-bl-md px-4 py-2.5">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/[0.06] p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Chakrika..."
                className="flex-1 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                className="px-3 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <IconSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-violet-400 font-mono tracking-tight">
              PC.
            </span>
            <p className="text-slate-400 text-sm">
              B.Tech CSE Student · Full-Stack Developer & UX Designer
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/chakrikapolepalli0610-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/30 transition-all"
              aria-label="GitHub Profile"
            >
              <IconGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/chakrika-polepelli-55ab60383"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <IconLinkedin size={16} />
            </a>
            <a
              href="mailto:chakrikapolepalli0610@gmail.com"
              className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/30 transition-all"
              aria-label="Email"
            >
              <IconMail />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 Polepalli Chakrika. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Built with React · Tailwind CSS v4 · Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowBackToTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0F172A] text-white antialiased"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <DesignSection />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
      <AIAssistant />
    </div>
  );
}
