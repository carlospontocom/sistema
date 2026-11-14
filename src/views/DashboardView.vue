<template>
    <!--- ##################### DASHBOARD ################### --->
    <header class="header">
        <div class="header__container">
            <div class="">
                <h1>Dashboard</h1>
                <span>carlosnascimento@gmail.com</span>
            </div>
            <button class="btn__logout">
                <router-link to="/" class="link__logout">SAIR</router-link>
            </button>
        </div>
    </header>

    <section>

        <div class="dashboard__container">
            <div class="dashboard__content">
                <section>
                    <div class="form__container-add">
                        <div class="form__contentxx">
                            <h2 class="form__title">Agenda telefonica </h2>
                            <form class="form__add">
                                <div class="group__form-add">
                                <label class="label"> Nome</label>
                                <input type="text" placeholder="Nome" class="field">
                                </div>
                            <div class="group__form-add">
                                <label class="label"> E-mail</label>
                                <input type="text" placeholder="E-mail" class="field">
                                </div>
                                <div class="group__form-add">
                                <label class="label"> Telefone</label>
                                <input type="text" placeholder="(88)9.9876-5432" class="field">
                            </div>
                                <button class="btn__solid-primary">Adicionar</button>
                            </form>
                        </div>
                    </div>

                    <ul class="cards">
                        
                        
                        <li class="card">
                            <p>Carlos Nascimento</p>
                            <p>(88)9.9876-5432</p>
                            <p>carlosnascimento@gmail.com</p>
                            <div class="actions">
                                <img width="25" height="25"
                                    src="https://img.icons8.com/carbon-copy/FF6573/100/filled-trash.png"
                                    alt="filled-trash" />
                                <img width="20" height="20" src="https://img.icons8.com/offices/30/create-new.png"
                                    alt="create-new" />
                            </div>
                        </li>


                        <li class="card">
                            <p>Carlos Nascimento</p>
                            <p>(88)9.9876-5432</p>
                            <p>carlosnascimento@gmail.com</p>
                            <div class="actions">
                                <img width="25" height="25"
                                    src="https://img.icons8.com/carbon-copy/FF6573/100/filled-trash.png"
                                    alt="filled-trash" />
                                <img width="20" height="20" src="https://img.icons8.com/offices/30/create-new.png"
                                    alt="create-new" />
                            </div>
                        </li>


                        <li class="card">
                            <p>Carlos Nascimento</p>
                            <p>(88)9.9876-5432</p>
                            <p>carlosnascimento@gmail.com</p>
                            <div class="actions">
                                <img width="25" height="25"
                                    src="https://img.icons8.com/carbon-copy/FF6573/100/filled-trash.png"
                                    alt="filled-trash" />
                                <img width="20" height="20" src="https://img.icons8.com/offices/30/create-new.png"
                                    alt="create-new" />
                            </div>
                        </li>


                        <li class="card">
                            <p>Carlos Nascimento</p>
                            <p>(88)9.9876-5432</p>
                            <p>carlosnascimento@gmail.com</p>
                            <div class="actions">
                                <img width="25" height="25"
                                    src="https://img.icons8.com/carbon-copy/FF6573/100/filled-trash.png"
                                    alt="filled-trash" />
                                <img width="20" height="20" src="https://img.icons8.com/offices/30/create-new.png"
                                    alt="create-new" />
                            </div>
                        </li>

                        <li class="card">
                            <p>Carlos Nascimento</p>
                            <p>(88)9.9876-5432</p>
                            <p>carlosnascimento@gmail.com</p>
                            <div class="actions">
                                <img width="25" height="25"
                                    src="https://img.icons8.com/carbon-copy/FF6573/100/filled-trash.png"
                                    alt="filled-trash" />
                                <img width="20" height="20" src="https://img.icons8.com/offices/30/create-new.png"
                                    alt="create-new" />
                            </div>
                        </li>

                        <li class="card">
                            <p>Carlos Nascimento</p>
                            <p>(88)9.9876-5432</p>
                            <p>carlosnascimento@gmail.com</p>
                            <div class="actions">
                                <img width="25" height="25"
                                    src="https://img.icons8.com/carbon-copy/FF6573/100/filled-trash.png"
                                    alt="filled-trash" />
                                <img width="20" height="20" src="https://img.icons8.com/offices/30/create-new.png"
                                    alt="create-new" />
                            </div>
                        </li>


                    </ul>
                </section>
            </div>
        </div>
    </section>

    <!-- ###################################### FORMULARIO DE EDIÇÃO ####################### -->
    <!-- 
    <section>
        <div class="form__container">
            <div class="form__content">
                <h2 class="form__title">Editar contato</h2>
                <form class="form">
                    <input type="text" placeholder="Carlos Nascimento" class="field">
                    <input type="text" placeholder="carlosnascimento@gmail.com" class="field">
                    <input type="text" placeholder="(88)9.9876-5432" class="field">
                    <button class="btn__solid-primary">Salvar</button>
                    <button class="btn btn__cancel">Cancelar</button>
                </form>
            </div>
        </div>
    </section>
     -->
</template>

<style scoped>
.header {
    background: green;
    color: white;
    position: fixed;
    width: 100%;
    padding: .5rem .4rem;
}

.header__container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form__container-add{
    background:red;
    margin:0 auto;
    max-width:1024px;
    padding:0 0 1.2rem 0;
}

.group__form-add{
    display:flex;
    flex-direction:column;
}

.form__add{
    display: flex;
    gap:10px;
    align-items: center;
    justify-content:center;
}

.cards{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
    max-width:1024px;
    width:100%;
    margin:0 auto;
}

.card{
    background:white;
    border-radius: 8px;
    border:0;
}
</style>