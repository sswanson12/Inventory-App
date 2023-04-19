<template>
<v-sheet class="inventory">
  <v-sheet class="utility-bar elevation-6" color="primary" rounded>
    <app-button button-name="resetQueryButton"
                button-size="large"
                icon="mdi-restart"
                tool-tip="Reset Filters"
                tool-tip-location="bottom"
                class="filter-sort-search-button"
                :button-action="resetFilters">
    </app-button>
    <v-select
      v-model="filteredCategories"
      :items="productCategories"
      label="Select Item"
      multiple
      variant="solo"
      density="comfortable"
      class="mt-1 mx-1"
    >
      <template v-slot:selection="{ item, index }">
        <v-chip v-if="index < 2">
          <span>{{ item.title }}</span>
        </v-chip>
        <span
          v-if="index === 2"
          class="text-grey text-caption align-self-center"
        >
          (+{{ filteredCategories.length - 2 }} others)
        </span>
      </template>
    </v-select>
    <v-autocomplete
      class="mt-1 mx-1"
      label="Sort By"
      density="comfortable"
      :items="[sortCategories.NAME, sortCategories.QTY]"
      v-model="sortedBy"
      variant="solo"
    ></v-autocomplete>
    <v-text-field
      class="search-bar"
      label="Search"
      v-model="searchString">
    </v-text-field>
    <app-button button-name="searchButton"
                button-size="large"
                icon="mdi-magnify"
                tool-tip="Search"
                tool-tip-location="bottom"
                class="filter-sort-search-button">
    </app-button>
  </v-sheet>

  <div class="item-container">
      <inventory-item v-for="inventoryItem in currentlyShownItems" v-bind:key="inventoryItem.id" @delete-item="deleteItem" @edit-item="openEditModal" class="inventory-item" :inventory-item="inventoryItem"></inventory-item>
  </div>
  <edit-modal v-for="inventoryItem in currentlyShownItems" v-bind:key="inventoryItem.id" :inventory-item="inventoryItem"></edit-modal>
  <div class="addItemButtonContainer">
    <app-button class="bg-primary rounded-circle d-block float-end"
                icon="mdi-plus"
                button-size="xxx-large"
                tool-tip="Add new inventory items!"
                tool-tip-location="left"
                :button-action="openAddItemModal">
    </app-button>
    <add-item-modal @add-item="addItem"></add-item-modal>
  </div>
</v-sheet>
</template>

<script>
import InventoryItem from "@/components/InventoryItem";
import Inventory from "@/models/Inventory";
import AppButton from "@/components/utility/AppButton";
import {productCategoriesArray} from "@/models/data/initData";
import EditModal from "@/components/EditModal";
import AddItemModal from "@/components/AddItemModal";

export default {
  name: "InventoryItemList",
  components: {EditModal, InventoryItem, AppButton, AddItemModal },
  props: {
    inventory: {
      type: Inventory,
      required: true,
    }
  },
  data() {
    return{
      searchString: '',
      shownItems: [...this.inventory.getInventory()],
      productCategories: productCategoriesArray,
      sortCategories: { NAME: 'name', QTY: 'quantity'},
      filteredCategories: [],
      sortedBy: '',
    }
  },
  methods: {
    resetFilters: function() {
      this.filteredCategories = [];
      this.sortedBy = '';
      this.searchString = '';
      this.shownItems = [...this.inventory.getInventory()]
    },
    addItem(item){
      console.log('Adding item: ', item);
      this.inventory.addItem(item);
      this.shownItems = [...this.inventory.getInventory()];
    },
    deleteItem(item){
      console.log('Removing item: ', item);
      this.inventory.removeItem(item);
      this.shownItems = [...this.inventory.getInventory()];
    },
    openEditModal(item){
      console.log('Editing item: ', item);
      document.getElementById('editModal' + item.id).style.display = "block";
    },
    openAddItemModal(){
      document.getElementById('addItemModal').style.display = "block";
    },
  },
  computed: {
    currentlyShownItems(){
      return this.shownItems.filter((item) => {
        return item.product.name.toLowerCase().includes(this.searchString.toLowerCase())
          || item.product.description.toLowerCase().includes(this.searchString.toLowerCase());
      })
        .sort((a,b) => {
        if (this.sortedBy === this.sortCategories.NAME){
          if(a.product.name.toLowerCase() < b.product.name.toLowerCase()){
            return -1;
          }else if(a.product.name.toLowerCase() > b.product.name.toLowerCase()){
            return 1;
          }
          return 0;
        } else if (this.sortedBy === this.sortCategories.QTY){
          if(a.quantity < b.quantity){
            return -1;
          }else if(a.quantity > b.quantity){
            return 1;
          }
          return 0;
        }
        return 0;
      })
    }
  }
}
</script>

<style scoped>
.inventory{
  min-height: 85vh;
  display: block;
  justify-content: center;
}

.utility-bar{
  padding: 20px;
  display: flex;
  margin-top: 10px;
  max-height: 100px;
  width: fit-content;
  min-width: 600px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0px);
}

.filter-sort-search-button{
  margin-top: 7px;
}

.search-bar{
  max-width: 300px;
  min-width: 200px;
  margin-right: 5px;
  margin-left: 5px;
}

.item-container{
  width: 100vw;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
}

.addItemButtonContainer{
  position: fixed;
  right: 1vw;
  top: 10vh;
  margin-right: 5px;
}

.inventory-item{
  height: fit-content;
  width: 400px;
  margin: 10px;
  z-index: 0;
}
</style>
