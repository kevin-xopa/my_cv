<template>
  <MyCv />
</template>

<script>
export default {
  name: "Home",
  components: {
    MyCv: () =>
      import(/* webpackChunkName: "VerticalNavMenu"*/ "@/components/MyCv.vue"),
  },
};
</script>
