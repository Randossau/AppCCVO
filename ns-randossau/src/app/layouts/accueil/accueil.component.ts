import { Component, OnInit } from '@angular/core';
import { Observable } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


@Component({
  selector: 'ns-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  moduleId: module.id,
})


export class AccueilComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}


export class GettingStartedViewModel extends Observable {
  constructor() {
      super();
      this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
          + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
  }

  public onOpenDrawerTap() {
      let sideDrawer: RadSideDrawer = <RadSideDrawer>(Frame.topmost().getViewById("sideDrawer"));
      sideDrawer.showDrawer();
  }

  public onCloseDrawerTap() {
      let sideDrawer: RadSideDrawer = <RadSideDrawer>(Frame.topmost().getViewById("sideDrawer"));
      sideDrawer.closeDrawer();
  }
}