/** Dual-Mode Robotics Atlas — compact editorial section marker with mission-code styling. */
type Props = { code:string; eyebrow:string; title:string; description?:string };
export function SectionHeading({code,eyebrow,title,description}:Props){return <div className="section-heading"><div className="section-code" aria-hidden="true">{code}</div><div><div className="heading-signal"><p className="eyebrow">{eyebrow}</p><span aria-hidden="true">JK / WP_{code}</span></div><h2>{title}</h2>{description&&<p className="section-description">{description}</p>}</div></div>}
