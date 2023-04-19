<template>
  <v-btn :size="buttonSize" :type="buttonType" @click="buttonAction">
    {{buttonText}}
    <v-icon :icon="icon" :size="buttonSize"></v-icon>
    <v-tooltip v-if="toolTip" :location="toolTipLocation" :text="toolTip ?? 'Tool Tip!'" activator="parent"></v-tooltip>
  </v-btn>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    buttonSize: {
      type: String,
    },
    icon: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    toolTip: {
      type: String,
    },
    toolTipLocation: {
      type: String,
    },
    buttonAction: {
      type: Function,
    },
    buttonType: {
      type: String,
    }
  },
}
</script>
