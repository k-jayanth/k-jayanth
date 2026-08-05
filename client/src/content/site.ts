/** Dual-Mode Robotics Atlas — edit identity, links, defaults, skills, and hero assets here. */
export type HeroMode = "autonomy" | "exoskeleton";

import logo from "/assets/VbQvyTQzyLLSsZRn.webp";
import profile from "/assets/HSdaglyWnHNitAeM.webp";
import resume from "/assets/Jayanth_resume_new.pdf";
import forklift from "/assets/DqDamAWMDCBjpuHI.webp";
import exoskelton from "/assets/LeieOPCIZOUympaA.webp";

export const siteConfig = {
  name: "Jayanth Kandregula", title: "Robotics Engineer", location: "Visakhapatnam, Andhra Pradesh, India",
  email: "jayanthkandregula@gmail.com", github: "https://github.com/k-jayanth",
  resume: resume, profileImage: profile,
  logo: logo, defaultHeroMode: "autonomy" as HeroMode,
  heroImages: { autonomy: forklift, exoskeleton: exoskelton },
  summary: "I am a Robotics Engineer focused on AI-enabled physical systems—from ROS 2 autonomy with Nav2 and RTAB-Map to MoveIt manipulation, humanoids, exoskeletons, and medical robotics.",
  availability: "Senior Software Engineer L1 · Techcedence",
};

export const heroModes = {
  autonomy: { label: "Autonomous systems", eyebrow: "AI · ROS 2 · NAV2 · RTAB-MAP", headline: "Robots that understand the route.", description: "I build production-minded robot autonomy across AI, ROS 2, Nav2, visual SLAM, behaviour orchestration, diagnostics, tuning, and field validation.", telemetry: ["/map locked", "/plan active", "/odom nominal"] },
  exoskeleton: { label: "Motion & humanoids", eyebrow: "MOVEIT · HUMANOIDS · CONTROL", headline: "Intelligence that becomes motion.", description: "My interests extend from MoveIt motion planning and humanoid robotics to exoskeletons, sensors, actuators, kinematics, embedded communication, and operator interfaces.", telemetry: ["joint graph ready", "motion plan valid", "human loop active"] },
};

export const skillGroups = [
  { code: "01", title: "AI & robot intelligence", skills: ["Applied AI / ML", "LLM workflows", "Computer Vision", "Python", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "Data Analysis"] },
  { code: "02", title: "ROS 2 & autonomy", skills: ["ROS 1 / ROS 2", "Nav2", "RTAB-Map", "SLAM / VSLAM", "Behavior Trees", "Path Planning", "Gazebo", "RViz"] },
  { code: "03", title: "MoveIt & humanoids", skills: ["MoveIt / MoveIt 2", "Motion Planning", "Kinematics", "Manipulation", "Exoskeletons", "Joint Control", "Human-in-the-loop"] },
  { code: "04", title: "Embedded & software", skills: ["C / C++", "STM32", "NVIDIA Orin/ Thor", "EtherCAT", "I²C / SPI / UART", "Qt", "Git", "pandas / NumPy"] },
];

export const education = [
  { degree: "M.Tech — Artificial Intelligence & Robotics", institution: "Andhra University, Visakhapatnam", year: "2018" },
  { degree: "Diploma in French", institution: "Andhra University, Visakhapatnam", year: "2018" },
  { degree: "B.Tech — Computer Science & Engineering", institution: "MVGR College / JNTUK, Vizianagaram", year: "2014" },
];

export const publication = { title: "Aspect-Based Evaluation of Social Anxiety Using Natural Language Processing Techniques", venue: "IJIRSET", year: "2018", link: "https://github.com/k-jayanth/Aspect-Based-Evaluation-of-social-anxiety-using-Natural-Language-Processing-Techniques" };
