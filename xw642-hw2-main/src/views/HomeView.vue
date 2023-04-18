<script>
 import ColorInput from "../components/ColorInput.vue";
 import { hex } from "wcag-contrast";
 import ContrastBar from "../components/ContrastBar.vue";


 export default{
  components: {

    ContrastBar,
    ColorInput,
  },
  data:function(){
    return{
      foregroundcolor: '#000000',
      backgroundcolor: '#55bed3',
      contrastvalue: 9.69,
    }
  },
  methods:{
    calculate(){
      this.contrastvalue = hex(this.foregroundcolor, this.backgroundcolor).toFixed(2);
    },
    changeF(color){
      this.foregroundcolor=color;
      this.calculate();
    },
    changeB(color){
      this.backgroundcolor=color;
      this.calculate();
    },
    swap() {
      let tmp = this.foregroundcolor;
      this.foregroundcolor = this.backgroundcolor;
      this.backgroundcolor = tmp;
      this.calculate();
    },
  },
 }
</script>

<template>
  <div class="App">
    <div class="header">
      <ColorInput class="subDiv" :modelvalue="foregroundcolor" @updatevalue="changeF" backorfore="Fore"/>
      <button class="swap subDiv" @click="swap"><h2>Swap</h2></button>
      <ColorInput  class="subDiv" :modelvalue="backgroundcolor" @updatevalue="changeB" backorfore="Back"/>
    </div>
    <div class="colorshowed" :style="{backgroundColor: backgroundcolor}" @updatevalue="changeB">
        <h1 class="colortext" :style="{color: foregroundcolor}" @updatevalue="changeF">Color Showed</h1>
    </div>
    <div class="RatioResult" >
      <h1 class="Number">Contrast Ratio  <br/>{{this.contrastvalue}} : 1</h1>
    </div>
    <ContrastBar :contrast="contrastvalue"/>
  </div>

</template>

<style>
.App{
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
}
.subDiv {
  display: flex;
  flex: 1;
}
.swap {
  width: 250px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: white;
    margin: auto 10px;
    border-radius: 10px;
    border: 3px solid gray;
}
.header {
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;
}

.RatioResult{

  margin-top:20px;
  border: solid black;
  border-radius: 10px;
  width:100%

}
.Number {
  font-size:35px;
  font-weight:bold;
  text-align:center;
}
.colortext{
    font-size: 50px;
    font-weight:bold;
    text-align: center;
    margin-top: 120px;
}
.colorshowed{
    height: 300px;
    margin-top:20px;
    border: solid black;
    border-radius: 10px;
    width:100%;
}
</style>
