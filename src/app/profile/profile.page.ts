import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private NavCtrl: NavController
  ) { }

  navToSaved() {
    this.NavCtrl.navigateForward("saved");
  }

  navToInbox() {
    this.NavCtrl.navigateForward("inbox");
  }
  navToExplore() {
    this.NavCtrl.navigateForward("explore");
  }

  navToTrips() {
    this.NavCtrl.navigateForward("trips");
  }

  ngOnInit() {
  }

}
