import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:quotemark
import {UserJobsService} from "../services/user_jobs.service";
// tslint:disable-next-line:quotemark
import {ActivatedRoute} from "@angular/router";
// tslint:disable-next-line:quotemark
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-user-job-apps-page',
  templateUrl: './user-job-apps-page.component.html',
  styleUrls: ['./user-job-apps-page.component.css']
})
export class UserJobAppsPageComponent implements OnInit {
  jobId;
  job = {};
  applications: [];
  assetsUrl = `${environment.api.basepath}`;
  constructor(private jobService: UserJobsService, private route: ActivatedRoute) {
    this.jobId = this.route.snapshot.params.job_id;
    this.job = this.jobService.getJob(this.jobId).subscribe(r => {
      // tslint:disable-next-line:no-string-literal
      this.job = r['payload'];
    });
    this.jobService.getApplications(this.jobId).subscribe(r => {
      // tslint:disable-next-line:no-string-literal
      this.applications = r['payload']['applications'];
    });
  }

  ngOnInit() {
  }

}
