<script setup lang="ts">
import { ref, computed } from 'vue'
import ParticipantCard from '@/components/ParticipantCard.vue'
import ParticipantService from '@/services/ParticipantService'
import type { Participant } from '@/types'

interface PartitipantResponse {
  data: Participant[]
}
interface Props {
  page: number
}

const participants = ref<Participant[]>([])
const props = defineProps<Props>()
const page = computed(() => props.page)

ParticipantService.getParticipants(page.value, 2).then((response: PartitipantResponse) => {
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
  </div>
</template>

<style scoped>
.participants {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
