import { Job } from './job';

export class JobSeeker {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  skills!: string[];
  portfolioLink!: string;
  jobList!: Job[];

  // constructor(id: string,name: string,email: string,password: string,skills: string[],portfolioLink: string,jobList: Job[]){
  //     this.id=id;
  //     this.name=name;
  //     this.email=email;
  //     this.password=password;
  //     this.skills=skills;
  //     this.portfolioLink=portfolioLink;
  //     this.jobList=jobList;
  // }

  constructor() {}
}
