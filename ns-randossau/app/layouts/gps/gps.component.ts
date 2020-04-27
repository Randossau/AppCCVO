import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from "tns-core-modules/ui/page"
import { Accuracy } from "ui/enums";
import { isAndroid } from "platform";
import { SearchBar } from "ui/search-bar";
import * as utils from "utils/utils";
import * as geolocation from "nativescript-geolocation";
import * as geolib from 'geolib';


@Component({
    selector: 'Gps',
    moduleId: module.id,
    templateUrl: './gps.component.html',
    styleUrls: ['./gps.component.css']
})

export class GpsComponent implements OnInit {
    currentLat: number;
    currentLng: number;
    destinationLat = "43.086894109999115";
    destinationLng = "-0.41972426000292684";

    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        searchBar.dismissSoftInput();
        console.log("You are searching for " + searchBar.text);
    }

    sBLoaded(args): void {
        var searchBar:SearchBar = <SearchBar>args.object;
        if(isAndroid){
            searchBar.android.clearFocus();
        }
    }

    constructor(private page: Page) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        console.log('checking if geolocation is enabled');
        geolocation.isEnabled().then(enabled => {
            console.log('isEnabled =', enabled);
            if (enabled) {
               this.watch();
            } else {
               this.request();
            }
        }, e => {
            console.log('isEnabled error', e);
            this.request();
        });
    }

    request() {
        console.log('enableLocationRequest()');
        geolocation.enableLocationRequest().then(() => {
            console.log('location enabled!');
            this.watch();
        }, e => {
            console.log('Failed to enable', e);
        });
    }

    watch() {
        console.log('watchLocation()');
        geolocation.watchLocation(position => {
            this.currentLat = position.latitude;
            this.currentLng = position.longitude;
        }, e => {
            console.log('failed to get location');
        }, {
            desiredAccuracy: Accuracy.high,
            minimumUpdateTime: 500
        });
    }

    getDistances() {
        return geolib.getDistance(
            {latitude: this.currentLat, longitude: this.currentLng},
            {latitude: this.destinationLat, longitude: this.destinationLng}
        );
    }

    numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    @ViewChild("map", { static: true }) public mapbox: ElementRef;

    public onMapReady(args: any) {
        args.map.setCenter(
            {
                lat: this.currentLat, // mandatory
                lng: this.currentLng, // mandatory
                animated: true, // default true
                zoomLevel: 14
            }
        )
        args.map.addMarkers([
            {
                lat: this.destinationLat,
                lng: this.destinationLng,
                // title: 'Lokasi Anda berjarak:',
                // subtitle: 'sekitar ' + this.numberWithCommas(this.getDistances()) + ' meters from this place',
                selected: false, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
                onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
            }]
        );
    }

}
