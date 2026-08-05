/** Scroll Journey Extension — origin checkpoint with configurable robotics visual channel. */
import { ArrowDownRight, Github, Mail } from "lucide-react";
import { useState } from "react";
import { HeroMode, heroModes, siteConfig } from "@/content/site";

export function RoboticsHero() {
  const [mode, setMode] = useState<HeroMode>(siteConfig.defaultHeroMode);
  const content = heroModes[mode];
  return (
    <section className={`robotics-hero mode-${mode} journey-checkpoint`} id="top" data-journey="ORIGIN">
      <img className="hero-image" src={siteConfig.heroImages[mode]} alt={mode === "autonomy" ? "Autonomous forklift navigating through an industrial environment" : "Engineered exoskeleton in a robotics laboratory"} />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="operator-card">
          <img src={siteConfig.profileImage} alt="Jayanth Kandregula" />
          <div>
            {/* <p className="eyebrow">OPERATOR · JK-01</p> */}
          <strong>{siteConfig.name}</strong><span>{siteConfig.location}</span><small><i/> SYSTEMS ONLINE</small></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <p className="hero-role">{siteConfig.title}</p>
          <div className="hero-channels" aria-label="Primary robotics interests"><span><i/> AUTONOMY / NAV2</span><span><i/> HUMANOIDS / MOVEIT</span></div>
          <h1>Engineering intelligence into motion.</h1>
          <p className="hero-summary">{content.description}</p>
          <div className="hero-cta-row">
            <a className="primary-cta" href="#profile">Start the journey <ArrowDownRight size={18}/></a>
            <a className="social-cta" href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18}/></a>
            <a className="social-cta" href={`mailto:${siteConfig.email}`} aria-label="Email Jayanth"><Mail size={18}/></a>
          </div>
        </div>
        <div className="mode-console">
          <p>MISSION LENS</p>
          <div className="mode-switch" role="group" aria-label="Robotics scene">
            {(Object.keys(heroModes) as HeroMode[]).map(value => <button key={value} className={mode === value ? "active" : ""} onClick={() => setMode(value)} aria-pressed={mode === value}><span>{value === "autonomy" ? "A" : "H"}</span>{heroModes[value].label}</button>)}
          </div>
          <div className="telemetry-list">{content.telemetry.map(item => <span key={item}><i/>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
