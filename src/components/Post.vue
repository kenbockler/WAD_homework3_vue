<template>
  <div id="comp-list-one">
    <div v-if="post.images">
      <div class="pictureBodyCard">
        <div class="create_time"> {{ post.create_time }} </div> <br>
        <img class="cardImage" :src="`@/assets/${post.images}`" alt=" {{ post.alt }} ">  <br>
        <div class="alt"> {{ post.images }} </div> <br>
        <div class="body"> {{ post.body }} </div>
      </div>
    </div>
    <div v-else>
      <div class="textBodyCard">
        <div class="create_time"> {{ post.create_time }} </div> <br>
        <div class="images"> {{ post.images }} </div> <br>
        <div class="alt"> {{ post.alt }} </div> <br>
        <div class="body"> {{ post.body }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCompoOne",
  props: ["post"],
  data: function () {
    return {}
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
  }
}
</script>

<style scoped>
.pictureBodyCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  min-width: 700px;
  padding: 1em;
  font-size: 2em;
  background-color: lightgrey;
}

.textBodyCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  min-width: 700px;
  padding: 1em;
  font-size: 2em;
  background-color: lightgrey;
  margin-top: .5em;
}
</style>