import { Injectable } from '@angular/core';
import {Listing} from '../models/listing'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  // variable instantiation
  listings: Array<Listing>;
  // listing1 = new Listing('Apartment in Cape Town', 'Cape Town - CBD', 750, 'assets/home1.jpg');
  // listing2 = new Listing('Newlands town house', 'Cape Town - Newlands', 300, 'assets/home2.jpg');
  // listing3 = new Listing('2 Bedroom flat', 'Cape Town - Wynburg', 350, 'assets/home3.jpg');
  
  constructor(
    private httpClient: HttpClient
  ) { 
    // this.listings = [this.listing1, this.listing2, this.listing3];
  }
  getListItems() {
    return this.listings;
  }

  getAllListings() {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/listings/")
      .subscribe(
        (response: Listing[]) => {
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg)
        }
      )
    })
  }

  getListingById(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get(`http://localhost:5000/api/listings/${id}`)
      .subscribe(
        (response: Listing[]) => {
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
