<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <teng-input label="hello"></teng-input>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TengInput from "@/components/input.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    TengInput,
  },
};
</script>
