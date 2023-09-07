<template>
  <div>
    <fieldset class="container input-fieldset">
      <legend>Collection Parameters</legend>
      <InputNumber :data="atlas_x" :receive="receive"></InputNumber>
      <InputNumber :data="atlas_y" :receive="receive"></InputNumber>
      <InputNumber :data="squares_num" :receive="receive"></InputNumber>
      <InputNumber :data="square_holes" :receive="receive"></InputNumber>
      <InputNumber :data="bis_max_dist" :receive="receive"></InputNumber>
      <InputNumber :data="bis_min_group_size" :receive="receive"></InputNumber>
      <InputNumber :data="target_defocus_min" :receive="receive"></InputNumber>
      <InputNumber :data="target_defocus_max" :receive="receive"></InputNumber>
      <InputNumber :data="step_defocus" :receive="receive"></InputNumber>
      <InputNumber :data="drift_crit" :receive="receive"></InputNumber>
      <InputNumber :data="tilt_angle" :receive="receive"></InputNumber>
      <InputBoolean :data="afis" :receive="receive"></InputBoolean>
      <InputBoolean :data="save_frames" :receive="receive"></InputBoolean>
      <InputBoolean :data="force_process" :receive="receive"></InputBoolean>
      <InputBoolean :data="offset_targeting" :receive="receive"></InputBoolean>
      <InputNumber :data="offset_dist" :receive="receive"></InputNumber>
      <InputNumber :data="zeroloss_delay" :receive="receive"></InputNumber>
      <InputNumber :data="dark_delay" :receive="receive"></InputNumber>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputNumber from "./forms/InputNumber";
import InputBoolean from "./forms/InputBoolean";

export default {
  name: "CollectionParams",
  components: {
    InputNumber,
    InputBoolean,
  },
  computed: {
    ...mapState([
      "atlas_x",
      "atlas_y",
      "squares_num",
      "square_holes",
      "bis_max_dist",
      "bis_min_group_size",
      "target_defocus_min",
      "target_defocus_max",
      "step_defocus",
      "drift_crit",
      "tilt_angle",
      "afis",
      "save_frames",
      "force_process",
      "offset_targeting",
      "offset_dist",
      "zeroloss_delay",
      "dark_delay",
    ]),
  },
  methods: {
    receive(obj) {
      this.$store.commit("updateNewSession", obj);
      console.log(obj);
    },
  },
};
</script>

<style>
.container.input-fieldset {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>