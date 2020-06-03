import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { SideAreaComponent } from './Components/side-area/side-area.component';
import { CausesAreaComponent } from './Components/causes-area/causes-area.component';
import { AboutAreaComponent } from './Components/about-area/about-area.component';
import { ServceAreaComponent } from './Components/servce-area/servce-area.component';
import { HelpAreaComponent } from './Components/help-area/help-area.component';
import { VolunteersAreaComponent } from './Components/volunteers-area/volunteers-area.component';
import { BecomeVolunterComponent } from './Components/become-volunter/become-volunter.component';
import { FooterComponent } from './Components/footer/footer.component';
// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { ModelModule } from "./models/model.module";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideAreaComponent,
    CausesAreaComponent,
    AboutAreaComponent,
    ServceAreaComponent,
    HelpAreaComponent,
    VolunteersAreaComponent,
    BecomeVolunterComponent,
    FooterComponent,
    // AboutComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    RouterModule.forRoot([
      // {path: 'about', component: AboutComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profile', component: ProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
