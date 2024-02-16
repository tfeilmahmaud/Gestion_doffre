import { Injectable } from '@angular/core';
import { Recruiter } from '../Entity/recruiter';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobSeeker } from '../Entity/job-seeker';
import { Job } from '../Entity/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  tempObj = {
    email: "",
    password: ""
  };

  isLoggedIn() {
    if(localStorage.getItem("role")==="Recruiter" || localStorage.getItem("role")==="Job Seeker"){
      return true;
    }else{
      return false;
    }
  }

  public loginRecruiter(recruiter:Recruiter):Observable<any>{
    this.tempObj.email=recruiter.email
    this.tempObj.password=recruiter.password
    return this._http.post<any>("http://localhost:8080/loginRecruiter",this.tempObj);
  }

  public registerRecruiter(recruiter:Recruiter):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerRecruiter",recruiter);
  }

  public loginJobSeeker(jobSeeker:JobSeeker):Observable<any>{
    this.tempObj.email=jobSeeker.email
    this.tempObj.password=jobSeeker.password
    return this._http.post<any>("http://localhost:8080/loginJobSeeker",this.tempObj);
  }

  public registerJobSeeker(jobSeeker:JobSeeker):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerJobSeeker",jobSeeker);
  }

  public getAllJobs():Observable<any>{
    return this._http.get<any>("http://localhost:8080/");
  }

  public fetchJob(jobId:string):Observable<any>{
    return this._http.get<any>(`http://localhost:8080/fetchJob/${jobId}`);
  }

  public searchJob(text:string):Observable<any>{
    return this._http.get<any>(`http://localhost:8080/job/${text}`);
  }

  public fetchJobSeeker(jobSeekerId:string|null):Observable<any>{
    return this._http.get<any>(`http://localhost:8080/fetchJobSeeker/${jobSeekerId}`);
  }

  public applyForJob(jobSeekerId:string|null,jobId:string):Observable<any>{
    return this._http.get<any>(`http://localhost:8080/${jobSeekerId}/applyForJob/${jobId}`);
  }

  public fetchRecruiter(recruiterId:string|null):Observable<any>{
    return this._http.get<any>(`http://localhost:8080/fetchRecruiter/${recruiterId}`);
  }

  public addJob(recruiterId:string|null,job:Job):Observable<any>{
    return this._http.post<any>(`http://localhost:8080/addJob/${recruiterId}`,job);
  }

  public fetchAllSeeker():Observable<any>{
    return this._http.get<any>("http://localhost:8080/fetchAllSeeker");
  }

  public fetchAllRecruiter():Observable<any>{
    return this._http.get<any>("http://localhost:8080/fetchAllRecruiter");
  }

  public fetchAllLocation():Observable<any>{
    return this._http.get<any>("http://localhost:8080/fetchAllLocation");
  }

  constructor(private _http: HttpClient) { }

  
}
