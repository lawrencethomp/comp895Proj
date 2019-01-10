import { DataService } from './data.service';
import { GenerateTurfComponent } from './generate-turf/generate-turf.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes,
         RouterModule
} from '@angular/router';
import { routing } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_directives/index';
import { LoginComponent } from './login/login.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { CampaignComponent } from './campaign/campaign.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { AgmCoreModule } from '@agm/core';
import { LiteratureComponent } from './literature/literature.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ViewUserComponent,
    LandingComponent,
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
        ErrorInterceptorProvider
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
