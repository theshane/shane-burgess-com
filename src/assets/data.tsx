import { Company, MasterSkillList, Project } from "src/types";

export const strata: Company = {
    company: "Strata Oncology",
    priority: 1,
    route: "/strata",
    description: "Strata Oncology is a precision oncology company dedicated to transforming cancer care by expanding patient access to precision medicine clinical trials and accelerating drug approvals.",
    summary: "At Strata Oncology I worked on the beginning and end phases of the genetic testing process. I worked on the ordering portal and report delivery during my time there",
    title: "Sr. Software Developer",
    projects: [{
        title: "Customer Portal Redesign",
        description: [
            "I co-lead the rebuilding of our customer facing portal. The finished product gave our customers the ability to create order configurations that we not possible on the fist version.",
            "The legacy backend Python code had less than 10% testing coverage but I built the new backend code to be able to be tested 100% by using patterns like dependency injection and thin controllers.",
            "This testing coverage allowed us to do a major refactor in the middle of the project much safer and quicker than we would have been able to without it.",
            "I also broke out operations in the backend to support us to be able to offload them on to microservices at a later time.",
            "This was crucially needed to speed up the ordering process but was not in scope to do at redesign time so I set us up for success later",
        ],
        skills: ["Python", "React", "TypeScript", "React Testing Library", "Docker", "AWS"]
    },
    {
        title: "Report Redesign",
        description: [
            "I lead the engineering effort to redesign our report that we sent out to oncologists. Which was essentially our product.",
            "I worked closely with our product team, pathologists, and bioinformatics team to make sure that we were able to meet the needs of our customers.",
            "I built a microservice infrastructure to support the data transformation and report generation which would allow us to scale up the number of reports we could generate and any given time.",
            "The transformation layer took raw data from different systems and transformed it into a format that could be used by the report generation layer. This allowed us to have a single source of truth for the data and allowed us to easily add new data sources to the report. This also allowed us to move quickly as it allowed us to prototype the report without having to wait for the data to be ready.",
            "The report had to be perfect and we had to change direction mid flight a few times and the microservice architecture allowed us to do that with no impact to the rest of the system.",
            "The project was completed on time and was considered a huge success for the company."
        ],
        skills: ["Python", "AWS EventBridge", "AWS Lambda", "Docker", "AWS S3", "CSS", "Microservices"]
    }]
}


export const gm: Company = {
    company: "General Motors",
    priority: 2,
    route: "/gm",
    description: "General Motors is the largest American automobile manufacturer and one of the world's largest automobile manufacturers.",
    summary: "At General Motors I worked on the MyBrand (MyChevrolet, MyBuick...) mobile app",
    title: "Sr. Mobile Software Engineer",
    projects: [{
        title: "MyBrand Mobile App Redesign",
        description: [
            "I worked on the core team which built the shared components that were used in the features of the app.",
            "The app was built in React Native and required a little bit of native development of the iOS and Android platforms.",
            "We used TDD and pair programming to build the components and had a high level of test coverage.",
        ],
        skills: ["React Native", "CSS", "API Integration", "TDD", "Pair Programming", "Jenkins"]
    },{
        title: "MyBrand Mobile App Map Replacement",
        description: [
            "I worked on the core team which built the shared components that were used in the features of the app.",
            "The app was built in React Native and required a little bit of native development of the iOS and Android platforms.",
            "Our team worked on a project to generalize the map api to support the ability to change map providers and not have to rewrite the code that used the map api.",
        ],
        skills: ["Map SDKs", "Android Development", "IOS Native Development"]
    }]
}


export const nokia: Company = {
    company: "Nokia",
    priority: 3,
    route: "/nokia",
    description: "Nokia Corporation is a Finnish multinational telecommunications, information technology, and consumer electronics company.",
    summary: "At Nokia I worked on Deepfield which was a network analytics platform that was used by some of the largest ISPs in the world.",
    title: "Software Engineer",
    projects: [{
        title: "Deepfield",
        description: [
            "I worked on Both the front end and back end of the Deepfield product.",
            "The UI was built in React and MaterialUI",
            "We used Python on the backend",
        ],
        skills: ["JavaScript", "ES6", "jQuery", "Less", "CSS", "HTML5", "ReactJS", "Python", "MySQL"]
    }]
}


export const fordCredit: Company = {
    company: "Ford (contract)",
    priority: 4,
    route: "/ford",
    description: "Ford Motor Company is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit.",
    summary: "At Ford I worked on a blockchain research team that built blockchain POCs for various Ford projects.",
    title: "Blockchain Engineer",
    projects: [{
        title: "Blockchain Hackathon",
        description: [
            "Built a fully operational blockchain application to teach others how to build blockchain applications.",
            "Built different blockchain environments for those who wanted to have more control over their projects.",
            "Setup fully deployable blockchain environment so participants could get up and running quickly.",
        ],
        skills: ["JavaScript", "Angular", "NodeJs", "Ethereum Smart Contracts", "HTML5", "CSS", "TDD", "Pair Programming", "CI/CD", "Jenkins", "Docker"]
    },{
        title: "Hyperledger Fabric POC",
        description: [
            "Frontend and backend development of a Hyperledger Fabric POC",
            "Built a fully functional blockchain application that was used to show the value of blockchain to the business.",
            "Did so with very little documentation and support available due to the new technology.",
        ],
        skills: ["Hyperledger", "JavaScript", "Angular", "NodeJs", "HTML5", "CSS", "TDD", "Pair Programming", "CI/CD", "Jenkins", "Docker"]
    }]
}



export const merit: Company = {
    company: "Merit Network",
    priority: 5,
    route: "/merit",
    description: "Merit Network, Inc., is a nonprofit member-governed organization providing high-performance computer networking and related services to educational, government, health care, and nonprofit organizations, primarily in Michigan.",
    summary: "At Merit I worked as the software engineering team lead. I was responsible for the day to day operations of the team and the software that we built.",
    title: "Lead Software Engineer",
    projects: [{
        title: "Merit Commons",
        description: [
            "I lead the development of a social network for the Merit community.",
            "We used Wayne State University's Academica as a base and built on top of it.",
            "The project was built in AngularJS and Perl (Mojolicious).",
            "I developed custom plugins for the project to support the needs of the community.",
        ],
        skills: ["JavaScript", "CSS", "Perl", "Mojolicious", "HTML5", "AngularJS", "MySQL", "MVC"]
    },{
        title: "NOC Ticketing System and Customer Notification System",
        description: [
            "This was my first large scale software project and ran a 24X7 NOC for over 7 years.",
            "Custom built a tool to allow our NOC to track and manage tickets and notifying our customers of outages.",
            "The project was built in Perl (Catalyst), Oracle Database, and MySQL.",
        ],
        skills: [ "JavaScript", "Jquery", "Perl", "Perl Catalyst", "CSS", "MVC"]
    }]
}


export const companies: Company[] = [strata, gm, nokia, fordCredit, merit].sort((a, b) => a.priority - b.priority);



export const masterSkillList = Array.from(new Set(companies
  .map((company: Company) => company.projects.map((project: Project) => project.skills))
  .flat()
  .flat()));

 export const getMasterSKillList: () =>  MasterSkillList = () => {
  /*
    This function will get all of the skills that I have used in my career and return them in a list with the companies that I have used them at.
  */
    const masterSkillList: MasterSkillList = {}

    companies.forEach((company) => {
        const companyName = company.company;
        company.projects.forEach((project) => {
            project.skills.forEach((skill) => {
                if(!masterSkillList[skill]) {
                    masterSkillList[skill] = {companies: [companyName]};
                }else{
                    masterSkillList[skill]!.companies.push(companyName)
                }
            })
        })
    })

    return masterSkillList
 };