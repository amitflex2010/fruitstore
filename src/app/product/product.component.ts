import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../store/actions';
import { AlertService } from '../alert/alert.service';

export interface Product {
  name: string;
  price: number;
  quantity:number;
  description: string;
  image: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [] }>, protected alertService: AlertService) {}

  options = {
    autoClose: true,
    keepAfterRouteChange: false,
  };
  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    
    this.store.dispatch(new AddToCart(item));
    let message = 'Success!! '+item.quantity +' '+ item.name + ' are added to the cart';
    this.alertService.success(message, this.options)
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    let message = 'Success!! '+item.quantity +' '+ item.name + ' are removed from the cart';
    this.alertService.warn(message, this.options)
    this.inCart = false;
  }
  ngOnInit() {
    
  }
}
