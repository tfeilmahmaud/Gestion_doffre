import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Job } from 'src/app/Entity/job';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn:any;
  jobList: Job[] = [];
  constructor(private _router:Router,private _jobService:JobService ,private title: Title){
    this.isLoggedIn=_jobService.isLoggedIn();
    console.log("from home",this.isLoggedIn);
    this._jobService.getAllJobs().subscribe(
      data=>{
        data.forEach((i: Job) => {
          this.jobList.push(i);
        });
        console.log(this.jobList)
      },
      error=>console.log(error)
    ) 
    if(this.isLoggedIn){
      this.title.setTitle('Home');

    }
  }

  searchText: string = '';
  onSearch(searchvalue: string) {
    this.searchText = searchvalue;
    // console.log('from home :',this.searchText);
  }

}
