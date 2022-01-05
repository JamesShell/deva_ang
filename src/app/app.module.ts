import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostDetailFormComponent } from './post-details/post-detail-form/post-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmEmailComponent } from './auth/components/confirm-email/confirm-email.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PricingComponent } from './pages/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostDetailFormComponent,
    ConfirmEmailComponent,
    ChangePasswordComponent,
    HomeComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    SharedModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
