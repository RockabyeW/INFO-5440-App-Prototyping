<script>


  export default{
    data:function(){return{}},
    props:{
      modelvalue:{
        type: String,
        required: true
      },
      backorfore:{
        type: String,
        required: true
      }
    },

    methods:{
      inputcolor(event){
        this.$emit("updatevalue", event.target.value)
      }
    }
  }
</script>


<template>
  <div class="pickcolor">
    <input class="inputt" type="color" :value="modelvalue" @input="inputcolor">
    <span class="backorfore">{{ backorfore }}</span>
    <span class="colorbox" :style="{backgroundColor: modelvalue}" ></span>
    <span class="colorname">{{ this.modelvalue }}</span>
  </div>
</template>

<style>
  .backorfore{
    margin-left: 3%;
    font-size: 20px;
    right:1%
  }
  .pickcolor {
    width: 250px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: white;
    /* margin: auto 10px; */
    border-radius: 10px;
    border: 3px solid gray;
  }
  .colorbox {
    margin-left: 3%;
    width: 20px;
    height: 20px;
    border-radius: 5px;

  }

  .colorname {
    margin-left: 3%;
    font-size: 15px;
    font-weight: 500;
    width: 80px;
    left:1%
  }
  .inputt {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }
</style>
