import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SubmissionComponent} from "./pages/submission/submission.component";
import {AnalyticsComponent} from "./pages/analytics/analytics.component";
import {MainLayoutComponent} from "./pages/mainlayout/main-layout.component";
import {SignInComponent} from "./pages/signin/sign-in.component";
import {AuthGuard} from "./shared/authGuard";

const routes: Routes = [
  {
    path: 'auth/signin',
    pathMatch: "full",
    component: SignInComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'submission', component: SubmissionComponent},
      {path: 'analytics', component: AnalyticsComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
