<template>
  <div class="product">
    <p class="productName">{{product.name}}</p>
    <p class="productDescription">{{product.description}}</p>
    <p class="productCategories">{{product.productCategoriesString()}}}</p>
  </div>
</template>

<script>
import Product from "@/models/Product";

export default {
  name: "AppProduct",
  props: {
    product: {
      type: Product,
      required: true,
    }
  },
}
</script>

<style scoped>
.product{

}
.productName{

}
.productDescription{

}
.productCategories{

}
</style>
