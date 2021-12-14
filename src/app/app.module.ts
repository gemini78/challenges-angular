import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDonkeyComponent } from './components/list-donkey/list-donkey.component';
import { UserDonkeyComponent } from './components/user-donkey/user-donkey.component';
import { RacineComponent } from './components/racine/racine.component';
import { CreateDonkeyComponent } from './components/create-donkey/create-donkey.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListDonkeyComponent,
    UserDonkeyComponent,
    RacineComponent,
    CreateDonkeyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
