import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Delete1Component } from './delete1/delete1.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { ProfiComponent } from './profi/profi.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'history',component:HistoryComponent},
  {path:'creditcard',component:CreditcardComponent},
  {path:'profi',component:ProfiComponent},
  {path:'delete1',component:Delete1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
