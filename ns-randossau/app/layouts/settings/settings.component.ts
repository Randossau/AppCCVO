import { Component, OnInit } from '@angular/core';
import { View } from "tns-core-modules/ui/core/view";
import { isIOS } from "platform";



@Component({
    selector: 'Settings',
    moduleId: module.id,
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    countries: Array<any> = [
        { name: "Amazon", imageSrc: "~/images/amazon.png", open: '+42.87%', type: 'plus' },
        { name: "Netflix", imageSrc: "~/images/netflix.png", open: '+41.06%', type: 'plus' },
        { name: "Apple", imageSrc: "~/images/apple.png", open: '+13.63%', type: 'plus' },
        { name: "Paypal", imageSrc: "~/images/paypal.png", open: '+13.50%', type: 'plus' },
        { name: "Google", imageSrc: "~/images/google.png", open: '+0.51%', type: 'plus' },
        { name: "Spotify", imageSrc: "~/images/spotify.png", open: '-6.99%', type: 'minus' },
        { name: "Tesla", imageSrc: "~/images/tesla.png", open: '+17.19%', type: 'plus' },
        { name: "Facebook", imageSrc: "~/images/facebook.png", open: '-24.86%', type: 'minus' },
        { name: "Bitcoin", imageSrc: "~/images/bitcoin.png", open: '-48.86%', type: 'minus' },
        { name: "Ethereum", imageSrc: "~/images/et.png", open: '-48.86%', type: 'minus' },
        { name: "Aliaba", imageSrc: "~/images/alibaba.png", open: '-21.63%', type: 'minus' },
        { name: "AMD", imageSrc: "~/images/amd.png", open: '+86.63%', type: 'plus' }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    closeModal(scrollView: View): void {
        scrollView.closeModal();
    }

}
