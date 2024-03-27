import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { HotelService } from '../../../core/hotel/hotel.service';

@Component({
  selector: 'app-new-hotel',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './new-hotel.component.html'
})
export class NewHotelComponent {

  private readonly router = inject(Router);
  private readonly hotelBookingService = inject(HotelService);
  editBookingForm = new FormGroup({
    address: new FormControl<string>(''),
    name: new FormControl<string>(''),
    phone: new FormControl<string>(''),
  });

  save() {
    this.hotelBookingService.saveHotel(this.editBookingForm.value).subscribe(response => {
      this.router.navigate(['hotel/list']);
    });
  }
}
