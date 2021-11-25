import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadingController.dismiss('loading-controller')
  }
}
