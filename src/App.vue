<template>
  <main class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <LearningReactivity></LearningReactivity> -->
    <LearningProps />
  </main>
</template>

<script>
// import LearningReactivity from "./components/LearningReactivity.vue";
import LearningProps from "./components/LearningProps.vue";
export default {
  name: "App",
  components: {
    // LearningReactivity,
    LearningProps,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
