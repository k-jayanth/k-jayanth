/** Dual-Mode Robotics Atlas — every JSON file in these folders is loaded and sorted automatically. */
export type Experience = { order:number; company:string; role:string; location:string; period:string; project:string; summary:string; highlights:string[]; technologies:string[]; mode:"autonomy"|"exoskeleton"|"systems" };
export type Project = { order:number; title:string; type:string; period:string; summary:string; contribution:string; technologies:string[]; image?:string; link?:string; featured?:boolean; mode?:"autonomy"|"exoskeleton"|"systems" };
const experienceModules = import.meta.glob("./experiences/*.json", { eager:true, import:"default" }) as Record<string, Experience>;
const projectModules = import.meta.glob("./projects/*.json", { eager:true, import:"default" }) as Record<string, Project>;
export const experiences = Object.values(experienceModules).sort((a,b) => a.order-b.order);
export const projects = Object.values(projectModules).sort((a,b) => a.order-b.order);
