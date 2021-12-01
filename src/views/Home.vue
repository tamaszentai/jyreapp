<template>
  <div>
    <div v-for="(item,index) in response" :key="index"> 
      <ul>
        <p v-for="(name, index) in item.name" :key="index">
           <router-link :to="'/' + name.text">{{name.text}}</router-link>
          </p>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // Initialize "response"
      response: null
    }
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.getByUID('leader-types', 'leaders')
      this.response = response.data.types
    }
  },
  created() {
    // Call the API query method
    this.getContent()
  }
}
</script>
