<script setup>

import {ref} from "vue";
import {getCities, getWeather} from "../mock/dataService";
import {useRoute, useRouter} from "vue-router";
// import {ArrowLeftOutlined} from '@ant-design/icons-vue';
import WeatherItem from "../components/WeatherItem.vue";

const cityName = ref('');
const data = ref([]);

const router = useRouter();
const route = useRoute();

// set city id name
const cities = getCities();
const cityId = route.params.cityId;
cityName.value = cities.find(it => it.cityId === cityId).name;

// set weather
data.value = getWeather(cityId);

console.log(getWeather(cityId));

function goBack() {
  router.back()
}

</script>

<template>
  <header>
    <button style="font-size: 40px" @click="goBack">Back</button>
    <h1>{{ cityName }}</h1>
    <div/>
  </header>
  <main>
    <b-card :img-src="data.today.img"></b-card>
    <WeatherItem v-if="data.today" title="Today" :weather="data.today.weather" :high="data.today.high" :low="data.today.low"/>
    <!-- <WeatherItem v-if="data.tomorrow" title="Tomorrow" :weather="data.tomorrow.weather" :high="data.tomorrow.high" :low="data.tomorrow.low"/>
    <WeatherItem v-if="data.in2days" title="In 2 Days" :weather="data.in2days.weather" :high="data.in2days.high" :low="data.in2days.low"/> -->

  </main>
</template>

<style scoped>
header {
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
