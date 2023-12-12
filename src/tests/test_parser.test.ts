import { Parser } from "../models/parser";
import { jobPosting1 } from "../tests/fixtures/job_posting_1";

const masterSkillList = [
  "React",
  "Typescript",
  "Jest",
  "aws",
  "frontend",
  "GitHub",
  "CI/CD",
  "Do Not Match",
];

describe("Parser", () => {
  it("should return the correct matches for this job posting", () => {
    const parser = new Parser(jobPosting1, masterSkillList);
    parser.parse();
    expect(parser.matches).toEqual(
      [
        "React",
        "Typescript",
        "Jest",
        "frontend",
        "GitHub",
        "CI/CD",
        "aws",
      ].sort(),
    );
  });
});
