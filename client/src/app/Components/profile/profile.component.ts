import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private route: Router, private title: Title){}
  menuType: String='';
  ngOnInit(): void{
    this.title.setTitle('Profile');
      this.route.events.subscribe((val:any)=>{
          // console.warn(val.routerEvent.url);
          if(val.routerEvent.url.includes('rProfile')){
            this.menuType='rProfile'
            
          }else{
            this.menuType='jsProfile'
          }
      })
  }

}
