<script setup lang="ts">
import type { Participant } from '@/types'

defineProps<{ participant: Participant }>()
</script>

<template>
  <div class="participant-class">
    <div class="participant-card">
      <h2>{{ participant.name }}</h2>
      <p>{{ participant.email }}</p>
      <!-- <h3>Events</h3>
      <ul>
        <li v-for="event in participant.events" :key="event.id">
          <h4>{{ event.title }}</h4>
          <p>{{ event.description }}</p>
          <p>{{ event.location }}</p>
          <p>{{ event.date }} at {{ event.time }}</p>
          <p v-if="event.petsAllowed">Pets allowed</p>
          <p>Organized by {{ event.organizer.name }}</p>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<style scoped>
.participant-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.participant-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
