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
    settings: {nom:string, icon:string, type:string}[]  = [
        { nom: "  Pseudo", icon: String.fromCharCode(0xf2bd
            ), type: 'Compte' },
        { nom: "  Photo", icon: String.fromCharCode(0xf332
            ), type: 'Compte' },
        { nom: "  Mot de passe", icon: String.fromCharCode(0xf084
            ), type: 'Compte' },
        { nom: "  Email", icon: String.fromCharCode(0xf2b6
            ), type: 'Compte' }

    ];

    general: {nom:string, icon:string, type:string}[]  = [
        { nom: "  Unités de mesure", icon: String.fromCharCode(0xf07e
            ), type: 'General' },
        { nom: "  Notifications", icon: String.fromCharCode(0xf4a5
            ), type: 'General' },
        { nom: "  Langue", icon: String.fromCharCode(0xf1ab
            ), type: 'General' },
        { nom: "  Permissions", icon: String.fromCharCode(0xf4a5
            ), type: 'General' },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    closeModal(scrollView: View): void {
        scrollView.closeModal();
    }

}
