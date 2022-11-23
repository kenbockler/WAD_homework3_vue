<template>
  <div class="mainContainer">
    <div class="mainDiv">
      <div class="side"></div>
      <div id="mainBody">
        <div v-for="post in posts" :key="post.id">
          <post-component :post="post"></post-component>
        </div>
      </div>
      <div class="side"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import PostComponent from "@/components/Post";
import Footer from "@/components/Footer";

export default {
  name: 'HomeView',
  components: {
    Header,
    PostComponent,
    Footer,
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: monospace;
  border-radius: 5px;
}

body {
  line-height: 1.6;
  margin: 0;
}

.mainContainer {
  display: flex;
  flex-flow: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 1em;
}

.mainDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 2;
}

#mainBody {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4em;
  margin-right: 4em;
}

.side {
  display: flex;
  flex-grow: 1;
  margin-top: .5em;
  background-color: lightgrey;
}

</style>
