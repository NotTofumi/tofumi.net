<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <body>
    
  <Navbar/>
  <RouterView/>
  <Footer/>

  </body>
</template>

<style scoped>

@font-face {
  font-family: "open-sans";
  src: url("./assets/fonts/OpenSans-Regular.woff") format("woff");
}

html, body{
  font-family: "open-sans";
}

body{
  background-color: #fdfdfd;
  background-image: url(./assets/Hintergrund_Footer.png);
  background-size: contain;
  flex-wrap: wrap;
  background-repeat: no-repeat;
}
</style>
