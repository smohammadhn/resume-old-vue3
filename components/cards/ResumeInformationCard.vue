<template>
  <div class="ric bottom-spacer-3">
    <div class="ric-icon">
      <slot name="icon" />
    </div>
    <h2 class='primary-heading'>{{ props.title }}</h2>
    <slot name="content" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'box title',
})
</script>

<script lang="ts">
export default {
  name: 'ResumeInformationCard',
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.ric {
  border-left: 3px solid var(--clr-primary-700);
  padding-left: min(6.5vw, 3rem);
  position: relative;

  &-icon {
    position: absolute;
    left: -2px;
    top: 0;
    transform: translate(-50%, -20%);
    background: var(--clr-primary-700);
    border-radius: 50%;
    padding: 0.65rem;
    width: 45px;
    height: 45px;
  }

  h2 {
    border-bottom: 3px solid var(--clr-primary-700);
    margin-bottom: 1.5rem;
  }
}
</style>
