<script setup lang="ts">
import HelloWorld from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <body>
    
  <Navbar/>
  <HelloWorld/>
  <Footer/>
  </body>
</template>

<style scoped>
body{
  background-color: #fdfdfd;
  background-image: url(./assets/Hintergrund.png.png);
  background-size: contain;
  flex-wrap: wrap;
  background-repeat: no-repeat;
}
</style>
