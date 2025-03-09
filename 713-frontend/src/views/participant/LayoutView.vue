<script setup lang="ts">
import { useParticipantStore } from '@/stores/participant'
import { storeToRefs } from 'pinia'
const store = useParticipantStore()
const { participant } = storeToRefs(store)
</script>
<template>
  <div v-if="participant">
    <nav>
      <router-link :to="{ name: 'participant-detail-view', params: { id: participant.id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'participant-edit-view', params: { id: participant.id } }"
        >Edit</router-link
      >
    </nav>
    <router-view :participant="participant"></router-view>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
