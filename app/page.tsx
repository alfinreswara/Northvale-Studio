import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ProjectEntry } from "@/components/ProjectEntry";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

const heroImage = "https://images.unsplash.com/photo-1778640331184-dc4c3e2608e1?auto=format&fit=crop&fm=jpg&q=88&w=2400";
const services = [["01", "Architecture"], ["02", "Interior Design"], ["03", "Spatial Planning"], ["04", "Creative Direction"]];
const process = [
  ["01", "Discover", "Understand the space, context, needs, and vision."],
  ["02", "Design", "Translate ideas into spatial concepts and visual direction."],
  ["03", "Develop", "Refine materials, details, and technical solutions."],
  ["04", "Deliver", "Bring the final vision into a complete physical experience."],
];

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#hero-title">Skip to content</a>
      <Navbar />
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Architecture &amp; Interior Design Studio</p>
          <h1 id="hero-title">Spaces shaped<br />around the way<br /><em>you live.</em></h1>
          <div className="hero-intro">
            <p>Northvale creates thoughtful architecture and interiors shaped by light, material, and everyday living.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore Our Work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="mailto:hello@northvale.studio">Start a Project <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image src={heroImage} alt="Warm contemporary living space opening onto a tropical garden" fill priority sizes="(max-width: 760px) 100vw, 50vw" className="cover-image" />
          </div>
          <div className="hero-caption"><span>Living spaces, considered</span><span>Northvale Studio</span></div>
        </div>
      </section>

      <section className="statement page-shell" aria-label="Studio statement">
        <Reveal className="statement-inner">
          <p className="section-index">01 / Approach</p>
          <div>
            <h2>We create spaces that feel quiet,<br /><em>intentional, and timeless.</em></h2>
            <p className="statement-copy">Our work begins with the rituals of everyday life. We listen, observe, and shape each space through a careful balance of proportion, material, and natural light.</p>
          </div>
        </Reveal>
      </section>

      <section className="projects-section page-shell" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-index">02 / Portfolio</p>
          <h2 id="projects-title">Selected Projects</h2>
          <p>Homes and retreats designed around a quieter way of living.</p>
        </div>
        <div className="projects-layout">{projects.map((project) => <ProjectEntry key={project.name} project={project} />)}</div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="page-shell services-grid">
          <Reveal className="services-intro">
            <p className="section-index">03 / Expertise</p>
            <h2 id="services-title">What We Do</h2>
            <p>From first study to final detail, we create spaces with a coherent point of view and an enduring sense of place.</p>
          </Reveal>
          <Reveal className="service-list" delay={0.08}>
            {services.map(([number, title]) => (
              <div className="service-row" key={title}><span>{number}</span><h3>{title}</h3></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="about-section page-shell" id="studio" aria-labelledby="about-title">
        <div className="about-grid">
          <Reveal className="about-image-wrap">
            <Image src="https://images.unsplash.com/photo-1681684563211-7fb10143157a?auto=format&fit=crop&fm=jpg&q=86&w=1600" alt="Minimal architecture interior with a timber floor and soft daylight" fill sizes="(max-width: 767px) 100vw, 45vw" className="cover-image" />
          </Reveal>
          <Reveal className="about-content" delay={0.08}>
            <p className="section-index">04 / The Studio</p>
            <h2 id="about-title">About Northvale</h2>
            <p className="about-lead">Northvale is an independent architecture and interior studio creating spaces that balance function, material, light, and atmosphere.</p>
            <p className="about-detail">Based in Indonesia, we work across residential and hospitality projects with a small, collaborative team and a deeply personal design process.</p>
            <dl className="stats">
              <div><dt>24+</dt><dd>Completed Spaces</dd></div>
              <div><dt>8</dt><dd>Years of Practice</dd></div>
              <div><dt>4</dt><dd>Cities</dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="process-section page-shell" aria-labelledby="process-title">
        <div className="section-heading process-heading"><p className="section-index">05 / Method</p><h2 id="process-title">Our Process</h2></div>
        <div className="process-grid">
          {process.map(([number, title, description], index) => (
            <Reveal className="process-step" delay={index * 0.05} key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="testimonial-section" aria-label="Client testimonial">
        <Reveal className="testimonial page-shell">
          <p className="section-index">06 / Words from our clients</p>
          <blockquote>“Northvale understood how we wanted the space to feel before we could fully describe it.”</blockquote>
          <footer><span>Maya &amp; Adrian</span><span>Sora Residence</span></footer>
        </Reveal>
      </section>

      <section className="closing-section" id="contact" aria-labelledby="closing-title">
        <div className="page-shell closing-grid">
          <p className="section-index">07 / Begin a conversation</p>
          <Reveal className="closing-content">
            <h2 id="closing-title">Have a space<br /><em>worth reimagining?</em></h2>
            <div className="closing-actions">
              <a className="button button-light" href="mailto:hello@northvale.studio">Start a Project <span aria-hidden="true">↗</span></a>
              <a className="closing-email" href="mailto:hello@northvale.studio">hello@northvale.studio</a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer page-shell">
        <div className="footer-brand"><a className="wordmark" href="#top" aria-label="Northvale Studio home">Northvale<small>Studio</small></a><p>Architecture &amp; Interior Design</p></div>
        <nav aria-label="Footer navigation">{["Projects", "Studio", "Services", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
        <div className="footer-social"><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.pinterest.com" target="_blank" rel="noreferrer">Pinterest ↗</a></div>
        <p className="copyright">© 2026 Northvale Studio</p>
      </footer>
    </main>
  );
}
