<template>
  <div style="display: flex">
    <MenuComponent></MenuComponent>
    <RouterView />
  </div>
</template>

<script>
import MenuComponent from "@/components/aside.vue";
export default {
  name: "MainLayout", // Rename the component
  components: {
    MenuComponent,
  },
};
</script>

<style></style>
