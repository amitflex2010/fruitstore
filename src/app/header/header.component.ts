import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shoppingcart.component'
import { select, Store } from '@ngrx/store';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [], isCheckout: false }>, public matDialog: MatDialog) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart, this.isCheckout = data.isCheckout));
  }

  toCheckOut() {
    const userId = "user01";
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "82%";
    dialogConfig.width = "60%";
    dialogConfig.data = this.cart
    const modalDialog = this.matDialog.open(ShoppingCartComponent, dialogConfig);
    
  }
  cart: Product[] = [];
  isCheckout:Boolean;
  ngOnInit() {}
}
