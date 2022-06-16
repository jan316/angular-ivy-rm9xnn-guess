import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import {
  AppRoutingModule,
  routingComponents,
} from './app-routing/app-routing.module';
import { ActorsService } from './actors.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, routingComponents],
  providers: [ActorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
