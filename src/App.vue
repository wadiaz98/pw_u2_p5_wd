<template>
  <Calculadora></Calculadora>
</template>

<script>
import Calculadora from "./components/calculadora.vue";

export default {
  name: "App",
  components: {
    Calculadora,
  },
  methods: {
    calcularValor() {
      return 5 + 5 + 10;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
