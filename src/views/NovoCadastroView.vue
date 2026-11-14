<template>
    
<!-- ##################### CADASTRO ################### --->
  <section class="container">
<div class="form__container">
    <div class="form__content">
      <h2 class="form__title">Cadastro de usuário</h2>
      <form class="form">
        <input type="text" placeholder="Nome completo" class="field">
        <input type="text" placeholder="E-mail" class="field">
        <input type="text" placeholder="(88)9.9876-5432" class="field">
        <input type="text" placeholder="Senha" class="field">
        <input type="text" placeholder="Confirmar senha" class="field">
        <button class="btn__solid-primary">Entrar</button>
        <router-link to="/">Login</router-link>
      </form>
    </div>
</div>
  </section>
 </template>

<script setup lang="ts">
//
</script>