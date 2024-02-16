
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Job } from 'src/app/Entity/job';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {
  job!: Job;
  tempId:string="";
  constructor(private _route:Router,private service:JobService, private title: Title, ){
    this.title.setTitle('Job');
    this.tempId=this._route.routerState.snapshot.url.slice(11);
    this.service.fetchJob(this.tempId).subscribe(
      data=>{
        this.job=data;
        console.log(this.job);
      },
      error=>console.log(error)
    )
  }
routeBack() {
  this._route.navigate(['/']);
}
apply(){
  const tempJobSeekerId = localStorage.getItem("jobseekerId");
  this.service.applyForJob(tempJobSeekerId,this.job.id).subscribe(
    data=>console.log('Succesfully Applied',data),
    error=> console.log(error)
  )
  alert('Succesfully Applied');
}



}
