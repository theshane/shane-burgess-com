import axios from "axios";
import { masterSkillList } from "src/assets/data";

export const postJobText = async (
  jobPostingText: string,
): Promise<{ matches: string[] }> => {
  const { data } = await axios.post("/api/parser", {
    jobPostingText,
    masterSkillList,
  });
  return data;
};
