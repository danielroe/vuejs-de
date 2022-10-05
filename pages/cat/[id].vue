<script setup lang="ts">
const route = useRoute()
const { data: cat } = await useFetch(`/api/cat/${route.params.id}`, {
  key: route.params.id as string,
  transform: cat => ({
    ...cat,
    breeds: undefined,
    ...cat.breeds[0],
  }),
})
</script>

<template>
  <div>
    <article>
      <header>
        {{ cat.name }}
      </header>
      <div>
        {{ cat.description }}
      </div>
      <div>
        <img :src="cat.url" />
      </div>
    </article>
  </div>
</template>
