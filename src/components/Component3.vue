<template>
  <v-flex>
  <h1>component3</h1>

  output below: <br/>

  {{ !condition }} < 
  </v-flex>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters('sample', ['condition'])
    }
  }
</script>
 
