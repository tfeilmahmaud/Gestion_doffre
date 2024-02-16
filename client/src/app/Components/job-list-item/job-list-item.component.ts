import { Component, Input } from '@angular/core';
import { Job } from 'src/app/Entity/job';
import { JobSeeker } from 'src/app/Entity/job-seeker';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']
})

export class JobListItemComponent {
  @Input() jobList: Job[] = [];
  // ngOnDelete(){
  //   console.log(this.jobList);
  // }
  role=localStorage.getItem("role");
  
}
