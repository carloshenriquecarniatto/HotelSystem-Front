import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, map } from 'rxjs';
import { CustomerService } from '../../../core/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, JsonPipe, RouterLink],
  templateUrl: './customer-list.component.html'
})
@UntilDestroy()
export class CustomerListComponent {

  private readonly router = inject(Router);
  edit(row: any) {
    this.router.navigate(['customer/edit', row.id]);
  }
  results$!: Observable<any[]>;
  displayedColumns = ['id', 'name', 'address', 'phone', 'actionsColumn'];
  private readonly hotelBookingService = inject(CustomerService);

  ngOnInit() {
    this.results$ = this.hotelBookingService.getCustomers().pipe(untilDestroyed(this), map(response => {
      return response;
    }));
  }
}
