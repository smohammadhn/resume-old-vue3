<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.container {
  height: 100vh;
  background-color: $color-background;
}
</style>
