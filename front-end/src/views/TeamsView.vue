<template>
  <div>
    <h1 class="title">Top 12 March Madness Teams</h1>
    <h2>Pick the Team You Think Will Win!</h2>
    <h3>Click on the team logo and the selected team will appear now on the homepage</h3>
    <br><br>
    <TeamCard :teams="teams" />
  </div>
</template>

<script>
import TeamCard from "../components/TeamCard.vue"
export default {
  name: 'TeamsView',
  components: {
    TeamCard
  },
  computed: {
    teams() {
      return this.$root.$data.teams;
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
.description {
  text-align: center;
}
</style>