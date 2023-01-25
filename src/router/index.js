import { createRouter, createWebHistory } from 'vue-router'
import One from '@/pages/one/index.vue' 
import NotFound from '@/layouts/404error.vue'
import Main from '@/pages/main/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main }, 
    { path: '/one', component: One }, 
    { path: '/:catchAll(.*)', component: NotFound }
  ]
});

export default router;