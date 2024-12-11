const pokemones=[{
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpAttack: 65,
      SpDefense: 65,
      Speed: 45
    }
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre"
    },
    type: [
      "Grass",
      "Poison"
    ],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      SpAttack: 80,
      SpDefense: 80,
      Speed: 60
    }
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre"
    },
    type: [
      "Grass",
      "Poison"
    ],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      SpAttack: 100,
      SpDefense: 100,
      Speed: 80
    }
  },
  {
    id: 4,
    name: {
      english: "Charmander",
      japanese: "ヒトカゲ",
      chinese: "小火龙",
      french: "Salamèche"
    },
    type: [
      "Fire"
    ],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      SpAttack: 60,
      SpDefense: 50,
      Speed: 65
    }
  },
  {
    id: 5,
    name: {
      english: "Charmeleon",
      japanese: "リザード",
      chinese: "火恐龙",
      french: "Reptincel"
    },
    type: [
      "Fire"
    ],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      SpAttack: 80,
      SpDefense: 65,
      Speed: 80
    }
  },
  {
    id: 6,
    name: {
      english: "Charizard",
      japanese: "リザードン",
      chinese: "喷火龙",
      french: "Dracaufeu"
    },
    type: [
      "Fire",
      "Flying"
    ],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      SpAttack: 109,
      SpDefense: 85,
      Speed: 100
    }
  },
  {
    id: 7,
    name: {
      english: "Squirtle",
      japanese: "ゼニガメ",
      chinese: "杰尼龟",
      french: "Carapuce"
    },
    type: [
      "Water"
    ],
    base: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      SpAttack: 50,
      SpDefense: 64,
      Speed: 43
    }
  },
  {
    id: 8,
    name: {
      english: "Wartortle",
      japanese: "カメール",
      chinese: "卡咪龟",
      french: "Carabaffe"
    },
    type: [
      "Water"
    ],
    base: {
      HP: 59,
      Attack: 63,
      Defense: 80,
      SpAttack: 65,
      SpDefense: 80,
      Speed: 58
    }
  },
  {
    id: 9,
    name: {
      english: "Blastoise",
      japanese: "カメックス",
      chinese: "水箭龟",
      french: "Tortank"
    },
    type: [
      "Water"
    ],
    base: {
      HP: 79,
      Attack: 83,
      Defense: 100,
      SpAttack: 85,
      SpDefense: 105,
      Speed: 78
    }
  },
  {
    id: 10,
    name: {
      english: "Caterpie",
      japanese: "キャタピー",
      chinese: "绿毛虫",
      french: "Chenipan"
    },
    type: [
      "Bug"
    ],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      SpAttack: 20,
      SpDefense: 20,
      Speed: 45
    }
  }]


