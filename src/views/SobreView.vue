<template>
  <div class="about">
    <h1>Sobre Nós</h1>
    <p>Esta é a página de informações do aplicativo.</p>
    <button @click="voltarParaHome">Voltar para Home</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function voltarParaHome() {
  router.push('/');
}
</script>
