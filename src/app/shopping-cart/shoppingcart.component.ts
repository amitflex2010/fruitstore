import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { Product } from '../product/product.component';
import { Store } from '@ngrx/store';
import { AddToShoppingCart } from '../store/actions';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  total = 0;
  private isCheckout: Boolean;
  constructor(
    public dialogRef: MatDialogRef<ShoppingCartComponent>,
    @Inject(MAT_DIALOG_DATA) private items: any, 
    private router: Router,
    private store: Store<{ items: Product[]; cart: [], isCheckout: false }>) {}


  ngOnInit() {
   this.total = this.items.reduce((acc, itemprice) => acc + (itemprice.price * itemprice.quantity),0);
  }

  actionFunction() {
    this.isCheckout = true;
    this.store.dispatch(new AddToShoppingCart(this.isCheckout));
    this.dialogRef.close();
    this.router.navigate(['/checkout']);
   
  }
s
  closeModal() {
    this.dialogRef.close();
  }


}
