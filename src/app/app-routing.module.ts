import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModalComponent } from './user/auth-modal/auth-modal.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PayComponent } from './payment/pay/pay.component';
import { AuthGaurd } from './guards/auth.guard';

const routes: Routes = [
  { path : 'authenticate', component : AuthModalComponent },
  { path : '', component : LandingComponent },
  { path : 'mylearning', component : SidebarComponent, canActivate : [AuthGaurd] },
  { path : "payment", component : PayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
