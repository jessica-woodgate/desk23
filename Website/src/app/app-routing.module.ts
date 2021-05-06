import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { GlobeComponent } from './globe/globe.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'globe', component: GlobeComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
