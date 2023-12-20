import Layout from "src/components/Layout";
import { postJobText } from "src/api/api";
import React from "react";
import { masterSkillList, getMasterSKillList, companies } from "src/assets/data";
import SkillList from "src/components/SkillList";

export default function Home() {
  const [skillsMatch, setSkillsMatch] = React.useState<string[]>([]);
  const [hoverSkill, setHoverSkill] = React.useState<string>("");
  const postJobTextHandler = async (jobPostingText: string) => {
    const data = await postJobText(jobPostingText);
    setSkillsMatch(data.matches);
  };


  const expandedMasterSkillList = getMasterSKillList();


  const getCompaniesBySelectedSkill = (skill: string) => {
    return new Set(expandedMasterSkillList[skill]!.companies);
  };

  let companiesToHighlight = new Set<string>();

  if (hoverSkill !== "") {
    companiesToHighlight = getCompaniesBySelectedSkill(hoverSkill);
  }

  return (
    <Layout
      postJobTextHandler={postJobTextHandler}
      clearSkillsMatch={() => setSkillsMatch([])}
    >
      <div className="flex flex-col p-10">
        <section id="about">
          <h1 className="p-5 text-4xl">About Me</h1>
          <p className="p-5 text-xl">
            Greetings! I'm Shane Burgess, a resident of Monroe, MI, happily living with my wife and two kids. With over 10 years of experience as a Senior Software Engineer, I've contributed my skills across various industries, showcasing versatility in technologies spanning the web stack.
          </p>

          <p className="p-5 text-xl">
            As an adept software developer, I bring team lead experience to the table, having crafted production code in Angular and React for front-end development, and utilized NodeJS, Python, and Perl for backend solutions. My proficiency extends to mobile app development with React Native.
          </p>

          <p className="p-5 text-xl">
            This site serves as a creative showcase of my skills and experience—a fun endeavor that, despite its design quirks (feel free to chuckle!), was meticulously crafted using Tailwind, React, and NextJS.
          </p>
        </section>

        <section id="skills" className="p-5">
          <h1 className="mb-5 text-4xl">Skills</h1>
          <p>Hover over a skill to see where I have used it</p>
          <SkillList skillList={masterSkillList} skillsMatch={skillsMatch} onHoverSkill={setHoverSkill} />
        </section>
        <section id="work-history">
          <h1 className="p-5 text-4xl">Work History</h1>
          <ul className="p-5 text-lg list-disc">
            {companies.map((company) => (
              companiesToHighlight.has(company.company) ?
                <li className="p-2 text-4xl" key={company.company}>
                  <a href={company.route}>{company.company} - {company.title}</a>
                </li> : <li className="p-2 text-xl" key={company.company}>
                  <a href={company.route}>{company.company} - {company.title}</a>
                </li>))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
