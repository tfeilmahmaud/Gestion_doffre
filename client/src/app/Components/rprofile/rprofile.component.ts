import { Component } from '@angular/core';
import { Recruiter } from 'src/app/Entity/recruiter';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-rprofile',
  templateUrl: './rprofile.component.html',
  styleUrls: ['./rprofile.component.css']
})
export class RProfileComponent {
  
  recruiter!: Recruiter;
  constructor(private service : JobService){
    const tempRecruiterId = localStorage.getItem("recruiterId");
      this.service.fetchRecruiter(tempRecruiterId).subscribe(
        data=> {
          this.recruiter =data;
          console.log('rprofile recruiter',this.recruiter);
          
        },
          error=> console.log(error)
      )
    }
  
    passwordVisible: boolean = false;

    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
} 
