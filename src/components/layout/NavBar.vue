<script setup lang="ts">
</script>
<template>
    <nav class="navbar">
        <router-link to="/">Login</router-link>
        <router-link to="/novoCadastro">Novo cadastro</router-link>
    </nav>
</template>

<style>
.navbar {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    position: fixed;
    width: 100%;
}
</style>