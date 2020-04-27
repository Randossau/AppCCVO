import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Recommandations',
  moduleId: module.id,
  templateUrl: './recommandations.component.html',
  styleUrls: ['./recommandations.component.css']
})
export class RecommandationsComponent implements OnInit {

  constructor() { }

  dialogOpen = false;

  showDialog() {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  ngOnInit(): void {
  }

}
