import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CreateCharComponent } from './components/create-char/create-char.component';
import { TownComponent } from './components/firstTown/town/town.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/MainMenu',
    pathMatch: 'full',
  },
  {
    path: 'MainMenu',
    component: MainMenuComponent,
  },
  {
    path: 'FourOFour',
    component: FourOfourComponent,
  },
  {
    path: 'charCreator',
    component: CreateCharComponent,
  },
  {
    path: 'Town',
    component: TownComponent,
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
