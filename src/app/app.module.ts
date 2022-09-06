import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { OldContentComponent } from './old-content/old-content.component';
import { NewContentComponent } from './new-content/new-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OldContentComponent,
    NewContentComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, MatTabsModule, NgOptimizedImage, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
