import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommercePageRoutingModule } from './ecommerce-routing.module';

import { EcommercePage } from './ecommerce.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EcommercePageRoutingModule
  ],
  declarations: [EcommercePage]
})
export class EcommercePageModule {}
