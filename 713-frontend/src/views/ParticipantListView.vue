<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import ParticipantCard from '@/components/ParticipantCard.vue'
import ParticipantService from '@/services/ParticipantService'
import type { Participant } from '@/types'
import { useRouter } from 'vue-router'

interface PartitipantResponse {
  data: Participant[]
}
interface Props {
  page: number
}

const router = useRouter()
const participants = ref<Participant[]>([])
const props = defineProps<Props>()
const page = computed(() => props.page)
const totalPaticipants = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPaticipants.value / 3)
  return page.value < totalPages
})

watchEffect(() => {
  ParticipantService.getParticipants(page.value, 3)
    .then((response) => {
      participants.value = response.data
      totalPaticipants.value = response.headers['x-total-count']
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
})

ParticipantService.getParticipants(page.value, 3).then((response) => {
  participants.value = response.data
})
</script>

<template>
  <h1>Participants For Good</h1>

  <div class="participants">
    <ParticipantCard
      v-for="participant in participants"
      :key="participant.id"
      :participant="participant"
    />
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'participant-list-view', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >Prev Page</RouterLink
      >

      <RouterLink
        id="page-next"
        :to="{ name: 'participant-list-view', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.participants {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
