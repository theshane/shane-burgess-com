import type { Company, Project } from "../types";
import SkillList from "./SkillList";

export default function CompanyComponent({ company }: { company: Company }) {
  const skills = Array.from(
    new Set(company.projects.map((project: Project) => project.skills).flat()),
  );
  return (
    <div className="flex flex-col p-10">
      <section id="about">
        <h1 className="p-5 text-4xl">
          {company.company} - {company.title}
        </h1>
        <p className="p-5 text-lg">{company.description}</p>
        <p className="p-5 text-lg">{company.summary}</p>
        <p className="p-5 text-lg">
          <SkillList skillList={skills} skillsMatch={[]} />
        </p>
      </section>
      <section id="work-history">
        <h1 className="mt-6 text-4xl">Notable Projects</h1>
        {company.projects.map((project: Project) => (
          <section className="work-history-item p-5">
            <h2 className="mt-6 text-2xl">{project.title}</h2>
            {project.description.map((description: string) => (
              <p className="p-2 text-xl">{description}</p>
            ))}
            <h3 className="mt-6 text-xl">Skills Used</h3>
            <SkillList skillList={project.skills} skillsMatch={[]} />
          </section>
        ))}
      </section>
    </div>
  );
}
