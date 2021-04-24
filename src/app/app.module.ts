import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {DataService} from './data.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { GlobeComponent } from './globe/globe.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
