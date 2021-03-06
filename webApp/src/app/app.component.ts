import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfoData = []
  constructor(private _authService: AuthService, private _userInfoService: UserInfoService) { }
  ngOnInit() {
    //Get the user name in the login state
    if(this._authService.loggedIn()){
      this._userInfoService.getUserInfo()
      .subscribe(
        res => this.userInfoData = res,
        err => console.log(err)
      )
    }
  }
}
