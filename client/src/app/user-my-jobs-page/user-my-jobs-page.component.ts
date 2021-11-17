import { Component, OnInit } from '@angular/core';
import {UserJobsService} from "../services/user_jobs.service";
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-my-jobs-page',
  templateUrl: './user-my-jobs-page.component.html',
  styleUrls: ['./user-my-jobs-page.component.css']
})
export class UserMyJobsPageComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  jobs: Array<Object> = [];
  faClock = faClock;
  faMapMarker = faMapMarker;
  constructor(private jobService: UserJobsService) {
    this.jobService.listJobs().subscribe(r => {
      // tslint:disable-next-line:no-string-literal
      this.jobs = r['payload']['jobs'];
      console.log(this.jobs);
    });
  }

  ngOnInit() {
  }

}
