import { Component } from '@angular/core';
import {
  faDashboard,
  faUser,
  faBars,
  faBuilding,
  faFileInvoice,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';
import { JobService } from 'src/app/Service/job.service';
@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  faDashboard=faDashboard
  faUser=faUser
  faBars=faBars
  faBuilding=faBuilding
  faFileInvoice=faFileInvoice
  faChartBar=faChartBar
  faContactBook=faContactBook
  faHand=faHand
  JobSeekers: Number = 0;
  Recruiters: Number = 0;
  Jobs: Number = 0;
  Applications: Number = 0;
  tempCount:Number=0;
  constructor(private service:JobService){
    this.service.fetchAllSeeker().subscribe(
      data => this.JobSeekers=data.length,
      error => console.log(error)
    )

    this.service.fetchAllRecruiter().subscribe(
      data => this.Recruiters=data.length,
      error => console.log(error)
    )

    this.service.getAllJobs().subscribe(
      data => {
        this.Jobs=data.length;
        
        
        data.forEach((i:any) => {
          this.tempCount += i.jobSeekerList.length;
        });
        this.Applications=this.tempCount;
      },
      error => console.log(error)
    )

    
  }
}
