import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldContentComponent } from './old-content/old-content.component';
import { NewContentComponent } from './new-content/new-content.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'default', component: OldContentComponent },
  { path: 'optimized', component: NewContentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
