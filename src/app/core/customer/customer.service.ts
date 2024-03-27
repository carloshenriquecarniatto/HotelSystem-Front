import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomerById(id: string | null) {
    return this.getCustomers().pipe(map(orders => orders.find(order => order.id === id)));
  }

  private readonly BASEURL = 'https://localhost:7097/api/Customer';
  private readonly httpClient = inject(HttpClient);
  constructor() { }

  getCustomers(): Observable<any[]> {
    return this.httpClient.get<[]>(`${this.BASEURL}`);
  }
  saveCustomer(order: any) {
    return this.httpClient.post(`${this.BASEURL}`, order);
  }
  updateCustomer(order: any) {
    return this.httpClient.put(`${this.BASEURL}`, order);
  }
}
