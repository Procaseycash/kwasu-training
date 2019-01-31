import {AfterViewInit, Component, OnInit} from '@angular/core';
import index from "@angular/cli/lib/cli";
import {StudentService} from "../../services/student.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {GoogleApiService} from "../../services/google-api.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [StudentService]
})
export class ListingComponent implements OnInit, AfterViewInit {
  public students: Array<object> = [];
  public studentInfo;
  public userName = 'SilentWolf';
  public counter = 0;
  public googleIndex: SafeHtml  = null;

  constructor(
    private studentService: StudentService,
    private dom: DomSanitizer,
    private googleApiService: GoogleApiService) {
  }

  payNow(studentInfo) {
    this.studentInfo = studentInfo;
    alert(`My name is ${this.studentInfo.name}, I'm about to pay for my school fees`);
    this.studentInfo.feeStatus = 'PAID';
  }

  getAdder(value) {
    if (this.counter < 0 || (this.counter === 0 && value < 0)) return this.counter = 0;
    this.counter = this.counter + value;
  }

  private getStudents() {
    this.students = this.studentService.getStudents();
  }

  private getWebsiteIndex() {
    this.googleApiService.getGoogleWebsiteIndex().subscribe(
      (res) => {
        this.googleIndex = this.dom.bypassSecurityTrustHtml(res);
        console.log('response=', res);
      },
      (err) => {
        console.log('Error=', err);
      },
      () => {
        console.log('State Completed');
      }
    );
  }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.getWebsiteIndex();
    this.getStudents();
  }

}
