<template>
  <div>
    <div class="title">
      <h2>Create a session</h2>
    </div>
    <div class="container session">
      <SessionLeft></SessionLeft>
      <SessionContent></SessionContent>
    </div>
</div>
</template>

<script>
import SessionLeft from "./SessionLeft";
import SessionContent from "./SessionContent";

export default {
  name: "CreateSession",
  components: {
    SessionLeft,
    SessionContent,
  },
};
</script>
<style scoped>
.title h1 {
  margin: 0 auto;
  /* border: 1px solid black; */
}
.container.session {
  display: flex;
  justify-content: space-between;
}
</style>
