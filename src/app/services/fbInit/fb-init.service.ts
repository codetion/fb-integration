import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FbInitService {

  constructor(
    private fb: FacebookService
  ) { }

  fbInit(): Promise<any> {
    const initParams: InitParams = {
      appId: environment.FB_APP_ID,
      cookie: true,
      xfbml: true,
      version: 'v13.0'
    };
    return this.fb.init(initParams)
  }

  

}
