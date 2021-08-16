import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeSky();
  }

  // vars
  isNight: boolean = false;

  // change sky color
  changeSky() {
    setInterval(() => {
        this.isNight ? this.isNight = false : this.isNight = true;
    }, 5000);
  }
}
