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

  if(hoverSkill !== "") {
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
            My Name is Shane Burgess and I live in Monroe, MI with my wife and 2
            kids. I am a Senior Software Engineer with 10+ years of experience.
            I have worked in a variety of industries and have experience with a
            variety of technologies across the web stack.
          </p>
          <p className="p-5 text-xl">
            I am an experienced software developer with team lead experience,
            who has written production code in both Angular and React on the
            front end and NodeJS, Python, and Perl on the backend. I have also
            worked on Mobile apps using React Native.
          </p>

          <p className="p-5 text-xl">
            This site is a fun way to display my skills and experience. Please don't make fun of the design too much :). It was built using Tailwind, React, and NextJS.
          </p>
        </section>

        <section id="skills" className="p-5">
          <h1 className="mb-5 text-4xl">Skills</h1>
          <p>Hover over a skill to see where I have used it</p>
          <SkillList skillList={masterSkillList} skillsMatch={skillsMatch} onHoverSkill={setHoverSkill}/>
        </section>
        <section id="work-history">
          <h1 className="p-5 text-4xl">Work History</h1>
          <ul className="p-5 text-lg list-disc">
            {companies.map((company) => (
              companiesToHighlight.has(company.company) ?
            <li className="p-2 text-4xl" key={company.company}>
              <a href={company.route}>{company.company} - {company.title}</a>
            </li> :    <li className="p-2 text-xl"  key={company.company}>
              <a href={company.route}>{company.company} - {company.title}</a>
            </li>))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
