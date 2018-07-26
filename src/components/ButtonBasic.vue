<template>
  <button
    @click.prevent="onClickButton"
    :disabled="disabled"
    class="buttton"
  >
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonBasic',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    eventName: {
      type: String
    }
  },
  methods: {
    onClickButton () {
      this.$emit(this.eventName ? this.eventName : 'click')
    }
  }
}
</script>

<style scoped>

</style>
