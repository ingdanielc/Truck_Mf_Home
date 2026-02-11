import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { CookieService } from 'ngx-cookie-service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [HomeComponent], imports: [CommonModule,
        ViewsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule], providers: [CookieService, provideHttpClient(withInterceptorsFromDi())] })
export class ViewsModule {}
