import { createRouter, createWebHistory } from 'vue-router'
import ParticipantListView from '@/views/ParticipantListView.vue'
import ParticipantLayoutView from '@/views/participant/LayoutView.vue'
import ParticipantDetailView from '@/views/participant/DetailView.vue'
import ParticipantEditView from '@/views/participant/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'participant-list-view',
      component: ParticipantListView,
      props: (route) => ({
        page: parseInt(route.query.page as string) || 1,
      }),
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
      name: 'participant-layout-view',
      component: ParticipantLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'participant-detail-view',
          component: ParticipantDetailView,
          props: true,
        },
        {
          path: 'edit',
          name: 'participant-edit-view',
          component: ParticipantEditView,
          props: true,
        },
      ],
    },
  ],
})

export default router
