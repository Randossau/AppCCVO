import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'SettingsRoot',
  templateUrl: './settings-root.component.html',
  styleUrls: ['./settings-root.component.css'],
  moduleId: module.id,

})
export class SettingsRootComponent implements OnInit {

  constructor(private _routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._routerExtensions.navigate([{ outlets: { settings: ["settings"] } }], { relativeTo: this.activeRoute });
  }

}
