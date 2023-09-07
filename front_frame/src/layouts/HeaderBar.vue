<template>
  <div class="container header">
    <div class="container logo">
      <img src="#" />
    </div>
    <div>
      <h1>Analyze Cryo-EM</h1>
    </div>
    <div class="logout">
      <label>User Name: xxxx</label>
      <div><a href="#">Logout</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style scoped>
.container.header {
  height: 100px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
}
.container.logo {
  height: 100px;
  width: 100px;
  border: 1px solid black;
}
.logout {
  margin: 10px;
}
</style>
