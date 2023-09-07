<template>
  <div>
    <fieldset>
      <legend>AutoLoader</legend>
      <div>
        <button @click="addAutolocader">Add</button>
      </div>
      <div class="container autoloader">
        <AutoloaderPosition
          v-for="item in autoloader"
          :key="item.position"
          :data="item"
        ></AutoloaderPosition>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AutoloaderPosition from "./AutoloaderPosition";

export default {
  name: "AutoLoader",
  components: {
    AutoloaderPosition,
  },
  computed: {
    ...mapState(["autoloader"]),
  },
  methods: {
    addAutolocader() {
      this.$store.commit("addAutoloader");
    },
    receive(obj) {
      this.$store.commit("updateNewSession", obj);
      // console.log(obj);
    },
  },
};
</script>

<style scoped>
.container.autoloader {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>