<script setup lang="ts"></script>

<template>
  <div :class="$style.root">
    <RouterView />
  </div>
</template>

<style module lang="postcss">
.root{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
