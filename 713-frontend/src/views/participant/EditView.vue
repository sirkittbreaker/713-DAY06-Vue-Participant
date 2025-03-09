<script setup lang="ts">
import { toRefs } from 'vue'
import type { Participant } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const router = useRouter()
const props = defineProps<{
  participant: Participant
  id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = useMessageStore()
const { participant } = toRefs(props)
const edit = () => {
  store.updateMessage('You are successully edited for ' + props.participant.name)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)

  router.push({ name: 'participant-detail-view' })
}
</script>

<template>
  <div class="edit-participant">
    <p>Edit participant here</p>
    <button @click="edit">Edit</button>
  </div>
</template>

<style scoped>
.edit-participant {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
}

.edit-participant p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.edit-participant button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #42b983;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-participant button:hover {
  background-color: #369f6b;
}
</style>
