<template>
  <fieldset class="container input-fieldset">
    <legend>General Parameters (required *)</legend>
    <InputText :data="session_name" :receive="receive"></InputText>
    <InputDropdown :data="group" :receive="receive"></InputDropdown>
    <InputDropdown :data="microscope" :receive="receive"></InputDropdown>
    <InputDropdown :data="detector" :receive="receive"></InputDropdown>
  </fieldset>
</template>

<script>
import { mapState } from "vuex";
import InputText from "./forms/InputText";
import InputDropdown from "./forms/InputDropdown";

export default {
  name: "SessionGeneral",
  components: {
    InputText,
    InputDropdown,
  },
  computed: {
    ...mapState(["session_name", "group", "microscope", "detector"]),
  },
  methods: {
    receive(obj) {
      this.$store.commit("updateNewSession", obj);
      console.log(obj);
    },
  },
};
</script>

<style scoped>
.container.input-fieldset {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>