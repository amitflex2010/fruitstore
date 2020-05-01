import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/noContent.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent}, 
    { path: 'checkout', component: CheckoutComponent}, 
    { path: '**', redirectTo: '/notfound' }, 
    { path: 'notfound', component: NoContentComponent}
]