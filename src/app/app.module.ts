import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListDonkeyComponent } from './components/list-donkey/list-donkey.component';
import { UserDonkeyComponent } from './components/user-donkey/user-donkey.component';
import { RacineComponent } from './components/racine/racine.component';
import { CreateDonkeyComponent } from './components/create-donkey/create-donkey.component';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListDonkeyComponent,
    UserDonkeyComponent,
    RacineComponent,
    CreateDonkeyComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
