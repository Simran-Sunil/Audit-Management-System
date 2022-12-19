import { Injectable } from '@angular/core';
import { SecurityToken } from '.././models/SecurityToken';
import { AuthenticationRequest } from '.././models/AuthenticationRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationMsclientService {

  constructor() { }

  getAuthToken(authRequest : AuthenticationRequest){
    // make rest call to /authenticate with authRequest as Request-body
  }

  getProjectDetails(securityToken : SecurityToken){
    let token : string = securityToken.jwt;
    // make rest call to /validate with token as Request-header
  }
}
