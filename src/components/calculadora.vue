<template>
  <div class="calculadora">
    <div class="display">
      <p>{{ lbl_prev }}</p>
      <h1>{{ lbl_res }}</h1>
    </div>
    <button @click="btn_AC()" class="span_2">C</button>
    <button @click="btn_borrar()">&#129136;</button>
    <button @click="btn_div()">&#247;</button>
    <button @click="btn_siete()">7</button>
    <button @click="btn_ocho()">8</button>
    <button @click="btn_nueve()">9</button>
    <button @click="btn_mult()">&#215;</button>
    <button @click="btn_cuatro()">4</button>
    <button @click="btn_cinco()">5</button>
    <button @click="btn_seis()">6</button>
    <button @click="btn_resta()">&#8722;</button>
    <button @click="btn_uno()">1</button>
    <button @click="btn_dos()">2</button>
    <button @click="btn_tres()">3</button>
    <button @click="btn_suma()">&#43;</button>
    <button @click="btn_cero()" class="span_2">0</button>
    <button @click="btn_punto()">&#46;</button>
    <button @click="resultado()">&#61;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lbl_prev: "",
      lbl_res: "",
    };
  },
  methods: {
    btn_uno() {
      this.lbl_prev = this.lbl_prev + " 1 ";
    },
    btn_dos() {
      this.lbl_prev = this.lbl_prev + " 2 ";
    },
    btn_tres() {
      this.lbl_prev = this.lbl_prev + " 3 ";
    },
    btn_cuatro() {
      this.lbl_prev = this.lbl_prev + " 4 ";
    },
    btn_cinco() {
      this.lbl_prev = this.lbl_prev + " 5 ";
    },
    btn_seis() {
      this.lbl_prev = this.lbl_prev + " 6 ";
    },
    btn_siete() {
      this.lbl_prev = this.lbl_prev + " 7 ";
    },
    btn_ocho() {
      this.lbl_prev = this.lbl_prev + " 8 ";
    },
    btn_nueve() {
      this.lbl_prev = this.lbl_prev + " 9 ";
    },
    btn_cero() {
      this.lbl_prev = this.lbl_prev + " 0 ";
    },
    btn_suma() {
      this.lbl_prev = this.lbl_prev + " + ";
    },
    btn_resta() {
      this.lbl_prev = this.lbl_prev + " - ";
    },
    btn_mult() {
      this.lbl_prev = this.lbl_prev + " * ";
    },
    btn_div() {
      this.lbl_prev = this.lbl_prev + " / ";
    },
    btn_AC() {
      this.lbl_prev = "";
    },
    btn_borrar() {
      this.lbl_prev = this.lbl_prev.substring(0, this.lbl_prev.length - 2);
    },
    btn_punto() {
      this.lbl_prev = this.lbl_prev + " . ";
    },
    resultado() {
      console.log(this.lbl_prev);
      let resultado = eval(this.lbl_prev.replace(/\s+/g, ""));
      console.log(resultado);
      this.lbl_res = resultado;
    },
  },
};
</script>

<style>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculadora{
    display: grid;
    /*grid-template-columns: 75px 75px 75px 75px;*/
    grid-template-columns: repeat(4, 75px);
    grid-template-rows: 150px repeat(5, 75px);
    background: #00916e;
    padding: 15px;
    border-radius: 32px;
    box-shadow: 15px 10px 5px 5px  #00000033;
}

.display{
    grid-column: span  4;
    padding: 15px;
    margin: 5px 10px 20px 10px;
    background: #363636;
    border-radius: 32px;
    text-align: right;
    box-shadow: 0px 0px 0px 10px #00000033;
    color: white;
}

button{
    cursor: pointer;
    margin: 5px;
    padding: 0;
    border-radius: 32px;
    border: none;
    background-color: #00916e;
    box-shadow: 5px 5px 10px 2px #00000040;
    font-size: 25px;
}

button:active{
    background: #006f54;
}

.span_2{
    grid-column: span 2;
}

body{
    background: #224870;
}

*{
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>