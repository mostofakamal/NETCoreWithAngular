import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
