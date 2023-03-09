<script>
export default {
  name: 'Newsletter',
  data() {
    return {
      name: '',
      email: '',
    }
  },
}
</script>

<template>
  <aside>
    <h3>Sign Up For Our Newsletter</h3>
    <form :class="$style.submissionForm" @submit="submit">
      <div class="nameSection">
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" name="name" />
        <p class="error invisible">Name is required</p>
      </div>

      <div class="emailSection">
        <label for="email">email</label>
        <input v-model="email" type="email" id="email" name="email" />
        <p class="error invisible">Email is required</p>
      </div>

      <input type="submit" value="Submit" class="submitBtn" />
    </form>
  </aside>
</template>

<style lang="scss" module>
.submissionForm {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  :global(div) {
    @extend .submissionForm;
    gap: 1rem;
  }
}
</style>
