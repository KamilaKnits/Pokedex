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
    }, {
        name: 'Sudowoodo',
        height: '1.2',
        type: ['rock']
    }, {
        name: 'Mareep',
        height: '.6',
        type: ['electric']
    }

];



for (let i=0; i < pokemonList.length; i++){
    let pokemon = pokemonList[i];
    document.write("<br>" + pokemon.name + " (height:" + " " + pokemon.height + ")" );
    if (pokemon.height < .7){
      document.write(" - Wow that's tiny!");
    }
  };

