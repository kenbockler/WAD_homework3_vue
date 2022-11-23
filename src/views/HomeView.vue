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
    <button class="resetButton" v-on:click="NullifyLikes">Reset likes</button>
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
  },
  methods: {
    NullifyLikes: function () {
      this.$store.commit("NullifyLikes")
    }
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
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.side {
  display: flex;
  flex-grow: 1;
  margin-top: .5em;
  background-color: lightgrey;
}

.resetButton {
  width: 20%;
  padding: 5px;
  background-color: aqua;
  border-radius: 20px;
  margin-top: 1em;
  font-size: 1em;
  font-weight: bold;
  align-self: center;
}

@media (max-width: 800px) {
  .side {
    display: none;
  }
  .mainDiv {
    justify-content: center;
  }

  .resetButton {
    min-width: 10em;
  }
}
</style>
