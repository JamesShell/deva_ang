import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from "@angular/router";
import { NgProgressModule } from 'ngx-progressbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgProgressModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    ColumnOneComponent,
  ]
})
export class SharedModule { }
