<template>
  <div>
    <h1 class="title">March Madness Teams</h1>
    <h2>Pick the Team You Think Will Win!</h2>
    <h3>Click on the Team Logo and the Selected Team will Now Appear on the Home Page.</h3>
    <br><br>
    <TeamCard :teams="teams" />
  </div>
</template>

<script>
import axios from 'axios';
import TeamCard from "../components/TeamCard.vue"
export default {
  name: 'TeamsView',
  data() {
    return {
      teams: [],
    }
  },
  created() {
    this.getTeams();
  },
  methods: {
    async getTeams() {
      try {
        let response = await axios.get("/api/teams");
        this.teams = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    TeamCard
  },
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