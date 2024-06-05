import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreFullComponent } from './offre-full/offre-full.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offres', component: OffreListComponent },
  {path: 'users',component : UserListComponent},
  { path: 'offres/:id', component: OffreFullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
