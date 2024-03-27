import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from '../../../core/hotel/orders.service';
import { CustomerService } from '../../../core/customer/customer.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './new-customer.component.html'
})
export class NewCustomerComponent {

  private readonly router = inject(Router);
  private readonly hotelBookingService = inject(CustomerService);
  editBookingForm = new FormGroup({
    address: new FormControl<string>(''),
    name: new FormControl<string>(''),
    phone: new FormControl<string>('')
  });

  save() {
    this.hotelBookingService.saveCustomer(this.editBookingForm.value).subscribe(response => {
      this.router.navigate(['customer/list']);
    });
  }
}
