<template>
  <div class="browse-container">
    <BrowseLeft></BrowseLeft>
    <BrowseContent></BrowseContent>
  </div>
</template>

<script>
import BrowseLeft from "./browse/BrowseLeft";
import BrowseContent from "./browse/BrowseContent";

export default {
  name: "AutoScreening",
  components: {
    BrowseLeft,
    BrowseContent,
  },
};
</script>

<style>
.browse-container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
