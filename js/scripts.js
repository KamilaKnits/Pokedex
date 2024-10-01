let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: 'Bellsprout',
            height: '.7',
            type: ['grass', 'poison']
        },
        {
            name: 'Chansey',
            height: '1.1',
            type: ['normal']
        },
        {
            name: 'Sudowoodo',
            height: '1.2',
            type: ['rock']
        },
        {
            name: 'Mareep',
            height: '.6',
            type: ['electric']
        }

    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listOfPokemons = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener("click", function () {
            showDetails(pokemon.name);
        });
        listOfPokemons.appendChild(button);
        pokemonList.appendChild(listOfPokemons);
    }



    return {
        add: add,
        getAll: getAll,
        showDetails: showDetails,
        addListItem: addListItem


    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Piplup', height: '1.04', type: ['water'] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

