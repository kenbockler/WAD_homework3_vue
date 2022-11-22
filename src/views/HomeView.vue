<template>
  <div class="products">
    <product-compo-one></product-compo-one>


    <h1> Posts</h1>
    <div id="mainBody" class="item" v-for="post in posts" :key="post.id">
      <post-compo-one :post="post"></post-compo-one>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import PostCompoOne from "@/components/Post";
import Footer from "@/components/Footer";

export default {
  name: 'HomeView',
  components: {
    Footer,
    PostCompoOne,
    Header,
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
  }
}
</script>

<style scoped>
#mainBody {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4em;
  margin-right: 4em;
}

</style>