// ==================== Punto 1  ====================
function DosPokemon(pokemon1, pokemon2){
    var ran =  Math.floor(Math.random(0,1) * 2);
    let hp1 = 0;
    let hp2 = 0;

    if (ran==0) {
      for (let i=0;i<pokemones.length;i++){ // i guarda la posición del Array según el segun Pokémon ingresado
        if ((pokemon2 == pokemones[i].name.english)||(pokemon2 == pokemones[i].name.japanese)||(pokemon2 == pokemones[i].name.chinese)||(pokemon2 == pokemones[i].name.french)){
            for (let j=0;j<pokemones.length;j++){ // j guarda la posición del Array según el segundo Pokémon ingresado
                if ((pokemon1 == pokemones[j].name.english)||(pokemon1 == pokemones[j].name.japanese)||(pokemon1 == pokemones[j].name.chinese)||(pokemon1 == pokemones[j].name.french)){
                    hp1 = pokemones[i].base.HP - pokemones[j].base.Attack; //hp1 guarda el resultado de la resta del HP del primer Pokèmon menos el Ataque del segundo
                    hp2 = pokemones[j].base.HP - pokemones[i].base.Attack; //hp2 guarda el resultado de la resta del HP del segundo Pokèmon menos el Ataque del primero
                    if (hp1 < hp2){
                        console.log(pokemon2 + " " + "Serìa derrotado primero");
                        console.log(pokemon2 + " " + "arranca primero");
                    }else if (hp1 > hp2){
                        console.log(pokemon1 + " " + "Serìa derrotado primero");
                        console.log(pokemon2 + " " + "arranca primero");
                    }else{
                        console.log("Ambos Pokèmon serìan derrotados al mismo tiempo");
                    }
                }
            }
        }
    }
    }
    if (ran==1) {
      for (let i=0;i<pokemones.length;i++){ // i guarda la posición del Array según el primer Pokémon ingresado
        if ((pokemon1 == pokemones[i].name.english)||(pokemon1 == pokemones[i].name.japanese)||(pokemon1 == pokemones[i].name.chinese)||(pokemon1 == pokemones[i].name.french)){
            for (let j=0;j<pokemones.length;j++){ // j guarda la posición del Array según el segundo Pokémon ingresado
                if ((pokemon2 == pokemones[j].name.english)||(pokemon2 == pokemones[j].name.japanese)||(pokemon2 == pokemones[j].name.chinese)||(pokemon2 == pokemones[j].name.french)){
                    hp1 = pokemones[i].base.HP - pokemones[j].base.Attack; //hp1 guarda el resultado de la resta del HP del primer Pokèmon menos el Ataque del segundo
                    hp2 = pokemones[j].base.HP - pokemones[i].base.Attack; //hp2 guarda el resultado de la resta del HP del segundo Pokèmon menos el Ataque del primero
                    if (hp1 < hp2){
                        console.log(pokemon1 + " " + "Serìa derrotado primero");
                        console.log(pokemon1 + " " + "arranca primero");
                    }else if (hp1 > hp2){
                        console.log(pokemon2 + " " + "Serìa derrotado primero");
                        console.log(pokemon1 + " " + "arranca primero");
                    }else{
                        console.log("Ambos Pokèmon serìan derrotados al mismo tiempo");
                    }
                }
            }
        }
    }
    }
}
DosPokemon("Charmander", "Squirtle");
console.log("====================");
//==================== Punto 2  ====================
function ClasificarTipos(){
    let Grass =[];
    let Fire =[];
    let Water =[];
    let Bug =[];
    for (let i=0;i<pokemones.length;i++){
        if (pokemones[i].type[0]== "Grass"){
            Grass.push(pokemones[i].name.english);
        }else if (pokemones[i].type[0]== "Fire"){
            Fire.push(pokemones[i].name.english);
        }else if (pokemones[i].type[0]== "Water"){
            Water.push(pokemones[i].name.english);
        }else if (pokemones[i].type[0]== "Bug"){
            Bug.push(pokemones[i].name.english);
        }
    }
    console.log("Pokèmon de tipo planta: " + Grass);
    console.log("Pokèmon de tipo fuego: " + Fire);
    console.log("Pokèmon de tipo agua: " + Water);
    console.log("Pokèmon de tipo bicho: " + Bug);

}
ClasificarTipos();
console.log("====================");


//==================== Punto 3  ====================
function PokemonDash(pokemon1,pokemon2,pokemon3,pokemon4){
  
  let pokemons = [pokemon1, pokemon2, pokemon3, pokemon4];
  let speeds = [];
  let newPokemons = [];

  let metas = [150, 150, 150, 150];
  let winner = "";
  let won = false;

  pokemones.forEach(({name:{english}, base:{Speed}}) => {
    pokemons.forEach((pok) => {
      if(pok == english){
        console.log(`Velocidad de ${pok}: ${Speed}`);
        speeds.push(Speed);
        newPokemons.push(pok);
      }
    })
  })

  let i = 0;
  while(won == false){
    metas[i] = metas[i] - speeds[i];
    if(metas[i] <= 0){
      winner = newPokemons[i];
      won = true;
    }

    i++;
    if(i > 3){ i = 0; }
  }

  console.log("El ganador es"+" "+ winner);

}

PokemonDash("Charmander", "Squirtle", "Bulbasaur", "Caterpie");
console.log("====================");
