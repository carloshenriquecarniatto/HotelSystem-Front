import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatTableModule } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { OrdersService } from '../../../core/hotel/orders.service';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, JsonPipe, RouterLink],
  templateUrl: './booking-list.component.html'
})
@UntilDestroy()
export class BookingListComponent {

  private readonly router = inject(Router);
  edit(row: any) {
    this.router.navigate(['hotel/booking/edit', row.id]);
  }
  results$!: Observable<any[]>;
  displayedColumns = ['id', 'name', 'address', 'actionsColumn'];
  private readonly hotelBookingService = inject(OrdersService);

  ngOnInit() {
    this.results$ = this.hotelBookingService.getOrders().pipe(untilDestroyed(this), map(response => {
      return response;
    }));
  }
}
