import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:quotemark
import {UserJobsService} from "../services/user_jobs.service";
// tslint:disable-next-line:quotemark
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-job-info-page',
  templateUrl: './user-job-info-page.component.html',
  styleUrls: ['./user-job-info-page.component.css']
})
export class UserJobInfoPageComponent implements OnInit {
  job = {
    _id: '', title: '', company: '', location: '', salary_range: '', job_type: '', is_remote: '', visa_sponsor: '',
    description: '', requirement: '', can_publish: false, is_published: false,
  };
  jobId: string = null;
  error: string = null;
  constructor(private jobService: UserJobsService, private route: ActivatedRoute) {
    this.jobId = route.snapshot.params.job_id;
    this.jobService.getJob(route.snapshot.params.job_id).subscribe(
      res => {
        // tslint:disable-next-line:no-string-literal
        if (res['status'] === 'success') {
          // tslint:disable-next-line:no-string-literal
          this.job = res['payload'];
          // tslint:disable-next-line:no-string-literal
          this.job['can_publish'] = !!(this.job['description'] && this.job['requirement']);
        }
      }
    )
  }

  ngOnInit() {
  }

  onPublish() {
    this.jobService.publishJob(this.jobId).subscribe(r => {
      location.reload();
    });
  }

  onUnpublish() {
    this.jobService.unpublishJob(this.jobId).subscribe(r => {
      location.reload();
    });
  }

}
