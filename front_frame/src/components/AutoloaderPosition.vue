<template>
  <div class="container autoloader-position">
    {{ data.position }}
  </div>
</template>

<script>
export default {
  name: "AutoloaderPosition",
  props: ["data"],
};
</script>

<style>
.container.autoloader-position{
  height: 300px;
  width: 300px;
  border: 1px solid black;
}
</style>