<template>
  <v-app style="min-height: 100vh; width: 100%; margin: 0; padding: 0;">
    <router-link to="/"></router-link>
    <router-link to="/aboutCompany"></router-link>
    <router-link to="/history"></router-link>
    <router-link to="/products"></router-link>
    <router-link to="/documents"></router-link>
    <router-link to="/contacts"></router-link>
    <router-link to="/basket"></router-link>
    <router-view></router-view>
  </v-app>
</template>

<script>
import '@fontsource/source-sans-pro';

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

#app {
  font-family: 'Source Sans Pro';
}

</style>
