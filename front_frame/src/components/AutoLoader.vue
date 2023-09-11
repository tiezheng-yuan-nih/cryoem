<template>
  <div>
    <fieldset>
      <legend>AutoLoader</legend>
      <div class="container autoloader">
        <AutoloaderPosition
          v-for="item in autoloader"
          :key="item.position"
          :data="item"
        ></AutoloaderPosition>
      </div>
      <div class="autoloader-add" @click="addAutolocader">
        <div class="autoloader-add-inner">
          <div id="autoloader-add-sign">+</div>
        </div>
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
.autoloader-add {
  width: 120px;
  height: 120px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.autoloader-add-inner {
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#autoloader-add-sign {
  font-size: 40px;
}
</style>