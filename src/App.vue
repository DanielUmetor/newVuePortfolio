<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavbarView.vue';

export default {
  components: {
    NavBar
  }
};
</script>

<style>

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #0D0D0D; /* Jet Black background */
  color: #EEEEEE; /* Light Gray text */
}

#app {
  text-align: center;
}
</style>
