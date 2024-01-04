<template>
  <div>
    <h2>{{titulo}}</h2>
    <p>{{counter}} <sup>2</sup> = {{obtenerCuadradoComputada}}</p>
    <p>{{counter}} <sup>2</sup> = {{obtenerCuadradoComputada}}</p>
    <p>{{counter}} <sup>2</sup> = {{obtenerCuadradoComputada}}</p>
  </div>
</template>

<script>
export default {

    props:["titulo"],

    data(){
        return{
            counter: 5,
        }
    },
    methods:{
        obtenerCuadrado(){
            console.log("Se calcula el cuadrado")
            return this.counter*this.counter;
        }
    },
    computed:{
        obtenerCuadradoComputada(){
            console.log("Se calcula el cuadrado computado")
            return this.counter*this.counter;
        }
    },
};
</script>

<style>
</style>