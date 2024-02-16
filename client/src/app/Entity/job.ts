import { DatePipe, DecimalPipe } from "@angular/common";

export class Job {
    id:string;
    title:string;
    companyName:string;
    tags:string[];
    description:string;
    location:string;
    salary:DecimalPipe;
    skillsRequired:string[];
    applyLink:string;
    lastApplyDate:any;
    experience:Number;
    dateOfPosting:any;

    constructor(id: string,title: string,companyName: string,tags: string[],description: string,location: string,salary: DecimalPipe,skillsRequired: string[],applyLink: string,lastApplyDate: any,experience: Number,dateOfPosting: any){
        this.id=id;
        this.title=title;
        this.companyName=companyName;
        this.tags=tags;
        this.lastApplyDate=lastApplyDate;
        this.applyLink=applyLink;
        this.dateOfPosting=dateOfPosting;
        this.description=description;
        this.location=location;
        this.salary=salary;
        this.skillsRequired=skillsRequired;
        this.experience=experience;
    }
}
