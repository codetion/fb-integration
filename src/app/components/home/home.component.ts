import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, LoginStatus } from 'ngx-facebook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public postContent: string = '';
  fbLogin: LoginStatus;
  fbPages: Array<any> = [];
  selectedIndex: number = 0;
  constructor(
    public facebookService: FacebookService,
    public http: HttpClient,
    public router: Router,

  ) { }

  async ngOnInit() {
    this.fbLogin = await this.facebookService.getLoginStatus();
    let data = await this.facebookService.api(`${this.fbLogin.authResponse.userID}/accounts?access_token=${this.fbLogin.authResponse.accessToken}`, 'get');
    this.fbPages.push(...data?.data);
    //console.log(this.fbPages);
  }

  async post() {
    if (this.postContent) {
      let body = {
        access_token: this.fbPages[this.selectedIndex].access_token,
        message: this.postContent,
      }

      this.facebookService.api(`${this.fbPages[this.selectedIndex].id}/feed`, 'post', body).then(resp => {
        console.log(resp);
      }).catch(er => {
        console.log(er);
      })
    }
  }

  async logout() {
    await this.facebookService.logout();
    this.router.navigateByUrl('login');
  }

}
