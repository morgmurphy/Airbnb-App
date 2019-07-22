import { Injectable } from '@angular/core';
import {Booking} from '../models/booking'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  bookings: Array<Booking>;
  constructor(
    private httpClient: HttpClient
  ) {

   }

  getListItems() {
    return this.bookings;
  }

  getAllBookings() {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/booking/")
      .subscribe(
        (response: Booking[]) => {
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg)
        }
      )
    })
  }

  getBookingById(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get(`http://localhost:5000/api/booking/${id}`)
      .subscribe(
        (response: Booking[]) => {
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg)
        }
      )
    })
  }
}
