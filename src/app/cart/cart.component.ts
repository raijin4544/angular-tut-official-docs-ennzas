import { Component } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBulider: FormBuilder
  ) {}
  items = this.cartService.getItems();
  ifCart = this.cartService.ifCart;
  checkoutForm = this.formBulider.group({
    name: "",
    address: ""
  });
  onClear(){
    this.items = this.cartService.clearCart();
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
