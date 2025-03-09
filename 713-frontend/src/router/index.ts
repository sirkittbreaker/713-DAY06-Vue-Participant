import { createRouter, createWebHistory } from 'vue-router'
import ParticipantListView from '@/views/ParticipantListView.vue'
import ParticipantDetailView from '@/views/ParticipantDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'participant-list-view',
      component: ParticipantListView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/participant/:id',
      name: 'participant-detail-view',
      component: ParticipantDetailView,
      props: true,
    },
  ],
})

export default router
