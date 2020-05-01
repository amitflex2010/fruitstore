import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import { AlertModule } from './alert/alert.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shoppingcart.component'
import { NoContentComponent } from './no-content/noContent.component';

import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    ShoppingCartComponent,
    NoContentComponent,
    CarouselComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    AlertModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, {
      onSameUrlNavigation: 'reload'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ShoppingCartComponent]
})
export class AppModule {}
