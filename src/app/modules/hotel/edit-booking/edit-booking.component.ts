import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../../core/hotel/orders.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-edit-booking',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './edit-booking.component.html'
})
export class EditBookingComponent implements OnInit {
  private readonly router = inject(Router);
  editBookingForm = new FormGroup({
    id: new FormControl<string>(''),
    address: new FormControl<string>(''),
    name: new FormControl<string>(''),
    hotelId: new FormControl<string>(''),
    customerId: new FormControl<string>(''),
  });
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelBookingService.getOrderById(id).subscribe(response => {
      this.editBookingForm.setValue({
        id: response.id,
        address: response.address,
        name: response.name,
        hotelId: response.hotel.id,
        customerId: response.customer.id
      });
    });
  }

  save() {
    this.hotelBookingService.updateOrder(this.editBookingForm.value).subscribe(response => {
      this.router.navigate(['hotel/booking/list']);
    });
  }
  private readonly hotelBookingService = inject(OrdersService);
  private readonly route = inject(ActivatedRoute);
}
