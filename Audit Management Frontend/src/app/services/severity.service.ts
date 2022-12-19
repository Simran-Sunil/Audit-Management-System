import { Injectable } from '@angular/core';
import { Microservices } from './../models/Microservices';
import { SecurityService } from './security.service';
import { HttpClient } from '@angular/common/http';
import { ChecklistService } from './checklist.service';
import { Question } from '../checklist/question';
import { AuditResponse } from '../models/AuditResponse';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeverityService {
  constructor(
    private http:HttpClient,
    private checklistService:ChecklistService,
    private securityService : SecurityService,
    private datePipe: DatePipe)
   {}
  setAuditResponse(data: AuditResponse) {
    throw new Error('Method not implemented.');
  }

  public auditHealthCheck(){
    return this.http.get(Microservices["severity"]+"/health-check",{ responseType : 'text'});
  }

  public benchHealthCheck(){
    return this.http.get(Microservices["benchmark"]+"/health-check",{ responseType : 'text'});
  }

  public getResponses() : Question[]{
    return this.checklistService.sendResponse();
  }

  public executionStatus() : Observable<AuditResponse> {
    return this.http.post<AuditResponse>(Microservices["severity"]+"/projectexecutionstatus",
      {
        "projectName" : this.securityService.getProjectDetails().ProjectName,
        "managerName": this.securityService.getProjectDetails().Name,
        "auditDetail":{
          "auditType":this.checklistService.getAuditType(),
          "auditDate":this.datePipe.transform(new Date(),"yyyy-MM-dd"),
          "auditQuestions":this.getResponses()
        }
      }
    );
  }

}
