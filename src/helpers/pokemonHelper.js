const obtenerIdPokemon = () => {
  const pokemon1 = obtenerAleatorio(600);
  const pokemon2 = obtenerAleatorio(600);
  const pokemon3 = obtenerAleatorio(600);
  const pokemon4 = obtenerAleatorio(600);
  const pokemonArray = [pokemon1, pokemon2, pokemon3, pokemon4];
  console.log(pokemonArray);
};

const obtenerNombresPokemon=(arreglo) =>{
    const nombre1 = consumirApi(arreglo[0]);
    const nombre2 = consumirApi(arreglo[1]);
    const nombre3 = consumirApi(arreglo[2]);
    const nombre4 = consumirApi(arreglo[3]);
}

function consumirApi(id){
return "nombre";
}

const obtenerIdPokemonFachada = () => {
  obtenerIdPokemon();
};

function obtenerAleatorio(max) {
  return Math.floor(Math.random() * max) + 1;
}

export default obtenerIdPokemonFachada;
