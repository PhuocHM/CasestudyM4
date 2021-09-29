import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebritesInfoComponent } from './celebrites-info/celebrites-info.component';
import { CelebritesListComponent } from './celebrites-list/celebrites-list.component';
import { CompanyComponent } from './company/company.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { TrainningComponent } from './trainning/trainning.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'celebrities-list', component: CelebritesListComponent },
  { path: 'trainning', component: TrainningComponent },
  { path: 'celebrities-info', component: CelebritesInfoComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }