import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";
import { DialogComponent } from './dialog/dialog.component';


@Component({
    selector: 'Incidents',
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: './incidents.component.html',
    styleUrls: ['./incidents.component.css']
})

export class IncidentsComponent implements OnInit {

    constructor(private page: Page, private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;

    }
    showModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            context: {}
        };
        this.modalService.showModal(DialogComponent, options);
    }
}
