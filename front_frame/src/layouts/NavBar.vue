<template>
  <div class="container nav">
    <div class="left">
      <div class="title">Applications</div>
    </div>
    <div class="right">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/session">Create Session</router-link>
        </li>
        <li>
          <router-link to="/autoscreening">Autoscreening</router-link>
        </li>
        <li>
          <router-link to="/processing">Process Data</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.container.nav {
  height: 60px;
  background-color: lightcyan;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}
.container.nav .left {
  height: 60px;
  width: 120px;
  color: white;
  background-color: green;
}
.container.nav .title {
  line-height: 60px;
  margin: 0 auto;
}
.container.nav .right{
  margin: 10px;
}
li {
  display: inline;
  margin-left: 10px;
  padding-right: 10px;
  border-right: 1px solid black;
}
li:last-child {
  border: 0;
}
</style>
