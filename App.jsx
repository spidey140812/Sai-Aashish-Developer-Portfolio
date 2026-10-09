import { useMemo, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Command,
  Github, Globe2, Layers3, Mail, Menu, MoveUpRight, Terminal, X,
  Linkedin, Sparkles
} from "lucide-react";

const profile = {
  name: "Sai Aashish",
  title: "Student Council President · Developer · Builder",
  email: "your-email@example.com",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_PROFILE/",
  location: "India · Building for the web",
  availability: "Open to freelance opportunities"
};

// Replace project descriptions and add screenshots / live links whenever you're ready.
const projects = [
  {
    number: "01", title: "StoryGems", type: "E-commerce · Product",
    category: "Web apps",
    summary: "A book discovery and gifting concept built around a thoughtful, premium shopping experience.",
    problem: "Make choosing and gifting books feel personal while keeping the online shopping journey clear.",
    approach: "Create a considered brand experience with distinct audience categories and a straightforward product journey.",
    stack: ["JavaScript", "Firebase", "E-commerce"],
    status: "Product in progress", accent: "lime", github: "", live: "", image: ""
  },
  {
    number: "02", title: "SPIDEY AI", type: "Python · Assistant",
    category: "Tools",
    summary: "A personal assistant project exploring useful desktop workflows and modular capabilities.",
    problem: "Everyday computer workflows can become fragmented across tools and repetitive tasks.",
    approach: "Build a modular assistant foundation that can grow through carefully tested features.",
    stack: ["Python", "YAML", "AI integration"],
    status: "In development", accent: "blue", github: "", live: "", image: ""
  },
  {
    number: "03", title: "Customer AI", type: "SaaS · Engineering",
    category: "Web apps",
    summary: "A multi-tenant AI product foundation focused on persistence, access control and testable services.",
    problem: "Products serving multiple organizations need clear data boundaries and reliable entitlement checks.",
    approach: "Develop a testable application foundation with a verification-first workflow.",
    stack: ["TypeScript", "Supabase", "Testing"],
    status: "Engineering foundation", accent: "violet", github: "", live: "", image: ""
  },
  {
    number: "04", title: "Reignite", type: "Business · Website",
    category: "Websites",
    summary: "A premium web direction for an art and education business, designed around clarity and trust.",
    problem: "Communicate an education brand's offering clearly without overwhelming prospective learners.",
    approach: "Use a structured information hierarchy, restrained styling and responsive layouts.",
    stack: ["React", "CSS", "Responsive design"],
    status: "Website project", accent: "orange", github: "", live: "", image: ""
  }
];

const filters = ["All", "Web apps", "Websites", "Tools"];

function SectionLabel({ index, children }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>;
}

