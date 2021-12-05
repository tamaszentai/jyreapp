<template>
  <div id="app">
    <Nav :data="data" @find-type="findType" />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      data: null,
      type: null
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const document = await this.$prismic.client.getByUID(
        "leader-types",
        "leaders"
      );
      this.data = await document.data.types;
    },
        findType(typeName) {
      const mappedType = this.data.map(element => element);
      const type = mappedType.find(element => this.$prismic.asText(element.name) === typeName)
      this.type = type
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
