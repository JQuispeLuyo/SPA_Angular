import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './page.route';
import { ComponentsModule } from './../components/components.module';


@NgModule({
    declarations:[
        PagesComponent, 
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        PageRoutingModule, SharedModule, ComponentsModule
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ]
})
export class PageModule{}