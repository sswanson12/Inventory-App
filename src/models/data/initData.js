import Inventory from "@/models/Inventory";
import InventoryItem from "@/models/InventoryItem";
import Product from "@/models/Product";

// export let daysInMonth = { JANUARY : 31, FEBRUARY : 28, MARCH : 31, APRIL : 30, MAY : 31, JUNE : 30, JULY : 31,
//                     AUGUST : 31, SEPTEMBER : 30, OCTOBER : 31, NOVEMBER : 30, DECEMBER : 31 };

export let productCategories = { AUTOMOTIVE : "Automotive & Motorsports", APPAREL : "Clothing & Apparel", BABY : "Baby",
                          BEAUTY : "Beauty", BOOKS : "Books", PHOTOGRAPHY : "Camera & Photo", MOBILE : "Cell Phones & Accessories",
                          ELECTRONICS : "Electronics", COLLECTIBLE : "Collectibles", ART : "Fine Art", GROCERY : "Grocery & Gourmet Foods",
                          HEALTH : "Health & Personal Care", HOMEANDGARDEN : "Home & Garden", APPLIANCE : "Major Appliances",
                          MUSIC : "Music", INSTRUMENT : "Musical Instruments", OFFICE : "Office", OUTDOORS : "Outdoors",
                          COMPUTER : "Personal Computers", PETSUPPLY : "Pet Supplies", SOFTWARE : "Software", SPORTS : "Sports",
                          HOMEIMPROVEMENT : "Home Improvement", TOOLS : "Tools", TOYSANDGAMES : "Toys & Games",
                          VIDEO : "Video, DVD & Blu-ray", VIDEOGAMES : "Video Games", WATCHES : "Watches" };

export let productCategoriesArray = [ productCategories.AUTOMOTIVE, productCategories.APPAREL, productCategories.BABY,
  productCategories.BEAUTY, productCategories.BOOKS, productCategories.PHOTOGRAPHY, productCategories.MOBILE,
  productCategories.ELECTRONICS, productCategories.COLLECTIBLE, productCategories.ART, productCategories.GROCERY,
  productCategories.HEALTH, productCategories.HOMEANDGARDEN, productCategories.APPLIANCE, productCategories.MUSIC,
  productCategories.INSTRUMENT, productCategories.OFFICE, productCategories.OUTDOORS, productCategories.COMPUTER,
  productCategories.PETSUPPLY, productCategories.SOFTWARE, productCategories.SPORTS, productCategories.HOMEIMPROVEMENT,
  productCategories.TOOLS, productCategories.TOYSANDGAMES, productCategories.VIDEO, productCategories.VIDEOGAMES,
  productCategories.WATCHES,
]

export let inputTypes = { STRING : "string", NUMBER: "number", DROPDOWN: "dropdown" };

export let initialInventory = new Inventory('MainInventory')
  .addItem(new InventoryItem(new Product('Pork Sausage', [productCategories.GROCERY], 'A delightful country pork sausage.'), 28))
  .addItem(new InventoryItem(new Product('Spider-Man: Homecoming', [productCategories.VIDEO], 'The first installment of Spider-man starring Tom Holland'), 4))
  .addItem(new InventoryItem(new Product('Toyo Extensa HP-II Tires', [productCategories.AUTOMOTIVE], 'Best tires in the rain!!'), 13))
  .addItem(new InventoryItem(new Product('Pioneer Car Stereo', [productCategories.AUTOMOTIVE, productCategories.MUSIC], 'Double-din car stereo'), 6))
  .addItem(new InventoryItem(new Product('Californication Record Album', [productCategories.COLLECTIBLE, productCategories.MUSIC], 'Red Hot Chili Pepper\'s seventh studio album, released June 8, 1999'), 3));
