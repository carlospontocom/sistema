<script setup lang="ts">
//
</script>

<template>
  <!-- ##################### ÁREA DE LOGIN ################### -->
  <section>
    <div class="form__container">
      <div class="form__content">
        <h2 class="form__title">Área de login</h2>
        <form class="form">
          <label for="email" class="label">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" class="field">
          
          <label for="senha" class="label">Senha</label>
          <input type="password" placeholder="Senha" class="field">
          <button class="btn__solid-primary">Entrar</button>
          <div class="actions__link">
            <router-link to="/novoCadastro">Cadastrar-se</router-link>
            <router-link to="/recuperarSenha">Nova senha</router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style>
.form__container{
  padding: 2rem;
  min-height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
}

.form__content {
  background-color: white;
  border-radius:6px;
  width:100%;
  max-width: 450px;
}

.form__title{
  font-size:2.2rem;
}

.label{
  font-size:15px;
  font-weight:600;
  letter-spacing: 1.05px;
  margin:.5rem 0 0 0;
}

.field{
  font-size:1.2rem;
}

.btn{
  cursor:pointer;
  padding:15px 1rem;
  font-size:1.1rem;
  letter-spacing: 1.05px;
  font-weight: 600;
}

.btn__solid-primary{
  padding:15px 1rem;
  font-size:1.1rem;
}

.actions__link{
  font-size:1.1rem;
  display:flex;
  justify-content:space-between;
  margin:1rem 0 0 0;
}
</style>