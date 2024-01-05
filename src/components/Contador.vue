<template>
  <div>
    <h2>{{ titulo }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputada }}</p>
    <button @click="sumarCounter()">+</button>
    <button @click="restarCounter()">-</button>
  </div>
</template>

<script>
export default {
  /*props:["titulo","valor"],*/
  props: {
    titulo: String,
    valor: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        return value > 0;
      },
    },
  },

  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Se calcula el cuadrado");
      return this.counter * this.counter;
    },
    sumarCounter() {
      this.counter++;
    },
    restarCounter() {
      this.counter--;
    },
  },
  computed: {
    obtenerCuadradoComputada() {
      console.log("Se calcula el cuadrado computado");
      return this.counter * this.counter;
    },
  },
};
</script>

<style scoped>
button {
  background: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;
  font-weight: bold;
}

button:hover {
  background: #5aa67b;
}

h2{
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    font-weight: bold;
    color: rgb(185, 114, 252);
}
p{
    font-weight: bold;
}
</style>