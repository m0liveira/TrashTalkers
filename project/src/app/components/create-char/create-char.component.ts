import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.css']
})
export class CreateCharComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

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

  giveName(name: HTMLInputElement){
    name.value != "" ? this.playerService.player.name = name.value : this.playerService.player.name = "Rex";

    console.log(this.playerService.player);
  }

}
