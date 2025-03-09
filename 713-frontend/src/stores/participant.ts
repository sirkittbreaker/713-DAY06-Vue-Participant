import type { ParticipantState, Participant } from '@/types'
import { defineStore } from 'pinia'
export const useParticipantStore = defineStore('participant', {
  state: (): ParticipantState => ({
    participant: null,
  }),
  actions: {
    setParticipant(participant: Participant): void {
      this.participant = participant
    },
  },
})
