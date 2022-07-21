<template>
  <div class="range">
    <div class="filled"></div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  progress?: string
}

const props = withDefaults(defineProps<Props>(), {
  progress: '50%',
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.range {
  outline: 2px solid var(--clr-primary-700);
  height: 8px;
  display: grid;
  border-radius: 2px;

  .filled {
    width: v-bind('props.progress');
    background: var(--clr-primary-700);
    height: 100%;
    border-radius: inherit;
  }
}
</style>
