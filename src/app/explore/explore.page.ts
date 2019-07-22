import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ListingsService } from '../services/listings.service';
import { Listing } from '../models/listing';
//import { Explore } from '../explore/explore';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public listings: Listing[];

  constructor(
    private NavCtrl: NavController,
    private listingsService: ListingsService
  ) { 
    this.listingsService.getAllListings().then(listArr => {
      this.listings = listArr as Listing[];
    })
    //this.explore = this.listingsService.getListItems();
  }

  navToSaved() {
    this.NavCtrl.navigateForward("saved");
  }

  navToTrips() {
    this.NavCtrl.navigateForward("trips");
  }

  navToProfile() {
    this.NavCtrl.navigateForward("profile");
  }
  navToInbox() {
    this.NavCtrl.navigateForward("inbox");
  }
  

  ngOnInit() {
  }

}
