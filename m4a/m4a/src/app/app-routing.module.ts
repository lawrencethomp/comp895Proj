import { CampaignComponent } from './components/structural/campaign/campaign.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactdetailComponent } from './components/contact-related/contactdetail/contactdetail.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact-related/contact/contact.component';
import { HomeComponent } from './components/structural/home/home.component';
import { LoginComponent } from './components/login-related/login/index';
import { RegisterComponent } from './components/login-related/register/index';
import { AuthGuard } from './components/login-related/_guards/index';
import { ViewUserComponent } from './components/contact-related/view-user/view-user.component';
import { GenerateTurfComponent } from './components/generate-turf/generate-turf.component';
import { LandingComponent } from './components/landing/landing.component';
import { CreateContactComponent } from './components/contact-related/create-contact/create-contact.component';
import { SearchComponent } from './components/search/search.component';
import { LiteratureComponent } from './components/structural/literature/literature.component';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    canActivate: [AuthGuard],
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
    path: 'graph',
    component: GraphComponent
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
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'literature',
    component: LiteratureComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
