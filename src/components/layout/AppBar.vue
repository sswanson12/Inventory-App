<template>
  <v-app-bar color="primary" class="text-center">
    <template v-slot:prepend>
      <app-button button-name="menuButton"
                  button-size="large"
                  icon="mdi-menu"
                  tool-tip="Menu"
                  tool-tip-location="bottom">
      </app-button>
    </template>

    <v-app-bar-title>Inventory Application</v-app-bar-title>

    <template v-slot:append>

      <app-button button-name="settingsButton"
                  button-size="large"
                  icon="mdi-cog"
                  tool-tip="Settings"
                  tool-tip-location="bottom">
      </app-button>
    </template>
  </v-app-bar>
</template>

<script>

import AppButton from "@/components/utility/AppButton";

export default {
  name: "AppBar",
  components: { AppButton },
}
</script>

<style scoped>

</style>
