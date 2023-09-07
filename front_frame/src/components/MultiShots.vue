<template>
  <div>
    <fieldset class="container input-fieldset">
      <legend>Collection Parameters</legend>
      <InputText :data="multishot_per_hole_id" :receive="receive"></InputText>
      <InputBoolean :data="multishot_per_hole" :receive="receive"></InputBoolean>
      <div class="container multishot" v-show="editMultishot">
        <InputNumber :data="detect_size_x" :receive="receive"></InputNumber>
        <InputNumber :data="detect_size_y" :receive="receive"></InputNumber>
        <InputNumber :data="pixel_size" :receive="receive"></InputNumber>
        <InputNumber :data="beam_size" :receive="receive"></InputNumber>
        <InputNumber :data="hole_size" :receive="receive"></InputNumber>
        <InputNumber :data="max_shots" :receive="receive"></InputNumber>
        <InputNumber :data="min_field_view" :receive="receive"></InputNumber>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputNumber from "./forms/InputNumber";
import InputText from "./forms/InputText";
import InputBoolean from "./forms/InputBoolean";

export default {
  name: "MultiShots",
  components: {
    InputNumber,
    InputText,
    InputBoolean,
  },
  data() {
    return {
      can_edit: true,
    };
  },
  computed: {
    ...mapState([
      "multishot_per_hole_id",
      "multishot_per_hole",
      "detect_size_x",
      "detect_size_y",
      "pixel_size",
      "beam_size",
      "hole_size",
      "max_shots",
      "min_field_view",
    ]),
    editMultishot() {
      return this.multishot_per_hole.value;
    },
  },
  methods: {
    receive(obj) {
      this.$store.commit("updateNewSession", obj);
      // console.log(this.multishot_per_hole.value);
    },
  },
};
</script>

<style>
.container.multishot {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>