import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { OldContentComponent } from './old-content/old-content.component';
import { NewContentComponent } from './new-content/new-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OldContentComponent,
    NewContentComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, MatTabsModule, NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
