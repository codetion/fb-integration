import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, LoginOptions, UIParams, UIResponse } from 'ngx-facebook';

const loginParams: LoginOptions = {
  auth_type: 'rerequest',
  scope: 'pages_show_list,pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_manage_engagement,pages_manage_metadata',
  return_scopes: true,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public facebookService: FacebookService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  async loginWithFacebook() {
    await this.facebookService.login(loginParams);
    this.router.navigateByUrl('home');
  }

}