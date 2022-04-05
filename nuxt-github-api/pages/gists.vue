<template>
  <div>
    <h2>Gists</h2>
    <ul>
      <li v-for="gist in gists" :key="gist.id">
        {{ gist.description }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  const { data: gists } = await useAsyncData("gists", () =>
    $fetch("/api/github")
  );
</script>
