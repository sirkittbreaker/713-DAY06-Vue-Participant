<template>
  <div class="network-error">
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>

<style scoped>
.network-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  box-sizing: border-box;
}

.network-error h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #ff6b6b;
}

.network-error h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.network-error a {
  display: inline-block;
  font-size: 1.2em;
  color: #42b983;
  text-decoration: none;
  border: 1px solid #42b983;
  padding: 10px 20px;
  border-radius: 4px;
  transition:
    background-color 0.3s,
    color 0.3s;
  white-space: nowrap;
}

.network-error a:hover {
  background-color: #42b983;
  color: #fff;
}
</style>
