import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:quotemark
import {UserJobsService} from "../services/user_jobs.service";
// tslint:disable-next-line:quotemark
import {JobsService} from "../services/jobs.service";
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';

// Display mode depending on user selection on sidebar menu.
// currentMode:
//    0 : Latest (default)
//    1 : VISA Sponsor
//    2 : Remote
//    3 : High Salaries

@Component({
  selector: 'app-job-listing-page',
  templateUrl: './job-listing-page.component.html',
  styleUrls: ['./job-listing-page.component.css']
})
export class JobListingPageComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  currentMode: number = 0;
  // tslint:disable-next-line:ban-types
  jobs: Array<Object> = [];
  faClock = faClock;
  faMapMarker = faMapMarker;

  constructor(private jobService: JobsService) {
    this.loadLatestJobs();
  }

  ngOnInit() {
  }

  loadLatestJobs() {
    this.currentMode = 0;
    this.jobService.getLatestJobs().subscribe(r => {
      // tslint:disable-next-line:no-string-literal
      this.jobs = r['payload']['jobs'];
      console.log(r);
    });
  }

  loadVisaSponsorJobs() {
    this.currentMode = 1;
    this.jobService.getVisaSponsorJobs().subscribe(r => {
      // tslint:disable-next-line:no-string-literal
      this.jobs = r['payload']['jobs'];
      console.log(r);
    });
  }

  loadRemoteJobs() {
    this.currentMode = 2;
    this.jobService.getRemoteJobs().subscribe(r => {
      // tslint:disable-next-line:no-string-literal
      this.jobs = r['payload']['jobs'];
      console.log(r);
    });
  }

  loadHighSalariesJobs() {
    this.currentMode = 3;
    this.jobService.getHighSalariesJobs().subscribe(r => {
      // tslint:disable-next-line:no-string-literal
      this.jobs = r['payload']['jobs'];
      console.log(r);
    });
  }

}
