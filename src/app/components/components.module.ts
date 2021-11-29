import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TitleComponent} from './title/title.component';

@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [TitleComponent],
  declarations: [TitleComponent]
})
export class ComponentsModule {}
