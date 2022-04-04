<template>
  <div class="home">
    <img alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/March_Madness_logo.svg/1200px-March_Madness_logo.svg.png">
    <HomeComponent msg="Welcome to March Maddness Stat Finder"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComponent
  }
}
</script>