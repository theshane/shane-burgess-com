
import React from "react";

const placeHolder = "Paste the details of your job posting or the specific skills you are seeking here, and I will illustrate how my skills align with your requirements. If there's a skill you require that I currently lack, rest assured that I am a rapid learner and am eager to acquire new abilities."

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
        placeholder={placeHolder}
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
