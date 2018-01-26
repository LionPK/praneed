import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NorthPage } from './north';

@NgModule({
  declarations: [
    NorthPage,
  ],
  imports: [
    IonicPageModule.forChild(NorthPage),
  ],
})
export class NorthPageModule {}
