import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import NovoCadastroView from '../views/NovoCadastroView.vue'
import RecuperarSenhaView from '../views/RecuperarSenhaView.vue'
import DashboardView from '../views/DashboardView.vue';


const routes = [
  {
    path: '/', name: 'HomeView',
    component: LoginView,
    meta: { hideLayout: true } // Oculta o menu e rodapé nesta página
  },
  { path: '/dashboard', name: 'dashboardView', component: DashboardView,
  meta: { hideLayout: true } // Oculta o menu e rodapé nesta página
},
  { path: '/novoCadastro', name: 'NovoCadastroView', component: NovoCadastroView },
  { path: '/recuperarSenha', name: 'RecuperarSenhaView', component: RecuperarSenhaView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
