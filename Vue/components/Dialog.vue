<script>
export default {
  name: 'Dialog'
}
</script>

<template>
  <div :class="$style.dialogContainer">
    <dialog open>
      <p></p>
      <button>&cross;</button>
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