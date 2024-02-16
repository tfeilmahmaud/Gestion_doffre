import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JobSeeker } from 'src/app/Entity/job-seeker';
import { Recruiter } from 'src/app/Entity/recruiter';
import { JobService } from 'src/app/Service/job.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  role:any;
  jobseeker!: JobSeeker;
  recruiter!: Recruiter;
  constructor(private service: JobService, private title: Title){
    this.role=localStorage.getItem("role");
    // console.log(this.role);
    
    if(this.role=="Job Seeker"){

      const tempJobSeekerId = localStorage.getItem("jobseekerId");
      this.service.fetchJobSeeker(tempJobSeekerId).subscribe(
        data=> {
          this.jobseeker =data;
          console.log('joblist jobseeker',this.jobseeker);
          
        },
        error=> console.log(error)
        )
        this.title.setTitle('Applied Jobs');
      }
    if(this.role=="Recruiter"){

      const tempRecruiterId = localStorage.getItem("recruiterId");
      this.service.fetchRecruiter(tempRecruiterId).subscribe(
        data=> {
          this.recruiter =data;
          console.log('joblist recruiter',this.recruiter);
          
        },
          error=> console.log(error)
      )
      this.title.setTitle('Posted Jobs');
      }
    }
  }
