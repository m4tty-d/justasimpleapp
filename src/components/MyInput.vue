<template lang="pug">
.field
  label.label {{ label }}
  .control(:class="{'has-icons-left': icon, 'has-icons-right': validation.$error}")
    input.input(:type="type"
               :placeholder="placeholder"
               :class="{'is-danger': validation.$error}"
               :value="value"
               @input="$emit('input', $event.target.value)")
    span.icon.is-small.is-left(v-if="icon")
      i.fas(:class="`fa-${icon}`")
    span.icon.is-small.is-right(v-if="validation.$error")
      i.fas.fa-exclamation-triangle
  template(v-if="showValidationMessage && validation.$error" v-for="param in validation.$params")
    p.help.is-danger(v-show="!validation[param.type]") {{ getValidationHelpText(param) }}
</template>

<script>
export default {
  props: {
    label: { type: String },
    type: { type: String, default: 'text' },
    value: { type: String },
    placeholder: { type: String },
    icon: { type: String },
    validation: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showValidationMessage: { type: Boolean, default: true }
  },

  data() {
    return {
      validationHelps: {
        required: 'This field is required.',
        email: 'Should be a valid email address.',
        minLength: ({ min }) => `Should be at least ${min} characters.`,
        maxLength: ({ max }) => `Should be at most ${max} characters.`
      }
    }
  },

  methods: {
    getValidationHelpText(param) {
      return typeof this.validationHelps[param.type] === 'function'
        ? this.validationHelps[param.type](param)
        : this.validationHelps[param.type]
    }
  }
}
</script>
