<template>
  <div class="container content">
    <NavBar></NavBar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "ContentPage",
  components: {
    NavBar,
  },
};
</script>

<style>
.container.content {
  height: 600px;
  background-color: lightblue;
}
</style>