<template>
  <div class=" mulai1">
    <div>
      <Navbar />
      <main>
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Footer from '@/components/navigation/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
  .mulai1{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }
</style>
