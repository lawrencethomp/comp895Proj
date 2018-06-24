import { CampaignComponent } from './campaign/campaign.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { GenerateTurfComponent } from './generate-turf/generate-turf.component';
import { LandingComponent } from './landing/landing.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'createcontact',
    component: CreateContactComponent
  },
  {
    path: 'user',
    component: ViewUserComponent
  },
  {
    path: 'turf',
    component: GenerateTurfComponent
  },
  {
    path: 'contactdetail/:id',
    component: ContactdetailComponent
  },
  {
    path: 'editcontact/:id',
    component: EditContactComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
