<template>
  <MainView />
</template>

<script>
import MainView from "./views/MainView.vue";

export default {
  name: "App",
  components: {
    MainView,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ede7e7;
}
</style>
