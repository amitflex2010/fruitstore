import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  submitted = false;
  cartTotal = '';
  cartItems: any;
  isCheckout:Boolean;


  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute, 
    private store: Store<{ items: []; cart: [], isCheckout:false}>) { 
      store.pipe(select('shop')).subscribe(data => (this.cartItems = data.cart, this.isCheckout = data.isCheckout));
     
    }

  ngOnInit() {
   
      this.checkoutForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          addressline1: ['', Validators.required],
          addressline2: ['', Validators.required],
          city: ['', Validators.required],
          state: ['',Validators.required],
          zipcode: ['', Validators.required],
          billingcheckbox: [false, Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phonenumber: ['', [Validators.required]],
          sendupdates: [false, Validators.requiredTrue]
      });


        this.cartTotal = this.cartItems.reduce((acc, itemprice) => acc + (itemprice.price * itemprice.quantity),0);
  }

  // convenience getter for easy access to form fields
  get f() { return this.checkoutForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.checkoutForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.checkoutForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.checkoutForm.reset();
  }

}
