import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  constructor(
    private NavCtrl: NavController
  ) { }

  navToExplore() {
    this.NavCtrl.navigateForward("explore");
  }
  navToInbox() {
    this.NavCtrl.navigateForward("inbox");
  }
  navToTrips() {
    this.NavCtrl.navigateForward("trips");
  }

  navToProfile() {
    this.NavCtrl.navigateForward("profile");
  }
  ngOnInit() {
  }

}
