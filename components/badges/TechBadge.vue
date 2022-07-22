<template>
  <div>
    <span class="text">
      {{ props.text }}
    </span>
    <span v-if="props.duration" class="duration"> {{ props.duration }} </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text: string
  duration?: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
$inline-padding: 0.5rem;
$block-padding: 0.25rem;

div {
  background-color: var(--clr-primary-200);
  display: flex;
  align-items: center;

  .text {
    padding-inline: $inline-padding;
    padding-block: $block-padding;
  }

  .duration {
    background-color: var(--clr-primary-700);
    color: white;
    padding-inline: $inline-padding;
    padding-block: $block-padding;
  }
}
</style>
