import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrdersService } from '../../../core/hotel/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-booking',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './new-booking.component.html'
})
export class NewBookingComponent {

  private readonly router = inject(Router);
  private readonly hotelBookingService = inject(OrdersService);
  editBookingForm = new FormGroup({
    address: new FormControl<string>(''),
    name: new FormControl<string>(''),
    hotelId: new FormControl<string>(''),
    customerId: new FormControl<string>(''),
  });

  save() {
    this.hotelBookingService.saveOrder(this.editBookingForm.value).subscribe(response => {
      this.router.navigate(['hotel/booking/list']);
    });
  }
}
