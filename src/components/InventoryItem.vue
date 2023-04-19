<template>
  <v-card :id="'inventoryItem-' + inventoryItem.id" class="inventoryItem">
    <v-card-title>{{inventoryItem.product.name}}</v-card-title>
    <v-card-subtitle>{{inventoryItem.product.productCategoriesString()}}</v-card-subtitle>
    <v-card-text>
      <div class="quantity">In stock: {{inventoryItem.quantity}}</div>
      <div>{{inventoryItem.product.description}}</div>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <app-button :id="'editButton-' + inventoryItem.id"
                  icon="mdi-pencil"
                  tool-tip="Edit"
                  tool-tip-location="bottom"
                  :button-action="editItem">
      </app-button>
      <app-button :id="'deleteButton-' + inventoryItem.id"
                  icon="mdi-delete"
                  tool-tip="Delete"
                  tool-tip-location="bottom"
                  :button-action="deleteItem">
      </app-button>
    </v-card-actions>
  </v-card>
</template>

<script>
import InventoryItem from "@/models/InventoryItem";
import AppButton from "@/components/utility/AppButton";

export default {
  name: "InventoryItem",
  emits: ["delete-item", "edit-item"],
  components: {AppButton},
  props: {
    inventoryItem: {
      type: InventoryItem,
      required: true,
    }
  },
  methods: {
    editItem: function() {
      console.log("Emitting 'edit-item' from,", this)
      this.$emit("edit-item", this.inventoryItem);
    },
    deleteItem: function() {
      this.$emit("delete-item", this.inventoryItem);
    }
  },
}
</script>

<style scoped>
.inventoryItem{

}

.quantity{
  margin-top: -10px;
  margin-bottom: 5px;
  font-size: smaller
}
</style>
