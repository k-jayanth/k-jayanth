/** Scroll Journey Extension — fixed right-side autonomous-car route driven by document progress. */
import { useEffect, useRef, useState } from "react";

const stages = [
  { id: "top", code: "00", label: "Origin" },
  { id: "profile", code: "01", label: "Profile" },
  { id: "experience", code: "02", label: "Career" },
  { id: "projects", code: "03", label: "Projects" },
  { id: "capabilities", code: "04", label: "Control stack" },
  { id: "contact", code: "05", label: "Contact" },
];

const routePath = "M 68 4 C 35 10, 80 19, 52 27 S 26 42, 59 49 S 84 61, 48 69 S 22 82, 66 96";

export function JourneyWorld() {
  const pathRef = useRef<SVGPathElement>(null);
  const traceRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGGElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const distanceRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const path = pathRef.current;
    const trace = traceRef.current;
    const car = carRef.current;
    if (!path || !trace || !car) return;
    const length = path.getTotalLength();
    trace.style.strokeDasharray = `${length}`;
    let frame = 0;

    const render = () => {
      frame = 0;
      const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / total));
      const point = path.getPointAtLength(progress * length);
      const next = path.getPointAtLength(Math.min(length, progress * length + 0.7));
      const angle = (Math.atan2(next.y - point.y, next.x - point.x) * 180) / Math.PI + 90;
      car.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);
      trace.style.strokeDashoffset = `${length * (1 - progress)}`;
      if (progressRef.current) progressRef.current.textContent = `${Math.round(progress * 100)}%`;
      if (distanceRef.current) distanceRef.current.textContent = `${(progress * 8.4).toFixed(1)} km`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    stages.forEach(stage => {
      const element = document.getElementById(stage.id);
      if (element) observer.observe(element);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="journey-world" aria-label="Scroll journey progress">
      <div className="journey-hud">
        <p>MISSION / JK-01</p>
        <div><span ref={progressRef}>0%</span><small>ROUTE</small></div>
        <div><span ref={distanceRef}>0.0 km</span><small>ODOM</small></div>
      </div>
      <svg className="journey-map" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="journey-grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth=".12" opacity=".24" />
          </pattern>
          <filter id="car-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect width="100" height="100" fill="url(#journey-grid)" />
        <g className="journey-obstacles">
          <rect x="17" y="18" width="12" height="7" rx=".5" />
          <rect x="73" y="36" width="13" height="9" rx=".5" />
          <rect x="16" y="59" width="15" height="8" rx=".5" />
          <rect x="70" y="78" width="16" height="9" rx=".5" />
        </g>
        <path ref={pathRef} d={routePath} className="journey-route-plan" pathLength="1" />
        <path ref={traceRef} d={routePath} className="journey-route-trace" />
        {[{x:68,y:4},{x:52,y:27},{x:59,y:49},{x:48,y:69},{x:66,y:96}].map((point,index) => (
          <g className="map-waypoint" transform={`translate(${point.x} ${point.y})`} key={`${point.x}-${point.y}`}>
            <circle r="2.25"/><circle r=".65"/><text x="3.6" y="1">WP_{String(index + 1).padStart(2,"0")}</text>
          </g>
        ))}
        <g ref={carRef} className="autonomous-car" filter="url(#car-glow)">
          <ellipse cx="0" cy="1.8" rx="4.7" ry="2.3" className="car-shadow" />
          <rect x="-3.4" y="-5.6" width="6.8" height="11.2" rx="1.8" className="car-body" />
          <path d="M -2.6 -2.7 L 2.6 -2.7 L 2 1.7 L -2 1.7 Z" className="car-glass" />
          <rect x="-4.2" y="-3.5" width="1.1" height="3" rx=".3" className="car-wheel" />
          <rect x="3.1" y="-3.5" width="1.1" height="3" rx=".3" className="car-wheel" />
          <rect x="-4.2" y="1.1" width="1.1" height="3" rx=".3" className="car-wheel" />
          <rect x="3.1" y="1.1" width="1.1" height="3" rx=".3" className="car-wheel" />
          <circle cy="-.2" r="1.15" className="car-lidar" />
          <path d="M -2.1 -5.7 L -1 -5.7 M 1 -5.7 L 2.1 -5.7" className="car-lights" />
        </g>
      </svg>
      <nav className="journey-waypoints" aria-label="Journey checkpoints">
        {stages.map(stage => (
          <a key={stage.id} href={`#${stage.id}`} className={active === stage.id ? "active" : ""} aria-current={active === stage.id ? "location" : undefined}>
            <span>{stage.code}</span><i/><strong>{stage.label}</strong>
          </a>
        ))}
      </nav>
      <div className="system-channels" aria-label="Robotics focus channels">
        <div><span>A</span><p><strong>AUTONOMY</strong><small>NAV2 / VSLAM</small></p><i className="channel-live"/></div>
        <div><span>H</span><p><strong>HUMANOIDS</strong><small>MOVEIT / JOINTS</small></p><i className="joint-signal"><b/><b/><b/></i></div>
      </div>
      <p className="journey-instruction"><span>SCROLL</span> to drive the route</p>
    </aside>
  );
}
