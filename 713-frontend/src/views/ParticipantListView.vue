<script setup lang="ts">
import { ref } from 'vue'
import ParticipantCard from '@/components/ParticipantCard.vue'

const participants = ref([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Bob' },
])
</script>

<template>
  <div>
    <ParticipantCard v-for="participant in participants" :key="participant.id" />
  </div>
</template>
