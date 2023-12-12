import type { NextApiRequest, NextApiResponse } from "next";
import { Parser } from "src/models/parser";

type ResponseData = {
  matches: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const parser = new Parser(req.body.jobPostingText, req.body.masterSkillList);
  parser.parse();
  res.status(200).json({ matches: parser.matches });
}
