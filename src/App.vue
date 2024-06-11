<template>
  <div>
    <div class="menu">
      <router-link to="/">home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/info">info</router-link>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .menu{
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;

  }
  .menu a{
    color: white;
    padding: 5px;
    cursor: pointer;
  }
</style>
