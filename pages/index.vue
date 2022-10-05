<script setup lang="ts">
const { data: cats } = useFetch('/api/cats', {
  transform: cats =>
    cats.map(cat => ({
      ...cat,
      breeds: undefined,
      ...cat.breeds[0],
    })),
})
</script>

<template>
  <div class="grid">
    <div>
      <h2>Cats of the world</h2>
      <ul>
        <li v-for="cat in cats" :key="cat.id">
          <NuxtLink :to="`/cat/${cat.id}`">
            {{ cat.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <Cat />
    </div>
  </div>
</template>
