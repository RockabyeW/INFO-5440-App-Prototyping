<script>
    export default{
        props:{
            contrast:{
                type:Number,
                required:true
            }
        },
    }
</script>

<template>
    <div class="container">
        <div class="contrastbar">
            <div class="rate" :style="{width: ((this.contrast/21*100) + '%')}"></div>
        </div>
        <div class="aa"/>
        <span class="AA">AA</span>
        <div class="aaa"/>
        <span class="AAA">AAA</span>
    </div>
</template>

<style>
    .container {
      padding: 60px 0 0 0;
      height: 120px;
      width: 100%;
      position: relative;
      border-radius: 20px;
    }
    .contrastbar {
      width: 100%;
      height: 30px;
      background-color: grey;
      border-radius: 0px;
      position: relative;
      border:3px solid;
      border-radius: 20px
    }
    .rate {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: lightblue;
      border-radius: 20px;
      width: 50%;

    }

    .aa {
      width: 3px;
      height: 25px;
      background:black;
      position: absolute;
      top:63px;
      left:21.43%
    }

    .AA {
      position: absolute;
      top: 30px;
      font-size: 20px;
      color: Black;
      font-weight:bold;
      left: 20%
    }
    .aaa {
      width: 3px;
      height: 25px;
      background:black;
      position: absolute;
      top:63px;
      left:33.33%
    }

    .AAA {
      position: absolute;
      top: 30px;
      font-size: 20px;
      color: Black;
      font-weight:bold;
      left: 31%
    }
</style>
