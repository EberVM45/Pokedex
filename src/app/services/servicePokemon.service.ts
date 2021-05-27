import { async } from '@angular/core/testing';
import { Pokemon } from '../models/pokemon';
import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePokemonService {
private nextURL:string;
constructor(
  private http:HTTP
) { 
  this.nextURL="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
}

getPokemons(){
  const url=this.nextURL;
  if(url){
    return this.http.get(url,{},{}).then(async (response)=>{
      let pokemons=[];
      console.log(response);
      if(response.data){
        const dataParsed=JSON.parse(response.data);
        const results=dataParsed.results;
        this.nextURL=dataParsed.next;

        for (let index = 0; index < results.length; index++) {
          const pokemon = results[index];
          const urlPokemon=pokemon.url;
          await this.http.get(urlPokemon,{},{}).then(pok=>{
            const pokeParse=JSON.parse(pok.data);
            console.log(pokeParse)
            const pokeObj=new Pokemon;
            pokeObj.id=pokeParse.order;
            pokeObj.name=pokeParse.name;
            pokeObj.type=pokeParse.types[0].type.name;
            if(pokeParse.types[1]){
              pokeObj.type2=pokeParse.types[1].type.name;
            }
            pokeObj.sprite=pokeParse.sprites.front_default;
            pokeObj.weight=pokeParse.weight;
            pokeObj.height=pokeParse.height;
            pokeObj.stats=pokeParse.stats;
            pokeObj.abilities=pokeParse.abilities;


            pokemons.push(pokeObj);

          }).catch(error=>console.error(error));
        }
        return pokemons;
      }
    }).catch(error=>console.error(error));
  }
  return null;
}

}
