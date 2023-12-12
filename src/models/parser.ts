export class Parser {
  jobPostingText: string;
  mySkills: string[];
  matches: string[];
  constructor(jobPostingText: string, mySkills: string[]) {
    this.jobPostingText = jobPostingText;
    this.mySkills = mySkills;
    this.matches = [];
  }

  parse() {
    this.mySkills.forEach((skill) => {
      if (this.jobPostingText.toLowerCase().includes(skill.toLowerCase())) {
        this.matches.push(skill);
      }
    });

    this.matches.sort();
  }
}
