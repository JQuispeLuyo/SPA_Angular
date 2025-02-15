import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: NoPageFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
