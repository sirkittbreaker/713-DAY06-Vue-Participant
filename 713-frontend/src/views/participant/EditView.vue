<script setup lang="ts">
import { toRefs } from 'vue'
import type { Participant } from '@/types'
const props = defineProps<{
  participant: Participant
  id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { participant } = toRefs(props)
</script>
<template>
  <p>Edit participant here</p>
</template>
