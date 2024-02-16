import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css'],
})
export class AddjobComponent {
  constructor(private router: Router, private service: JobService, private Title: Title) {}

  myForm!: FormGroup;

  ngOnInit(): void {
    this.Title.setTitle('Add Job');
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'
        ),
      ]),
      companyName: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'
        ),
      ]),
      salary: new FormControl([Validators.required]),
      experience: new FormControl([Validators.required]),
      location: new FormControl('', [Validators.required]),
      applyLink: new FormControl('', [Validators.required]),
      lastApplyDate: new FormControl(Date, [Validators.required]),
      tags: new FormArray([]),
      skillsRequired: new FormArray([]),
      dateOfPosting: new FormControl(new Date().toISOString().substring(0, 10)),
    });
  }
  addJob() {
    // console.log(this.myForm);
    const tempAddJob = this.myForm.value;
    const tempRecruiterId = localStorage.getItem('recruiterId');
    this.service.addJob(tempRecruiterId, tempAddJob).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    alert('Job Added Succesfully');
    this.router.navigateByUrl("rlogin");
  }

  displayVal1: string[] = [];
  displayVal2: string[] = [];
  display1: boolean =
    Array.isArray(this.displayVal1) && this.displayVal1.length > 0;
  display2: boolean =
    Array.isArray(this.displayVal2) && this.displayVal2.length > 0;
  getTag(val: any) {
    if (val.length > 0) {
      const control = new FormControl(val, [Validators.required]);
      (<FormArray>this.myForm.get('tags')).push(control);
      this.displayVal1.push(val);
      val = '';
      this.display1 =
        Array.isArray(this.displayVal1) && this.displayVal1.length > 0;
    }

    // console.warn(val);
    // console.log(this.displayVal)
    // this.displayVal = val;
  }
  deleteTag(index: any) {
    this.displayVal1.splice(index, 1);
    (<FormArray>this.myForm.get('tags')).removeAt(index);
    this.display1 =
      Array.isArray(this.displayVal1) && this.displayVal1.length > 0;
    console.log(index);
  }
  getSkill(val: any) {
    if (val.length > 0) {
      const control = new FormControl(val, [Validators.required]);
      (<FormArray>this.myForm.get('skillsRequired')).push(control);
      this.displayVal2.push(val);
      val = '';
      this.display2 =
        Array.isArray(this.displayVal2) && this.displayVal2.length > 0;
    }

    // console.warn(val);
    // console.log(this.displayVal)
    // this.displayVal = val;
  }
  deleteSkill(index: any) {
    this.displayVal2.splice(index, 1);
    (<FormArray>this.myForm.get('skillsRequired')).removeAt(index);
    this.display2 =
      Array.isArray(this.displayVal2) && this.displayVal2.length > 0;
    // console.log(index)
  }
}
