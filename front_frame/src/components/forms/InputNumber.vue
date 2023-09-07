<template>
  <div class="container input dropdown">
    <div class="input-label">
      {{ data.label }}
    </div>
    <div class="input-value">
      <input type="number" v-model="value" :min="data.min" :max="data.max" @change="send">
      <label class="input-required" v-show="data.required">*</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: ["data", "receive"],
  data() {
    return {
      value: this.data.value,
    };
  },
  computed: {
  },
  methods: {
    send() {
      const obj = {
        [this.data.name]: this.value,
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
  display: flex;
  justify-content: space-between;
}
</style>
