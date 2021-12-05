<template>
  <div>
    <h1>{{ url }}</h1>
    <p>{{ selectedType }}</p>
    <prismic-image v-if="selectedType" :field="selectedType.exemplar_image" />
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
    updateURL() {
      this.url = this.$route.params;
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
h1 {
  text-transform: capitalize;
}
</style>