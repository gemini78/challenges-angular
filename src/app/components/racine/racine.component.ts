import { Component, Input, OnInit } from '@angular/core';
import { Donkey } from 'src/app/models/donkey.model';
import { DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-racine',
  templateUrl: './racine.component.html',
  styleUrls: ['./racine.component.scss'],
})
export class RacineComponent implements OnInit {
  donkeysAvailable: Donkey[];
  donkeySelected: Donkey | undefined;

  constructor(private donkeyService: DonkeyService) {
    this.donkeysAvailable = this.donkeyService.donkeysAvailable;
  }

  ngOnInit(): void {}

  selectedDonkey(donkey: Donkey) {
    //console.log(donkey);
    this.donkeySelected = donkey;
    this.removeDonkeyofAvailableArray(donkey);
  }

  removeDonkeyofAvailableArray(donkey: Donkey) {
    this.donkeyService.removeDonkeyofAvailableArray(donkey);
  }
}
