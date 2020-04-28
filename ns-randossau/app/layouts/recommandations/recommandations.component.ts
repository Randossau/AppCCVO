import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { screen } from "platform";

@Component({
  selector: 'Recommandations',
  moduleId: module.id,
  templateUrl: './recommandations.component.html',
  styleUrls: ['./recommandations.component.css']
})
export class RecommandationsComponent implements OnInit {

    category1: any;
    category2: any;
    category3: any;
    item1: any;
    item2: any;
    item3: any;
    item4: any;
    item5: any;
    item6: any;
    item7: any;
    item8: any;

    constructor(private page: Page, private routerExtensions: RouterExtensions) {

        this.page.on('navigatedTo', () => {
            this.category1 = this.page.getViewById("category1");
            this.category2 = this.page.getViewById("category2");
            this.category3 = this.page.getViewById("category3");
            this.item1 = this.page.getViewById("item1");
            this.item2 = this.page.getViewById("item2");
            this.item3 = this.page.getViewById("item3");
            this.item4 = this.page.getViewById("item4");
            this.item5 = this.page.getViewById("item5");
            this.item6 = this.page.getViewById("item6");
            this.item7 = this.page.getViewById("item7");
            this.item8 = this.page.getViewById("item8");
            this.page.getViewById("addButtonContainer").top = screen.mainScreen.heightDIPs - 120;
        });
    }

    ngOnInit(): void {
    }

    onTouch(args): void {
        if (args.object.category == "balisage") {
            this.category1.className = "owe-dashboard-item active";
            this.category2.className = "owe-dashboard-item";
            this.category3.className = "owe-dashboard-item";
            this.item1.className = "owe-list-item";
            this.item2.className = "owe-list-item";
            this.item3.className = "owe-list-item";
            this.item4.className = "owe-list-item";
            this.item5.className = "owe-list-item hide";
            this.item6.className = "owe-list-item hide";
            this.item7.className = "owe-list-item hide";
            this.item8.className = "owe-list-item hide";
        } else if (args.object.category == "niveau") {
            this.category1.className = "owe-dashboard-item";
            this.category2.className = "owe-dashboard-item active";
            this.category3.className = "owe-dashboard-item";
            this.item1.className = "owe-list-item hide";
            this.item2.className = "owe-list-item hide";
            this.item3.className = "owe-list-item hide";
            this.item4.className = "owe-list-item hide";
            this.item5.className = "owe-list-item";
            this.item6.className = "owe-list-item";
            this.item7.className = "owe-list-item hide";
            this.item8.className = "owe-list-item hide";
        } else if (args.object.category == "recom") {
            this.category1.className = "owe-dashboard-item";
            this.category2.className = "owe-dashboard-item";
            this.category3.className = "owe-dashboard-item active";
            this.item1.className = "owe-list-item hide";
            this.item2.className = "owe-list-item hide";
            this.item3.className = "owe-list-item hide";
            this.item4.className = "owe-list-item hide";
            this.item5.className = "owe-list-item hide";
            this.item6.className = "owe-list-item hide";
            this.item7.className = "owe-list-item";
            this.item8.className = "owe-list-item";

        }
    }


}















// constructor() { }

//   dialogOpen = false;

//   showDialog() {
//     this.dialogOpen = true;
//   }

//   closeDialog() {
//     this.dialogOpen = false;
//   }

//   ngOnInit(): void {
//   }
