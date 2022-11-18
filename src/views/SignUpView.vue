<template>
  <Header></Header>
  <SignUpForm></SignUpForm>
  <Footer></Footer>
</template>

<script>
import SignUpForm from "@/components/SignUpForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "SignUpView",
  components: {Footer, Header, SignUpForm}
}
</script>

<style scoped>

</style>