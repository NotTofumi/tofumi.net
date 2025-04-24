<script setup lang="ts">
</script>

<template>
  <v-app>

      <v-main class="background-overlay">
  <RouterView/>
    </v-main>
  </v-app>
</template>

<style>
.background-overlay{
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: url(./assets/bg.png); 
  background-size: 50%;
  background-repeat: repeat;
}

</style>

