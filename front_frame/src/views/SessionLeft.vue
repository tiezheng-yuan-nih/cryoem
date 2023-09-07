<template>
  <div class="container session-left">
    <div>
      <button @click="reset">Reset</button>
    </div>
    <div>
      <button @click="start">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionLeft",
  methods: {
    reset() {
      console.log('reset');
    },
    start() {
      console.log('start session');
    },
  },
};
</script>

<style>
.container.session-left {
  width: 10%;
  margin: 5px;
  padding: 20px;
  background-color: lightskyblue;
}
.container.session-left button {
  width: 100px;
  height: 40px;
  margin: 10px;
}
</style>
