<script setup>

</script>

<template>
  <main>
    <div class="home">
      <header>
        <arrow-left-outlined style="font-size: 40px" />
        Weather
      </header>
      <div>
        <b-row>
          <a>
            <b-col lg="4" class="pb-2">
              <b-button pill variant="outline-success" @click="$router.push('/city/washington')">Washington,DC
              </b-button>
            </b-col>
          </a>
        </b-row>
      </div>
      <div>
        <b-row>
          <a>
            <b-button pill variant="outline-success" @click="$router.push('/city/boston')">Boston,MA
            </b-button>
          </a>
        </b-row>
      </div>
      <div>
        <b-row>
          <a>
            <b-button pill variant="outline-success" @click="$router.push('/city/chicago')">Chicago,IL
            </b-button>
          </a>
        </b-row>
      </div>
      <div>
        <b-row>
          <a>
            <b-button pill variant="outline-success" @click="$router.push('/city/la')">Los Angels
            </b-button>
          </a>
        </b-row>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
header {
  margin-top: 10px;
}

b-row {
  margin-bottom: 20px;
}

Button {
  width: 500px;
  height: 200px;
  margin: 10 auto;
  border: 1px;
}
</style>

