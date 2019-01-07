<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Pasmo'
    }
  },
  name: 'App'
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
