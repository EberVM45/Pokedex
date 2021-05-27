import { Pokemon } from './../../models/pokemon';
import { ServicePokemonService } from './../../services/servicePokemon.service';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
})
export class ListPokemonsPage implements OnInit {
  public pokemons:Pokemon[];
  constructor(private ps:ServicePokemonService) { 
    this.pokemons=[];
  }

  ngOnInit() {
    this.morePokemon();
  }

  morePokemon(){
    const promise=this.ps.getPokemons();
    if(promise){
      promise.then((result:Pokemon[])=>{
        this.pokemons=this.pokemons.concat(result);
        this.pokemons=this.pokemons.sort((p1,p2)=>p1.id-p2.id);
        console.log(this.pokemons)
      }).catch(error=>console.error(error));
    }
  }

}
