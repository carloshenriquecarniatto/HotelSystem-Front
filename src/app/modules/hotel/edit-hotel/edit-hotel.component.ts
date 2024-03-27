import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from '../../../core/hotel/hotel.service';

@Component({
  selector: 'app-edit-hotel',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './edit-hotel.component.html'
})
export class EditHotelComponent implements OnInit {
  private readonly router = inject(Router);
  editBookingForm = new FormGroup({
    id: new FormControl<string>(''),
    address: new FormControl<string>(''),
    name: new FormControl<string>(''),
  });
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelBookingService.getHotelById(id).subscribe(response => {
      this.editBookingForm.setValue({
        id: response.id,
        address: response.address,
        name: response.name
      });
    });
  }

  save() {
    this.hotelBookingService.updateHotel(this.editBookingForm.value).subscribe(response => {
      this.router.navigate(['hotel/list']);
    });
  }
  private readonly hotelBookingService = inject(HotelService);
  private readonly route = inject(ActivatedRoute);

}
