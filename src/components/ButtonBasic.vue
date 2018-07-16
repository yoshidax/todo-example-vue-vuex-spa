<template>
  <button
    @click.prevent="onClickButton"
    :disabled="disabled"
    class="buttton"
  >{{ label }}</button>
</template>

<script>
export default {
  name: 'ButtonBasic',
  props: {
    label: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    eventSuffix: {
      type: String
    }
  },
  methods: {
    onClickButton () {
      const suffix = this.eventSuffix ? `:${this.eventSuffix}` : ''
      this.$emit(`clickButton${suffix}`)
    }
  }
}
</script>

<style scoped>

</style>
