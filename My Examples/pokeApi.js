window.onload = () => {
    document.getElementById('getPokemonButton').addEventListener('click', getPokemon);
}

function getPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    const name = document.getElementById('pokemonName').value.toLowerCase();

    // 1. Instantiated a new XMLHttpRequest Object
    let xhr = new XMLHttpRequest();

    // Added a function the xhr.onreadystatechange listener
    xhr.onreadystatechange = function() {

        // 5. Provide logic to handle the request
        if (xhr.readyState < 4) {
            document.getElementById('loading').textContent = "Loading...";
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('loading').textContent = "";
            let pokemon = JSON.parse(xhr.responseText);
            console.log(pokemon);
            let name = pokemon.name;
            let pokemonId = pokemon.id;
            let types = pokemon.types;
            let primaryType;
            let secondaryType;
            if (types.length > 1) {
                primaryType = types[0].type.name;
                secondaryType = types[1].type.name;
            } else {
                primaryType = types[0].type.name;
                secondaryType = "N/A";
            }
            let sprite = pokemon.sprites.front_default;
            document.getElementById('name').textContent = name;
            document.getElementById('pokemonId').textContent = pokemonId;
            document.getElementById('evolvesTo').textContent = evolvesTo;
            document.getElementById('primaryType').textContent = primaryType;
            document.getElementById('secondaryType').textContent = secondaryType;
            document.getElementById('pokemonImg').setAttribute('src', sprite);
            document.getElementById('pokeCard').style.display = 'inline';
        }
    }

    // 3. Opened a request to the url 
    xhr.open('GET', url + name);

    // 4. Send the request
    xhr.send();
}