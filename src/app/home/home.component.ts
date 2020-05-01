import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<{ items: Product[]; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
  }

  items: Product[] = [];

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }

  slides = [
    {
      url: '/assets/images/fruits.jpeg'
    },
    {
      url: '/assets/images/berry.jpeg'
    },
    {
      url: '/assets/images/banner-1.jpeg'
    },
    {
      url: '/assets/images/banner-2.jpeg'
    }
  ]
}
