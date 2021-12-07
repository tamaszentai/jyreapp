<template>
  <div class="error">
    <img :src="error" />
    <h1>An error occured, try again later!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: require("../assets/error.png"),
    };
  },
};
</script>

<style scoped>
.error {
  position: absolute;
  top: 0;
  padding: 5rem 1rem 0 1rem;
  height: 100vh;
}

img {
  margin-top: 40%;
  width: 50%;
}

h1 {
  color: salmon;
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .error {
    padding: 1rem 0 2rem 15rem;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .error {
    padding: 2rem 0 2rem 30rem;
  }
}
</style>