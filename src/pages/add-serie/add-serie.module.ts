import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSerieModal } from './add-serie';

@NgModule({
  declarations: [
    AddSerieModal,
  ],
  imports: [
    IonicPageModule.forChild(AddSerieModal),
  ],
})
export class AddSeriePageModule {}
