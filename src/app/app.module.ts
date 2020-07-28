import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

// import { AppRoutingModule } from './app-routing.module';
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
import { DonorSignupComponent } from './Components/donor-signup/donor-signup.component';
import { CreatePostComponent } from './Components/create-post/create-post.component';
import { CausesDetailsComponent } from './Components/causes-details/causes-details.component';
import { DashboardComponent } from './Components/admin/dashboard/dashboard.component';
import { NavbarComponent } from './Components/admin/navbar/navbar.component';
import { SidebarComponent } from './Components/admin/sidebar/sidebar.component';
import { FixedpluginComponent } from './Components/admin/fixedplugin/fixedplugin.component';
import { UserProfileComponent } from './Components/admin/user-profile/user-profile.component';
import { AccepterSignupComponent } from './Components/accepter-signup/accepter-signup.component';
import { ViewAccepterComponent } from './Components/view-accepter/view-accepter.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { VerifyCodeComponent } from './Components/verify-code/verify-code.component';
import { InfoComponent } from './Components/info/info.component';
import { NotificationComponent } from './Components/Admin/notification/notification.component';
import { DonorProfileComponent } from './Components/donor-profile/donor-profile.component';
import { DonorComponent } from './Components/Admin/donor/donor.component';
import { AccepterComponent } from './Components/Admin/accepter/accepter.component';
import { DonorEditProfileComponent } from './Components/donor-edit-profile/donor-edit-profile.component';
import { AccepetrEditProfileComponent } from './Components/accepetr-edit-profile/accepetr-edit-profile.component';

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
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    DonorSignupComponent,
    CreatePostComponent,
    CausesDetailsComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FixedpluginComponent,
    UserProfileComponent,
    AccepterSignupComponent,
    ViewAccepterComponent,
    CalculatorComponent,
    VerifyCodeComponent,
    InfoComponent,
    NotificationComponent,
    DonorProfileComponent,
    DonorComponent,
    AccepterComponent,
    DonorEditProfileComponent,
    AccepetrEditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutAreaComponent},
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'donorSignup', component:DonorSignupComponent},
      {path: 'createPost', component:CreatePostComponent},
      {path: 'causesDetails', component:CausesDetailsComponent},
      {path: 'causes', component:CausesAreaComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'userProfile', component: UserProfileComponent},
      {path: 'login', component: LoginComponent},
      {path: 'accepterSignup', component: AccepterSignupComponent},
      {path: 'viewAccepter', component: ViewAccepterComponent},
      {path: 'calculator', component: CalculatorComponent},
      {path: 'notification', component: NotificationComponent},
      {path: 'donorProfile', component: DonorProfileComponent},
      {path: 'donor', component: DonorComponent},
      {path: 'accepter', component: AccepterComponent},
      {path: 'editAccepter', component: AccepetrEditProfileComponent},
      {path: 'editDonor', component: DonorEditProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
