<template>
  <div class="ric">
    <div class="ric-icon">
      <slot name="icon" />
    </div>
    <h2>{{ props.title }}</h2>
    <slot name="content" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'professional statement',
})
</script>

<script lang="ts">
export default {
  name: 'ResumeInformationCard',
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

h2 {
  font-size: 2rem;
  text-transform: uppercase;
}

.ric {
  border-left: 3px solid $color-green-dark;
  padding-left: 4rem;
  margin-left: 1rem;
  margin-bottom: 5rem;
  position: relative;

  &-icon {
    position: absolute;
    left: -2px;
    top: 0;
    transform: translate(-50%, -20%);
    background: $color-green-dark;
    border-radius: 50%;
    padding: 0.7rem;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
  }

  h2 {
    padding-bottom: 0.5rem;
    border-bottom: 3px solid $color-green-dark;
    margin-bottom: 3rem;
  }
}
</style>
