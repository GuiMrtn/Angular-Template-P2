import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  //Ici, on a un minuscule composant qui contient seulement un titre h1. Pour les gros projet, on évitera tjs d'écrire du html ici, pour des raisons de lecture et de maintenance du code. C'est la raison pour laquelle on séparera tjs les choses.
  //template: `<h1>Liste de Pokémons</h1>`

  //Ici, on va ajouter un fichier app.component.html et on va le déclarer dans le templateUrl
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  //Ici on crée une variable pokemonSelected, qui contiendra le pokemon selectionné par un utilisateur. Eelle sera de type pokemon car on veut un pokemon. On ajoute le type undefined dans le cas où le pokémon séléctionné n'existe pas
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  //Ici on change le contrat d'interface car on souhaite remonter un évènement. Si l'utilisateur tape 3, comment on récupère la data. 

  //selectedPokemon(event : MouseEvent) {

    //On va stocker dans une variable l'index saisi par l'utilisateur. Dans le template on a un $event, donc un evènement, et on va devoir le caster. Si on fait juste un event.target, on ne récupèrera pas grand chose, sauf un objet de type event.target. C'est pour cela qu'on utilise HTMLInputElement et le .value est pour saisir la valeur saisie par l'utilisateur. Le + est utilisé pour convertir value en un nombre. En effet, index est de type number et value de type string (par défaut)

    // const index: number = +(event.target as HTMLInputElement).value
    //Ici, on prend la liste de pokémon (qui est un tableau) et on lui passe en paramètre la const index qui représente ce qui est saisi par l'utilisateur. Le .name est pour voir le nom du pokémon et non un objet en entier. 

    //console.log(`Vous avez cliqué sur ${this.pokemonList[index].name}`);     
  //}

  //Ici on n'a plus besoin de récupérer un évènement, mais un pokemonId de type string car la value est de type string
  selectedPokemon(pokemonId: string) {
    //PokemondId va être transformé en un nombre grace à l'opérateur +. 

    // const id = +pokemonId;

    // Ici quand l'utilisateur tape un chiffre, on ne veut pas lui retourner un pokemon à l'index, mais le pokémon qui a l'identifiant. Quand on est dans un tableau de base 0, on pourrait faire ceci : 

    // const index = id + 1;

    // Mais cette solution est technique. On voudrait aller dans notre tableau chercher le pokémon qui a l'identifiant pour ensuite l'afficher. Donc on va faire ceci. On va chercher le pokemon de type Pokemon dont on a besoin. Pour cela on va utiliser la méthode find(). Donc on reprend la liste des pokémons. Dans find(), on va passer une fonction pour vérifier un prédicat. Concrètement, on cherche un pokemon qui a comme identifiant pokemonId. En gros l'id du pokemon (pokemon.id) doit être égal au pokemonId définit ci-dessus
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)

    //Puis on affiche le nom du pokémon trouvé. Le poblème est que dans certains cas, le pokémon ne sera pas trouvé (ex si l'utilisateur cherche un pokémon avec l'id 15). Donc on va créer une condition. Si on a un pokémon, on exécute le code. Le pokémon trouvé sera stocké dans la variable pokémonSelected, cette variable affichant le résultat dans le template
    if(pokemon) {
      console.log(`Vous avez demandé le ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      //On lève une erreur. Si le pokémon est undefined, on n'affichera rien dans le template
      console.log(`Vous avez demandé un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }       
  }
}
