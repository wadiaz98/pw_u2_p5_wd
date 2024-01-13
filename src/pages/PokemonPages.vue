<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImage :pokemonId="2" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonImage from "../components/PokemonImage.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import ObtenerPokemonIdFachada from "../helpers/pokemonHelper";
ObtenerPokemonIdFachada()
export default {
  components: {
    PokemonImage,
    PokemonOptions,
    ObtenerPokemonIdFachada,
  },
};
</script>
    
<style>
</style>