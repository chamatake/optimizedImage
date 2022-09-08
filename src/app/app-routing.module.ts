import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldContentComponent } from './old-content/old-content.component';
import { NewContentComponent } from './new-content/new-content.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', title: 'Sample App Home', component: HomeComponent, pathMatch: 'full' },
  { path: 'default', title: 'With default image tag', component: OldContentComponent },
  { path: 'optimized', title: 'With optimized image tag', component: NewContentComponent },
  { path: '**', title: 'Page not found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
