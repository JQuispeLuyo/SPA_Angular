import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageFoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations:[
        BreadcrumbsComponent, 
        HeaderComponent, 
        SidebarComponent,
        NoPageFoundComponent,
    ],
    exports: [
        BreadcrumbsComponent, 
        HeaderComponent, 
        SidebarComponent,
        NoPageFoundComponent,
    ]
})
export class SharedModule {}