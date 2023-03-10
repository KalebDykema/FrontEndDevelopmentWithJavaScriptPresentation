<script>
export default {
  name: 'Newsletter',
  data() {
    return {
      name: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
    }
  },
  computed: {
    nameValue: {
      get() {
        return this.name.value
      },
      set(val) {
        if (!val) this.name.error = true
        this.name.value = val
      },
    },
    emailValue: {
      get() {
        return this.email.value
      },
      set(val) {
        console.log(val)
        if (!val) this.email.error = true
        this.email.value = val
      },
    },
  },
  methods: {
    submit() {
      if (!this.name.error && !this.email.error) {
        toggleDialog(true, data)
      }
    },
  },
}
</script>

<template>
  <aside>
    <h3>Sign Up For Our Newsletter</h3>
    <form :class="$style.submissionForm" @submit.prevent="submit">
      <div class="nameSection">
        <label for="name">Name:</label>
        <input v-model="nameValue" type="text" id="name" name="name" />
        <p v-if="name.error" class="error">Name is required</p>
      </div>

      <div class="emailSection">
        <label for="email">email</label>
        <input
          v-model="emailValue"
          type="email"
          id="email"
          name="email"
        />
        <p v-if="email.error" class="error">Email is required</p>
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
