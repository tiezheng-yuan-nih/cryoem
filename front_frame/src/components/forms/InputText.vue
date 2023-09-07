<template>
  <div class="container input text">
    <div class="input-label">
      {{ data.label }}
    </div>
    <div class="input-value">
      <input tye="text" v-model="val" @keyup="send"/>
      <label class="input-required" v-show="data.required">*</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ["data", "receive"],
  data() {
    return {
      val: this.data.value,
    };
  },
  methods: {
    send() {
      const obj = {
        [this.data.name]: this.val,
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
