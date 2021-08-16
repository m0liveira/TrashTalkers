import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  player: any = {
    name: "",
    wallet: "5000",
    atk : {
      atk1: "Your mum stinks",
      atk2: "You are colorblind",
      atk3: "-",
      atk4: "-"
    }
  }
}
