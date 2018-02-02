import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NorthPage} from '../north/north';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  NorthPage:any = NorthPage;

  constructor(public navCtrl: NavController) {

  }

}
