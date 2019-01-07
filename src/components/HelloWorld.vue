<template>
<v-container fluid>
  <v-layout row wrap>
    <v-flex lg6 style="border: solid 1px black;">
      <component1/>
    </v-flex>
    <v-flex lg6 style="border: solid 1px black;">
      <component2/>
    </v-flex>
    <v-flex lg6 style="border: solid 1px black;">
      <component3/>
    </v-flex>
  </v-layout>
</v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.avatar-holder {
  margin-top: 20px;
}
</style>
