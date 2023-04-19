import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default class Product {
  constructor(name, categories, description) {
    this.id = randomIdGenerator();
    this.name = name;
    this._categories = categories;
    this.description = description;
  }

  setName(name){
    if (typeof name != "string"){
      return false;
    } else {
      this.name = name;
      return this.name;
    }
  }

  getCategories(){
    return this._categories;
  }

  productCategoriesString() {
    let categoriesString = "";
    for (let i = 0; i < this._categories.length; i++){
      categoriesString += this._categories[i] + ", ";
    }
    return categoriesString.substring(0, categoriesString.length - 2);
  }

  clearCategories(){
    this._categories = [];
    return this._categories;
  }

  addCategory(category){
    if (typeof category != "string"){
      return false;
    } else {
      this._categories.push(category);
      return this._categories;
    }
  }

  removeCategory(category){
    if (typeof category != "string"){
      return false;
    } else {
      this._categories.splice(this._categories.indexOf(category), 1);
      return this._categories;
    }
  }

  setDescription(description){
    if (typeof description != "string"){
      return false;
    } else {
      this.description = description;
    }
  }
}

