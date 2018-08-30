import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './hello/hello.component';
import { SharedModule } from '../shared/shared.module';
import { DefaultDialComponent } from './default-dial/default-dial.component';
import { CustomDialComponent } from './custom-dial/custom-dial.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [HelloComponent, DefaultDialComponent, CustomDialComponent],
  entryComponents: [CustomDialComponent, DefaultDialComponent],
  exports: [HelloComponent],
})
export class PocModule { }
