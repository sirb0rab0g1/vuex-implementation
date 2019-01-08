<template>
  <v-flex>
  <h1>component2</h1>
  
  output below: <br/>
  
  <v-text-field v-model="message" solo clearable/>

  {{ condition }} < 
  </v-flex>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters('sample', ['condition', 'sample']),
      message: {
        get () {
          return this.sample
        },
        set (value) {
          this.CHANGE_SAMPLE(value)
        }
      }
    },
    methods: {
      ...mapActions('sample', ['CHANGE_SAMPLE'])
    }
  }
</script>
