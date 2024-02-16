import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent {
  constructor(private route:Router,private title: Title){

    this.title.setTitle('Home');
  }
  
  onDashboard(){
    this.route.navigateByUrl('/dashboard');
  }
  onAddJob(){
    this.route.navigateByUrl('/addjob');
  } 
  onPostedJob(){
    this.route.navigateByUrl('/jobList');
  }

}
