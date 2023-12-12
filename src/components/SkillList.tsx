import React from "react";

interface SkillListProps {
  skillList: string[];
  skillsMatch: string[];
  onHoverSkill?: (skill: string) => void;
}

const SkillList: React.FC<SkillListProps> = ({
  skillList,
  skillsMatch = [],
  onHoverSkill = (skill: string) => undefined,
}) => {
  return (
    <>
      {skillList
        .sort()
        .map((skill) =>
          skillsMatch.includes(skill) ? (
            <span key={skill} className="mr-1 mt-2 inline-block rounded-full bg-sky-600 px-2 py-1 text-lg font-semibold uppercase uppercase last:mr-0" onMouseOver={() => onHoverSkill(skill)}>
              {skill}
            </span>
          ) : (
            <span key={skill} className="mr-1 mt-2 inline-block rounded-full bg-sky-900 px-2 py-1 text-sm font-semibold uppercase uppercase last:mr-0" onMouseOver={() => onHoverSkill(skill)}>
              {skill}
            </span>
          ),
        )}
    </>
  );
};

export default SkillList;
