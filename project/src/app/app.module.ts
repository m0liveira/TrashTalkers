import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CreateCharComponent } from './components/create-char/create-char.component';
import { TownComponent } from './components/firstTown/town/town.component';

@NgModule({
  declarations: [
    AppComponent,
    FourOfourComponent,
    MainMenuComponent,
    CreateCharComponent,
    TownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
