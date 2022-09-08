import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { OldContentComponent } from './old-content/old-content.component';
import { NewContentComponent } from './new-content/new-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeButtonComponent } from './home-button/home-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OldContentComponent,
    NewContentComponent,
    HomeComponent,
    PageNotFoundComponent,
    HomeButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule, 
    BrowserModule, 
    MatButtonModule,
    MatIconModule, 
    NgOptimizedImage, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
