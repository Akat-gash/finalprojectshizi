// tslint:disable-next-line:quotemark
import {Pipe, PipeTransform} from "@angular/core";

const JOB_TYPE = [
  'Full-Time',
  'Contract',
  'Part-Time',
  'Internship',
  'Commission',
  'Temporary',
  'Other'
];

@Pipe({
  name: 'job_type'
})
export class JobTypePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // tslint:disable-next-line:radix
    return JOB_TYPE[parseInt(value)];
  }
}
