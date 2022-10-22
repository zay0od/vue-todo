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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600&display=swap");

:root {
  --main-bg: #06050b;
  --main-text: #f5cfc4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-family: "Montserrat", sans-serif;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-text);
  background: var(--main-bg);
  width: 100%;
}
</style>
