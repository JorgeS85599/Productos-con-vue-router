<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" id="showProd" to="/">Ver productos</router-link>
        <router-link class="nav-item nav-link" id="addProd" to="/newProduct">Añadir producto</router-link>
        <router-link class="nav-item nav-link" id="about" to="/about">Sobre nosotros</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-nav",
};
</script>