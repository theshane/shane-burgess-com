
import React from "react";

const Matcher = ({
  postJobTextHandler,
  clearSkillsMatch,
}: {
  postJobTextHandler: (jobPostingText: string) => void;
  clearSkillsMatch: () => void;
}) => {
  const [jobPostingText, setJobPostingText] = React.useState<string>("");

  const clearJobPostingText = () => {
    setJobPostingText("");
  };

  return (
    <div className="mt-10 mt-auto text-center">
      <textarea
        className="mt-2 h-40 w-full rounded border border-gray-400 p-2 text-black"
        placeholder="Paste your job posting text or skills that you are looking for here to see how my skills match up. If I am missing a skill that you are looking for I am a quick learner and would love to learn it."
        value={jobPostingText}
        onChange={(e) => setJobPostingText(e.target.value)}
      ></textarea>
      <button
        data-testid="analyze-button"
        onClick={() => {
          postJobTextHandler(jobPostingText);
        }}
        className="mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Analyze
      </button>
      <button
        onClick={() => {
          clearJobPostingText();
          clearSkillsMatch();
        }}
        className="ml-2 mt-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
      >
        Clear
      </button>
    </div>
  );
};

export default Matcher;
