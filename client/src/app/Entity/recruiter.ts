import { Job } from './job';

export class Recruiter {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  position!: string;
  companyName!: string;
  jobList!: Job[];

  // constructor(id: string,name: string,email: string,password: string,position: string,companyName: string,jobList: Job[]){
  //     this.id=id;
  //     this.name=name;
  //     this.email=email;
  //     this.password=password;
  //     this.companyName=companyName;
  //     this.position=position;
  //     this.jobList=jobList;
  // }

  constructor() {}
}
