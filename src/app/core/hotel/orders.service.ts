import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  getOrderById(id: string | null) {
    return this.getOrders().pipe(map(orders => orders.find(order => order.id === id)));
  }

  private readonly BASEURL = 'https://localhost:7097/api/HotelBooking';
  private readonly httpClient = inject(HttpClient);
  constructor() { }

  getOrders(): Observable<any[]> {
    return this.httpClient.get<[]>(`${this.BASEURL}`);
  }
  saveOrder(order: any) {
    return this.httpClient.post(`${this.BASEURL}`, order);
  }
  updateOrder(order: any) {
    return this.httpClient.put(`${this.BASEURL}`, order);
  }
}
