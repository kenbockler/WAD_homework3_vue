<template>
  <div>
    <div v-if="post.images">
      <div class="pictureBodyCard">
        <div class="cardHeader">
          <img class="cardProfilePicture" src="../assets/me.png" alt="Profile picture">
          <p> {{ post.create_time }} </p>
        </div>
        <img class="cardImage" :src="post.images" :alt="post.alt">
        <p class="body"> {{ post.body }} </p>
        <img class="thumbsUp" src="../assets/thumbs-up-regular.svg" alt="Thumbs up image">
      </div>
    </div>
    <div v-else>
      <div class="textBodyCard">
        <div class="cardHeader">
          <img class="cardProfilePicture" src="../assets/me.png" alt="Profile picture">
          <p> {{ post.create_time }} </p>
        </div>
        <div class="textCard">
          <p> {{ post.body }} </p>
        </div>
        <div class="cardFooter">
          <div v-on:click="IncreaseLikes ">
            <img class="thumbsUp" src="../assets/thumbs-up-regular.svg" alt="Thumbs up image">
          </div>
          <div>
            {{ post.likes }} likes
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: ["post"],
  data: function () {
    return {}
  },
  computed: {
    getId() {
      console.log(post.id)
     return post.id;
    },
  },
  methods: {
    IncreaseLikes: function () {
      this.$store.commit("IncreaseLikes", this.getId)
    },
    DecreasePrice: function () {
      this.$store.commit("DecreasePrice")
    }
  }
}
</script>

<style scoped>
.cardProfilePicture {
  height: 100%;
}
.cardHeader {
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-bottom: .5em;
}
.cardHeader>p {
  align-self: center;
}
p {
  text-align: start;
}
.imgContainer+img {
  width: 100%;
  height: auto;
}
.textBodyCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  min-width: 700px;
  padding: 1em;
  font-size: 2em;
  margin-top: .5em;
  background-color: lightgrey;
}

.pictureBodyCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  min-width: 700px;
  padding: 1em;
  font-size: 2em;
  margin-top: .5em;
  background-color: lightgrey;
}

@media (max-width: 650px) {

  .pictureBodyCard {
    max-width: 12em;
    min-width: 12em;
  }

  .textBodyCard {
    max-width: 12em;
    min-width: 12em;
  }

}

.cardFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.thumbsUp {
  width: 60px;
  height: auto;
}
</style>
