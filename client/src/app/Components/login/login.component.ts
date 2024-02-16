import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JobSeeker } from 'src/app/Entity/job-seeker';
import { Recruiter } from 'src/app/Entity/recruiter';
import { JobService } from 'src/app/Service/job.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm!: FormGroup;
  email:string="";
  password:string="";
  role:any;
  recruiter= new Recruiter();
  jobSeeker = new JobSeeker();

  constructor(private router:Router,private service:JobService, private title: Title){}
  ngOnInit(): void {
    this.title.setTitle('Login');
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('',[Validators.required])
    })
  }
  OnLogIn() {
    localStorage.setItem("role",this.role);
  console.log(this.email,this.password,this.role);
    if (this.role=="Recruiter" && this.email!= '' && this.password !='') {
      this.recruiter.email=this.email;
      this.recruiter.password=this.password;
      
      this.service.loginRecruiter(this.recruiter).subscribe(
        data=>{
          // console.log(data);
          localStorage.setItem("recruiterId",data.id);
          this.router.navigateByUrl('/rlogin');
        },
        error =>{
          console.log(error);
          alert('Wrong Password');
        }
      )
      
    } 
    if (this.role=="Job Seeker" && this.email!= '' && this.password !=''){
      
      this.jobSeeker.email=this.email;
      this.jobSeeker.password=this.password;
      console.log(this.jobSeeker)
      this.service.loginJobSeeker(this.jobSeeker).subscribe(
        data=>{
          console.log(data);
          localStorage.setItem("jobseekerId",data.id);
          this.router.navigateByUrl('/');
        },
        error =>{
          console.log(error);
          alert('Wrong Password');
        }
      )
    }
  }

}
