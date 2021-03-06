// tslint:disable-next-line:quotemark
import {Injectable} from "@angular/core";
// tslint:disable-next-line:quotemark
import {HttpClient} from "@angular/common/http";
// tslint:disable-next-line:quotemark
import {Observable} from "rxjs";
// tslint:disable-next-line:quotemark
import {environment as env} from "../../environments/environment";

const API_URL = `${env.api.basepath}/api/u/jobs`;

@Injectable({
  providedIn: 'root'
})
export class UserJobsService {
  constructor(private http: HttpClient) {}

  addJob({ title, company, location, is_remote, visa_sponsor, job_type, salary_range }) : Observable<Object> {
    return this.http.post(`${API_URL}`, { title, company, location, is_remote, visa_sponsor, job_type, salary_range } );
  }

  // tslint:disable-next-line:ban-types
  listJobs() : Observable<Object> {
    return this.http.get(`${API_URL}`);
  }

  getJob(jobId: string) {
    return this.http.get(`${API_URL}/${jobId}`);
  }

  // tslint:disable-next-line:ban-types
  // tslint:disable-next-line:max-line-length
  updateJob(jobId: string, {title, company, location, is_remote, visa_sponsor, job_type, salary_range, description, requirement }) : Observable<Object> {
    // tslint:disable-next-line:max-line-length
    return this.http.patch(`${API_URL}/${jobId}`, {title, company, location, is_remote, visa_sponsor, job_type, salary_range, description, requirement });
  }

  publishJob(jobId: string) {
    return this.http.patch(`${API_URL}/${jobId}/publish`, {});
  }

  unpublishJob(jobId: string) {
    return this.http.patch(`${API_URL}/${jobId}/unpublish`, {});
  }

  getApplications(jobId: string) {
    return this.http.get(`${API_URL}/${jobId}/applications`);
  }
}
