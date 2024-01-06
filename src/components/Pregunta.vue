<template>
  <img
    src="https://yesno.wtf/assets/no/28-e19b6f658f621f7c5980a33f8249a65d.gif"
    alt="No se puede visualizar la imagen"
  />
  <div class="dark"></div>
  <div class="container">
    <input v-model="pregunta" type="text" />
    <p>Recuerda que debes terminar con el signo de interrogación (?)</p>
    <h2>{{ pregunta }}</h2>
    <h1>Si, NO........</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "Voy a ser millonario",
    };
  },
  methods: {
    async consumirApi(){
        const {answer,image} = await fetch('https://yesno.wtf/api').then(respuesta=>respuesta.json())
        console.log(answer)
        console.log(image)
    },
  },
  watch: {
    pregunta(value, oldValue){
        console.log(value);
        console.log(oldValue);
        if(!value.includes('?')) return;
        //Consumo del API:
        this.consumirApi()
    }
  },
};
</script>

<style scoped>
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
.dark {
  background: rgba(0, 0, 0, 0.3);
}

input:focus {
  outline: none;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  text-align: center;
}
.container {
  position: relative;
}
p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 100px;
}
</style>