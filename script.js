let opcion = parseInt(prompt("Escribe el número del ejercicio que quieres desarrollar (Del 1 al 3)"))
if (opcion === 1) {
    for (let i = 0; i <= 50; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }        
    }
}else if (opcion === 2) {
    const pokemon = ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino',
    'nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb']
    let number = parseInt(prompt("Ingresa un número del 1 al 100"));
    for (let i = 0; i < number; i++) {
        if (i % 5 === 0) {
            console.log(pokemon[i]);
        }        
    }
}else if (opcion === 3) {
    const arreglo = [4,"dos",8,"tres",5,9,1,"cero"];
    for (let i = 0; i < arreglo.length; i++) {
        if (!isNaN(arreglo[i])) {
            console.log(arreglo[i]);
        }        
    }
}else{
    console.log("Ingresa un dato válido");
}