import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/FourOFour',
    pathMatch: 'full',
  },
  {
    path: 'FourOFour',
    component: FourOfourComponent,
  },
  {
    path: '**',
    redirectTo: '/FourOFour',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
