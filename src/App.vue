<template>
  <div id="app">
    <div class="container">
        <header>
            <h1>Almacén central de productos - ACME SL</h1>
        </header>
        <app-nav></app-nav>
        <router-view></router-view>
    </div>

  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'

export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
