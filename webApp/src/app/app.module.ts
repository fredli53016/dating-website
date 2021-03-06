import { UserInfoService } from './user-info.service';
import { MemberService } from './member.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebsocketService } from "./websocket.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { EventsComponent } from './events/events.component';
import { MembersComponent } from './members/members.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { EventService } from './event.service';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserComponent } from './user/user.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    MembersComponent,
    UserInfoComponent,
    UserComponent,
    ChatroomComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, EventService, MemberService, UserInfoService, AuthGuard, WebsocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
