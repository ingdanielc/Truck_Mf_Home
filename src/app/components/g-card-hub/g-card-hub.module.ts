import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GCardHubComponent } from './g-card-hub.component';
import { RouterModule } from '@angular/router';

export * from './g-card-hub.component';

@NgModule({
  declarations: [
    GCardHubComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GCardHubComponent]
})
export class GCardHubModule { }
