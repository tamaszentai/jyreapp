<template>
  <div>
    <h1>HOME PAGE</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Initialize "response"
      document: null,
      type: null,
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const document = await this.$prismic.client.getByUID(
        "leader-types",
        "leaders"
      );
      this.document = document.data.types;
    },
    findType() {
      const mappedType = this.document.map(element => element);
      const type = mappedType.find(element => this.$prismic.asText(element.name) === decodeURI("the%20Professional"))
      this.type = type
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  },
};
</script>

<style scoped>
</style>