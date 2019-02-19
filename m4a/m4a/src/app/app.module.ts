import { DataService } from './services/data.service';
import { GenerateTurfComponent } from './components/generate-turf/generate-turf.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes,
         RouterModule
} from '@angular/router';
import { routing } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact-related/contact/contact.component';
import { HomeComponent } from './components/structural/home/home.component';
import { AlertComponent } from './components/login-related/_directives/index';
import { LoginComponent } from './components/login-related/login/login.component';
import { ViewUserComponent } from './components/contact-related/view-user/view-user.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './components/login-related/_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './components/login-related/_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactListComponent } from './components/contact-related/contact-list/contact-list.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { RandomQuoteComponent } from './components/structural/random-quote/random-quote.component';
import { CreateContactComponent } from './components/contact-related/create-contact/create-contact.component';
import { ContactdetailComponent } from './components/contact-related/contactdetail/contactdetail.component';
import { CampaignComponent } from './components/structural/campaign/campaign.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/login-related/register/register.component';
import { AgmCoreModule } from '@agm/core';
import { LiteratureComponent } from './components/structural/literature/literature.component';
import { GraphComponent } from './components/graph/graph.component';
import {PhoneNumberService} from './services/phone-number/phone-number.service';
import {CreateContactService} from './services/contact/create-contact.service';
import {GetContactService} from './services/contact/get-contact.service';
// check
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ViewUserComponent,
    GenerateTurfComponent,
    ContactListComponent,
    EditContactComponent,
    RandomQuoteComponent,
    CreateContactComponent,
    ContactdetailComponent,
    CampaignComponent,
    SearchComponent,
    RegisterComponent,
    LiteratureComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpModule,
    routing,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4'
    })
  ],
  providers: [
        DataService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider,
        PhoneNumberService,
        CreateContactService,
        GetContactService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }