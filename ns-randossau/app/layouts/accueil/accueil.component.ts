import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page"

@Component({
  selector: 'Accueil',
  moduleId: module.id,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private page: Page) {

}

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = '~/assets/img/accueil.jpg';
    this.page.style.backgroundSize='cover';
    this.page.style.backgroundRepeat='no-repeat';
  }

}
