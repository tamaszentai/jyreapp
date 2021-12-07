<template>
  <div class="home">
    <h1>What type of leader do you have the potential to be?</h1>
    <div class="image-container">
      <img :src="hero" class="hero" />
    </div>
    <div class="info">
      <h2>The Jyre 9 Leader Types</h2>
      <div class="content">
      <p>
        What are your strengths? What about your weaknesses, or “gaps”? And how
        does the unique pattern of these create your distinct style of
        leadership?
      </p>
      <p>
        Each of the nine Jyre leader types has a unique way of leading and
        inspiring those around them. The below explanations can help you decide
        your aspirational leader types.
      </p>
      <p>
        Got five minutes? By mapping your strengths in Jyre, you’ll instantly
        recieve a report with your two top leader types and much more.
        <a href="https://jyre.io/contact-us"
          >Get in touch for a 14 day free trial</a
        >.
      </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: require("../assets/innovator-multi.png"),
    };
  },
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  padding: 5rem 0 0 1rem;
  height: 100vh;
}

.image-container {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.image-container img {
  width: 100%;
}

h2 {
  text-align: left;
  margin: 2rem;
}

.content {
  padding-bottom: 2rem;
}

p {
  text-align: left;
  font-weight: bold;
}

a {
  color: #ed0b6f;
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    .home {
    padding: 1rem 0 2rem 15rem;
    height: 100vh;
  }

  .image-container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .image-container img {
    width: 100%;
  }

  h2 {
    margin-top: 10rem;
  text-align: left;
  
}

p {
  margin: 1rem;
  text-align: left;
  font-weight: bold;
}
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .home {
    padding: 2rem 0 2rem 35rem;
    height: 100vh;
  }

  .image-container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .image-container img {
    width: 60%;
  }

  h2 {
    text-align: left;
    margin: 2rem;
  }

  p {
    padding-bottom: 1rem;

  }

  a {
    color: #ed0b6f;
  }
}
</style>