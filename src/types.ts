export interface Project {
  title: string;
  description: string[];
  skills: string[];
}

export interface Company {
  company: string;
  priority: number;
  description: string;
  summary: string;
  title: string;
  projects: Project[];
  route: string;
}


export interface MasterSkill{
  companies: string[];
}

export type MasterSkillList = Record<string, MasterSkill>;