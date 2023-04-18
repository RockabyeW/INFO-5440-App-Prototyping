<template>
  <div class="about">
    <h1>This is an about page</h1>

    <img alt="test image" :src="`${baseDir}images/test.png`">
  </div>
</template>

<style>
img {
  display: block;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
}
</style>
