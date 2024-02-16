import { Component } from '@angular/core';
import { JobSeeker } from 'src/app/Entity/job-seeker';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-jsprofile',
  templateUrl: './jsprofile.component.html',
  styleUrls: ['./jsprofile.component.css']
})
export class JSProfileComponent {

jobseeker!: JobSeeker;
constructor(private service: JobService){
  const tempJobSeekerId = localStorage.getItem("jobseekerId");
      this.service.fetchJobSeeker(tempJobSeekerId).subscribe(
        data=> {
          this.jobseeker =data;
          console.log('jsprofile jobseeker',this.jobseeker);
          
        },
          error=> console.log(error)
      )
}
passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

}
