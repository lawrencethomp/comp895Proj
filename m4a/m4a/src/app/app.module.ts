import { DataService } from './data.service';
import { GenerateTurfComponent } from './generate-turf/generate-turf.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,
         RouterModule
} from '@angular/router';
import { routing } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';


@NgModule({
  declarations: [
    AppComponent,
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
    ContactdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
