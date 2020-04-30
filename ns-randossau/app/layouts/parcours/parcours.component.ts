import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { PlatformLocation } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcoursI } from "./circuits/parcoursI.model";
import { RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { Page } from "tns-core-modules/ui/page";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { topmost } from "tns-core-modules/ui/frame";
import { Color } from "color";
import { android, ios } from "application";
import { device } from "platform";
import { AnimationsService } from "./circuits/animations-service";
import { ParcoursServService } from "./circuits/parcoursServ-service";
import { ListViewEventData } from "nativescript-ui-listview";

@Component({
  selector: 'Parcours',
  moduleId: module.id,
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {


    private _landmarks: ParcoursI[];
    private _selectedView: View;
    private _adjustedOffset: number = 0;


    @ViewChild("search", {static: true}) _searchRef: ElementRef;
    @ViewChild("list", {static: true}) _listRef: ElementRef;
    @ViewChild("animatingImage",{static: true}) _imageRef: ElementRef;
    @ViewChild("animatingImageContainer", {static: true}) _imageContainerRef: ElementRef;

    constructor(private animationsService: AnimationsService,
        private parcoursServService: ParcoursServService,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private location: PlatformLocation) {

            this.page['scrollableContent'] = true;
            this._landmarks = this.parcoursServService.getLandmarks();

            if (android) {
                this._updateStatusBarColor("#2B3238");
            }
    }

    onGPSTap(args: any){
        const gpsTapped =  args.view;
        this.routerExtensions.navigate(["app/layouts/gps", gpsTapped.id],
            {
                animated: false,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease-in"
                }
            })
    }


    ngOnInit() {
        // this.location.onPopState(() => {
        //     this._onNavigatedTo();
        // });

        // if (ios) {
        //     topmost().ios.controller.navigationBar.barStyle = 1;
        // }

    }

    get landmarks() {
        return this._landmarks;

    }


    public onNavigationItemTap(args: any) {
        this.parcoursServService.setSelectedId(args.id);
        this._selectedView = args.view;
        this.animationsService.animationOffset = this.measureOffset(args.view, args.object);
        this.routerExtensions.navigate(['/details'], { animated: false });
        setTimeout(() => {
            this._prepareForBackNavigation();
        });
    }

    private measureOffset(view1: View, view2: View) {
        let offset = view1.getLocationRelativeTo(view2).y;
        if (view2.ios && view2.ios.adjustedContentInset) {
            this._adjustedOffset = view2.ios.adjustedContentInset.top;
        }
        return offset - this._adjustedOffset;
    }

    private _prepareForBackNavigation() {
        this._listRef.nativeElement.opacity = 0;
        this._selectedView.opacity = 0;

        this._imageRef.nativeElement.src = this.parcoursServService.getSelected().image;
        this._imageContainerRef.nativeElement.translateY = this._adjustedOffset;
        this._imageContainerRef.nativeElement.opacity = 1;

    }

    private _onNavigatedTo() {
        let offset = this.animationsService.animationOffset + this._adjustedOffset;
        this._imageContainerRef.nativeElement.animate({
            translate: { x: 0, y: offset },
            duration: 200,
            curve: AnimationCurve.easeOut
        }).then(() => {
            this._selectedView.opacity = 1;
            this._imageContainerRef.nativeElement.animate({
                opacity: 0,
                duration: 400,
                curve: AnimationCurve.easeOut
            }).then(() => {
                this._imageContainerRef.nativeElement.translateY = 0;
                })
            }).catch(() => { });

        this._listRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(() => { });
        this._searchRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(() => { });
    }

    private _updateStatusBarColor(color: string) {
        if (device.sdkVersion >= "21" && android.foregroundActivity) {
            var nativeColor = new Color(color).android;
            var window = android.foregroundActivity.getWindow();
            window.setStatusBarColor(nativeColor);
        }
    }


}
