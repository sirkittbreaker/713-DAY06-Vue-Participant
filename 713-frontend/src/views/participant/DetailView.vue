<script setup lang="ts">
import { toRefs } from 'vue'
import type { Participant } from '@/types'
const props = defineProps<{
  participant: Participant
  id: string
}>()
const { participant } = toRefs(props)
</script>

<template>
  <div v-if="participant" class="participant-detail">
    <h1>{{ participant.name }}</h1>
    <p>{{ participant.email }}</p>
    <h3>Events</h3>
    <ul>
      <li v-for="event in participant.events" :key="event.id" class="event-item">
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

<style scoped>
.participant-detail {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.participant-detail h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.participant-detail p {
  font-size: 1em;
  margin: 5px 0;
}

.participant-detail h3 {
  margin-top: 20px;
  font-size: 1.5em;
}

.participant-detail ul {
  list-style: none;
  padding: 0;
}

.event-item {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
}

.event-item h4 {
  margin: 0 0 5px;
  font-size: 1.2em;
}

.event-item p {
  margin: 2px 0;
  font-size: 0.9em;
}
</style>
