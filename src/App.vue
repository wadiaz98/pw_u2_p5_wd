<template>
  <Pokemon/>
</template>

<script>
import Pokemon from "./pages/PokemonPages.vue";

export default {
  name: "App",
  components: {
    Pokemon,
  },
  methods: {
  
  },
};
</script>

<style>
#app {

  text-align: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
