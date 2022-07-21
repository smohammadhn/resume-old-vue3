<template>
  <div class="ric">
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

.ric {
  border-left: 3px solid var(--clr-primary-700);
  padding-left: min(6.5vw, 4rem);
  margin-left: min(1vw, 1rem);
  margin-bottom: 5rem;
  position: relative;

  &-icon {
    position: absolute;
    left: -2px;
    top: 0;
    transform: translate(-50%, -20%);
    background: var(--clr-primary-700);
    border-radius: 50%;
    padding: 0.7rem;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
  }

  h2 {
    padding-bottom: 0.5rem;
    border-bottom: 3px solid var(--clr-primary-700);
    margin-bottom: 3rem;
  }
}
</style>
