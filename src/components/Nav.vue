<template>
  <div>
      <div><router-link :to="'/'"><img :src="logo" /></router-link> 9 Leader Types</div>
      <ul>
        <li v-for="(name, index) in data" :key="index" class="hello">
      <router-link :to="'/' + $prismic.asText(name.name)" @click.native="findType($prismic.asText(name.name))">{{
        $prismic.asText(name.name)
      }}</router-link>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: [
        'data'
    ],
 data() {
     return {
         logo: require('../assets/jyre-logo-dark.svg'),
         type: null
     }
 },
 methods: {
        findType(typeName) {
      this.$emit('find-type', typeName)
    },
 }
};
</script>

<style scoped>
img {
    width: 10%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  text-transform: capitalize;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>