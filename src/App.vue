<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>
      <inventory-item-list :inventory="mainInventory"></inventory-item-list>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import InventoryItemList from "@/components/InventoryItemList";
import AppFooter from "@/components/layout/AppFooter";
import {initialInventory} from "@/models/data/initData";
export default {
  Name: "App",
  components: {AppBar, InventoryItemList, AppFooter},
  data: function () {
    return {
      mainInventory: initialInventory,
    }
  }
}
</script>
