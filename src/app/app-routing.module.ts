import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SubmissionComponent} from "./pages/submission/submission.component";

const routes: Routes = [
  {path: '', pathMatch: "full", component: DashboardComponent},
  {path: 'dashboard', pathMatch: "full", component: DashboardComponent},
  {path: 'submission', pathMatch: "full", component: SubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
