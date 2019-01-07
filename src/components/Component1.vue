<template>
  <v-flex>
    <h1>component1</h1>

    <v-btn @click="change">PASMO</v-btn>
  </v-flex>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters('sample', ['condition']) // false
    },
    methods: {
      ...mapActions('sample', ['CHANGE_CONDITION']),
      change () {
        this.CHANGE_CONDITION(!this.condition)
        console.log('im triggered')
      }
    }
  }
</script>
