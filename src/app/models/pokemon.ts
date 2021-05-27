export class Pokemon {
    id:number;
    name:string;
    type:string;
    type2:string;
    sprite:string;
    height:number;
    weight:number;
    abilities:any[];
    stats:any[];


    hasHiddenAbility(){
        return this.abilities.find(ab=>ab.is_hidden);
    }

    getHiddenAbility(){
        const ability=this.abilities.find(ab=>ab.is_hidden);
        return ability.ability.name;
    }
    getAbilities(){
        const abilities=this.abilities.filter(ab=>!ab.is_hidden);
        return abilities;
    }

    getStat(nameStat:string){
        const statFound=this.stats.find(s=>s.stat.name===nameStat);
        return statFound.base_stat;
    }

    getHeightToMetres(){
        return this.height/10
    }
    getWieghttToKg(){
        return this.weight/10
    }
}
