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
    <div style="width: 100%; text-align: center; color: #170a01;">
        Tofumi.net
    </div>
    </v-app-bar>
    <v-main>
  <RouterView/>
  </v-main>

  </v-app>
</template>

<style>


</style>

