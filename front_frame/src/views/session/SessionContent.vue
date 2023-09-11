<template>
  <div class="container session-content">
    Enter parameters required for a new session:
    <AutoLoader></AutoLoader>
    <SessionGeneral></SessionGeneral>
    <CollectionParams></CollectionParams>
    <MultiShots></MultiShots>
    
  </div>
</template>

<script>
import SessionGeneral from "../../components/SessionGeneral";
import CollectionParams from "../../components/CollectionParams";
import MultiShots from "../../components/MultiShots";
import AutoLoader from "../../components/AutoLoader";

export default {
  name: "SessionContent",
  components: {
    SessionGeneral,
    CollectionParams,
    MultiShots,
    AutoLoader,
  },
};
</script>

<style>
.container.session-content {
  width: 80%;
  margin: 10px;
  background-color: white;
}
</style>
