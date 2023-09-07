<template>
  <div class="container input dropdown">
    <div class="input-label">
      {{ data.label }}
    </div>
    <div class="input-value">
      <select v-model="selected" @change="send">
        <option
          v-for="(val, i) in data.options"
          :key="i"
          :value="val"
        >
          {{ val }}
        </option>
      </select>
      <label class="input-required" v-show="data.required">*</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputDropdown",
  props: ["data", "receive"],
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    getSelected(val){
      return val == this.selected ? 1 : 0;
    },
  },
  methods: {
    send() {
      const obj = {
        [this.data.name]: this.selected,
      }
      this.receive(obj);
    },
  },
};
</script>

<style scoped>
.container.input {
  width: 400px;
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
</style>
