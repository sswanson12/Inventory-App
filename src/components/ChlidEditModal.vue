<template>
<app-modal
  :id="editModalId"
  @submit-form="saveChanges" @clear-form="clearInputs" @close-modal="closeModal"
  :modal-title="'Editing - ' + inventoryItemEditModel.inventoryItem.product.name">
  <v-text-field
    v-model="inventoryItemEditModel.inputtedName"
    :counter="20"
    :rules="requiredStringRules"
    label="Name"
    class="mb-1"
    required
  ></v-text-field>

  <v-text-field
    v-model="inventoryItemEditModel.inputtedDescription"
    label="Description"
    :counter="100"
    :rules="stringRules"
  ></v-text-field>

  <v-text-field
    v-model="inventoryItemEditModel.inputtedQty"
    label="Quantity"
    :rules="numberRules"
  ></v-text-field>

  <v-select
    v-model="inventoryItemEditModel.inputtedCategories"
    label="Categories"
    :items="itemCategories"
    multiple
  ></v-select>
</app-modal>
</template>

<script>
import AppModal from "@/components/utility/AppModal";
import InventoryItemEditModel from "@/models/utilities/InventoryItemEditModel";
import {inputTypes, productCategories} from "@/models/data/initData";
import InventoryItem from "@/models/InventoryItem";

export default {
  name: "ChildEditModal",
  components: { AppModal },
  props: {
    inventoryItem: {
      type: InventoryItem,
      required: true,
    }
  },
  methods: {
    saveChanges: function() {
      this.inventoryItemEditModel.updateItem();
    },
    clearInputs: function() {
      this.inventoryItemEditModel.clearModel();
    },
    closeModal: function() {
      this.$emit("close-modal", this.editModalId)
    }
  },
  data: () => ({
    inventoryItemEditModel: new InventoryItemEditModel(this.inventoryItem),
    editModalId: 'editModal' + this.inventoryItemEditModel.inventoryItem.id,
    itemCategories: productCategories,
    requiredRules: [
      value => !!value || 'Required.',
    ],
    stringRules: [
      value => (value.typeof === inputTypes.STRING) || 'Must be a string value.'
    ],
    numberRules: [
      value => (value.typeof === inputTypes.NUMBER) || 'Must be a number value.'
    ],
  }),
  computed: {
    requiredStringRules: function () {
      return [...this.requiredRules, ...this.stringRules];
    },
    requiredNumberRules: function () {
      return [...this.requiredRules, ...this.numberRules];
    }
  }
}
</script>

<style scoped>

</style>
