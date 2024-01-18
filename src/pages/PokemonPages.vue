<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImage :pokemonId="59" :showPokemon="true" />
  <PokemonOptions />
</template>
 
<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokeIdFacade from "../helpers/pokemonHelper";
 
export default {
  components: { PokemonImage, PokemonOptions },
 
  mounted() {
    console.log("Se monto el componente ");
    this.cargaInicial()
  },
  methods: {
    async cargaInicial() {
      const pokeArray = await getPokeIdFacade();
      console.log("desde componente");
      console.log(pokeArray);
    },
  },
};
</script>
 
<style>
</style>