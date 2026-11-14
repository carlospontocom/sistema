<script setup>
import './style.css';
import NavBar from '../src/components/layout/NavBar.vue';
import FooTer from '../src/components/layout/FooTer.vue';
import { useRoute } from 'vue-router'; // 1. Importe o useRoute
const route = useRoute(); 

</script>
<template>
   <NavBar v-if="!route.meta.hideLayout" />
  <main>
    <router-view />
  </main>
  <FooTer v-if="!route.meta.hideLayout" />
</template>