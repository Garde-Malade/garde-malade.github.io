<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <NavBar />
      <RouterView />
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  background: #ffffff;
}

/* keep a light baseline for headings */
h1, h2, h3 {
  color: #0f172a; /* slate-900 */
}

.button {
  display: inline-block;
  background: #0ea5a4; /* teal-ish */
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
}

</style>
