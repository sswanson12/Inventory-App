import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default class InventoryItem {
  constructor(product, quantity) {
    this.id = randomIdGenerator();
    this.type = 'inventoryItem'
    this.product = product;
    this.quantity = quantity;
  }

  setQuantity(quantity){
    if (isNaN(quantity)){
      return false;
    } else {
      this.quantity = quantity;
      return this.quantity;
    }
  }

  addQuantity(quantity){
    if (isNaN(quantity)){
      return false;
    } else {
      this.quantity += quantity;
      return this.quantity;
    }
  }

  removeQuantity(quantity){
    if (isNaN(quantity)){
      return false;
    } else {
      this.quantity -= quantity;
      return this.quantity;
    }
  }
}
