import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, map } from 'rxjs';
import { OrdersService } from '../../../core/hotel/orders.service';
import { HotelService } from '../../../core/hotel/hotel.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, JsonPipe, RouterLink],
  templateUrl: './hotel-list.component.html'
})
@UntilDestroy()
export class HotelListComponent {

  private readonly router = inject(Router);
  edit(row: any) {
    this.router.navigate(['hotel/edit', row.id]);
  }
  results$!: Observable<any[]>;
  displayedColumns = ['id', 'name', 'address', 'actionsColumn'];
  private readonly hotelBookingService = inject(HotelService);

  ngOnInit() {
    this.results$ = this.hotelBookingService.getHotels().pipe(untilDestroyed(this), map(response => {
      return response;
    }));
  }
}
