import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/data-display', pathMatch: 'full' },
  { path: 'data-display', component: DataDisplayComponent }
  // Add other routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
