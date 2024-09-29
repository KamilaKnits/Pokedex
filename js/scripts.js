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
    
    function add(pokemon){
      pokemonList.push(pokemon);
    }
    
    function getAll(){
       return pokemonList;
     }
   
    return {
      add: add,
      getAll: getAll
      
    };
  })();
  
  let pokemons = pokemonRepository.getAll();
  pokemons.forEach( pokemon => {
   document.write("<p>" + pokemon.name + "  ( height: " + " " + pokemon.height + ")" +"</p>" );
    })
  pokemonRepository.add({name: 'Piplup',height: '1.04',type: ['water']});
  console.log(pokemonRepository.getAll());
  
  