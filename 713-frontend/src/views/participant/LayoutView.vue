<script setup lang="ts">
import { ref } from 'vue'
import type { Participant } from '@/types'
import ParticipantService from '@/services/ParticipantService'

const participant = ref<Participant>()
const props = defineProps<{ id: string }>()
const id = Number(props.id)
ParticipantService.getParticipant(id)
  .then((response) => {
    participant.value = response.data
  })
  .catch((error) => {
    console.error('There was an error!', error)
  })
</script>
<template>
  <div v-if="participant">
    <nav>
      <router-link :to="{ name: 'participant-detail-view', params: { id: props.id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'participant-edit-view', params: { id: props.id } }"
        >Edit</router-link
      >
    </nav>
    <router-view :participant="participant"></router-view>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
