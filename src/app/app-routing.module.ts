import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {D3GlobeComponent} from './d3-globe/d3-globe.component';

const routes: Routes = [
  {path: 'd3-globe', component: D3GlobeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
