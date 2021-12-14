import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDonkeyComponent } from './components/list-donkey/list-donkey.component';
import { UserDonkeyComponent } from './components/user-donkey/user-donkey.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDonkeyComponent,
    UserDonkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
