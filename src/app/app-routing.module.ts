import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PostDetailPageComponent } from './post-details/post-detail-page/post-detail-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'posts', component: PostDetailsComponent },
  { path: 'posts/:id', component: PostDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }