<template>
  <v-flex>
    <h1>component1</h1>

    <v-text-field
      label="Regular"
      clearable
      v-model="message"
      solo
      @click:clear="wew"
    />

    <v-btn @click="change">PASMO</v-btn>
  </v-flex>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

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
      ...mapActions('sample', ['CHANGE_CONDITION', 'CHANGE_SAMPLE']),
      change () {
        this.CHANGE_CONDITION(!this.condition)
        console.log('im triggered')
      },
      typing () {
        this.CHANGE_SAMPLE(this.sample)
      },
      wew () {
        this.CHANGE_SAMPLE(null)
      }
    }
  }
</script>
