<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link class="link" to="/about">关于我们</router-link>
  </div>
</template>

<script>
  export default {
    name: "home",
    provide() {
      return {
        ancenstors: this
      }
    }
  };
</script>

<style>
.link {
  display: block;
}
</style>