function ProjectVisual({ project }) {
  if (project.image) {
    return <div className="project-visual image-visual"><img src={project.image} alt={`${project.title} project preview`} /><div className="image-overlay"/></div>;
  }
  return (
    <div className={`project-visual visual-${project.accent}`} aria-hidden="true">
      <div className="visual-top"><span className="window-dots"><i/><i/><i/></span><span className="visual-mono">PROJECT / {project.number}</span></div>
      {project.accent === "lime" && <div className="terminal-window"><div><span className="prompt">$</span> storygems --preview</div><div className="terminal-muted">curating meaningful reads...</div><div><span className="prompt">✓</span> collections organized</div><div><span className="prompt">›</span> discover something special<span className="cursor"/></div></div>}
      {project.accent === "blue" && <div className="architecture"><div className="arch-node">VOICE / TEXT</div><span className="arch-line"/><div className="arch-node arch-active">SPIDEY CORE</div><span className="arch-line"/><div className="arch-row"><div className="arch-node">TOOLS</div><div className="arch-node">MEMORY</div></div></div>}
      {project.accent === "violet" && <div className="architecture"><div className="arch-node">ORGANIZATION</div><span className="arch-line"/><div className="arch-node arch-active">SERVICE LAYER</div><span className="arch-line"/><div className="arch-row"><div className="arch-node">AUTH</div><div className="arch-node">DATABASE</div></div></div>}
      {project.accent === "orange" && <div className="website-mock"><div className="mock-nav"><span>REIGNITE</span><span>ABOUT&nbsp;&nbsp; PROGRAMS&nbsp;&nbsp; CONTACT</span></div><div className="mock-content"><span className="mock-kicker">MAKE SPACE TO CREATE</span><div className="mock-heading">Art that<br/>moves you.</div><span className="mock-cta">EXPLORE PROGRAMS ↗</span></div><div className="mock-orb"/></div>}
      <div className="visual-bottom"><span>SELECTED WORK</span><span>↗</span></div>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project}/>
      <div className="project-card-content">
        <div className="project-meta"><span>{project.type}</span><span>{project.status}</span></div>
        <div className="project-title-row"><h3>{project.title}</h3><span className="project-number">{project.number}</span></div>
        <p>{project.summary}</p>
        <div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        <div className="project-actions">
          <button className="text-link" onClick={() => onOpen(project)}>Read case study <ArrowUpRight size={15}/></button>
          {project.live && <a className="icon-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><Globe2 size={17}/></a>}
          {project.github && <a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source code`}><Github size={17}/></a>}
        </div>
      </div>
    </article>
  );
}

function CaseStudyModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
        <button className="modal-close" onClick={onClose} aria-label="Close case study"><X size={19}/></button>
        <div className="eyebrow">CASE STUDY / {project.number}</div>
        <h2 id="case-title">{project.title}</h2><p className="modal-summary">{project.summary}</p>
        <div className="case-block"><span>01 / THE CHALLENGE</span><p>{project.problem}</p></div>
        <div className="case-block"><span>02 / THE APPROACH</span><p>{project.approach}</p></div>
        <div className="case-block"><span>03 / TECHNOLOGY</span><div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
        <p className="modal-note">Status: {project.status}. Add verified outcomes, screenshots and working links when ready to publish.</p>
        <div className="modal-actions">{project.github && <a className="button button-ghost" href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> Source code</a>}{project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16}/></a>}</div>
      </section>
    </div>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const visibleProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter), [activeFilter]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = `mailto:${profile.email}`; }
  }
  const closeMobile = () => setMobileOpen(false);

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Sai Aashish homepage"><span className="brand-mark"><Command size={19}/></span><span>SAI AASHISH<i>.</i></span></a>
      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>{mobileOpen ? <X/> : <Menu/>}</button>
      <nav className={mobileOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
        <a href="#work" onClick={closeMobile}>Work <span>01</span></a><a href="#about" onClick={closeMobile}>About <span>02</span></a><a href="#stack" onClick={closeMobile}>Stack <span>03</span></a><a className="nav-contact" href="#contact" onClick={closeMobile}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/>{profile.availability}</div>
          <p className="eyebrow hero-eyebrow">DEVELOPER & DIGITAL PRODUCT BUILDER <span>BASED IN INDIA</span></p>
          <h1>Ideas into<br/><span className="headline-accent">digital reality.</span></h1>
          <p className="hero-description">I'm Sai Aashish — a student leader and developer building thoughtful websites, useful tools and digital products from the ground up.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
          <div className="hero-footnote"><span className="mono">CURRENTLY BUILDING</span><span className="footnote-line"/><span>Useful things for the web.</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract developer illustration">
          <div className="art-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
          <div className="core"><div className="core-inner"><Terminal size={39}/><span>BUILD<br/>BETTER</span></div></div>
          <div className="float-card float-card-top"><span className="float-icon"><Code2 size={15}/></span><span><b>Clean code</b><small>Built to last</small></span><Check className="float-check" size={16}/></div>
          <div className="float-card float-card-bottom"><span className="pulse-bars"><i/><i/><i/><i/></span><span><b>Ideas → shipped</b><small>One iteration at a time</small></span></div>
          <span className="art-coordinate coord-a">BUILD / LEARN / SHIP</span><span className="art-coordinate coord-b">FIG. 001 — PROCESS</span>
        </div>
        <a className="scroll-cue" href="#work"><span className="scroll-line"/>SCROLL TO EXPLORE</a>
      </section>

      <section className="work-section section-wrap" id="work">
        <SectionLabel index="01">SELECTED WORK</SectionLabel>
        <div className="section-heading-row"><div><h2>Built with purpose.</h2><p className="section-intro">Projects, experiments and engineering challenges I'm working on.</p></div><span className="count-label">PROJECT INDEX <b>— 0{visibleProjects.length}</b></span></div>
        <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} className={activeFilter === f ? "filter-button filter-active" : "filter-button"} onClick={() => setActiveFilter(f)}>{f}<span>{f === "All" ? projects.length : projects.filter(p => p.category === f).length}</span></button>)}</div>
        <div className="project-grid">{visibleProjects.map(project => <ProjectCard key={project.number} project={project} onOpen={setSelectedProject}/>)}</div>
        <p className="project-footnote"><span className="tiny-dot"/> Project descriptions are editable starting points. Add your own screenshots and verified live links before publishing.</p>
      </section>

      <section className="about-section section-wrap" id="about">
        <SectionLabel index="02">A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid"><div><h2>Leadership mindset.<br/><span className="muted-heading">Builder's hands.</span></h2></div><div className="about-copy"><p className="about-lead">I enjoy bringing people and ideas together — then turning the idea into something real.</p><p>As Student Council President at Indian Senior School for 2026–27, I value ownership, teamwork and leading through support rather than fear. Outside school leadership, I spend time building websites, exploring software and learning through projects.</p><p>My goal is simple: keep improving my engineering skills and build digital products that solve real problems.</p><a className="inline-link" href="#contact">Have a project in mind? <ArrowUpRight size={15}/></a></div></div>
        <div className="principles"><div className="principle"><span>01</span><Layers3 size={21}/><h3>Thoughtful systems</h3><p>Structure that makes products easier to evolve.</p></div><div className="principle"><span>02</span><Code2 size={21}/><h3>Practical engineering</h3><p>Readable code, real functionality and careful testing.</p></div><div className="principle"><span>03</span><MoveUpRight size={21}/><h3>Always improving</h3><p>Small iterations that lead to stronger outcomes.</p></div></div>
      </section>

      <section className="stack-section section-wrap" id="stack">
        <SectionLabel index="03">TOOLS OF THE TRADE</SectionLabel>
        <div className="section-heading-row"><div><h2>The right tool<br/>for the job.</h2></div><p className="stack-note">Technologies I use or explore while building websites, apps and developer tools.</p></div>
        <div className="stack-grid"><div className="stack-card"><span className="stack-index">01 / FRONTEND</span><h3>Interfaces</h3><div className="stack-items"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span></div></div><div className="stack-card"><span className="stack-index">02 / BACKEND</span><h3>Application logic</h3><div className="stack-items"><span>Python</span><span>APIs</span><span>Authentication</span></div></div><div className="stack-card"><span className="stack-index">03 / DATA</span><h3>Storage & services</h3><div className="stack-items"><span>Supabase</span><span>Firebase</span><span>SQL basics</span></div></div><div className="stack-card"><span className="stack-index">04 / WORKFLOW</span><h3>Build & ship</h3><div className="stack-items"><span>Git</span><span>GitHub</span><span>Vite</span><span>Vercel</span></div></div></div>
      </section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-panel"><div className="contact-decoration"><div className="contact-ring ring-one"/><div className="contact-ring ring-two"/><span>LET'S BUILD<br/>SOMETHING<br/><i>MEANINGFUL.</i></span></div><div className="contact-copy"><SectionLabel index="04">HAVE SOMETHING IN MIND?</SectionLabel><h2>Good work starts<br/>with a conversation.</h2><p>Have an idea, a project or an interesting problem? Tell me what you're working on.</p><button className="button button-primary contact-button" onClick={copyEmail}>{copied ? <><Check size={17}/> Email copied</> : <><Mail size={17}/> {profile.email} <ArrowUpRight size={16}/></>}</button><span className="contact-hint">{profile.location} <span>·</span> Let's make something useful.</span></div></div></section>
    </main>
    <footer className="site-footer section-wrap"><a href="#home" className="brand footer-brand"><span className="brand-mark"><Command size={17}/></span><span>SAI AASHISH<i>.</i></span></a><span className="footer-copy">DESIGNED & BUILT WITH INTENTION.</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={17}/></a></div><span className="copyright">© {new Date().getFullYear()} SAI AASHISH. ALL RIGHTS RESERVED.</span></footer>
    <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)}/>
  </div>;
}
