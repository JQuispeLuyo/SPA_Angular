import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations:[
        PagesComponent, 
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        PagesRoutingModule, 
        SharedModule, 
        ComponentsModule,
        ChartsModule,
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ]
})
export class PageModule{}