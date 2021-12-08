<template>
  <div class="leadertype" v-if="selectedType">
    <transition name="slide-fade" mode="out-in">
      <div :key="url">
        <h1 :style="{ color: selectedType.colour }">{{ url }}</h1>
        <div class="wrapper">
          <div class="description" :style="{ color: selectedType.colour }">
            <prismic-rich-text :field="selectedType.description" />
          </div>
          <div class="image-container">
            <prismic-image
              :field="selectedType.exemplar_image"
              class="prismic-image"
            />
            <br />
            <br />
            <p>
              <i>{{ selectedType.quote }}</i>
            </p>
            <br />
            <br />
            <br />
            <p>
              <b>{{ selectedType.exemplar }}</b>
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      selectedType: null,
      url: this.$route.params.name,
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
      const data = await document.data.types;
      this.findType(data);
    },
    findType(data) {
      const mappedType = data.map((element) => element);
      const type = mappedType.find(
        (element) => this.$prismic.asText(element.name) === decodeURI(this.url)
      );
      this.selectedType = type;
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  },
  watch: {
    $route(newRoute) {
      this.url = newRoute.params.name;
      this.findType(this.data);
    },
  },
};
</script>

<style scoped>
.leadertype {
  position: absolute;
  top: 0;
  padding: 5rem 1rem 0 1rem;
  height: 100vh;
}

h1 {
  text-transform: capitalize;
}

.wrapper {
  padding-top: 2rem;
}

.description {
  text-align: left;
  padding: 5% 5%;
  width: 100%;
  font-weight: bold;
}

.image-container img {
  width: 50%;
}

.image-container {
  padding-bottom: 5%;
}

p {
  line-break: auto;
  max-width: 75ch;
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .leadertype {
    padding: 1rem 0 0 15rem;
    height: 100vh;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .leadertype {
    padding: 2rem 0 0 25rem;
    height: 100vh;
  }

  h1 {
    text-transform: capitalize;
  }

  .wrapper {
    padding-top: 5rem;
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-end;
    justify-content: space-evenly;
  }

  .description {
    text-align: left;
    padding: 5% 3% 0 3%;
    width: 30%;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .image-container img {
    width: 60%;
  }

  p {
    line-break: auto;
    max-width: 75ch;
  }
}
</style>