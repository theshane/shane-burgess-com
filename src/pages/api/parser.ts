import type { NextApiRequest, NextApiResponse } from "next";
import { Parser } from "src/models/parser";

type ResponseData = {
  matches: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const {jobPostingText = "", masterSkillList = []} = req.body as {jobPostingText: string, masterSkillList: string[]};
  const parser = new Parser(jobPostingText, masterSkillList);
  parser.parse();
  res.status(200).json({ matches: parser.matches });
}
