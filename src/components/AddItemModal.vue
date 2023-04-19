<template>
  <v-sheet :id="modalId" class="appModal elevation-6">
    <app-button icon="mdi-close"
                tool-tip="Close"
                tool-tip-location="left"
                :button-action="closeModal"
                id="addGoalFormCloseButton"
                class="elevation-0 px-0">
    </app-button>
    <header class="font-weight-medium appModalHeader">Add New Item</header>
    <v-form>
      <v-text-field
        v-model="newItem.product.name"
        :counter="20"
        :rules="[value => !!value || 'Required.']"
        label="Name"
        class="mb-1"
        required
      ></v-text-field>

      <v-text-field
        v-model="newItem.product.description"
        label="Description"
        :counter="100"
      ></v-text-field>

      <v-text-field
        v-model="newItem.quantity"
        label="Quantity"
      ></v-text-field>

      <v-select
        v-model="newItem.product._categories"
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
import {productCategoriesArray} from "@/models/data/initData";
import AppButton from "@/components/utility/AppButton";
import noArgsInventoryItemFactory from "@/models/utilities/noArgsInventoryItemFactory";

export default {
  name: "AddItemModal",
  emits: ["add-item",],
  components: { AppButton, },
  methods: {
    //must be picked up by the component implementing this component
    closeModal() {
      document.getElementById(this.modalId).style.display = "none";
    },
    submitForm(e) {
      e.preventDefault();
      console.log("Emitting 'add-item' from, ", this)
      this.$emit("add-item", this.newItem);
      this.clearForm();
    },
    clearForm() {
      this.newItem = noArgsInventoryItemFactory();
    },
  },
  data: function () {
    return{
      modalId: 'addItemModal',
      newItem: noArgsInventoryItemFactory(),
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
  top: 20px;
  right: 20px;
}
.appModalHeader{
  position: relative;
  text-align: center;
  bottom: 8px;
}
</style>
