<script setup lang="ts">
import { withDefaults } from 'vue'
withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page',
  },
)
</script>

<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'participant-list-view' }">Back to the home page</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
}

.not-found h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #ff6b6b;
}

.not-found h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.not-found a {
  font-size: 1.2em;
  color: #42b983;
  text-decoration: none;
  border: 1px solid #42b983;
  padding: 10px 20px;
  border-radius: 4px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.not-found a:hover {
  background-color: #42b983;
  color: #fff;
}
</style>
