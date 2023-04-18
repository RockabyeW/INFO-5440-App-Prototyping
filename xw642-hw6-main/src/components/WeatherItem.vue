<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  weather: {
    type: String,
    required: true
  },
  low: {
    type: Number,
    required: true
  },
  high: {
    type: Number,
    required: true
  },
})
</script>

<template>
  <div class="item">
    <p class="title">{{ title }}</p>
    <p class="weather">{{ weather }}</p>
    <p class="temp">Low: {{ low }} High: {{ high }}</p>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 10px;
  display: inline-block;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  margin: auto auto 30px;

}

.title {
  font-size: 20px;
  font-weight: 400;
}

.weather {
  font-size: 50px;
  color: black;
}

.temp {
  font-size: 40px;
  color: #181818;
}
</style>
