import { state } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/Entity/job';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent {
  @Input() job!: Job;
  @Input() searchText: string = '';

  constructor(private _route: Router, private _service: JobService) {}
  onApplyNow() {
    if (this._service.isLoggedIn()) {
      this._route.navigate(['/jobDetail', this.job.id]);
    } else {
      this._route.navigate(['/l']);
    }
  }
  ngOnChanges() {
    console.log('Received Search Text:', this.searchText);
  }
}
