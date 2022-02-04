import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasasRoutingModule } from './casas-routing.module';
import { CasasComponent } from './casas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CasasComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CasasRoutingModule
  ]
})
export class CasasModule { }
