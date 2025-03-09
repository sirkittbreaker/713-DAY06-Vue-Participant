<script setup lang="ts">
import { ref } from 'vue'
import ParticipantCard from '@/components/ParticipantCard.vue'

const participants = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'j.doe@gmail.com',
    events: [
      {
        id: 1,
        category: 'Conference',
        title: 'Tech Conference 2025',
        description: 'A conference about the latest in tech.',
        location: 'New York',
        date: '2025-05-20',
        time: '10:00 AM',
        petsAllowed: false,
        organizer: {
          id: 1,
          name: 'Tech Corp',
        },
      },
      {
        id: 2,
        category: 'Workshop',
        title: 'Vue.js Workshop',
        description: 'A workshop on Vue.js for beginners.',
        location: 'San Francisco',
        date: '2025-06-15',
        time: '2:00 PM',
        petsAllowed: true,
        organizer: {
          id: 2,
          name: 'Vue Masters',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'j.smith@gmail.com',
    events: [
      {
        id: 3,
        category: 'Seminar',
        title: 'AI Seminar 2025',
        description: 'A seminar about the advancements in AI.',
        location: 'Los Angeles',
        date: '2025-07-10',
        time: '9:00 AM',
        petsAllowed: false,
        organizer: {
          id: 3,
          name: 'AI Innovators',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@gmail.com',
    events: [
      {
        id: 4,
        category: 'Meetup',
        title: 'Tech Meetup 2025',
        description: 'A meetup for tech enthusiasts.',
        location: 'Chicago',
        date: '2025-08-05',
        time: '6:00 PM',
        petsAllowed: true,
        organizer: {
          id: 4,
          name: 'Tech Enthusiasts',
        },
      },
    ],
  },
])
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
