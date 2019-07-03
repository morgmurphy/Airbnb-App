import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor(
    private NavCtrl: NavController
  ) { }

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
