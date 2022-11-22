<template>
  <div id="comp-list-one">
    <h1> Posts</h1>
    <div id="mainBody" class="item" v-for="post in posts" :key="post.id">

      <div v-if="post.id"> {{ post.id }}</div>
      <div></div>
      <span class="create_time"> <b>Create time:</b> {{ post.create_time }} </span> <br>
      <span class="images"> <b>Image:</b> {{ post.images }} </span> <br>
      <span class="alt"> <b>Alt:</b> {{ post.alt }} </span> <br>
      <span class="body"> Body:{{ post.body }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCompoOne",
// props: [],
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
#mainBody {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4em;
  margin-right: 4em;
}


</style>