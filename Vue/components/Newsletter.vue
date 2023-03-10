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
  methods: {
    setValue(property, { target }) {
      const value = this.values[property]
      value.value = target.value
      value.error = value.value ? false : true
    },
    submit() {
      if (Object.values(this.values).some(({error}) => error)) return
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
          :value="value.value"
          :type="value.type"
          :id="property"
          :name="property"
          @input.trim="setValue(property, $event)"
        />
        <p v-if="value.error" class="error">
          {{ upperCaseFirst(property) }} is required
        </p>
      </div>

      <input type="submit" value="Submit" class="submitBtn" />
    </form>
  </aside>

  <Dialog v-model:open="openDialog">Test</Dialog>
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
