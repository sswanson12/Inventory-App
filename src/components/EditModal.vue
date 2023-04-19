<template>
  <v-sheet :id="editModalId" class="appModal elevation-6">
    <app-button icon="mdi-close"
                tool-tip="Close"
                tool-tip-location="left"
                :button-action="closeModal"
                id="addGoalFormCloseButton"
                class="elevation-0 px-0">
    </app-button>
    <header class="font-weight-medium appModalHeader">{{modalTitle}}</header>
    <v-form>
      <v-text-field
        v-model="inventoryItemEditModel.inputtedName"
        :counter="20"
        :rules="[value => !!value || 'Required.']"
        label="Name"
        class="mb-1"
        required
      ></v-text-field>

      <v-text-field
        v-model="inventoryItemEditModel.inputtedDescription"
        label="Description"
        :counter="100"
      ></v-text-field>

      <v-text-field
        v-model="inventoryItemEditModel.inputtedQty"
        label="Quantity"
      ></v-text-field>

      <v-select
        v-model="inventoryItemEditModel.inputtedCategories"
        label="Categories"
        :items="itemCategories"
        multiple
      ></v-select>
      <div class="d-flex flex-column">
        <app-button button-text="Submit&nbsp"
                    icon="mdi-pencil"
                    color="success"
                    :button-action="submitForm">
        </app-button>

        <app-button button-text="Clear Form&nbsp"
                    icon="mdi-restart"
                    :button-action="clearForm"
                    color="warning"
                    class="mt-3">
        </app-button>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
import {inputTypes, productCategoriesArray} from "@/models/data/initData";
import AppButton from "@/components/utility/AppButton";
import InventoryItem from "@/models/InventoryItem";
import InventoryItemEditModel from "@/models/utilities/InventoryItemEditModel";

export default {
  name: "EditModal",
  emits: ["close-modal", "submit-form", "clear-form"],
  components: { AppButton, },
  props: {
    inventoryItem: {
      type: InventoryItem,
      required: true,
    }
  },
  methods: {
    //must be picked up by the component implementing this component
    closeModal() {
      document.getElementById(this.editModalId).style.display = "none";
    },
    submitForm(e) {
      e.preventDefault();
      this.saveChanges();
      this.closeModal()
    },
    clearForm() {
      this.inventoryItemEditModel.clearModel();
    },
    saveChanges() {
      this.inventoryItemEditModel.updateItem();
    },
    clearInputs() {
      this.inventoryItemEditModel.clearModel();
    },
  },
  data: function() {
    return {
      editModalId: 'editModal' + this.inventoryItem.id,
      modalTitle: 'Editing - ' + this.inventoryItem.product.name,
      inventoryItemEditModel: new InventoryItemEditModel(this.inventoryItem),
      itemCategories: productCategoriesArray,
    }
  },
}
</script>

<style scoped>
.appModal{
  display: none;
  width: 340px;
  padding: 20px;
  border-radius: 4px;
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.appModalHeader{
  position: relative;
  text-align: center;
  margin-top: 5px;
  bottom: 8px;
}
</style>
