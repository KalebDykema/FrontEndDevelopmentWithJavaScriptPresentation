<script>
export default {
  name: 'Dialog',
  props: {
    open: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit('update:open', false)
    },
  },
}
</script>

<template>
  <div v-if="open" :class="$style.dialogContainer" @click="close">
    <dialog :open="open">
      <p><slot /></p>
      <button @click="close">&cross;</button>
    </dialog>
  </div>
</template>

<style lang="scss" module>
@import '../scss/variables';

.dialogContainer {
  background-color: rgba($primaryBackgroundColor, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  :global dialog {
    position: relative;
    width: 40rem;
    min-height: 5rem;
    background-color: $secondaryBackgroundColor;
    color: $primaryColor;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      background: none;
      padding: 0.5rem;
      color: $primaryColor;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
