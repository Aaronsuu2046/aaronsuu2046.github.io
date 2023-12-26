<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view/>
</template>

<script>
import fetchJson from '@/utilitys/fetch-json.js';
export default {
  name: 'App',
};
</script>
<style lang="scss">
.navbar {
  background-color: #57B9D9; 
  height: 10vh; 
  width: 100%; 
  margin: 0;
  .navbar-brand {
    img{
        max-width: 70%
    }
  }
  img {
    max-width: 80%;
  }
  
}
</style>