<template>
  <div class="products">
    <product-compo-one></product-compo-one>
    <PostCompoOne></PostCompoOne>
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
  }
}
</script>
