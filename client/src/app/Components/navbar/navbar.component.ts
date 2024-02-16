import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JobSeeker } from 'src/app/Entity/job-seeker';
import { Recruiter } from 'src/app/Entity/recruiter';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  role: any;
  // @Input() isLoggedIn: any;
  menuType: String = 'default';
  isLoggedIn: boolean = false;
  recruiter!: Recruiter;
  jobseeker!: JobSeeker;
  rolecheck: boolean = false;
  constructor(private route: Router, private _jobService: JobService) {
    this.isLoggedIn = _jobService.isLoggedIn();
    // console.log("from navbar", this.isLoggedIn);
    this.role = localStorage.getItem('role');
  }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.routerEvent.url) {
        // console.warn(val.routerEvent.url);

        //  console.warn(val.routerEvent.url);
        if (val.routerEvent.url.includes('rlogin')) {
          this.menuType = 'rlogin';
        } else if (val.routerEvent.url.includes('rProfile')) {
          this.menuType = 'rprofile';
        } else if (val.routerEvent.url.includes('jobList')) {
          this.menuType = 'joblist';
        } else if (val.routerEvent.url.includes('addjob')) {
          this.menuType = 'addjob';
        } else if (val.routerEvent.url.includes('addjob')) {
          this.menuType = 'addjob';
        } else if (val.routerEvent.url.includes('jsProfile')) {
          this.menuType = 'jsprofile';
        } else if (val.routerEvent.url.includes('dashboard')) {
          this.menuType = 'dashboard';
        } else {
          this.menuType = 'home';
        }
      }
    });
  }
  // this.isLoggedIn=this._jobService.isLoggedIn();

  onLogOut() {
    const confirmation = window.confirm('Are you sure you want to log out?');

    if (confirmation) {
      this.isLoggedIn = false;
      localStorage.clear();
      this.route.navigate(['/']);

      // Perform the logout logic here
      console.log('User confirmed logout.');
      // Your logout logic, e.g., call a logout service or clear session
    } else {
      console.log('User cancelled logout.');
    }
  }

  searchText: string = '';
  @Output()
  searchEvent = new EventEmitter<string>();
  onsearch() {
    this.searchEvent.emit(this.searchText);
  }

  onLogin() {
    this.route.navigateByUrl('/l');
  }
  onHome() {
    this.route.navigateByUrl('');
  }
  onRHome() {
    this.route.navigateByUrl('/rlogin');
  }
  onDashboard() {
    this.route.navigateByUrl('/dashboard');
  }
  onJsProfile() {
    this.route.navigateByUrl('/jsProfile');
  }
  onAppliedJob() {
    this.route.navigateByUrl('/jobList');
  }
  onRProfile() {
    this.route.navigateByUrl('/rProfile');
  }

  onAddJob() {
    this.route.navigateByUrl('/addjob');
  }
  onPostedJob() {
    this.route.navigateByUrl('/jobList');
  }
}
