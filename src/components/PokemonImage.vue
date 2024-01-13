<template>
  <div class="pokemonContainer">
    <img v-bind:src="imagenFuente" alt="Not Found" />
    <img
      v-bind:src="imagenFuente"
      alt="Not Found"
      class="ocultar"
      v-if="!showPokemon"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style>
.ocultar {
  filter: brightness(0);
}
img {
  height: 200px;
  position: absolute;
  right: 38%;
}
.pokemonContainer {
  height: 200px;
}
</style>