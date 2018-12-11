<template lang="pug">
.field
  label.label {{ label }}
  .control(:class="{'has-icons-left': icon}")
    input.input(:type="type", :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)")
    span.icon.is-small.is-left(v-if="icon")
      i.fas(:class="`fa-${icon}`")
</template>

<script>
export default {
  props: {
    label: { type: String },
    type: { type: String, default: 'text' },
    value: { type: String },
    placeholder: { type: String },
    icon: { type: String }
  }
}
</script>
