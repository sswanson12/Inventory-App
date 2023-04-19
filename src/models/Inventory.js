import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default class Inventory {
  constructor(name) {
    this.id = randomIdGenerator();
    this._name = name;
    //Designed to hold a list of the InventoryItem class.
    this._storage = [];
  }

  getInventory(){
    return this._storage;
  }

  addItem(inventoryItem){
    //TODO implement validation
    this._storage.push(inventoryItem);
    return this;
  }

  removeItem(inventoryItem){
    console.log('Inventory Level - Removing Item:', inventoryItem)
    //TODO implement validation
    this._storage.splice(this._storage.indexOf(inventoryItem), 1);
    return this;
  }
}


