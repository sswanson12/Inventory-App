import InventoryItem from "@/models/InventoryItem";
import Product from "@/models/Product";

export default function noArgsInventoryItemFactory(){
  return new InventoryItem(new Product('', [], ''), null);
}
