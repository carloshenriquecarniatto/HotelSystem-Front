import { Routes } from '@angular/router';
import { HotelListComponent } from './modules/hotel/hotel-list/hotel-list.component';
import { BookingListComponent } from './modules/hotel/booking-list/booking-list.component';
import { CustomerListComponent } from './modules/customer/customer-list/customer-list.component';
import { NewBookingComponent } from './modules/hotel/new-booking/new-booking.component';
import { EditBookingComponent } from './modules/hotel/edit-booking/edit-booking.component';
import { EditCustomerComponent } from './modules/customer/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './modules/customer/new-customer/new-customer.component';
import { EditHotelComponent } from './modules/hotel/edit-hotel/edit-hotel.component';
import { NewHotelComponent } from './modules/hotel/new-hotel/new-hotel.component';

export const routes: Routes = [
  {
    path: 'hotel/list',
    component: HotelListComponent,
  },
  {
    path: 'hotel/edit/:id',
    component: EditHotelComponent,
  },
  {
    path: 'hotel/new',
    component: NewHotelComponent,
  },
  {
    path: 'hotel/booking/list',
    component: BookingListComponent,
  },
  {
    path: 'hotel/booking/new',
    component: NewBookingComponent,
  },
  {
    path: 'hotel/booking/edit/:id',
    component: EditBookingComponent,
  },
  {
    path: 'customer/list',
    component: CustomerListComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  },
  {
    path: 'customer/new',
    component: NewCustomerComponent
  }
];
