import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  getHotelById(id: string | null) {
    return this.getHotels().pipe(map(orders => orders.find(order => order.id === id)));
  }

  private readonly BASEURL = 'https://localhost:7097/api/Hotel';
  private readonly httpClient = inject(HttpClient);
  constructor() { }

  getHotels(): Observable<any[]> {
    return this.httpClient.get<[]>(`${this.BASEURL}`);
  }
  saveHotel(order: any) {
    return this.httpClient.post(`${this.BASEURL}`, order);
  }
  updateHotel(order: any) {
    return this.httpClient.put(`${this.BASEURL}`, order);
  }
}
