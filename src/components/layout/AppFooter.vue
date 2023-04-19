<template>
  <v-footer class="bg-primary text-center d-flex flex-column elevation-5 pt-6">

    <div class="pt-0">
      “The more inventory a company has, the less likely they will have what they need.”<br>—Taiichi Ohno
    </div>

    <v-divider></v-divider>
    <br>

    <div>
      {{ new Date().getFullYear() }} — <strong>Samuel Swanson</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
name: "AppFooter"
}
</script>

<style scoped>

</style>
