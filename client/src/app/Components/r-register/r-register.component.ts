import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-r-register',
  templateUrl: './r-register.component.html',
  styleUrls: ['./r-register.component.css']
})
export class RRegisterComponent {
  myForm!: FormGroup;
  // companyName=""; 
  // position="";
   
  constructor(private route:Router,private service:JobService, private title: Title){

  }
  ngOnInit(): void {
    this.title.setTitle('Register');
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]),
      conformpassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]),
      companyName: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    })
  }
  registerRecruiter() {
    const tempRecruiter=this.myForm.value;
    this.service.registerRecruiter(tempRecruiter).subscribe(
      data=> {console.log(data);
        this.route.navigateByUrl("\l")},
      error=>console.log(error)
    )
  }
}
