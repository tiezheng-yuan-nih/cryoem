<template>
  <div class="container autoloader-position">
    <div class="position-header">
      <div class="position-name">
        <input type="text" v-model="position_name" placeholder="Name">
      </div>
      <div>
        <button @click="deletePosition">X</button>
      </div>
    </div>
    <div class="autoloader-input">
      <InputNumber :data="hole_position" :receiv="receive"></InputNumber>
      <InputDropdown :data="hole_type" :receiv="receive"></InputDropdown>
      <InputDropdown :data="mesh_size" :receiv="receive"></InputDropdown>
      <InputDropdown :data="mesh_material" :receiv="receive"></InputDropdown>
      <InputDropdown :data="hole_protocol" :receiv="receive"></InputDropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputDropdown from "./forms/InputDropdown";
import InputNumber from "./forms/InputNumber";

export default {
  name: "AutoloaderPosition",
  components: {
    InputNumber,
    InputDropdown,
  },
  data() {
    return {
      "position_name": "",
      "hole_position": {
        "name": "hole_position",
        "label": "Position",
        "value": this.data.position,
      }
    }
  },  
  props: ["data"],
  computed: {
    ...mapState([
      "hole_type",
      "mesh_size",
      "mesh_material",
      "hole_protocol",
    ]),
  },
  methods: {
    receive(obj) {
      this.$store.commit("updateNewSession", obj);
      console.log(obj);
    },
    deletePosition() {
      this.$store.commit("deleteAutoloader", this.data.position)
    },
  },
};
</script>

<style>
.container.autoloader-position{
  height: 260px;
  width: 330px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
}
.position-header {
  display: flex;
  justify-content: space-between;

}
</style>