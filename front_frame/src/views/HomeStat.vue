<template>
  <div class="container home-stat">
    <SessionStatus></SessionStatus>
  </div>
</template>

<script>
import SessionStatus from "./home/SessionStatus.vue"

export default {
  name: "HomeStat",
  components: {
    SessionStatus,
  },
};
</script>

<style>
.container.home-stat{
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
