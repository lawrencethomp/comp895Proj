import { CampaignComponent } from './campaign/campaign.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { ViewUserComponent } from './view-user/view-user.component';
import { GenerateTurfComponent } from './generate-turf/generate-turf.component';
import { LandingComponent } from './landing/landing.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { SearchComponent } from './search/search.component';
import { LiteratureComponent } from './literature/literature.component';
import { GraphComponent } from './graph/graph.component';

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
