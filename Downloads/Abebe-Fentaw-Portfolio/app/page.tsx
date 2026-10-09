"use client";
import React from "react";
import {
  motion,
  MotionConfig,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Github,
  GraduationCap,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  Server,
  Wrench
} from "lucide-react";

import { portfolio } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const chip: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen">
        {/* SCROLL PROGRESS BAR */}
        <motion.div
          style={{ scaleX }}
          className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
        />

        {/* NAVBAR */}
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
        >
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#home" className="font-bold tracking-tight">
              <span className="text-gradient">AF</span>
            </a>

            <div className="hidden gap-6 text-sm text-slate-300 md:flex">
              {[
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Education",
                "Services",
                "Contact"
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-500/20"
            >
              Contact Me
            </a>
          </nav>
        </motion.header>

        {/* HERO */}
        <section
          id="home"
          className="grid-bg relative overflow-hidden px-6 py-24 md:py-32"
        >
          {/* Drifting background orbs */}
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                Open to Opportunities
              </div>

              <p className="mb-3 text-lg text-slate-400">Hi, I&apos;m</p>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Abebe <span className="text-gradient">Fentaw</span>
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-slate-200 md:text-3xl">
                Computer Science Graduate & IT/Software Professional
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                I work across IT support, system administration, software
                development, web development, data management, and technical
                training — with a practical troubleshooting mindset.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500"
                >
                  View My Work
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:bg-white/5"
                >
                  Contact Me
                  <Mail size={18} />
                </a>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 p-3 text-slate-400 transition hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 p-3 text-slate-400 transition hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href={`mailto:${portfolio.email}`}
                  className="rounded-lg border border-white/10 p-3 text-slate-400 transition hover:text-white"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* INTERACTIVE PROFILE / TECH ILLUSTRATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="glass relative aspect-square overflow-hidden rounded-3xl p-8 shadow-glow">
                <div className="absolute inset-0 grid-bg opacity-40" />

                <div className="relative flex h-full items-center justify-center">
                  {/* Background glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.25, 0.4, 0.25],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
                  />

                  {/* Outer animated ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-80 w-80 rounded-full border border-blue-400/20 border-dashed"
                  />

                  {/* Second ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-72 w-72 rounded-full border border-cyan-400/20"
                  />

                  {/* Profile photo */}
                  <div className="relative z-10">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-70 blur-md" />

                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-blue-400/40 bg-slate-900 shadow-2xl sm:h-64 sm:w-64">
                      <img
                        src="/profile/profile.jpg"
                        alt="Abebe Fentaw"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Status badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-green-400/20 bg-slate-950/95 px-4 py-2 text-xs font-medium text-green-400 shadow-xl backdrop-blur">
                      <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
                      Open to Opportunities
                    </div>
                  </div>

                  {/* Cloud */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-6 top-8 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur"
                  >
                    <CloudIcon />
                  </motion.div>

                  {/* Database */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-6 top-10 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur"
                  >
                    <Database size={24} className="text-indigo-400" />
                  </motion.div>

                  {/* Network */}
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 left-10 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur"
                  >
                    <Network size={24} className="text-cyan-400" />
                  </motion.div>

                  {/* Server */}
                  <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 right-10 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur"
                  >
                    <Server size={24} className="text-purple-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-16 flex max-w-7xl justify-center">
            <a href="#about" className="animate-bounce text-slate-500">
              <ArrowDown />
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About Me" eyebrow="WHO I AM">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-slate-400">
                {portfolio.about}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {portfolio.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                  >
                    <CheckCircle2 size={18} className="mb-2 text-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<GraduationCap />}
                title="Computer Science"
                text="Strong foundation in software, systems, databases, networks and computing fundamentals."
              />
              <InfoCard
                icon={<Wrench />}
                title="IT & Systems"
                text="Practical experience supporting users, hardware, software, systems and ICT infrastructure."
              />
              <InfoCard
                icon={<Code2 />}
                title="Software Development"
                text="Experience with web, application, API and full-stack development."
              />
              <InfoCard
                icon={<BriefcaseBusiness />}
                title="Problem Solving"
                text="Troubleshooting, testing, data handling, documentation and technical support."
              />
            </div>
          </div>
        </Section>

        {/* ANIMATED TERMINAL */}
        <section className="px-6 py-10">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/60 font-mono shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />

              <span className="ml-3 text-xs text-slate-500">
                abebe@portfolio:~
              </span>
            </div>

            {/* Terminal Content */}
            <div className="min-h-[280px] space-y-4 p-6 text-sm">
              <TypingLine
                command="whoami"
                response="Abebe Fentaw"
                responseClass="text-slate-300"
                delay={0}
              />

              <TypingLine
                command="role"
                response="Computer Science Graduate & IT/Software Professional"
                responseClass="text-slate-500"
                delay={3000}
              />

              <TypingLine
                command="status"
                response="Open to Opportunities"
                responseClass="text-blue-300"
                delay={6000}
              />

              <TypingLine
                command="interests"
                response="IT Support • Systems • Software • Web • Data • Training"
                responseClass="text-slate-400"
                delay={9000}
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" eyebrow="TECHNICAL TOOLKIT">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {Object.entries(portfolio.skills).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={item}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="mb-5 text-lg font-semibold">{category}</h3>

                <motion.div variants={container} className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={chip}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="cursor-default rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300 hover:border-blue-400/40 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          title="Experience"
          eyebrow="PROFESSIONAL JOURNEY"
        >
          <div className="relative ml-3 border-l border-blue-500/30 pl-8">
            {portfolio.experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-10"
              >
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-500" />

                <p className="text-sm text-blue-400">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-slate-400">{item.company}</p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects" eyebrow="SELECTED WORK">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {portfolio.projects.map((project) => (
              <motion.article
                key={project.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-blue-400/40"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"
                >
                  <Laptop />
                </motion.div>

                <p className="relative text-xs uppercase tracking-widest text-blue-400">
                  {project.category}
                </p>

                <h3 className="relative mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="relative mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative mt-auto inline-flex w-fit items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-500/20"
                >
                  <Github size={16} />
                  View on GitHub
                  <ArrowUpRight size={16} />
                </motion.a>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education" eyebrow="ACADEMIC BACKGROUND">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass max-w-3xl rounded-2xl p-8"
          >
            <GraduationCap className="mb-5 text-blue-400" size={36} />
            <h3 className="text-2xl font-semibold">
              {portfolio.education.degree}
            </h3>
            <p className="mt-2 text-lg text-slate-400">
              {portfolio.education.institution}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {portfolio.education.location} • {portfolio.education.year}
            </p>

            <p className="mt-6 leading-7 text-slate-400">
              Relevant areas include Software Development, Databases, Networks,
              Algorithms, Web Development, Systems and Computer Science
              fundamentals.
            </p>
          </motion.div>
        </Section>
        {/* DOWNLOAD CV */}
        <section id="cv" className="px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl"
          >
            <div className="glass relative overflow-hidden rounded-3xl border border-blue-400/20 p-8 shadow-glow md:p-12">
              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

              <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="mb-3 text-sm font-medium tracking-[0.25em] text-blue-400">
                    MY RESUME
                  </p>

                  <h2 className="text-3xl font-bold md:text-4xl">
                    Get to Know Me <span className="text-gradient">Better.</span>
                  </h2>

                  <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                    Explore my professional experience, technical skills, education,
                    and projects. Download my CV to learn how I can contribute to
                    your team or organization.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      Computer Science
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      IT Support
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      Software Development
                    </span>
                  </div>

                  <motion.a
                    href="/Abebe-Fentaw-CV.pdf"
                    download="Abebe-Fentaw-CV.pdf"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500"
                  >
                    <ArrowDown size={20} />
                    Download My CV
                  </motion.a>

                  <p className="mt-3 text-xs text-slate-500">
                    PDF document · Ready to download
                  </p>
                </div>

                {/* CV preview card */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto w-48 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl md:w-56"
                >
                  <div className="flex aspect-[3/4] flex-col rounded-lg border border-white/10 bg-slate-950 p-4">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                      <span className="text-sm font-bold">PDF</span>
                    </div>

                    <div className="text-sm font-bold text-white">
                      Abebe Fentaw
                    </div>
                    <div className="mt-1 text-[10px] text-blue-400">
                      IT & Software Professional
                    </div>

                    <div className="mt-5 space-y-2">
                      <div className="h-1.5 w-full rounded bg-white/10" />
                      <div className="h-1.5 w-4/5 rounded bg-white/10" />
                      <div className="h-1.5 w-full rounded bg-white/10" />
                      <div className="h-1.5 w-3/5 rounded bg-white/10" />
                    </div>

                    <div className="mt-5 text-[10px] font-semibold text-slate-400">
                      EXPERIENCE
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="h-1.5 w-full rounded bg-blue-400/30" />
                      <div className="h-1.5 w-4/5 rounded bg-white/10" />
                      <div className="h-1.5 w-full rounded bg-white/10" />
                    </div>

                    <div className="mt-5 text-[10px] font-semibold text-slate-400">
                      TECHNICAL SKILLS
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="h-1.5 w-full rounded bg-white/10" />
                      <div className="h-1.5 w-3/4 rounded bg-white/10" />
                    </div>
                  </div>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Abebe-Fentaw-CV.pdf
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* SERVICES */}
        <Section id="services" title="Services" eyebrow="WHAT I CAN HELP WITH">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {portfolio.services.map((service) => (
              <motion.div
                key={service}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6"
              >
                <motion.div
                  whileHover={{ rotate: -12 }}
                  className="mb-4 inline-flex text-blue-400"
                >
                  <Wrench />
                </motion.div>
                <h3 className="font-semibold">{service}</h3>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Let's Work Together" eyebrow="CONTACT">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                Have a project, opportunity, technical challenge, or role where I
                can contribute? Feel free to reach out.
              </p>

              <div className="mt-8 space-y-4 text-slate-400">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" />
                  {portfolio.email}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-400" />
                  {portfolio.location}
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-blue-400" />
                  {portfolio["Phone Number"]}
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-blue-400" />
                  <a
                    href={portfolio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="text-blue-400" />
                  <a
                    href={portfolio.Telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            <form
              action={`mailto:${portfolio.email}`}
              method="post"
              encType="text/plain"
              className="glass rounded-2xl p-6"
            >
              <div className="grid gap-4">
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-500/50"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-500/50"
                />

                <input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-500/50"
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={6}
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-500/50"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} Abebe Fentaw. All rights reserved.</p>

            <p>Computer Science Graduate • IT & Software Professional</p>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}

/* ---------- Helper components (module level, outside Home) ---------- */

function TypingLine({
  command,
  response,
  responseClass,
  delay = 0,
}: {
  command: string;
  response: string;
  responseClass: string;
  delay?: number;
}) {
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  React.useEffect(() => {
    if (!started) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && text.length < response.length) {
      timer = setTimeout(() => setText(response.slice(0, text.length + 1)), 45);
    } else if (!isDeleting && text.length === response.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => setText(response.slice(0, text.length - 1)), 25);
    } else if (isDeleting && text.length === 0) {
      timer = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, response, started]);

  return (
    <div>
      <div className="text-green-400">$ {command}</div>

      <div className={`mt-1 ${responseClass}`}>
        {text}
        <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-current align-middle" />
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-sm font-medium tracking-[0.25em] text-blue-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
          />
        </motion.div>

        {children}
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
    >
      {/* Hover glow */}
      <motion.div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Animated border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl border border-blue-400/30" />
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 6,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 12,
        }}
        className="relative z-10 mb-4 inline-flex text-blue-400"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <h3 className="relative z-10 font-semibold transition-colors duration-300 group-hover:text-blue-300">
        {title}
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
        {text}
      </p>

      {/* Bottom animated line */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
      />
    </motion.div>
  );
}

function CloudIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-blue-400"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h.29a5.5 5.5 0 1 1 1.5 10H17.5" />
    </svg>
  );
}