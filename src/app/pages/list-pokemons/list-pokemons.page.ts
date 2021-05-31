import { Pokemon } from './../../models/pokemon';
import { ServicePokemonService } from './../../services/servicePokemon.service';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { error } from 'selenium-webdriver';
import { LoadingController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
})
export class ListPokemonsPage implements OnInit {
  public pokemons:Pokemon[];
  constructor(
    private ps:ServicePokemonService,
    public loadingController: LoadingController,
    private navCtrl:NavController,
    private navParams:NavParams) { 
    this.pokemons=[];
  }

  ngOnInit() {
    this.morePokemon();
  }

  async morePokemon($event=null){
    const promise=this.ps.getPokemons();
    if(promise){
        //Esto es para que solo se muestre la primera vez que se carga los siguentes 20 pokemones
        //Y es un componente llamado ion-loading
        let loading=null;
        if(!$event){
          loading = await this.loadingController.create({
            message: 'Cargando...',
            duration:2000
          });
          await loading.present();
        }
      promise.then((result:Pokemon[])=>{
        this.pokemons=this.pokemons.concat(result);
        this.pokemons=this.pokemons.sort((p1,p2)=>p1.id-p2.id);
        console.log(this.pokemons)

        if($event){
          $event.target.complete();
        }
        if(loading){
          loading.dismiss();
        }

      }).catch(error=>{console.error(error)
        if($event){
          $event.target.complete();
        }
        if(loading){
          loading.dismiss();
        }
      });
    }
  }

  goToDetail(pokemon:Pokemon){
    this.navParams.data.pokemon=pokemon;
    this.navCtrl.navigateForward('detail-pokemon')
  }

}
