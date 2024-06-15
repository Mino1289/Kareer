import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreFullComponent } from './offre-full/offre-full.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { ProfilComponent } from './profil/profil.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offres', component: OffreListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'entreprises', component: EntreprisesComponent},
  { path: 'offre/:id', component: OffreFullComponent },
  { path: 'candidature/:id', component: CandidatureComponent },
  { path: 'connexion', component: FormConnexionComponent },
  { path: 'register', component: FormRegisterComponent },
  { path: 'deconnexion', component: DeconnexionComponent},
  { path: 'profil', component: ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
