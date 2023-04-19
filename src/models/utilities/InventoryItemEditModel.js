import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default class InventoryItemEditModel {
  constructor(inventoryItem) {
    this.id = randomIdGenerator();
    this.inventoryItem = inventoryItem;
    this.inputtedName = inventoryItem.product.name;
    this.inputtedCategories = [...inventoryItem.product.getCategories()];
    this.inputtedDescription = inventoryItem.product.description;
    this.inputtedQty = inventoryItem.quantity;
  }

  updateItem(){
    this.inventoryItem.product.name = this.inputtedName;
    this.inventoryItem.product.description = this.inputtedDescription;
    this.inventoryItem.quantity = this.inputtedQty;

    this.inventoryItem.product.clearCategories();
    for (let i = 0; i < this.inputtedCategories.length; i++) {
      this.inventoryItem.product.addCategory(this.inputtedCategories[i]);
    }
  }

  clearModel(){
    this.inputtedName = '';
    this.inputtedCategories = [];
    this.inputtedDescription = '';
    this.inputtedQty = null;
  }
}
