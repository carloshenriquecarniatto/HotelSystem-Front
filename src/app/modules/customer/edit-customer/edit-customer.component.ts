import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../../core/hotel/orders.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomerService } from '../../../core/customer/customer.service';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './edit-customer.component.html'
})
export class EditCustomerComponent {

  private readonly router = inject(Router);
  editBookingForm = new FormGroup({
    id: new FormControl<string>(''),
    address: new FormControl<string>(''),
    name: new FormControl<string>(''),
    phone: new FormControl<string>('')
  });
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelBookingService.getCustomerById(id).subscribe(response => {
      this.editBookingForm.setValue({
        id: response.id,
        address: response.address,
        name: response.name,
        phone: response.phone
      });
    });
  }

  save() {
    this.hotelBookingService.updateCustomer(this.editBookingForm.value).subscribe(response => {
      this.router.navigate(['customer/list']);
    });
  }
  private readonly hotelBookingService = inject(CustomerService);
  private readonly route = inject(ActivatedRoute);
}
