import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
})
export class DetailPokemonPage implements OnInit {
  public pokemon:Pokemon;
  constructor(
    private navParams:NavParams,
    private navCtrl:NavController,
    private vibracion: Vibration
  ) { 
    this.pokemon =this.navParams.data.pokemon;
    console.log(this.pokemon);
  }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.pop();
  }
  vibrar(){
    this.vibracion.vibrate([2000,1000,2000]);
  }
}
