import { Routes } from '@angular/router';
import { CreateDonkeyComponent } from './components/create-donkey/create-donkey.component';
import { RacineComponent } from './components/racine/racine.component';

const ROUTES: Routes = [
  { path: '', component: RacineComponent },
  { path: 'create', component: CreateDonkeyComponent },
];

export { ROUTES };
