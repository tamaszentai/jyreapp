<template>
  <div id="app">
    <Nav  :isError="isError" :data="data" @find-type="findType" />
    <content>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    </content>
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
      type: null,
      isError: false
    };
  },
  methods: {
    async getContent() {
      try{
      // Query the API and assign the response to "response"
      const document = await this.$prismic.client.getByUID(
        "leader-types",
        "leaders"
      );
      this.data = await document.data.types;
      } catch (error) {
        this.isError = true;
        this.$router.push({ path: '/error' })
      }
    }, 
    findType(typeName) {
      const mappedType = this.data.map((element) => element);
      const type = mappedType.find(
        (element) => this.$prismic.asText(element.name) === typeName
      );
      this.type = type;
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: 'Oswald', sans-serif;
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


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100vw);
  opacity: 0;
}
</style>
