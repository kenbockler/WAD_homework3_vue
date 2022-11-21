<template>
  <p>Main page</p>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'HomeView',
  components: {
    Footer,
    Header,
  }
}
</script>
