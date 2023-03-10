<script>
import { upperCaseFirst } from '../helpers'
import Dialog from './Dialog.vue'

export default {
  name: 'Newsletter',
  components: {
    Dialog,
  },
  data() {
    return {
      values: {
        name: {
          value: '',
          error: false,
          type: 'text',
        },
        email: {
          value: '',
          error: false,
          type: 'email',
        },
      },
      openDialog: false,
    }
  },
  computed: {
    name() {
      return this.values.name.value
    },
    email() {
      return this.values.email.value
    },
  },
  methods: {
    submit() {
      let invalid = false
      // Make sure we validate for errors before sumbitting
      Object.values(this.values).forEach((value) => {
        if (!value.value) {
          value.error = true
          invalid = true
          return
        }
        value.error = false
      })
      if (invalid) return
      this.openDialog = true
    },
    upperCaseFirst,
  },
}
</script>

<template>
  <aside>
    <h3>Sign Up For Our Newsletter</h3>
    <form :class="$style.submissionForm" @submit.prevent="submit">
      <div v-for="(value, property) in values">
        <label :for="property">{{ upperCaseFirst(property) }}:</label>
        <input
          v-model="value.value"
          :type="value.type"
          :id="property"
          :name="property"
        />
        <p v-if="value.error" class="error">
          {{ upperCaseFirst(property) }} is required
        </p>
      </div>

      <input type="submit" value="Submit" class="submitBtn" />
    </form>
  </aside>

  <Dialog v-model:open="openDialog">
    Thank you {{ name }} for signing up! We'll email you newsletters and updates at {{ email }}.
  </Dialog>
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
