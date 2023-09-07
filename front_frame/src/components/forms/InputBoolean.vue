<template>
  <div class="container input dropdown">
    <div class="input-label" for="checkbox">
      {{ data.label }}
    </div>
    <div class="input-value">
      <input type="checkbox" id="checkbox" v-model="checked" @change="send">
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBoolean",
  props: ["data", "receive"],
  data() {
    return {
      checked: this.data.value,
    };
  },
  computed: {
  },
  methods: {
    send() {
      let obj = this.data;
      obj.value= this.checked;
      this.receive(obj);
    },
  },
};
</script>

<style scoped>
.container.input {
  width: 200px;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
