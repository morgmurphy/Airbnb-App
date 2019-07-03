import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(
    private NavCtrl: NavController
  ) { }

  navToExplore() {
    this.NavCtrl.navigateForward("explore");
  }
  navToInbox() {
    this.NavCtrl.navigateForward("inbox");
  }
  navToSaved() {
    this.NavCtrl.navigateForward("trips");
  }

  navToProfile() {
    this.NavCtrl.navigateForward("profile");
  }
  ngOnInit() {
  }

}
