/** Scroll Journey Extension — one continuous document route with a persistent autonomous-car world. */
import { siteConfig } from "@/content/site";
import { JourneyWorld } from "@/components/JourneyWorld";
import { SiteHeader } from "@/components/SiteHeader";
import { RoboticsHero } from "@/components/RoboticsHero";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return <div className="portfolio-shell">
    <SiteHeader />
    <JourneyWorld />
    <main className="journey-page">
      <RoboticsHero />
      <section className="section-shell profile-section journey-checkpoint" id="profile" data-journey="PROFILE">
        <SectionHeading code="01" eyebrow="PROFILE" title="Robotics engineering from perception to motion." description="A field-tested path through autonomous navigation, motion planning, applied AI, embedded control, and human-centred robotic systems." />
        <div className="profile-layout">
          <div className="profile-statement"><p>{siteConfig.summary}</p><p>My strongest interests sit where <strong>AI meets physical intelligence</strong>: ROS 2 architectures, Nav2 autonomy, MoveIt motion planning, humanoids, perception, and reliable robot behaviour outside the lab.</p></div>
          <div className="profile-facts">
            <div><span>BASE</span><strong>{siteConfig.location}</strong></div>
            <div><span>FOCUS</span><strong>AI · ROS 2 · Humanoids</strong></div>
            <div><span>CURRENT</span><strong>{siteConfig.availability}</strong></div>
            <div><span>STATUS</span><strong>Open to robotics missions</strong></div>
          </div>
        </div>
      </section>
      <ExperienceTimeline />
      <ProjectGrid />
      <SkillsMatrix />
    </main>
    <SiteFooter />
  </div>;
}
