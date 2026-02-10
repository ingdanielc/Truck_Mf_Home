import { NgModule } from '@angular/core';
import { GCardHubModule } from './g-card-hub/g-card-hub.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [GCardHubModule, HttpClientModule],
  imports: [CommonModule],
})
export class ComponentsModule {}
