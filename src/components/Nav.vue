<template>
  <div>
    <div class="menu-bar">
      <router-link v-if="!isError" :to="'/'"><img :src="logo" class="top-logo" @click="closeMenu"/></router-link>
      <router-link v-if="isError" :to="'/error'"><img :src="logo" class="top-logo" @click="closeMenu"/></router-link>
      <span style="font-size: 30px; cursor: pointer" @click="toggleMenu"
        >&#9776;</span
      >
    </div>
    <div
      :class="isMenuOpen ? 'mobile-nav-active' : 'mobile-nav-hidden'"
      @click="toggleMenu"
    >
      <div v-for="(name, index) in data" :key="index" class="cell">
        <router-link
          :to="'/' + $prismic.asText(name.name)"
          active-class="active"
          exact
          :style="{ color: name.colour }"
          @click.native="findType($prismic.asText(name.name))"
        >
          <prismic-image v-if="name" :field="name.exemplar_image" /><br />{{
            $prismic.asText(name.name)
          }}</router-link
        >
      </div>
    </div>

    <div class="sidebar">
      <router-link v-if="!isError" :to="'/'"><img :src="logo" class="logo" /></router-link>
      <router-link v-if="isError" :to="'/error'"><img :src="logo" class="logo" /></router-link>
      <div v-for="(name, index) in data" :key="index" class="cell">
        <router-link
          :to="'/' + $prismic.asText(name.name)"
          active-class="active"
          exact
          :style="{ color: name.colour }"
          @click.native="findType($prismic.asText(name.name))"
        >
          <prismic-image v-if="name" :field="name.exemplar_image" /><br />{{
            $prismic.asText(name.name)
          }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "isError"],
  data() {
    return {
      logo: require("../assets/jyre-logo-dark.svg"),
      type: null,
      isMenuOpen: false,
    };
  },
  methods: {
    findType(typeName) {
      this.$emit("find-type", typeName);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
};
</script>

<style scoped>
.menu-bar {
  position: absolute;
  width: 100%;
  height: 3.5rem;
  background-color: #dfdfdf;
  z-index: 1000;
  border-bottom: rgb(170, 170, 170) 1px solid;
}
span {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  color: #ed0b6f;
}

.top-logo {
  position: relative;
  width: 30%;
}

img {
  width: 50%;
}

.mobile-nav-hidden {
  width: 0%;
  overflow-x: hidden;
  transition: 0.5s;
}

.mobile-nav-active {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 80%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: scroll;
  text-transform: capitalize;
  /* cursor: pointer; */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 1000;
}

.mobile-nav-active a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.mobile-nav-active a.active {
  background-color: rgb(192, 192, 192);
  color: black !important;
  transition: ease-out 1s;
}

.mobile-nav-active a:hover {
  cursor: pointer;
}
.mobile-nav-active a:hover:not(.active) {
  background-color: rgba(192, 192, 192, 0.2);
  color: white;
}

.sidebar {
  display: none;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 568px) {
  .top-logo {
    position: relative;
    width: 15%;
  }

  .mobile-nav-active {
    padding-top: 0;
    text-align: left;
    width: 40%;
    border-left: 1px solid black;
  }

  .mobile-nav-active a.router-link-active {
    display: none;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .top-logo {
    position: relative;
    width: 13%;
  }

  .mobile-nav-active {
    text-align: center;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .menu-bar {
    display: none;
  }

  .sidebar {
  display: initial;
  position: absolute;
  top:0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 15rem;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: scroll;
  text-transform: capitalize;
  /* cursor: pointer; */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 1000;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: rgb(192, 192, 192);
  color: black !important;
  transition: ease-out 1s;
}

.sidebar a:hover {
  cursor: pointer;
}
.sidebar a:hover:not(.active) {
  background-color: rgba(192, 192, 192, 0.2);
  color: white;
}
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .sidebar {
    width: 25rem;
  }
}
</style>