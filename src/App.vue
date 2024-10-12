<script setup lang="ts">
</script>

<template>
  <v-app>
    <v-app-bar 
    :elevation="3"
    class="rounded"
    style="
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    "
    >
    <v-app-bar-title style="color: #211103;" > Tofumi.net </v-app-bar-title>
    </v-app-bar>
    <v-main>
  <RouterView/>
  </v-main>

  </v-app>
</template>

<style>


</style>

