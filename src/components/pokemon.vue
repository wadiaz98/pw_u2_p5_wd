<template>
  <div class="container">
    <div class="IngId">
      <h1>Ingrese el número del pokemon</h1>
      <label for="idNUmero">Número:</label>
      <input v-on:keypress.enter type="text" id="idNUmero" />
    </div>
    <div class="formulario">
      <form class="form">
        <h2>POKEMON</h2>
        <p type="Name:">
          <input type="text" />
        </p>
        <p type="Weight:">
          <input type="text" />
        </p>
        <p type="Experiencia base:">
          <input type="text" />
        </p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async consumirApi() {
      this.respuesta = "Pensando."
      this.respuesta = "Pensando.."
      const poke = await fetch(this.contruirURLAPI(this.id)).then(
        (respuesta) => respuesta.json()
      );
      console.log(poke);
    },
    contruirURLAPI(id){
      return "https://pokeapi.co/api/v2/pokemon/" + id
    },
    pesionandoTecla(event){
      if(event.charCode ===13){
        this.agregarEstudiante()
        this.consumirApi();
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
}
.formulario {
  width: 340px;
  height: 300px;
  justify-content: center;
  border-radius: 8px;
  padding: 20px 30px;
  margin-left: 305px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 16px;
  color: #5a5a5a;
}
</style>