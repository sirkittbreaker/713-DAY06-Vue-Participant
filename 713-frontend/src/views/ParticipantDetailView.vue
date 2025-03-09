<script setup lang="ts">
import { ref } from 'vue'
import type { Participant } from '@/types'
const participant = ref<Participant>()
</script>
<template>
  <div v-if="participant">
    <h1>{{ participant.name }}</h1>
    <p>{{ participant.email }}</p>
    <h3>Events</h3>
    <ul>
      <li v-for="event in participant.events" :key="event.id">
        <h4>{{ event.title }}</h4>
        <p>{{ event.description }}</p>
        <p>{{ event.location }}</p>
        <p>{{ event.date }} at {{ event.time }}</p>
        <p v-if="event.petsAllowed">Pets allowed</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
